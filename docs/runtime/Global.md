## Global(全局)

<h1>全局(Global)名称空间</h1>
  <p>下面的函数和变量&quot;存在&quot;于全局名称空间，所以调用这些方法时无需指定任何名称空间指示器:</p>
  <pre v-pre><code>var r = <em>eval</em>( <font color="#990099">&quot; 348.0 / 23.7 &quot;</font> );<br/><em>stdout</em>.printf( <font color="#990099">&quot;%f&quot;</font> , r );
stdout</em>.printf( <font color="#990099">&quot;%f&quot;</font> , r );
</code></pre>
  <p>如果某个函数内存在与全局函数同名的函数时，如果想方法全局换上，可以给全局函数加上<em>self.ns.</em>前缀。</p>
  <dl>
    <h2>全局变量</h2>
    <h4>这些流由脚本引擎的宿主应用程序来创建和管理。</h4>
    <dt>stdin</dt>
    <dd><em>stream</em>, 标准输入流。只读。</dd>
    <dt>stdout</dt>
    <dd><em>stream</em>, 标准输出流。只写。</dd>
    <dt>stderr</dt>
    <dd><em>stream</em>, 标准错误流。引擎使用它来报告所有未捕捉的异常。</dd>
    <h2>全局函数</h2>
    <dt>eval</dt>
    <dd>
      <div><strong>( </strong><em>input</em><strong> : </strong>string|stream [, <em>namespace</em>&nbsp;:object | <i>namespaces</i>: array of objects&nbsp;]<strong> ) </strong>: <em>value</em></div>
      <p>对<em>input</em>求值(解释执行)，并返回它的值。如果<em>input</em>是一个字符串，则该函数尝试将它作为脚本源代码进行解释执行。如果<em>input</em>是一个<em>流对象</em>，则它会从该流中编译和执行源代码。</p>
      <p>示例: 在下面的语句执行后:</p>
      <pre v-pre><code>var obj = eval( <font color="#990099">&quot; ({ one:1, two:2 }) &quot;</font> );
</code></pre>
      <p><em>obj</em>变量将会包含一个对象，它有两个字段: <em>one</em>和<em>two</em>。</p>
      <p><em>environment</em>是一个环境对象 - 如果该参数被提供，则脚本在该对象的名称空间中执行。</p>
      <pre v-pre><code>var env = { one:1, two:2 };
var res = eval( <font color="#990099">&quot;one + two&quot;, </font>env);
</code></pre>
      <div>在上面两行代码执行后，<em>res</em>的值将为整数3。</div>
      <p class="note">要使用这些函数，需要宿主程序配置了引擎可以使用它们。</p></dd>
    <dt>parseData</dt>
    <dd>
      <div><strong>( </strong><em>input</em><strong> : </strong>string|stream<strong> ) </strong>: <em>value</em></div>
      <p>又名 JSON++ 数据解析器。</p>
      <p>对<em>input</em>中的数据声明求值(解释执行)，并返回它的值。Input应该包含一个有效的数据声明表达式，否则解析时会抛出异常。 </p>
      <p>示例 1: 在下面的语句执行后:</p>
      <pre v-pre><code>var obj = parseData( <font color="#990099">&quot; { one:1, two:2 } &quot;</font> );
</code></pre>
      <p><em>obj</em>变量将会包含一个对象，它有两个字段: <em>one</em>和<em>two</em>。</p>
      <div>示例 2: 在下面的语句执行后:</div>
      <pre v-pre><code>var v = parseData( <font color="#990099">&quot;3.1415926&quot;</font> );
