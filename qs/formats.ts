/* eslint-disable */

const replace = String.prototype.replace;
const percentTwenties = /%20/g;

export default 'RFC3986';

export const formatters = {
  RFC1738: (value: string) => replace.call(value, percentTwenties, '+' as any),
  RFC3986: (value: string) => value
};

export const RFC1738 = 'RFC1738';
export const RFC3986 = 'RFC3986';
