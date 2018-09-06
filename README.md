# NMI SDK

[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Strongly typed Node SDK for Networking Merchants Inc's (NMI) Three Step Redirect API, Query API, and Direct API

# Installation
```
npm install @calistyle/nmi
```

# Documentation

[Module documentation](https://github.com/calistyle/nmi/docs.md)

[NMI Three Step Redirect API docs](https://secure.networkmerchants.com/gw/merchants/resources/integration/integration_portal.php#3step_methodology)

# Notes

All attribute names received from NMI will be converted to `camelCase` for uniformity. Attribute names sent to NMI will be converted to the appropriate `hypen-case` and `param_case` where appropriate. Additionally, some fields are aliased (e.g, `postalCode` => `postal`) to provide consistent access between the Three Step and Query APIs. 

You can disable this completely by specifying `transform: false` in the configuration options.

Dispatched XML is generated by [xmlbuilder](https://github.com/oozcitak/xmlbuilder-js/wiki/Conversion-From-Object).

# Usage

## Setup
```js
const NMI = require('@calistyle/nmi').NMI
const nmi = new NMI()

nmi.configure({
  apiKey: 'your-key-here',
  username: 'your-username',
  password: 'your-password'
});
```

## Transaction
```js
// create a sale
nmi.transaction.create('sale', {
  amount: 2.99,
  redirectUrl: 'http://127.0.0.1/example',
  billing: {
    firstName: 'John',
    lastName: 'Doe'
  }
});

// execute a token
nmi.transaction.execute('the-token');
```

## Handling Errors
```js
try {
  let txn = await nmi.transaction.execute('<some-token>');

  // success!

}
catch(err) {

  if (err.isNMI) {
    // payment or gateway error - see err.response
  }
  else {
    // connection or outside error
  }

}
```

[npm-image]: https://img.shields.io/npm/v/@calistyle/nmi.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@calistyle/nmi
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/nmi/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/nmi/tree/master
[daviddm-image]: http://img.shields.io/david/CaliStyle/nmi.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/nmi
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/CaliStyle/nmi.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/CaliStyle/nmi/coverage
