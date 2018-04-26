# eos-jssdk
JS SDK for [EOS](https://github.com/EOSIO/eos)
## Usage
```javascript
import EOS from 'eos-jssdk';

const config = {
  httpEndpoint: 'http://127.0.0.1:8888'
};
const eos =  EOS.create(config);
eos.getAccount({ account_name: 'eosio' }).then(account => console.log(account));
```
## API
### getAccount(account_name)
Retrieve an account from the blockchain
```javascript
// use expanded params
eos.getAccount('eosio');
// use object param
eos.getAccount({ account_name: 'eosio' });
```
### getCode(account_name)
Retrieve the code and ABI for an account
```javascript
// use expanded params
eos.getCode('eosio');
// use object param
eos.getCode({ account_name: 'eosio' });
```
### getCurrencyStats(code, symbol)
Retrieve the stats of for a given currency
```javascript
eos.getCurrencyStats('eosio.token', 'EOS');
```
### getCurrencyBalance(code, account, [symbol])
Retrieve the balance of an account for a given currency

**Get All Symbols**
```javascript
eos.getCurrencyBalance('eosio.token', 'eosio');
```
return
```
[
    "1000000000.0000 EOS",
    "1000000000.0000 MORE"
]
```
**Specify symbol**
```javascript
eos.getCurrencyBalance('eosio.token', 'eosio', 'EOS');
//or
eos.getCurrencyBalance({ code: 'eosio.token', account: 'eosio', symbol: 'EOS' });
```
return
```
[
    "1000000000.0000 EOS"
]
```

### getInfo()
Get current blockchain information
```javascript
eos.getInfo();
```
### getBlock(block_num_or_id)
Retrieve a full block from the blockchain
```javascript
// get block by block id
eos.getBlock('000000028c06df8874cd2b481fa3fd8bd56d83122f9bdd48b836b9731227d53a');
// get block by block num
eos.getBlock(2);
// use object param
eos.getBlock({ block_num_or_id: 2 });
```
