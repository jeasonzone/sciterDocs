## HTML窗口

<h1 class="article-title">HTML窗口</h1> 
  <div class="article-content"> 
   <p>Sciter可以创建所谓的HTML窗口和对话框 – 使用view.window()和 view.dialog() 函数。<br /> 当创建这样的窗口时，你可以用HTML(既可以是指向HTML的URL，也可以是一个HTML片段)来定义它的窗口内容。</p> 
   <p>不仅可以通过HTML和CSS来定义窗口的内容，还可以定义窗口的类型，如下图:</p> 
   <p>
     <a href="../imgs/standard-window.png"><img src="../imgs/standard-window.png" alt="standard-window" width="160" /></a> 
     <a href="../imgs/window-layered.png"><img src="../imgs/window-layered.png" alt="window-layered" width="160" /></a> 
     <a href="../imgs/flat-window.png"><img src="../imgs/flat-window.png" alt="flat-window" width="160" /></a> 
     <a href="../imgs/transparent-window.png"><img  src="../imgs/transparent-window.png" alt="transparent-window" width="160" /></a>
   </p> 
   <p>为了使HTML支持这样的窗口，Sciter扩展了以下属性:</p> 
   <h2><code><i>custom-frame(已废弃)</i></code></h2> 
   <p>根<code>&lt;html&gt;</code>元素上的<code>custom-frame</code>属性接受以下值:</p> 
   <ul> 
    <li><strong>"none"</strong> 或省略 – 标准窗口, 标准的OS桌面窗口(有标题和关闭/最大化按钮) 。</li> 
    <li><strong>"solid"</strong> – 背景不透明的无边框窗口，只是一个矩形框。 窗口颜色需要在html中定义 (见下面)。</li> 
    <li><strong>"solid-with-shadow"</strong> 同上，不过它有窗口阴影(如果OS支持的话(比如CS_DROPSHADOW))。</li> 
    <li><strong>"glassy"</strong> – 半透明Area窗口(vista以上支持)。</li> 
    <li><strong>"layered"</strong> 或 <strong>""</strong> – 图层窗口,该窗口的形状由背景图片和border-radius属性决定。同时，CSS还应该在为它定义<code>html {background-color:transparent;}</code>。</li> 
   </ul> 
   <h2><code><i>resizeable(已废弃)</i></code></h2> 
   <p>根<code>&lt;html&gt;</code>元素添加<code>resizeable</code>属性可以使窗口大小可调整(resizeable)(WS_THICKFRAME)。</p> 
   <h2><code>window-frame</code></h2> 
   <p>从3.3.2.13版本开始新增的属性，用于替代<code>custom-frame</code>。<code>window-frame</code>属性接受以下值:</p> 
   <ul> 
    <li><strong>"default"</strong> 或省略 – 标准窗口, 标准的OS桌面窗口(有标题和关闭/最大化按钮) 。</li> 
    <li><strong>"solid"</strong> – 背景不透明的无边框窗口，只是一个矩形框。 窗口颜色需要在html中定义 (见下面)。</li> 
    <li><strong>"solid-with-shadow"</strong> 同上，不过它有窗口阴影(如果OS支持的话(比如CS_DROPSHADOW))。</li>
    <li><strong>"transparent"</strong> – 透明窗口,该窗口的形状由背景图片和border-radius属性决定。同时，CSS还应该在为它定义<code>html {background-color:transparent;}</code>。</li> 
    <li><strong>"extended"</strong> – 3.3.3.0新增属性，在窗口标题栏上添加工具条，参见<a href="window-frame=extended.htm">window-frame="extended"</a>。</li>
   </ul> 
   <h2><code>window-blurbehind</code></h2> 
   <p>从3.3.2.13版本开始新增的属性，用于替代<code>custom-frame="glassy"</code>。根<code>&lt;html&gt;</code>元素添加<code>window-blurbehind</code>属性设置窗口为半透明Area窗口(vista以上支持)。</p> 
   <h2><code>window-resizable</code></h2> 
   <p>从3.3.2.13版本开始新增的属性，用于替代<code>resizeable</code>。根<code>&lt;html&gt;</code>元素添加<code>window-resizable</code>属性可以使窗口大小可调整(resizeable)(WS_THICKFRAME)。</p> 
   <h2>窗口边框元素</h2> 
   <p>在自定义窗口中，有一些元素可以有<code>role</code>属性，它可以有以下值:</p> 
   <ul> 
    <li><strong>role=window-close</strong> – 关闭按钮</li> 
    <li><strong>role=window-icon</strong> – 窗口图标按钮</li> 
    <li><strong>role=window-minimize</strong> – 最小化按钮</li> 
    <li><strong>role=window-maximize</strong> – 最大化/还原按钮</li> 
    <li><strong>role=window-caption</strong> – 窗口标题元素 – 用户可以在它之上按住鼠标来拖动窗口。</li> 
    <li><strong>role=window-body</strong> 或 <code>&lt;body&gt;</code> – 在 <code>&lt;html&gt;</code>元素与body元素之间的区域(四边)被用于窗口大小的调整区域，当用户鼠标停留在该区域时，光标会变成窗口改变光标。</li> 
   </ul> 
   <p>在Windows中，上面这些元素的处理是在窗口的WS_NCHITTEST消息中处理的。</p> 
  </div>