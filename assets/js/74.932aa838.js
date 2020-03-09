(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{359:function(e,t,n){"use strict";n.r(t);var c=n(28),v=Object(c.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"事件赋值方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件赋值方式"}},[e._v("#")]),e._v(" 事件赋值方式")]),e._v(" "),n("div",{staticClass:"article-header"},[n("h1",{staticClass:"article-title"},[e._v("事件处理器的赋值")])]),e._v(" "),n("div",{staticClass:"article-content"},[n("p",[e._v("Sciter支持jQuery风格的事件处理器赋值方式:")]),e._v(" "),n("pre",[n("code",[e._v('element.on("event", "selector", function(evt) {...});')])]),e._v(" "),n("p",[e._v("这种方式大部分情况下已经足够了，不过因为某些元素，我觉得它“不够美观” 所以我正在想它的替代方法。")]),e._v(" "),n("p",[e._v("目前，有一个比较灵活的选项/主意，类似下面这样:")]),e._v(" "),n("pre",[n("code",[e._v('// subscribe function for "click" event on element\nelement << event click (evt) {...};')])]),e._v(" "),n("p",[e._v("上面的语句等同于")]),e._v(" "),n("pre",[n("code",[e._v('element.on("click", function (evt) {...});')])]),e._v(" "),n("p",[e._v("以及它的完整格式(带选择器)： ")]),e._v(" "),n("pre",[n("code",[e._v('// subscribe function for "click" event on <button id=first> element\nself << event click $(button#first) (evt) {...};')])]),e._v(" "),n("p",[e._v("目前主要的挑战是JS syntax/grammar…")])])])}),[],!1,null,null,null);t.default=v.exports}}]);