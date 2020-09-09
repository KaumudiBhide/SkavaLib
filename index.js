var axios = require('axios');
var data = JSON.stringify({"identity":"pete.smith@skava.com","password":"Skava@123"});

var config = {
  method: 'post',
  url: 'https://stratus.skavacommerce.com/orchestrationservices/storefront/customers/login?locale=en_US&storeId=885',
  headers: { 
    'Content-Type': 'application/json', 
    'x-api-key': 'DVapc08KzR7FbeLXnZFbi7qZ8gawzcEz1kMqPkBy'
  },
  data : data
};


var SkavaUtils = {

  // skava login function
  userLogin: function() {
      var message = 'Login to Skava Cloud DB!';
      console.log(message);
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      return message;
  },
  
  // skava get profile function
  userGetProfile: function() {
      let message = 'Retrieved user profile from Skava Cloud DB!';
      console.log(message);
      return message;
  },

  // skava logout function
  userLogout: function() {
      let message = 'Logout from Skava Cloud DB!';
      console.log(message);
      return message;
  }
}

export { SkavaUtils };
