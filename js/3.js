webpackJsonp([3],{327:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(55),s=a(i),u=n(56),f=a(u),p=n(0),m=a(p),d=n(57),v=a(d),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=n(328),b=n(331),g=a(b),E={Main:{displayName:"Main"}},C=(0,v.default)({filename:"D:/work/projects/cnode-demo/app/components/Create/Create.js",components:E,locals:[e],imports:[m.default]}),j=(0,f.default)({filename:"D:/work/projects/cnode-demo/app/components/Create/Create.js",components:E,locals:[],imports:[m.default,s.default]}),w=function(e){return function(t){return C(j(t,e),e)}}("Main")(function(e){function t(e){o(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectActiveClass:"",titleActiveClass:"",contentActiveClass:"",selectValue:"",titleValue:"",contentValue:""},n.handleSubmit=n.handleSubmit.bind(n),n.handleChange=n.handleChange.bind(n),n.reset=n.reset.bind(n),n}return l(t,e),h(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({selectActiveClass:"",titleActiveClass:"",contentActiveClass:""});var a=new FormData(document.querySelector("form")),r=a.get("tab")||this.setState({selectActiveClass:" create-active"}),o=a.get("title")||this.setState({titleActiveClass:" create-active"}),c=a.get("content")||this.setState({contentActiveClass:" create-active"});if(r&&o&&c){var l=JSON.parse(localStorage.getItem(this.props.login.localStorageKey)),i=l.accessToken,s=n(330),u=s.stringify({accesstoken:i,title:o,tab:r,content:c});(0,y.fetchJSON)({url:"/topics",req:{method:"post",body:u,headers:{"Content-Type":"application/x-www-form-urlencoded"}},success:function(e){e.success&&(t.props.dispatch({type:"SET_TOPICS_LIST",payload:{list:[],page:0}}),t.props.history.push("/?tab="+r))},fail:function(e){alert("提交失败。")}})}}},{key:"handleChange",value:function(e,t){e.target.value&&this.setState(r({},t+"ActiveClass","")),this.setState(r({},t+"Value",e.target.value))}},{key:"reset",value:function(){this.setState({selectActiveClass:"",titleActiveClass:"",contentActiveClass:"",selectValue:"",titleValue:"",contentValue:""})}},{key:"render",value:function(){var e=this;return m.default.createElement("div",{className:"create-container"},m.default.createElement("div",{className:"create"},m.default.createElement("div",{className:"create-title clear"},m.default.createElement("span",{className:"fleft"},"发表主题"),m.default.createElement("span",{className:"create-reset fright",onClick:this.reset},"重置")),m.default.createElement("form",null,m.default.createElement("div",{className:"create-subTitle"},"选择发表版块：",m.default.createElement("span",{className:"create-warning fright"+this.state.selectActiveClass},"* 请选择发表版块")),m.default.createElement("select",{className:"create-select",name:"tab",onChange:function(t){e.handleChange(t,"select")},value:this.state.selectValue},m.default.createElement("option",{value:""},"- 版块 -"),m.default.createElement("option",{value:"ask"},"问答"),m.default.createElement("option",{value:"share"},"分享"),m.default.createElement("option",{value:"job"},"招聘"),m.default.createElement("option",{value:"dev"},"测试")),m.default.createElement("div",{className:"create-subTitle"},"输入标题：",m.default.createElement("span",{className:"create-warning fright"+this.state.titleActiveClass},"* 请输入标题")),m.default.createElement("input",{className:"create-inputTitle",type:"text",name:"title",onChange:function(t){e.handleChange(t,"title")},value:this.state.titleValue}),m.default.createElement("div",{className:"create-subTitle"},"输入正文（",m.default.createElement("a",{href:"https://segmentfault.com/markdown",target:"_blank"},"Markdown指南"),"）：",m.default.createElement("span",{className:"create-warning fright"+this.state.contentActiveClass},"* 请输入正文")),m.default.createElement("textarea",{className:"create-content",name:"content",onChange:function(t){e.handleChange(t,"content")},value:this.state.contentValue}),m.default.createElement("button",{className:"create-btn",onClick:this.handleSubmit},"发表"))),m.default.createElement(g.default,this.props))}},{key:"componentDidMount",value:function(){document.documentElement.scrollTop=document.body.scrollTop=0}}]),t}(p.Component));t.default=w}).call(t,n(21)(e))},328:function(e,t,n){"use strict";function a(e){console.log(e)}function r(e){console.log("出错: \n",e)}function o(e){if(!e.ok)throw Error(e.statusText);return e}function c(e){return e.json()}function l(e){return e.text()}function i(e){console.log(e)}function s(e){var t=e.url,n=e.success,a=e.req,l=e.fail;fetch("https://cnodejs.org/api/v1"+t,a).then(o).then(c).then(n).catch(l||r)}function u(e){fetch(e).then(o).then(l).then(a).catch(r)}function f(){fetch.apply(void 0,arguments).then(o).then(i).catch(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchJSON=s,t.fetchText=u,t.backResponse=f},330:function(e,t,n){"use strict";function a(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[o(t,e),"[",a,"]"].join(""):[o(t,e),"[",o(a,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}function r(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(a[e]=n);void 0===a[e]&&(a[e]={}),a[e][t[1]]=n};case"bracket":return function(e,n,a){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===a[e]?void(a[e]=[n]):void(a[e]=[].concat(a[e],n)):void(a[e]=n)};default:return function(e,t,n){if(void 0===n[e])return void(n[e]=t);n[e]=[].concat(n[e],t)}}}function o(e,t){return t.encode?t.strict?s(e):encodeURIComponent(e):e}function c(e){return Array.isArray(e)?e.sort():"object"==typeof e?c(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}function l(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function i(e,t){t=u({arrayFormat:"none"},t);var n=r(t),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^[?#&]/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:f(o),n(f(r),o,a)}),Object.keys(a).sort().reduce(function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=c(n):e[t]=n,e},Object.create(null))):a}var s=n(333),u=n(34),f=n(334);t.extract=l,t.parse=i,t.stringify=function(e,t){t=u({encode:!0,strict:!0,arrayFormat:"none"},t),!1===t.sort&&(t.sort=function(){});var n=a(t);return e?Object.keys(e).sort(t.sort).map(function(a){var r=e[a];if(void 0===r)return"";if(null===r)return o(a,t);if(Array.isArray(r)){var c=[];return r.slice().forEach(function(e){void 0!==e&&c.push(n(a,e,c.length))}),c.join("&")}return o(a,t)+"="+o(r,t)}).filter(function(e){return e.length>0}).join("&"):""},t.parseUrl=function(e,t){return{url:e.split("?")[0]||"",query:i(l(e),t)}}},331:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(55),i=a(l),s=n(56),u=a(s),f=n(0),p=a(f),m=n(57),d=a(m),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=n(58),y={Nav:{displayName:"Nav"}},b=(0,d.default)({filename:"D:/work/projects/cnode-demo/app/components/common/nav.js",components:y,locals:[e],imports:[p.default]}),g=(0,u.default)({filename:"D:/work/projects/cnode-demo/app/components/common/nav.js",components:y,locals:[],imports:[p.default,i.default]}),E=function(e){return function(t){return b(g(t,e),e)}}("Nav")(function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),v(t,[{key:"render",value:function(){var e=localStorage.getItem(this.props.login.localStorageKey),t=this.props.location.search?"common-nav-active":"";return p.default.createElement("ul",{className:"common-nav"},p.default.createElement("li",null,this.props.topicsList.url?p.default.createElement(h.Link,{to:"/"+this.props.topicsList.url,className:t},p.default.createElement("span",{className:"common-nav-icon-font"},""),"首页"):p.default.createElement(h.NavLink,{to:"/",exact:!0,activeClassName:"common-nav-active"},p.default.createElement("span",{className:"common-nav-icon-font"},""),"首页")),p.default.createElement("li",null,p.default.createElement(h.NavLink,{to:e?"/create":"/login",exact:!0,activeClassName:"common-nav-active"},p.default.createElement("span",{className:"common-nav-icon-font"},""),"新建")),p.default.createElement("li",null,p.default.createElement(h.NavLink,{to:e?"/user":"/login",exact:!0,activeClassName:"common-nav-active"},p.default.createElement("span",{className:"common-nav-icon-font"},""),"我的")))}}]),t}(f.Component));t.default=E}).call(t,n(21)(e))},333:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},334:function(e,t,n){"use strict";function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function r(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(c),n=1;n<t.length;n++)e=a(t,n).join(""),t=e.match(c);return e}}function o(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=l.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var a=r(n[0]);a!==n[0]&&(t[n[0]]=a)}n=l.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),c=0;c<o.length;c++){var i=o[c];e=e.replace(new RegExp(i,"g"),t[i])}return e}var c=new RegExp("%[a-f0-9]{2}","gi"),l=new RegExp("(%[a-f0-9]{2})+","gi");e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return o(e)}}}});