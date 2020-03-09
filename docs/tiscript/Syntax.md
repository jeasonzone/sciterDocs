# 语法

<h2>词法结构</h2>
  <h2>标识符</h2>
  <p>标识符以字母或'_'、'$'、'@'开头，购买跟着一些字母、'_'、'$'、'@'、数字([0-9])。 <br/>&quot;Foo&quot;、&quot;foo&quot;和&quot;FOO&quot;是3个不同的有效标识符。</p>
  <h2>关键字</h2>
  <p>下面是该语言使用的关键字列表。这些不能被用于当做标识符：</p>
  <pre v-pre><code>function,   var,      if,       else,     while,     return,   for,
break,      continue, do,       switch,   case,      default,  null,
super,      new,      try,      catch,    finally,   throw,    typeof,
instanceof, in,       property, const,    get,       set,      include,
like,       yield,    type,     class,    namespace, assert,   debug
otherwise
</code></pre>
  <h2>操作符</h2>
  <p>该语言使用的操作符：</p>
  <pre v-pre><code>      =     !     ~     ^     *     /     %
+     -     &amp;     |     =    &gt;    &amp;&amp;    ||    ++    --    +=    -=    *=    /=
%=    &amp;=    |=    ^=    &gt;=   ..    ===   !==
&gt;&gt;   &gt;&gt;=  ~/    ~%    /~    %~
</code></pre>
  <p>特殊符号：</p>
  <pre v-pre><code>[ ] { } # &quot; &apos `
</code></pre>
  <h2>注释</h2>
  <p>多行注释文本括在<code>/*</code>和<code>*/</code>括号。</p>
  <p>单行注释以<code>//</code>开始，直至行尾。</p>
  <h2>数据声明</h2>
  <h3>整数类型</h3>
  <table cellspacing="1" cellpadding="3" border="0" bgcolor="black">
    <tbody><tr valign="top">
      <td bgcolor="white"><b>模式</b></td>
      <td bgcolor="white"><b>示例</b></td>
      <td bgcolor="white"><b>说明</b></td></tr>
    <tr valign="top">
      <td bgcolor="white"><code>-?[1-9][0-9]*</code></td>
      <td bgcolor="white">34</td>
      <td bgcolor="white">十进制数字</td></tr>
    <tr valign="top">
      <td bgcolor="white"><code>-?0[0-9]*</code></td>
      <td bgcolor="white">0336</td>
      <td bgcolor="white">八进制数字</td></tr>
    <tr valign="top">
      <td bgcolor="white"><code>-?0[xX][0-9a-fA-F]+</code></td>
      <td bgcolor="white">0x3d</td>
      <td bgcolor="white">16进制数字</td></tr>
    <tr valign="top">
      <td bgcolor="white"><code>'.'</code></td>
      <td bgcolor="white">'A'</td>
      <td bgcolor="white">字符代码(整数)</td></tr></tbody></table>
  <h3>浮点类型</h3>
  <table cellspacing="1" cellpadding="3" border="0" bgcolor="black">
    <tbody<tr valign="top">
      <td bgcolor="white"><b>模式</b></td>
      <td bgcolor="white"><b>示例</b></td>
      <td bgcolor="white"><b>说明</b></td></tr>
    <tr valign="top">
      <td bgcolor="white"><code>-?[0-9]*\.[0-9]+</code></td>
      <td bgcolor="white">3.1415926</td>
      <td bgcolor="white">3.1415926</td></tr>
    <tr valign="top">
      <td bgcolor="white"><code>-?[0-9]+[eE]-?[0-9]+</code></td>
      <td bgcolor="white">-5e3</td>
      <td bgcolor="white">-5000.0</td></tr>
    <tr valign="top">
      <td bgcolor="white"><code>-?[0-9]*\.[0-9]+[eE]-?[0-9]+</code></td>
      <td bgcolor="white">.22e-2</td>
      <td bgcolor="white">0.0022</td></tr></tbody></table>
  <h3>字符串类型</h3>
  <p>字符串是一个使用双引号<code>&quot;</code>或单引号<code>`</code>(字符代码为0x60)括起来的字符列表。</p>
  <p><code>&quot;Hello world&quot;</code>和<code>`Hello world`</code>都是有效的字符串。在字符串中以反斜杠(<code>\</code>)开始的字符是转义字符。</p>
  <p>转义规则:</p>
  <table bgcolor="#000000" border="0" cellpadding="3" cellspacing="1">
    <tbody><tr valign="top">
      <td bgcolor="#ffffff"><strong>转移字符</strong></td>
      <td bgcolor="#ffffff"><strong>意义</strong></td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\b</code></td>
      <td bgcolor="#ffffff">退格(BS) ，将当前位置移到前一列</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\t</code></td>
      <td bgcolor="#ffffff">水平制表(HT) （跳到下一个TAB位置）</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\n</code></td>
      <td bgcolor="#ffffff">换行(LF) ，将当前位置移到下一行开头</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\f</code></td>
      <td bgcolor="#ffffff">换页(FF)</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\r</code></td>
      <td bgcolor="#ffffff">回车(CR) ，将当前位置移到本行开头</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\&quot;</code></td>
      <td bgcolor="#ffffff">双引号&quot;字符</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\\</code></td>
      <td bgcolor="#ffffff">反斜杠\字符</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\`</code></td>
      <td bgcolor="#ffffff">单引号`字符</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\[0-7]{1,3}</code></td>
      <td bgcolor="#ffffff">\116 - 八进制字符</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\x[0-9a-fA-F]{1,2}</code></td>
      <td bgcolor="#ffffff">\4e - 16进制字符代码</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>\u[0-9a-fA-F]{4}</code></td>
      <td bgcolor="#ffffff">\u004E - unicode字符代码</td></tr></tbody></table>
  <p>以空格或EOL字符分隔的两个或多个字符串，会被当做一个字符串。因此下面的字符串：</p>
  <pre v-pre><code>var str1 = &quot;The quick brown &quot;
           &quot;fox jumps over &quot;
           &quot;the lazy dog&quot;;
