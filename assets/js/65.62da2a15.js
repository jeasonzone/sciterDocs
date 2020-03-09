(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{338:function(t,e,n){"use strict";n.r(e);var o=n(28),l=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"可重用组件化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可重用组件化"}},[t._v("#")]),t._v(" 可重用组件化")]),t._v(" "),n("p",[t._v("在Sciter中，你可以通过自定义元素类(behavior/prototype)或aspect来实现可重用组件化编程。")]),t._v(" "),n("h2",[t._v("自定义元素类")]),t._v(" "),n("p",[t._v("在CSS中，你可以定义你的自定义元素(比如components.css文件): ")]),t._v(" "),n("pre",[n("code",[t._v("toggler {\n  prototype: Toggler url(components.tis); "),n("span",{staticStyle:{color:"green"}},[t._v("// 定义绑定的脚本代码")]),t._v(" \n  display:block;   "),n("span",{staticStyle:{color:"green"}},[t._v("// 必须定义: display模型")]),t._v(" \n  flow:horizontal; "),n("span",{staticStyle:{color:"green"}},[t._v("// 必须定义: flow - 内容的布局管理器")]),t._v(" \n  ...\n}")])]),t._v(" "),n("p",[t._v("声明的"),n("code",[t._v("prototype")]),t._v("属性值的内容包含两部分：a) 脚本类的名称; b) 查找这里的url地址。")]),t._v(" "),n("p",[t._v("在那个components.tis文件中，你定义了你的"),n("code",[t._v("Toggler")]),t._v("类，它扩展自"),n("code",[t._v("Element")]),t._v("类:")]),t._v(" "),n("pre",[n("code",[t._v("class Toggler : Element \n{\n  this var state = false; "),n("span",{staticStyle:{color:"green"}},[t._v("// 实例变量")]),t._v(" \n  var total = 0;          "),n("span",{staticStyle:{color:"green"}},[t._v("// 类变量, 所有实例共用")]),t._v(" \n  "),n("span",{staticStyle:{color:"green"}},[t._v("// 当DOM元素将它的原型绑定到Toggler类时，会自动调用这个函数，")]),t._v(" \n  "),n("span",{staticStyle:{color:"green"}},[t._v("// 它类似C++中的构造器")]),t._v(' \n  function attached()  {\n     this.state = this.attributes.exists("checked");\n     var caption = this.attributes["caption"] || "Option";\n     '),n("span",{staticStyle:{color:"green"}},[t._v("/// 内容填充使用字符串器函数 - 它是一种内置的特性，类似于React的JSX子语言")]),t._v(" \n     this.$content( <button>{caption}1</button>\n                    <button>{caption}2</button> );\n     ++total; \n  }\n  "),n("span",{staticStyle:{color:"green"}},[t._v("// 这个方法在DOM元素的原型发生改变或DOM元素卸载时被调用，")]),t._v(" \n  "),n("span",{staticStyle:{color:"green"}},[t._v("// 它类似于C++的析构器")]),t._v(" \n  function detached()  {\n     --total; \n  }\n  "),n("span",{staticStyle:{color:"green"}},[t._v("// 该自定义元素特有的方法:")]),t._v("\n  function update() { ... }\n  "),n("span",{staticStyle:{color:"green"}},[t._v("// 该自定义元素特有的属性, 比如'value'属性:")]),t._v("\n  property value(val) { \n     get { return this.state; }     \n     set { this.state = val; this.update(); }     \n  }\n}\n")])]),t._v(" "),n("p",[t._v("这样的代码是不是很漂亮和简洁？现在我们就可以在HTML中使用这个自定义元素了:")]),t._v(" "),n("pre",[n("code",[t._v("<html> \n  <style>\n    @import url(components.css);\n  </style>\n  <body>\n    Demo of the <toggler /> element.\n  <body>\n</html>\n")])]),t._v(" "),n("p",[t._v("因此，CSS不仅可以定义可视化样式，也可以定义自定义元素的行为。")]),t._v(" "),n("h2",[t._v("自定义切面(aspect)")]),t._v(" "),n("p",[t._v("还有一种叫做“切面(aspect)”的机制 – 声明一个DOM函数调用的函数。"),n("br"),t._v(" \n  这个特性比较接近于AngularJS中的指令(directive)，在某些情况下也可以完成类似React的mixin功能。它可以定义一个"),n("strong",[t._v("functions")]),t._v("，这个函数在DOM元素初始化时被调用 – 你可以在这个函数里定义元素的行为。")]),t._v(" "),n("p",[t._v("在CSS中，你可以这样定义:")]),t._v(" "),n("pre",[n("code",[t._v("div[collapsible]  { aspect: Collapsible url(components); }\ndiv[collapsible]:collapsed > :not(caption) { display:none; }\ndiv[detachable]  {\n  aspect: Detachable url(components); \n}\n")])]),t._v(" "),n("p",[t._v("同时在HTML中:")]),t._v(" "),n("pre",[n("code",[t._v("<div collapsible>\n  <caption>Click to collapse/expand</caption>\n  <div>content</div>\n</div>\n<div collapsible detachable >\n  <caption>Click to collapse/expand</caption>\n</div>\n")])]),t._v(" "),n("p",[t._v("以及components.tis:")]),t._v(" "),n("pre",[n("code",[t._v("function Collapsible() {\n  "),n("span",{staticStyle:{color:"green"}},[t._v("// toggle :collapsed state on click:")]),t._v('\n  this.on("click", function() { this.state.collapsed = !this.state.collapsed; })\n}')])])])}),[],!1,null,null,null);e.default=l.exports}}]);