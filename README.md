# NMI SDK

[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Strongly typed Node SDK for Networking Merchants Inc's (NMI) Three Step Redirect API, Query API, and Direct API

# Installation
```
npm install @calistyle/infutor
```

# Documentation

[Module documentation](https://github.com/calistyle/infutor/docs.md)

# Usage

## Setup
```js
const Infutor = require('@calistyle/infutor').Infutor
const infutor = new Infutor()

infutor.configure({
  login: 'your-username',
  password: 'your-password'
});
```

## Customer
```js
// retrieve a customer
nmi.customer.get({
  fname: 'John',
  lname: 'Smith',
  phone: '1234567890'
})
```

## Handling Errors
```js
try {
  let customer = await infutor.customer.get('<customer_obj>');

  // success!

}
catch(err) {

  if (err.isInfutor) {
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
