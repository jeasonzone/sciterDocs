# String(字符串)

<dl>
    <h2>属性</h2>
    <dt>length</dt>
    <dd>- <em>integer</em>, 只读属性。字符串中字符的数量。</dd>
    <dt>[index]</dt>
    <dd>- <em>integer</em>, 读写属性。字符串中在<em>index</em>位置的字符。索引基于0开始。</dd>
    <dt>[begin..end]</dt>
    <dd>- <em>integers</em>, begin和end索引基于0，表示一段范围。返回字符串中一个从<em>start</em>索引(包含)开始到<em>end</em>索引(不包含)结束的子字符串。<em>Begin</em>和<em>end</em>参数是可忽略的。如果begin被忽略，则会假设begin为0，如果end被忽略，则会假设end值为<em>length</em>。</dd>
	</dl>
	<h2>迭代</h2>
	<p><code>for (var <i>codepoint</i> in str) {...}</code></p>
	<p> 迭代字符串中所有UNICODE代码值。在内部，字符串被当做一个UTF16代码数组保存的，<code>str.length</code>报告这个数组的长度。在每次迭代中，<i>codepoint</i>遍历接收一个整数值 - UNICODE代码值。注意，如果字符串中包含代理对(两个UTF16代码值表示一个字符)，则迭代的次数可能小于<code>str.length</code>。</p>
	<p><i><code>for (var (strpos,codepoint) in str) {...}</code><br/></i></p>
	<p>上面的代码也报告代码值在字符串中的索引位置。</p>
  <dl>
    <h2>方法</h2>
		<dt>new String</dt>
    <dd>(<b>len</b>:integer [, <b>initCharCode</b> = ' '])
    <p>创建一个新的字符串，并且指定长度以及填充内容。</p></dd>
    <dt>toInteger</dt>
    <dd>
      <p><strong>([defaultValue[, radix:integer]])</strong> : integer | defaultValue | (undefined)</p>
      <p>尝试对字符串的内容进行解析成整数。如果解析失败则返回defaultValue(如果提供的话)或undefined。<br/>
	  toInteger期待字符串是以下格式:</p>
      <pre v-pre><code>[<em>空白符</em>] [{<strong>+</strong> | -}] [<strong>0</strong> [{ <strong>x</strong> | <strong>X</strong> }]] [<em>数字</em>]
</code></pre></dd>
    <dt>toFloat</dt>
    <dd>
      <p><strong>([defaultValue])</strong> : В float | defaultValue | (undefined)</p>
      <p>尝试对字符串的内容进行解析成浮点数。如果解析失败则返回defaultValue(如果提供的话)或undefined。<br/>
	  toFloat期待字符串是以下格式::</p>
      <pre v-pre><code>[<em>空白符</em>] [<em>sign</em>] [<em>数字</em>] [<strong>.</strong><em>数字</em>] [ {<strong>d</strong> | <strong>D</strong> | <strong>e</strong> | <strong>E</strong>}[<em>sign</em>]<em>数字</em>]
</code></pre></dd>
    <dt>toNumber</dt>
    <dd>
      <p><strong>([defaultValue])</strong> : integer | float | defaultValue | (undefined)</p>
      <p>尝试对字符串的内容进行解析成整数或浮点数。它等价于:</p>
      <pre v-pre><code>var n = s.toInteger( s.toFloat() );
