# 视图(View)对象

<p>代表该脚本执行的所在窗口。</p>
  <p><strong>view</strong> - 当前的视图对象(或运行脚本)通过使用全局的<em>view</em>变量。</p>
  <dl>
    <dt>WINDOW_MINIMIZED<br/>WINDOW_MAXIMIZED<br/>WINDOW_HIDDEN<br/>WINDOW_SHOWN<br/>WINDOW_FULL_SCREEN</dt>
    <dd><em>view.state</em>的值。</dd>
    <h2>属性</h2>
    <dt>root</dt>
    <dd><font color="#999999">只读 - </font><em>Element</em>, 被加载到视图中的文档的根元素。</dd>
    <dt>windowState</dt>
    <dd><font color="#999999">读写</font> - 视图的窗口的状态。仅适用于顶层框架窗口(非子窗口)。 可接受的值: <code>View.WINDOW_MINIMIZED,</code> <code>View.WINDOW_MAXIMIZED</code>, <code>View.WINDOW_HIDDEN</code>, <code>View.WINDOW_SHOWN</code> 或 <code>View.WINDOW_FULL_SCREEN</code>.</dd>
    <dt>focus</dt>
    <dd><font color="#999999">读写</font> - <em>Element</em>, 当前获取输入角度的元素。若要设置一个新元素为聚焦状态，请使用view.focus = el;</dd>
    <dt>eventsRoot</dt>
    <dd>
      <div><font color="#999999">读写</font> - <em>Element</em>, &quot;事件根&quot;元素。用于&quot;模态文档循环&quot;的实现。如果设置了该属性，则所有不是该元素后代的元素的UI事件都会传输到该元素。设置了该元素可能会导致当前聚焦元素改变。下面是一个典型的模态文档循环：</div>
      <pre v-pre><code>
