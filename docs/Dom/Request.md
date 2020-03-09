# Request对象

<p>该对象可用于对请求添加其他处理。注意它是可以&quot;then able&quot;的类似promise的对象，即它也可以使用<code>await</code>。</p>
  <dl>
    <h2>常量</h2>
    <p><code>Request.requestedDataType</code>属性的返回值</p>
    <dt>DATA_HTML</dt>
    <dd>- html文档请求;</dd>
    <dt>DATA_IMAGE</dt>
    <dd>- 图片请求;</dd>
    <dt>DATA_STYLE</dt>
    <dd>- css请求;</dd>
    <dt>DATA_CURSOR</dt>
    <dd>- 光标(cursor)请求;</dd>
    <dt>DATA_FONT</dt>
    <dd>- 字体数据请求;</dd>
		<dt>DATA_RAW_DATA</dt>
		<dd>- 任意数据请求, <code>view.request()</code>产生的请求是这个类型;</dd>
    <h2>属性</h2>
    <dt>status</dt>
    <dd>- <em>integer</em>, 响应状态 - http响应代码: 200 - OK, 404 - not found, etc.</dd>
    <dt>requestedDataType</dt>
    <dd>- <em>integer</em>, 上面的DATA_***值之一, 请求数据的类型。</dd>
		<dt>response</dt>
		<dd>- string, value, stream or byte array - 请求的响应数据。具体的类型取决于<code>view.request()</code>方法的<code>output</code>参数。</dd>
		<dt>responseData</dt>
		<dd>- Bytes (byte array) - 服务端返回的请求数据。</dd>
		<dt>responseMimeType</dt>
		<dd>- string, 服务端响应数据的mime type。</dd>
		<dt>isConsumed</dt>
		<dd>- boolean, 如果请求已被处理(被目标元素)则返回true。</dd>
		<dt>isSucceeded</dt>
		<dd>- boolean, 如果请求已成功处理这返回true。</dd>
		<dt>destination</dt>
		<dd>- 请求数据的Element或View对象。</dd>
    <h2>方法</h2>
    <dt>fulfill</dt>
    <dd>
      <strong>( data</strong>: Bytes ,<strong> mime</strong>: string&nbsp;<strong>)</strong> : this
      <p>当做从服务端返回的数据来履行请求。</p></dd>
    <dt>reject</dt>
    <dd>
      <strong>( status</strong>: integer<strong> )</strong> : this
      <p>当做服务端返回数据失败来拒绝请求。</p></dd>
    <dt>then</dt>
    <dd>
      <strong>( onSuccess</strong>: function [, <b>onFailure</b>: function]<strong> )</strong> : this
      <p>订阅这个请求上的<i>success</i>、<i>failure</i>事件。</p>
			<p>其中:</p>
        <ul>
          <li> <code>function onSuccess(data, status)</code> - 接收响应数据和状态码;</li>
          <li><code>function onFailure(err)</code> - 失败时返回一个Error对象实例。</li>
        </ul>   
      <p>两个方法被调用时，<i>this</i>被设置为该请求对象。</p>   
    </dd>
		<dt>catch</dt>
    <dd>
      <strong>( </strong><strong>callback</strong>: function<strong> )</strong> : this
      <p>订阅<i>failure</i>的回调函数。</p>
      </dd>
    <dt>finally</dt>
    <dd>
      <strong>( </strong><strong></strong><strong>callback</strong>: function<strong> )</strong> : this
      <p>订阅<i>completion</i>事件的回调函数，即不管请求处理成功或失败都会调用它。</p></dd>
    </dl>