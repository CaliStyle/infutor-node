# Infutor SDK

[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Strongly typed Node SDK for Inftor's IDMAX

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

[npm-image]: https://img.shields.io/npm/v/@calistyle/infutor-node.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@calistyle/infutor-node
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/infutor-node/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/infutor-node/tree/master
[daviddm-image]: http://img.shields.io/david/CaliStyle/infutor-node.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/infutor-node
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/CaliStyle/infutor-node.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/CaliStyle/infutor-node/coverage