var str2 = &quot;The quick brown fox jumps over the lazy dog&quot;;
</code></pre>
  <p>含义是一样的。</p>
  <h3>标识符(Symbol)</h3>
  <p>标识符是以'<code>#</code>'开始，后面跟着一个或多个有效字符的序列。</p>
  <p>有效字符这里指: 大写或小写的字母、数字、'_'、'<code>$</code>'、'<code>@</code>'、'<code>-</code>'。</p>
  <p>注意：这个标识符可以包含'<code>-</code>'(减号)。这是为了支持CSS名称。下面是一个有效标识符的示例：</p>
  <pre v-pre><code>var symFontFace = #font-face;
var symBorder = #border;
</code></pre>
  <h3>特殊字符</h3>
  <table bgcolor="#000000" border="0" cellpadding="3" cellspacing="1">
    <tbody><tr valign="top">
      <td bgcolor="#ffffff"><strong>字符</strong></td>
      <td bgcolor="#ffffff"><strong>说明</strong></td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>undefined</code></td>
      <td bgcolor="#ffffff">隐式地没有值(no-value)。在访问对象中不存在的属性时会返回该值。<br/>
	  使用typeof判断<em>undefined</em>的类型为#symbol。</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>null</code></td>
      <td bgcolor="#ffffff">显式地没有值(no-value)。使用typeof判断<em>null</em>的类型为#object。</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>true</code></td>
      <td bgcolor="#ffffff">逻辑操作中的'真'值。使用typeof判断<em>true</em>的类型为#boolean。</td></tr>
    <tr valign="top">
      <td bgcolor="#ffffff"><code>false</code></td>
      <td bgcolor="#ffffff">逻辑操作中的'假'值。使用typeof判断<em>false</em>的类型为#boolean。</td></tr></tbody></table>
  <h3>数组声明</h3>
  <p>数组声明允许定义(创建)一个内联数组。数组的声明是以逗号分隔，以<code>[</code>、<code>]</code>(方括号)闭合的表达式初始化列表:</p>
  <pre v-pre><code>var a = [ 1, 2, 3, &quot;four&quot;, 5 ];
</code></pre>
  <p>在上面的语句中，<em>a</em>变量获取了一个新定义地有5个元素的数组。</p>
  <p>任何在最后一个元素和<code>]</code>(闭合方括号)间的<code>,</code> (逗号)都将会被忽略。因此，下面的声明是一个有效的数组声明：</p>
  <pre v-pre><code>var a = [ 1, 2, 3, &quot;four&quot;, 5, ];</code></pre>
	<h4>数组声明中的展开操作符</h4>
	<p>数组声明中可以包含所谓的“展开表达式”：<code>.. &lt;iterable&gt;</code>，其中<code>&lt;iterable&gt;</code>可以是一个数组、元组或生成器实例。展开操作符可以使数组名称从其他数组或生成序列中组合成新数组。所以以下代码结果将为<code>true</code>:</p>
	<pre v-pre><code>var a1 = [0,1,2];
