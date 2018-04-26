# eos-jssdk
JS SDK for [EOS](https://github.com/EOSIO/eos)
## USE
```javascript
import EOS from 'eos-jssdk';

const eos =  EOS.create();
eos.getAccount({ account_name: 'eosio' }).then(account => console.log(account));
```
