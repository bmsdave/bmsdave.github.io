webpackJsonp([0xc23565d713b7],{246:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),s=a(u),i=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return s.default.createElement("svg",{className:this.props.className,role:"img","aria-label":"LastFM",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s.default.createElement("title",null,"LastFM"),s.default.createElement("path",{fill:"currentColor",strokeWidth:"0px",d:"M10.584 17.209l-.88-2.392s-1.43 1.595-3.573 1.595c-1.897 0-3.244-1.65-3.244-4.289 0-3.381 1.704-4.591 3.382-4.591 2.419 0 3.188 1.567 3.849 3.574l.88 2.75c.879 2.667 2.528 4.811 7.284 4.811 3.409 0 5.719-1.044 5.719-3.793 0-2.227-1.265-3.381-3.629-3.932l-1.76-.385c-1.209-.275-1.566-.77-1.566-1.594 0-.935.742-1.485 1.952-1.485 1.319 0 2.034.495 2.144 1.677l2.749-.33c-.22-2.474-1.924-3.491-4.729-3.491-2.474 0-4.893.935-4.893 3.931 0 1.87.907 3.052 3.188 3.602l1.869.439c1.402.33 1.869.907 1.869 1.705 0 1.017-.989 1.43-2.858 1.43-2.776 0-3.932-1.457-4.591-3.464l-.907-2.749c-1.155-3.574-2.997-4.894-6.653-4.894-4.041-.001-6.186 2.556-6.186 6.899 0 4.179 2.145 6.433 5.993 6.433 3.107.001 4.591-1.457 4.591-1.457z"}))},t}(s.default.Component);t.default=i,e.exports=t.default},90:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return o.default.createElement("svg",{className:e.className,role:"img","aria-label":"Youtube",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},o.default.createElement("path",{fill:"currentColor",strokeWidth:"0px",d:"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"}))}t.__esModule=!0,t.default=r;var l=n(1),o=a(l);e.exports=t.default},251:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),s=a(u),i=n(148),c=a(i),f=n(145),p=a(f),d=n(147),m=a(d),h=n(146),y=a(h),b=n(246),g=a(b),w=n(11),E=function(e){function t(n){r(this,t);var a=l(this,e.call(this,n));return a.state={lastfm:"",isLoading:!1,nowplaying:!1},a}return o(t,e),t.prototype.componentDidMount=function(){var e=this;this.setState({isLoading:!0});var t="https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bmsdave&api_key=e07781fdb72b940ecccaa4e84182695b&format=json&limit=1";fetch(t).then(function(e){return e.json().then(function(t){return{json:t,response:e}})}).then(function(t){var n=t.json,a=t.response;if(!a.ok)return Promise.reject(n);var r=n.recenttracks.track[0].artist["#text"]+" - "+n.recenttracks.track[0].name,l=n.recenttracks.track[0]["@attr"]&&n.recenttracks.track[0]["@attr"].nowplaying||!1;return e.setState({lastfm:r,isLoading:!1,nowplaying:l}),!0})},t.prototype.render=function(){var e=this;this.state.lastfm;return s.default.createElement(w.LeadContactsContainer,{className:this.props.className},s.default.createElement("ul",null,this.props.links.map(function(t){var n=null,a="_blank";switch(t.type){case"gmail":n=y.default,a="_self";break;case"github":n=p.default;break;case"twitter":n=c.default;break;case"linkedin":n=m.default;break;case"lastfm":n=g.default}if(null===n)return null;var r=void 0;return r=e.state.nowplaying&&n===g.default?t.label+": "+e.state.lastfm:t.label,s.default.createElement("li",{key:t.type},s.default.createElement("a",{style:{borderBottom:"none"},target:a,rel:"noopener noreferrer",href:t.href},s.default.createElement(n,{className:w.classes.icon})),s.default.createElement("a",{target:a,rel:"noopener noreferrer",href:t.href},t.label),e.state.nowplaying&&n===g.default?s.default.createElement("span",null,s.default.createElement("small",null,s.default.createElement("img",{src:"/images/nowplaying.gif"})," ",e.state.lastfm)):null)})))},t}(s.default.Component);t.default=E,e.exports=t.default},252:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),s=a(u),i=n(8),c=n(11),f=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=(new Date).getFullYear(),t=e-2014,n=e-2009-2;return s.default.createElement("div",{className:this.props.className},s.default.createElement(i.FancyH1,null,"Hi, I","'","m Vadim"),s.default.createElement(c.H2,null,"Software Engineer, based in London."," ",s.default.createElement("a",{href:"https://about.meta.com/realitylabs/",target:"_blank"},"@Meta")),s.default.createElement(c.Text,{style:{marginTop:20}},"I have ",t," years of experience in development and"," ",n," years of experience in IT. I actively participated in the life of the JavaScript community: I organized"," ",s.default.createElement("a",{href:"https://piterjs.org/",target:"_blank"},"PiterJS")," ","– monthly JavaScript Meetup in Saint Petersburg, contributed as a mentor at"," ",s.default.createElement("a",{href:"https://nodeschool.io/spb/",target:"_blank"},"NodeSchool/SPB")," ","and was a member of the"," ",s.default.createElement("a",{href:"https://holyjs.ru/en/",target:"_blank"},"HolyJS")," ","program committee. Not so long ago I changed direction to focus on VR Interfaces. I enjoy sharing my knowledge at"," ",s.default.createElement("a",{href:"https://bmsdave.github.io/talks/",target:"_blank"},"conferences")," ","and contributing to"," ",s.default.createElement("a",{href:"https://github.com/bmsdave",target:"_blank"},"open source"),". When I’m not coding, I like to explore London and walk my dog. I respect and love mathematics and everything related to it."))},t}(s.default.Component);t.default=f,e.exports=t.default},92:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return e.raw=t,e}t.__esModule=!0;var s=u([""],[""]),i=u(["\n  border-bottom: none;\n  opacity: 0.6;\n  color: ",";\n\n  :hover,\n  :focus {\n    opacity: 1;\n  }\n\n  span {\n    display: none;\n  }\n"],["\n  border-bottom: none;\n  opacity: 0.6;\n  color: ",";\n\n  :hover,\n  :focus {\n    opacity: 1;\n  }\n\n  span {\n    display: none;\n  }\n"]),c=u(["\n  width: 25px;\n  height: 25px;\n  display: inline-block;\n  vertical-align: middle;\n"],["\n  width: 25px;\n  height: 25px;\n  display: inline-block;\n  vertical-align: middle;\n"]),f=n(1),p=a(f),d=n(17),m=a(d),h=n(90),y=a(h),b=n(27),g=a(b),w=(0,m.default)("div")(s),E=(0,m.default)("a")(i,g.default.colors["list.focusBackground"]),_=(0,m.default)(y.default)(c),k=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.talk,t=e.title,n=e.date,a=e.place,r=e.video,l=e.url,o=e.language;return p.default.createElement(w,null,p.default.createElement("div",null,p.default.createElement("a",{target:"_blank",href:l,rel:"noopener noreferrer"},t," / ",p.default.createElement("small",null,o)),r&&p.default.createElement(E,{href:r,target:"_blank",rel:"noopener noreferrer"},p.default.createElement(_,null))),p.default.createElement("small",null,n,", ",a))},t}(p.default.Component);t.default=k,e.exports=t.default},261:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),s=a(u),i=n(22),c=a(i),f=n(23),p=a(f),d=n(252),m=a(d),h=n(251),y=a(h),b=n(14),g=a(b),w=n(92),E=a(w),_=n(11),k=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.allTalksJson.edges.map(function(e){return e.node}),t=this.props.data.allMarkdownRemark.edges.map(function(e){return e.node}).map(function(e){return{title:e.frontmatter.title,slug:e.fields.slug}});return s.default.createElement("div",null,s.default.createElement(c.default,{title:g.default.siteTitle}),s.default.createElement(_.Row,{justifyContent:"space-between",style:{marginBottom:0}},s.default.createElement(m.default,{className:_.classes.leadText}),s.default.createElement(y.default,{links:g.default.userLinks,className:_.classes.leadContacts})),s.default.createElement(_.Row,{justifyContent:"flex-start"},s.default.createElement(_.TalksList,null,s.default.createElement("h3",null,"Latest Posts",s.default.createElement(p.default,{to:"/blog"},"see all")),s.default.createElement("ul",null,t.map(function(e){return s.default.createElement("li",{key:e.slug},s.default.createElement(p.default,{to:e.slug},e.title))}))),s.default.createElement(_.TalksList,null,s.default.createElement("h3",null,"Latest Talks",s.default.createElement(p.default,{to:"/talks"},"see all")),s.default.createElement("ul",null,e.map(function(e){return s.default.createElement("li",{key:e.title},s.default.createElement(E.default,{talk:e}))})))))},t}(s.default.Component);t.pageQuery="** extracted graphql fragment **";t.default=k}});
//# sourceMappingURL=component---src-pages-index-jsx-79cd9c4f5a524f01f992.js.map