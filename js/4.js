webpackJsonp([4],{326:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(55),u=o(a),s=n(56),l=o(s),f=n(0),p=o(f),d=n(57),h=o(d),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y=n(328),b=n(334),_=o(b),v=n(346),g=(o(v),{Main:{displayName:"Main"}}),k=(0,h.default)({filename:"D:/work/projects/cnode-demo/app/components/Login/Login.js",components:g,locals:[e],imports:[p.default]}),w=(0,l.default)({filename:"D:/work/projects/cnode-demo/app/components/Login/Login.js",components:g,locals:[],imports:[p.default,u.default]}),j=function(e){return function(t){return k(w(t,e),e)}}("Main")(function(e){function t(e){r(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isActive:""},n.sendLoginReq=n.sendLoginReq.bind(n),n}return i(t,e),m(t,[{key:"setActiveClass",value:function(e){this.setState({isActive:e})}},{key:"sendLoginReq",value:function(e){var t=this;e.preventDefault();var n=new FormData(document.querySelector("form")),o=n.get("accesstoken");(0,y.fetchJSON)({url:"/accesstoken",req:{method:"post",body:"accesstoken="+o,headers:{"Content-Type":"application/x-www-form-urlencoded"}},success:function(e){var n={accessToken:o,loginName:e.loginname,id:e.id,avatar_url:e.avatar_url};t.props.dispatch({type:"SET_LOGIN_SUCCESS",payload:!0}),localStorage.setItem(t.props.localStorageKey,JSON.stringify(n)),history.back(-1)},fail:function(e){alert("登录失败，请重新尝试。")}})}},{key:"render",value:function(){var e=this;return p.default.createElement("div",null,p.default.createElement(_.default,null),p.default.createElement("div",{className:"login-container"},p.default.createElement("div",{className:"login"},p.default.createElement("div",{className:"login-title"},"用户登录"),p.default.createElement("div",{className:"login-title-decoration"}),p.default.createElement("form",null,p.default.createElement("div",null,p.default.createElement("input",{className:"login-text"+this.state.isActive,placeholder:"Access Token",type:"text",onFocus:function(){e.setActiveClass(" active")},onBlur:function(){e.setActiveClass("")},name:"accesstoken"})),p.default.createElement("button",{className:"login-btn",onClick:this.sendLoginReq},"登录")),p.default.createElement("div",{className:"login-detail"},p.default.createElement("span",{className:"login-detail-icon"},""),"Access Token在",p.default.createElement("a",{href:"https://cnodejs.org/setting",target:"_blank"},"设置"),"页面"))))}}]),t}(f.Component));t.default=j}).call(t,n(21)(e))},328:function(e,t,n){"use strict";function o(e){console.log(e)}function r(e){console.log("出错: \n",e)}function c(e){if(!e.ok)throw Error(e.statusText);return e}function i(e){return e.json()}function a(e){return e.text()}function u(e){console.log(e)}function s(e){var t=e.url,n=e.success,o=e.req,a=e.fail;fetch(p+t,o).then(c).then(i).then(n).catch(a||r)}function l(e){fetch(e).then(c).then(a).then(o).catch(r)}function f(){fetch.apply(void 0,arguments).then(c).then(u).catch(r)}Object.defineProperty(t,"__esModule",{value:!0});var p="https://cnodejs.org/api/v1";t.fetchJSON=s,t.fetchText=l,t.backResponse=f},334:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(55),u=o(a),s=n(56),l=o(s),f=n(0),p=o(f),d=n(57),h=o(d),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y={Main:{displayName:"Main"}},b=(0,h.default)({filename:"D:/work/projects/cnode-demo/app/components/common/back.js",components:y,locals:[e],imports:[p.default]}),_=(0,l.default)({filename:"D:/work/projects/cnode-demo/app/components/common/back.js",components:y,locals:[],imports:[p.default,u.default]}),v=function(e){return function(t){return b(_(t,e),e)}}("Main")(function(e){function t(e){r(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.goBack=n.goBack.bind(n),n}return i(t,e),m(t,[{key:"goBack",value:function(e){if(e.stopPropagation(),this.props.path)return this.props.history.push(this.props.path);history.go(-1)}},{key:"toTop",value:function(){document.documentElement.scrollTop=document.body.scrollTop=0}},{key:"render",value:function(){return p.default.createElement("div",{className:"common-back-container"},p.default.createElement("div",{className:"common-back hei clear "+(this.props.additionalClass||""),onClick:this.toTop,ref:this.props._commonBack},p.default.createElement("span",{className:"common-back-btn common-back-icon-font",onClick:this.goBack},""),this.props.children),p.default.createElement("div",{className:"hei"}))}}]),t}(f.Component));t.default=v}).call(t,n(21)(e))},346:function(e,t,n){"use strict";!function(){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function o(e,t,o){var r,c=new Promise(function(c,i){r=e[t].apply(e,o),n(r).then(c,i)});return c.request=r,c}function r(e,t,n){var r=o(e,t,n);return r.then(function(e){if(e)return new l(e,r.request)})}function c(e,t,n){n.forEach(function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})})}function i(e,t,n,r){r.forEach(function(r){r in n.prototype&&(e.prototype[r]=function(){return o(this[t],r,arguments)})})}function a(e,t,n,o){o.forEach(function(o){o in n.prototype&&(e.prototype[o]=function(){return this[t][o].apply(this[t],arguments)})})}function u(e,t,n,o){o.forEach(function(o){o in n.prototype&&(e.prototype[o]=function(){return r(this[t],o,arguments)})})}function s(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function f(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise(function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}})}function d(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function h(e){this._db=e}c(s,"_index",["name","keyPath","multiEntry","unique"]),i(s,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(s,"_index",IDBIndex,["openCursor","openKeyCursor"]),c(l,"_cursor",["direction","key","primaryKey","value"]),i(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,o=arguments;return Promise.resolve().then(function(){return t._cursor[e].apply(t._cursor,o),n(t._request).then(function(e){if(e)return new l(e,t._request)})})})}),f.prototype.createIndex=function(){return new s(this._store.createIndex.apply(this._store,arguments))},f.prototype.index=function(){return new s(this._store.index.apply(this._store,arguments))},c(f,"_store",["name","keyPath","indexNames","autoIncrement"]),i(f,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(f,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(f,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new f(this._tx.objectStore.apply(this._tx,arguments))},c(p,"_tx",["objectStoreNames","mode"]),a(p,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new f(this._db.createObjectStore.apply(this._db,arguments))},c(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},c(h,"_db",["name","version","objectStoreNames"]),a(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(e){[f,s].forEach(function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),o=n[n.length-1],r=this._store||this._index,c=r[e].apply(r,n.slice(0,-1));c.onsuccess=function(){o(c.result)}})})}),[s,f].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,o=[];return new Promise(function(r){n.iterateCursor(e,function(e){return e?(o.push(e.value),void 0!==t&&o.length==t?void r(o):void e.continue()):void r(o)})})})});var m={open:function(e,t,n){var r=o(indexedDB,"open",[e,t]),c=r.request;return c&&(c.onupgradeneeded=function(e){n&&n(new d(c.result,e.oldVersion,c.transaction))}),r.then(function(e){return new h(e)})},delete:function(e){return o(indexedDB,"deleteDatabase",[e])}};e.exports=m,e.exports.default=e.exports}()}});