</code></pre></dd>
    <dt>toString</dt>
    <dd>
      <p><strong>()</strong> : string</p>
      <p>返回字符串本身。</p></dd>
    <dt>toHtmlString</dt>
    <dd>
      <p><strong>()</strong> : string</p>
      <p>返回根据html规则转义后的字符串。它是htmlEscape()方法的别名。</p></dd>
    <dt>toUrlString</dt>
    <dd>
      <p><strong>()</strong> : string</p>
      <p>返回根据url规则转义后的字符串。它是urlEscape()方法的别名。</p></dd>
    <dt>substring</dt>
    <dd>
      <p><strong>(start [,end])</strong> : string | undefined</p>
      <p> start和end索引基于0，表示一段范围。返回字符串中一个从<em>start</em>索引(包含)开始到<em>end</em>索引(不包含)结束的子字符串。<em>Begin</em>和<em>end</em>参数是可忽略的。如果end被忽略，则会假设end值为<em>length</em>。</p>
      <p><em>start</em>或<em>end</em>的负值会被认为是&quot;从右侧索引&quot;，这样表达式 &quot;Script&quot;.substring(0,-1) == &quot;Script&quot;是有效的。</p></dd>
    <dt>substr</dt>
    <dd>
      <div><strong>(start [,length])</strong> : string | undefined</div>
      <p><em>start</em>和<em>length </em>是整数。<em>Start</em>基于0开始。length为字符数量。</p>
      <p><em>start</em>的负值被认为是&quot;从右侧索引&quot;，这样表达式&quot;Script&quot;.substr(-6) == &quot;Script&quot;是有效的。</p></dd>
    <dt>slice</dt>
    <dd>
      <p><strong>(start [,end])</strong> : string | undefined</p>
      <p>等价于<em>substring</em>方法。</p></dd>
    <dt>splice</dt>
    <dd>
      <div><strong>(index</strong>: int<strong>, count</strong>: int<strong> [, string1, string2, ...] )</strong> returns: string</div>
      <p>该方法:</p>
      <ol>
        <li>从字符串的<em>index</em>位置移除<em>count</em>个字符;</li>
        <li>从字符串的<em>index</em>位置开始插入string1, string2, ...;</li>
        <li>返回新的字符串。</li></ol></dd>
    <dt>concat</dt>
    <dd>
      <p><strong>( [string1[, string2[, ... [, stringN]]] )</strong> : string</p>
      <p>将参数中的字符串拼接到该字符串后，并返回新字符串: <em>self</em> + <em>string1</em> + <em>string2</em> + <em>string3</em> + ... + <em>stringN</em>.</p></dd>
    <dt>charAt</dt>
    <dd>
      <p><strong>( index )</strong> : string.</p>
      <p>返回只有一个字符的字符串。等价于substr( index, 1 )。 如果<em>index</em>超出了字符串的边界，则返回空字符串。</p></dd>
    <dt>charCodeAt</dt>
    <dd>
      <p><strong>( index )</strong> : integer | undefined</p>
      <p>返回字符串在<em>index</em>的unicode字符代码。</p></dd>
    <dt>indexOf</dt>
    <dd>
      <p><strong>( substring [,start] )</strong> : integer</p>
      <p>在该字符串中搜索substring。返回substring第一次出现的索引。如果未找到则返回-1。</p></dd>
    <dt>lastIndexOf</dt>
    <dd>
      <div><strong>( substring [,start] )</strong> : integer</div>
      <p>在该字符串中搜索substring。返回substring最后一次出现的索引。如果未找到则返回-1。</p></dd>
    <dt>lexicalCompare</dt>
    <dd>
      <p><strong>( what , </strong>[<strong> caseInsensitive:</strong> <em>true</em> | <em>false</em> ] <strong>)</strong> : integer</p>
      <p>将该字符串与<em>what</em>字符串使用词典字符顺序进行比较。例如: <code>&quot;ABC&quot; &lt; &quot;abc&quot;</code>将为true, 但是<code>&quot;ABC&quot;.lexicalCompare(&quot;abc&quot;)</code> 的值 &gt;= 1。如果caseInsensitive被提供且为true，则该比较将是大小写不敏感的。默认比较是大小写敏感的。</p></dd>
		<dt>distance</dt>
		<dd>( <b>other</b>: string ) : integer
      <p>该函数返回当前字符串与other字符串之间的<a href="https://en.wikipedia.org/wiki/Levenshtein_distance">编辑距离</a>。该值为一个非负整数。</p></dd>
    <dt>match</dt>
    <dd>
      <p><strong>( regexp )</strong> : string | array of strings | null value</p>
      <div>返回字符串中满足<em>regexp</em>正则表达式的字符串片段。</div></dd>
    <dt>match</dt>
    <dd>
      <p><strong>( string )</strong> ' RegExp ' object instance | null value</p>
      <div>返回满足<em>字符串模式</em>的RegExp正则表达式对象。</div></dd>
    <dt>replace</dt>
    <dd>
      <p>(<a> regexp</a>, <a>replaceBy: string | function</a> ) : string</p>
      <p>返回一个字符串的副本，该副本为所有满足regexp的的子字符串使用<em>replaceBy</em>替换。如果<em>replaceBy</em>是一个函数，则会为每个匹配子字符串调用该函数。这个函数参数分别对应整个字符串和匹配的子字符串。</p>
      <p>示例:</p>
      <pre v-pre><code>var s = &quot;212F&quot;;
var test = /(\d+(?:\.\d*)?)F\b/g;
function f2c(str, g1)
{
   return ((g1.toNumber() - 32) * 5/9) + &quot;C&quot;;
}
stdout.printf(&quot;%V\n&quot;, s.replace(test, f2c ));
</code></pre>
      <p>上面的代码将给定的字符串(<em>s</em>)中的每个华氏度转换成摄氏度。</p></dd>
    <dt>search</dt>
    <dd>
      <p><strong>( regexp )</strong> : integer</p>
      <p>返回字符串中满足regexp的第一个索引位置。如果未找到则返回-1。</p></dd>
    <dt>split</dt>
    <dd>
      <p><strong>(<a>separator</a>[, <a>limit</a>])</strong> : array</p>
      <p>将字符串根据<em>separator</em>进行分隔。<em>Separator</em>既可以是字符串也可以是regexp对象。返回一个字符串数组 - separator分隔的子字符串们。Limit是一个整数 - 返回的数组中元素的最大数量。</p></dd>
    <dt>fromCharCode</dt>
    <dd>
      <p><strong>([<a>code1</a>[, code2[, <a>...</a>[, <a>codeN</a>]]]])</strong> : string</p>
      <p>静态方法。返回有给定的字符代码指定的字符组成的字符串。</p></dd>
    <dt>toLowerCase</dt>
    <dd>
      <p><strong>()</strong> : string</p>
      <p>返回字符串的小写形式的副本。</p></dd>
    <dt>toUpperCase</dt>
    <dd>
      <div><strong>()</strong> : string</div>
      <p>返回字符串的大小形式的副本。</p></dd>
    <dt>trim</dt>
    <dd>
      <div><strong>( </strong>[<strong>#left</strong> | <strong>#right</strong>]<strong> ) </strong>: string</div>
      <p>返回移除左/右空白字符的字符串副本。</p></dd>
    <dt>urlEscape</dt>
    <dd>
      <p><strong>()</strong> : string</p>
      <p>返回<a href="http://pdos.csail.mit.edu/rover/RoverDoc/escape_url_table.html">url转义</a>的该字符串副本(如果它包含需要转义的字符) 或 该字符串本身(如果没有这样的字符)。注意: 非ascii字符将会首先转换utf-8序列且结果代码将会被转义。</p></dd>
    <dt>urlUnescape</dt>
    <dd>
      <div><strong>()</strong> : string</div>
      <p>还原url转义转义后的字符串。</p></dd>
    <dt>htmlEscape</dt>
    <dd>
      <p><strong>()</strong> : string</p>
      <p>返回一个字符串，其中每个<font size="3">&lt; &gt; &amp; &quot; </font>or<font size="3"> '</font>字符都将替换为<em>&amp;lt;</em> <em>&amp;gt;</em> <em>&amp;amp;</em> <em>&amp;quot;</em> or <em>&amp;apos;</em>。</p></dd>
    <dt>htmlUnescape</dt>
    <dd>
      <div><strong>()</strong> : string</div>
      <p>返回一个字符串，其中<a href="http://www.w3.org/TR/REC-html40/sgml/entities.html">html实体</a>替换为对应的字符。</p></dd>
    <dt>$</dt>
    <dd>
      <p><strong>(</strong> ... <strong>)</strong> : string</p>
      <p>静态方法, 返回一个组合字符串。注意：设置一个字符串器方法。</p>
      <p>示例:</p>
      <pre v-pre><code>var pt = { x:12, y:42  };
var msg = String.$(coordinates are x:{ pt.x } y:{ pt.y });
</code></pre>
      <p>上面的代码会在<code>msg</code>变量中生成<code>&quot;coordinates are x:12 y:42&quot;</code>。</p></dd>
    <dt><a name="printf">printf</a></dt>
    <dd>
      <p>( format, [<a>value1</a>[, value2[, <a>...</a>[, <a>valueN</a>]]]]) : string</p>
      <p>静态方法，返回使用<a href="http://www.cplusplus.com/ref/cstdio/printf.html" target="_blank">sprintf C/C++ 函数</a>规则的格式化字符串。</p>
      <div>另外添加的格式类型:</div>
      <ul>
        <p><strong>%v</strong>和<strong>%V</strong> - 该格式接受任何类型的值作为参数，并且生成源代码格式以便接下来使用eval()方法。所以如果参数是一个数组则它会输出为&quot;[element1, element2, element3... elementN]&quot;，而如果它是一个对象(Object类的实例)则它会输出为&quot;{key1:value1, key2:value2,..., keyN:valueN}&quot;。 %v产生单行输出，而%V会尝试生成人易阅读的输出(包含换行和缩进)。<br/>
		它使用在当你需要在AJAX/JSION中序列化对象时。</p>
        <p><strong>%S</strong> - 将对应的参数转换成字符串，并将其中的<em>HTML转义字符</em>进行转义。所以像'&lt;'字符在输出中将会转换为&quot;&amp;lt;&quot;。</p></ul></dd>
    <dt>scanf</dt>
    <dd>
      <div><strong>( </strong><em>format</em>: string <strong>)</strong> : array</div>
      <p>浏览字符串并查找满足<a href="http://www.cplusplus.com/reference/clibrary/cstdio/scanf.html">scanf C/C++ 函数</a>规则的值。该函数扩展了原有的通配符(类似%[a-z])。见<a href="http://msdn.microsoft.com/en-us/library/xdb9w69d(VS.71).aspx">scanf in MSDN</a>定义。</p>
      <p>另外添加的格式类型:</p>
      <ul>
        <p><strong>%N</strong> - 浏览浮点或整数。</p></ul>
      <p>该函数返回成功解析的值的数组。</p></dd></dl>