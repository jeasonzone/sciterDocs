## 可重用组件化

<p>在Sciter中，你可以通过自定义元素类(behavior/prototype)或aspect来实现可重用组件化编程。</p> 
  <h2>自定义元素类</h2> 
  <p>在CSS中，你可以定义你的自定义元素(比如components.css文件): </p> 
  <pre><code>toggler {
  prototype: Toggler url(components.tis); <span style="color: green;">// 定义绑定的脚本代码</span> 
  display:block;   <span style="color: green;">// 必须定义: display模型</span> 
  flow:horizontal; <span style="color: green;">// 必须定义: flow - 内容的布局管理器</span> 
  ...
}</code></pre> 
  <p>声明的<code>prototype</code>属性值的内容包含两部分：a) 脚本类的名称; b) 查找这里的url地址。</p> 
  <p>在那个components.tis文件中，你定义了你的<code>Toggler</code>类，它扩展自<code>Element</code>类:</p> 
  <pre><code>class Toggler : Element 
{
  this var state = false; <span style="color: green;">// 实例变量</span> 
  var total = 0;          <span style="color: green;">// 类变量, 所有实例共用</span> 
  <span style="color: green;">// 当DOM元素将它的原型绑定到Toggler类时，会自动调用这个函数，</span> 
  <span style="color: green;">// 它类似C++中的构造器</span> 
  function attached()  {
     this.state = this.attributes.exists(&quot;checked&quot;);
     var caption = this.attributes[&quot;caption&quot;] || &quot;Option&quot;;
     <span style="color: green;">/// 内容填充使用字符串器函数 - 它是一种内置的特性，类似于React的JSX子语言</span> 
     this.$content( &lt;button&gt;{caption}1&lt;/button&gt;
                    &lt;button&gt;{caption}2&lt;/button&gt; );
     ++total; 
  }
  <span style="color: green;">// 这个方法在DOM元素的原型发生改变或DOM元素卸载时被调用，</span> 
  <span style="color: green;">// 它类似于C++的析构器</span> 
  function detached()  {
     --total; 
  }
  <span style="color: green;">// 该自定义元素特有的方法:</span>
  function update() { ... }
  <span style="color: green;">// 该自定义元素特有的属性, 比如'value'属性:</span>
  property value(val) { 
     get { return this.state; }     
     set { this.state = val; this.update(); }     
  }
}
</code></pre> 
  <p>这样的代码是不是很漂亮和简洁？现在我们就可以在HTML中使用这个自定义元素了:</p> 
  <pre><code>&lt;html&gt; 
  &lt;style&gt;
    @import url(components.css);
  &lt;/style&gt;
  &lt;body&gt;
    Demo of the &lt;toggler /&gt; element.
  &lt;body&gt;
&lt;/html&gt;
</code></pre> 
  <p>因此，CSS不仅可以定义可视化样式，也可以定义自定义元素的行为。</p> 
  <h2>自定义切面(aspect)</h2> 
  <p>还有一种叫做“切面(aspect)”的机制 – 声明一个DOM函数调用的函数。<br /> 
  这个特性比较接近于AngularJS中的指令(directive)，在某些情况下也可以完成类似React的mixin功能。它可以定义一个<strong>functions</strong>，这个函数在DOM元素初始化时被调用 – 你可以在这个函数里定义元素的行为。</p> 
  <p>在CSS中，你可以这样定义:</p> 
  <pre><code>div[collapsible]  { aspect: Collapsible url(components); }
div[collapsible]:collapsed &gt; :not(caption) { display:none; }
div[detachable]  {
  aspect: Detachable url(components); 
}
</code></pre> 
  <p>同时在HTML中:</p> 
  <pre><code>&lt;div collapsible&gt;
  &lt;caption&gt;Click to collapse/expand&lt;/caption&gt;
  &lt;div&gt;content&lt;/div&gt;
&lt;/div&gt;
&lt;div collapsible detachable &gt;
  &lt;caption&gt;Click to collapse/expand&lt;/caption&gt;
&lt;/div&gt;
</code></pre> 
  <p>以及components.tis:</p> 
  <pre><code>function Collapsible() {
  <span style="color: green;">// toggle :collapsed state on click:</span>
  this.on(&quot;click&quot;, function() { this.state.collapsed = !this.state.collapsed; })
}</code></pre>