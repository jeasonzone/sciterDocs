# 表达式

<h1>表达式</h1><input type="checkbox"  checked=""  id="show-defintions" />&nbsp;显示/隐藏 定义信息.
  <h2>赋值表达式</h2>
  <ol>
    <li>&lt;名称&gt; <strong><code>=</code></strong> &lt;表达式&gt;</li>
    <li>&lt;对象&gt; <strong><code>.</code></strong> &lt;属性名&gt; <code>=</code> &lt;表达式&gt;</li>
    <li>&lt;数组&gt; <strong><code>[</code></strong> &lt;整数-表达式&gt; <strong><code>]</code></strong> <code>=</code> &lt;表达式&gt;</li>
    <li>&lt;对象&gt; <strong><code>[</code></strong> &lt;键-表达式&gt; <strong><code>]</code></strong> <code>=</code> &lt;表达式&gt;</li></ol>
  <p>上面的所有表达式左边的部分被称作<em>左值表达式</em> - 表示可以出现在赋值操作符的左边。</p>
  <p>赋值操作允许:</p>
  <ol>
    <li>将值赋值给命名为&lt;名称&gt;的变量;</li>
    <li>将值赋值(又名&quot;深赋值&quot;)给一个&lt;对象&gt;的名称为&lt;属性名&gt;的属性(如果该属性不存在，则会创建一个该本地属性);</li>
    <li>修改数组元素在由&lt;整数-表达式&gt;指定的索引处的值;</li>
    <li>赋值或创建&lt;对象&gt;由&lt;键-表达式&gt;指定的一个本地属性(浅赋值)。这里&lt;键-表达式&gt;可以是任意类型的表达式.</li></ol>
  <h3>多目标赋值</h3>
  <p>TIScript也支持所谓的&quot;多目标赋值&quot;——允许在一个赋值操作中赋值一组值: </p>
  <ol>
    <li><code><strong>(</strong></code> &lt;左值表达式&gt; [ <strong><code>,</code></strong> &lt;左值表达式&gt; ]* <code><strong>)</strong></code> = &lt;表达式&gt; | <code><strong>(</strong></code> &lt;表达式&gt; [ <strong><code>,</code></strong> &lt;表达式&gt; ]* <code><strong>)</strong></code></li></ol>
  <p>示例:</p>
  <pre v-pre><code>var a,b,c;
   (a,b,c) = 1;       // a、b、c都将赋值为1; 
   (a,b,c) = (1,2,3); // a被赋值1, b被赋值2, c被赋值3;
   (a,b) = (b,a);     // 交换a和b变量的值。
