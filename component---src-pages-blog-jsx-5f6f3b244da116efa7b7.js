webpackJsonp([0xa93941ba78cd],{55:function(e,t,n){function r(e,t,n,i,u){var l=-1,f=e.length;for(n||(n=o),u||(u=[]);++l<f;){var c=e[l];t>0&&n(c)?t>1?r(c,t-1,n,i,u):a(u,c):i||(u[u.length]=c)}return u}var a=n(80),o=n(61);e.exports=r},56:function(e,t,n){function r(e,t){var n=-1,r=o(e)?Array(e.length):[];return a(e,function(e,a,o){r[++n]=t(e,a,o)}),r}var a=n(54),o=n(23);e.exports=r},57:function(e,t,n){function r(e,t,n){var r=-1;t=a(t.length?t:[c],l(o));var s=i(e,function(e,n,o){var i=a(t,function(t){return t(e)});return{criteria:i,index:++r,value:e}});return u(s,function(e,t){return f(e,t,n)})}var a=n(79),o=n(82),i=n(56),u=n(58),l=n(84),f=n(60),c=n(33);e.exports=r},58:function(e,t){function n(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}e.exports=n},59:function(e,t,n){function r(e,t){if(e!==t){var n=void 0!==e,r=null===e,o=e===e,i=a(e),u=void 0!==t,l=null===t,f=t===t,c=a(t);if(!l&&!c&&!i&&e>t||i&&u&&f&&!l&&!c||r&&u&&f||!n&&f||!o)return 1;if(!r&&!i&&!c&&e<t||c&&n&&o&&!r&&!i||l&&n&&o||!u&&o||!f)return-1}return 0}var a=n(43);e.exports=r},60:function(e,t,n){function r(e,t,n){for(var r=-1,o=e.criteria,i=t.criteria,u=o.length,l=n.length;++r<u;){var f=a(o[r],i[r]);if(f){if(r>=l)return f;var c=n[r];return f*("desc"==c?-1:1)}}return e.index-t.index}var a=n(59);e.exports=r},61:function(e,t,n){function r(e){return i(e)||o(e)||!!(u&&e&&e[u])}var a=n(31),o=n(42),i=n(5),u=a?a.isConcatSpreadable:void 0;e.exports=r},64:function(e,t,n){var r=n(55),a=n(57),o=n(83),i=n(87),u=o(function(e,t){if(null==e)return[];var n=t.length;return n>1&&i(e,t[0],t[1])?t=[]:n>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),a(e,r(t,1),[])});e.exports=u},95:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),f=n(64),c=r(f),s=n(44),p=r(s),d=n(21),m=r(d),h=n(6),y=function(e){var t={};e.forEach(function(e){var n=e.date,r=n.split("-")[0];t[r]?t[r].push(e):t[r]=[e]});var n=(0,c.default)((0,p.default)(t),function(e){return-e});return n.map(function(e){return{label:e,posts:t[e]}})},v=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList(),t=y(e);return l.default.createElement("div",{style:{marginTop:60}},t.map(function(e){return l.default.createElement("div",{key:e.label},l.default.createElement("div",null,l.default.createElement(h.FancyH2,null,e.label)),e.posts.map(function(e){return l.default.createElement("div",{key:e.title,style:{marginBottom:10}},l.default.createElement(m.default,{to:e.path+"/"},e.title))}))}))},t}(l.default.Component);t.default=v,e.exports=t.default},96:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),f=n(135),c=r(f),s=n(16),p=r(s),d=n(9),m=r(d),h=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,a=void 0,o=void 0,i=void 0,u=void 0;if(r){var f=t.frontmatter;a=f.title,o=f.description?f.description:t.excerpt,i=(0,c.default)(f.cover,"childImageSharp.resize.src",null)||m.default.siteLogo,u=m.default.siteUrl+m.default.pathPrefix+n}else a=m.default.siteTitle,o=m.default.siteDescription,i=m.default.siteLogo;var s="/"===m.default.pathPrefix?"":m.default.pathPrefix;i=m.default.siteUrl+s+i;var d=m.default.siteUrl+m.default.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:a,alternateName:m.default.siteTitleAlt?m.default.siteTitleAlt:""}];return r&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":u,name:a,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:a,alternateName:m.default.siteTitleAlt?m.default.siteTitleAlt:"",headline:a,image:{"@type":"ImageObject",url:i},description:o}]),l.default.createElement(p.default,null,l.default.createElement("meta",{name:"description",content:o}),l.default.createElement("meta",{name:"image",content:i}),l.default.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),l.default.createElement("meta",{property:"og:url",content:r?u:d}),r?l.default.createElement("meta",{property:"og:type",content:"article"}):null,l.default.createElement("meta",{property:"og:title",content:a}),l.default.createElement("meta",{property:"og:description",content:o}),l.default.createElement("meta",{property:"og:image",content:i}),l.default.createElement("meta",{property:"fb:app_id",content:m.default.siteFBAppID?m.default.siteFBAppID:""}),l.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.default.createElement("meta",{name:"twitter:creator",content:m.default.userTwitter?m.default.userTwitter:""}),l.default.createElement("meta",{name:"twitter:title",content:a}),l.default.createElement("meta",{name:"twitter:description",content:o}),l.default.createElement("meta",{name:"twitter:image",content:i}))},t}(u.Component);t.default=h,e.exports=t.default},243:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),l=r(u),f=n(16),c=r(f),s=n(95),p=r(s),d=n(96),m=r(d),h=n(9),y=r(h),v=n(6),g=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark?this.props.data.allMarkdownRemark.edges:[];return l.default.createElement("div",null,l.default.createElement(c.default,{title:y.default.siteTitle}),l.default.createElement(m.default,{postEdges:e}),l.default.createElement(v.FancyH1,null,"Blog"),l.default.createElement(p.default,{postEdges:e}))},t}(l.default.Component);t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-jsx-5f6f3b244da116efa7b7.js.map