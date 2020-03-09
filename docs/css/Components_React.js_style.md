# @component特性

## 类React.js的组件样式

<p><img src="../imgs/legos.jpg" alt="legos" width="349" height="200" class="aligncenter size-full wp-image-48426" /></p>
<p>我正在考虑添加一种类似React.js的<code>@component</code>特性。</p>
    <p>参考下面这样的结构:</p>
    <pre v-pre><code>@component Toggler {
  :root { flow: stack; }
  :root &gt; option:nth-child(1) { ... }
  :root &gt; option:nth-child(2) { ... }
  :root[on][off] :
    &lt;option&gt;{ attributes.on }&lt;/option&gt; 
    &lt;option&gt;{ attributes.off }&lt;/option&gt; 
  :root[on][off][mixed] :
    &lt;option&gt;{ attributes.on }&lt;/option&gt; 
    &lt;option&gt;{ attributes.off }&lt;/option&gt; 
    &lt;option.mixed&gt;{ attributes.mixed }&lt;/option&gt; 
  // event handler 
  on :root click(evt) {
    ...
  }  
  // event handler on child element
  on option mousedown(evt) {
    ...
  }  
  // method  
  function foo() { ... }
  // property  
  property bar(v) { ... }
}</code></pre>
    <p><code>@component</code>本质上和<code>@set</code>很类似，不过它不仅包含样式声明，还包含可选的组件HTML标记代码，等价于：</p>
    <pre v-pre><code>class Toggler:Behavior { 
   function attached() {
      this.$content(...); 
   }
   function foo() {  ... }
   property bar(v) { ... }
}</code></pre>
    <p>因此，如果你将得到这样的标记:</p>
    <pre v-pre><code>&lt;html> 
  &lt;head>
    &lt;link rel="components" href="components/">
  &lt;/head>
  &lt;body>
    &lt;toggler on="yey" off="ney">
  &lt;/body>
&lt;/html></code></pre>
    <p>将将看到组件的实例化和DOM的初始化。</p>
  </div>