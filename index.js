var axios = require('axios');
var FormData = require('form-data');
var logoutData = new FormData();

// config constants
const API_DOMAIN = 'https://stratus.skavacommerce.com/orchestrationservices/storefront/';
const API_KEY = 'DVapc08KzR7FbeLXnZFbi7qZ8gawzcEz1kMqPkBy';
const STORE_ID = '885';
const LOCALE = 'en_US';

// config variable
var config = {
  method: '',
  url: '',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  },
  data : ''
};

// response data
var SkavaResponse = {};
// error data
var SkavaError = {};

var SkavaUtils = {
  // skava login function
  userLogin: function(username, password) {
      var message = 'Skava-Lib: Loginng in to Skava Cloud DB...';
      console.log(message);
      // config URL
      var APIEndPoint = API_DOMAIN + "customers/login" + "?locale=" + LOCALE + "&storeId=" + STORE_ID;
      console.log(APIEndPoint);
      config.url = APIEndPoint;
      // config method
      config.method = 'post';
      // config data
      var loginData = { "identity": username, "password": password };
      config.data = JSON.stringify(loginData);
      console.log(config);
      // server call
      this.axiosLoginCall(config);
      return message;
  },
  
  // skava get profile function
  userGetProfile: function() {
      var message = 'Skava-Lib: Retrieving user profile from Skava Cloud DB...';
      console.log(message);
      // config URL
      var APIEndPoint = API_DOMAIN + "customers" + "?locale=" + LOCALE + "&storeId=" + STORE_ID;
      console.log(APIEndPoint);
      config.url = APIEndPoint;
      // config method
      config.method = 'get';
      console.log(JSON.stringify(config));
      // server call
      this.axiosCall(config);
      return message;
  },

  // skava barcode search
  searchProductByBarcode: function(barcode) {
      var message = 'Skava-Lib: Searching Barcode in Skava Cloud DB...';
      console.log(message);
      // config URL
      var APIEndPoint = API_DOMAIN + "catalogs/search" + "?locale=" + LOCALE + "&storeId=" + STORE_ID
                        + "&searchTerm=" + barcode + "&page=1&size=10";
      console.log(APIEndPoint);
      config.url = APIEndPoint;
      // add headers
      config.headers['x-version'] = '8.7.0';
      console.log(JSON.stringify(config.headers));
      // config method
      config.method = 'get';
      // server call
      this.axiosCall(config);
      return message;
  },

  // skava logout function
  userLogout: function() {
      var message = 'Skava-Lib: Loggin out from Skava Cloud DB...';
      console.log(message);
      // config URL
      var APIEndPoint = API_DOMAIN + "customers/logout" + "?locale=" + LOCALE + "&storeId=" + STORE_ID;
      console.log(APIEndPoint);
      config.url = APIEndPoint;
      // config method
      config.method = 'delete';
      // config data
      config.data = logoutData;
      // server call
      this.axiosCall(config);
      return message;
  },

  // server call for subsequent API End Points after initial Login
  axiosCall: function(config){
    // clear response variable
    SkavaResponse = {};
    // clear error variable
    SkavaError = {};
    // call to server
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        SkavaResponse = response;
      })
      .catch(function (error) {
        console.log(error);
        SkavaError = error;
      })
  },

  // server call for Skava Login End Point and retreiving session ID
  axiosLoginCall: function(config){
    // clear response variable
    SkavaResponse = {};
    // clear error variable
    SkavaError = {};
    // call to server
      axios(config)
      .then(function (response) {
        // clear unrequired config params
        delete config.headers['Content-Type'];
        delete config.data;
        // configure headers for subsequent calls
        config.headers['Cookie'] = 'x-sk-signed-user='+ response.headers['x-sk-signed-user'] + "; "
                                    + 'x-sk-refresh-id='+ response.headers['x-sk-refresh-id'] +  "; "
                                    + 'x-sk-session-id=' + response.data.sessionId +  "; ";
        console.log("Config headers");
        console.log(JSON.stringify(config.headers));
        SkavaResponse = response;
      })
      .catch(function (error) {
        console.log(error);
        SkavaError = error;
      })
  }
}

export { SkavaUtils, SkavaResponse, SkavaError };
