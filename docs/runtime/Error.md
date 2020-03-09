# Error(错误)

<p>错误对象, 当脚本运行时检测到错误抛出的对象。</p>
  <dl>
    <h2>常量</h2>
	<p>N/A</p>
    <h2>属性</h2>
    <dt>name</dt>
    <dd><strong>- </strong><em>string</em>, 只读, 目前等同于&quot;Error&quot;。</dd>
    <dt>message</dt>
    <dd>- <em>string</em>, 只读, 错误消息。</dd>
    <dt>stackTrace</dt>
    <dd>- <em>string</em>, 只读, 错误的堆栈轨迹。</dd>
    <dt>data</dt>
    <dd>- <em>any</em>, 读写, 可选. 额外的错误数据。比如在view.request()中，error包含<code>{ status: ..., response: ... }</code>对象。</dd>
    <h2>方法</h2>
    <p>N/A</p></dl>