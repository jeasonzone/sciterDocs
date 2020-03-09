# Stream(流)

<dl>
<h2>属性</h2>
        <dt>isInput</dt>
        <dd>只读, <em>true</em> | <em>false</em>
          <p>报告该对象是否是输入流。</p></dd>
        <dt>isOutput</dt>
        <dd>只读, <em>true</em> | <em>false</em>
          <p>报告该对象是否是输出流。</p></dd>
        <dt>isPipe</dt>
        <dd>只读, <em>true</em> | <em>false</em>
          <p>报告该对象是否是管道流。</p></dd>
        <dt>proxy</dt>
        <dd><em>object</em> | <em>null</em>
          <p>(该属性仅对 管道流 有效)</p>
          <p>获取/设置代理对象(此线程的远程端(其他线程)的代理)作为其他线程的线程接口。管道的每个实例只能有一个代理对象在其他管道端。所以双线程间的通行需要两个管道流。</p></dd>
        <dt>pending</dt>
        <dd>只读, <em>integer</em>
          <p>(该属性仅对 管道流 有效)</p>
          <p>返回<em>post()</em>和<em>print**()</em>函数参数的待处理(当前尚未处理的)请求数量。</p></dd>
        <dt>encoding</dt>
        <dd>读写 - gets/sets encoding used by the stream.
          <p>目前，支持&quot;utf-8&quot;或&quot;none&quot;(内存字节流)编码。</p></dd>
        <dt>name</dt>
        <dd>只读, <em>string</em>
          <p>流的名称 - 数据来源的文件名或url。对于内存流，该属性可以为空字符串。</p></dd>
          <h2>方法</h2>
        <p class="note">Stream(流)对象没有公共构造函数，所以无法使用new操作符来创建它。<br/>
		要创建流对象，请使用静态的open*** 方法。</p>
        <dt>openFile</dt>
        <dd>
          <p><strong>(</strong><em>file-name</em> [,<em>mode</em>]<strong>) </strong>: <em>stream</em> | <em>null</em></p>
          <p>静态方法。 打开<em>file-name</em>指定的文件并返回一个流对象。该操作允许根据<em>mode</em>参数字符串返回指定的流对象。</p>
          <p>Script引擎使用C/C++运行时来打开文件流。见:<a href="http://www.cplusplus.com/ref/cstdio/fopen.html" target="_blank">fopen函数定义</a>，里面有<em>mode</em>参数的含义。</p></dd>
        <dt>openSocket</dt>
        <dd>
          <p><strong>(</strong><em>&quot;address:port&quot; </em>[,<em> timeout</em>[, numberOfAttempts:1 ] ] <strong>)</strong> :  <em>stream</em> | <em>null</em></p>
          <p>静态方法。根据<em>address-port</em> 参数指定的地址和端口打开一个socket流并返回一个流对象实例。打开socket流对象处于读写模式。<em>Address</em> 可以是域名也可以是IP地址。<em>address:port</em> 的格式字符串是:<font color="#006666">&quot;domain<strong>:</strong>NNN&quot;</font>或<font color="#006666">&quot;NNN.NNN.NNN.NNN:NNN&quot;</font>，其中N是十进制数字。<em>timeout</em>是等待这个socket的任何操作的超时秒数，如果在这个socket上的操作执行时间超过这个时间，运行系统将会产生一个异常。</p>
          <p><em>numberOfAttempts</em>是一个整数 - 尝试连接的次数，默认为1。</p>
          <p>示例: 下面的代码将会打印出terrainformatica.com服务器的http服务响应:</p>
          <pre v-pre><code><font color="#0000cc">var</font> sock <font color="#0000cc">=</font> <em>Stream</em>.<em>openSocket</em>( <font color="#006666">&quot;www.terrainformatica.com:80&quot;</font> , 5 <font color="#339900">/*超时时间(秒)*/</font> );
