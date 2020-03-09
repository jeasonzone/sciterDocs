# Net.Socket

<p>Socket使用命名管道(windows)或TCP/IP协议Socket在相同机器(&quot;localhost&quot;地址)或线连接的两个Sciter进程间进行双向数据交互。Socket支持服务端监听(<code>Socket.listen()</code>)和客户端Socket(<code>Socket.connect()</code>)。</p>
  <p>Socket发送/接收的数据为序列化的二进制格式 - 你可以通过<code>socket.send(data)</code>发送数据，以及通过<code>socket.on(&quot;receive&quot;, function(data) {})</code>在其他端接收数据。</p>
  <dl>
    <h2>属性</h2>
    <dt>active</dt>
    <dd>- <em>boolean</em>, socket状态, true - socket处于可用状态。</dd>
    <dt>address</dt>
    <dd>- string, 远程机器的地址。</dd>
    <h2>方法</h2>
    <dt>connect</dt>
    <dd>
      <p><strong>(</strong><strong>name</strong>: string [, <b>port</b>: integer] <strong>)</strong> : DataSocket</p>
      <p>客户端DataSocket的创建方法。返回一个新的处于连接状态的socket。如果指定了<i>port</i>参数，则<i>name</i>被认为是通过TCP/IP连接时的域名或地址，否则name被认为是命名管道的名称(或局域网socket)。</p></dd>
    <dt>listen</dt>
    <dd>
      <p><strong>( acceptor</strong>: function, <strong>name</strong>: string [, <b>port</b>: integer] <strong>)</strong> : DataSocket</p>
      <p>服务端DataSocket的创建方法。返回一个新的处于监听状态的socket。如果指定了<i>port</i>参数，则<i>name</i>被认为是通过TCP/IP连接时的域名或地址。</p>
      <p><em>acceptor</em>函数在每个新连接请求到达服务端是调用。该函数的签名:</p>
      <pre v-pre><code>function acceptor( connectionSocket: DataSocket ) : true | false</code></pre>
      <p>其中：<em>connectionSocket</em>是用于与远程通信的另一个DataSocket示例。</p>
      <p>若要接受和使用这个连接，你必须返回<em>true</em>。</p></dd>
    <dt>on</dt>
    <dd>
      <p><strong>( event</strong>: string<strong>, callback</strong>: function<strong> )</strong> : this</p>
      <p>将下面的Socket事件之一绑定到callback回调函数:</p>
      <ul>
        <li><strong>&quot;connect&quot;</strong> -&gt; <code>function()</code>, socket连接到主机;</li>
        <li><strong>&quot;data&quot;</strong> -&gt; <code>function(data:string)</code>, 已经接收到数据;</li>
        <li><strong>&quot;sent&quot;</strong> -&gt; <code>function()</code>, 上一次<code>send()</code>操作完成;</li>
        <li><strong>&quot;error&quot;</strong> -&gt; <code>function(err: Error)</code>, 发生错误, 错误对象会传递给该回调函数;</li>
        <li><strong>&quot;close&quot;</strong> -&gt; <code>function()</code>, socket被关闭;</li></ul>
      <p>这些事件名称可以包含&quot;.namespace&quot;名称空间。它被用在.off()函数中。</p></dd>
    <dt>off</dt>
    <dd>
      <p><strong>( event</strong>: string | <strong>callback</strong>: function<strong> )</strong> : this</p>
      <p>根据事件名或回调函数来解除事件绑定。</p>
      <p>事件名可以只包含名称空间部分。所以这样的代码<code>socket.off(&quot;.namespace&quot;)</code> 将会解除所以设置了该名称空间的事件绑定。</p></dd>
    <dt>once</dt>
    <dd>
      <p><strong>( event</strong>: string<strong>, callback</strong>: function<strong> )</strong> : this</p>
      <p>与on()功能相同，但是订阅的回调函数只会执行一次( 回调函数将会在第一次调用只会被移除)。</p></dd>
    <dt>send</dt>
    <dd>
      <p><strong>( data</strong>: any <strong>)</strong></p>
      <p>该方法用于将数据发送到远程端。data可以为任何可序列化的数据类型(对象、数字、字符串、数组等)。</p></dd>
    <dt>close</dt>
    <dd>
      <p><strong>( )</strong></p>
      <p>关闭socket。</p></dd></dl>