</code></pre>
  <p>&lt;表达式列表&gt;使用逗号<code><strong>,</strong></code>分隔，并且用<code><strong>(</strong></code> &nbsp;<code><strong>)</strong></code>括起来。如果该列表的所有成员都是左值表达式，则该列表被称作<em>&lt;左值表达式列表&gt;</em>。</p>
  <h2>操作符</h2>
  <dl class="flat">
    <dt><strong><code>?</code></strong> <strong><code>:</code></strong></dt>
    <dd>&lt;表达式&gt; <strong><code>?</code></strong> &lt;if-true-表达式&gt; <strong><code>:</code></strong> &lt;if-false-表达式&gt;<br/>
	若&lt;表达式&gt;<em>true</em>，则执行为&lt;if-true-表达式&gt;，否则执行&lt;if-false-表达式&gt;。</dd>
    <dt>
	<strong><code>+</code></strong>
	<strong><code>-</code></strong>
	<strong><code>*</code></strong>
	<strong><code>/</code></strong>
	<strong><code>%</code></strong>
	<strong>-</strong>(负号)
	</dt>
    <dd>&lt;表达式&gt; <strong><code>+</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>-</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>*</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>/</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>%</code></strong> &lt;表达式&gt;<br/>
	<strong>-</strong> &lt;表达式&gt;<br/>
	标准算术运算符：加、减、乘、除、求模、负数。这些运算符的操作数必须是一个数字类型：整数，浮点数或长度。另外也可以用字符串操作数。在这种情况下，它将连接两个字符串合并成一个字符串。</dd>
    <dt><strong><code>+=</code></strong>
	<strong><code>-=</code></strong>
	<strong><code>*=</code></strong>
	<strong><code>/=</code></strong> 
	<strong><code>%=</code></strong></dt>
    <dd>&lt;左值&gt; <strong><code>+=</code></strong> &lt;表达式&gt;<br/>
	&lt;左值&gt; <strong><code>-=</code></strong> &lt;表达式&gt;<br/>
	&lt;左值&gt; <strong><code>*=</code></strong> &lt;表达式&gt;<br/>
	&lt;左值&gt; <strong><code>/=</code></strong> &lt;表达式&gt;<br/>
	&lt;左值&gt; <strong><code>%=</code></strong> &lt;表达式&gt;<br/>
	算术运算符的快捷操作，等价于: &lt;左值&gt; = &lt;左值&gt; op &lt;表达式&gt;.</dd>
    <dt>
	<code><strong>++</strong></code> <code>--</code></dt>
    <dd><code><strong>++</strong></code> &lt;左值&gt;<br/>
	<code>--</code> &lt;左值&gt;<br/>
	递增和递减运算符。这些操作符递增和递减&lt;左值&gt;，并且返回修改后的值。</dd>
    <dt><code><strong>++</strong></code> <code><strong>--</strong></code></dt>
    <dd>&lt;左值&gt; <code><strong>++</strong></code><br/>
	&lt;左值&gt; <code><strong>--</strong></code><br/>
	递增和递减运算符。这些操作符递增和递减&lt;左值&gt;，并且返回修改前的原始值。</dd>
    <dt><strong><code>==</code></strong> <strong><code>===</code></strong> <strong><code>!=</code></strong> <strong><code>!==</code></strong> <strong><code>&lt;</code></strong> <strong><code>&lt;=</code></strong>  <strong><code>&gt;=</code></strong>  <strong><code>&gt;</code></strong> </dt>
    <dd>&lt;表达式&gt; <strong><code>==</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>===</code></strong> &lt;表达式&gt; (强等于)<br/>
	&lt;表达式&gt; <strong><code>!=</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>!==</code></strong> &lt;表达式&gt; (强不等于)<br/>
	&lt;表达式&gt; <strong><code>&lt;</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>&lt;=</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>&gt;=</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>&gt;</code></strong> &lt;表达式&gt;<br/>
	标准的关系运算符——返回值为<em>true</em>或<em>false</em>。所有的表达式(除了强操作符外)比较操作数的值。强操作符比较&quot;裸&quot;值。例如: <br/>
	<code>0 == null</code> &nbsp;&nbsp;的值<em>true</em> <br/><code>0 === null</code> &nbsp;的值为false</dd>
    <dt><strong><code>||</code></strong> <strong><code>&amp;&amp;</code></strong> <strong><code>!</code></strong></dt>
    <dd>&lt;表达式-1&gt; <strong><code>||</code></strong> &lt;表达式-2&gt;<br/>
	&lt;表达式-1&gt; <strong><code>&amp;&amp;</code></strong> &lt;表达式-2&gt;<br/>
	<strong><code>!</code></strong> &lt;表达式&gt;<br/>
	标准逻辑(布尔)操作符：<em>或</em>、<em>与</em>、<em>非</em>。若&lt;表达式-1&gt;的值不为<em>false</em>(即不是<em>null</em>、<em>undefined</em>)，则<strong>||</strong>操作符的结果是&lt;表达式-1&gt;，否则结果是&lt;表达式-2&gt;。strong>&amp;&amp;</strong>和<strong>!</strong>操作符返回<em>true</em>或<em>false</em>。例如:<br/>
	<code>(123 || 323)</code>的值为123<br/>
	<code>(0 || 323)</code>的值为323<br/>
	<code>(null || 323)</code>的值为323<br/>
	<code>(null &amp;&amp; 323)</code>的值为<em>false</em><br/>
	<code>(123 &amp;&amp; 323)</code>的值为<em>true</em></dd>
    <dt><strong><code>&amp;=</code></strong> <strong><code>|</code></strong> <strong><code>^</code></strong> <strong><code>&lt;&lt;</code></strong> <strong><code>&gt;&gt;</code></strong> <strong><code>&lt;&lt;&lt;</code></strong> <strong><code>&gt;&gt;&gt;</code></strong> <strong><code>~</code></strong></dt>
    <dd>&lt;表达式&gt; <strong><code>&amp;=</code></strong> &lt;表达式&gt; (按位与)<br/>
	&lt;表达式&gt; <strong><code>|</code></strong> &lt;表达式&gt; (按位或)<br/>
	&lt;表达式&gt; <strong><code>^</code></strong> &lt;表达式&gt; (按位异或)<br/>
	&lt;表达式&gt; <strong><code>&lt;&lt;</code></strong> &lt;表达式&gt; (按位左移)<br/>
	&lt;表达式&gt; <strong><code>&gt;&gt;</code></strong> &lt;表达式&gt; (按位右移)<br/>
	&lt;表达式&gt; <strong><code>&lt;&lt;&lt;</code></strong> &lt;表达式&gt; (按位无符号左移)<br/>
	&lt;表达式&gt; <strong><code>&gt;&gt;&gt;</code></strong> &lt;表达式&gt; (按位无符号右移)<strong><br/>
	<code>~</code></strong> &lt;表达式&gt; (按位非)<br/>
	标准(JavaScript或Java)位(二进制)运算符。<表达式>在这里必须是整数类型。</dd>
    <dt><strong><code>&amp;=</code></strong> <strong><code>|=</code></strong> <strong><code>^=</code></strong> <strong><code>&lt;&lt;=</code></strong> <strong><code>&gt;&gt;=</code></strong> <strong><code>&lt;&lt;&lt;=</code></strong> <strong><code>&gt;&gt;&gt;=</code></strong></dt>
    <dd>&lt;表达式&gt; <strong><code>&amp;=</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>|=</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>^=</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>&lt;&lt;=</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>&gt;&gt;=</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>&lt;&lt;&lt;=</code></strong> &lt;表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>&gt;&gt;&gt;=</code></strong> &lt;表达式&gt;<br/>
	上面的位运算符的简短格式，等价于: &lt;左值&gt; = &lt;左值&gt; op &lt;表达式&gt;。</dd>
    <dt><strong><code>typeof</code></strong> &lt;表达式&gt;</dt>
    <dd>结果是&lt;表达式&gt;的值的类型名称标识符。值可能为以下值之一: <strong>#undefined</strong>, <strong>#nothing</strong>, <strong>#null</strong>, <strong>#boolean</strong> (针对于<em>true</em>或<em>false</em>值), <strong>#integer</strong>, <strong>#float</strong>, <strong>#string</strong>, <strong>#array</strong>, <strong>#object</strong>, <strong>#symbol</strong>, <strong>#function</strong>, <strong>#date</strong>, <strong>#color</strong>, <strong>#length</strong>, <strong>#tuple</strong> and <strong>#class</strong> (针对于 <em>namespace</em>和<em>class</em>对象)。例如, 如果<em>obj</em>是对象，则下面的语句将会输出它的变量的值:<br/>
	<code>if ( typeof obj == #object ) stdout.printf(&quot;got an object %V\n&quot;, obj);</code></dd>
    <dt><strong><code>instanceof</code></strong> <strong><code>!instanceof</code></strong></dt>
    <dd>&lt;表达式&gt; <strong><code>instanceof</code></strong> &lt;类-表达式&gt;<br/>
	&lt;表达式&gt; <strong><code>!instanceof</code></strong> &lt;类-表达式&gt; (非实例)<br/>
	如果&lt;表达式&gt;的值是&lt;类-表达式&gt;返回的类的实例，则返回<em>true</em>。如果&lt;表达式&gt;的值不是&lt;类-表达式&gt;返回的类的实例，<strong>!instanceof</strong>则返回<em>true</em>。例如, 如果<em>obj</em>是用户定义的MyClass类的实例时，将会输出<em>obj</em>的值:<br/>
	<code>if ( obj instanceof MyClass ) stdout.printf(&quot;got an object %V of class MyClass\n&quot;, obj);</code></dd>
    <dt><strong><code>new</code></strong> <strong><code>()</code></strong></dt>
    <dd><strong><code>new</code></strong> &lt;类-名&gt; <strong><code>(</code></strong> [ &lt;参数&gt; ] <strong><code>)</code></strong><br/>
	<strong>new</strong>操作符创建一个&lt;类-名&gt;定义的类的实例。创建后，会调用该类的构造函数，并且传递&lt;参数&gt;。</dd>
    <dt><strong><code>this</code></strong></dt>
    <dd><em>this</em>关键字在函数方法体内为调用该函数的对象的一个引用。</dd>
    <dt><strong><code>this function</code></strong></dt>
    <dd>这两个关键字构成一个关键字——正在执行的函数的引用。该关键字在递归调用中会比较有用。在匿名方法中，<em>this function</em>是获取该匿名函数本身引用的唯一途径。</dd>
    <dt><strong><code>this super [ super super ...]</code></strong></dt>
    <dd>在嵌套函数中，<strong><code>this super</code></strong>用于内部函数获取<em>this</em>对象的外部函数的引用。<em>this</em>后面的<em>super</em>数量代表向上查找的层级数量。</dd>
    <dt>&lt;表达式&gt; <strong><code>(</code></strong> [ &lt;参数&gt; ] <strong><code>)</code></strong></dt>
    <dd>- 函数调用。如果&lt;expression&gt;的值是一个函数，则会调用该函数，否则会生成一个运行期错误。该操作符的返回值为该函数的返回值，或为<em>nothing</em>(如果函数没有返回值时)。 nothing值用在当函数没有返回值时。例如，在迭代函数语句中：<code>for(var el in &lt;function&gt;)</code>。这种情况在，如果&lt;function&gt;返回<em>nothing</em>值，则会停止迭代。</dd>
    <dt>&lt;表达式&gt; <code>{ }</code></dt>
    <dd>&lt;表达式&gt; <code>{</code> &lt;对象声明&gt; <code>}</code><br />
	- 函数调用，如果&lt;表达式&gt;的值为函数，则会调用该函数，并传递一个参数——&lt;对象声明&gt;。例如:<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>foo { one:1, two:2 }</code><br/>
	将会调用函数<em>foo</em>，并传递一个对象参数，相当于: <code>foo({ one:1, two:2 })</code>;</dd>
    <dt>&lt;表达式&gt;<strong><code>.</code></strong>&lt;name&gt;</dt>
    <dd>返回&lt;表达式&gt;的&lt;name&gt;属性的值。如果没有该属性，则返回<em>undefined</em>。</dd>
    <dt>&lt;表达式&gt; <strong><code>[</code></strong> &lt;索引-表达式&gt; <strong><code>]</code></strong></dt>
    <dd>返回&lt;表达式&gt;在&lt;索引-表达式&gt;位置的元素值。&lt;表达式&gt;可能是一个对象、数组或类。如果该元素不存在，则返回<em>undefined</em>。</dd>
    <dt><strong><code>[</code></strong>idx1<strong><code>..</code></strong>idx2<strong><code>]</code></strong></dt>
    <dd>&lt;数组-或-字符串&gt; <strong><code>[</code></strong> [&lt;整数-表达式-起始&gt;] <strong><code>..</code></strong> [&lt;整数-表达式-结束&gt;] <strong><code>]</code></strong><br />
	数组或字符串的一个片段。返回从&lt;整数-表达式-起始&gt;开始(包含)到&lt;整数-表达式-结束&gt;结束(不包含)的子数组或子字符串。如果&lt;整数-表达式-起始&gt;省略了，则它默认为<em>0</em>；如果&lt;整数-表达式-结束&gt;省略，则它默认为<em>.length</em>的值。例如，下面的语句将会输出&quot;Spain&quot;:<pre v-pre><code>var str = &quot;The rain in Spain&quot;;
stdout.println( str[12..] );</code></pre></dd></dl>
  <dt><strong><code>like</code></strong> <strong><code>!like</code></strong></dt>
  <dd>&lt;表达式&gt; <strong><code>like</code></strong> &lt;模式-表达式&gt;<br/>
  &lt;表达式&gt; <strong><code>!like</code></strong> &lt;模式-表达式&gt; (not like)<br/>
  &lt;表达式&gt;可以是以下表达式之一:
    <ul>
      <li><strong>string</strong>(模式)或<strong>正则表达式</strong>。如果&lt;表达式&gt;是一个字符串，则该操作符会匹配正则表达式&lt;regexp&gt;给定的字符串或一个简单的&lt;字符串模式&gt;。&lt;字符串模式&gt;是一个包含单字符占位符'<code>?</code>'和多字符占位符'<code>*</code>'的字符串。例如，<code>&quot;page.htm&quot; like &quot;*.htm&quot;</code>语句的值为<em>true</em>, 而<code>&quot;page.htm&quot; like &quot;*.html&quot;</code>语句的值为<em>false</em>。</li>
      <li><strong>object</strong>。如果&lt;表达式&gt;是一个对象，则&lt;表达式&gt;匹配&lt;对象-模式-表达式&gt;。如果&lt;对象-模式-表达式&gt;是对象的子集，则返回<em>true</em>。&lt;对象-模式-表达式&gt;可以包含<code>#any</code>标识符来匹配所有对象。</li>
      <li><strong>array</strong>.如果&lt;表达式&gt;是一个数组，则如果该数组从&lt;数组-模式-表达式&gt;起始则返回<em>true</em>。</li>
      <li>like操作符的其他值等价于<code>==</code>操作符。</li></ul></dd>
  <h2>字符串操作符</h2>
  <dl class="flat">
    <dt><strong><code>~/</code></strong> <strong><code>~%</code></strong></dt>
    <dd>&lt;字符串-表达式&gt; <strong><code>~/</code></strong> &lt;字符串-分割符&gt; (分割头操作)<br/>
	&lt;字符串-表达式&gt; <strong><code>~%</code></strong> &lt;字符串-分割符&gt; (分割尾操作)<br/>
	这两个操作符在&lt;字符串-表达式&gt;中查找&lt;字符串-分割符&gt;字符串，并且返回&lt;字符串-表达式&gt;的头部(从字符串起始到&lt;字符串-分割符&gt;位置)或尾部(从&lt;字符串-分割符&gt;位置开始到字符串的结尾)。这两个操作符都是从&lt;字符串-表达式&gt;的起始位置开始查找&lt;字符串-分割符&gt;。如果&lt;字符串-分割符&gt;未找到，则<strong><code>~/</code></strong>返回&lt;字符串-表达式&gt;本身，<strong><code>~%</code></strong>返回空字符串。示例:<br/>
	<code>&quot;file://something:anything.htm&quot; ~/ &quot;:&quot;</code> 的值为<code>&quot;file&quot;</code>字符串,<br/>
	<code>&quot;file://something:anything.htm&quot; ~% &quot;:&quot;</code> 的值为<code>&quot;//something:anything.htm&quot;</code>字符串,</dd>
    <dt><strong><code>/~</code></strong> <strong><code>%~</code></strong></dt>
    <dd>&lt;字符串-表达式&gt; <strong><code>/~</code></strong> &lt;字符串-分割符&gt; (反转 分割头操作)<br/>
	&lt;字符串-表达式&gt; <strong><code>%~</code></strong> &lt;字符串-分割符&gt; (反转 分割尾操作)<br/>
	这两个操作符类似于<strong><code>~/</code></strong>、<strong><code>~%</code></strong>，只是它们是从&lt;字符串-表达式&gt;的尾部开始查找。如果&lt;字符串-分割符&gt;未找到, <strong><code>/~</code></strong>返回&lt;字符串-表达式&gt; 本身, 而<strong><code>%~</code></strong>返回空字符串。示例:<br/>
	<code>&quot;something.anything.htm&quot; /~ &quot;.&quot;</code>的值为<code>&quot;something.anything&quot;</code> 字符串,<br/>
	<code>&quot;something.anything.htm&quot; %~ &quot;.&quot;</code>的值为<code>&quot;htm&quot;</code>字符串。</dd></dl>