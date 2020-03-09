# 类型

<h1>值和数据类型</h1>

  <p>TIScript是动态类型语言。这意味着变量可以包含任何支持的类型的值。类型有：</p>
  <dl>
    <dt><strong>Integer</strong></dt>
    <dd><em>Integer</em>类的值; 一个在Integer.MIN和Integer.MAX之间的32位(32-bit)有符号整数。如果你定义了 var i = 3;，则下面的语句将都等于<em>true</em>: &nbsp;<br/><code>typeof i == #integer;</code><br/><code>i instanceof Integer;</code></dd>
    <dt><strong>Float</strong></dt>
    <dd><em>Float</em>类的值; 一个在<em>Float.MIN</em>和<em>Float.MAX</em>之间的63位(63-bit)的浮点数。下面的语句将都等于<em>true</em>: &nbsp;<br/><code>typeof 3.14 == #float;</code><br/><code>3.14 instanceof Float;</code></dd>
    <dt><strong>String</strong></dt>
    <dd><em>String</em>类的值; 一个不可变的Unicode字符序列。下面的语句将都等于<em>true</em>: &nbsp;<br/><code>typeof &quot;abc&quot; == #string;</code><br/><code>&quot;abc&quot; instanceof String;</code></dd>
    <dt><strong>Symbol</strong></dt>
    <dd><em>Symbol</em>类的值。<em>symbol</em>(otherwise known as atom)是一个关联了一个名称的唯一整数值，标识符在内部由一个32位(32-bit)整数表示。标识符被定义成一个以<strong><code>#</code></strong>字符开头的名称标记(可以包含<code>-</code>字符)。下面是一些有效的标识符: <code>#integer</code>、 <code>#foo</code>、<code>#Bar</code>、<code>#sub-script</code>。下面是一些无效的标识符: #123, #1abc。标识符在编译时会转换成为一个整数值。因此比较两个标识符相当于比较两个整数值，这样的比较是有效的计算。在TIScript中, 标识符被用于作为对象属性的名称。因此，<code>obj.foo = 1;</code>表达式相当于<code>obj[#foo] = 1;</code>。下面的语句都将等于<em>true</em>: <br/><code>typeof #abc == #symbol;</code><br/><code>#abc instanceof Symbol;</code></dd>
    <dt><strong>Array</strong></dt>
    <dd><em>array</em>是一个元素-值的索引序列。数组中的元素可以使用[index]操作符来访问，其中<em>index</em>是一个整数值 - 该元素在数组中的序列号。数组中的索引从0起始。如果你定义了一个变量<code>var a = [1,2,3];</code>, 则下面的语句将等于<em>true</em>: <br/><code>typeof a == #array;</code><br/><code>a instanceof Array;</code><br/><code>a[0] == 1; a.length == 3;</code></dd>
    <dt><strong>Object</strong></dt>
    <dd><em>Object</em>类的值; 一个&quot;名称 值&quot;的集合 - 名称(又名<em>键</em>)对和关联到这些名称上的值。在JavaScript中，对象是一个通用的实体。所以他们可以被作为 名称/值 对映射表(哈希映射表)，也可以作为真实的对象 - 用户定义类的实例。如果Obj变量被赋值了一个对象，则下面的语句都将为<em>true</em>:<br/><code>typeof obj == #object;</code><br/><code>obj instanceof Object;</code></dd>
    <dt><strong>Function</strong></dt>
    <dd><em>Function</em>类的值。函数时语言的一等实体。一旦定义，一个函数可以被赋值到任何变量，并且可以作为函数调用的参数。如果你有下面的语句:<br/><code>var foo = function(p) { return &nbsp;p + 1; }</code>, 则下面的语句都将等于<em>true</em>:<code><br/>typeof foo == #function;</code><br/><code>foo instanceof Function;</code></dd>
    <dt><strong>Class</strong></dt>
    <dd><em>Class</em>类的值; 运行对象的类包含一个特有的方法和属性集合。 如果你有这样的声明:<br/><code>class MyClass { function myMethod() { ... } }</code> <br/>你可以使用<em>new</em>操作符来创建一个类的实例( <code>var obj = new MyClass()</code> )。<br/>下面的语句对于类都将等于<em>true</em>:<br/><code>typeof MyClass == #class;</code></dd>
    <dt><strong>Namespace</strong></dt>
    <dd><em>名称空间</em>是一个对象(class类)，是一些变量、常量和方法放到一个命名的实体中。因此，如果你有这样的声明:<br/><code>namespace MyNamespace { const myConst = 12; function myMethod() { ... } }</code><br/>你可以使用下面的语句来访问名称空间中的成员: <code>MyNamespace.myMethod()</code> 和 <code>MyNamespace.myConst</code>。</dd>
    <dt><strong>Length</strong></dt>
    <dd>Length代表长度 - 包含单位名称的数字值。长度单位的声明是一个立即数跟着单位字符。例如<code>12px</code>代表一个表示12像素的值、<code>126mm </code>是126毫米长度。参见Length类的说明。在内部，长度值是一个精确到0.001的固定点数值。下面的语句都将等于<em>true</em>:<br/><code>typeof 12.6cm == #length;</code><br/><code>12.6cm instanceof Length;</code><br/><code>12.6cm.units == #cm;</code><br/><code>12.6cm == 126mm;</code>
        <p>下面是支持的长度单位类型:</p>
        <ul><li><code>em</code>, <code>ex</code> - CSS长度单位：em和ex;</li>
            <li><code>px</code> - 物理设备像素;</li>
            <li><code>dip</code> - 设备独立像素，逻辑单位相当于1/96(每英尺96像素);</li>
            <li><code>mm</code>, <code>cm</code> - 长度度量单位：毫米、厘米;</li>
            <li><code>in</code>, <code>pt</code>, <code>pc</code> - 英国长度单位：英寸、点、皮卡(它们被用在CSS定义中);</li>
            <li><code>fx</code> - 弹力单位 (Sciter特有的) - 定义剩余空间的部分: 在Sciter的CSS中，<code>1fx</code>等价于<code>1*</code>或者<code>100%%</code>;</li>
            <li><code>pr</code> - 百分号单位, 在CSS中，<code>100pr</code>相当于<code>100%</code>;</li></ul></dd>
    <dt><strong>Angle</strong></dt>
    <dd>Angle值代表一个角度 -  包含单位名称的数字值。这些表达式都为true:<br/><code>360deg instanceof Angle;</code><br/><code>360deg == Math.PI * 2 * 1rad;</code><br/><code>360deg == 400grad;</code><br/><code>360deg == 1turn;</code><br/><code>1turn / 2 == 180deg;</code>
    <p>TIScript支持CSS定义的所有角度单位:</p>
      <ul><li><code>deg</code> - 度, 在一个完整圆中有360度;</li>
          <li><code>rad</code> - 弧度, 在一个完整圆中有2*π弧度;</li>
          <li><code>grad</code> - 梯度(Gradians)。一个圆共400梯度。90deg = 100grad = 0.25turn ≈ 1.570796326794897rad;</li>
          <li><code>turn</code> - 转、圈(Turns)。1圈等同于360度 - 一个完整的圆;</li></ul></dd>
    <dt><strong>Color</strong></dt>
    <dd>颜色(<em>Color</em>)类的值。 颜色值代表 - 一个有红、绿、蓝和可选Alpha值的结构体。颜色值使用<code>color(red,green,blue[,opacity])</code>函数来创建。下面的语句都为<em>true</em>:<br/><code>typeof color(0xFF,0,0) == #color;</code><br/><code>color(0xFF,0,0) instanceof Color;</code><br/><code>color(0xFF,0,0).red == 0xFF; <br/>color(0xFF,0,0).blue == 0;</code></dd>
    <dt><strong>Date</strong></dt>
    <dd>日期<em>Date</em>类的值。日期值代表日期和事件，使用<em>new</em>操作符来创建:<br/><code>var date = new Date(2009,7,15)</code>。<br/>
	下面的语句为<em>true</em>:<code><br/>typeof date == #date;</code><br/><code>date instanceof Date;</code><br/><code>date.day == 15; date.year == 2009;</code></dd>
    <dt><strong>Bytes</strong></dt>
    <dd>字节<em>Bytes</em>类的值。一个Btyes类的实例是一个字节值(范围在0 .. 255的整数值)的数组(序列)。下面的语句为<em>true</em>:<br/><code>typeof (new Bytes(12)) == #Bytes;</code><br/><code>(new Bytes(12)) instanceof Bytes;</code><br/><code>(new Bytes(12)).length == 12;</code></dd>
    <dt><strong>Tuple</strong></dt>
    <dd>元组(精确到n元组(n-tuple))是一个值的标签序列。元组可以通过[]操作符访问元组中的元素。一旦元组被创建，它的长度将不能修改。元组有只读的<em>length</em>的属性和读写的<em>tag</em>属性。如果你有这样的定义: <code><br/>var tup = [tname: 1, &quot;two&quot; ];</code>则下面的语句等于<em>true</em>: <code><br/>typeof tup == #tuple;</code><br/><code>tup instanceof Tuple;<br/>tup.length == 2;<br/>tup[0] == 1 &amp;&amp; tup[1] == &quot;two&quot;;</code><br/><code>tup.tag == #tname;</code></dd>
    <dt><strong>Stream</strong></dt>
    <dd><em>Stream</em>类的值。一个流表示一个称作流单位的元素序列(可能是无限的)。TIScript支持多种类型的流，它们可以通过<code>Stream.open****</code>方法来创建: <br/><code>var stream = Stream.openSocket(&quot;10.0.0.1:14&quot;);</code><br/>下面的语句都将为<em>true</em>:<code><br/>typeof stream == #Stream;<br/>stream instanceof Stream;</code></dd>
    <dt><strong>正则表达式</strong></dt>
    <dd>RegExp类的值。一个RegExp对象是一个变异了的正则表达式。它被用于存储正则表达式模式匹配结果的信息。正则表达式可以通过RegExp类的构造函数来创建，或者通过正则表达声明:<br/><code>var re = /ain/i; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 正则表达式</code><br/><code>r = &quot;The rain in Spain&quot;.match(re); // 试图匹配搜索字符串</code><br/><code>assert r == &quot;ain&quot;;</code></dd></dl>