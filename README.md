# Lambda body parser

AWS Lambda APIG proxy integration helper to parse an HTTP request body.

- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Examples](#examples)
- [Publish](#publish)

## Installation

```
npm i @mooncake-dev/lambda-body-parser
```

## API

The module exposes the following methods:

### json(body)

**Parameters:**

| Name | Required | Type   | Description                  |
| ---- | -------- | ------ | ---------------------------- |
| body | Yes      | String | The JSON string to be parsed |

**Returns:**

Parsed JSON Object.

## Usage

```js
const bodyParser = require('@mooncake-dev/lambda-body-parser');
bodyParser.json('{"hello": "world"}');
```

## Examples

```js
'use strict';

const bodyParser = require('@mooncake-dev/lambda-body-parser');

/**
 * Lambda APIG proxy integration.
 *
 * @param {Object} event - HTTP input
 *
 * @return {Object} HTTP output
 */
module.exports.sendData = async event => {
  try {
    const body = bodyParser.json(event.body);
  } catch (err) {
    console.log('error: ', err); // eslint-disable-line no-console
  }
};
```

## Publish

For now we publish manually using:

```
npm publish --access public
```

Make sure:

- You increment the npm version after you make code changes with `npm version`.
- You're logged in.

More information can be found [here](https://docs.npmjs.com/creating-and-publishing-an-org-scoped-package).
