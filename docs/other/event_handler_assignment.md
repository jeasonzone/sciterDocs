## 事件赋值方式

<div class="article-header">
    <h1 class="article-title">事件处理器的赋值</h1>
  </div>
  <div class="article-content">
    <p>Sciter支持jQuery风格的事件处理器赋值方式:</p>
    <pre><code>element.on("event", "selector", function(evt) {...});</code></pre>
    <p>这种方式大部分情况下已经足够了，不过因为某些元素，我觉得它&#8220;不够美观&#8221; 所以我正在想它的替代方法。</p>
    <p>目前，有一个比较灵活的选项/主意，类似下面这样:</p>
    <pre><code>// subscribe function for "click" event on element
element &lt;&lt; event click (evt) {...};</code></pre>
    <p>上面的语句等同于</p>
    <pre><code>element.on("click", function (evt) {...});</code></pre>
    <p>以及它的完整格式(带选择器)： </p>
    <pre><code>// subscribe function for "click" event on &lt;button id=first> element
self &lt;&lt; event click $(button#first) (evt) {...};</code></pre>
    <p>目前主要的挑战是JS syntax/grammar&#8230;</p>
  </div>