<font color="#0000cc">if</font>( !sock ) <font color="#0000cc">return</font>;
sock.println(<font color="#006666">&quot;GET http://www.terrainformatica.com/main.whtm HTTP/1.0&quot;</font>);
sock.println(&quot;User-Agent: TIScript [en]&quot;);
sock.println(&quot;&quot;);
<font color="#0000cc">while</font>( <font color="#0000cc">true</font> )
{
<font color="#0000cc">  var</font> s = sock.readln();
<font color="#0000cc">  if</font>(s == <font color="#0000cc">undefined</font>) <font color="#0000cc">break</font>;
<font color="#0000cc">  stdout</font>.println(s);
}
</code></pre></dd>
        <dt>openString</dt>
        <dd>
          <div><strong>(</strong>[<em>initialSize</em>:int | <em>initialValue</em>:string]<strong>) :</strong> <em>stream</em></div>
          <p>静态方法。打开一个内存字符串输出流并初始化它的缓存为<em>initialSize (integer)</em>。字符串流用于当你计划频繁更新一些字符串或组合许多字符串时。字符串流相当于Java或.NET中的StringBuffer/StringBuilder。为了获取当前字符串流的内容，请使用它的<em>toString</em>方法。</p></dd>
        <dt>openPipe</dt>
        <dd>
          <div>( [<em>receiver</em>: function [, <em>proxy</em>: object]] ) : <em>stream</em></div>
          <p>静态方法。创建一个管道 - 用于线程间的通信流。管道在两个通信线程中共享。见<em>send()</em>、<em>post()</em>方法和<em>pending</em>、<em>proxy</em> 属性。</p>
          <p><em>receiver</em>参数时一个函数，它的签名为: <code>function recv(value)</code>。当管道另一端使用print()、println()、printf()方法打印的数据到达这一端时，<em>receiver</em>方法会被调用。</p>
          <p><em>proxy</em>对象是管道另一端的线程(VM)在当前端的函数访问接口。见下面的<em>send() </em>和<em>post() </em>方法。</p>
          <p>例如, 下面的代码片段(来自ScIDE/facades.tis)创建了3个管道，它们被作为另一端VM(其他在独立线程中运行的ScIDE窗口)的输入(stdin)、输出(stdout)和错误(stderr)流:</p>
          <pre v-pre><code>  <code>function</code> receiverOut(data) { Log.print(data,false); }
  <code>function</code> receiverErr(data) { Log.print(data,true); }
  // 回调接口
  <code>var</code> iface =
  {
    foo: <code>function</code>(v1,v2) { stdout.printf(&quot;got a call of 'foo' with %V,%V\n&quot;,v1,v2); <code>return</code> v1 + v2; }
  };
  view.open(f,
      Stream.openPipe( null, iface ), // 调用外来接口
      Stream.openPipe( receiverOut ), // 输出流
      Stream.openPipe( receiverErr )  // 错误流
  );
</code></pre></dd>
        <dt>toString</dt>
        <dd>
          <p><strong>( ) </strong>:  <em>string</em></p>
          <p>如果该对象是字符串流，则返回字符串缓存区的内容。如果该对象是 文件/socket 流，则返回 文件名/地址。</p></dd>
        <dt>close</dt>
        <dd>
          <p><strong>( </strong>[<em>returnString</em>:true|false]<strong> )</strong> : <em>string | true | false</em></p>
          <p>关闭该流 - 文件、socket或字符串流缓冲区。如果<em>returnString</em>为<em>true</em>，则返回<em>toString()</em>方法的结果值。</p></dd>
        <dt>print</dt>
        <dd>
          <div><strong>( </strong><em>string</em><strong> ) </strong>:<strong> </strong><em>true</em> | <em>false</em></div>
          <p>将<em>string</em>输出到流中。</p>
          <p>print等价于: <em>stream &lt;&lt; string</em>; 操作。</p></dd>
        <dt>$</dt>
        <dd>
          <div>( ... ) :<strong> </strong><em>true</em> | <em>false</em></div>
          <p>字符串器函数, 将括号内的内容输出到流中。</p></dd>
        <dt>println</dt>
        <dd>
          <div><strong>( </strong><em>string</em><strong> ) </strong>:<strong> </strong><em>true</em> | <em>false</em></div>
          <p>在<em>string</em>结尾附加\r\n，然后输出到流中。</p></dd>
        <dt>$n</dt>
        <dd>
          <div><strong>( </strong><em>string</em><strong> ) </strong>:<strong> </strong><em>true</em> | <em>false</em></div>
          <p>字符串器函数, 将括号内的内容结尾附加\r\n，然后输出到流中。</p></dd>
        <dt>printf</dt>
        <dd>
          <div><strong>(</strong> <em>format</em>:string, [<a>value1</a>[, value2[, <a>...</a>[, <a>valueN</a>]]]]<strong>)</strong> : <em>true</em> | <em>false</em></div>
          <p>根据<a href="http://www.cplusplus.com/ref/cstdio/printf.html" target="_blank">printf C/C++ 函数</a>规则打印格式化字符串。</p>
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
      <p>该函数返回成功解析的值的数组。</p></dd>
        <dt>putc</dt>
        <dd>
          <div><strong>( </strong><em>char-code</em><strong> ) </strong>:<strong> </strong><em>true</em> | <em>false</em></div>
          <p>输出<em>char-code </em>字符到流中。字符有它的整数代码来定义。</p>
          <p>putc 等价于: <em>stream &lt;&lt; charcode</em>; 操作。</p></dd>
        <dt>getc</dt>
        <dd>
          <div><strong>( ) </strong>:<strong> </strong><em>integer</em> | <em>undefined</em></div>
          <p>从流中读取一个字符。返回该字符整数代码。如果流被关闭或获取到EOF，则返回<em>undefined </em>。</p></dd>
        <dt>readln</dt>
        <dd>
          <div><strong>( ) </strong>:<strong> </strong><em>string</em> | <em>undefined</em></div>
          <p>从流中读取一行(直到遇到'\n')字符序列。读取的字符结尾无'\r'和'\n'。</p></dd>
        <dt>send</dt>
        <dd>
          <div>(<em>methodName</em>: symbol [, .. ] ) : <em>value</em></div>
          <p>(该方法仅对 管道流 有效)</p>
          <p>发送请求到管道的另一端的代理接口对象并等待它执行完成。返回远程方法的结果。<em>methodName</em>参数后面的参数将被传递给远程方法作为正常方法。</p></dd>
        <dt>post</dt>
        <dd>
          <div>(<em>methodName</em>: symbol [, .. ] ) : <em>undefined</em></div>
          <p>(该方法仅对 管道流 有效)</p>
          <p>发送请求到管道的另一端的代理接口对象并无需等待远程方法执行完成，它之后增加<em>待处理</em>计数。em>methodName</em>参数后面的参数将被传递给远程方法作为正常方法。</p></dd></dl>