# SkavaLib
Skava Library SDK

### skava-lib
## Skava-Lib is a JavaScript library for connecting to Skava Cloud using REST API End Points

### Example Usage in React-Native
> import { SkavaUtils, SkavaResponse, SkavaError }  from 'skava-lib';

#### invoke skava login
> let message = SkavaUtils.userLogin(username, password);

#### invoke skava get profile
> let message = SkavaUtils.userGetProfile();

#### invoke skava logout
> let message = SkavaUtils.userLogout();

#### invoke skava product search by barcode
> let message = SkavaUtils.searchProductByBarcode(barcode);

#### retrieve server response
> let res = JSON.stringify(SkavaResponse.data);
> console.log("Skava Response: " + res);

#### retrieve server error
> let err = JSON.stringify(SkavaError.message)
> console.log("Skava Error: " + err);

## Keywords
### skava-lib