</code></pre>
      <p><em>v</em>变量将会包含一个浮点数3.1415926 - 从字符串中解析的值。</p>
      <p><em>eval</em>函数和<em>parseData</em>主要的不同是:<em>parseData</em>不会执行任何函数声明或函数，所以当data的来源是未知代码时(如AJAX交互)，使用<em>parseData</em>是安全的。</p></dd>
    <dt>emit</dt>
    <dd>
      <div><strong>( </strong><em>input</em> :string|stream,<strong> </strong><em>output </em>:stream<strong> </strong>[, <em>env</em> :object ] <strong>)</strong> :value</div>
      <p>在serverScript模式(见下面)下对<em>input</em>流求值，并将结果放到<em>output</em>流。该函数假设<em>input</em>中的执行脚本包含在&lt;% %&gt;括号内。该函数在input流中的第一个<em>return</em>语句处返回结果。</p>
      <p><em>env</em>是一个环境对象, 它允许从调用者传递一些参数到输入脚本。</p></dd>
    <dt>load</dt>
    <dd>
      <div><strong>( </strong><em>source</em> [, <em>asServerScript</em>]<strong> )</strong> :true|false</div>
      <p>加载(编译和执行)<em>source</em>。Source这里可以是字符串(<strong>文件名</strong>)或<strong>流对象</strong>。如果参数<em>asServerScript</em>被提供且为<em>true</em>，则source会被当做一个包含嵌入脚本(类似PHP或ASP网页)的文本进行解释:</p>
      <pre v-pre><code>&lt;html&gt; ... &lt;% =some_script_function(); %&gt;... &lt;/html&gt;</code></pre>
      <p>这两段代码:</p>
      <pre v-pre><code><strong>load</strong>( <font color="#990099">&quot;c:/myscripts/test.tis&quot;</font> );</code></pre>
      <p>和</p>
      <pre v-pre><code>var s = Stream.openFile(<font color="#990099">&quot;c:/myscripts/test.tis&quot;</font>,<font color="#990099">&quot;r&quot;</font>); <strong>load</strong>( s );
</code></pre>
      <p>是等价的。</p>
      <p>该脚本执行取调用者所在的名称空间。</p></dd>
    <dt>loadbc</dt>
    <dd>
      <div><strong>( </strong><em>source</em> <strong>)</strong> : <em>true</em> | <em>false</em></div>
      <p>加载<em>source</em>指定的编译后字节码。Source这里可以是字符串(<strong>文件名</strong>)或<strong>流对象</strong>。</p></dd>
    <dt>compile</dt>
    <dd>
      <div><strong>( </strong><em>input</em> : filename | Stream, <em>output</em>: filename | Stream<strong> [, </strong><em>asServerScript</em><strong> </strong>: true | false<strong> ] ) </strong>: true | false</div>
      <p>调用内建的编译器编译<em>input</em>，并将编译后的字节码写到<em>out</em>流或文件中。该字节码可以使用<em>loadbc</em>函数来加载(执行)。</p></dd>
    <dt>store</dt>
    <dd>
      <div><strong>( </strong><em>filename</em> | <em>stream</em>, <em>value</em><strong> ) </strong>:<strong> </strong><em>true</em> | <em>false</em></div>
      <p>将<em>value</em>以二进制格式存储到<em>filename</em>文件或<em>stream</em>流中。如果数据存储成功则返回<em>true</em>。</p></dd>
    <dt>fetch</dt>
    <dd>
      <div><strong>( </strong><em>filename</em> | <em>stream</em><strong> ) </strong>:<strong> </strong>value | null</div>
      <p>将之前使用<em>store</em>函数存储的值重新写入到<em>filename</em>文件或<em>stream</em>流中。如果存储成功则返回该写入值，否则如果操作失败，则返回<em>null</em>。</p></dd>
    <dt>hash</dt>
    <dd>
      <p><strong>( </strong><em>value</em><strong> ) </strong>: integer</p>
      <p>返回<em>value</em>的哈希值。</p></dd>
    <dt>membersOf</dt>
    <dd>
      <p>( obj: object | function ) : map (object)</p>
      <p>返回一个映射表(一个简单对象)，它和obj有相同的属性集。<em>membersOf</em>函数的主要用于类似<code>for( var (k,v) in membersOf(obj))</code>枚举浏览实体(那些不同于对象实例的枚举)的属性。实例:</p>
      <pre v-pre><code>function Foo() { ... }
