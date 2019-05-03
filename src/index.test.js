'use strict';

const bodyParser = require('./');

const INVALID = '{ "hello: , }';
const VALID = '{ "hello": "world" }';

describe('bodyParser.json(?body)', () => {
  test('throws with invalid JSON', () => {
    expect(() => {
      bodyParser.json(INVALID);
    }).toThrow(/^Request body must be valid JSON$/);
  });

  test('Error.statusCode === 400', () => {
    try {
      bodyParser.json(INVALID);
    } catch (err) {
      expect(err.statusCode).toEqual(400);
    }
  });

  test('parses valid JSON', () => {
    const json = bodyParser.json(VALID);
    expect(json).toEqual({ hello: 'world' });
  });
});
