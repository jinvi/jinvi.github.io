webpackJsonp([2],{326:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return function(e){return k(P(e,t),t)}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(55),c=i(u),l=n(56),p=i(l),h=n(0),f=i(h),m=n(57),d=i(m),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},g=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),y=n(329),E=n(58),T=n(10),b=i(T),_=n(332),N=i(_),w=n(346),D=i(w),O={User:{displayName:"User"},Main:{displayName:"Main"}},k=(0,d.default)({filename:"D:/work/projects/cnode-demo/app/components/User/User.js",components:O,locals:[t],imports:[f.default]}),P=(0,p.default)({filename:"D:/work/projects/cnode-demo/app/components/User/User.js",components:O,locals:[],imports:[f.default,c.default]}),S=a("User")(function(t){function e(t){r(this,e);var n=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.signOut=n.signOut.bind(n),n}return o(e,t),g(e,[{key:"signOut",value:function(){localStorage.removeItem(this.props.localStorageKey),this.props.history.push("/"+this.props.url)}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("div",{className:"user-head"},f.default.createElement("div",{className:"user-head-logout clear"},f.default.createElement("span",{className:"fright",onClick:this.signOut},"退出")),f.default.createElement("div",{className:"user-head-username"},this.props.userData.loginname),f.default.createElement("div",{className:"user-head-signInfo"},"积分：",this.props.userData.score)),f.default.createElement("div",{className:"user-avatar"},f.default.createElement("img",{src:this.props.userData.avatar_url})),f.default.createElement("ul",{className:"user-detail"},f.default.createElement("li",null,f.default.createElement("div",{className:"user-detail-num"},f.default.createElement(E.Link,{to:"/user/topics"},this.props.userData.recent_topics.length)),f.default.createElement("div",{className:"user-detail-name"},f.default.createElement("span",null,"主题"))),f.default.createElement("li",null,f.default.createElement("div",{className:"user-detail-num"},f.default.createElement(E.Link,{to:"/user/replies"},this.props.userData.recent_replies.length)),f.default.createElement("div",{className:"user-detail-name"},f.default.createElement("span",null,"回复"))),f.default.createElement("li",null,f.default.createElement("div",{className:"user-detail-num"},f.default.createElement(E.Link,{to:"/user/collect"},this.props.collectData.length)),f.default.createElement("div",{className:"user-detail-name"},f.default.createElement("span",null,"收藏")))),f.default.createElement("ul",{className:"user-items"},f.default.createElement("li",null,f.default.createElement(E.Link,{to:"/user/topics"},f.default.createElement("span",{className:"user-items-icon"},""),f.default.createElement("span",{className:"user-items-name"},"主题"),f.default.createElement("span",{className:"user-items-arrow fright"},""))),f.default.createElement("li",null,f.default.createElement(E.Link,{to:"/user/replies"},f.default.createElement("span",{className:"user-items-icon"},""),f.default.createElement("span",{className:"user-items-name"},"回复"),f.default.createElement("span",{className:"user-items-arrow fright"},""))),f.default.createElement("li",null,f.default.createElement(E.Link,{to:"/user/unreadMsg"},f.default.createElement("span",{className:"user-items-icon"},""),f.default.createElement("span",{className:"user-items-name"},"消息"),this.props.unReadMsgNum?f.default.createElement("span",{className:"user-items-unReadMsgNum"},this.props.unReadMsgNum):null,f.default.createElement("span",{className:"user-items-arrow fright"},""))),f.default.createElement("li",null,f.default.createElement(E.Link,{to:"/user/collect"},f.default.createElement("span",{className:"user-items-icon"},""),f.default.createElement("span",{className:"user-items-name"},"收藏"),f.default.createElement("span",{className:"user-items-arrow fright"},"")))),f.default.createElement(N.default,this.props.topProps))}}]),e}(h.Component)),C=a("Main")(function(t){function e(t){r(this,e);var n=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={userData:"",collectData:"",messageData:"",unReadMsgNum:0,isLoadFail:!1},n.loadData=n.loadData.bind(n),n}return o(e,t),g(e,[{key:"loadData",value:function(){var t=this,e=JSON.parse(localStorage.getItem(this.props.login.localStorageKey)),n=e.loginName,i="?accesstoken="+e.accessToken;(0,y.fetchJSON)({url:"/user/"+n,success:function(e){t.setState({userData:e.data})},fail:function(){t.setState({isLoadFail:!0})}}),(0,y.fetchJSON)({url:"/topic_collect/"+n,success:function(e){t.setState({collectData:e.data})}}),(0,y.fetchJSON)({url:"/message/count"+i,success:function(e){t.setState({unReadMsgNum:e.data})}}),(0,y.fetchJSON)({url:"/messages"+i,success:function(e){t.setState({messageData:e.data})}})}},{key:"render",value:function(){var t=this,e=this.state.userData,n=this.state.collectData,i=this.state.messageData;return e&&n?f.default.createElement(E.Switch,null,f.default.createElement(E.Route,{path:"/user",exact:!0,render:function(){return f.default.createElement(S,{userData:e,collectData:n,topProps:t.props,unReadMsgNum:t.state.unReadMsgNum,localStorageKey:t.props.login.localStorageKey,history:t.props.history,url:t.props.topicsList.url})}}),f.default.createElement(E.Route,{path:"/user/:type",render:function(r){return f.default.createElement(D.default,v({},r,{userData:e,collectData:n,messageData:i,getDuration:t.props.getDuration,topicId:t.props.topicId,dispatch:t.props.dispatch,scrollTopData:t.props.scrollTopData}))}})):f.default.createElement(b.default,{isLoadFail:this.state.isLoadFail})}},{key:"componentDidMount",value:function(){this.loadData()}}]),e}(h.Component));e.default=C}).call(e,n(21)(t))},329:function(t,e,n){"use strict";function i(t){console.log(t)}function r(t){console.log("出错: \n",t)}function s(t){if(!t.ok)throw Error(t.statusText);return t}function o(t){return t.json()}function a(t){return t.text()}function u(t){console.log(t)}function c(t){var e=t.url,n=t.success,i=t.req,a=t.fail;fetch(h+e,i).then(s).then(o).then(n).catch(a||r)}function l(t){fetch(t).then(s).then(a).then(i).catch(r)}function p(){fetch.apply(void 0,arguments).then(s).then(u).catch(r)}Object.defineProperty(e,"__esModule",{value:!0});var h="https://cnodejs.org/api/v1";e.fetchJSON=c,e.fetchText=l,e.backResponse=p},330:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){function n(t,e){var n=void 0,i=["","?tab=good","?tab=share","?tab=ask","?tab=job","?tab=dev"];return"swiperight"===t?(n=i.indexOf(e),0===n?i[i.length-1]:i[n-1]):(n=i.indexOf(e),n===i.length-1?i[0]:i[n+1])}var i=new p.default(t);i.on("swipeleft",function(t){e.props.history.push("/"+n("swipeleft",location.search))}),i.on("swiperight",function(t){e.props.history.push("/"+n("swiperight",location.search))})}function s(t,e,n){var i=new p.default(t);switch(e){case"press":i.get(e).set({time:600});break;case"pinch":i.get("pinch").set({enable:!0})}i.on(e,function(t){n.isRefreshList=!0,n.props.history.push({pathname:"/",search:location.search}),document.onselectstart=function(){return!1},document.oncontextmenu=function(){return!1},console.log(e)})}function o(t,e,n){new p.default(t).on("swiperight",function(t){if(e)return e(n);history.go(-1)})}function a(t,e){new p.default(t).on("swipeleft",function(t){document.documentElement.scrollTop=document.body.scrollTop=e()})}function u(t,e,n){new p.default(t).on("swipeleft",function(t){f.default.getState().topic.isReverseReplies?n():e()})}function c(t){new p.default(t).on("doubletap",function(t){document.documentElement.scrollTop=document.body.scrollTop=0})}Object.defineProperty(e,"__esModule",{value:!0}),e.gestureReload=e.gestureToTop=e.gestureCommentOrder=e.gestureToComment=e.gestureBack=e.gestureToNextTag=void 0;var l=n(333),p=i(l),h=n(113),f=i(h);e.gestureToNextTag=r,e.gestureBack=o,e.gestureToComment=a,e.gestureCommentOrder=u,e.gestureToTop=c,e.gestureReload=s},332:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),u=i(a),c=n(56),l=i(c),p=n(0),h=i(p),f=n(57),m=i(f),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),v=n(58),g={Nav:{displayName:"Nav"}},y=(0,m.default)({filename:"D:/work/projects/cnode-demo/app/components/common/nav.js",components:g,locals:[t],imports:[h.default]}),E=(0,l.default)({filename:"D:/work/projects/cnode-demo/app/components/common/nav.js",components:g,locals:[],imports:[h.default,u.default]}),T=function(t){return function(e){return y(E(e,t),t)}}("Nav")(function(t){function e(){return r(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),d(e,[{key:"render",value:function(){var t=localStorage.getItem(this.props.login.localStorageKey),e=this.props.location.search?"common-nav-active":"";return h.default.createElement("ul",{className:"common-nav"},h.default.createElement("li",null,this.props.topicsList.url?h.default.createElement(v.Link,{to:"/"+this.props.topicsList.url,className:e},h.default.createElement("span",{className:"common-nav-icon-font"},""),"首页"):h.default.createElement(v.NavLink,{to:"/",exact:!0,activeClassName:"common-nav-active"},h.default.createElement("span",{className:"common-nav-icon-font"},""),"首页")),h.default.createElement("li",null,h.default.createElement(v.NavLink,{to:t?"/create":"/login",exact:!0,activeClassName:"common-nav-active"},h.default.createElement("span",{className:"common-nav-icon-font"},""),"新建")),h.default.createElement("li",null,h.default.createElement(v.NavLink,{to:t?"/user":"/login",exact:!0,activeClassName:"common-nav-active"},h.default.createElement("span",{className:"common-nav-icon-font"},""),"我的")))}}]),e}(p.Component));e.default=T}).call(e,n(21)(t))},333:function(t,e,n){var i;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(r,s,o,a){"use strict";function u(t,e,n){return setTimeout(f(t,n),e)}function c(t,e,n){return!!Array.isArray(t)&&(l(t,n[e],n),!0)}function l(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function p(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=r.console&&(r.console.warn||r.console.log);return s&&s.call(r.console,i,n),t.apply(this,arguments)}}function h(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&mt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function m(t,e){return typeof t==gt?t.apply(e?e[0]||a:a,e):t}function d(t,e){return t===a?e:t}function v(t,e,n){l(T(e),function(e){t.addEventListener(e,n,!1)})}function g(t,e,n){l(T(e),function(e){t.removeEventListener(e,n,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function E(t,e){return t.indexOf(e)>-1}function T(t){return t.trim().split(/\s+/g)}function b(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function _(t){return Array.prototype.slice.call(t,0)}function N(t,e,n){for(var i=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];b(r,o)<0&&i.push(t[s]),r[s]=o,s++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function w(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),s=0;s<dt.length;){if(n=dt[s],(i=n?n+r:e)in t)return i;s++}return a}function D(){return Nt++}function O(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}function k(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){m(t.options.enable,[t])&&n.handler(e)},this.init()}function P(t){var e=t.options.inputClass;return new(e||(Ot?U:kt?H:Dt?V:F))(t,S)}function S(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,s=e&St&&i-r==0,o=e&(jt|Mt)&&i-r==0;n.isFirst=!!s,n.isFinal=!!o,s&&(t.session={}),n.eventType=e,C(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function C(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=I(e)),r>1&&!n.firstMultiple?n.firstMultiple=I(e):1===r&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,a=o?o.center:s.center,u=e.center=x(i);e.timeStamp=Tt(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=z(a,u),e.distance=A(a,u),j(n,e),e.offsetDirection=R(e.deltaX,e.deltaY);var c=L(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=Et(c.x)>Et(c.y)?c.x:c.y,e.scale=o?Y(o.pointers,i):1,e.rotation=o?X(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,M(n,e);var l=t.element;y(e.srcEvent.target,l)&&(l=e.srcEvent.target),e.target=l}function j(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==St&&s.eventType!==jt||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function M(t,e){var n,i,r,s,o=t.lastInterval||e,u=e.timeStamp-o.timeStamp;if(e.eventType!=Mt&&(u>Pt||o.velocity===a)){var c=e.deltaX-o.deltaX,l=e.deltaY-o.deltaY,p=L(u,c,l);i=p.x,r=p.y,n=Et(p.x)>Et(p.y)?p.x:p.y,s=R(c,l),t.lastInterval=e}else n=o.velocity,i=o.velocityX,r=o.velocityY,s=o.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=s}function I(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:yt(t.pointers[n].clientX),clientY:yt(t.pointers[n].clientY)},n++;return{timeStamp:Tt(),pointers:e,center:x(e),deltaX:t.deltaX,deltaY:t.deltaY}}function x(t){var e=t.length;if(1===e)return{x:yt(t[0].clientX),y:yt(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:yt(n/e),y:yt(i/e)}}function L(t,e,n){return{x:e/t||0,y:n/t||0}}function R(t,e){return t===e?It:Et(t)>=Et(e)?t<0?xt:Lt:e<0?Rt:At}function A(t,e,n){n||(n=Ft);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function z(t,e,n){n||(n=Ft);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function X(t,e){return z(e[1],e[0],Ut)+z(t[1],t[0],Ut)}function Y(t,e){return A(e[0],e[1],Ut)/A(t[0],t[1],Ut)}function F(){this.evEl=qt,this.evWin=Ht,this.pressed=!1,k.apply(this,arguments)}function U(){this.evEl=Jt,this.evWin=Kt,k.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function W(){this.evTarget=Zt,this.evWin=$t,this.started=!1,k.apply(this,arguments)}function q(t,e){var n=_(t.touches),i=_(t.changedTouches);return e&(jt|Mt)&&(n=N(n.concat(i),"identifier",!0)),[n,i]}function H(){this.evTarget=te,this.targetIds={},k.apply(this,arguments)}function B(t,e){var n=_(t.touches),i=this.targetIds;if(e&(St|Ct)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,s,o=_(t.changedTouches),a=[],u=this.target;if(s=n.filter(function(t){return y(t.target,u)}),e===St)for(r=0;r<s.length;)i[s[r].identifier]=!0,r++;for(r=0;r<o.length;)i[o[r].identifier]&&a.push(o[r]),e&(jt|Mt)&&delete i[o[r].identifier],r++;return a.length?[N(s.concat(a),"identifier",!0),a]:void 0}function V(){k.apply(this,arguments);var t=f(this.handler,this);this.touch=new H(this.manager,t),this.mouse=new F(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function J(t,e){t&St?(this.primaryTouch=e.changedPointers[0].identifier,K.call(this,e)):t&(jt|Mt)&&K.call(this,e)}function K(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,ee)}}function G(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],s=Math.abs(e-r.x),o=Math.abs(n-r.y);if(s<=ne&&o<=ne)return!0}return!1}function Z(t,e){this.manager=t,this.set(e)}function $(t){if(E(t,ae))return ae;var e=E(t,ue),n=E(t,ce);return e&&n?ae:e||n?e?ue:ce:E(t,oe)?oe:se}function Q(t){this.options=mt({},this.defaults,t||{}),this.id=D(),this.manager=null,this.options.enable=d(this.options.enable,!0),this.state=pe,this.simultaneous={},this.requireFail=[]}function tt(t){return t&ve?"cancel":t&me?"end":t&fe?"move":t&he?"start":""}function et(t){return t==At?"down":t==Rt?"up":t==xt?"left":t==Lt?"right":""}function nt(t,e){var n=e.manager;return n?n.get(t):t}function it(){Q.apply(this,arguments)}function rt(){it.apply(this,arguments),this.pX=null,this.pY=null}function st(){it.apply(this,arguments)}function ot(){Q.apply(this,arguments),this._timer=null,this._input=null}function at(){it.apply(this,arguments)}function ut(){it.apply(this,arguments)}function ct(){Q.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function lt(t,e){return e=e||{},e.recognizers=d(e.recognizers,lt.defaults.preset),new pt(t,e)}function pt(t,e){this.options=mt({},lt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=P(this),this.touchAction=new Z(this,this.options.touchAction),ht(this,!0),l(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ht(t,e){var n=t.element;if(n.style){var i;l(t.options.cssProps,function(r,s){i=w(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function ft(t,e){var n=s.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var mt,dt=["","webkit","Moz","MS","ms","o"],vt=s.createElement("div"),gt="function",yt=Math.round,Et=Math.abs,Tt=Date.now;mt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var bt=p(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),_t=p(function(t,e){return bt(t,e,!0)},"merge","Use `assign`."),Nt=1,wt=/mobile|tablet|ip(ad|hone|od)|android/i,Dt="ontouchstart"in r,Ot=w(r,"PointerEvent")!==a,kt=Dt&&wt.test(navigator.userAgent),Pt=25,St=1,Ct=2,jt=4,Mt=8,It=1,xt=2,Lt=4,Rt=8,At=16,zt=xt|Lt,Xt=Rt|At,Yt=zt|Xt,Ft=["x","y"],Ut=["clientX","clientY"];k.prototype={handler:function(){},init:function(){this.evEl&&v(this.element,this.evEl,this.domHandler),this.evTarget&&v(this.target,this.evTarget,this.domHandler),this.evWin&&v(O(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(O(this.element),this.evWin,this.domHandler)}};var Wt={mousedown:St,mousemove:Ct,mouseup:jt},qt="mousedown",Ht="mousemove mouseup";h(F,k,{handler:function(t){var e=Wt[t.type];e&St&&0===t.button&&(this.pressed=!0),e&Ct&&1!==t.which&&(e=jt),this.pressed&&(e&jt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Bt={pointerdown:St,pointermove:Ct,pointerup:jt,pointercancel:Mt,pointerout:Mt},Vt={2:"touch",3:"pen",4:"mouse",5:"kinect"},Jt="pointerdown",Kt="pointermove pointerup pointercancel";r.MSPointerEvent&&!r.PointerEvent&&(Jt="MSPointerDown",Kt="MSPointerMove MSPointerUp MSPointerCancel"),h(U,k,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Bt[i],s=Vt[t.pointerType]||t.pointerType,o="touch"==s,a=b(e,t.pointerId,"pointerId");r&St&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):r&(jt|Mt)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),n&&e.splice(a,1))}});var Gt={touchstart:St,touchmove:Ct,touchend:jt,touchcancel:Mt},Zt="touchstart",$t="touchstart touchmove touchend touchcancel";h(W,k,{handler:function(t){var e=Gt[t.type];if(e===St&&(this.started=!0),this.started){var n=q.call(this,t,e);e&(jt|Mt)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var Qt={touchstart:St,touchmove:Ct,touchend:jt,touchcancel:Mt},te="touchstart touchmove touchend touchcancel";h(H,k,{handler:function(t){var e=Qt[t.type],n=B.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var ee=2500,ne=25;h(V,k,{handler:function(t,e,n){var i="touch"==n.pointerType,r="mouse"==n.pointerType;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)J.call(this,e,n);else if(r&&G.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ie=w(vt.style,"touchAction"),re=ie!==a,se="auto",oe="manipulation",ae="none",ue="pan-x",ce="pan-y",le=function(){if(!re)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||r.CSS.supports("touch-action",n)}),t}();Z.prototype={set:function(t){"compute"==t&&(t=this.compute()),re&&this.manager.element.style&&le[t]&&(this.manager.element.style[ie]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return l(this.manager.recognizers,function(e){m(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),$(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=E(i,ae)&&!le[ae],s=E(i,ce)&&!le[ce],o=E(i,ue)&&!le[ue];if(r){var a=1===t.pointers.length,u=t.distance<2,c=t.deltaTime<250;if(a&&u&&c)return}return o&&s?void 0:r||s&&n&zt||o&&n&Xt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var pe=1,he=2,fe=4,me=8,de=me,ve=16;Q.prototype={defaults:{},set:function(t){return mt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(c(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=nt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return c(t,"dropRecognizeWith",this)?this:(t=nt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(c(t,"requireFailure",this))return this;var e=this.requireFail;return t=nt(t,this),-1===b(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(c(t,"dropRequireFailure",this))return this;t=nt(t,this);var e=b(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<me&&e(n.options.event+tt(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=me&&e(n.options.event+tt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|pe)))return!1;t++}return!0},recognize:function(t){var e=mt({},t);if(!m(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(de|ve|32)&&(this.state=pe),this.state=this.process(e),this.state&(he|fe|me|ve)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},h(it,Q,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(he|fe),r=this.attrTest(t);return i&&(n&Mt||!r)?e|ve:i||r?n&jt?e|me:e&he?e|fe:he:32}}),h(rt,it,{defaults:{event:"pan",threshold:10,pointers:1,direction:Yt},getTouchAction:function(){var t=this.options.direction,e=[];return t&zt&&e.push(ce),t&Xt&&e.push(ue),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&zt?(r=0===s?It:s<0?xt:Lt,n=s!=this.pX,i=Math.abs(t.deltaX)):(r=0===o?It:o<0?Rt:At,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return it.prototype.attrTest.call(this,t)&&(this.state&he||!(this.state&he)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=et(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),h(st,it,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&he)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),h(ot,Q,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[se]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(jt|Mt)&&!r)this.reset();else if(t.eventType&St)this.reset(),this._timer=u(function(){this.state=de,this.tryEmit()},e.time,this);else if(t.eventType&jt)return de;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===de&&(t&&t.eventType&jt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Tt(),this.manager.emit(this.options.event,this._input)))}}),h(at,it,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&he)}}),h(ut,it,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:zt|Xt,pointers:1},getTouchAction:function(){return rt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(zt|Xt)?e=t.overallVelocity:n&zt?e=t.overallVelocityX:n&Xt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&Et(e)>this.options.velocity&&t.eventType&jt},emit:function(t){var e=et(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),h(ct,Q,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[oe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&St&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=jt)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||A(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=u(function(){this.state=de,this.tryEmit()},e.interval,this),he):de}return 32},failTimeout:function(){return this._timer=u(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==de&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),lt.VERSION="2.0.7",lt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[at,{enable:!1}],[st,{enable:!1},["rotate"]],[ut,{direction:zt}],[rt,{direction:zt},["swipe"]],[ct],[ct,{event:"doubletap",taps:2},["tap"]],[ot]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};pt.prototype={set:function(t){return mt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&de)&&(r=e.curRecognizer=null);for(var s=0;s<i.length;)n=i[s],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(he|fe|me)&&(r=e.curRecognizer=n),s++}},get:function(t){if(t instanceof Q)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(c(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(c(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=b(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return l(T(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return l(T(t),function(t){e?n[t]&&n[t].splice(b(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&ft(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ht(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},mt(lt,{INPUT_START:St,INPUT_MOVE:Ct,INPUT_END:jt,INPUT_CANCEL:Mt,STATE_POSSIBLE:pe,STATE_BEGAN:he,STATE_CHANGED:fe,STATE_ENDED:me,STATE_RECOGNIZED:de,STATE_CANCELLED:ve,STATE_FAILED:32,DIRECTION_NONE:It,DIRECTION_LEFT:xt,DIRECTION_RIGHT:Lt,DIRECTION_UP:Rt,DIRECTION_DOWN:At,DIRECTION_HORIZONTAL:zt,DIRECTION_VERTICAL:Xt,DIRECTION_ALL:Yt,Manager:pt,Input:k,TouchAction:Z,TouchInput:H,MouseInput:F,PointerEventInput:U,TouchMouseInput:V,SingleTouchInput:W,Recognizer:Q,AttrRecognizer:it,Tap:ct,Pan:rt,Swipe:ut,Pinch:st,Rotate:at,Press:ot,on:v,off:g,each:l,merge:_t,extend:bt,assign:mt,inherit:h,bindFn:f,prefixed:w}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=lt,(i=function(){return lt}.call(e,n,e,t))!==a&&(t.exports=i)}(window,document)},336:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),u=i(a),c=n(56),l=i(c),p=n(0),h=i(p),f=n(57),m=i(f),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),v={Main:{displayName:"Main"}},g=(0,m.default)({filename:"D:/work/projects/cnode-demo/app/components/common/back.js",components:v,locals:[t],imports:[h.default]}),y=(0,l.default)({filename:"D:/work/projects/cnode-demo/app/components/common/back.js",components:v,locals:[],imports:[h.default,u.default]}),E=function(t){return function(e){return g(y(e,t),t)}}("Main")(function(t){function e(t){r(this,e);var n=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.goBack=n.goBack.bind(n),n}return o(e,t),d(e,[{key:"goBack",value:function(t){if(t.stopPropagation(),this.props.path)return this.props.history.push(this.props.path);history.go(-1)}},{key:"toTop",value:function(){document.documentElement.scrollTop=document.body.scrollTop=0}},{key:"render",value:function(){return h.default.createElement("div",{className:"common-back-container"},h.default.createElement("div",{className:"common-back hei clear "+(this.props.additionalClass||""),onClick:this.toTop,ref:this.props._commonBack},h.default.createElement("span",{className:"common-back-btn common-back-icon-font",onClick:this.goBack},""),this.props.children),h.default.createElement("div",{className:"hei"}))}}]),e}(p.Component));e.default=E}).call(e,n(21)(t))},346:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),u=i(a),c=n(56),l=i(c),p=n(0),h=i(p),f=n(57),m=i(f),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},v=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),g=n(58),y=n(330),E=n(336),T=i(E),b={Main:{displayName:"Main"}},_=(0,m.default)({filename:"D:/work/projects/cnode-demo/app/components/User/DataList.js",components:b,locals:[t],imports:[h.default]}),N=(0,l.default)({filename:"D:/work/projects/cnode-demo/app/components/User/DataList.js",components:b,locals:[],imports:[h.default,u.default]}),w=function(t){return function(e){return _(N(e,t),t)}}("Main")(function(t){function e(t){r(this,e);var n=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={data:[],originLength:0},n.menuList=[],n.currentType="",n.setData=n.setData.bind(n),n}return o(e,t),v(e,[{key:"setData",value:function(){var t=void 0,e=[{name:"主题",path:"/user/topics"},{name:"回复",path:"/user/replies"},{name:"收藏",path:"/user/collect"}],n=[{name:"未读消息",path:"/user/unreadMsg"},{name:"已读消息",path:"/user/readMsg"}];switch(this.props.history.location.pathname.split("/")[2]){case"topics":t=this.props.userData.recent_topics,this.menuList=e,this.currentType="主题";break;case"replies":t=this.props.userData.recent_replies,this.menuList=e,this.currentType="回复";break;case"collect":t=this.props.collectData,this.menuList=e,this.currentType="收藏";break;case"unreadMsg":t=this.props.messageData.hasnot_read_messages,this.menuList=n,this.currentType="未读消息";break;case"readMsg":t=this.props.messageData.has_read_messages,this.menuList=n,this.currentType="已读消息"}this.setState({data:t,originLength:t.length})}},{key:"render",value:function(){var t=this;return h.default.createElement("div",null,h.default.createElement(T.default,d({additionalClass:"flex",path:"/user"},this.props),h.default.createElement("ul",{className:"user-submenu"},this.menuList.map(function(t,e){return h.default.createElement("li",{key:e},h.default.createElement(g.NavLink,{to:t.path,activeClassName:"active",onClick:function(t){return t.stopPropagation()}},t.name))}))),h.default.createElement("div",{className:"user-subtitle",ref:function(e){return t._subtitle=e}},"共",h.default.createElement("span",{className:"active"},this.state.originLength),this.currentType),h.default.createElement("ul",{className:"user-sublist",ref:function(e){return t._sublist=e}},this.state.data.map(function(e,n){return-1===t.currentType.search(/消息/)?h.default.createElement("li",{key:n,className:"user-sublist-item"},"  ",h.default.createElement(g.Link,{to:"/topic/"+e.id,className:"clear"},h.default.createElement("span",{className:"user-sublist-avatar fleft"},h.default.createElement("img",{src:e.author.avatar_url})),h.default.createElement("span",{className:"user-sublist-title fleft"+(t.props.topicId===e.id?" active":"")},e.title),h.default.createElement("span",{className:"user-sublist-date fright"},e.create_at?t.props.getDuration(e.create_at):t.props.getDuration(e.last_reply_at)))):h.default.createElement("li",{key:n,className:"user-sublist-msgItem"},"  ",h.default.createElement("a",{href:"https://cnodejs.org/user/"+e.author.loginname,target:"_blank"},e.author.loginname)," 回复了你的 话题 ",h.default.createElement(g.Link,{to:"/topic/"+e.topic.id},e.topic.title))})))}},{key:"componentWillMount",value:function(){this.setData()}},{key:"componentWillUnmount",value:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.props.dispatch({type:"SET_USER_SCROLL_TOP",payload:{value:t,currentType:this.currentType}})}},{key:"shouldComponentUpdate",value:function(t,e){if(this.props.history.location.pathname!==this.props.match.url){document.documentElement.scrollTop||document.body.scrollTop;this.setData()}return!0}},{key:"componentDidMount",value:function(){this.currentType===this.props.scrollTopData.currentType&&this.props.scrollTopData.value&&(document.documentElement.scrollTop=document.body.scrollTop=this.props.scrollTopData.value),(0,y.gestureBack)(this._sublist,this.props.history.push,"/user")}}]),e}(p.Component));e.default=w}).call(e,n(21)(t))}});