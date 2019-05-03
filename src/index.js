'use strict';

module.exports = {
  /**
   * Try to parse the JSON body string.
   *
   * @param {String} body - JSON string
   */
  json(body) {
    try {
      const json = JSON.parse(body);
      return json;
    } catch (err) {
      const error = new Error('Request body must be valid JSON');
      error.statusCode = 400;
      throw error;
    }
  }
};
