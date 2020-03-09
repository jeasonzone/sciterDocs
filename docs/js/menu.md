# 菜单

## 菜单(menu)

<h1>behavior:menu</h1>
  <p>该行为提供了基本的分层菜单的功能。</p>
  <h2>元素</h2>
  <p>默认情况下，应用了该行为的元素有:</p>
  <ul>
    <li><code>&lt;menu class=&quot;context&quot;&gt;</code> - 上下文菜单;</li>
    <li><code>&lt;menu class=&quot;popup&quot;&gt;</code> - 弹出菜单。</li></ul>
  <h2>示例</h2>
  <div>
    <ClientOnly>
      <demo-block><div slot="source">
        <img src="../imgs/js_菜单.jpg">
      </div>
      <div slot="highlight"><code>
      &lt;button&gt;<br />
	      点我<br />
        &lt;menu.popup&gt;<br />
        &lt;li id="file-open"&gt;打开&lt;span.accesskey&gt;Ctrl+O&lt;/span&gt;&lt;/li&gt;<br />
        &lt;hr&gt;<br />
        &lt;li id="file-save"&gt;保存&lt;span.accesskey&gt;Ctrl+S&lt;/span&gt;&lt;/li&gt;<br />
        &lt;li id="file-save-as"&gt;另存为...&lt;span.accesskey&gt;Ctrl+Shift+S&lt;/span&gt;&lt;/li&gt;<br />
      &lt;/menu&gt;<br />
	&lt;/button&gt;
    </code></div></demo-block>
    </ClientOnly>
  </div>
  <h2>模型</h2>
  <p>Sciter中菜单的声明:</p>
  <pre><code>&lt;menu.popup&gt;
  &lt;li id=&quot;file-open&quot;&gt;打开&lt;span.accesskey&gt;Ctrl+O&lt;/span&gt;&lt;/li&gt;
  &lt;hr&gt;
  &lt;li id=&quot;file-save&quot;&gt;保存&lt;span.accesskey&gt;Ctrl+S&lt;/span&gt;&lt;/li&gt;
  &lt;li id=&quot;file-save-as&quot;&gt;另存为...&lt;span.accesskey&gt;Ctrl+Shift+S&lt;/span&gt;&lt;/li&gt;
&lt;/menu&gt;
</code></pre>
  <p><code>&lt;li&gt;</code>元素或任何有<code>role=menu-item</code>属性的块元素都会被当做可选择的菜单项，并且可以生成MENU_ITEM_CLICK事件。</p>
  <p>例如，下面的标记代码:</p>
  <pre><code>&lt;menu.popup&gt;
  &lt;table&gt;
    &lt;tr&gt;&lt;td role=&quot;menu-item&quot; id=&quot;red&quot;&gt;Red&lt;/td&gt;
        &lt;td role=&quot;menu-item&quot; id=&quot;green&quot;&gt;Green&lt;/td&gt;
        &lt;td role=&quot;menu-item&quot; id=&quot;blue&quot;&gt;Blue&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td role=&quot;menu-item&quot; id=&quot;cyan&quot;&gt;Cyan&lt;/td&gt;
        &lt;td role=&quot;menu-item&quot; id=&quot;magenta&quot;&gt;Magenta&lt;/td&gt;
        &lt;td role=&quot;menu-item&quot; id=&quot;yellow&quot;&gt;Yellow&lt;/td&gt;&lt;/tr&gt;
  &lt;/table&gt;
&lt;/menu&gt;
</code></pre>
  <p>将会产生一个由菜单项组成的弹出菜单的3x2表格。</p>
  <p>菜单项可以包含子菜单:</p>
  <pre><code>&lt;menu.popup&gt;
  &lt;li id=&quot;file-open&quot;&gt;打开文件&lt;span.accesskey&gt;Ctrl+O&lt;/span&gt;&lt;/li&gt;
  &lt;hr&gt;
  &lt;li&gt;最近的文件
    &lt;menu id=&quot;LRU&quot;&gt;
      &lt;li&gt;文件1.htm&lt;/li&gt;
      &lt;li&gt;文件2.htm&lt;/li&gt;
      &lt;li&gt;文件3.htm&lt;/li&gt;
    &lt;/menu&gt;
  &lt;/li&gt;
