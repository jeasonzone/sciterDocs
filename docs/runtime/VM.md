# VM

<p class="note">虚拟机(VM)相关方法和属性。</p>
  <p class="note">这个名称空间中的方法在脚本中不总是有效的 - 它们依赖于VM创建时的特征参数。</p>
  <dl>
    <h2>常量</h2>
    <h2>方法</h2>
		<dl>
       <dt>getProperty</dt>
			<dd>(<b>obj</b>:any,&nbsp;<b>name</b>:string | symbol): any | undefined
        <p>根据<i>name</i>获取<i>obj</i>的属性。</p>
				<p>等同于<code>const name = ... var val = obj.(name);</code></p></dd>
      <dt>setProperty</dt>
			<dd>(<b>obj</b>:any,&nbsp;<b>name</b>:string | symbol, <b>val</b>: any): any | undefined
      <p>根据<i>name</i>设置<i>obj</i>的属性。</p>
				<p>等同于<code>const name = ... obj.(name) = val;</code></p></dd></dl>
    <h2>属性</h2>
    <dt>unhandledExceptionHandler</dt>
    <dd>r/w, function - 全局未处理异常处理器。 接受一个函数签名为<code>function(err) : true | false</code>的函数，该函数将会接收到错误(error)对象。 如果该函数返回<em>true</em>，则异常被认为已经处理了，并且将不会再向stderr输出错误信息。</dd></dl>