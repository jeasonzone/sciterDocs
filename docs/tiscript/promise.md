# await和promise

<h1><a href="http://promises-aplus.github.io/promises-spec">Promises/A+规范</a>的实现</h1>
  <h2>promise()函数</h2>
  <p><code>promise()</code>函数返回一个可调用的对象(函数)，它有一个<code>.then(onFulfilled, onRejected)</code>方法。</p>
  <p>promise可以有以下几种创建方式：</p>
  <p>(<strong>方式#1</strong>)</p>
  <pre v-pre><code>var prom = promise();</code></pre>
  <p>(<strong>方式#2</strong>)</p>
  <pre v-pre><code>var prom = promise( function( <em>resolve</em>:function, <em>reject</em>:function ) {...} );
</code></pre>
  <h3>履行/解决 诺言(promise)：</h3>
  <p>调用它的<code>prom(</code><u><code>true</code></u><code>, params)</code>方法。其中，<em>params</em>是将传递给onFulfilled回调函数(<code>.then()</code>方法注册)的参数数组。</p>
  <h3>拒绝 诺言(promise)：</h3>
  <p>调用它的<code>prom(</code><u><code>false</code></u><code>, params)</code>方法。其中，<em>params</em>是将传递给onRejected回调函数(<code>.then()</code>方法注册)的参数数组。</p>
  <h3>解决或拒绝诺言(promise)：</h3>
  <p>只需在你的函数体里调用<em>resolve</em>(result)或<em>reject(error)</em>回调函数。</p>
  <h2>Promise的方法</h2>
  <p><code>promise()</code>函数返回一个函数对象，它有以下几个方法:</p>
  <dl>
    <dt>promise.then</dt>
    <dd><strong>(onFulfilled</strong> : function(data) [, <strong>onRejected</strong>: function(err) ] <strong>)</strong> : <em>promise</em>
      <p>给promise绑定履行(fulfillment)和拒绝(rejection)处理器/回调函数, 并且返回一个新的promise。 绑定的处理器会在诺言(promise)完成时被调用。</p></dd>
    <dt>promise.catch</dt>
    <dd><strong>(onError</strong>: function(err) <strong>)</strong> : <em>promise</em>
      <p>给promise添加拒绝(rejection)处理器, 并且返回一个新的promise。</p></dd>
    <dt>promise.finally</dt>
    <dd><strong>(onResolved</strong>: function(dataOrErr) <strong>)</strong> : <em>promise</em>
      <p>给promise添加&quot;履行(resolved)&quot;处理器，并且返回一个新的promise。 这个处理器会在诺言(promise)完成时被调用，不管诺言是成功还是失败。</p></dd>
    <dt>promise.when</dt>
    <dd><strong>( promise1, promise2, promise3, ... )</strong> : <em>promise</em>
      <p>静态方法, 返回一个新的promise，它会等所有参数中的诺言履行后才被履行。如果参数中的某一个诺言被拒绝，则它也会被拒绝。</p></dd></dl>
  <h2>重定义的View/Element.request()函数</h2>
  <p><em>promise.tis</em>也重定义了Element.request()方法 - http get/post/put/delete调用。所以在包含此模块的情况下，Element.request()可以按以下形式被调用:</p>
  <ol>
    <li><strong>element.request(</strong> <strong>callback</strong>: function, <strong>httpcmd </strong>, <strong>url</strong>: string [, <strong>params</strong>: object [, <strong>headers</strong>: object] ] <strong>) </strong>: true | false<br/>- 异步请求，服务器响应信息传递到callback函数。</li>
    <li><strong>element.request(</strong> <strong>timeout</strong>: integer, <strong>httpcmd </strong>, <strong>url</strong>: string [, <strong>params</strong>: object [, <strong>headers</strong>: object] ] <strong>) </strong>: (data, status)<br/>- 同步请求，服务器响应信息作为第一个返回值，http状态码作为第二个返回值。</li>
    <li><strong>element.request(</strong> <strong>httpcmd </strong>, <strong>url</strong>: string [, <strong>params</strong>: object [, <strong>headers</strong>: object] ] <strong>) </strong>: promise,<br/>- 异步请求，服务器的响应信息传递到promise调用<code>.then(onsuccess,onfailure)</code>注册的onsuccess回调函数上。</li>
    <li><strong>view.request(</strong> <strong>params</strong>: map &nbsp;<strong>) </strong>: <strong>promise</strong>,<br/>- 异步请求，服务器的响应信息传递到promise调用<code>.then(onsuccess,onfailure)</code>注册的onsuccess回调函数上。</li></ol>
  <h2>promise() 与 await</h2>
  <p><code>await</code>操作符可以避免使用诺言方式的回调，而是使用线性的方式来写异步代码:</p>
  <pre v-pre><code>async function getRemoteTexts(url)
{
  try {
    var text = <u>await</u> view.request { url: url, output: #string };
    stdout.println(&quot;完成:&quot;, text);
  } catch(e) {
    stdout.println(&quot;出错:&quot;, e);
  }
}
// 启动一个任务:
getRemoteTexts(&quot;http://sciter.com/test/text.txt&quot;);
stdout.println(&quot;任务开始&quot;);
</code></pre>
  <p>当你在Sciter中运行这段代码片段时，你会在控制台看到以下输出内容:</p>
  <pre v-pre><code>&gt; 任务开始
&gt; 完成: {content of test/text.txt file }
</code></pre>
  <p>&quot;&gt; 任务开始&quot; 将会首先出现。任何包含<em>await</em>的函数都会自动转换成一个Task函数。</p>
  <p>Task函数的调用将会立即完成，而它的函数体将会在队列里稍后执行。</p>
  <p>当执行到<em>await</em>语句时，它后面的语句将会推迟到<em>view.request</em>完成(诺言解决)后再继续执行。</p>
  <p>也就是说: await是另一种等待诺言被解决的方式。</p>