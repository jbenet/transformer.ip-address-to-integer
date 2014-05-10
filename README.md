# transformer.ip-address-to-integer

[Transformer](http://github.com/jbenet/transformer) conversion: ip-address to integer

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo '127.0.0.1' | transform ip-address integer number
2130706433
```

### Javascript

```js
var transformer = require('dat-transformer');
var tIpAddressToInteger = transformer('ip-address', 'integer');
tIpAddressToInteger('127.0.0.1'); // '2130706433'
```
