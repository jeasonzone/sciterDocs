## behavior与prototype/aspect

<div>
	 <h1 class="storytitle">Behavior与CSS中的prototype/aspect属性</h1>
 </div>
	
<div class="storycontent">
		<p>从一开始，Sciter就支持将一个声明的脚本类附加到DOM元素上。</p>
<p>如果你想使你的文档中的所有div.some-widget元素都拥有一些特别的行为(子类化), 你需要:</p>
<p>1. 在脚本中声明 </p>
<pre class="brush: js;"><code>class SomeWidget : Behavior {
  function attached() { ... } // 该方法中的'this'为子类化的DOM元素
  function detached() { ... }
  // ... SomeWidget特有的方法在这里指定
}</code></pre>
<p>2. 在CSS中声明 </p>
<pre class="brush: css;"><code>div.some-widget { behavior:SomeWidget; } 
/* 或者，如果SomeWidget的声明在其他文件中: */
div.some-widget { SomeWidget url(some-widget.tis); }</code></pre>
<p>在上面的声明中，所有的有class=”some-widget”的div都将被附加了SomeWidget类。这个机制我已经在8年前讲过了。</p>
<p>这个机制是很可靠的，也是非常方便的。</p>
<p>behaviors/prototypes的唯一问题是 – 在给定时刻，一个DOM元素只能有一个脚本类。JavaScript和TIScript都不支持多层继承。</p>
<p>设想一下，在脚本中，你有多个函数要为某些DOM元素指定一些特定的功能。</p>
<p>或者说，每个这样的函数添加到被调用的DOM元素自己的aspect (部分功能)。类似下面:</p>
<pre class="brush: js;"><code>function addClickHandlerFor(element) {
  // ͨ通过html中的"click"元素的属性添加onClick处理器
  element.on("click", function() { 
    var attrClick = element.attributes["click"];  
    element.eval(attrClick); // 对表达式进行求值
  });
}</code></pre>
<p>你可以有一个这样的函数集来配置不同的元素/行为的aspect。</p>
<p>上面的流程是原则上的，不过你可能需要为你需要这样配置的元素显示的调用这些函数，同时不用忘了为动态创建的内容调用它们。</p>
<p>考虑上面的这些情况，我为Sciter引入了特有的CSS属性——‘aspect’。</p>
<h4>The <code>aspect</code> CSS property</h4>
<p>它的声明为 </p>
<pre><code>
aspect: "函数名" [ url(of-function-implementation-file) ];
</code></pre>
<p>其中，"函数名"是一个“aspect”函数的全名，指为DOM元素配置/装载额外功能的函数。 其中的url()是定义该函数的文件名。</p>
<p>aspect处理原则:</p>
<p>&#8220;aspect&#8221;函数时一个普通的tiscript脚本函数。</p>
<ol>
<li>1.其中的this变量指向满足CSS规则的DOM元素。</li>
<li>2.在DOM元素的生命周期内只会执行一次。</li>
</ol>
<p>ͬ同时, aspect属性使用非标准的继承性 – 如果元素有多个CSS匹配规则中都定义了aspect，则该元素所使用的aspect是所有这些规则定义的aspect列表。因此，如果你有下面的规则 (来自Plus引擎的示例):</p>
<pre class="brush: css;"><code>[click] { aspect:"Plus.Click"; }
[dblclick] { aspect:"Plus.DblClick"; }
</code></pre>
<p>同时，元素在html标志中的定义如下：</p>
<pre class="brush: html;"><code>&lt;b id="clickable" click="..." dblclick="..."&gt;text&lt;/b&gt;</code></pre>
<p>它将拥有两个调用函数 – Plus.Click() 和 Plus.DblClick()。等同于下面的CSS定义:</p>
<pre class="brush: css;"><code>#clickable { aspect:"Plus.Click" "Plus.DblClick"; }
</code></pre>
<p>这个aspect机制在Sciter SDK中的Plus ( /samples/+plus/ ) 和 Lang ( /samples/+lang/ )引擎中已经在使用了。<br />
Plus提供了类似AngularJS的声明式数据绑定功能。Lang提供了对i18n的支持。</p>
	</div>
</div>