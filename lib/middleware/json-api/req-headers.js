'use strict';

var isEmpty = require('lodash').isEmpty;

module.exports = {
  name: 'HEADER',
  req: function req(payload) {
    if (!isEmpty(payload.jsonApi.headers)) {
      payload.req.headers = Object.assign({}, payload.req.headers, payload.jsonApi.headers);
    }
    return payload;
  }
};