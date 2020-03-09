## 上下文菜单

<div class="post" id="post-41938"> 
       <h1 class="storytitle">Sciter中的上下文菜单</h1> 
       <div class="storycontent"> 
        <p>上下文菜单是一个标准UI特性，为了支持它，Sciter提供了以下机制:</p> 
        <ol> 
         <li><em>context-menu</em>自定义CSS属性。它定义上下文菜单(通常是一个<code>&lt;menu class=context&gt;</code>)激活时的位置。</li> 
         <li>菜单的行为和关联的DOM事件。</li> 
         <li>上下文菜单激活和初始化机制。</li> 
        </ol> 
        <p><span id="more-41938"></span></p> 
        <h2><code>context-menu</code> 样式属性</h2> 
        <p><code>context-menu</code>是Sciter特有的，它是一个非继承CSS属性，可以接受以下值:</p> 
        <ul> 
         <li><code>none</code> - 默认值, 元素没有上下文菜单;</li> 
         <li><code>selector(...)</code> - 定义一个选择器，它指向一个已存在DOM元素，这个元素被用作一个弹出菜单(通常它是一个<code>&lt;menu class=context&gt;</code>元素);</li> 
         <li><code>url(...)</code> - 定义包含菜单定义的HTML(片段)文件的URL。</li> 
        </ul> 
        <p>示例: &nbsp;</p> 
        <pre class="brush: html;"><code>  &lt;style&gt;
    div.bar { context-menu: selector(menu#foo); }
    div.baz { context-menu: url(for-baz.htm); }
  &lt;/style&gt;
  &lt;div class=&quot;bar&quot;&gt;有#foo上下文菜单&lt;/div&gt; 
  &lt;div class=&quot;baz&quot;&gt;有for-baz.htm上下文菜单&lt;/div&gt; 
  &lt;menu class=context id=&quot;foo&quot;&gt;
    &lt;caption&gt;.bar元素的#foo菜单&lt;/caption&gt;
    &lt;li id=&quot;i1&quot;&gt;第一项&lt;/li&gt;
    &lt;li id=&quot;i2&quot;&gt;第二项&lt;/li&gt;
    &lt;li id=&quot;i3&quot;&gt;第三项&lt;/li&gt;
    &lt;li id=&quot;i4&quot;&gt;第四项&lt;/li&gt;
  &lt;/menu&gt;
</code></pre> 
        <p> <img align="right" src="../imgs/external-menu.png" alt="external-menu" width="151" height="170" /></p> 
        <p>声明的标记代码中有两个元素包含上下文菜单: </p> 
        <ul> 
         <li><code>&lt;div class=bar&gt;</code> &nbsp; - 拥有<code>menu#foo</code>上下文菜单&nbsp;&nbsp;</li> 
         <li><code>&lt;div class=baz&gt;</code> &nbsp; - 的上下文菜单从for-baz.htm中加载HTML文档作为上下文菜单。</li> 
        </ul> 
        <p>for-baz.htm文档中的内容可以如下:</p> 
        <pre class="brush: html;"><code>&lt;menu&gt;  
  &lt;caption&gt;外部菜单:&lt;/caption&gt;
  &lt;li id=&quot;mi1&quot;&gt;第一项&lt;/li&gt;
  &lt;li id=&quot;mi2&quot;&gt;第二项&lt;/li&gt;
  &lt;li id=&quot;mi3&quot;&gt;第三项&lt;/li&gt;
  &lt;li id=&quot;mi4&quot;&gt;第四项&lt;/li&gt;
&lt;/menu&gt;
</code></pre> 
        <h2>behavior:menu和它的事件</h2> 
        <p>默认情况下，每个<code>&lt;menu class=context&gt;</code>(或简写形式<code>&lt;menu.context&gt;</code>)都已绑定了<code>behavior:menu;</code>行为。</p> 
        <p>behavior:menu行为的主要目的就是要支持基本的菜单操作: </p> 
        <ul> 
         <li>导航，包括分层菜单导航;</li> 
         <li>生成菜单点击事件。</li> 
        </ul> 
        <p>当用户点击某个菜单项时，该行为会生成Event.MENU_ITEM_CLICK冒泡事件，事件包含以下值:</p> 
        <ul> 
         <li><code>Event.target</code> , DOM元素 - 点击的菜单项元素;</li> 
         <li><code>Event.owner</code>, DOM元素 - 菜单的拥有者 - 即定义了context-menu的那个元素。</li> 
        </ul> 
        <p>MENU_ITEM_CLICK事件的传递使用特殊的冒泡规则: MENU_ITEM_CLICK事件不会被物理父元素接受，而是被菜单的[逻辑]拥有者(即该上下文菜单的拥有者)接收。</p> 
        <p>因此，为了处理菜单点击，你可以订阅下面的控制事件:</p> 
        <pre class="brush: js;"><code>var elemWithMenu  = self.select(&quot;div.baz&quot;);
elemWithMenu.onControlEvent = function(event) {
  if( event.type == Event.Event.MENU_ITEM_CLICK )  {
      var menu_item = event.target; 
      ...
  }<br />}
</code></pre> 
        <p>或者使用类似JQuery的机制:</p> 
        <pre class="brush: js;"><code>elemWithMenu.subscribe(&quot;click&quot;, &quot;menu &gt; li&quot;, function(event) {
   var menu_item = event.target;
   var owner = event.owner;
});
</code></pre> 
        <h2>上下文菜单的激活与初始化</h2> 
        <p>上下文菜单的激活起始于接收到WM_CONTEXTMENU(Microsoft Windows)或Right-Mouse-click(Mac OS X)。</p> 
        <p>当Sciter接收到上下文菜单激活请求时会做以下事情:</p> 
        <ol> 
         <li>查找当前鼠标下面的元素或者获得焦点的元素(鼠标悬停的最顶层元素)，找到后向它发送Event.CONTEXT_MENU_REQUEST冒泡事件。</li> 
         <ul> 
          <li>如果在父/子链上的某些元素处理了该事件(在事件处理器中返回<em>true </em>),并且对某个已存在的元素设置了<code>element.source = someMenuElement</code>，则这个someMenuElement元素将被当做上下文菜单来使用。这种情况下，任何CSS中为该元素声明的context-menu都将被忽略。</li> 
          <li>如果Event.CONTEXT_MENU_REQUEST事件未被用户代码处理，则引擎将会在当前鼠标悬停的最顶层元素的父子链上检索context-menu声明来创建菜单。在链上的第一个声明了context-menu属性的元素将被作为菜单的拥有者，并且为它创建菜单。</li> 
         </ul> 
         <li>在显示菜单前的最后一个步骤，引擎将为菜单的拥有者及它的所有父元素发送Event.CONTEXT_MENU_SETUP冒泡事件，通过处理Event.CONTEXT_MENU_SETUP事件，菜单拥有者及它的所有容器可以动态修改菜单项。Event.CONTEXT_MENU_SETUP事件将会有以下参数:</li> 
         <ul> 
          <li>event.target == 菜单拥有者元素;</li> 
          <li>event.source == 菜单元素。</li> 
         </ul> 
        </ol> 
        <p>请查看Sciter SDK中的菜单示例: /samples/menu/context-menu.htm</p> 
        <p>注意：Sciter中的上下文菜单可以包含任意的标记代码和样式。例如，上下文菜单的菜单项可以水平排列，或者可以包含<code>&lt;input|text&gt;</code>元素。</p> 
       </div> 
      </div>