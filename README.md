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
