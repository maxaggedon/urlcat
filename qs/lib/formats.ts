'use strict';

// @ts-nocheck

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = require('./utils');

export default RFC3986;

export const formatters = {
  RFC1738: function (value) {
      return replace.call(value, percentTwenties, '+');
  },
  RFC3986: function (value) {
      return String(value);
  }
};

export const RFC1738 = 'RFC1738';
export const RFC3986 = 'RFC3986';
