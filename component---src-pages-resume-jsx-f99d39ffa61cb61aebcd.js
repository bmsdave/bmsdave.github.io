webpackJsonp([59872079621741],{220:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e.raw=t,e}t.__esModule=!0;var u=i(["\n  position: relative;\n  bottom: -2px;\n  padding: 0;\n  margin: 0;\n  padding-bottom: 14px;\n"],["\n  position: relative;\n  bottom: -2px;\n  padding: 0;\n  margin: 0;\n  padding-bottom: 14px;\n"]),s=i(["\n  font-size: 0.9em;\n"],["\n  font-size: 0.9em;\n"]),f=i(["\n  font-size: 0.6em;\n  color: #999;\n  padding-left: 10px;\n  line-height: 0.6em;\n"],["\n  font-size: 0.6em;\n  color: #999;\n  padding-left: 10px;\n  line-height: 0.6em;\n"]),d=n(1),c=l(d),p=n(4),m=l(p),h=n(6),g=(0,m.default)("div")(u),b=(0,m.default)("div")(s),E=(0,m.default)("div")(f),x=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return c.default.createElement(c.default.Fragment,null,c.default.createElement(h.FancyH2,null,"Awards"),this.props.awards.map(function(e){return c.default.createElement(g,{key:e.title},c.default.createElement(b,null,e.title),c.default.createElement(E,null,e.date,", ",e.location))}))},t}(c.default.Component);t.default=x,e.exports=t.default},221:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e.raw=t,e}t.__esModule=!0;var u=i(["\n  position: relative;\n  bottom: -2px;\n  padding: 0;\n  margin: 0;\n  padding-bottom: 14px;\n"],["\n  position: relative;\n  bottom: -2px;\n  padding: 0;\n  margin: 0;\n  padding-bottom: 14px;\n"]),s=i(["\n  font-size: 0.9em;\n"],["\n  font-size: 0.9em;\n"]),f=i(["\n  font-size: 0.6em;\n  color: #999;\n  padding-left: 10px;\n  line-height: 0.6em;\n"],["\n  font-size: 0.6em;\n  color: #999;\n  padding-left: 10px;\n  line-height: 0.6em;\n"]),d=n(1),c=l(d),p=n(4),m=l(p),h=n(6),g=(0,m.default)("div")(u),b=(0,m.default)("div")(s),E=(0,m.default)("div")(f),x=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return c.default.createElement(c.default.Fragment,null,c.default.createElement(h.FancyH2,null,"Courses"),this.props.courses.map(function(e){return c.default.createElement(g,{key:e.link},c.default.createElement(b,null,e.title),c.default.createElement(E,null,c.default.createElement("a",{href:e.link,target:"_blank"},"Certificate"),","," ",c.default.createElement("a",{href:e.organizationLink,target:"_blank"},e.organization),", ",e.date))}))},t}(c.default.Component);t.default=x,e.exports=t.default},222:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e.raw=t,e}t.__esModule=!0;var u=i(["\n  position: relative;\n  margin-top: 30px;\n  min-height: 100px;\n  width: 100%;\n  font-size: 0.9em;\n  font-family: 'Fira Sans', 'Helvetica Neue', serif;\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  ul li {\n    list-style-type: none;\n    position: relative;\n    margin: 0;\n    max-width: 330px;\n    margin-left: 110px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 50px;\n  }\n\n  ul li::after {\n    content: '';\n    position: absolute;\n    left: -60px;\n    top: 1px;\n    transform: translateX(-50%);\n    width: 80px;\n    height: 30px;\n    border-radius: 5px;\n    background: white;\n  }\n"],["\n  position: relative;\n  margin-top: 30px;\n  min-height: 100px;\n  width: 100%;\n  font-size: 0.9em;\n  font-family: 'Fira Sans', 'Helvetica Neue', serif;\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  ul li {\n    list-style-type: none;\n    position: relative;\n    margin: 0;\n    max-width: 330px;\n    margin-left: 110px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 50px;\n  }\n\n  ul li::after {\n    content: '';\n    position: absolute;\n    left: -60px;\n    top: 1px;\n    transform: translateX(-50%);\n    width: 80px;\n    height: 30px;\n    border-radius: 5px;\n    background: white;\n  }\n"]),s=i(["\n  position: relative;\n  bottom: -2px;\n  padding: 0;\n  margin: 0;\n"],["\n  position: relative;\n  bottom: -2px;\n  padding: 0;\n  margin: 0;\n"]),f=i(["\n  height: 30px;\n  width: 120px;\n  position: absolute;\n  left: -120px;\n  text-align: center;\n  top: 1px;\n  z-index: 99;\n  font-size: 0.85em;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n\n  time {\n    position: relative;\n  }\n  time:before {\n    content: '';\n    width: 100%;\n    height: 7px;\n    position: absolute;\n    left: -5px;\n    bottom: 0px;\n    background-color: ",";\n    opacity: 0.6;\n    z-index: -2;\n  }\n"],["\n  height: 30px;\n  width: 120px;\n  position: absolute;\n  left: -120px;\n  text-align: center;\n  top: 1px;\n  z-index: 99;\n  font-size: 0.85em;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n\n  time {\n    position: relative;\n  }\n  time:before {\n    content: '';\n    width: 100%;\n    height: 7px;\n    position: absolute;\n    left: -5px;\n    bottom: 0px;\n    background-color: ",";\n    opacity: 0.6;\n    z-index: -2;\n  }\n"]),d=i(["\n  font-size: 1.1em;\n"],["\n  font-size: 1.1em;\n"]),c=i(["\n  font-size: 0.9em;\n  border-top: 1px solid #888;\n  border-bottom: 1px solid #888;\n  color: #888;\n  display: inline-block;\n"],["\n  font-size: 0.9em;\n  border-top: 1px solid #888;\n  border-bottom: 1px solid #888;\n  color: #888;\n  display: inline-block;\n"]),p=i(["\n  font-size: 0.9em;\n  color: #999;\n  padding-left: 10px;\n  line-height: 1.5em;\n"],["\n  font-size: 0.9em;\n  color: #999;\n  padding-left: 10px;\n  line-height: 1.5em;\n"]),m=i(["\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 0.9em;\n  line-height: 1.3em;\n  font-family: 'Open Sans', 'Helvetica Neue', serif;\n"],["\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 0.9em;\n  line-height: 1.3em;\n  font-family: 'Open Sans', 'Helvetica Neue', serif;\n"]),h=i(["\n  position: absolute;\n  left: 50px;\n  top: -40px;\n  height: 100%;\n  z-index: -2;\n  width: 1px;\n  border-left: 2px solid #000;\n"],["\n  position: absolute;\n  left: 50px;\n  top: -40px;\n  height: 100%;\n  z-index: -2;\n  width: 1px;\n  border-left: 2px solid #000;\n"]),g=n(1),b=l(g),E=n(4),x=l(E),y=n(6),w=n(11),v=l(w),S=(0,x.default)("section")(u),k=(0,x.default)("div")(s),_=(0,x.default)("div")(f,v.default.colors["list.focusBackground"]),P=(0,x.default)("div")(d),z=((0,x.default)("div")(c),(0,x.default)("div")(p)),T=(0,x.default)("div")(m),O=(0,x.default)("div")(h),M=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return b.default.createElement(b.default.Fragment,null,b.default.createElement(y.FancyH2,null,"Education"),b.default.createElement(S,null,b.default.createElement(O,null),b.default.createElement("ul",null,b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"2011 - 2016")),b.default.createElement(k,null,b.default.createElement(P,null,"Bachelor's degree, System analysis and management"),b.default.createElement(z,null,b.default.createElement("a",{href:"http://english.spbstu.ru/",target:"_blank",rel:"noopener noreferrer"},"Peter the Great St.Petersburg Polytechnic University"),", Saint Petersburg, Russia"),b.default.createElement(T,null))),b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"2005 - 2007")),b.default.createElement(k,null,b.default.createElement(P,null,"Associate's degree, Mathematics and Informatics"),b.default.createElement(z,null,b.default.createElement("a",{href:"http://en.bru.by",target:"_blank",rel:"noopener noreferrer"},"Belarusian-Russian University"),", Mogilev, Belarus"),b.default.createElement(T,null))))))},t}(b.default.Component);t.default=M,e.exports=t.default},223:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e.raw=t,e}t.__esModule=!0;var u=i(["\n  position: relative;\n  margin-top: 30px;\n  min-height: 600px;\n  width: 100%;\n  font-size: 0.9em;\n  font-family: 'Fira Sans', 'Helvetica Neue', serif;\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  p {\n    margin-bottom: 0.5em;\n  }\n\n  ul li {\n    list-style-type: none;\n    position: relative;\n    margin: 0;\n    max-width: 630px;\n    margin-left: 110px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 50px;\n  }\n\n  ul li::after {\n    content: '';\n    position: absolute;\n    left: -60px;\n    top: 1px;\n    transform: translateX(-50%);\n    width: 80px;\n    height: 30px;\n    border-radius: 5px;\n    background: white;\n  }\n"],["\n  position: relative;\n  margin-top: 30px;\n  min-height: 600px;\n  width: 100%;\n  font-size: 0.9em;\n  font-family: 'Fira Sans', 'Helvetica Neue', serif;\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  p {\n    margin-bottom: 0.5em;\n  }\n\n  ul li {\n    list-style-type: none;\n    position: relative;\n    margin: 0;\n    max-width: 630px;\n    margin-left: 110px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 50px;\n  }\n\n  ul li::after {\n    content: '';\n    position: absolute;\n    left: -60px;\n    top: 1px;\n    transform: translateX(-50%);\n    width: 80px;\n    height: 30px;\n    border-radius: 5px;\n    background: white;\n  }\n"]),s=i(["\n  position: relative;\n  bottom: -2px;\n  padding: 0;\n  margin: 0;\n"],["\n  position: relative;\n  bottom: -2px;\n  padding: 0;\n  margin: 0;\n"]),f=i(["\n  height: 30px;\n  width: 120px;\n  position: absolute;\n  left: -120px;\n  text-align: center;\n  top: 1px;\n  z-index: 99;\n  font-size: 0.85em;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n\n  time {\n    position: relative;\n    font-size: 1em;\n  }\n  time:before {\n    content: '';\n    width: 100%;\n    height: 7px;\n    position: absolute;\n    left: -5px;\n    bottom: 0px;\n    background-color: ",";\n    opacity: 0.6;\n    z-index: -2;\n  }\n"],["\n  height: 30px;\n  width: 120px;\n  position: absolute;\n  left: -120px;\n  text-align: center;\n  top: 1px;\n  z-index: 99;\n  font-size: 0.85em;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n\n  time {\n    position: relative;\n    font-size: 1em;\n  }\n  time:before {\n    content: '';\n    width: 100%;\n    height: 7px;\n    position: absolute;\n    left: -5px;\n    bottom: 0px;\n    background-color: ",";\n    opacity: 0.6;\n    z-index: -2;\n  }\n"]),d=i(["\n  font-size: 1.1em;\n"],["\n  font-size: 1.1em;\n"]),c=i(["\n  font-size: 0.9em;\n  border-top: 1px solid #888;\n  border-bottom: 1px solid #888;\n  color: #888;\n  display: inline-block;\n"],["\n  font-size: 0.9em;\n  border-top: 1px solid #888;\n  border-bottom: 1px solid #888;\n  color: #888;\n  display: inline-block;\n"]),p=i(["\n  font-size: 0.9em;\n  color: #999;\n  padding-left: 10px;\n  line-height: 1.4em;\n"],["\n  font-size: 0.9em;\n  color: #999;\n  padding-left: 10px;\n  line-height: 1.4em;\n"]),m=i(["\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 0.9em;\n  line-height: 1.3em;\n  font-family: 'Open Sans', 'Helvetica Neue', serif;\n"],["\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 0.9em;\n  line-height: 1.3em;\n  font-family: 'Open Sans', 'Helvetica Neue', serif;\n"]),h=i(["\n  position: absolute;\n  left: 50px;\n  top: -40px;\n  height: 100%;\n  z-index: -2;\n  width: 1px;\n  border-left: 2px solid #000;\n"],["\n  position: absolute;\n  left: 50px;\n  top: -40px;\n  height: 100%;\n  z-index: -2;\n  width: 1px;\n  border-left: 2px solid #000;\n"]),g=n(1),b=l(g),E=n(4),x=l(E),y=n(6),w=n(11),v=l(w),S=(0,x.default)("section")(u),k=(0,x.default)("div")(s),_=(0,x.default)("div")(f,v.default.colors["list.focusBackground"]),P=(0,x.default)("div")(d),z=((0,x.default)("div")(c),(0,x.default)("div")(p)),T=(0,x.default)("div")(m),O=(0,x.default)("div")(h),M=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return b.default.createElement(b.default.Fragment,null,b.default.createElement(y.FancyH2,null,"Experience"),b.default.createElement(S,null,b.default.createElement(O,null),b.default.createElement("ul",null,b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"Nov 2016 — present")),b.default.createElement(k,null,b.default.createElement(P,null,"Software Engineer"),b.default.createElement(z,null,b.default.createElement("a",{href:"http://www.openwaygroup.com/",target:"_blank",rel:"noopener noreferrer"},"OpenWay Group"),", Saint Petersburg, Russia"),b.default.createElement(T,null,b.default.createElement("p",null,b.default.createElement("strong",null,"Project"),": WAY4WEB"),b.default.createElement("p",null,b.default.createElement("strong",null,"Scope of project"),": The standard delivery of the project consists of more than 10 thousand screens (forms of display of certain entities, such as information about a client, a cardholder, a merchant, etc.). In addition to this, we provide powerful tools for customization of the interface."),b.default.createElement("p",null,b.default.createElement("strong",null,"Clients"),": NETS, Santander, SberBank, OpenBank, etc."),b.default.createElement("p",null,b.default.createElement("strong",null,"Job Responsibilities:"),b.default.createElement("br",null),"- Participation in the development of a WAY4 product web part.",b.default.createElement("br",null),"- Stress testing and optimization of web applications.",b.default.createElement("br",null),"- Web applications penetration testing.",b.default.createElement("br",null),"- Performing the duties of the Information Security Officer (PCI DSS).",b.default.createElement("br",null),"- Analysis and review of commits included in the project for the presence of the impact of changes in PA-DSS certification."),b.default.createElement("p",null,b.default.createElement("strong",null,"Technologies"),": JavaScript, Typescript, AngularJS, Java, SQL, TeamCity, Windows")))),b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"Feb 2015 — Nov 2016")),b.default.createElement(k,null,b.default.createElement(P,null,"Full-Stack Web Developer"),b.default.createElement(z,null,b.default.createElement("a",{href:"http://www.i-free.com/en",target:"_blank",rel:"noopener noreferrer"},"i-Free"),", Saint Petersburg, Russia"),b.default.createElement(T,null,b.default.createElement("p",null,b.default.createElement("strong",null,"Projects"),": BackOffice, Messaging"),b.default.createElement("p",null,b.default.createElement("strong",null,"Scope of projects"),": Messaging is a high-performance SMS sending system (3000 SMS per second at peak load). BackOffice - billing system working in real time (deals with billing and invoicing for the sent SMS via Messaging)."),b.default.createElement("p",null,b.default.createElement("strong",null,"Clients"),": i-Free, Channel One Russia, MailRu, Facebook, Google, Alfabank, Raiffeisen Bank, VTB24, etc."),b.default.createElement("p",null,b.default.createElement("strong",null,"Job Responsibilities"),":",b.default.createElement("br",null),"- Developing UI of the operational accounting platform.",b.default.createElement("br",null),"- Writing stored procedures and views in PostgreSQL.",b.default.createElement("br",null),"- Architecture development and writing server-side and client-side parts of the platform.",b.default.createElement("br",null),"- Developing clients’ personal accounts.",b.default.createElement("br",null),"- Architecture development and writing server-side and client-side parts of the platform according to the external customers’ requirements.",b.default.createElement("br",null),"- Integration of the operational accounting platform with a number of external and internal systems.",b.default.createElement("br",null),"- Implementation of applications for data synchronization via REST, SOAP, SMTP.",b.default.createElement("br",null),"- Developed applications deployment.",b.default.createElement("br",null),"- Setting up the production environment.",b.default.createElement("br",null),"- Configuration and optimization of web servers.",b.default.createElement("br",null),"- Configure nginx, apache, puppet configurations."),b.default.createElement("p",null,b.default.createElement("strong",null,"Technologies"),": JS, Dart, Typescript, Angular(1,2), React, Backbone.js, Polymer, Ampersand Python2.7, PL/SQL, Flask, SqlAlchemy, PostrgreSQL, GIT, Nginx, Apache2, Debian, Puppet")))),b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"Sep 2014 — Feb 2015")),b.default.createElement(k,null,b.default.createElement(P,null,"Monitoring System Administrator"),b.default.createElement(z,null,b.default.createElement("a",{href:"http://www.i-free.com/en",target:"_blank",rel:"noopener noreferrer"},"i-Free"),", Saint Petersburg, Russia"),b.default.createElement(T,null,b.default.createElement("p",null,b.default.createElement("strong",null,"Project"),": Messaging"),b.default.createElement("p",null,b.default.createElement("strong",null,"Scope of project"),": Messaging is a high-performance SMS sending system (3000 SMS per second at peak load)."),b.default.createElement("p",null,b.default.createElement("strong",null,"Clients"),": Channel One Russia, MailRu, Facebook, Google, Alfabank, Raiffeisen Bank, VTB24, etc."),b.default.createElement("p",null,b.default.createElement("strong",null,"Job Responsibilities"),":",b.default.createElement("br",null),"- Monitoring and optimization of the IT systems performance.",b.default.createElement("br",null),"- Participation in the elimination of emergencies in the server software workflow (regardless of the time of day).",b.default.createElement("br",null),"- Improvement of existing emergency response processes."),b.default.createElement("p",null,b.default.createElement("strong",null,"Functions"),":",b.default.createElement("br",null),"- Setting up a monitoring system to display the necessary information for technical support staff and specialists responsible for the respective systems.",b.default.createElement("br",null),"- Supporting uninterrupted operation of the monitoring system.",b.default.createElement("br",null),"- Performing tasks on maintaining company’s services in operation.",b.default.createElement("br",null),"- Eliminating errors in the company's systems.",b.default.createElement("br",null),"- Providing technical recommendations to internal divisions of the company."),b.default.createElement("p",null,b.default.createElement("strong",null,"Technologies"),": Debian, Puppet, Apache/Nginx/Tomcat, SQL, TCP/IP, Zabbix, Java, Python, Bash.")))),b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"Feb 2013 — Sep 2014")),b.default.createElement(k,null,b.default.createElement(P,null,"Technical Support Engineer"),b.default.createElement(z,null,b.default.createElement("a",{href:"http://www.i-free.com/en",target:"_blank",rel:"noopener noreferrer"},"i-Free"),", Saint Petersburg, Russia"),b.default.createElement(T,null,b.default.createElement("p",null,b.default.createElement("strong",null,"Project"),": Messaging"),b.default.createElement("p",null,b.default.createElement("strong",null,"Scope of project"),": Messaging is a high-performance SMS sending system. (3000 SMS per second at peak load)."),b.default.createElement("p",null,b.default.createElement("strong",null,"Clients"),": Channel One Russia, MailRu, Facebook, Google, Alfabank, Raiffeisen Bank, VTB24, etc."),b.default.createElement("p",null,b.default.createElement("strong",null,"Job Responsibilities"),":",b.default.createElement("br",null),"- Providing support for the uninterrupted operation of servers, websites and other services of the company."),b.default.createElement("p",null,b.default.createElement("strong",null,"Functions"),":",b.default.createElement("br",null),"- Round-the-clock monitoring of the company's servers and services and rapid response to the occurred problems.",b.default.createElement("br",null),"- Maintenance, configuration and improvement of the monitoring system.",b.default.createElement("br",null),"- Elimination of errors in the company's systems (independently or with the assistance of specialists).",b.default.createElement("br",null),"- Providing technical consultations to corporate clients of the company.",b.default.createElement("br",null),"- Providing technical recommendations to the company’s internal divisions."),b.default.createElement("p",null,b.default.createElement("strong",null,"Technologies"),": Debian, SMPP, Apache, Nginx, Tomcat, SQL, TCP/IP, Zabbix, Python, Bash")))),b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"Sep 2012 — Dec 2012")),b.default.createElement(k,null,b.default.createElement(P,null,"Industrial climber"),b.default.createElement(z,null,b.default.createElement("a",{href:"http://www.gazprom.com/",target:"_blank",rel:"noopener noreferrer"},"Gazprom"),", Ust-Luga, Russia"))),b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"Jan 2011 — Aug 2012")),b.default.createElement(k,null,b.default.createElement(P,null,"Sapper"),b.default.createElement(z,null,b.default.createElement("a",{href:"http://www.mil.by/en/",target:"_blank",rel:"noopener noreferrer"},"Armed Forces of the Republic of Belarus"),", Mogilev, Belarus"))),b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"Aug 2010 — Jan 2011")),b.default.createElement(k,null,b.default.createElement(P,null,"Road Worker of the Second Category"),b.default.createElement(z,null,b.default.createElement("a",{href:"http://www.belcement.by/en/index.html",target:"_blank",rel:"noopener noreferrer"},"Belarusian Cement Plant"),", Kastsyukovichy, Belarus"))),b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"Jan 2010 — May 2010")),b.default.createElement(k,null,b.default.createElement(P,null,"Technical Support Engineer"),b.default.createElement(z,null,b.default.createElement("a",{href:"https://www.majordomo.ru/",target:"_blank",rel:"noopener noreferrer"},"Majordomo"),", Saint Petersburg, Russia"),b.default.createElement(T,null,b.default.createElement("p",null,b.default.createElement("strong",null,"Job Responsibilities"),":",b.default.createElement("br",null),"- Consulting clients on technical issues.",b.default.createElement("br",null),"- Localization and elimination of problems related to the functioning of the services provided by the company."),b.default.createElement("p",null,b.default.createElement("strong",null,"Functions"),":",b.default.createElement("br",null),"- Debugging and analysis of application traffic in the interaction of the main protocols (DNS, FTP, SSH, POP3, SMTP, HTTP).",b.default.createElement("br",null),"- Configuration and monitoring of the Linux/FreeBSD operating system group, configuration and monitoring of services (Apache, Nginx, MySQL, exim/postfix).",b.default.createElement("br",null),"- Work on the bash, vi command line with the main GNU utilities.",b.default.createElement("br",null),"- Administration of web servers and organization of websites.",b.default.createElement("br",null),"- Competent written and oral communication with clients, ability to formulate the thoughts and deliver them in a clear way to the interlocutor.")))),b.default.createElement("li",null,b.default.createElement(_,null,b.default.createElement("time",null,"Jan 2009 — Dec 2009")),b.default.createElement(k,null,b.default.createElement(P,null,"Hardware System Administrator"),b.default.createElement(z,null,"Rosplat Invest, Saint Petersburg, Russia"),b.default.createElement(T,null,b.default.createElement("p",null,b.default.createElement("strong",null,"Job Responsibilities"),":",b.default.createElement("br",null),"- Technical support of terminals.",b.default.createElement("br",null),"- Hardware and software troubleshooting.",b.default.createElement("br",null),"- Replacement of the IT components.")))))))},t}(b.default.Component);t.default=M,e.exports=t.default},237:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e.raw=t,e}t.__esModule=!0;var u=i(["\n  margin-bottom: 10px;\n"],["\n  margin-bottom: 10px;\n"]),s=i(["\n  font-size: 0.8em;\n"],["\n  font-size: 0.8em;\n"]),f=i(["\n  margin-top: 5px;\n  width: 100%;\n  border-bottom: 2px solid #555;\n  border-top: 1px solid #ddd;\n  height: 8px;\n"],["\n  margin-top: 5px;\n  width: 100%;\n  border-bottom: 2px solid #555;\n  border-top: 1px solid #ddd;\n  height: 8px;\n"]),d=i(["\n  display: block;\n  transition: width 0.7s ease;\n  width: ",";\n  height: 8px;\n  background-color: ",";\n  opacity: 0.6;\n"],["\n  display: block;\n  transition: width 0.7s ease;\n  width: ",";\n  height: 8px;\n  background-color: ",";\n  opacity: 0.6;\n"]),c=n(1),p=l(c),m=n(4),h=l(m),g=n(11),b=l(g),E=(0,h.default)("div")(u),x=(0,h.default)("div")(s),y=(0,h.default)("div")(f),w=(0,h.default)("div")(d,function(e){return e.width+"%"},b.default.colors["list.focusBackground"]),v=function(e){function t(n){a(this,t);var l=r(this,e.call(this,n));return l.state={mounted:!1},l}return o(t,e),t.prototype.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({mounted:!0})},100)},t.prototype.render=function(){return p.default.createElement(E,null,p.default.createElement(x,null,this.props.title),p.default.createElement(y,null,p.default.createElement(w,{className:"bar-inner",width:this.state.mounted?this.props.value:0})))},t}(p.default.Component);t.default=v,e.exports=t.default},238:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=l(i),s=n(6),f=n(237),d=l(f),c=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement(s.FancyH2,null,"Skills"),u.default.createElement("h4",{style:{marginTop:10}},"Development"),this.props.developmentSkills.map(function(e){return u.default.createElement(d.default,{key:e.label,value:e.value,title:e.label})}),u.default.createElement("h4",null,"Administration"),this.props.sysadminSkills.map(function(e){return u.default.createElement(d.default,{key:e.label,value:e.value,title:e.label})}),u.default.createElement("h4",null,"Personal"),this.props.personalQualities.map(function(e){return u.default.createElement(d.default,{key:e.label,value:e.value,title:e.label})}),u.default.createElement("h4",null,"Languages"),this.props.languages.map(function(e){return u.default.createElement(d.default,{key:e.label,value:e.value,title:e.label})}))},t}(u.default.Component);t.default=c,e.exports=t.default},245:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e.raw=t,e}t.__esModule=!0,t.pageQuery=void 0;var u=i(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin-bottom: 20px;\n\n  "," {\n    flex-direction: column;\n  }\n\n  > div:first-child {\n    position: relative;\n    margin-right: 20px;\n    width: 70%;\n  }\n\n  > div:last-child {\n    position: relative;\n    width: 30%;\n  }\n\n  "," {\n    > div:first-child {\n      width: 100%;\n    }\n\n    > div:last-child {\n      width: 90%;\n    }\n  }\n"],["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin-bottom: 20px;\n\n  "," {\n    flex-direction: column;\n  }\n\n  > div:first-child {\n    position: relative;\n    margin-right: 20px;\n    width: 70%;\n  }\n\n  > div:last-child {\n    position: relative;\n    width: 30%;\n  }\n\n  "," {\n    > div:first-child {\n      width: 100%;\n    }\n\n    > div:last-child {\n      width: 90%;\n    }\n  }\n"]),s=i(["\n  margin-left: 20px;\n"],["\n  margin-left: 20px;\n"]),f=n(1),d=l(f),c=n(16),p=l(c),m=n(4),h=l(m),g=n(17),b=n(9),E=l(b),x=n(6),y=n(223),w=l(y),v=n(222),S=l(v),k=n(238),_=l(k),P=n(221),z=l(P),T=n(220),O=l(T),M=(0,
h.default)("div")(u,g.TABLET_MEDIA_QUERY,g.TABLET_MEDIA_QUERY),j=(0,h.default)("a")(s),R=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.allAwardsJson.edges.map(function(e){return e.node}),t=this.props.data.allCoursesJson.edges.map(function(e){return e.node}),n=this.props.data.allLanguagesJson.edges.map(function(e){return e.node}),l=this.props.data.allPersonalQualitiesJson.edges.map(function(e){return e.node}),a=this.props.data.allSysadminSkillsJson.edges.map(function(e){return e.node}),r=this.props.data.allDevelopmentSkillsJson.edges.map(function(e){return e.node});return d.default.createElement("div",null,d.default.createElement(p.default,{title:E.default.siteTitle}),d.default.createElement(x.FancyH1,null,"Resume"),d.default.createElement(M,{style:{marginTop:50}},d.default.createElement("div",null,d.default.createElement(w.default,null),d.default.createElement(S.default,null)),d.default.createElement("div",null,d.default.createElement(_.default,{languages:n,personalQualities:l,sysadminSkills:a,developmentSkills:r}),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement(z.default,{courses:t}),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement(O.default,{awards:e}))),d.default.createElement(j,{href:"../assets/vgorbachev_cv.docx",alt:"*.docx",target:"_blank"},"*.docx"),d.default.createElement(j,{href:"../assets/vgorbachev_cv.pdf",alt:"*.pdf",target:"_blank"},"*.pdf"))},t}(d.default.Component);t.pageQuery="** extracted graphql fragment **";t.default=R}});
//# sourceMappingURL=component---src-pages-resume-jsx-f99d39ffa61cb61aebcd.js.map