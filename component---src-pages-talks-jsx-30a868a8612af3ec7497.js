webpackJsonp([0xed915645b7f6],{55:function(e,n,t){function r(e,n,t,o,u){var i=-1,f=e.length;for(t||(t=l),u||(u=[]);++i<f;){var c=e[i];n>0&&t(c)?n>1?r(c,n-1,t,o,u):a(u,c):o||(u[u.length]=c)}return u}var a=t(80),l=t(61);e.exports=r},56:function(e,n,t){function r(e,n){var t=-1,r=l(e)?Array(e.length):[];return a(e,function(e,a,l){r[++t]=n(e,a,l)}),r}var a=t(54),l=t(23);e.exports=r},57:function(e,n,t){function r(e,n,t){var r=-1;n=a(n.length?n:[c],i(l));var s=o(e,function(e,t,l){var o=a(n,function(n){return n(e)});return{criteria:o,index:++r,value:e}});return u(s,function(e,n){return f(e,n,t)})}var a=t(79),l=t(82),o=t(56),u=t(58),i=t(84),f=t(60),c=t(33);e.exports=r},58:function(e,n){function t(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e}e.exports=t},59:function(e,n,t){function r(e,n){if(e!==n){var t=void 0!==e,r=null===e,l=e===e,o=a(e),u=void 0!==n,i=null===n,f=n===n,c=a(n);if(!i&&!c&&!o&&e>n||o&&u&&f&&!i&&!c||r&&u&&f||!t&&f||!l)return 1;if(!r&&!o&&!c&&e<n||c&&t&&l&&!r&&!o||i&&t&&l||!u&&l||!f)return-1}return 0}var a=t(43);e.exports=r},60:function(e,n,t){function r(e,n,t){for(var r=-1,l=e.criteria,o=n.criteria,u=l.length,i=t.length;++r<u;){var f=a(l[r],o[r]);if(f){if(r>=i)return f;var c=t[r];return f*("desc"==c?-1:1)}}return e.index-n.index}var a=t(59);e.exports=r},61:function(e,n,t){function r(e){return o(e)||l(e)||!!(u&&e&&e[u])}var a=t(31),l=t(42),o=t(5),u=a?a.isConcatSpreadable:void 0;e.exports=r},64:function(e,n,t){var r=t(55),a=t(57),l=t(83),o=t(87),u=l(function(e,n){if(null==e)return[];var t=n.length;return t>1&&o(e,n[0],n[1])?n=[]:t>2&&o(n[0],n[1],n[2])&&(n=[n[0]]),a(e,r(n,1),[])});e.exports=u},94:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return o.default.createElement("svg",{className:e.className,role:"img","aria-label":"Youtube",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},o.default.createElement("path",{fill:"currentColor",d:"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"}))}n.__esModule=!0,n.default=a;var l=t(1),o=r(l);e.exports=n.default},97:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function u(e,n){return e.raw=n,e}n.__esModule=!0;var i=u([""],[""]),f=u(["\n  box-shadow: none;\n  opacity: 0.6;\n  color: ",";\n\n  :hover,\n  :focus {\n    opacity: 1;\n  }\n\n  span {\n    display: none;\n  }\n"],["\n  box-shadow: none;\n  opacity: 0.6;\n  color: ",";\n\n  :hover,\n  :focus {\n    opacity: 1;\n  }\n\n  span {\n    display: none;\n  }\n"]),c=u(["\n  width: 25px;\n  height: 25px;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n"],["\n  width: 25px;\n  height: 25px;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n"]),s=t(1),p=r(s),d=t(4),h=r(d),m=t(94),v=r(m),g=t(11),y=r(g),x=(0,h.default)("div")(i),b=(0,h.default)("a")(f,y.default.colors["list.focusBackground"]),w=(0,h.default)(v.default)(c),E=function(e){function n(){return a(this,n),l(this,e.apply(this,arguments))}return o(n,e),n.prototype.render=function(){var e=this.props.talk,n=e.title,t=e.date,r=e.place,a=e.video,l=e.url,o=e.language;return p.default.createElement(x,null,p.default.createElement("div",null,p.default.createElement("a",{target:"_blank",href:l,rel:"noopener noreferrer"},n," / ",p.default.createElement("small",null,o)),a&&p.default.createElement(b,{href:a,target:"_blank",rel:"noopener noreferrer"},p.default.createElement(w,null))),p.default.createElement("small",null,t,", ",r))},n}(p.default.Component);n.default=E,e.exports=n.default},246:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function u(e,n){return e.raw=n,e}n.__esModule=!0,n.pageQuery=void 0;var i=u(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 60px;\n\n  "," {\n    flex-direction: column;\n  }\n"],["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 60px;\n\n  "," {\n    flex-direction: column;\n  }\n"]),f=u(["\n  width: 40%;\n  margin-right: 10%;\n\n  "," {\n    width: 100%;\n    margin-right: 0;\n  }\n"],["\n  width: 40%;\n  margin-right: 10%;\n\n  "," {\n    width: 100%;\n    margin-right: 0;\n  }\n"]),c=u(["\n  list-style: none;\n  margin: 0;\n  margin-bottom: 40px;\n"],["\n  list-style: none;\n  margin: 0;\n  margin-bottom: 40px;\n"]),s=t(1),p=r(s),d=t(16),h=r(d),m=t(4),v=r(m),g=t(44),y=r(g),x=t(64),b=r(x),w=t(17),E=t(9),_=r(E),k=t(6),T=t(97),M=r(T),O=function(e){var n={};e.forEach(function(e){var t=e.date,r=t.split(".")[2];n[r]?n[r].push(e):n[r]=[e]});var t=(0,b.default)((0,y.default)(n),function(e){return-e});return t.map(function(e){return{label:e,talks:n[e]}})},j=(0,v.default)("div")(i,w.TABLET_MEDIA_QUERY),A=(0,v.default)("div")(f,w.TABLET_MEDIA_QUERY),C=(0,v.default)("ul")(c),B=function(e){function n(){return a(this,n),l(this,e.apply(this,arguments))}return o(n,e),n.prototype.render=function(){var e=this.props.data.allTalksJson.edges.map(function(e){return e.node}),n=O(e);return p.default.createElement("div",null,p.default.createElement(h.default,{title:_.default.siteTitle}),p.default.createElement(k.FancyH1,null,"Talks"),p.default.createElement(j,null,n.map(function(e){return p.default.createElement(A,{key:e.label},p.default.createElement(k.FancyH2,null,e.label),p.default.createElement(C,null,e.talks.map(function(e){return p.default.createElement("li",{key:e.title},p.default.createElement(M.default,{talk:e}))})))})))},n}(p.default.Component);n.pageQuery="** extracted graphql fragment **";n.default=B}});
//# sourceMappingURL=component---src-pages-talks-jsx-30a868a8612af3ec7497.js.map