Foo.bar = 1; // 添加'bar'属性到Foo函数(函数也是一个对象)
for(var (k,v) in Foo )
  ... // 某次迭代中，在这里你应该会看到k等于#bar <br/>      
</code></pre></dd>
    <dt>rand</dt>
    <dd>
      <p><strong>( </strong><em>maxNumber</em><strong> )</strong> : integer</p>
      <p>返回一个在0和maxNumber-1之间的随机数。</p></dd>
    <dt>gc</dt>
    <dd>
      <div><strong>( )</strong> : <em>undefined</em></div>
      <p>调用垃圾回收器, 返回VM的堆内存总(total)尺寸、堆中自由区域(free)尺寸、脚本已使用(used)的尺寸。total = free + used; </p>
      <p>注意：VM向系统请求两次<em>total</em>字节数量。</p>
	  </dd>
    <dt>crackUrl</dt>
    <dd>
      <div><strong>( </strong><em>url</em>:string<strong> )</strong> : object</div>
      <p>解析URL字符串，返回一个对象，该对象包含以下字段:</p>
      <ul>
        <li><em>port</em> - integer, tcp/ip端口号;</li>
        <li><em>protocol</em> - string, 协议，如&quot;http&quot;, &quot;file&quot;等;</li>
        <li><em>hostname</em> - string, 域名;</li>
        <li><em>anchor</em> - string, 锚点;</li>
        <li><em>username</em> - string, 用户名;</li>
        <li><em>password</em> - string, 密码;</li>
        <li><em>params</em> - string, http的GET请求参数;</li>
        <li><em>dir</em> - string, 目录;</li>
        <li><em>name</em> - string, 文件名(没有扩展名);</li>
        <li><em>ext</em> - string, 扩展名;</li>
        <li><em>name_ext</em> - string, 文件名(有扩展名)。</li></ul></dd>
    <dt>symbol</dt>
    <dd>
      <div>( <em>string</em> ) : symbol</div>
      <p>该函数返回<em>string</em>的标识符。在内部，标识符是一个32位值，所以标识符空间是有限的-它对于&quot;标识化&quot;的任意字符串大小写是不敏感的。</p></dd>
    <dt>color</dt>
    <dd>(<strong>r</strong>: int, <strong>g</strong>: int, <strong>b</strong>: int [, <strong>opacity</strong>: int | float]) : color <br/>( colorStr: string ) : color
      <p>该函数根据red、green、blue和opacity分量或者colorStr颜色字符串(#RRGGB或CSS中的颜色名称)构造一个颜色值。</p></dd>
    <dt>em</dt>
    <dd>(<strong> v</strong>: int | float ) : length, 这些函数根据对应类型构造一个长度值。</dd>
    <dt>pr</dt>
    <dd>(<strong> v</strong>: int | float ) : length</dd>
    <dt>px</dt>
    <dd>(<strong> v</strong>: int | float ) : length</dd>
    <dt>cm</dt>
    <dd>(<strong> v</strong>: int | float ) : length</dd>
    <dt>pt</dt>
    <dd>(<strong> v</strong>: int | float ) : length</dd>
    <dt>dip</dt>
    <dd>(<strong> v</strong>: int | float ) : length</dd>
    <dt>flex</dt>
    <dd>(<strong> v</strong>: int | float ) : length, 弹力单位值</dd>
    <dt>rad</dt>
    <dd>(<strong> v</strong>: float ) : angle, 根据一个弧度浮点值构造一个角度值。</dd>
    <dt>deg</dt>
    <dd>(<strong> v</strong>: int | float ) : angle, 根据一个度数值构造一个角度值。</dd></dl>
  <h2>JSON namespace</h2>
  <dl>
    <dt>JSON.stringify</dt>
    <dd>(<strong>value</strong>[, <strong>replacer</strong>: function | array][, <strong>space</strong>:string | integer]) : string
      <p>生成规范的JSON字符串表示形式。</p>
      <p>如果<em>replacer</em>是一个<code>function (key, value) </code>函数，则它会在每次迭代key / value时被调用。这个函数应该返回兼容JSON的值。如果<em>replacer</em>是一个数组, 则value对象中只有在数组中存在的键才会被JSON字符串化。value中成员的顺序与数组中指定的键的顺序一致。当value参数也是一个数组时，replacer数组将被忽略。</p>
      <p>如果<em>space</em>是一个字符串，则输出的所有的\t字符将被替换为这个字符串。如果它是一个数值，则所有\t字符将被替换为该数值指定数量的空白符。</p></dd>
    <dt>JSON.parse</dt>
    <dd>(<strong>text</strong>:string[, <strong>reviver</strong>]) : value
      <p>解析JSON字符串为一个JSON对象。<em>reviver</em>是一个<code>function (key, value): value</code>或<code>function (key, value): (key,value</code>)函数 - 该函数可以将被转换的键值替换为另一个值或key/value对。</p></dd></dl>
	<h2>URL namespace</h2>
	<p>宜兴用于URL的函数:</p>
	<dl><dt>URL.parse</dt>
		<dd>(<b>url</b>:string) : object
      <p>该函数解析url，并返回一个URL分量组成的对象:</p>
      <ul>
        <li><em>port</em> - integer, tcp/ip 端口号;</li>
        <li><em>protocol</em> - string, 协议，比如&quot;http&quot;, &quot;file&quot;, 等;</li>
        <li><em>hostname</em> - string, 域名;</li>
        <li><em>anchor</em> - string, 锚点;</li>
        <li><em>username</em> - string;</li>
        <li><em>password</em> - string;</li>
        <li><em>params</em> - string, http GET请求参数</li>
        <li><em>dir</em> - string, 目录</li>
        <li><em>name</em> - string, 文件名(无扩展名)</li>
        <li><em>ext</em> - string, 扩展名</li>
        <li><em>name_ext</em> - string, 文件名(有扩展名)</li></ul>
			</dd>
    <dt>URL.relative</dt>
		<dd>(<b>url</b>: string, <b>baseUrl</b>:string) : string
      <p>返回相对于<i>baseUrl</i>的<i>url</i>，比如，如果:</p>
			<ul>
        <li>baseUrl:<code>http://example.com/foo/bar.htm</code>  and</li>
        <li>url :<code>http://example.com/zar/laf.htm#location</code></li>
				</ul>
			<p>这该函数返回<code>../zar/laf.htm#location</code></p>
			</dd>
    <dt>URL.absolute</dt>
		<dd>( <b>relUrl</b>: string, <b>baseUrl</b>: string ) : string
    <p>该函数拼接相对URL与基URL。</p></dd>
    <dt>URL.encode</dt>
		<dd>( str: string ) : string
    <p>该函数对所有非url字符进行编码, 比如空白字符将表示为<code>%20</code>。</p></dd>
    <dt>URL.encodeParam</dt>
		<dd>( str: string ) : string
    <p>该函数将编码所有字符，除了以下字符: 字母, 数字, <code>- _ . ! ~ * &#x27; ( )</code></p></dd>
    <dt>URL.decode</dt>
		<dd>( str: string&nbsp;) : string
    <p>该函数对URL字符串进行解码。</p></dd></dl><p></p>
		<dt>URL.toPath</dt>
		<dd>( <b>fileUrl</b>: string ) : string
    <p>该函数转换<code>&quot;file://...&quot;</code>字符串为文件路径 - 适用于目标平台的路径字符串。</p></dd>
		<dt>URL.fromPath</dt>
		<dd>( <b>path</b>: string ) : string
    <p>该函数将目标平台的路径字符串(如<code>C:\User\Desktop</code>)转换为文件URL (如<code>file://C:/User/Desktop</code>).</p></dd></dl><p></p>