# Task

<p>Task对象表示一个Task - 协同例程 - 一个可以在函数执行未完成之前中断并返回一个值的函数。当这个协同例程被再次调用时, 它将继续从上次的中断点处继续执行，且它的执行上下文环境保持不变。</p>
  <p>在Sciter中，有两种类型的协同例程: </p>
  <ul>
    <li><strong>生成器(Generator)</strong> - 使用了<code>yield</code>语句的普通的函数。</li>
    <li><strong>异步任务(Asynchronous task)</strong> - 在函数体中使用了<code>await</code>语句的普通函数。</li></ul>
  <h3>Task创建方法</h3>
  <p>要创建一个生成器或异步任务，你可以在定义函数体时使用<em>yield</em> 或 <em>await</em>语句: </p>
  <p>异步任务:</p>
  <pre v-pre><code>async function getRemoteData(url) {  // 异步任务
   try { 
       var data = await self.request(#get, url);
       return data;
   } catch (e) {
       return null; 
   }
}
</code></pre>
  <p>生成器:</p>
  <pre v-pre><code>function* listItemsBackward(list) {  // 生成器任务
     for(var i = list.length - 1; i >= 0; --i)
       yield list[i];
}
// 使用生成器:
var list = [0,1,2,3];
for(var item in listItemsBackward(list))
  stdout.println(item);
</code></pre>
  <dl>
    <h3>Task的调用</h3>
    <p>要启动一个生成器或异步任务，你只需将它当做普通函数一样调用即可。它们与普通函数的唯一区别时：这些函数会立即完成并返回，但这不代表这个函数已经指向完成，而且它返回的是一个Task对象。</p>
    <p>返回的这个Task对象内部存储了这个函数，以及它的状态和'未来值' - 即这个值只有当await语句完成(异步任务)或再次调用它的next()方法时才有意义。</p>
    <h3>异步任务是一个&quot;thenable&quot;例程</h3>
    <p>异步Task对象有一个<code>then()</code>方法，它和Promise/A+规范一致，所以它可以被当做一个promise。例如，下面函数也是一个异步任务，它并行启动了两个task，并且等待它们的完成: </p>
    <pre v-pre><code>function getRemoteDataItems() 
{
 // 等待这两个请求处理完成:
 var items = promise.when( getRemoteData(&quot;http://example.com/api/v2/item1&quot; ),
                           getRemoteData(&quot;http://example.com/api/v2/item2&quot; ));
 stdout.println(items[0],items[1]);
}
</code></pre>
    <h2>属性</h2>
    <dt>isAsync</dt>
    <dd>readonly, <em>true</em> 如果这个Task是一个激活的异步任务(等待IO操作的完成)则返回<em>true</em>, 否则这个属性为<em>false</em>。</dd>
    <dt>isGenerator</dt>
    <dd>readonly, <em>true</em> 如果这个Task是一个激活的(未完成)的生成器这返回<em>true</em>,否则返回<em>false</em>.</dd>
    <h2>方法</h2>
    <dt>then</dt>
    <dd>
      <div>( <strong>onFulfilled</strong>: function [, <strong>onRejected</strong>: function] ) : this Task</div>
      <p>添加onFulfilled和onRejected回调函数到task的回调列表。在task完成时会调用onFulfilled(result)或onRejected(error)。</p>
      <p>then()方法可以被异步任务例程调用</p></dd>
    <dt>catch</dt>
    <dd>
      <div>( <strong>onRejected</strong>: function ) : this Task</p>
      <p>添加onRejected回调函数到task回调列表中。onRejected(error)将在task抛出错误时被调用。</p></div>
      <p>catch()方法仅在异步task例程中被调用。</p>
      <p>等价于调用<code>task.then(null, onRejected);</code>。</p></dd>
    <dt>finally</dt>
    <dd>
      <div>( <strong>onComplete</strong>: function ) : this Task</div>
      <p>添加onComplete回调函数到task回调列表中。onComplete(result | error)将在任务完成时被调用。</p>
      <p>finally()方法仅在异步task例程中被调用。</p>
      <p>等价于调用<code>task.then(onComplete, onComplete);</code>。</p></dd>
    <dt>next</dt>
    <dd>
      <div>( [val:any] &nbsp;) : value</div>
      <p>调用生成器函数，并且返回函数中yield语句的返回值。</p>
      <p>next()方法尽可以被生成器例程调用。</p></dd></dl>