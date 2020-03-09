(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{260:function(v,_,o){"use strict";o.r(_);var t=o(28),n=Object(t.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"表达式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#表达式"}},[v._v("#")]),v._v(" 表达式")]),v._v(" "),o("h1",[v._v("表达式")]),o("input",{attrs:{type:"checkbox",checked:"",id:"show-defintions"}}),v._v(" 显示/隐藏 定义信息.\n  "),o("h2",[v._v("赋值表达式")]),v._v(" "),o("ol",[o("li",[v._v("<名称> "),o("strong",[o("code",[v._v("=")])]),v._v(" <表达式>")]),v._v(" "),o("li",[v._v("<对象> "),o("strong",[o("code",[v._v(".")])]),v._v(" <属性名> "),o("code",[v._v("=")]),v._v(" <表达式>")]),v._v(" "),o("li",[v._v("<数组> "),o("strong",[o("code",[v._v("[")])]),v._v(" <整数-表达式> "),o("strong",[o("code",[v._v("]")])]),v._v(" "),o("code",[v._v("=")]),v._v(" <表达式>")]),v._v(" "),o("li",[v._v("<对象> "),o("strong",[o("code",[v._v("[")])]),v._v(" <键-表达式> "),o("strong",[o("code",[v._v("]")])]),v._v(" "),o("code",[v._v("=")]),v._v(" <表达式>")])]),v._v(" "),o("p",[v._v("上面的所有表达式左边的部分被称作"),o("em",[v._v("左值表达式")]),v._v(" - 表示可以出现在赋值操作符的左边。")]),v._v(" "),o("p",[v._v("赋值操作允许:")]),v._v(" "),o("ol",[o("li",[v._v("将值赋值给命名为<名称>的变量;")]),v._v(" "),o("li",[v._v('将值赋值(又名"深赋值")给一个<对象>的名称为<属性名>的属性(如果该属性不存在，则会创建一个该本地属性);')]),v._v(" "),o("li",[v._v("修改数组元素在由<整数-表达式>指定的索引处的值;")]),v._v(" "),o("li",[v._v("赋值或创建<对象>由<键-表达式>指定的一个本地属性(浅赋值)。这里<键-表达式>可以是任意类型的表达式.")])]),v._v(" "),o("h3",[v._v("多目标赋值")]),v._v(" "),o("p",[v._v('TIScript也支持所谓的"多目标赋值"——允许在一个赋值操作中赋值一组值: ')]),v._v(" "),o("ol",[o("li",[o("code",[o("strong",[v._v("(")])]),v._v(" <左值表达式> [ "),o("strong",[o("code",[v._v(",")])]),v._v(" <左值表达式> ]* "),o("code",[o("strong",[v._v(")")])]),v._v(" = <表达式> | "),o("code",[o("strong",[v._v("(")])]),v._v(" <表达式> [ "),o("strong",[o("code",[v._v(",")])]),v._v(" <表达式> ]* "),o("code",[o("strong",[v._v(")")])])])]),v._v(" "),o("p",[v._v("示例:")]),v._v(" "),o("pre",{pre:!0},[o("code",[v._v("var a,b,c;\n   (a,b,c) = 1;       // a、b、c都将赋值为1; \n   (a,b,c) = (1,2,3); // a被赋值1, b被赋值2, c被赋值3;\n   (a,b) = (b,a);     // 交换a和b变量的值。\n")])]),v._v(" "),o("p",[v._v("<表达式列表>使用逗号"),o("code",[o("strong",[v._v(",")])]),v._v("分隔，并且用"),o("code",[o("strong",[v._v("(")])]),v._v("  "),o("code",[o("strong",[v._v(")")])]),v._v("括起来。如果该列表的所有成员都是左值表达式，则该列表被称作"),o("em",[v._v("<左值表达式列表>")]),v._v("。")]),v._v(" "),o("h2",[v._v("操作符")]),v._v(" "),o("dl",{staticClass:"flat"},[o("dt",[o("strong",[o("code",[v._v("?")])]),v._v(" "),o("strong",[o("code",[v._v(":")])])]),v._v(" "),o("dd",[v._v("<表达式> "),o("strong",[o("code",[v._v("?")])]),v._v(" <if-true-表达式> "),o("strong",[o("code",[v._v(":")])]),v._v(" <if-false-表达式>"),o("br"),v._v("\n\t若<表达式>"),o("em",[v._v("true")]),v._v("，则执行为<if-true-表达式>，否则执行<if-false-表达式>。")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("+")])]),v._v(" "),o("strong",[o("code",[v._v("-")])]),v._v(" "),o("strong",[o("code",[v._v("*")])]),v._v(" "),o("strong",[o("code",[v._v("/")])]),v._v(" "),o("strong",[o("code",[v._v("%")])]),v._v(" "),o("strong",[v._v("-")]),v._v("(负号)\n\t")]),v._v(" "),o("dd",[v._v("<表达式> "),o("strong",[o("code",[v._v("+")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("-")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("*")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("/")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("%")])]),v._v(" <表达式>"),o("br"),v._v(" "),o("strong",[v._v("-")]),v._v(" <表达式>"),o("br"),v._v("\n\t标准算术运算符：加、减、乘、除、求模、负数。这些运算符的操作数必须是一个数字类型：整数，浮点数或长度。另外也可以用字符串操作数。在这种情况下，它将连接两个字符串合并成一个字符串。")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("+=")])]),v._v(" "),o("strong",[o("code",[v._v("-=")])]),v._v(" "),o("strong",[o("code",[v._v("*=")])]),v._v(" "),o("strong",[o("code",[v._v("/=")])]),v._v(" "),o("strong",[o("code",[v._v("%=")])])]),v._v(" "),o("dd",[v._v("<左值> "),o("strong",[o("code",[v._v("+=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<左值> "),o("strong",[o("code",[v._v("-=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<左值> "),o("strong",[o("code",[v._v("*=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<左值> "),o("strong",[o("code",[v._v("/=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<左值> "),o("strong",[o("code",[v._v("%=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t算术运算符的快捷操作，等价于: <左值> = <左值> op <表达式>.")]),v._v(" "),o("dt",[o("code",[o("strong",[v._v("++")])]),v._v(" "),o("code",[v._v("--")])]),v._v(" "),o("dd",[o("code",[o("strong",[v._v("++")])]),v._v(" <左值>"),o("br"),v._v(" "),o("code",[v._v("--")]),v._v(" <左值>"),o("br"),v._v("\n\t递增和递减运算符。这些操作符递增和递减<左值>，并且返回修改后的值。")]),v._v(" "),o("dt",[o("code",[o("strong",[v._v("++")])]),v._v(" "),o("code",[o("strong",[v._v("--")])])]),v._v(" "),o("dd",[v._v("<左值> "),o("code",[o("strong",[v._v("++")])]),o("br"),v._v("\n\t<左值> "),o("code",[o("strong",[v._v("--")])]),o("br"),v._v("\n\t递增和递减运算符。这些操作符递增和递减<左值>，并且返回修改前的原始值。")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("==")])]),v._v(" "),o("strong",[o("code",[v._v("===")])]),v._v(" "),o("strong",[o("code",[v._v("!=")])]),v._v(" "),o("strong",[o("code",[v._v("!==")])]),v._v(" "),o("strong",[o("code",[v._v("<")])]),v._v(" "),o("strong",[o("code",[v._v("<=")])]),v._v(" "),o("strong",[o("code",[v._v(">=")])]),v._v(" "),o("strong",[o("code",[v._v(">")])])]),v._v(" "),o("dd",[v._v("<表达式> "),o("strong",[o("code",[v._v("==")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("===")])]),v._v(" <表达式> (强等于)"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("!=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("!==")])]),v._v(" <表达式> (强不等于)"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("<")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("<=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v(">=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v(">")])]),v._v(" <表达式>"),o("br"),v._v("\n\t标准的关系运算符——返回值为"),o("em",[v._v("true")]),v._v("或"),o("em",[v._v("false")]),v._v('。所有的表达式(除了强操作符外)比较操作数的值。强操作符比较"裸"值。例如: '),o("br"),v._v(" "),o("code",[v._v("0 == null")]),v._v("   的值"),o("em",[v._v("true")]),v._v(" "),o("br"),o("code",[v._v("0 === null")]),v._v("  的值为false")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("||")])]),v._v(" "),o("strong",[o("code",[v._v("&&")])]),v._v(" "),o("strong",[o("code",[v._v("!")])])]),v._v(" "),o("dd",[v._v("<表达式-1> "),o("strong",[o("code",[v._v("||")])]),v._v(" <表达式-2>"),o("br"),v._v("\n\t<表达式-1> "),o("strong",[o("code",[v._v("&&")])]),v._v(" <表达式-2>"),o("br"),v._v(" "),o("strong",[o("code",[v._v("!")])]),v._v(" <表达式>"),o("br"),v._v("\n\t标准逻辑(布尔)操作符："),o("em",[v._v("或")]),v._v("、"),o("em",[v._v("与")]),v._v("、"),o("em",[v._v("非")]),v._v("。若<表达式-1>的值不为"),o("em",[v._v("false")]),v._v("(即不是"),o("em",[v._v("null")]),v._v("、"),o("em",[v._v("undefined")]),v._v(")，则"),o("strong",[v._v("||")]),v._v("操作符的结果是<表达式-1>，否则结果是<表达式-2>。strong>&&"),v._v("和"),o("strong",[v._v("!")]),v._v("操作符返回"),o("em",[v._v("true")]),v._v("或"),o("em",[v._v("false")]),v._v("。例如:"),o("br"),v._v(" "),o("code",[v._v("(123 || 323)")]),v._v("的值为123"),o("br"),v._v(" "),o("code",[v._v("(0 || 323)")]),v._v("的值为323"),o("br"),v._v(" "),o("code",[v._v("(null || 323)")]),v._v("的值为323"),o("br"),v._v(" "),o("code",[v._v("(null && 323)")]),v._v("的值为"),o("em",[v._v("false")]),o("br"),v._v(" "),o("code",[v._v("(123 && 323)")]),v._v("的值为"),o("em",[v._v("true")])]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("&=")])]),v._v(" "),o("strong",[o("code",[v._v("|")])]),v._v(" "),o("strong",[o("code",[v._v("^")])]),v._v(" "),o("strong",[o("code",[v._v("<<")])]),v._v(" "),o("strong",[o("code",[v._v(">>")])]),v._v(" "),o("strong",[o("code",[v._v("<<<")])]),v._v(" "),o("strong",[o("code",[v._v(">>>")])]),v._v(" "),o("strong",[o("code",[v._v("~")])])]),v._v(" "),o("dd",[v._v("<表达式> "),o("strong",[o("code",[v._v("&=")])]),v._v(" <表达式> (按位与)"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("|")])]),v._v(" <表达式> (按位或)"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("^")])]),v._v(" <表达式> (按位异或)"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("<<")])]),v._v(" <表达式> (按位左移)"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v(">>")])]),v._v(" <表达式> (按位右移)"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("<<<")])]),v._v(" <表达式> (按位无符号左移)"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v(">>>")])]),v._v(" <表达式> (按位无符号右移)"),o("strong",[o("br"),v._v(" "),o("code",[v._v("~")])]),v._v(" <表达式> (按位非)"),o("br"),v._v("\n\t标准(JavaScript或Java)位(二进制)运算符。<表达式>在这里必须是整数类型。")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("&=")])]),v._v(" "),o("strong",[o("code",[v._v("|=")])]),v._v(" "),o("strong",[o("code",[v._v("^=")])]),v._v(" "),o("strong",[o("code",[v._v("<<=")])]),v._v(" "),o("strong",[o("code",[v._v(">>=")])]),v._v(" "),o("strong",[o("code",[v._v("<<<=")])]),v._v(" "),o("strong",[o("code",[v._v(">>>=")])])]),v._v(" "),o("dd",[v._v("<表达式> "),o("strong",[o("code",[v._v("&=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("|=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("^=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("<<=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v(">>=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("<<<=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v(">>>=")])]),v._v(" <表达式>"),o("br"),v._v("\n\t上面的位运算符的简短格式，等价于: <左值> = <左值> op <表达式>。")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("typeof")])]),v._v(" <表达式>")]),v._v(" "),o("dd",[v._v("结果是<表达式>的值的类型名称标识符。值可能为以下值之一: "),o("strong",[v._v("#undefined")]),v._v(", "),o("strong",[v._v("#nothing")]),v._v(", "),o("strong",[v._v("#null")]),v._v(", "),o("strong",[v._v("#boolean")]),v._v(" (针对于"),o("em",[v._v("true")]),v._v("或"),o("em",[v._v("false")]),v._v("值), "),o("strong",[v._v("#integer")]),v._v(", "),o("strong",[v._v("#float")]),v._v(", "),o("strong",[v._v("#string")]),v._v(", "),o("strong",[v._v("#array")]),v._v(", "),o("strong",[v._v("#object")]),v._v(", "),o("strong",[v._v("#symbol")]),v._v(", "),o("strong",[v._v("#function")]),v._v(", "),o("strong",[v._v("#date")]),v._v(", "),o("strong",[v._v("#color")]),v._v(", "),o("strong",[v._v("#length")]),v._v(", "),o("strong",[v._v("#tuple")]),v._v(" and "),o("strong",[v._v("#class")]),v._v(" (针对于 "),o("em",[v._v("namespace")]),v._v("和"),o("em",[v._v("class")]),v._v("对象)。例如, 如果"),o("em",[v._v("obj")]),v._v("是对象，则下面的语句将会输出它的变量的值:"),o("br"),v._v(" "),o("code",[v._v('if ( typeof obj == #object ) stdout.printf("got an object %V\\n", obj);')])]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("instanceof")])]),v._v(" "),o("strong",[o("code",[v._v("!instanceof")])])]),v._v(" "),o("dd",[v._v("<表达式> "),o("strong",[o("code",[v._v("instanceof")])]),v._v(" <类-表达式>"),o("br"),v._v("\n\t<表达式> "),o("strong",[o("code",[v._v("!instanceof")])]),v._v(" <类-表达式> (非实例)"),o("br"),v._v("\n\t如果<表达式>的值是<类-表达式>返回的类的实例，则返回"),o("em",[v._v("true")]),v._v("。如果<表达式>的值不是<类-表达式>返回的类的实例，"),o("strong",[v._v("!instanceof")]),v._v("则返回"),o("em",[v._v("true")]),v._v("。例如, 如果"),o("em",[v._v("obj")]),v._v("是用户定义的MyClass类的实例时，将会输出"),o("em",[v._v("obj")]),v._v("的值:"),o("br"),v._v(" "),o("code",[v._v('if ( obj instanceof MyClass ) stdout.printf("got an object %V of class MyClass\\n", obj);')])]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("new")])]),v._v(" "),o("strong",[o("code",[v._v("()")])])]),v._v(" "),o("dd",[o("strong",[o("code",[v._v("new")])]),v._v(" <类-名> "),o("strong",[o("code",[v._v("(")])]),v._v(" [ <参数> ] "),o("strong",[o("code",[v._v(")")])]),o("br"),v._v(" "),o("strong",[v._v("new")]),v._v("操作符创建一个<类-名>定义的类的实例。创建后，会调用该类的构造函数，并且传递<参数>。")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("this")])])]),v._v(" "),o("dd",[o("em",[v._v("this")]),v._v("关键字在函数方法体内为调用该函数的对象的一个引用。")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("this function")])])]),v._v(" "),o("dd",[v._v("这两个关键字构成一个关键字——正在执行的函数的引用。该关键字在递归调用中会比较有用。在匿名方法中，"),o("em",[v._v("this function")]),v._v("是获取该匿名函数本身引用的唯一途径。")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("this super [ super super ...]")])])]),v._v(" "),o("dd",[v._v("在嵌套函数中，"),o("strong",[o("code",[v._v("this super")])]),v._v("用于内部函数获取"),o("em",[v._v("this")]),v._v("对象的外部函数的引用。"),o("em",[v._v("this")]),v._v("后面的"),o("em",[v._v("super")]),v._v("数量代表向上查找的层级数量。")]),v._v(" "),o("dt",[v._v("<表达式> "),o("strong",[o("code",[v._v("(")])]),v._v(" [ <参数> ] "),o("strong",[o("code",[v._v(")")])])]),v._v(" "),o("dd",[v._v("- 函数调用。如果<expression>的值是一个函数，则会调用该函数，否则会生成一个运行期错误。该操作符的返回值为该函数的返回值，或为"),o("em",[v._v("nothing")]),v._v("(如果函数没有返回值时)。 nothing值用在当函数没有返回值时。例如，在迭代函数语句中："),o("code",[v._v("for(var el in <function>)")]),v._v("。这种情况在，如果<function>返回"),o("em",[v._v("nothing")]),v._v("值，则会停止迭代。")]),v._v(" "),o("dt",[v._v("<表达式> "),o("code",[v._v("{ }")])]),v._v(" "),o("dd",[v._v("<表达式> "),o("code",[v._v("{")]),v._v(" <对象声明> "),o("code",[v._v("}")]),o("br"),v._v("\n\t- 函数调用，如果<表达式>的值为函数，则会调用该函数，并传递一个参数——<对象声明>。例如:"),o("br"),v._v("      "),o("code",[v._v("foo { one:1, two:2 }")]),o("br"),v._v("\n\t将会调用函数"),o("em",[v._v("foo")]),v._v("，并传递一个对象参数，相当于: "),o("code",[v._v("foo({ one:1, two:2 })")]),v._v(";")]),v._v(" "),o("dt",[v._v("<表达式>"),o("strong",[o("code",[v._v(".")])]),v._v("<name>")]),v._v(" "),o("dd",[v._v("返回<表达式>的<name>属性的值。如果没有该属性，则返回"),o("em",[v._v("undefined")]),v._v("。")]),v._v(" "),o("dt",[v._v("<表达式> "),o("strong",[o("code",[v._v("[")])]),v._v(" <索引-表达式> "),o("strong",[o("code",[v._v("]")])])]),v._v(" "),o("dd",[v._v("返回<表达式>在<索引-表达式>位置的元素值。<表达式>可能是一个对象、数组或类。如果该元素不存在，则返回"),o("em",[v._v("undefined")]),v._v("。")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("[")])]),v._v("idx1"),o("strong",[o("code",[v._v("..")])]),v._v("idx2"),o("strong",[o("code",[v._v("]")])])]),v._v(" "),o("dd",[v._v("<数组-或-字符串> "),o("strong",[o("code",[v._v("[")])]),v._v(" [<整数-表达式-起始>] "),o("strong",[o("code",[v._v("..")])]),v._v(" [<整数-表达式-结束>] "),o("strong",[o("code",[v._v("]")])]),o("br"),v._v("\n\t数组或字符串的一个片段。返回从<整数-表达式-起始>开始(包含)到<整数-表达式-结束>结束(不包含)的子数组或子字符串。如果<整数-表达式-起始>省略了，则它默认为"),o("em",[v._v("0")]),v._v("；如果<整数-表达式-结束>省略，则它默认为"),o("em",[v._v(".length")]),v._v('的值。例如，下面的语句将会输出"Spain":'),o("pre",{pre:!0},[o("code",[v._v('var str = "The rain in Spain";\nstdout.println( str[12..] );')])])])]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("like")])]),v._v(" "),o("strong",[o("code",[v._v("!like")])])]),v._v(" "),o("dd",[v._v("<表达式> "),o("strong",[o("code",[v._v("like")])]),v._v(" <模式-表达式>"),o("br"),v._v("\n  <表达式> "),o("strong",[o("code",[v._v("!like")])]),v._v(" <模式-表达式> (not like)"),o("br"),v._v("\n  <表达式>可以是以下表达式之一:\n    "),o("ul",[o("li",[o("strong",[v._v("string")]),v._v("(模式)或"),o("strong",[v._v("正则表达式")]),v._v("。如果<表达式>是一个字符串，则该操作符会匹配正则表达式<regexp>给定的字符串或一个简单的<字符串模式>。<字符串模式>是一个包含单字符占位符'"),o("code",[v._v("?")]),v._v("'和多字符占位符'"),o("code",[v._v("*")]),v._v("'的字符串。例如，"),o("code",[v._v('"page.htm" like "*.htm"')]),v._v("语句的值为"),o("em",[v._v("true")]),v._v(", 而"),o("code",[v._v('"page.htm" like "*.html"')]),v._v("语句的值为"),o("em",[v._v("false")]),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("object")]),v._v("。如果<表达式>是一个对象，则<表达式>匹配<对象-模式-表达式>。如果<对象-模式-表达式>是对象的子集，则返回"),o("em",[v._v("true")]),v._v("。<对象-模式-表达式>可以包含"),o("code",[v._v("#any")]),v._v("标识符来匹配所有对象。")]),v._v(" "),o("li",[o("strong",[v._v("array")]),v._v(".如果<表达式>是一个数组，则如果该数组从<数组-模式-表达式>起始则返回"),o("em",[v._v("true")]),v._v("。")]),v._v(" "),o("li",[v._v("like操作符的其他值等价于"),o("code",[v._v("==")]),v._v("操作符。")])])]),v._v(" "),o("h2",[v._v("字符串操作符")]),v._v(" "),o("dl",{staticClass:"flat"},[o("dt",[o("strong",[o("code",[v._v("~/")])]),v._v(" "),o("strong",[o("code",[v._v("~%")])])]),v._v(" "),o("dd",[v._v("<字符串-表达式> "),o("strong",[o("code",[v._v("~/")])]),v._v(" <字符串-分割符> (分割头操作)"),o("br"),v._v("\n\t<字符串-表达式> "),o("strong",[o("code",[v._v("~%")])]),v._v(" <字符串-分割符> (分割尾操作)"),o("br"),v._v("\n\t这两个操作符在<字符串-表达式>中查找<字符串-分割符>字符串，并且返回<字符串-表达式>的头部(从字符串起始到<字符串-分割符>位置)或尾部(从<字符串-分割符>位置开始到字符串的结尾)。这两个操作符都是从<字符串-表达式>的起始位置开始查找<字符串-分割符>。如果<字符串-分割符>未找到，则"),o("strong",[o("code",[v._v("~/")])]),v._v("返回<字符串-表达式>本身，"),o("strong",[o("code",[v._v("~%")])]),v._v("返回空字符串。示例:"),o("br"),v._v(" "),o("code",[v._v('"file://something:anything.htm" ~/ ":"')]),v._v(" 的值为"),o("code",[v._v('"file"')]),v._v("字符串,"),o("br"),v._v(" "),o("code",[v._v('"file://something:anything.htm" ~% ":"')]),v._v(" 的值为"),o("code",[v._v('"//something:anything.htm"')]),v._v("字符串,")]),v._v(" "),o("dt",[o("strong",[o("code",[v._v("/~")])]),v._v(" "),o("strong",[o("code",[v._v("%~")])])]),v._v(" "),o("dd",[v._v("<字符串-表达式> "),o("strong",[o("code",[v._v("/~")])]),v._v(" <字符串-分割符> (反转 分割头操作)"),o("br"),v._v("\n\t<字符串-表达式> "),o("strong",[o("code",[v._v("%~")])]),v._v(" <字符串-分割符> (反转 分割尾操作)"),o("br"),v._v("\n\t这两个操作符类似于"),o("strong",[o("code",[v._v("~/")])]),v._v("、"),o("strong",[o("code",[v._v("~%")])]),v._v("，只是它们是从<字符串-表达式>的尾部开始查找。如果<字符串-分割符>未找到, "),o("strong",[o("code",[v._v("/~")])]),v._v("返回<字符串-表达式> 本身, 而"),o("strong",[o("code",[v._v("%~")])]),v._v("返回空字符串。示例:"),o("br"),v._v(" "),o("code",[v._v('"something.anything.htm" /~ "."')]),v._v("的值为"),o("code",[v._v('"something.anything"')]),v._v(" 字符串,"),o("br"),v._v(" "),o("code",[v._v('"something.anything.htm" %~ "."')]),v._v("的值为"),o("code",[v._v('"htm"')]),v._v("字符串。")])])])}),[],!1,null,null,null);_.default=n.exports}}]);