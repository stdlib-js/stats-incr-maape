// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,e;n=this,e=function(){"use strict";function n(n){return Math.abs(n)}var e=Number.POSITIVE_INFINITY,t=1.5707963267948966,r=Number.NEGATIVE_INFINITY,u=6123233995736766e-32;function o(n){var o,f,i,c;return function(n){return n!=n}(n)||0===n?n:n===e?t:n===r?-t:(n<0&&(f=!0,n=-n),o=0,n>2.414213562373095?(i=t,o=1,n=-1/n):n<=.66?i=0:(i=.7853981633974483,o=2,n=(n-1)/(n+1)),c=(c=n*n)*function(n){return 0===n?-64.85021904942025:n*(n*(n*(-.8750608600031904*n-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(c)/function(n){return 0===n?194.5506571482614:194.5506571482614+n*(485.3903996359137+n*(432.88106049129027+n*(165.02700983169885+n*(24.858464901423062+1*n))))}(c),c=n*c+n,2===o?c+=.5*u:1===o&&(c+=u),i+=c,f?-i:i)}return function(){var e,t,r=(e=0,t=0,function(n){return 0===arguments.length?0===t?null:e:e+=(n-e)/(t+=1)});return function(e,t){return 0===arguments.length?r():r(o(n((t-e)/t)))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).incrmaape=e();
//# sourceMappingURL=index.js.map