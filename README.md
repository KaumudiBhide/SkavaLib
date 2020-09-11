# SkavaLib
Skava Library SDK

### skava-lib
## Skava-Lib is a JavaScript library for connecting to Skava Cloud using REST API End Points

### Example Usage in React-Native
```javascript 
import { SkavaUtils, SkavaResponse, SkavaError }  from 'skava-lib';
```

Invoke login method to login to cloud database
```javascript 
let message = SkavaUtils.userLogin(username, password);
```

Invoke get profile method to retrieve use profile
```javascript 
let message = SkavaUtils.userGetProfile();
```

Invoke logout method to logout of cloud databse
```javascript 
let message = SkavaUtils.userLogout();
```

Invoke product search by barcode method to search catalog for a particular item
```javascript 
let message = SkavaUtils.searchProductByBarcode(barcode);
```

Retrieve server response
```javascript 
let res = JSON.stringify(SkavaResponse.data);
console.log("Skava Response: " + res);
```

Retrieve server error
```javascript 
let err = JSON.stringify(SkavaError.message)
console.log("Skava Error: " + err);
```

## Keywords
### skava-lib