&lt;/menu&gt;
</code></pre>
  <h2>属性</h2>
  <p>该行为没有引入特有的方法。</p>
  <dl>
  <h2>方法</h2>
    <p>通常，菜单是不可见的 - 声明了display:none样式。菜单有一个特别的生命周期。它的可见性不能在CSS中描述。</p>
    <p>为了显示菜单，你需要调用<code>menuOwnerElement.popup(menuElement, ...)</code>方法。其中，<code>menuOwnerElement</code>是菜单的&quot;拥有&quot;元素，menuElement是你需要为拥有者显示的菜单&lt;menu&gt;元素。</p>
    <h2>状态</h2>
    <ul>
      <li><code>:owns-popup</code> 当菜单显示时，菜单拥有者(上面的<code>menuOwnerElement</code>)会设置该状态标志;</li>
      <li><code>:popup</code> - 当<code>&lt;menu&gt;</code>显示时，该菜单会设置该状态标志。</li></ul>
    <h2>事件</h2>
    <dt>MENU_ITEM_CLICK</dt>
    <dd>- 当用户点击菜单项时生成该事件，该事件为异步事件。Event.target是点击的菜单项。</dd>
    <dt>MENU_ITEM_ACTIVE</dt>
    <dd>- 当用户通过鼠标悬停或导航键激活菜单时生成该事件，该事件为同步事件。Event.target是激活的菜单项。</dd>
    <p>菜单项事件的传播采用所谓的菜单树顺序，菜单的拥有者元素会接收它拥有的菜单的所有的MENU_ITEM_CLICK事件。</p></dl>
  <h2>value</h2>
  <p>N/A</p>
  <h2>脚本中菜单点击的处理</h2>
  <h3><code>onControlEvent</code>事件</h3>
  <pre><code>var edit = $(input#some);
edit.onControlEvent = function(evt)
{
  switch(evt.type) {
    case Event.MENU_ITEM_CLICK: /* evt.target是点击的菜单项 */ break;
  }
}
</code></pre>
  <h3><code>on()</code>订阅</h3>
  <pre><code>var edit = $(input#some);
edit.on(&quot;click&quot;, &quot;li#file-open&quot;, function(evt) { 
  // 'this'这里是li#file-open元素 
});
</code></pre>
  <h3>decorators.tis 装饰器</h3>
  <pre><code>include &quot;decorators.tis&quot;;
@click @on &quot;li#file-open&quot; :: ... 事件处理代码 ...;
</code></pre>

## 菜单条(menu-bar)

<h1>behavior:menu-bar</h1>
  <p>该行为提供了一个横向菜单栏 —— 弹出菜单的顶层容器。</p>
  <p>引擎的默认样式系统没有提供菜单栏的默认样式。如果你的应用程序需要菜单栏，请使用{sdk}/samples/menu/std-menu.css作为原型。</p>
  <h2>元素</h2>
  <p>默认没有元素应用该行为。<u>{sdk}/samples/menu/std-menu.css</u>是假设<code>&lt;ul id=&quot;menu-bar&quot;&gt;</code>元素定义了顶层菜单。</p>
  <h2>模型</h2>
  <p>Sciter中，菜单的声明示例:</p>
  <pre><code>&lt;ul id=&quot;menu-bar&quot;&gt;
  &lt;li&gt;
    &lt;caption&gt;文件&lt;/caption&gt;
    &lt;menu&gt;
      &lt;li id=&quot;file-open&quot;&gt;打开&lt;span.accesskey&gt;Ctrl+O&lt;/span&gt;&lt;/li&gt;
      &lt;hr&gt;
      &lt;li id=&quot;file-save&quot;&gt;保存&lt;span.accesskey&gt;Ctrl+S&lt;/span&gt;&lt;/li&gt;
      &lt;li id=&quot;file-save-as&quot;&gt;另存为...&lt;span.accesskey&gt;Ctrl+Shift+S&lt;/span&gt;&lt;/li&gt;
    &lt;/menu&gt;
   &lt;li&gt;
   ...
&lt;/ul&gt;
</code></pre>
  <h2>属性</h2>
  <p>该行为没有引入特有的属性。</p>
  <dl>
    <h2>方法</h2>
    <p>没有特有的方法。</p>
    <h2>状态</h2>
    <ul>
      <li><code>:owns-popup</code> 当菜单显示时，菜单拥有者(上面的<code>menuOwnerElement</code>)会设置该状态标志;</li>
      <li><code>:popup</code> - 当<code>&lt;menu&gt;</code>显示时，该菜单会设置该状态标志。</li></ul>
    <h2>事件</h2>
    <dt>MENU_ITEM_CLICK</dt>
    <dd>- 当用户点击菜单项时生成该事件，该事件为异步事件。Event.target是点击的菜单项。</dd>
    <dt>MENU_ITEM_ACTIVE</dt>
    <dd>- 当用户通过鼠标悬停或导航键激活菜单时生成该事件，该事件为同步事件。Event.target是激活的菜单项。</dd>
    <p>菜单项事件的传播采用所谓的菜单树顺序，菜单的拥有者元素会接收它拥有的菜单的所有的MENU_ITEM_CLICK事件。</p></dl>
  <h2>value</h2>
  <p>N/A</p>
  <h2>脚本中菜单点击的处理</h2>
  <h3><code>onControlEvent</code>事件</h3>
  <pre><code>var edit = $(input#some);
edit.onControlEvent = function(evt)
{
  switch(evt.type) {
    case Event.MENU_ITEM_CLICK: /* evt.target是点击的菜单项 */ break;
  }
}
</code></pre>
  <h3><code>on()</code>订阅</h3>
  <pre><code>var edit = $(input#some);
edit.on(&quot;click&quot;, &quot;li#file-open&quot;, function(evt) { 
  // 'this'这里是li#file-open元素 
});
</code></pre>
  <h3>decorators.tis 装饰器</h3>
  <pre><code>include &quot;decorators.tis&quot;;
@click @on &quot;li#file-open&quot; :: ... 事件处理代码 ...;
</code></pre>