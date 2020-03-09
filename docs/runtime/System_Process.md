# System.Process

<p>通过使用Process类, 你的程序可以允许另外一个程序作为子进程, 并且可以接收来自该子进程的<i>stdout</i>和<i>stderr</i>的输出，以及通过<i>stdin</i>流向它传递数据。</p>
  <dl>
    <h2>属性</h2>
    <dt>running</dt>
    <dd>- <em>boolean</em>, 进程运行状态, true - 进程正在运行。</dd>
    <h2>方法</h2>
    <dt>exec</dt>
    <dd>
      <div><strong>( exepath</strong>: string [, <b>arg1</b>: string, <b>arg2</b>: string, ...] [,<b>#detached</b>] <strong>)</strong> : Process</div>
      <p>静态方法, 创建一个新的子进程代理对象，并根据指定的进程路径和命令行参数(可选)启动进程。</p>
			<p>默认情况下，启动的新进场属于相同的进程组 - 它将会在本进程关闭时结束。但是如果设置了<b>#detached</b>参数，则子进程4父进程结束。</p></dd>
    <dt>on</dt>
    <dd>
      <div><strong>( event</strong>: string<strong>, callback</strong>: function<strong> )</strong> : this</div>
      <p>订阅以下进程事件的回调函数:</p>
      <ul>
        <li><strong>&quot;stdout&quot;</strong> -&gt; <code>function(text:string)</code>, 子进程打印到<i>stdout</i>流中的文本;</li>
        <li><strong>&quot;stderr&quot;</strong> -&gt; <code>function(text:string)</code>, 子进程打印到<i>stderr</i>流中的文本;</li>
        <li><strong>&quot;terminate&quot;</strong> -&gt; <code>function(status: integer)</code>, 子进程被终止，status是终止的状态码;</li></ul>
      <p>这些事件名称可以包含&quot;.namespace&quot;部分，它可以被用在.off()调用中。</p></dd>
    <dt>off</dt>
    <dd>
      <div><strong>( event</strong>: string | <strong>callback</strong>: function<strong> )</strong> : this</div>
      <p>通过事件名或回调函数取消该事件的订阅。</p>
      <p>这些事件名称可以包含名称空间(namespace)部分。因此: <code>socket.off(&quot;.namespace&quot;)</code> 将取消该名称空间的所有事件处理器。</p></dd>
    <dt>send</dt>
    <dd>
      <div><strong>( data</strong>: string <strong>)</strong></div>
      <p>该方法向子进程的stdin流中发送数据。</p></dd>
    <dt>terminate</dt>
    <dd>
      <div><strong>( )</strong></div>
      <p>尝试终止子进程的运行。</p></dd></dl>