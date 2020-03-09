# 语句

<h1>语句</h1>
  <dl class="flat">
    <dt><strong><code>{</code></strong> &lt;语句&gt; <strong><code>}</code></strong></dt>
    <dd>一个语句序列，由花括号'{'和'}'分隔，被称作<strong>块</strong>。一个块本身就是一个语句。每个块为它内部的<strong>var</strong>和<strong>const</strong>语句声明的变量建立自己的名称空间。</dd>
    <br />
		<dt>&lt;表达式&gt; <code>(</code> [&lt;参数-表达式&gt;[&nbsp;<code>,</code> &lt;参数-表达式&gt;[ <code>,</code> ... &lt;参数-表达式&gt;]]] <code>)</code> </dt>
		<dd>函数/方法调用。左侧的&lt;表达式&gt;的值应该为一个函数引用。&lt;参数-表达式&gt;列表(如果存在)的求值结果将被作为函数的参数传递给函数。
      <p>&lt;参数-表达式&gt;可以是一个正常表达式，也可以是一个展开操作<code>..</code>&lt;iterable&gt;，其中<i>iterable</i>是一个数组、元组或生成器实例。Iterable将展开成参数序列。</p>
     </dd>
    <dt><strong><code>if</code></strong> <strong><code>(</code></strong> &lt;表达式&gt; <strong><code>)</code></strong> &lt;语句&gt; [ <strong><code>else</code></strong> &lt;语句&gt; ]</dt>
    <dd>根据条件执行一个语句，具体执行哪个语句依赖于&lt;表达式&gt;的结果。</dd>
    <br /> 
    <dt><strong><code>while</code></strong> [ <code><strong>:</strong></code> label ] <strong><code>(</code></strong> &lt;表达式&gt; <strong><code>)</code></strong> &lt;语句&gt;</dt>
    <dd>当&lt;表达式&gt;为true时执行&lt;语句&gt;。<em>label</em>可用在命名的<em>break</em>和<em>continue</em>语句中。</dd>
    <br />
    <dt><strong><code>do</code></strong> [ <code><strong>:</strong></code> label ] &lt;语句&gt; <strong><code>while</code></strong> <strong><code>(</code></strong> &lt;表达式&gt; <strong><code>)</code></strong></dt>
    <dd>执行&lt;语句&gt;一次，然后根据&lt;表达式&gt;是否为true来判断是否继续重复执行。</dd>
    <br />
    <dt><strong><code>for</code></strong> [ <code><strong>:</strong></code> label ] <strong><code>(</code></strong> &lt;初始化-表达式&gt; | <strong><code>var</code></strong> &lt;name-with-initialization&gt; <code>;</code> [&lt;条件-表达式&gt;] <code>;</code> [&lt;递增-表达式&gt;] <strong><code>)</code></strong> &lt;语句&gt;</dt>
    <dd>只要&lt;条件-表达式&gt;为true，则继续执行&lt;语句&gt;。</dd>
    <br />
    <dt><strong><code>for</code></strong> [ <strong><code>:</code></strong> label ] <code><strong>(</strong></code> [ <strong><code>var</code> </strong>] &lt;name&gt; <strong><code>in</code></strong> &lt;表达式&gt; <code><strong>)</strong></code> &lt;语句1&gt; [ <code><strong>otherwise</strong></code> &lt;语句2&gt; ]</dt>
    <dd>为数组、对象或函数(又名生成器函数)的每个元素执行&lt;语句1&gt;。如果&lt;表达式&gt;是一个数组，则&lt;name&gt;变量在每一次迭代中接收数组中的一个成员变量。如果&lt;表达式&gt;是对象，则&lt;name&gt;接收对象的每个属性名(又称键)。如果&lt;表达式&gt;是函数，则每次迭代会调用该函数，直到函数返回<em>nothing</em>。<br/>
	如果循环体没有被执行(例如，当&lt;表达式&gt;返回一个空数组时)时，则会执行<em>otherwise</em>的语句。</dd>
    <br />
    <dt><strong><code>for</code></strong> [ <strong><code>:</code></strong> label ] <code><strong>(</strong></code> [ <strong><code>var</code> </strong>] <em>&lt;name-list&gt;</em> <strong><code>in</code></strong> &lt;表达式&gt; <code><strong>)</strong></code> &lt;语句1&gt; [ <code><strong>otherwise</strong></code> &lt;语句2&gt; ]</dt>
    <dd>当<em>&lt;name-list&gt;</em>是一个用逗号<code><strong>,</strong></code>分隔并用<code><strong>(</strong></code> <code><strong>)</strong></code>括起来的变量列表时, 为数组、对象或函数(又名生成器函数)的每个元素执行&lt;语句1&gt;。<br/>
	如果&lt;表达式&gt;是一个数组，则在每次迭代中，&lt;name-list&gt;接收连续的索引值和对应的数组成员的值。如果&lt;表达式&gt;是对象，则第一个变量接受属性的名称(又称键)，第二个变量接收属性的值。如果&lt;表达式&gt;是函数，则每次迭代会调用该函数，直到函数返回<em>nothing</em>。<em>&lt;name-list&gt;</em>中的变量将会接收函数返回的列表值。<br/>
	示例:<br/>
	<code>for( var (k,v) in obj ) stdout.printf(&quot;k=%s,v=%v,&quot;, k, v);</code> &nbsp;- 输出obj对象的每个属性的名称和值。<br/>
	<code>for( var (i,v) in arr ) stdout.printf(&quot;i=%d,v=%v,&quot;, i, v);</code> &nbsp;- 输出arr数组的索引和该索引位置的成员的值。<br/>
	如果循环体没有被执行(例如，当&lt;表达式&gt;返回一个空数组时)时，则会执行em>otherwise</em>的语句。</dd>
    <br />
    <dt><strong><code>switch</code> <code>(</code> </strong>&lt;selector-表达式&gt; <strong><code>)</code> 
      <code>{</code></strong> <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code><strong>case</strong></code> &lt;case-表达式&gt;<strong> <code>:</code> </strong>&lt;语句&gt; [...] <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong><code>like</code></strong> &lt;template-表达式&gt;<strong> <code>:</code> </strong>&lt;语句&gt; [...]<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong><code>default:</code> </strong>&lt;语句&gt; <strong><code>}</code></strong></dt>
    <dd><strong>switch</strong>语句运行从多个块中选择一个块来执行。当&lt;case-表达式&gt;的结果等于&lt;selector-表达式&gt;时，则对应的&lt;语句&gt;会执行。如果&lt;template-表达式&gt;匹配了&lt;selector-表达式&gt;，则对应的&lt;语句&gt;会执行。。如果没有匹配的&lt;case-表达式&gt;或&lt;template-表达式&gt;，则执行code>default:</code>标记下的语句。</dd>
    <br />
    <dt><strong><code>break</code></strong> [label]<strong> <code>;</code></strong></dt>
    <dd><strong>break</strong>语句用于中断一个循环体(for、for in、while、do/while)和switch语句的执行。如果label被提供，则它会中断名称标记为label的语句块。如果在当前作用域内未找到该label，则会生成一个语法错误。<br/>
	实例: <br/>
	<code>for:outer ( var row in rows )<br/>
	for:x ( var cell in row )<br/>
	if ( cell == current ) break outer;</code></dd>
    <br />
    <dt><strong><code>continue</code></strong> [label]<strong> <code>;</code></strong></dt>
    <dd><strong>continue</strong>语句强制一个循环(for、for in、while、do/while)调过下面的迭代语句。如果label被提供，则它会迭代到名称标记为label的语句块。如果在当前作用域内未找到该label，则会生成一个语法错误。</dd>
    <br />
    <dt><strong><code>var</code></strong> &lt;name-or-name-list&gt; [ <strong><code>=</code></strong> &lt;init-表达式&gt;] [ <strong><code>,</code></strong> &lt;name&gt; [<strong>=</strong> &lt;init-表达式&gt;] ... ] <strong><code>;</code></strong></dt>
    <dd><strong>var</strong>语句引入一个新的变量到当前作用域内。使用块语句( <code><strong>{</strong></code> ... <code><strong>}</strong></code> )建立一个变量作用域。(<em>注意</em>: 在JavaScript中, 作用域只能在一个函数的函数体内建立)。<br/>
	<em>&lt;name-or-name-list&gt;</em>这里既可以是一个&lt;名称&gt;，也可以是使用逗号<code><strong>,</strong></code>分隔并且<code><strong>(</strong></code> and &nbsp;<code><strong>)</strong></code>括起来的变量组。 <br/>
	示例:<br/>
	<code>var (a,b,c) = 1;</code> - 声明变量a、b、c，并且为它们赋值'1'。<br/>
	<code>var (a,b,c) = (1,2,3);</code> - 等价于<code>var a = 1, b = 2, c = 3;</code></dd>
    <br />
    <dt><strong><code>return</code></strong> [ &lt;表达式&gt; | &lt;表达式-列表&gt; ] <strong><code>;</code></strong></dt>
    <dd><strong>return</strong>语句终止当前函数的执行，它还可以返回&lt;表达式&gt;或&lt;表达式-列表&gt;作为结果。如果表达式被省略，则函数会返回特定的<em>undefined</em>值。 <br/>
	注意：<em>return</em>可以通过表达式列表返回多个值:<br/>
	<code>function rect() { return (10,10,100,100); }<br/>
	var (x,y,width,height) = rect(); // x和y获取到'10'，width和height获取到'100'。</code></dd>
    <br />
    <dt><strong><code>const</code></strong> &lt;名称&gt; <strong>=</strong> &lt;初始化-表达式&gt; [ <strong><code>,</code></strong> &lt;名称&gt; <strong>=</strong> &lt;初始化-表达式&gt; ... ] <strong><code>;</code></strong></dt>
    <dd><strong>const</strong>语句引入一个新的命名常量到当前作用域。在const语句外，任何试图对&lt;名称&gt;赋值的语句都会生成一个编译时错误。</dd>
    <br />
    <dt><strong><code>try</code></strong> &lt;语句&gt; <strong><code>catch</code></strong> <strong><code>(</code></strong> &lt;变量名&gt; <strong><code>)</code></strong> &lt;catch-语句&gt; <strong><code>finally</code></strong> &lt;finally-语句&gt;</dt>
    <dd><strong>try</strong>语句闭合一个可能发生异常(如运行期错误、一个<strong>throw</strong>语句)的代码块。catch部分的语句提供了异常处理代码。当一个catch捕捉到异常，它的&lt;变量名&gt;将绑定到该异常。&lt;finally-语句&gt;在<strong>try</strong>块后无条件执行——无论&lt;语句&gt;是否发生。</dd>
    <br />
    <dt><code><strong>with</strong></code> <code><strong>(</strong></code> &lt;表达式:对象&gt; <code><strong>)</strong></code> &lt;语句&gt;</dt>
    <dd>当执行&lt;语句&gt;语句时，将给定的对象添加到正在使用的作用域链中。对象两边的括号是必须的。</dd>
    <br />
    <dt><code><strong>await</strong></code> &lt;返回一个promise的表达式&gt; ;</dt>
    <dd><strong>await</strong>语句暂停当前task函数的执行，直到promise被解决(完成或拒绝)。如果promise被拒绝，则会在当前函数的上下文中抛出一个错误。如果一个函数中出现了<strong>await</strong>语句，则这个函数会被当做task函数(任务)，调用这个任务函数将直接返回一个代表这个函数的promise，而不是执行它的函数体。</dd>
    <br />
    <dt><code><strong>yield</strong></code> &lt;表达式&gt;;</dt>
    <dd><strong>yield</strong>语句将暂停当前生成器函数的执行，并返回表达式的值。如果一个函数中出现了<strong>yield</strong>语句，则这个函数会被当做生成器函数——内部包含一个状态来进行协程。</dd>
    <br />
    <br />
    <dt><code><strong>include</strong></code> &lt;字符串-表达式&gt; | &lt;stream-表达式&gt; | &lt;bytes-表达式&gt; <code>;</code></dt>
    <dd>include语句定义被引入(加载和求值)到当前名称空间的脚本。表达式可以是以下值之一: 
    <ul>
      <li>字符串或字符串变量 - 进入文件的文件名。文件可以包含脚本源代码或编译后的字节码;</li>
      <li>求值为stream流的表达式;</li>
      <li>求值为Bytes数组的表达式。</li>
    </ul>
    </dd>
    <dt><strong><code>assert</code></strong> &lt;测试-表达式&gt; [ <strong><code>:</code></strong> &lt;信息-表达式&gt; ] <strong><code>;</code></strong></dt>
    <dd><strong>assert</strong>
    <p>语句允许你测试你的程序中的断言。当&lt;测试-表达式&gt;在运行期为<em>false</em>时，将会抛出一个异常，该异常包含源码文本中的&lt;测试-表达式&gt;和&lt;信息-表达式&gt;。</p>
    <p>注意: 当没有打开调试器时, 该语句将没有作用(NOP - 空语句)。</p></dd>
    <dt><code><strong>debug break;</strong></code></dt>
    <dd>在源代码中定义显性的断点, 当调试器打开时，代码执行到该位置时将自动停在该行。当调试器没打开时，该语句将没有作用(NOP - 空语句)。</dd>
		<dt><code><strong>debug namespace;</strong></code></dt>
    <dd>输出当前名称空间链到调试控制台;</dd>
    <dt><code><strong>debug stacktrace;</strong></code></dt>
    <dd>输出当前位置的调用堆栈到调试控制台;</dd>
    <dt><code><strong>debug [log | info | warning | alert] :</strong></code> &lt;space-separated-list-of-expressions&gt; <code><strong>;<br/>
    debug [log | info | warning | alert] (</strong></code> &lt;stringizer-function-parameters&gt;&nbsp;<code><strong>)</strong></code></dt>
    <dd>
      <p>日志输出: 将表达式的执行结果输出到调试控制台。第二种格式支持字符串器参数，比如:</p>
			<pre v-pre><code>debug info ( object data {obj} );</code></pre>
      <p>注意: 当调试器没打开时，该语句将没有作用(NOP - 空语句);</p></dd>
    <dt>&lt;表达式&gt;<strong> <code>;</code></strong></dt>
    <dd>表达式以 ';'结尾作为一个语句。&lt;表达式&gt;的结果是可变的。</dd></dl>