view.<u>eventsRoot</u> = dlg;
while (dlg.isVisible) view.<u>doEvent</u>();
dlg.style#display = &quot;none&quot;;
view.<u>eventsRoot</u> = null;
</code></pre></dd>
    <dt>screen</dt>
    <dd><font color="#999999">只读</font> - integer, 该窗口位于的屏幕数量。</dd>
    <dt>screens</dt>
    <dd><font color="#999999">只读</font> - integer, 系统中的屏幕(监视器)数量。</dd>
    <dt>windowCaption</dt>
    <dd><font color="#999999">读写</font> - string, 窗口标题。</dd>
    <dt>windowAspectRatio</dt>
    <dd><font color="#999999">r/w</font> - float | null,这个窗口的客户区域的缩放比例;</dd>
    <dt>windowResizable</dt>
    <dd><font color="#999999">r/w</font> - boolean, 如果窗口可被用户调整尺寸，则返回<em>true</em>;</dd>
    <dt>windowMinimizable</dt>
    <dd><font color="#999999">r/w</font> - boolean, 如果窗口有最小化按钮(可被用户手动最小化)则返回<em>true</em>;</dd>
    <dt>windowMaximizable</dt>
    <dd><font color="#999999">r/w</font> - boolean, 如果窗口有最大化按钮(可被用户手动最大化)则返回<em>true</em>;</dd>
    <dt>windowTopmost</dt>
    <dd><font color="#999999">r/w</font> - boolean, 如果窗口在最顶层，则返回<em>true</em>;</dd>
    <dt>windowMinSize</dt>
    <dd><font color="#999999">r/w</font> - (x:integer,y:integer), 最小窗口尺寸的限制。用户不能使窗口小于这个值;<br/>
	示例: <code>view.windowMinSize = (160,100);</code></dd>
    <dt>windowMaxSize</dt>
    <dd><font color="#999999">r/w</font> - (x:integer,y:integer), 最大窗口尺寸的限制。用户不能使窗口大于这个值;<br/>
	示例: <code>view.windowMaxSize = (1600,1000);</code></dd>
    <dt>windowIcon</dt>
    <dd><font color="#999999">r/w</font> - 窗口图标, 该属性可接受的值: <code>null</code> - 设置默认图标; <code>&quot;url&quot;</code> - string, 窗口图标的url; code>Image</code>对象实例.</dd>
    <dt>windowBlurbehind</dt>
    <dd><font color="#999999">r/w</font> - 窗口模糊特效, 该属性接受以下值: <code>#auto</code> | <code>#ultra-dark</code> | <code>#dark</code> | <code>#light</code> | <code>#ultra-light</code> | <code>#none</code>。 如果设置了该标志，则window窗口将是半透明的。根文档元素应该使用<code>html { background:transparent; }</code>以便看到窗口后面的桌面。</dd>
    <h2>方法</h2>
    <dt><strike>this</strike></dt>
    <dd>(不可用)</dd>
    <dt>load</dt>
    <dd>
      <div><strong>(</strong><em>url</em>:string[, <em>now</em>: bool]<strong>)</strong> : true/false</div>
      <p>该方法从给定的<em>url</em>加载一个新文档(替换当前这个)到当前视图中。如果<em>now</em>为<em>true</em>则该方法在同步地加载文档——在文档下载并加载到视图后返回。</p></dd>
    <dt>load</dt>
    <dd>
      <div><strong>(</strong><em>stream</em>:Stream<strong>)</strong> : true/false</div>
      <p>该方法从给定的内存流<em>stream</em>中加载新的文档(替换当前这个)到当前视图中。</p></dd>
    <dt>box</dt>
    <dd>
      <div><strong>( </strong><em>part</em> [, <em>edge</em> [, <em>relativeTo</em> ]] <strong>) </strong>returns: integer, device pixels</div>
      <p>返回视图的边缘的坐标。参数：</p>
      <ul>
        <li><strong>part</strong> - <strong>#left</strong>, <strong>#top</strong>, <strong>#right</strong>, <strong>#bottom</strong>, <strong>#width</strong>, <strong>#height</strong>中定义的常量标识符之一。定义返回盒(矩形)的哪一部分。#part还可以接受以下常量：</li>
        <ul>
          <li><strong>#rect</strong> - (x1,y1,x2,y2), <em>默认</em>;</li>
          <li><strong>#rectw</strong> - (x,y,width,height);</li>
          <li><strong>#position</strong> - (x,y)<em>,</em></li>
          <li><strong>#dimension</strong> - (width,height)<em>,</em></li></ul>
        <li><strong>edge</strong>, 以下常量之一:</li>
        <ul>
          <li><strong>#border</strong> - 边框盒的边缘 - 操作系统窗口边框的边界,</li>
          <li><strong>#client</strong> - 客户区域的边缘<em>,</em></li></ul>
        <li><strong>relativeTo</strong>, 以下常量之一:</li>
        <ul>
          <li><strong>#screen</strong> - 返回现对于屏幕原点的坐标,</li>
          <li><strong>#self</strong>, <em>默认值</em> - 相对于视图客户区域原点的坐标。</li></ul></ul></dd>
    <dt>screenBox</dt>
    <dd>
      <div><strong>( </strong>[<strong>screenNo:</strong> integer,]<em> </em><strong>area</strong> [, <strong>part</strong> ] <strong>) </strong>returns: integer, device pixels</div>
      <p>返回在累计桌面空间(cumulative desktop space)上的屏幕(监视器)投影。参数：</p>
      <ul>
        <li><strong>area</strong>，以下值之一：
          <ul>
            <li><strong>#frame </strong>- 显示器屏幕尺寸, </li>
            <li><strong>#workarea</strong> - 显示器工作区域(除去任务/菜单栏后的尺寸)。设备像素。</li>
            <li><b>#snapshot</b> - 返回<i>Image</i> - 显示器指定部分的截图;</li>
            <li><b>#isPrimary</b> - 返回<i>true</i> 当显示器为主显示器时;</li>
            <li><b>#device</b> - 返回<i>string</i> - 显示器的名称;</li>
          </ul>
        </li>
        <li><strong>part</strong>, 以下值之一:</li>
        <ul>
          <li><strong>#rect</strong> - (x1,y1,x2,y2);</li>
          <li><strong>#rectw</strong> - (x,y,width,height), <em>默认</em>;</li>
          <li><strong>#position</strong> - (x,y)<em>,</em> 屏幕在所有显示器合并的区域内的位置;</li>
          <li><strong>#dimension</strong> - (width,height)<em>,屏幕的宽高；</em></li></ul>
        <li><strong>screenNo - </strong>integer, 可选参数。如果提供者提供指定屏幕的度量。如果省略则提供这个窗口的屏幕的度量。</li></ul></dd>
    <dt>move</dt>
    <dd>
      <div><strong>( </strong><em>x</em>:int, <em>y</em>:int [, <em>clientCoordinates</em>: true | false]<strong> ) </strong>:void</div>
      <p>调整屏幕上的视图(对话框或框架)的窗口位置。该方法仅适用于Sciter。</p>
      <p>如果<em>clientCoordinates</em>为<em>true</em>，则x、y被理解成期望的屏幕上客户区域的位置。</p></dd>
    <dt>move</dt>
    <dd>
      <div><strong>( </strong><em>x</em>:int, <em>y</em>:int, <em>width</em>:int, <em>height</em>:int [, <em>clientCoordinates</em>: true | false] <strong> ) </strong>:void</div>
      <p>调整屏幕上的视图(对话框或框架)的窗口位置和尺寸。该方法仅适用于Sciter。</p>
      <p>如果<em>clientCoordinates</em>为<em>true</em>，则x、y、<em>width</em>、<em>height</em>被理解成期望的屏幕上客户区域的位置/尺寸。</p></dd>
    <dt>mediaVar</dt>
    <dd>
      <div><strong>(</strong><i>name</i>:string [, <i>valueToSet</i>: any]<strong>)</strong> : value | undefined</div>
      <p>返回或设置指定的媒体变量。</p>
		</dd>
    <dt>mediaVars</dt>
    <dd>
      <div><strong>(</strong>[ <i>newVars</i>:object]<strong>)</strong> : Object | undefined</div>
      <p>如果没有<i>newVars</i>参数，则该方法返回当前视图使用的媒体变量集合。</p>
			<p>如果<i>newVars</i>参数是一个对象，则该方法将会根据该对象的属性来更新视图中的媒体变量。</p>
    </dd>
    <dt>selectFile</dt>
    <dd>
      <div><strong>(</strong> <em>#save</em> | <em>#open</em>| #open-multiple, <em>filter</em>:string , <em>ext</em>: string  [,<em>initialPath</em>:string[, <em>dialogCaption</em>:string]] <strong> ) </strong>: string | array(string) | null</div>
      <p>该方法显示系统的文件选择模态对话框，并且返回选择文件的全名，如果用户选择了取消则返回null。</p>
      <ul>
        <li>第一个参数为#save或#open标识符。如果为#save则对话框的标题为<em>保存</em>，如果为#open则对话框的标题为<em>打开</em>。</li>
        <li><em>filter</em>为一个字符串 - 为文件过滤器，它需要兴义一个以'|'字符分隔的文件扩展列表。格式：&quot;label1|file.ext1|label2|file.ext1|..&quot; 其中<em>label</em>是该项的显示标签(显示在对话框中的文件类型选择列表中)，file.ext是以';'分隔的文件名列表。</li>
        <li><em>ext</em>是一个字符串 - 默认的文件扩展名，用于用户输入的文件名没有扩展名时。</li>
        <li><em>initialPath</em>是一个字符串 - 默认的初始文件路径，用于设置对话框默认路径。</li>
        <li><em>dialogCaption</em>是一个字符串 - 对话框的标题文字。</li></ul>
      <div>下面的示例会弹出一个对话框来选择一个html文件，并且加载该文件到当前视图。：</div>
      <pre v-pre><code>
<font color="#0033cc">var</font> fn = view.<strong>selectFile</strong>(<font color="#0033cc">#open</font>,
       <font color="#009900">&quot;HTML Files (*.htm,*.html)|*.HTM;*.HTML|All Files (*.*)|*.*&quot;</font> , <font color="#009900">&quot;html&quot;</font> );
if( fn ) view.<strong>load</strong>(fn);
</code></pre></dd>
    <dt>selectFolder</dt>
    <dd>
    <div><strong>(</strong> [ <em>dialogCaption</em>:string, [<i>defaultFolder</i>:string]] <strong>) </strong>: string | null</div>
    <p>该方法显示系统的目录选择模态对话框，并且返回选择目录的全名，如果用户选择了取消则返回null。</p>
      <ul>
        <li><em>dialogCaption</em>设置选择对话框的标题</li>
        <li><i>defaultFolder</i> - string, 显示对话框时的默认目录</li>
      </ul>
        <div>注意：在不同的系统中，selectFolder有不同的UI。</div>
    </dd>
    <dt>selectPrinter</dt>
    <dd>TBD</dd>
    <dt>dialog</dt>
    <dd>
      <div><strong>( </strong><em>url</em>: string | <em>stream</em>: Stream [, <em>parameters</em>: any [, alignment: int = 5] ] <strong>В ) </strong>: <em>undefined</em> | 传递给对话框<em>close</em>方法的值。</div>
      <p>使用<em>url</em>或内存流<em>stream</em>指定的文档显示一个模态对话框。如果<em>parameters</em>参数指定了，则在对话框内HTML中的脚本可以使用<em>view.parameters</em>变量来访问这些参数。</p>
      <p><em>alignment:</em>1..9 - 窗口相对于屏幕的对齐方式, -1 .. -9 - 相对于父窗口的对齐方式, 请看键盘上的小键盘上数字的含义，例如，5意味的该对话框的中心点将放置在屏幕的居中位置。</p></dd>
    <dt>dialog</dt>
    <dd>
      <div><strong>( </strong>creationParams:object<strong> ) </strong>:<em>undefined</em> | 传递给对话框<em>close</em>方法的值。</div></div>
      <p>另一种使用一个参数的显示模态对话框的方式。</p>
      <div><em>creationParams</em>参数是一个对象，它可以包含以下字段：</div>
      <ul>
        <li><em>url</em> - string, 加载到窗口中的文档的url;</li>
        <li><em>html</em> - string, 加载到窗口中的内容。<em>url</em>或者<em>html</em>必须提供其中之一;</li>
        <li><em>x,y, width, height </em>- integers, 窗口的尺寸。如果省略则会根据文档的内在尺寸自动计算;</li>
        <li><em>client</em> - true | false, 如果为true,则上面的x,y, width, height为客户区域(而不是窗口盒)的坐标;</li>
        <li><em>parameters</em> - object, 传递的参数，它会放到新创建窗口的<em>view.parameters</em>变量中;</li>
        <li><em>caption</em> - string, 窗口标题;</li>
        <li><em>alignment</em> - integer, 1..9 - 窗口相对于屏幕的对齐方式, -1 .. -9 - 相对于父窗口。</li>
        <li><em>screen</em> - integer, 0 .. View.screens - 1, 如<em>alignment</em>是1..9则它决定窗口会在哪个屏幕/监视器上显示，可选参数。</li></ul>
		 <p>如果指定了<em>x</em>、<em>y</em>、<em>alignment</em>参数，则x、y定义一个引用点，alignment定义与引用点的相对位置。</p></dd></dd>
    <dt>msgbox</dt>
    <dd>
      <div><strong>( </strong><em>type</em>:symbol,<strong> </strong><em>text</em>: string, [ <em>title</em>: string, [ <em>buttons</em> [, <em>onLoad</em>: function [, <em>onClose</em>: function ]]]] <strong>) </strong>: <em>undefined</em> | 关闭对话框时的按钮标识符。</div>
      <ul>
        <li><em>type</em> - symbol, <strong>#alert</strong>, <strong>#information</strong>, <strong>#question</strong> or <strong>#warning</strong>值之一;</li>
        <li><em>text</em> - string, 纯文本或html;</li>
        <li><em>title</em> - string, 对话框窗口的标题;</li>
        <li><em>buttons</em> - 定义按钮数组，以下值之一:</li>
        <ul>
          <li><strong>#ok</strong>, <strong>#cancel</strong>, <strong>#abort</strong>, <strong>#ignore</strong>, <strong>#yes</strong>, <strong>#no</strong> or <strong>#close</strong>标签之一, </li>
          <li>类<font face="Courier New">{ id:#somesymbol, text:&quot;Some Text&quot; }</font>结构的对象,</li>
          <li>上面的标识符或对象的数组;</li></ul>
        <li><em>onClose</em> - 签名为<code>function(root, id)</code>，返回<em>true</em>|<em>false</em>。在尝试关闭对话框时调用该函数。 <em>id</em> - 按下的按钮的id, <em>root</em> - 对话框中文档的根节点。如果对话框可以关闭则该函数应该返回true。</li>
        <li><em>onLoad</em> - 函数签名为<code>function(root)</code>。在创建对话框窗口时调用该函数。使用该函数你可以做一些初始化，例如<em>text</em>是一个包含输入框的html，可以填充输入只读的数据。</li></ul>
      <div>示例:</div>
      <ol>
        <li><code>view.msgbox(#information, &quot;I am fine!&quot;);</code> - 将会显示一个简单消息;</li>
        <li><code>view.msgbox(#question, &quot;Be or not to be?&quot;, &quot;Huh?&quot;, <br/>[ {id:#yes, text:&quot;To be&quot;}, {id:#no, text:&quot;Not to be&quot;} ] );</code></li>
        <li><code>view.msgbox {type: #question, content: &quot;Be or not to be?&quot;, title: &quot;Huh?&quot;, buttons: [ {id:#yes, text:&quot;To be&quot;}, {id:#no, text:&quot;Not to be&quot;} ] };</code></li></ol></dd>
    <dt>window</dt>
    <dd>
      <div><strong>( </strong>params:object<strong> ) </strong>:<em>View</em> - 创建的窗口的视图对象。</div>
      <p>创建单独的窗口。</p>
      <div><em>params</em>是一个对象，它可以包含以下字段:</div>
      <ul>
        <li><em>type</em> - int, 窗口类型，<strong>View.FRAME_WINDOW</strong>、 <strong>View.TOOL_WINDOW</strong>、<strong>View.POPUP_WINDOW</strong>中之一;</li>
        <li><em>url</em> - string, 加载到该窗口的文档的url;</li>
        <li><em>html</em> - string, 加载到窗口的内容。<em>url</em>或者<em>html</em>必须提供其中之一;</li>
        <li><em>x,y, width, height </em>- integers, 窗口的尺寸。如果省略则会根据所给的文档的内在尺寸来自动计算;</li>
        <li><em>client</em> - true | false, 如果为true,则上面的x,y, width, height为客户区域(而不是窗口盒)的坐标;</li>
        <li><em>state</em> - integer. 窗口的初始状态，<strong>View.WINDOW_SHOWN</strong>、 <strong>View.WINDOW_HIDDEN</strong>、<strong>View.WINDOW_MINIMIZED</strong>、 <strong>View.WINDOW_MAXIMIZED</strong>、<strong>View.WINDOW_FULL_SCREEN</strong>其中之一;</li>
        <li><em>parameters</em> - object, 传递的参数，它会放到新创建窗口的<em>view.parameters</em>变量中;</li>
        <li><em>caption</em> - string, 窗口标题;</li>
        <li><em>alignment</em> - integer, 窗口相对于屏幕的位置, -1 .. -9 - 相对于父窗口。</li>
        <li><em>screen</em> - integer, 0 .. View.screens - 1, 如果<em>alignment</em>是1..9，则该字段决定该窗口显示在哪个屏幕/监视器。可选参数。</li></ul>
      <p>要以脱离(detached)模式打开窗口( 当它的拥有窗口隐藏时，它依然停留在屏幕上 )，请调用这个方法的静态版本 - 使用<code>View</code>类，而不是<code>view</code>实例: <code>View.window(...)</code>。</p></dd>
    <dt>close</dt>
    <dd>
      <div><strong>( </strong>[<em>retval</em>: any]<strong> ) </strong>: undefined</div>
      <p>关闭当前视图(或对话框[如果它是对话框窗口])。 <em>retval</em>可以是任何脚本对象-<em>dialog</em>()函数的返回值。</p></dd>
    <dt>doEvent</dt>
    <dd>
      <div><strong>( </strong>[<em>#wait</em> | <em>#nowait</em> | <em>#all</em>] | #untilMouseUp<strong> )</strong> : undefined</div>
      <p>将程序控制权交给操作系统。该控制权在操作系统处理完它的事件队列中下一个事件后返回。该方法用于实现模态文档循环。</p>
      <p>参数:</p>
      <ul>
        <li><strong>#wait</strong> - 等待UI消息队列中的下一个事件，默认行为;</li>
        <li><strong>#nowait</strong> - 如果消息队列中有事件则处理它，否则立即返回;</li>
        <li><strong>#all</strong> - 执行消息队列中所有挂起的消息。如果没有消息则立即返回;</li>
        <li><strong>#untilMouseUp</strong> - &quot;短路&quot;, 执行和分派消息直到接收到MOUSE_UP事件，用于拖动的情况下;</li></ul></dd>
    <dt>update</dt>
    <dd>
      <div><strong>()</strong> : undefined</div>
      <p>执行视图中挂起的所有修改，并且渲染到屏幕上。在调用该方法后，所有DOM元素的盒坐标是是有效的。</p>
      <p>该方法用于当你需要提交所有的对DOM的更新时。示例:</p>
      <pre v-pre><code>
function retrieveDataFromDB(recordSet)
{
  while(!recordSet.EOF())
  {
    grid.appendRow(recordSet.row);
    if(++numRowsAdded &gt; 10)
    {
      numRowsAdded = 0;
      view.update();
    }
  }
}
</code></pre></dd>
    <dt>clipboard</dt>
    <dd>
      <div><strong>(</strong><em>callback</em>: function<strong>)</strong> : undefined</div>
      <p>为系统剪切板中的每个数据格式调用<em>callback</em>函数。callback函数的签名:<code>function ( </code><em><code>dataType</code></em><code>: symbol ) {...}</code>, dataType是以下标识符之一:</p>
      <ul>
        <li><strong>#text</strong> - text/plain, 字符串;</li>
        <li><strong>#html</strong> - text/html, 字符串;</li>
        <li><strong>#picture</strong> - bitmap image, 类型为Image的对象;</li>
        <li><strong>#url</strong> - url or link,  <code>{ <em>url</em>: string , <em>caption</em>: string }</code>结构的对象;</li>
        <li><strong>#json</strong> - JSON data, 对象。这时返回值为整数 - 剪贴板上的序列号。剪贴板缓冲每次改变会修改这个号码。</li>
      </ul></dd>
    <dt>clipboard</dt>
    <dd>
      <div><strong>(#get</strong>, <em>dataType</em>: symbol<strong>)</strong> : string | object | Image;</div>
      <p>获取dataType定义的剪切板格式的数据。dataType允许的值请参考上一个方法的定义。</p>
      <p>注意: 对于 <strong>#html</strong>格式，该函数返回两个值: 源url(如果存在)和HTML数据本身。<br/>若要获取这两个值，请使用: <code>var (url, html) = view.clipboard(#get, #html);</code></p></dd>
    <dt>clipboard</dt>
    <dd>
      <div><strong>(#put</strong>, data: string | object | Image <strong>)</strong> : undefined;</div>
      <p>将数据存储到剪切板。当data是一个对象时，它应该具有以下结构，其中除任何属性外，所有属性都是可选的: </p>
			<pre v-pre><code>{
   text: &quot;some text&quot;,
   html: &quot;&lt;b&gt;some html&lt;/b&gt;&quot;,
   link: { caption: &quot;some text&quot;, url: &quot;file://some ...&quot; },
   file: [ &quot;path1&quot;,  &quot;path2&quot;, ...],
   json: someData
}  </code></pre>
    <p>请注意：<i>json</i>剪切板格式是Sciter独有的。你可以将它在Sciter应用程序之前进行传递。</p>
		<p>你可以一次设置多种数据项(比如一起设置<i>text</i>和<i>html</i>格式)。目标程序将会根据当前上下文情况从中选择最适合的格式。</p></dd>
    <dt>focusable</dt>
		<dd>(<b>#next | #prior | #first | #last</b>, [<b>from</b>:Element]) : Element
    <p>该方法返回TAB序列中next/previous/first/last焦点元素, 既可以从<i>from</i>元素，也可以从当前焦点元素开始查找。</p></dd>
    <dt>performDrag</dt>
    <dd>
        （(<strong>element</strong>:Element | <b>img</b>: Image, <b>xOffset</b>: integer, <b>yOffset</b>: integer), <strong>data</strong>:Object, ddMode: <strong>#any</strong> | <strong>#copy</strong> | <strong>#move</strong>) : <strong>null</strong> | <strong>#copy</strong> | <strong>#move</strong>
        <p>执行系统拖拽操作。</p>
        <p><em>element</em> 是一个DOM元素，它用于作为一个拖拽图像。</p>
        <p><em>data</em> 是一个对象，它包含以下属性：</p>
        <ul>
            <li><code>{text: String}</code> - 纯文本字符串;</li>
            <li><code>{html: String | Element}</code> - html, 可以是一个字符串或指元素的外部HTML(outer HTML);</li>
            <li><code>{file: String | [String, String, ...]}</code> - 拖拽的单个文件名或文件名列表;</li>
            <li><code>{link: String | { caption: &quot;some text&quot;, url: &quot;file://some ...&quot; } }</code> - 一个url字符串或caption/url对;</li>
            <li><code>{json: value}</code> - 可以序列化为JSON字符串的任意的值。JSON可以用于在不同的Sciter窗口之间传递数据。</li>
        </ul>
        <p><em>data</em>对象可以包含多个属性, 目标会根据场景选择不同的数据。</p>
        <p><em>ddMode</em>定义拖拽(drag-n-drop)操作允许的类型:</p>
        <ul>
            <li><strong>#copy</strong> - 从源位置拷贝到目标位置;</li>
            <li><strong>#move</strong> - 从源位置移动到目标位置;</li>
            <li><strong>#any</strong> - 即可移动也可拷贝。</li>
        </ul>
        <p><code>performDrag()</code>是一个阻塞操作 - 该函数在拖拽(drag-n-drop)操作完成或被拒绝时返回。</p>
    </dd>
    <dt>cursorLocation</dt>
    <dd>
      <div><strong>(</strong> <strong>)</strong> : (x:int, y: int)</div>
      <p>返回光标相对于视图客户区的位置:<br/><code>var (x,y) = view.cursorLocation();</code></p></dd>
    <dt>on</dt>
    <dd>
      <div><strong>(</strong> <strong>nameandns</strong>: string, <strong>handler</strong>: function <strong>)</strong> : view</div>
      <p>将<em>handler</em>绑定到视图(窗口)上的相关事件上。</p>
      <p><em>nameandns</em> - <a href="#event-names">事件名称</a>中的值之一，可以包含任意的名称空间，格式：&quot;name.namespace&quot;。 </p></dd>
    <dt>off</dt>
    <dd>
      <div><strong>(</strong> <strong>eventname</strong>: string | <strong>handler</strong>: function <strong>)</strong> : view</div>
      <p>根据eventname事件名或handler事件处理器本身来解除事件绑定。</p>
      <p>eventname这里可以是&quot;name&quot;、&quot;name.namepsace&quot;、&quot;.namepsace&quot;。 示例:</p>
      <pre v-pre><code>view.off(&quot;.mymodule&quot;);</code></pre>
      <p>会解除下面代码定义的所有事件处理器：</p>
      <pre v-pre><code>view.on(&quot;move.mymodule&quot;,foo)
    .on(&quot;size.mymodule&quot;,foo);</code></pre>
	</dd>
    <dt>request</dt>
    <dd>
      <div><strong>( </strong><em>params</em>: object<strong>) </strong>: <em>undefined</em>.</div>
      <p>发送HTTP请求。<em>params</em>为请求参数对象，它可以包含以下字段：</p>
      <ul>
        <li><strong>type</strong> - <em>symbol</em>, HTTP的Action, 可以为: <strong>#get</strong>、<strong>#post</strong>、<strong>#put</strong>、<strong>#delete</strong>, 默认: #get ;</li>
        <li><strong>url</strong> - string, url;</li>
        <li><strong>protocol</strong> - <em>symbol</em>, 可以为：<strong>#basic</strong>, <strong>#multipart</strong> and <strong>#json</strong> &nbsp;;</li>
        <li><strong>params</strong> - <em>object</em>, HTTP请求参数;</li>
        <li><strong>headers</strong> - <em>objec</em>t, 添加的HTTP请求头;</li>
        <li><strong>success</strong> - <em>function(data,status)</em>, 请求成功时的回调函数;</li>
        <li><strong>error</strong> - <em>function(err,status)</em>, 请求出错时的回调函数;</li>
        <li><strong>complete</strong> - <em>function(data or err,status)</em>, 请求完成(无论成功或失败)时的回调函数;</li>
        <li><strong>progress</strong> - <em>function(bytesReceived, totalBytes)</em>, 在每次接收到数据块时被调用。<em>bytesReceived</em>是一个整数 - 到目前为止接收到的字节数量。<em>totalBytes</em>是一个整数 - 从HTTP的&quot;content-length&quot;字段获取的服务端总大小，如果服务器没有报告它，<em>totalBytes</em>可以为<em>undefined</em>。</li>
        <li><strong>toFile - </strong><em>string</em>, 响应的保存文件名，该文件名应该包含路径。可用于文件下载。</li>
        <li><strong>proxyHost</strong>, <strong>proxyPort</strong> - <em>string</em>, <em>integer</em>.如果定义了这两个参数，则请求将会通过定义的代理主机发送。</li>
        <li><strong>output</strong> - symbol, 值可以是<strong>#string</strong> | <strong>#stream</strong> | <strong>#bytes</strong> | <strong>#json</strong>其中之一。如果指定了该参数，则强制报告<em>data</em>为String、Stream、Bytes或任意已解析的JSON的实例。</li>
        <li><b>noCache</b> - true | false, 如果为<i>true</i>，则请求将不会从缓存中读取，也不会将请求响应结果写到缓存中。</li></ul>
      <div>示例: <u>sdk/samples/communication/file-download.htm</u>和<u>sdk/samples/communication/http.tis</u></div></dd></dl>
  <h2>通知事件</h2>
	<dl>
    <dt>onRequest(rq: <a href="Request.htm">Request</a>)</dt>
		  <dd>当在view上定义了该方法后，它将在请求执行前被调用。这个处理器可以调用<code>rq.fulfill()</code>来为请求提供数据;</dd>
		<dt>onRequestResponse(rq: <a href="Request.htm">Request</a>)</dt>
		  <dd>这个方法在请求完成(成功或失败)时被调用。</dd></dl>
  <h2>视图事件</h2>
  <p>视图对象可使用<code>view.on(eventname, handler)</code>将事件绑定到视图:</p>
  <ul>
    <li>eventname - 下面的视图事件中的事件名之一，可以包含任意的名称空间，格式：&quot;name.namespace&quot;。</li>
    <li>handler - 事件发生时调用的函数。</li></ul>
  <h3 id="event-names">事件名称</h3>
  <dl>
    <dt>&quot;size&quot;</dt>
    <dd>当视图(窗口)的尺寸被改变时触发。使用view.box()方法可获取该尺寸。</dd>
    <dt>&quot;sizing&quot;</dt>
    <dd>当用户正在调整窗口尺寸的时候触发。事件处理函数的签名应该为: <code>function(sizingParams)</code>，其中<code>sizingParams</code>是一个对象，它的结构为：<code>{ x:integer, y:integer, width:integer, height: integer, side: 1...9 }</code>，<code>side</code>是修改窗口尺寸拖拽的窗口边/角。</dd>
    <dt>&quot;move&quot;</dt>
    <dd>当视图(窗口)的位置发生改变时触发。使用view.box()方法可获取该尺寸或位置。</dd>
    <dt>&quot;moving&quot;</dt>
    <dd>当拖拽窗口标题移动窗口时被触发。事件处理函数的签名应该为: <code>function(movingParams)</code>，其中<code>movingParams</code>是一个对象，它的结构为：<code>{ x:integer, y:integer, width:integer, height: integer }</code>，事件函数可以修改这个对象的属性来重新调整窗口的移动。</dd>
    <dt>&quot;statechange&quot;</dt>
    <dd>当视图的状态(最大化、最小化、隐藏、显示)被改变时触发。见View<em>.state</em>属性。</dd>
    <dt>&quot;resolutionchange&quot;</dt>
    <dd>当窗口的PPI(每英寸像素比例因子)被改变时触发。若要获取精确的每英尺像素数，请使用：<br/><code>var ppdip = (1dip).toFloat(#px);</code></dd>
	<dt>&quot;mediachange&quot;</dt>
    <dd>当媒体被改变(包括resolutionchange)时触发，例如当监视器数量或颜色深度改变时。</dd>
    <dt>&quot;replacement-start&quot;</dt>
    <dd>当用户开始通过UI操作(如拖动它的标题)替换(移动 和/或 调整尺寸)窗口时触发。</dd>
    <dt>&quot;replacement-end&quot;</dt>
    <dd>当用户完成通过UI操作(如拖动它的标题)替换(移动 和/或 调整尺寸)窗口时触发。</dd>
    <dt>&quot;activate&quot;</dt>
    <dd>当Sciter窗口激活状态改变时被触发。事件处理函数可以有<em>mode</em>参数，它可以接受以下值：
      <ul>
        <li><strong>false</strong> - 窗口处于未激活状态;</li>
        <li><strong>true</strong> - 窗口处于激活状态，但是鼠标不在该窗口上;</li>
        <li><strong>#by-mouse</strong> - 窗口是被鼠标点击来激活的。</li></ul></dd>
    <dt>&quot;closing&quot;</dt>
    <dd>该事件是view(窗口)关闭序列的一部分, 在view的文档被销毁前被触发。</dd>
    <dt>&quot;close&quot;</dt>
    <dd>view (window)的最后一个事件, 在view (window)被销毁后立即被触发。</dd>
  </dl>