function toVnode(t,r,e){var n=t[r.name]||r.name,o={};for(var i in r.attrs)o[i]=r.attrs[i].map(function(t){return t.content}).join("");if(e&&(o._state=e),"string"==typeof r.content)return h(n,o,r.content);if(Array.isArray(r.content)){var u=r.content.map(function(r){return"tag"===r.type?toVnode(t,r):"text"===r.type?r.content:void 0});return h(n,o,u)}return h(n,o)}function createCommonjsModule(t,r){return r={exports:{}},t(r,r.exports),r.exports}function placeHoldersCount(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function byteLength(t){return 3*t.length/4-placeHoldersCount(t)}function toByteArray(t){var r,e,n,o,i,u=t.length;o=placeHoldersCount(t),i=new Arr(3*u/4-o),e=o>0?u-4:u;var f=0;for(r=0;r<e;r+=4)n=revLookup[t.charCodeAt(r)]<<18|revLookup[t.charCodeAt(r+1)]<<12|revLookup[t.charCodeAt(r+2)]<<6|revLookup[t.charCodeAt(r+3)],i[f++]=n>>16&255,i[f++]=n>>8&255,i[f++]=255&n;return 2===o?(n=revLookup[t.charCodeAt(r)]<<2|revLookup[t.charCodeAt(r+1)]>>4,i[f++]=255&n):1===o&&(n=revLookup[t.charCodeAt(r)]<<10|revLookup[t.charCodeAt(r+1)]<<4|revLookup[t.charCodeAt(r+2)]>>2,i[f++]=n>>8&255,i[f++]=255&n),i}function tripletToBase64(t){return lookup[t>>18&63]+lookup[t>>12&63]+lookup[t>>6&63]+lookup[63&t]}function encodeChunk(t,r,e){for(var n,o=[],i=r;i<e;i+=3)n=(t[i]<<16)+(t[i+1]<<8)+t[i+2],o.push(tripletToBase64(n));return o.join("")}function fromByteArray(t){for(var r,e=t.length,n=e%3,o="",i=[],u=0,f=e-n;u<f;u+=16383)i.push(encodeChunk(t,u,u+16383>f?f:u+16383));return 1===n?(r=t[e-1],o+=lookup[r>>2],o+=lookup[r<<4&63],o+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],o+=lookup[r>>10],o+=lookup[r>>4&63],o+=lookup[r<<2&63],o+="="),i.push(o),i.join("")}function encode(t){var r=JSON.stringify(t),e=utf8.encode(r);return new Buffer(e).toString("base64")}function decode(t){var r=new Buffer(t,"base64").toString("utf8"),e=utf8.decode(r);return JSON.parse(e)}function hydrateInitialState(t,r){return toVnode(r,browserDecode(t))}import{h}from"preact";for(var utf8=createCommonjsModule(function(t,r){!function(t){function r(t){for(var r,e,n=[],o=0,i=t.length;o<i;)(r=t.charCodeAt(o++))>=55296&&r<=56319&&o<i?56320==(64512&(e=t.charCodeAt(o++)))?n.push(((1023&r)<<10)+(1023&e)+65536):(n.push(r),o--):n.push(r);return n}function e(t){for(var r,e=t.length,n=-1,o="";++n<e;)(r=t[n])>65535&&(o+=l((r-=65536)>>>10&1023|55296),r=56320|1023&r),o+=l(r);return o}function n(t){if(t>=55296&&t<=57343)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value")}function o(t,r){return l(t>>r&63|128)}function i(t){if(0==(4294967168&t))return l(t);var r="";return 0==(4294965248&t)?r=l(t>>6&31|192):0==(4294901760&t)?(n(t),r=l(t>>12&15|224),r+=o(t,6)):0==(4292870144&t)&&(r=l(t>>18&7|240),r+=o(t,12),r+=o(t,6)),r+=l(63&t|128)}function u(t){for(var e=r(t),n=e.length,o=-1,u="";++o<n;)u+=i(e[o]);return u}function f(){if(p>=c)throw Error("Invalid byte index");var t=255&h[p];if(p++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function s(){var t,r,e,o,i;if(p>c)throw Error("Invalid byte index");if(p==c)return!1;if(t=255&h[p],p++,0==(128&t))return t;if(192==(224&t)){if(r=f(),(i=(31&t)<<6|r)>=128)return i;throw Error("Invalid continuation byte")}if(224==(240&t)){if(r=f(),e=f(),(i=(15&t)<<12|r<<6|e)>=2048)return n(i),i;throw Error("Invalid continuation byte")}if(240==(248&t)&&(r=f(),e=f(),o=f(),(i=(7&t)<<18|r<<12|e<<6|o)>=65536&&i<=1114111))return i;throw Error("Invalid UTF-8 detected")}function a(t){h=r(t),c=h.length,p=0;for(var n,o=[];!1!==(n=s());)o.push(n);return e(o)}var h,c,p,l=String.fromCharCode;t.version="3.0.0",t.encode=u,t.decode=a}(r)}),byteLength_1=byteLength,toByteArray_1=toByteArray,fromByteArray_1=fromByteArray,lookup=[],revLookup=[],Arr="undefined"!=typeof Uint8Array?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;revLookup["-".charCodeAt(0)]=62,revLookup["_".charCodeAt(0)]=63;var base64Js={byteLength:byteLength_1,toByteArray:toByteArray_1,fromByteArray:fromByteArray_1},read=function(t,r,e,n,o){var i,u,f=8*o-n-1,s=(1<<f)-1,a=s>>1,h=-7,c=e?o-1:0,p=e?-1:1,l=t[r+c];for(c+=p,i=l&(1<<-h)-1,l>>=-h,h+=f;h>0;i=256*i+t[r+c],c+=p,h-=8);for(u=i&(1<<-h)-1,i>>=-h,h+=n;h>0;u=256*u+t[r+c],c+=p,h-=8);if(0===i)i=1-a;else{if(i===s)return u?NaN:1/0*(l?-1:1);u+=Math.pow(2,n),i-=a}return(l?-1:1)*u*Math.pow(2,i-n)},write=function(t,r,e,n,o,i){var u,f,s,a=8*i-o-1,h=(1<<a)-1,c=h>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:i-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-u))<1&&(u--,s*=2),(r+=u+c>=1?p/s:p*Math.pow(2,1-c))*s>=2&&(u++,s/=2),u+c>=h?(f=0,u=h):u+c>=1?(f=(r*s-1)*Math.pow(2,o),u+=c):(f=r*Math.pow(2,c-1)*Math.pow(2,o),u=0));o>=8;t[e+l]=255&f,l+=g,f/=256,o-=8);for(u=u<<o|f,a+=o;a>0;t[e+l]=255&u,l+=g,u/=256,a-=8);t[e+l-g]|=128*y},ieee754={read:read,write:write},buffer=createCommonjsModule(function(t,r){"use strict";function e(t){if(t>X)throw new RangeError("Invalid typed array length");var r=new Uint8Array(t);return r.__proto__=n.prototype,r}function n(t,r,e){if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return f(t)}return o(t,r,e)}function o(t,r,e){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return V(t)?h(t,r,e):"string"==typeof t?s(t,r):c(t)}function i(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function u(t,r,n){return i(t),t<=0?e(t):void 0!==r?"string"==typeof n?e(t).fill(r,n):e(t).fill(r):e(t)}function f(t){return i(t),e(t<0?0:0|p(t))}function s(t,r){if("string"==typeof r&&""!==r||(r="utf8"),!n.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var o=0|g(t,r),i=e(o),u=i.write(t,r);return u!==o&&(i=i.slice(0,u)),i}function a(t){for(var r=t.length<0?0:0|p(t.length),n=e(r),o=0;o<r;o+=1)n[o]=255&t[o];return n}function h(t,r,e){if(r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(e||0))throw new RangeError("'length' is out of bounds");var o;return o=void 0===r&&void 0===e?new Uint8Array(t):void 0===e?new Uint8Array(t,r):new Uint8Array(t,r,e),o.__proto__=n.prototype,o}function c(t){if(n.isBuffer(t)){var r=0|p(t.length),o=e(r);return 0===o.length?o:(t.copy(o,0,0,r),o)}if(t){if(q(t)||"length"in t)return"number"!=typeof t.length||H(t.length)?e(0):a(t);if("Buffer"===t.type&&Array.isArray(t.data))return a(t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function p(t){if(t>=X)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+X.toString(16)+" bytes");return 0|t}function l(t){return+t!=t&&(t=0),n.alloc(+t)}function g(t,r){if(n.isBuffer(t))return t.length;if(q(t)||V(t))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return J(t).length;default:if(o)return z(t).length;r=(""+r).toLowerCase(),o=!0}}function y(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,r,e);case"utf8":case"utf-8":return L(this,r,e);case"ascii":return k(this,r,e);case"latin1":case"binary":return U(this,r,e);case"base64":return _(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function d(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function w(t,r,e,o,i){if(0===t.length)return-1;if("string"==typeof e?(o=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,H(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=n.from(r,o)),n.isBuffer(r))return 0===r.length?-1:v(t,r,e,o,i);if("number"==typeof r)return r&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):v(t,[r],e,o,i);throw new TypeError("val must be string, number or Buffer")}function v(t,r,e,n,o){function i(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}var u=1,f=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,s/=2,e/=2}var a;if(o){var h=-1;for(a=e;a<f;a++)if(i(t,a)===i(r,-1===h?0:a-h)){if(-1===h&&(h=a),a-h+1===s)return h*u}else-1!==h&&(a-=a-h),h=-1}else for(e+s>f&&(e=f-s),a=e;a>=0;a--){for(var c=!0,p=0;p<s;p++)if(i(t,a+p)!==i(r,p)){c=!1;break}if(c)return a}return-1}function b(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(H(f))return u;t[e+u]=f}return u}function m(t,r,e,n){return Y(z(r,t.length-e),t,e,n)}function E(t,r,e,n){return Y(D(r),t,e,n)}function A(t,r,e,n){return E(t,r,e,n)}function B(t,r,e,n){return Y(J(r),t,e,n)}function I(t,r,e,n){return Y(F(r,t.length-e),t,e,n)}function _(t,r,e){return 0===r&&e===t.length?base64Js.fromByteArray(t):base64Js.fromByteArray(t.slice(r,e))}function L(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i=t[o],u=null,f=i>239?4:i>223?3:i>191?2:1;if(o+f<=e){var s,a,h,c;switch(f){case 1:i<128&&(u=i);break;case 2:128==(192&(s=t[o+1]))&&(c=(31&i)<<6|63&s)>127&&(u=c);break;case 3:s=t[o+1],a=t[o+2],128==(192&s)&&128==(192&a)&&(c=(15&i)<<12|(63&s)<<6|63&a)>2047&&(c<55296||c>57343)&&(u=c);break;case 4:s=t[o+1],a=t[o+2],h=t[o+3],128==(192&s)&&128==(192&a)&&128==(192&h)&&(c=(15&i)<<18|(63&s)<<12|(63&a)<<6|63&h)>65535&&c<1114112&&(u=c)}}null===u?(u=65533,f=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),o+=f}return C(n)}function C(t){var r=t.length;if(r<=Z)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=Z));return e}function k(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function U(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function S(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=P(t[i]);return o}function M(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function T(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function x(t,r,e,o,i,u){if(!n.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<u)throw new RangeError('"value" argument is out of bounds');if(e+o>t.length)throw new RangeError("Index out of range")}function R(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function N(t,r,e,n,o){return r=+r,e>>>=0,o||R(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),ieee754.write(t,r,e,n,23,4),e+4}function O(t,r,e,n,o){return r=+r,e>>>=0,o||R(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),ieee754.write(t,r,e,n,52,8),e+8}function j(t){if((t=t.trim().replace(G,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}function P(t){return t<16?"0"+t.toString(16):t.toString(16)}function z(t,r){r=r||1/0;for(var e,n=t.length,o=null,i=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function D(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function F(t,r){for(var e,n,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,o=e%256,i.push(o),i.push(n);return i}function J(t){return base64Js.toByteArray(j(t))}function Y(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function V(t){return t instanceof ArrayBuffer||null!=t&&null!=t.constructor&&"ArrayBuffer"===t.constructor.name&&"number"==typeof t.byteLength}function q(t){return"function"==typeof ArrayBuffer.isView&&ArrayBuffer.isView(t)}function H(t){return t!==t}r.Buffer=n,r.SlowBuffer=l,r.INSPECT_MAX_BYTES=50;var X=2147483647;r.kMaxLength=X,n.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}(),n.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),"undefined"!=typeof Symbol&&Symbol.species&&n[Symbol.species]===n&&Object.defineProperty(n,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),n.poolSize=8192,n.from=function(t,r,e){return o(t,r,e)},n.prototype.__proto__=Uint8Array.prototype,n.__proto__=Uint8Array,n.alloc=function(t,r,e){return u(t,r,e)},n.allocUnsafe=function(t){return f(t)},n.allocUnsafeSlow=function(t){return f(t)},n.isBuffer=function(t){return null!=t&&!0===t._isBuffer},n.compare=function(t,r){if(!n.isBuffer(t)||!n.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,o=r.length,i=0,u=Math.min(e,o);i<u;++i)if(t[i]!==r[i]){e=t[i],o=r[i];break}return e<o?-1:o<e?1:0},n.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return n.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var o=n.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var u=t[e];if(!n.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(o,i),i+=u.length}return o},n.byteLength=g,n.prototype._isBuffer=!0,n.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)d(this,r,r+1);return this},n.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)d(this,r,r+3),d(this,r+1,r+2);return this},n.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)d(this,r,r+7),d(this,r+1,r+6),d(this,r+2,r+5),d(this,r+3,r+4);return this},n.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?L(this,0,t):y.apply(this,arguments)},n.prototype.equals=function(t){if(!n.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===n.compare(this,t)},n.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},n.prototype.compare=function(t,r,e,o,i){if(!n.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===o&&(o=0),void 0===i&&(i=this.length),r<0||e>t.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=e)return 0;if(o>=i)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,o>>>=0,i>>>=0,this===t)return 0;for(var u=i-o,f=e-r,s=Math.min(u,f),a=this.slice(o,i),h=t.slice(r,e),c=0;c<s;++c)if(a[c]!==h[c]){u=a[c],f=h[c];break}return u<f?-1:f<u?1:0},n.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},n.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},n.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},n.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":return E(this,t,r,e);case"latin1":case"binary":return A(this,t,r,e);case"base64":return B(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Z=4096;n.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e)<0&&(t=0):t>e&&(t=e),r<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var o=this.subarray(t,r);return o.__proto__=n.prototype,o},n.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||T(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},n.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||T(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},n.prototype.readUInt8=function(t,r){return t>>>=0,r||T(t,1,this.length),this[t]},n.prototype.readUInt16LE=function(t,r){return t>>>=0,r||T(t,2,this.length),this[t]|this[t+1]<<8},n.prototype.readUInt16BE=function(t,r){return t>>>=0,r||T(t,2,this.length),this[t]<<8|this[t+1]},n.prototype.readUInt32LE=function(t,r){return t>>>=0,r||T(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},n.prototype.readUInt32BE=function(t,r){return t>>>=0,r||T(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},n.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||T(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*r)),n},n.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||T(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*r)),i},n.prototype.readInt8=function(t,r){return t>>>=0,r||T(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},n.prototype.readInt16LE=function(t,r){t>>>=0,r||T(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},n.prototype.readInt16BE=function(t,r){t>>>=0,r||T(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},n.prototype.readInt32LE=function(t,r){return t>>>=0,r||T(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},n.prototype.readInt32BE=function(t,r){return t>>>=0,r||T(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},n.prototype.readFloatLE=function(t,r){return t>>>=0,r||T(t,4,this.length),ieee754.read(this,t,!0,23,4)},n.prototype.readFloatBE=function(t,r){return t>>>=0,r||T(t,4,this.length),ieee754.read(this,t,!1,23,4)},n.prototype.readDoubleLE=function(t,r){return t>>>=0,r||T(t,8,this.length),ieee754.read(this,t,!0,52,8)},n.prototype.readDoubleBE=function(t,r){return t>>>=0,r||T(t,8,this.length),ieee754.read(this,t,!1,52,8)},n.prototype.writeUIntLE=function(t,r,e,n){t=+t,r>>>=0,e>>>=0,n||x(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},n.prototype.writeUIntBE=function(t,r,e,n){t=+t,r>>>=0,e>>>=0,n||x(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},n.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,1,255,0),this[r]=255&t,r+1},n.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},n.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},n.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},n.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},n.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var o=Math.pow(2,8*e-1);x(this,t,r,e,o-1,-o)}var i=0,u=1,f=0;for(this[r]=255&t;++i<e&&(u*=256);)t<0&&0===f&&0!==this[r+i-1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},n.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var o=Math.pow(2,8*e-1);x(this,t,r,e,o-1,-o)}var i=e-1,u=1,f=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===f&&0!==this[r+i+1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},n.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},n.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},n.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},n.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},n.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||x(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},n.prototype.writeFloatLE=function(t,r,e){return N(this,t,r,!0,e)},n.prototype.writeFloatBE=function(t,r,e){return N(this,t,r,!1,e)},n.prototype.writeDoubleLE=function(t,r,e){return O(this,t,r,!0,e)},n.prototype.writeDoubleBE=function(t,r,e){return O(this,t,r,!1,e)},n.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,i=n-e;if(this===t&&e<r&&r<n)for(o=i-1;o>=0;--o)t[o+r]=this[o+e];else if(i<1e3)for(o=0;o<i;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+i),r);return i},n.prototype.fill=function(t,r,e,o){if("string"==typeof t){if("string"==typeof r?(o=r,r=0,e=this.length):"string"==typeof e&&(o=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==o&&"string"!=typeof o)throw new TypeError("encoding must be a string");if("string"==typeof o&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0);var u;if("number"==typeof t)for(u=r;u<e;++u)this[u]=t;else{var f=n.isBuffer(t)?t:new n(t,o),s=f.length;for(u=0;u<e-r;++u)this[u+r]=f[u%s]}return this};var G=/[^+\/0-9A-Za-z-_]/g}),Buffer=buffer.Buffer,encode_1=encode,decode_1=decode,browserDecode=decode;export{hydrateInitialState,encode_1 as encode,decode_1 as decode};