var a2 = [..a1, 3, 4];
a2 == [0, 1, 2, 3, 4];</code></pre>
  <p>声明数组类型的格式定义：</p>
  <p><code>[</code> ( <code>&lt;rs-expr&gt;</code> <code>,</code> )* &nbsp;<code>]</code></p>
  <p>其中，&lt;rs-expr&gt;是所谓的右侧表达式 - 该表达式可以出现在<code>=</code>(赋值)操作符的右侧。</p>
  <h3>对象声明</h3>
  <p>对象声明允许定义(创建)内联对象。对象的声明是以<code>,</code>(逗号)或<code>;</code>(分号)分隔的，以<code>{</code>和<code>}</code>括起来的键-值对列表。每个键-值对以<code>:</code>(冒号)分隔：</p>
  <pre v-pre><code>var obj = { one: 1, two: 2, three: &quot;three&quot;, four:4 };
</code></pre>
  <p>如果键表示为一个名称标记，则它会被解释为一个标识符名称。因此，下面的语句：</p>
  <pre v-pre><code>var obj = { #one: 1, #two: 2, #three: &quot;three&quot;, #four:4 };
</code></pre>
  <p>和上面的语句是等价的。</p>
  <p>如果在<code>{</code>后面第一个标记是<code>:</code>(冒号)，则会将该键名当做类名。这样可以在声明用户自定义类的对象：</p>
  <pre v-pre><code>var myObj = {:MyClass one:1, two:2, three: &quot;three&quot;, four:4 };
</code></pre>
  <p>声明对象的格式定义:</p>
  <p><code>{</code> [ <code>:</code> <code>&lt;class-name&gt;</code> &nbsp;] ( <code>&lt;rs-expr&gt;</code> <code>:</code> <code>&lt;rs-expr&gt;</code> [ <code>,;</code> ] )* &nbsp;( <code>&lt;rs-expr&gt;</code> <code>:</code> <code>&lt;rs-expr&gt;</code> )? &nbsp;<code>}</code></p>
  <h3>声明正则表达式</h3>
  <p>正则表达式是以<code>/</code>(斜杠)括起来的规则表达式序列:</p>
  <pre v-pre><code>var re = /^[ \t]*$/ ; // 匹配空行的正则表达式
</code></pre>
  <p>声明正则表达式的格式定义:</p>
  <p><code>/</code> &lt;re-expression&gt; <code>/</code>[<code>i</code>][<code>g</code>]</p>
  <p>其中，<em>i</em>意味着大小写敏感匹配，<em>g</em>意味着启用&quot;全局&quot;匹配。当调用<em>RegExp.exec()</em>方法时，将返回所有匹配此装饰符，而不是第一个。</p>
  <h3>元组(Tuple)声明</h3>
  <p>元组声明允许定义(创建)一个内联元组。元组的声明是在一个标识符后面跟着一个以<code>[</code>和<code>]</code>(方括号)括起来的以<code>,</code>(逗号)分隔的表达式初始化列表:</p>
  <pre v-pre><code>var tup = #tupletag[ 1, 2, 3, &quot;four&quot;, 5 ];
</code></pre>
  <p>在上面的语句中，<em>tup</em>变量获取了一个新定义的5元组(有5个元素)的引用。<code>tup.tag</code>属性将有<code>#tupletag</code>中的值。</p>
  <p>任何在最后一个元素和<code>]</code>(闭合方括号)间的<code>,</code> (逗号)都将会被忽略。因此，下面的声明是一个有效的元组声明：</p>
  <pre v-pre><code>var tup = #tupletag[ 1, 2, 3, &quot;four&quot;, 5, ];
</code></pre>
  <p>元组声明的格式定义:</p>
  <p><code>&lt;symbol&gt;</code> <code>[</code> ( <code>&lt;rs-expr&gt;</code> <code>,</code> )* &nbsp;<code>]</code></p>
  <p>其中，&lt;rs-expr&gt;是所谓的右侧表达式 - 该表达式可以出现在<code>=</code>(赋值)操作符的右侧。</p>
  <h3>宏(Macro)变量</h3>
  <p>有3个宏变量可以用于日志和调试目的:</p>
  <ul>
    <li><code>__FILE__</code> - 当前文件的全路径;</li>
    <li><code>__FOLDER__</code> - 当前目录的全路径;</li>
    <li><code>__LINE__</code> - 当前文件中的行号;</li>
    <li><code>__TRACE__</code> - 准确地说是一个说明，它创建了一个当前调用轨迹的快照作为一个三元向量。每个三元是一个有三个元素的向量:</li>
    <ul>
      <li><code>[0]</code> - integer, 行号;</li>
      <li><code>[1]</code> - symbol, 函数名;</li>
      <li><code>[2]</code> - symbol, 文件名。</li></ul></ul>