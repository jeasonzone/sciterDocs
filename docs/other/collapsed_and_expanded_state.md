## collapsed和expanded状态

<h1 class="article-title">Sciter中的&#8220;collapsed&#8221;和&#8220;expanded&#8221;状态</h1>
  <div class="article-content">
    <p>collapsed(折叠)/expanded(展开)概念在UI中使用的是非常广泛的， 所以我解决的将他们添加到Sciter的内核中。</p>
    <p>所以在脚本中可以读写这两个通用的UI状态标识:</p>
    <pre><code>element.state.collapsed = true /*or false*/;
element.state.expanded = true /*or false*/;</code></pre>
    <p>这两状态是相互关联的 &#8211; 元素可以是collapsed或expanded状态, 但不可能同时处于这两种状态，即当<code>element.state.expanded = true;</code>时，则<code>element.state.collapsed</code>将被设置为false, 反之亦然。默认情况下，元素的这两种状态都为false &#8211; 非collapsed也非expanded。</p>
    <p>在CSS中，有两个伪类反应这两种状态:</p>
    <pre><code>element:collapsed { ... }
element:expanded { ... }</code></pre>
    <p>在不同的场景中，collapsed和expanded状态表示不同的含义。在某些场景中，折叠的元素意味着元素是隐藏/不可见的，它的CSS定义如下:</p>
    <pre><code>element:collapsed { visibility:none; }</code></pre>
    <p>而在另外一些场景中, 比如有标题区和内容区的section, 折叠状态意味着“隐藏内容区，但总是显示标题区”</p>
    <pre><code>&lt;section.collapsible&gt;
 &lt;header&gt;标题&lt;/header&gt;
 &lt;div&gt;
 ... 内容 ...
 &lt;/div&gt;
&lt;/section&gt;</code></pre>
    <p>在这种场景中，CSS可能包含这样的visibility规则:</p>
    <pre><code>section.collapsible:collapsed > div { visibility:none; }</code></pre>
    <p>所以当section处于折叠状态时，它的内容div是完全隐藏的。并且它可能在标题区定义了可见的折叠状态, 比如 +/-图标等。</p>
    <p>在脚本中，你可以很容易触发它的expands/collapse的状态:</p>
    <pre><code>self.on("click", "section.collapsible > header", function(evt) {
  // 在标题区上点击
  var section = this.parent;
  // 切换collapsed状态:
  section.state.collapsed = !section.state.collapsed; 
});</code></pre>
  </div>

