webpackJsonp([3],{325:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){return w(T(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=a(55),u=n(c),i=a(56),p=n(i),m=a(0),f=n(m),d=a(57),h=n(d),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(328),E=a(58),g=a(10),N=n(g),_=a(331),k=n(_),O=a(345),D=n(O),j={User:{displayName:"User"},Main:{displayName:"Main"}},w=(0,h.default)({filename:"D:/own/my doc/myProject/cnode-demo/app/components/User/User.js",components:j,locals:[e],imports:[f.default]}),T=(0,p.default)({filename:"D:/own/my doc/myProject/cnode-demo/app/components/User/User.js",components:j,locals:[],imports:[f.default,u.default]}),P=l("User")(function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.signOut=a.signOut.bind(a),a}return s(t,e),v(t,[{key:"signOut",value:function(){localStorage.removeItem(this.props.localStorageKey),this.props.history.push("/"+this.props.url)}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("div",{className:"user-head"},f.default.createElement("div",{className:"user-head-logout clear"},f.default.createElement("span",{className:"fright",onClick:this.signOut},"退出")),f.default.createElement("div",{className:"user-head-username"},this.props.userData.loginname),f.default.createElement("div",{className:"user-head-signInfo"},"积分：",this.props.userData.score)),f.default.createElement("div",{className:"user-avatar"},f.default.createElement("img",{src:this.props.userData.avatar_url})),f.default.createElement("ul",{className:"user-detail"},f.default.createElement("li",null,f.default.createElement("div",{className:"user-detail-num"},f.default.createElement(E.Link,{to:"/user/topics"},this.props.userData.recent_topics.length)),f.default.createElement("div",{className:"user-detail-name"},f.default.createElement("span",null,"主题"))),f.default.createElement("li",null,f.default.createElement("div",{className:"user-detail-num"},f.default.createElement(E.Link,{to:"/user/replies"},this.props.userData.recent_replies.length)),f.default.createElement("div",{className:"user-detail-name"},f.default.createElement("span",null,"回复"))),f.default.createElement("li",null,f.default.createElement("div",{className:"user-detail-num"},f.default.createElement(E.Link,{to:"/user/collect"},this.props.collectData.length)),f.default.createElement("div",{className:"user-detail-name"},f.default.createElement("span",null,"收藏")))),f.default.createElement("ul",{className:"user-items"},f.default.createElement("li",null,f.default.createElement(E.Link,{to:"/user/topics"},f.default.createElement("span",{className:"user-items-icon"},""),f.default.createElement("span",{className:"user-items-name"},"主题"),f.default.createElement("span",{className:"user-items-arrow fright"},""))),f.default.createElement("li",null,f.default.createElement(E.Link,{to:"/user/replies"},f.default.createElement("span",{className:"user-items-icon"},""),f.default.createElement("span",{className:"user-items-name"},"回复"),f.default.createElement("span",{className:"user-items-arrow fright"},""))),f.default.createElement("li",null,f.default.createElement(E.Link,{to:"/user/unreadMsg"},f.default.createElement("span",{className:"user-items-icon"},""),f.default.createElement("span",{className:"user-items-name"},"消息"),this.props.unReadMsgNum?f.default.createElement("span",{className:"user-items-unReadMsgNum"},this.props.unReadMsgNum):null,f.default.createElement("span",{className:"user-items-arrow fright"},""))),f.default.createElement("li",null,f.default.createElement(E.Link,{to:"/user/collect"},f.default.createElement("span",{className:"user-items-icon"},""),f.default.createElement("span",{className:"user-items-name"},"收藏"),f.default.createElement("span",{className:"user-items-arrow fright"},"")))),f.default.createElement(k.default,this.props.topProps))}}]),t}(m.Component)),L=l("Main")(function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={userData:"",collectData:"",messageData:"",unReadMsgNum:0,isLoadFail:!1},a.loadData=a.loadData.bind(a),a}return s(t,e),v(t,[{key:"loadData",value:function(){var e=this,t=JSON.parse(localStorage.getItem(this.props.login.localStorageKey)),a=t.loginName,n="?accesstoken="+t.accessToken;(0,b.fetchJSON)({url:"/user/"+a,success:function(t){e.setState({userData:t.data})},fail:function(){e.setState({isLoadFail:!0})}}),(0,b.fetchJSON)({url:"/topic_collect/"+a,success:function(t){e.setState({collectData:t.data})}}),(0,b.fetchJSON)({url:"/message/count"+n,success:function(t){e.setState({unReadMsgNum:t.data})}}),(0,b.fetchJSON)({url:"/messages"+n,success:function(t){e.setState({messageData:t.data})}})}},{key:"render",value:function(){var e=this,t=this.state.userData,a=this.state.collectData,n=this.state.messageData;return t&&a?f.default.createElement(E.Switch,null,f.default.createElement(E.Route,{path:"/user",exact:!0,render:function(){return f.default.createElement(P,{userData:t,collectData:a,topProps:e.props,unReadMsgNum:e.state.unReadMsgNum,localStorageKey:e.props.login.localStorageKey,history:e.props.history,url:e.props.topicsList.url})}}),f.default.createElement(E.Route,{path:"/user/:type",render:function(o){return f.default.createElement(D.default,y({},o,{userData:t,collectData:a,messageData:n,getDuration:e.props.getDuration,topicId:e.props.topicId,dispatch:e.props.dispatch,scrollTopData:e.props.scrollTopData}))}})):f.default.createElement(N.default,{isLoadFail:this.state.isLoadFail})}},{key:"componentDidMount",value:function(){this.loadData()}}]),t}(m.Component));t.default=L}).call(t,a(21)(e))},328:function(e,t,a){"use strict";function n(e){console.log(e)}function o(e){console.log("出错: \n",e)}function r(e){if(!e.ok)throw Error(e.statusText);return e}function s(e){return e.json()}function l(e){return e.text()}function c(e){console.log(e)}function u(e){var t=e.url,a=e.success,n=e.req,l=e.fail;fetch(m+t,n).then(r).then(s).then(a).catch(l||o)}function i(e){fetch(e).then(r).then(l).then(n).catch(o)}function p(){fetch.apply(void 0,arguments).then(r).then(c).catch(o)}Object.defineProperty(t,"__esModule",{value:!0});var m="https://cnodejs.org/api/v1";t.fetchJSON=u,t.fetchText=i,t.backResponse=p},331:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(55),c=n(l),u=a(56),i=n(u),p=a(0),m=n(p),f=a(57),d=n(f),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(58),v={Nav:{displayName:"Nav"}},b=(0,d.default)({filename:"D:/own/my doc/myProject/cnode-demo/app/components/common/nav.js",components:v,locals:[e],imports:[m.default]}),E=(0,i.default)({filename:"D:/own/my doc/myProject/cnode-demo/app/components/common/nav.js",components:v,locals:[],imports:[m.default,c.default]}),g=function(e){return function(t){return b(E(t,e),e)}}("Nav")(function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),h(t,[{key:"render",value:function(){var e=localStorage.getItem(this.props.login.localStorageKey),t=this.props.location.search?"common-nav-active":"";return m.default.createElement("ul",{className:"common-nav"},m.default.createElement("li",null,this.props.topicsList.url?m.default.createElement(y.Link,{to:"/"+this.props.topicsList.url,className:t},m.default.createElement("span",{className:"common-nav-icon-font"},""),"首页"):m.default.createElement(y.NavLink,{to:"/",exact:!0,activeClassName:"common-nav-active"},m.default.createElement("span",{className:"common-nav-icon-font"},""),"首页")),m.default.createElement("li",null,m.default.createElement(y.NavLink,{to:e?"/create":"/login",exact:!0,activeClassName:"common-nav-active"},m.default.createElement("span",{className:"common-nav-icon-font"},""),"新建")),m.default.createElement("li",null,m.default.createElement(y.NavLink,{to:e?"/user":"/login",exact:!0,activeClassName:"common-nav-active"},m.default.createElement("span",{className:"common-nav-icon-font"},""),"我的")))}}]),t}(p.Component));t.default=g}).call(t,a(21)(e))},334:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(55),c=n(l),u=a(56),i=n(u),p=a(0),m=n(p),f=a(57),d=n(f),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y={Main:{displayName:"Main"}},v=(0,d.default)({filename:"D:/own/my doc/myProject/cnode-demo/app/components/common/back.js",components:y,locals:[e],imports:[m.default]}),b=(0,i.default)({filename:"D:/own/my doc/myProject/cnode-demo/app/components/common/back.js",components:y,locals:[],imports:[m.default,c.default]}),E=function(e){return function(t){return v(b(t,e),e)}}("Main")(function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.goBack=a.goBack.bind(a),a}return s(t,e),h(t,[{key:"goBack",value:function(e){if(e.stopPropagation(),this.props.path)return this.props.history.push(this.props.path);history.go(-1)}},{key:"toTop",value:function(){document.documentElement.scrollTop=document.body.scrollTop=0}},{key:"render",value:function(){return m.default.createElement("div",{className:"common-back-container"},m.default.createElement("div",{className:"common-back hei clear "+(this.props.additionalClass||""),onClick:this.toTop,ref:this.props._commonBack},m.default.createElement("span",{className:"common-back-btn common-back-icon-font",onClick:this.goBack},""),this.props.children),m.default.createElement("div",{className:"hei"}))}}]),t}(p.Component));t.default=E}).call(t,a(21)(e))},345:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(55),c=n(l),u=a(56),i=n(u),p=a(0),m=n(p),f=a(57),d=n(f),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=a(58),b=a(334),E=n(b),g={Main:{displayName:"Main"}},N=(0,d.default)({filename:"D:/own/my doc/myProject/cnode-demo/app/components/User/DataList.js",components:g,locals:[e],imports:[m.default]}),_=(0,i.default)({filename:"D:/own/my doc/myProject/cnode-demo/app/components/User/DataList.js",components:g,locals:[],imports:[m.default,c.default]}),k=function(e){return function(t){return N(_(t,e),e)}}("Main")(function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={data:[],originLength:0},a.menuList=[],a.currentType="",a.setData=a.setData.bind(a),a}return s(t,e),y(t,[{key:"setData",value:function(){var e=void 0,t=[{name:"主题",path:"/user/topics"},{name:"回复",path:"/user/replies"},{name:"收藏",path:"/user/collect"}],a=[{name:"未读消息",path:"/user/unreadMsg"},{name:"已读消息",path:"/user/readMsg"}];switch(this.props.history.location.pathname.split("/")[2]){case"topics":e=this.props.userData.recent_topics,this.menuList=t,this.currentType="主题";break;case"replies":e=this.props.userData.recent_replies,this.menuList=t,this.currentType="回复";break;case"collect":e=this.props.collectData,this.menuList=t,this.currentType="收藏";break;case"unreadMsg":e=this.props.messageData.hasnot_read_messages,this.menuList=a,this.currentType="未读消息";break;case"readMsg":e=this.props.messageData.has_read_messages,this.menuList=a,this.currentType="已读消息"}this.setState({data:e,originLength:e.length})}},{key:"render",value:function(){var e=this;return m.default.createElement("div",null,m.default.createElement(E.default,h({additionalClass:"flex",path:"/user"},this.props),m.default.createElement("ul",{className:"user-submenu"},this.menuList.map(function(e,t){return m.default.createElement("li",{key:t},m.default.createElement(v.NavLink,{to:e.path,activeClassName:"active",onClick:function(e){return e.stopPropagation()}},e.name))}))),m.default.createElement("div",{className:"user-subtitle",ref:function(t){return e._subtitle=t}},"共",m.default.createElement("span",{className:"active"},this.state.originLength),this.currentType),m.default.createElement("ul",{className:"user-sublist",ref:function(t){return e._sublist=t}},this.state.data.map(function(t,a){return-1===e.currentType.search(/消息/)?m.default.createElement("li",{key:a,className:"user-sublist-item"},"  ",m.default.createElement(v.Link,{to:"/topic/"+t.id,className:"clear"},m.default.createElement("span",{className:"user-sublist-avatar fleft"},m.default.createElement("img",{src:t.author.avatar_url})),m.default.createElement("span",{className:"user-sublist-title fleft"+(e.props.topicId===t.id?" active":"")},t.title),m.default.createElement("span",{className:"user-sublist-date fright"},t.create_at?e.props.getDuration(t.create_at):e.props.getDuration(t.last_reply_at)))):m.default.createElement("li",{key:a,className:"user-sublist-msgItem"},"  ",m.default.createElement("a",{href:"https://cnodejs.org/user/"+t.author.loginname,target:"_blank"},t.author.loginname)," 回复了你的 话题 ",m.default.createElement(v.Link,{to:"/topic/"+t.topic.id},t.topic.title))})))}},{key:"componentWillMount",value:function(){this.setData()}},{key:"componentWillUnmount",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;this.props.dispatch({type:"SET_USER_SCROLL_TOP",payload:{value:e,currentType:this.currentType}})}},{key:"shouldComponentUpdate",value:function(e,t){if(this.props.history.location.pathname!==this.props.match.url){document.documentElement.scrollTop||document.body.scrollTop;this.setData()}return!0}},{key:"componentDidMount",value:function(){this.currentType===this.props.scrollTopData.currentType&&this.props.scrollTopData.value&&(document.documentElement.scrollTop=document.body.scrollTop=this.props.scrollTopData.value)}}]),t}(p.Component));t.default=k}).call(t,a(21)(e))}});