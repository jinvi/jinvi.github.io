webpackJsonp([5],{337:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(55),i=o(c),s=n(56),p=o(s),u=n(0),f=o(u),m=n(57),y=o(m),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=n(328),b={Main:{displayName:"Main"}},v=(0,y.default)({filename:"D:/work/projects/cnode-demo/app/components/Reply/Reply.js",components:b,locals:[e],imports:[f.default]}),k=(0,p.default)({filename:"D:/work/projects/cnode-demo/app/components/Reply/Reply.js",components:b,locals:[],imports:[f.default,i.default]}),C=function(e){return function(t){return v(k(t,e),e)}}("Main")(function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={content:""},n.replyCommentData=n.props.replyCommentData,n.contentHandler=n.contentHandler.bind(n),n.reply=n.reply.bind(n),n}return l(t,e),d(t,[{key:"reply",value:function(e){var t=this;e.preventDefault();var o=new FormData(document.querySelector("form")),a=o.get("content"),r=this.props.location.pathname,l=JSON.parse(localStorage.getItem(this.props.localStorageKey)),c=l.accessToken,i=n(329),s=i.stringify({accesstoken:c,content:this.replyCommentData.author&&a?"@"+this.replyCommentData.author+" "+a:a,reply_id:this.replyCommentData.reply_id||""});(0,h.fetchJSON)({url:r,req:{method:"post",body:s,headers:{"Content-Type":"application/x-www-form-urlencoded"}},success:function(e){history.back(-1),t.props.loadTopic(t.props.match.params.id,!0)},fail:function(e){alert("提交失败。")}})}},{key:"contentHandler",value:function(e){this.setState({content:e.target.value})}},{key:"render",value:function(){var e=this;return f.default.createElement("div",{className:"reply-bg",onClick:function(){history.back(-1)}},f.default.createElement("div",{className:"reply-box",onClick:function(e){e.stopPropagation()}},f.default.createElement("div",{className:"reply-title"},this.replyCommentData.author?f.default.createElement("span",null,"回复 ",f.default.createElement("span",{className:"reply-title-name"},this.replyCommentData.author)):"回复主题"),f.default.createElement("form",null,f.default.createElement("textarea",{value:this.state.content,onChange:this.contentHandler,className:"reply-content",type:"text",name:"content"}),f.default.createElement("div",{className:"reply-clear"},f.default.createElement("span",{className:"reply-clear-btn",onClick:function(){e.setState({content:""})}},"清空")),f.default.createElement("button",{className:"reply-btn",onClick:this.reply},"回复")),f.default.createElement("span",{className:"reply-close",onClick:function(){history.back(-1)}},"")))}},{key:"componentDidMount",value:function(){document.body.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){document.body.style="",this.props.dispatch({type:"SET_REPLY_COMMENT",payload:{}})}}]),t}(u.Component));t.default=C}).call(t,n(21)(e))}});