# RegExp(正则表达式)

<p>代表编译后的正则表达式。</p>
  <p>支持的正则表达式语法:</p>
  <dl>
    <h2>规则</h2>
    <dt>字符</dt>
    <dd>含义</dd>
    <dt><code>\</code></dt>
    <dd>
      <p>该字符指示将下一个字符标记为一个特殊字符。</p>
      <p>例如, <code>/b/</code>匹配字符'b'。通过在'b'前放置一个反斜杠字符，即<code>/\b/</code>，则该字符就匹配一个单词边界。</p>
      <p><em>或者</em></p>
      <p>该字符也通常用于指示下一个字符不是特殊字符，即只需直接按字面意思翻译即可。</p>
      <p>例如, *是一个特殊字符，它的意思是匹配*号前面的字符出现0个或多个的情况。如<code>/a*/</code>意思是匹配0个或多个&quot;a&quot;。若为了匹配<code>*</code>字符, 则在它前面放一个反斜杠；如<code>/a\*/</code>会匹配'a*'。</p></dd>
    <dt><code>^</code></dt>
    <dd>
      <p>匹配输入字符串的开始位置。如果设置了 RegExp 对象的Multiline属性，^也匹配'\n'或'\r'(换行)之后的位置。</p>
      <p>例如, <code>/^A/</code>不会匹配&quot;an A&quot;中的'A', 但是会匹配&quot;An A.&quot;中的第一个'A'。</p></dd>
    <dt><code>$</code></dt>
    <dd>
      <p>匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$也匹配'\n'或'\r'(换行)之前的位置。</p>
      <p>例如, <code>/t$/</code>不会匹配&quot;eater&quot;中的't', 但是会匹配&quot;eat&quot;中的't'。</p></dd>
    <dt><code>*</code></dt>
    <dd>
      <p>匹配*前面的子表达式0次或多次。</p>
      <p>例如, <code>/bo*/</code>会匹配&quot;A ghost booooed&quot;中的'boooo'和&quot;A bird warbled&quot;中的'b', 但是不会匹配&quot;A goat grunted&quot;。</p></dd>
    <dt><code>+</code></dt>
    <dd>
      <p>匹配前面的子表达式一次或多次。等价于<code>{1,}</code>。</p>
      <p>例如, <code>/a+/</code>匹配&quot;candy&quot;中的'a'和&quot;caaaaaaandy&quot;中的'aaaaaaa'。</p></dd>
    <dt><code>?</code></dt>
    <dd>
      <p>匹配前面的子表达式0次或1次。等价于 {0,1}</p>
      <p>例如, <code>/e?le?/</code>会匹配&quot;angel&quot;中的'el'和&quot;angle.&quot;中的'le'。</p>
      <p>注意：当该字符紧跟在任何一个其他限制符 (*, +, ?, {n}, {n,}, {n,m}) 后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串 "oooo"，'o+?' 将匹配单个 "o"，而 'o+' 将匹配所有 'o'。</p>
      <p>也用于前瞻断言，如<code>(?=)</code>, <code>(?!)</code>, and <code>(?:)</code>。</p></dd>
    <dt><code>x{n}</code></dt>
    <dd>
      <p>其中n是一个正整数。匹配n次出现的前一项x。</p>
      <p>比如, /a{2}/ 讲不会匹配&quot;candy&quot;中的&quot;a&quot;, 但是它将匹配&quot;caandy&quot;中出现的所有&quot;a&quot;, 以及&quot;caaandy&quot;中的第一个两个&quot;a&quot;。</p>
    </dd> 
    <dt><code>x{n,}</code></dt>
    <dd>
      <p>其中n是一个正整数。匹配至少n次出现的前一项x。</p>
    </dd> 
    <dt><code>x{n,m}</code></dt>
    <dd>
      <p>其中n和m是一个正整数。 匹配至少n次最多m次出现的前一项x。</p>
    </dd> 
    <dt><code>.</code></dt>
    <dd>
      <p>匹配除"\n"、\r、\u2028、\u2029之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用象 '[.\n]' 的模式。(<code>[\s\S]</code>可以匹配任意字符，包括换行符号)</p>
      <p>例如, <code>/.n/</code>匹配&quot;nay, an apple is on the tree&quot;中的'an'和'on' , 但是不会匹配'nay'。</p></dd>
	<dt><code>{n}</code></dt>
    <dd>
      <p>n 是一个非负整数。匹配确定的 n 次。</p>
      <p>例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。</p></dd>
	<dt><code>{n,}</code></dt>
    <dd>
      <p>n 是一个非负整数。至少匹配n 次。</p>
      <p>例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。</p></dd>
	<dt><code>{n,m}</code></dt>
    <dd>
      <p>m 和 n 均为非负整数，其中n &lt;= m。最少匹配 n 次且最多匹配 m 次。</p>
      <p>例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。</p></dd>
    <dt><code>(x)</code></dt>
    <dd>
      <p>匹配<code><em>x</em></code>并记住这一匹配。这称为捕获括号。</p>
      <p>例如, <code>/(foo)/</code>匹配并记住&quot;foo bar.&quot;中的'foo'。可以从结果数组中使用<code>[1], ..., [n]</code>或者从定义的<code>RegExp</code>对象的<code>$1, ..</code>属性中调用被匹配的字符串。</p></dd>
    <dt><code>(x?=y)</code></dt>
    <dd>
      <p>仅当<i>x</i>后面跟着<i>y</i>时才匹配<i>x</i>。</p></dd>
    <dt><code>x(?!y)</code></dt>
    <dd>
      <p>仅当<i>x</i>后面跟着不是<i>y</i>时才匹配<i>x</i>。</p></dd>   
    <dt><code>x|y</code></dt>
    <dd>
      <p>匹配<code><em>x</em></code>或<code><em>y</em></code>。</p>
      <p>例如, <code>/green|red/</code>会匹配&quot;green apple&quot;中的'green'和&quot;red apple&quot;中的'red'。</p></dd>
	<dt><code>[xyz]</code></dt>
    <dd>
      <p>字符集合。匹配所包含的任意一个字符。</p>
      <p>例如， '[abc]' 可以匹配 "plain" 中的 'a'。</p></dd>
	<dt><code>[^xyz]</code></dt>
    <dd>
      <p>负值字符集合。匹配未包含的任意字符。</p>
      <p>例如，'[^abc]' 可以匹配 "plain" 中的'p'。</p></dd>
	<dt><code>[a-z]</code></dt>
    <dd>
      <p>字符范围。匹配指定范围内的任意字符。</p>
      <p>例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。</p></dd>
	<dt><code>[^a-z]</code></dt>
    <dd>
      <p>负值字符范围。匹配任何不在指定范围内的任意字符。</p>
      <p>例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符</p></dd>
    <dt><code>(?:x)</code></dt>
    <dd>
      <p>匹配x但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用 "或" 字符 (|) 来组合一个模式的各个部分是很有用。</p>
      <p>例如，&apos;industr(?:y|ies) 就是一个比 &apos;industry|industries&apos; 更简略的表达式。</p></dd>
	<dt><code>(?=x)</code></dt>
    <dd>
      <p>正向预查，在任何匹配x的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。</p>
      <p>例如，'Windows (?=95|98|NT|2000)' 能匹配 "Windows 2000" 中的 "Windows" ，但不能匹配 "Windows 3.1" 中的 "Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。</p></dd>
	<dt><code>(?!x)</code></dt>
    <dd>
      <p>负向预查，在任何不匹配x的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。</p>
      <p>例如'Windows (?!95|98|NT|2000)' 能匹配 "Windows 3.1" 中的 "Windows"，但不能匹配 "Windows 2000" 中的 "Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始</p></dd>
    <dt><code>\b</code></dt>
    <dd>
      <p>匹配一个单词边界，也就是指单词和空格间的位置(不要与<code>[\b]</code>混淆)。</p>
      <p>例如, <code>/\bn\w/</code>匹配&quot;noonday&quot;中的'no'，而<code>/\wy\b/</code>匹配&quot;possibly yesterday&quot;中的'ly'。</p></dd>
    <dt><code>\B</code></dt>
    <dd>
      <p>匹配非单词边界。</p>
      <p>例如, <code>/\w\Bn/</code>匹配&quot;noonday&quot;中的'on'，而<code>/y\B\w/</code>匹配quot;possibly yesterday&quot;中的'ye'。</p></dd>
    <dt><code>\d</code></dt>
    <dd>
      <p>匹配一个数字字符。等价于 [0-9]。</p>
      <p>例如, <code>/\d/</code>或<code>/[0-9]/</code>匹配&quot;B2 is the suite number&quot;中的'2'。</p>
			<p><b>注意:</b> 它与JavaScript中的\d不同的，在JS中，\d仅匹配[0-9]字符。</p></dd>
    <dt><code>\D</code></dt>
    <dd>
      <p>匹配一个非数字字符。等价于 [^0-9]。</p>
      <p>例如, <code>/\D/</code>或<code>/[^0-9]/</code>匹配&quot;B2 is the suite number&quot;中的'B'。</p></dd>
    <dt><code>\a</code></dt>
    <dd>
      <p>匹配一个字母字符。</p></dd>
    <dt><code>\A</code></dt>
    <dd>
      <p>匹配一个非字母字符。</p></dd>
    <dt><code>\w</code></dt>
    <dd>
      <p>匹配任意来自字母表的字母和数字字符。</p>
			<p><b>注意:</b> 它与JavaScript中的不同，在JS中\w仅匹配ASCII字符和数字。</p></dd>
    <dt><code>\W</code></dt>
    <dd>
      <p>匹配任意非来自字母表的字母和数字字符。</p></dd>    
    <dt><code>\s</code></dt>
    <dd>
      <p>匹配任意来自字母表的空白字符。</p></dd>
    <dt><code>\S</code></dt>
    <dd>
      <p>匹配非任意来自字母表的空白字符。</p></dd></dl>
    <h2>属性</h2>
    <dl>
    <dt>length</dt>
    <dd>- <em>integer</em>, 在最后一次调用<em>exec</em>或<em>match</em>方法后的匹配数量。</dd>
    <dt>input</dt>
    <dd>- <em>string</em>, 最后检查字符串。</dd>
    <dt>source</dt>
    <dd>- <em>string</em>, 正则表达式的源代码 - 构建该RegExp对象的字符串。</dd>
    <dt>index</dt>
    <dd>- <em>integer</em>, 在搜索字符串中第一个成果匹配的字符位置。只读属性。</dd>
    <dt>lastIndex</dt>
    <dd>- <em>integer</em>, 在搜索字符串中下一个匹配开始的位置。</dd>
    <dt>[index]</dt>
    <dd>- <em>string</em> | <em>undefined</em>, 只读, 返回第index个匹配片段。<em>Index</em>是一个整数，基于0开始。</dd>
    <h2>方法</h2>
    <dt>this</dt>
    <dd>
      <p><strong>(regular-expresion [,flags])</strong></p>
      <p>用于初始化一个RegExp对象的新实例。<em>regular-expresion</em>是一个字符串-正则表达式的源。<em>flags</em>是一个可选字符串，如果flags中包含<em>'i'</em>字符则进行大小写敏感搜索。如果包含<em>'g'</em>(全局搜索)，则搜索输入字符串中的所有的发生源。<br/>
	  使用方法: <font face="monospace">var re = new RegExp(...);</font></p></dd>
    <dt>test</dt>
    <dd>
      <p><strong>(input)</strong> : <em>true</em> | <em>false</em></p>
      <p>检查<em>input</em>字符串，如果匹配模式则返回<strong>true</strong>，否则返回<strong>false</strong>。</p></dd>
    <dt>exec</dt>
    <dd>
      <p><strong>(input)</strong> : <em>null</em> | <em>RegExp</em> object</p>
      <p>如果 <em>input</em> 存在该模式，则返回这个包含模式匹配集列表和数量的RegExp对象。否则返回<strong>null</strong>。</p></dd>
    <dt>positions</dt>
    <dd>(<strong>matchIdex</strong>:0... length - 1) : (<em>start</em>:integer, <em>end</em>:integer)
      <p>在执行exec()调用后该方法有效。返回一个整数对 - 输入字符串中被匹配子表达式的开始和结束位置。</p></dd></dl>