# Net.WebSocket

<p>它是<a href="http://tools.ietf.org/html/rfc6455">WebSocket协议</a>的基本实现。</p>
  <dl>
    <h2>属性</h2>
    <h2>方法</h2>
    <dt>connect</dt>
    <dd>
      <p><strong>( url</strong>: string [,<strong> timeout</strong>: duration] <strong>)</strong> : WebSocket</p>
      <p>WebSocket的静态构造函数。websocket接受的URL结构: &quot;ws://domain/path&quot;。返回一个新的处于INITIAL状态的socket。<em>timeout</em>是连接的超时时间。当连接超时将产生一个错误。</p></dd>
    <dt>on</dt>
    <dd>
      <p><strong>( event</strong>: string<strong>, callback</strong>: function<strong> )</strong> : this</p>
      <p>绑定callback回调函数到socket事件上:</p>
      <ul>
        <li><strong>&quot;connect&quot;</strong> -&gt; function(), socket连接到主机;</li>
        <li><strong>&quot;text&quot;</strong> -&gt; function(data), 接收到文本数据包，data中包含字符串;</li>
        <li><strong>&quot;binary&quot;</strong> -&gt; function(data), 接收到二进制数据包，data中包含字节(Bytes)对象;</li>
        <li><strong>&quot;error&quot;</strong> -&gt; function(errmsg), 发生错误</li>
        <li><strong>&quot;close&quot;</strong> -&gt; function(), socket关闭;</li></ul>
      <p>这些事件名可以包含&quot;.namespace&quot;名称空间部分，它可以用在.off()函数中。</p></dd>
    <dt>once</dt>
    <dd>
      <p><strong>( event</strong>: string<strong>, callback</strong>: function<strong> )</strong> : this</p>
      <p>类似于on()，但是该方法绑定的callback只会执行一次(事件处理器绘制第一层调用后自动移除)。</p></dd>
    <dt>off</dt>
    <dd>
      <p><strong>( event</strong>: string | <strong>callback</strong>: function<strong> )</strong> : this</p>
      <p>根据事件名或回调函数来解除事件绑定。</p>
      <p>事件名可以只包含名称空间部分。所以这样的代码<code>socket.off(&quot;.namespace&quot;)</code> 将会解除所以设置了该名称空间的事件绑定。</p></dd>
    <dt>send</dt>
    <dd>
      <p><strong>( data</strong>: string | Bytes <strong>)</strong></p>
      <p>该方法发送文本或二进制帧消息到WebSocket服务器。</p></dd>    
    <dt>close</dt>
    <dd>
      <p><strong>( )</strong></p>
      <p>发生关闭连接请求道服务端，并且关闭socket。</p></dd></dl>