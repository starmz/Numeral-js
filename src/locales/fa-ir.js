// numeral.js locale configuration
// locale : Persian Iran
// author : Star : https://github.com/starmz/

(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../numeral'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('../numeral'));
  } else {
    factory(global.numeral);
  }
}(this, function (numeral) {
  numeral.register('locale', 'fa-ir', {
    delimiters: {
      thousands: ',',
      decimal: '/'
    },
    abbreviations: {
      thousand: 'هزار',
      million: 'میلیون',
      billion: 'میلیارد',
      trillion: 'تیلیارد'
    },
    ordinal: function (number) {
      return 'ام'
    },
    currency: {
      symbol: 'ریال'
    }
  })
}))
