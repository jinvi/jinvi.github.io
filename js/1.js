webpackJsonp([1],{324:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),c=i(a),l=n(56),u=i(l),p=n(0),h=i(p),f=n(57),d=i(f),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),v=n(331),g=i(v),y=n(335),E=i(y),T=n(336),b=i(T),_={Main:{displayName:"Main"}},w=(0,d.default)({filename:"D:/work/projects/cnode-demo/app/components/Home/Home.js",components:_,locals:[t],imports:[h.default]}),N=(0,u.default)({filename:"D:/work/projects/cnode-demo/app/components/Home/Home.js",components:_,locals:[],imports:[h.default,c.default]}),O=function(t){return function(e){return w(N(e,t),t)}}("Main")(function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),m(e,[{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement(E.default,this.props),h.default.createElement(b.default,this.props),h.default.createElement(g.default,this.props))}}]),e}(p.Component));e.default=O}).call(e,n(21)(t))},329:function(t,e,n){"use strict";function i(t){console.log(t)}function o(t){console.log("出错: \n",t)}function r(t){if(!t.ok)throw Error(t.statusText);return t}function s(t){return t.json()}function a(t){return t.text()}function c(t){console.log(t)}function l(t){var e=t.url,n=t.success,i=t.req,a=t.fail;fetch(h+e,i).then(r).then(s).then(n).catch(a||o)}function u(t){fetch(t).then(r).then(a).then(i).catch(o)}function p(){fetch.apply(void 0,arguments).then(r).then(c).catch(o)}Object.defineProperty(e,"__esModule",{value:!0});var h="https://cnodejs.org/api/v1";e.fetchJSON=l,e.fetchText=u,e.backResponse=p},330:function(t,e,n){"use strict";function i(t){switch(t.arrayFormat){case"index":return function(e,n,i){return null===n?[r(e,t),"[",i,"]"].join(""):[r(e,t),"[",r(i,t),"]=",r(n,t)].join("")};case"bracket":return function(e,n){return null===n?r(e,t):[r(e,t),"[]=",r(n,t)].join("")};default:return function(e,n){return null===n?r(e,t):[r(e,t),"=",r(n,t)].join("")}}}function o(t){var e;switch(t.arrayFormat){case"index":return function(t,n,i){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e)return void(i[t]=n);void 0===i[t]&&(i[t]={}),i[t][e[1]]=n};case"bracket":return function(t,n,i){return e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0===i[t]?void(i[t]=[n]):void(i[t]=[].concat(i[t],n)):void(i[t]=n)};default:return function(t,e,n){if(void 0===n[t])return void(n[t]=e);n[t]=[].concat(n[t],e)}}}function r(t,e){return e.encode?e.strict?l(t):encodeURIComponent(t):t}function s(t){return Array.isArray(t)?t.sort():"object"==typeof t?s(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}function a(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function c(t,e){e=u({arrayFormat:"none"},e);var n=o(e),i=Object.create(null);return"string"!=typeof t?i:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),o=e.shift(),r=e.length>0?e.join("="):void 0;r=void 0===r?null:p(r),n(p(o),r,i)}),Object.keys(i).sort().reduce(function(t,e){var n=i[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=s(n):t[e]=n,t},Object.create(null))):i}var l=n(332),u=n(34),p=n(333);e.extract=a,e.parse=c,e.stringify=function(t,e){e=u({encode:!0,strict:!0,arrayFormat:"none"},e),!1===e.sort&&(e.sort=function(){});var n=i(e);return t?Object.keys(t).sort(e.sort).map(function(i){var o=t[i];if(void 0===o)return"";if(null===o)return r(i,e);if(Array.isArray(o)){var s=[];return o.slice().forEach(function(t){void 0!==t&&s.push(n(i,t,s.length))}),s.join("&")}return r(i,e)+"="+r(o,e)}).filter(function(t){return t.length>0}).join("&"):""},e.parseUrl=function(t,e){return{url:t.split("?")[0]||"",query:c(a(t),e)}}},331:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),c=i(a),l=n(56),u=i(l),p=n(0),h=i(p),f=n(57),d=i(f),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),v=n(58),g={Nav:{displayName:"Nav"}},y=(0,d.default)({filename:"D:/work/projects/cnode-demo/app/components/common/nav.js",components:g,locals:[t],imports:[h.default]}),E=(0,u.default)({filename:"D:/work/projects/cnode-demo/app/components/common/nav.js",components:g,locals:[],imports:[h.default,c.default]}),T=function(t){return function(e){return y(E(e,t),t)}}("Nav")(function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),m(e,[{key:"render",value:function(){var t=localStorage.getItem(this.props.login.localStorageKey),e=this.props.location.search?"common-nav-active":"";return h.default.createElement("ul",{className:"common-nav"},h.default.createElement("li",null,this.props.topicsList.url?h.default.createElement(v.Link,{to:"/"+this.props.topicsList.url,className:e},h.default.createElement("span",{className:"common-nav-icon-font"},""),"首页"):h.default.createElement(v.NavLink,{to:"/",exact:!0,activeClassName:"common-nav-active"},h.default.createElement("span",{className:"common-nav-icon-font"},""),"首页")),h.default.createElement("li",null,h.default.createElement(v.NavLink,{to:t?"/create":"/login",exact:!0,activeClassName:"common-nav-active"},h.default.createElement("span",{className:"common-nav-icon-font"},""),"新建")),h.default.createElement("li",null,h.default.createElement(v.NavLink,{to:t?"/user":"/login",exact:!0,activeClassName:"common-nav-active"},h.default.createElement("span",{className:"common-nav-icon-font"},""),"我的")))}}]),e}(p.Component));e.default=T}).call(e,n(21)(t))},332:function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},333:function(t,e,n){"use strict";function i(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),o=t.slice(e);return Array.prototype.concat.call([],i(n),i(o))}function o(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(s),n=1;n<e.length;n++)t=i(e,n).join(""),e=t.match(s);return t}}function r(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var i=o(n[0]);i!==n[0]&&(e[n[0]]=i)}n=a.exec(t)}e["%C2"]="�";for(var r=Object.keys(e),s=0;s<r.length;s++){var c=r[s];t=t.replace(new RegExp(c,"g"),e[c])}return t}var s=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return r(t)}}},335:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),c=i(a),l=n(56),u=i(l),p=n(0),h=i(p),f=n(57),d=i(f),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),v=n(58),g=n(329),y={Head:{displayName:"Head"}},E=(0,d.default)({filename:"D:/work/projects/cnode-demo/app/components/Home/Head.js",components:y,locals:[t],imports:[h.default]}),T=(0,u.default)({filename:"D:/work/projects/cnode-demo/app/components/Home/Head.js",components:y,locals:[],imports:[h.default,c.default]}),b=function(t){return function(e){return E(T(e,t),t)}}("Head")(function(t){function e(t){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return s(e,t),m(e,[{key:"render",value:function(){var t=void 0;return localStorage.getItem(this.props.login.localStorageKey)&&(t=JSON.parse(localStorage.getItem(this.props.login.localStorageKey))),h.default.createElement("div",{className:"head"},h.default.createElement("div",{className:"top clear",onClick:this.props.toTop},h.default.createElement("div",{className:"top-bg"}),h.default.createElement("h2",null,h.default.createElement("span",null,"CNODE"),h.default.createElement("span",{className:"top-commentary"},"演示版")),t?h.default.createElement("span",{className:"top-loginState fright clear"},h.default.createElement("img",{className:"fleft",src:t.avatar_url}),h.default.createElement(v.Link,{className:"fleft",to:"/user",onClick:function(t){return t.stopPropagation()}},t.loginName)):h.default.createElement(v.Link,{className:"top-loginBtn fright",to:"/login",onClick:function(t){t.stopPropagation()}},"登录")))}},{key:"componentWillMount",value:function(){var t=this,e=this.props.login.localStorageKey,n=localStorage.getItem(e)&&JSON.parse(localStorage.getItem(e)).accessToken;!this.props.login.success&&n&&(0,g.fetchJSON)({url:"/accesstoken",req:{method:"post",body:"accesstoken="+n,headers:{"Content-Type":"application/x-www-form-urlencoded"}},success:function(e){t.props.dispatch({type:"SET_LOGIN_SUCCESS",payload:!0})},fail:function(){}})}}]),e}(p.Component));e.default=b}).call(e,n(21)(t))},336:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),c=i(a),l=n(56),u=i(l),p=n(0),h=i(p),f=n(57),d=i(f),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),v=n(329),g=n(58),y=n(337),E=i(y),T={Topics:{displayName:"Topics"}},b=(0,d.default)({filename:"D:/work/projects/cnode-demo/app/components/Home/Topics.js",components:T,locals:[t],imports:[h.default]}),_=(0,u.default)({filename:"D:/work/projects/cnode-demo/app/components/Home/Topics.js",components:T,locals:[],imports:[h.default,c.default]}),w=function(t){return function(e){return b(_(e,t),t)}}("Topics")(function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={listData:n.props.topicsList.list,isLoadFail:!1},n.page=n.props.topicsList.page,n.isLoadFinish=!0,n.setTopicsScrollTop=n.setTopicsScrollTop.bind(n),n.loadNextList=n.loadNextList.bind(n),n.refreshList=n.refreshList.bind(n),n}return s(e,t),m(e,[{key:"loadList",value:function(t){var e=this,i=t.tabParam,o=t.isNewTab;o&&(this.page=0,this.setState({listData:[]}));var r=document.documentElement.clientHeight||document.body.clientHeight,s=Math.ceil((r-162)/81)+2,a=n(330),c=a.stringify({page:++this.page,tab:i?i.split("=")[1]:"all",limit:s});this.isLoadFinish&&(this.isLoadFinish=!1,(0,v.fetchJSON)({url:"/topics?"+c,success:function(t){e.props.dispatch({type:"SET_TOPICS_LIST",payload:{list:o?t.data:e.state.listData.concat(t.data),page:e.page,url:location.search}}),e.setState({listData:e.props.topicsList.list,isLoadFail:!1}),e.isLoadFinish=!0},fail:function(){e.setState({isLoadFail:!0})}}))}},{key:"loadNextList",value:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,n=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t)+Math.ceil(e)-Math.ceil(n)>-100&&0!==Math.ceil(t)&&this.loadList({tabParam:this.props.location.search,isNewTab:!1})}},{key:"refreshList",value:function(){this.isRefreshList=!0}},{key:"setTopicsScrollTop",value:function(){this.props.dispatch({type:"SET_TOPICS_SCROLL_TOP",payload:{scrollTop:document.documentElement.scrollTop||document.body.scrollTop}})}},{key:"render",value:function(){function t(t){switch(t){case"ask":return"问答";case"share":return"分享";case"job":return"招聘";case"good":return"精华";case"dev":return"测试"}}var e=this,n={width:"50px",height:"50px",borderRadius:"50%"},i=new Set,o={};return location.search.split("=")[1]?o[location.search.split("=")[1]]="active":o.all="active",h.default.createElement("div",null,h.default.createElement("ul",{className:"topics-nav"},h.default.createElement("li",null,h.default.createElement(g.Link,{className:o.all,to:"/",onClick:this.refreshList},"全部")),h.default.createElement("li",null,h.default.createElement(g.Link,{className:o.good,to:"/?tab=good",onClick:this.refreshList},"精华")),h.default.createElement("li",null,h.default.createElement(g.Link,{className:o.share,to:"/?tab=share",onClick:this.refreshList},"分享")),h.default.createElement("li",null,h.default.createElement(g.Link,{className:o.ask,to:"/?tab=ask",onClick:this.refreshList},"问答")),h.default.createElement("li",null,h.default.createElement(g.Link,{className:o.job,to:"/?tab=job",onClick:this.refreshList},"招聘")),h.default.createElement("li",null,h.default.createElement(g.Link,{className:o.dev,to:"/?tab=dev",onClick:this.refreshList},"测试"))),h.default.createElement("ul",{className:"topic-list",ref:function(t){return e._topicList=t}},this.state.listData.map(function(o,r,s){if(i.has(o.id))return null;i.add(o.id);var a=e.props.topic.id===o.id?" topic-item-active":"";return h.default.createElement("li",{key:o.id,onClick:e.setTopicsScrollTop},h.default.createElement(g.Link,{className:"topic-item",to:"/topic/"+o.id},h.default.createElement("span",{className:"topic-item-avatar"},h.default.createElement("img",{src:o.author.avatar_url,style:n})),h.default.createElement("div",{className:"topic-item-content"},h.default.createElement("h3",{className:"topic-item-title"+a},o.title),h.default.createElement("div",{className:"topic-item-detail"},h.default.createElement("span",{className:"topic-item-tab topic-item-top",style:{display:o.top?"inline":"none"}},h.default.createElement("span",{className:"topic-item-topIcon"},""),"置顶"),o.good&&!o.top?h.default.createElement("span",{className:"topic-item-tab topic-item-good"},"精华"):h.default.createElement("span",{className:"topic-item-tab",style:{display:o.top?"none":"inline"}},t(o.tab)),h.default.createElement("span",null,o.author.loginname),h.default.createElement("span",null,e.props.getDuration(o.create_at)),h.default.createElement("span",{className:"fright"},o.reply_count," / ",o.visit_count)))))}),this.state.isLoadFail?h.default.createElement("li",{className:"topic-loadFail"},"无法获取数据..."):h.default.createElement("li",{className:"topic-loading"})))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.loadNextList,!1),document.documentElement.scrollTop=document.body.scrollTop=this.props.topicsList.scrollTop,new E.default(this._topicList,{}).on("pan",function(t){console.log(1)}),0===this.props.topicsList.list.length&&this.loadList({tabParam:this.props.location.search,isNewTab:!1})}},{key:"shouldComponentUpdate",value:function(t,e){return t.location.search!==this.props.location.search?(this.isRefreshList=!1,this.loadList({tabParam:t.location.search,isNewTab:!0})):this.isRefreshList&&(this.isRefreshList=!1,this.page=0,this.setState({listData:[]}),this.loadList({tabParam:this.props.location.search,isNewTab:!1})),!0}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.loadNextList,!1),this.setTopicsScrollTop()}}]),e}(p.Component));e.default=w}).call(e,n(21)(t))},337:function(t,e,n){var i;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(o,r,s,a){"use strict";function c(t,e,n){return setTimeout(f(t,n),e)}function l(t,e,n){return!!Array.isArray(t)&&(u(t,n[e],n),!0)}function u(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function p(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=o.console&&(o.console.warn||o.console.log);return r&&r.call(o.console,i,n),t.apply(this,arguments)}}function h(t,e,n){var i,o=e.prototype;i=t.prototype=Object.create(o),i.constructor=t,i._super=o,n&&dt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==gt?t.apply(e?e[0]||a:a,e):t}function m(t,e){return t===a?e:t}function v(t,e,n){u(T(e),function(e){t.addEventListener(e,n,!1)})}function g(t,e,n){u(T(e),function(e){t.removeEventListener(e,n,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function E(t,e){return t.indexOf(e)>-1}function T(t){return t.trim().split(/\s+/g)}function b(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function _(t){return Array.prototype.slice.call(t,0)}function w(t,e,n){for(var i=[],o=[],r=0;r<t.length;){var s=e?t[r][e]:t[r];b(o,s)<0&&i.push(t[r]),o[r]=s,r++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function N(t,e){for(var n,i,o=e[0].toUpperCase()+e.slice(1),r=0;r<mt.length;){if(n=mt[r],(i=n?n+o:e)in t)return i;r++}return a}function O(){return wt++}function S(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||o}function k(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&n.handler(e)},this.init()}function C(t){var e=t.options.inputClass;return new(e||(St?Y:kt?W:Ot?J:X))(t,j)}function j(t,e,n){var i=n.pointers.length,o=n.changedPointers.length,r=e&jt&&i-o==0,s=e&(Pt|xt)&&i-o==0;n.isFirst=!!r,n.isFinal=!!s,r&&(t.session={}),n.eventType=e,L(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function L(t,e){var n=t.session,i=e.pointers,o=i.length;n.firstInput||(n.firstInput=I(e)),o>1&&!n.firstMultiple?n.firstMultiple=I(e):1===o&&(n.firstMultiple=!1);var r=n.firstInput,s=n.firstMultiple,a=s?s.center:r.center,c=e.center=D(i);e.timeStamp=Tt(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=F(a,c),e.distance=M(a,c),P(n,e),e.offsetDirection=R(e.deltaX,e.deltaY);var l=A(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=l.x,e.overallVelocityY=l.y,e.overallVelocity=Et(l.x)>Et(l.y)?l.x:l.y,e.scale=s?z(s.pointers,i):1,e.rotation=s?H(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,x(n,e);var u=t.element;y(e.srcEvent.target,u)&&(u=e.srcEvent.target),e.target=u}function P(t,e){var n=e.center,i=t.offsetDelta||{},o=t.prevDelta||{},r=t.prevInput||{};e.eventType!==jt&&r.eventType!==Pt||(o=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=o.x+(n.x-i.x),e.deltaY=o.y+(n.y-i.y)}function x(t,e){var n,i,o,r,s=t.lastInterval||e,c=e.timeStamp-s.timeStamp;if(e.eventType!=xt&&(c>Ct||s.velocity===a)){var l=e.deltaX-s.deltaX,u=e.deltaY-s.deltaY,p=A(c,l,u);i=p.x,o=p.y,n=Et(p.x)>Et(p.y)?p.x:p.y,r=R(l,u),t.lastInterval=e}else n=s.velocity,i=s.velocityX,o=s.velocityY,r=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=o,e.direction=r}function I(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:yt(t.pointers[n].clientX),clientY:yt(t.pointers[n].clientY)},n++;return{timeStamp:Tt(),pointers:e,center:D(e),deltaX:t.deltaX,deltaY:t.deltaY}}function D(t){var e=t.length;if(1===e)return{x:yt(t[0].clientX),y:yt(t[0].clientY)};for(var n=0,i=0,o=0;o<e;)n+=t[o].clientX,i+=t[o].clientY,o++;return{x:yt(n/e),y:yt(i/e)}}function A(t,e,n){return{x:e/t||0,y:n/t||0}}function R(t,e){return t===e?It:Et(t)>=Et(e)?t<0?Dt:At:e<0?Rt:Mt}function M(t,e,n){n||(n=Xt);var i=e[n[0]]-t[n[0]],o=e[n[1]]-t[n[1]];return Math.sqrt(i*i+o*o)}function F(t,e,n){n||(n=Xt);var i=e[n[0]]-t[n[0]],o=e[n[1]]-t[n[1]];return 180*Math.atan2(o,i)/Math.PI}function H(t,e){return F(e[1],e[0],Yt)+F(t[1],t[0],Yt)}function z(t,e){return M(e[0],e[1],Yt)/M(t[0],t[1],Yt)}function X(){this.evEl=qt,this.evWin=Wt,this.pressed=!1,k.apply(this,arguments)}function Y(){this.evEl=Gt,this.evWin=$t,k.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function U(){this.evTarget=Kt,this.evWin=Zt,this.started=!1,k.apply(this,arguments)}function q(t,e){var n=_(t.touches),i=_(t.changedTouches);return e&(Pt|xt)&&(n=w(n.concat(i),"identifier",!0)),[n,i]}function W(){this.evTarget=te,this.targetIds={},k.apply(this,arguments)}function V(t,e){var n=_(t.touches),i=this.targetIds;if(e&(jt|Lt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var o,r,s=_(t.changedTouches),a=[],c=this.target;if(r=n.filter(function(t){return y(t.target,c)}),e===jt)for(o=0;o<r.length;)i[r[o].identifier]=!0,o++;for(o=0;o<s.length;)i[s[o].identifier]&&a.push(s[o]),e&(Pt|xt)&&delete i[s[o].identifier],o++;return a.length?[w(r.concat(a),"identifier",!0),a]:void 0}function J(){k.apply(this,arguments);var t=f(this.handler,this);this.touch=new W(this.manager,t),this.mouse=new X(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function G(t,e){t&jt?(this.primaryTouch=e.changedPointers[0].identifier,$.call(this,e)):t&(Pt|xt)&&$.call(this,e)}function $(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,o=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(o,ee)}}function B(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var o=this.lastTouches[i],r=Math.abs(e-o.x),s=Math.abs(n-o.y);if(r<=ne&&s<=ne)return!0}return!1}function K(t,e){this.manager=t,this.set(e)}function Z(t){if(E(t,ae))return ae;var e=E(t,ce),n=E(t,le);return e&&n?ae:e||n?e?ce:le:E(t,se)?se:re}function Q(t){this.options=dt({},this.defaults,t||{}),this.id=O(),this.manager=null,this.options.enable=m(this.options.enable,!0),this.state=pe,this.simultaneous={},this.requireFail=[]}function tt(t){return t&ve?"cancel":t&de?"end":t&fe?"move":t&he?"start":""}function et(t){return t==Mt?"down":t==Rt?"up":t==Dt?"left":t==At?"right":""}function nt(t,e){var n=e.manager;return n?n.get(t):t}function it(){Q.apply(this,arguments)}function ot(){it.apply(this,arguments),this.pX=null,this.pY=null}function rt(){it.apply(this,arguments)}function st(){Q.apply(this,arguments),this._timer=null,this._input=null}function at(){it.apply(this,arguments)}function ct(){it.apply(this,arguments)}function lt(){Q.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ut(t,e){return e=e||{},e.recognizers=m(e.recognizers,ut.defaults.preset),new pt(t,e)}function pt(t,e){this.options=dt({},ut.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=C(this),this.touchAction=new K(this,this.options.touchAction),ht(this,!0),u(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ht(t,e){var n=t.element;if(n.style){var i;u(t.options.cssProps,function(o,r){i=N(n.style,r),e?(t.oldCssProps[i]=n.style[i],n.style[i]=o):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function ft(t,e){var n=r.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var dt,mt=["","webkit","Moz","MS","ms","o"],vt=r.createElement("div"),gt="function",yt=Math.round,Et=Math.abs,Tt=Date.now;dt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var o in i)i.hasOwnProperty(o)&&(e[o]=i[o])}return e}:Object.assign;var bt=p(function(t,e,n){for(var i=Object.keys(e),o=0;o<i.length;)(!n||n&&t[i[o]]===a)&&(t[i[o]]=e[i[o]]),o++;return t},"extend","Use `assign`."),_t=p(function(t,e){return bt(t,e,!0)},"merge","Use `assign`."),wt=1,Nt=/mobile|tablet|ip(ad|hone|od)|android/i,Ot="ontouchstart"in o,St=N(o,"PointerEvent")!==a,kt=Ot&&Nt.test(navigator.userAgent),Ct=25,jt=1,Lt=2,Pt=4,xt=8,It=1,Dt=2,At=4,Rt=8,Mt=16,Ft=Dt|At,Ht=Rt|Mt,zt=Ft|Ht,Xt=["x","y"],Yt=["clientX","clientY"];k.prototype={handler:function(){},init:function(){this.evEl&&v(this.element,this.evEl,this.domHandler),this.evTarget&&v(this.target,this.evTarget,this.domHandler),this.evWin&&v(S(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(S(this.element),this.evWin,this.domHandler)}};var Ut={mousedown:jt,mousemove:Lt,mouseup:Pt},qt="mousedown",Wt="mousemove mouseup";h(X,k,{handler:function(t){var e=Ut[t.type];e&jt&&0===t.button&&(this.pressed=!0),e&Lt&&1!==t.which&&(e=Pt),this.pressed&&(e&Pt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Vt={pointerdown:jt,pointermove:Lt,pointerup:Pt,pointercancel:xt,pointerout:xt},Jt={2:"touch",3:"pen",4:"mouse",5:"kinect"},Gt="pointerdown",$t="pointermove pointerup pointercancel";o.MSPointerEvent&&!o.PointerEvent&&(Gt="MSPointerDown",$t="MSPointerMove MSPointerUp MSPointerCancel"),h(Y,k,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),o=Vt[i],r=Jt[t.pointerType]||t.pointerType,s="touch"==r,a=b(e,t.pointerId,"pointerId");o&jt&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):o&(Pt|xt)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),n&&e.splice(a,1))}});var Bt={touchstart:jt,touchmove:Lt,touchend:Pt,touchcancel:xt},Kt="touchstart",Zt="touchstart touchmove touchend touchcancel";h(U,k,{handler:function(t){var e=Bt[t.type];if(e===jt&&(this.started=!0),this.started){var n=q.call(this,t,e);e&(Pt|xt)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var Qt={touchstart:jt,touchmove:Lt,touchend:Pt,touchcancel:xt},te="touchstart touchmove touchend touchcancel";h(W,k,{handler:function(t){var e=Qt[t.type],n=V.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var ee=2500,ne=25;h(J,k,{handler:function(t,e,n){var i="touch"==n.pointerType,o="mouse"==n.pointerType;if(!(o&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)G.call(this,e,n);else if(o&&B.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ie=N(vt.style,"touchAction"),oe=ie!==a,re="auto",se="manipulation",ae="none",ce="pan-x",le="pan-y",ue=function(){if(!oe)return!1;var t={},e=o.CSS&&o.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||o.CSS.supports("touch-action",n)}),t}();K.prototype={set:function(t){"compute"==t&&(t=this.compute()),oe&&this.manager.element.style&&ue[t]&&(this.manager.element.style[ie]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return u(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Z(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,o=E(i,ae)&&!ue[ae],r=E(i,le)&&!ue[le],s=E(i,ce)&&!ue[ce];if(o){var a=1===t.pointers.length,c=t.distance<2,l=t.deltaTime<250;if(a&&c&&l)return}return s&&r?void 0:o||r&&n&Ft||s&&n&Ht?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var pe=1,he=2,fe=4,de=8,me=de,ve=16;Q.prototype={defaults:{},set:function(t){return dt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(l(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=nt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return l(t,"dropRecognizeWith",this)?this:(t=nt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(l(t,"requireFailure",this))return this;var e=this.requireFail;return t=nt(t,this),-1===b(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(l(t,"dropRequireFailure",this))return this;t=nt(t,this);var e=b(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<de&&e(n.options.event+tt(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=de&&e(n.options.event+tt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|pe)))return!1;t++}return!0},recognize:function(t){var e=dt({},t);if(!d(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(me|ve|32)&&(this.state=pe),this.state=this.process(e),this.state&(he|fe|de|ve)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},h(it,Q,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(he|fe),o=this.attrTest(t);return i&&(n&xt||!o)?e|ve:i||o?n&Pt?e|de:e&he?e|fe:he:32}}),h(ot,it,{defaults:{event:"pan",threshold:10,pointers:1,direction:zt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ft&&e.push(le),t&Ht&&e.push(ce),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,o=t.direction,r=t.deltaX,s=t.deltaY;return o&e.direction||(e.direction&Ft?(o=0===r?It:r<0?Dt:At,n=r!=this.pX,i=Math.abs(t.deltaX)):(o=0===s?It:s<0?Rt:Mt,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=o,n&&i>e.threshold&&o&e.direction},attrTest:function(t){return it.prototype.attrTest.call(this,t)&&(this.state&he||!(this.state&he)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=et(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),h(rt,it,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&he)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),h(st,Q,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[re]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Pt|xt)&&!o)this.reset();else if(t.eventType&jt)this.reset(),this._timer=c(function(){this.state=me,this.tryEmit()},e.time,this);else if(t.eventType&Pt)return me;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===me&&(t&&t.eventType&Pt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Tt(),this.manager.emit(this.options.event,this._input)))}}),h(at,it,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&he)}}),h(ct,it,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ft|Ht,pointers:1},getTouchAction:function(){return ot.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Ft|Ht)?e=t.overallVelocity:n&Ft?e=t.overallVelocityX:n&Ht&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&Et(e)>this.options.velocity&&t.eventType&Pt},emit:function(t){var e=et(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),h(lt,Q,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[se]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&jt&&0===this.count)return this.failTimeout();if(i&&o&&n){if(t.eventType!=Pt)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||M(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,s&&r?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=c(function(){this.state=me,this.tryEmit()},e.interval,this),he):me}return 32},failTimeout:function(){return this._timer=c(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==me&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ut.VERSION="2.0.7",ut.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[at,{enable:!1}],[rt,{enable:!1},["rotate"]],[ct,{direction:Ft}],[ot,{direction:Ft},["swipe"]],[lt],[lt,{event:"doubletap",taps:2},["tap"]],[st]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};pt.prototype={set:function(t){return dt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,o=e.curRecognizer;(!o||o&&o.state&me)&&(o=e.curRecognizer=null);for(var r=0;r<i.length;)n=i[r],2===e.stopped||o&&n!=o&&!n.canRecognizeWith(o)?n.reset():n.recognize(t),!o&&n.state&(he|fe|de)&&(o=e.curRecognizer=n),r++}},get:function(t){if(t instanceof Q)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(l(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(l(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=b(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return u(T(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return u(T(t),function(t){e?n[t]&&n[t].splice(b(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&ft(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ht(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},dt(ut,{INPUT_START:jt,INPUT_MOVE:Lt,INPUT_END:Pt,INPUT_CANCEL:xt,STATE_POSSIBLE:pe,STATE_BEGAN:he,STATE_CHANGED:fe,STATE_ENDED:de,STATE_RECOGNIZED:me,STATE_CANCELLED:ve,STATE_FAILED:32,DIRECTION_NONE:It,DIRECTION_LEFT:Dt,DIRECTION_RIGHT:At,DIRECTION_UP:Rt,DIRECTION_DOWN:Mt,DIRECTION_HORIZONTAL:Ft,DIRECTION_VERTICAL:Ht,DIRECTION_ALL:zt,Manager:pt,Input:k,TouchAction:K,TouchInput:W,MouseInput:X,PointerEventInput:Y,TouchMouseInput:J,SingleTouchInput:U,Recognizer:Q,AttrRecognizer:it,Tap:lt,Pan:ot,Swipe:ct,Pinch:rt,Rotate:at,Press:st,on:v,off:g,each:u,merge:_t,extend:bt,assign:dt,inherit:h,bindFn:f,prefixed:N}),(void 0!==o?o:"undefined"!=typeof self?self:{}).Hammer=ut,(i=function(){return ut}.call(e,n,e,t))!==a&&(t.exports=i)}(window,document)}});