## AngularJS使用者的Sciter指南

<h1 class="article-title">AngularJS使用者的Sciter指南：指令(Directive)</h1>
		<h2>AngularJS</h2>
    <h3>指令(Directive)</h3>
<p>来自<a href="https://docs.angularjs.org/guide/directive">AngularJS文档</a> :</p>
<blockquote><p>在高层次上, 指令是DOM元素上的一个标记(比如一个属性、元素名、注释或CSS类), 它指示AngularJS的HTML编译器($compile)以在该DOM元素上添加特定的行为(比如事件监听器), 或改变DOM元素和它的子元素。</p></blockquote>
<p>下面是一个典型的AngularJS指令的实现:</p>
<pre><code>app.directive('myCustomer', function() {
  return {
    template: 'Name: {{name}} Address: {{address}}', // 内容
    scope: { name:"", address:"" },  // 内部数据模型
    link: function(scope, elem, attrs) { // 初始化 
      elem.bind('click', function() { ... });
      elem.bind('dblclick', function() { ... });
    }
  };
});</code></pre>
<p>它的含义是：每个<code>&lt;my-customer&gt;</code>元素都将拥有</p>
<ul>
<li><code>Name: ... Address: ...</code> 内容;</li>
<li><i>click</i> 和 <i>dblclick</i> 事件处理器。</li>
</ul>
<h2>Sciter</h2>
<h3>行为(Behavior)</h3>
<p>在Sciter中，声明从代码到元素的绑定是通过CSS中的<code>prototype</code>属性来完成的:</p>
<pre><code>my-customer {
  prototype: MyCustomer url(my-customer.tis);
  display: block;
  ...
}</code></pre>
<p>有了上面的声明后，在HTML文本中的所有<code>&lt;my-customer&gt;</code>元素都将渲染成块元素，并且将<i>MyCustomer</i>类绑定到元素上。这个类将从<i>my-customer.tis</i>文件中加载(如果它尚未加载的话):</p>
<pre><code>class MyCustomer : Element 
{
  function attached() // 当元素绑定到这个类时被调用 - 相当于Angular中的"link"
  {
     // 内容初始化: 
     this.$content(Name: &lt;output.name/&gt; Address: &lt;output.address/&gt;);
  }
  // 事件处理器:
  event click { ... /* 这里的'this'指绑定的dom元素 */ }
  event dblclick { ... }
}</code></pre>
<p>因为行为是通过CSS赋值的，所以你可以使用任意的CSS选择器来将类绑定到DOM元素上。</p>
<h3>切面(Aspect)</h3>
<p>另一种绑定代码到元素上的方式是使用所谓的切面(aspect). 切面(Aspect)在这里是一个脚本函数，它在CSS选择器第一次匹配到元素时被执行:</p>
<pre><code>[collapsible] { aspect: Collapsible url(my-aspects.tis); }
[collapsible]:collapsed &gt; :last-child { display:none; } // 当折叠后，最后一个子元素将不可见</code></pre>
<p>其中，<i>Collapsible</i>是一个普通的函数，它处理元素的点击事件以及触发<code>:collapsed</code>状态标志的切换:</p>
<pre><code>function Collapsible() { 
  this &lt;&lt; event click {
     if( this.state.collapsed ) this.state.expanded = true;
     else this.state.collapsed = true;    
  }
}</code></pre>
<p>有了上面的声明后，我们可以定义可折叠的元素:</p>
<pre><code>&lt;div collapsible&gt;
  click here to see content
  &lt;p&gt;Content&lt;/p&gt;
&lt;/div&gt;</code></pre>
<p>这样你就可以在你的代码中可以有多个可折叠节，而你仅需要在它之上添加&#8220;collapsible&#8221;属性即可。</p>

