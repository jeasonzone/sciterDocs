# 事件(Event)对象

<p>代表用户交互事件。事件和相对应的事件处理器定义在<a href="Events.htm">事件</a>中。</p>
  <dl>
    <h2>常量</h2>
    <h3>事件组代码(用于Element.subscribe()方法)</h3>
    <dt>MOUSE</dt>
    <dd>鼠标事件组</dd>
    <dt>KEY</dt>
    <dd>键盘事件组</dd>
    <dt>FOCUS</dt>
    <dd>焦点事件组</dd>
    <dt>BEHAVIOR_EVENT</dt>
    <dd>被特定的行为生成(或组合成)的事件组，如(BUTTON_CLICK、EDIT_VALUE_CHANGING等)</dd>
    <dt>SCROLL</dt>
    <dd>滚动事件组</dd>
    <dt>SIZE</dt>
    <dd>尺寸事件组(目前只有一个事件：onSize)</dd>
    <h3>鼠标事件代码</h3>
    <dt>MOUSE_ENTER</dt>
    <dd>事件的类型，鼠标进入元素。</dd>
    <dt>MOUSE_LEAVE</dt>
    <dd>事件的类型，鼠标离开元素。</dd>
    <dt>MOUSE_MOVE</dt>
    <dd>事件的类型，鼠标在元素上移动。</dd>
    <dt>MOUSE_DOWN</dt>
    <dd>事件的类型，鼠标按钮在元素上按下。</dd>
    <dt>MOUSE_UP</dt>
    <dd>事件的类型，鼠标按钮在元素上按起。</dd>
    <dt>MOUSE_CLICK</dt>
    <dd>事件的类型，鼠标按钮在元素上单击。</dd>
    <dt>MOUSE_DCLICK</dt>
    <dd>事件的类型，鼠标按钮在元素上双击。</dd>
    <dt>MOUSE_WHEEL</dt>
    <dd>事件的类型，鼠标按钮在元素上滚动滚轮。</dd>
    <dt>MOUSE_TICK</dt>
    <dd>事件的类型，鼠标在元素上按下或按起。</dd>
    <dt>MOUSE_IDLE</dt>
    <dd>事件的类型，鼠标脉冲事件。当鼠标在元素上右一段事件没有按下或移动时会发送该消息。默认的该事件触发气泡提示。</dd>
    <dt>MOUSE_DRAG_REQUEST</dt>
    <dd>鼠标按下并且移动超过某个阈值后触发这个事件。当在&lt;input|text&gt;和&lt;textarea&gt;中拖动选择内容时会处理这个事件，如果要取消这个默认处理 - 请实现这个事件并返回true。</dd>
    <dt>DROP</dt>
    <dd>事件的类型，拖拽动作中元素被放下，target为被放下的元素。</dd>
    <dt>DRAG_ENTER</dt>
    <dd>事件的类型，被拖拽元素到达某个目标(target)元素上，该目标元素是当前可接受拖拽项的目标之一。</dd>
    <dt>DRAG_LEAVE</dt>
    <dd>事件的类型，被拖拽元素离开某个目标(target)元素上，该目标元素是当前即将离开的可接受拖拽项的目标之一。</dd>
    <dt>DRAG_REQUEST</dt>
    <dd>事件的类型，在被拖拽元素开始拖拽之前发生的源通知事件。要取消拖拽请在事件处理器中返回true。</dd>
    <h3>键盘事件代码</h3>
    <dt>KEY_DOWN</dt>
    <dd>事件的类型，当元素或它的子元素聚焦时按下了键盘按键。</dd>
    <dt>KEY_UP</dt>
    <dd>事件的类型，当元素或它的子元素聚焦时按起了键盘按键。</dd>
    <dt>KEY_CHAR</dt>
    <dd>事件的类型，当元素或它的子元素聚焦时按下了某个字符。</dd>
    <h3>滚动事件代码</h3>
    <dt>SCROLL_HOME</dt>
    <dd></dd>
    <dt>SCROLL_END</dt>
    <dd></dd>
    <dt>SCROLL_STEP_PLUS</dt>
    <dd></dd>
    <dt>SCROLL_STEP_MINUS</dt>
    <dd></dd>
    <dt>SCROLL_PAGE_PLUS</dt>
    <dd></dd>
    <dt>SCROLL_PAGE_MINUS</dt>
    <dd></dd>
    <dt>SCROLL_POS</dt>
    <dd></dd>
    <h3>手势(触摸屏)事件代码</h3>
    <dt>GESTURE_REQUEST</dt>
    <dd>引擎发送该消息来请求元素制成的手势。通过对Event.flags字段使用&quot;或&quot;操作来设置。下面是支持的标志/手势类型:
      <ul>
        <li><code>Event.GESTURE_FLAG_ZOOM</code> - 两手指缩放;</li>
        <li><code>Event.GESTURE_FLAG_ROTATE</code> - 两手指选择;</li>
        <li><code>Event.GESTURE_FLAG_PAN_VERTICAL</code> - 垂直滑动或平移;</li>
        <li><code>Event.GESTURE_FLAG_PAN_HORIZONTAL</code>- 水平滑动或平移;</li>
        <li><code>Event.GESTURE_FLAG_TAP1</code> - 按住并点一下(Press and tap)手势;</li>
        <li><code>Event.GESTURE_FLAG_TAP2</code> - 两指点击(Two Finger tap);</li>
        <li><code>Event.GESTURE_FLAG_PAN_WITH_GUTTER</code> - PAN_VERTICAL and PAN_HORIZONTAL modifier - gutter.</li>
        <li><code>Event.GESTURE_FLAG_PAN_WITH_INERTIA</code> - PAN_VERTICAL and PAN_HORIZONTAL modifier - generate inertia events.</li>
        <li><code>Event.GESTURE_FLAGS_ALL</code> &nbsp;- 所有标志/事件</li></ul></dd>
    <dt>GESTURE_ZOOM</dt>
    <dd>缩放手势。 <code>Event.deltaV</code>字段是一个浮点数，当放大时，它&gt;1.0；当缩小是它&lt;1.0。</dd>
    <dt>GESTURE_PAN</dt>
    <dd>滑动/平移手势. <code>Event.deltaX</code>和<code>Event.deltaY</code>字段是整数值 - 在X、Y方向上的像素数。</dd>
    <dt>GESTURE_ROTATE</dt>
    <dd>旋转手势。<code>Event.deltaV</code>字段是角度增量(弧度)。</dd>
    <dt>GESTURE_TAP1</dt>
    <dd>按住并点一下(Press and tap)手势。</dd>
    <dt>GESTURE_TAP2</dt>
    <dd>两指点击(Two Finger tap)手势。
      <p>Event.flags字段在所有事件(除了GESTURE_REQUEST)总共是以下状态值的或操作集：</p>
      <ul>
        <li><code>Event.GESTURE_STATE_BEGIN</code> - 在手势事件序列中第一个事件已经&quot;on&quot;。</li>
        <li><code>Event.GESTURE_STATE_INERTIA</code> - 被惯性处理器(inertia processor)合成的事件已经&quot;on&quot;。</li>
        <li><code>Event.GESTURE_STATE_END</code> - 在手势事件序列中最后一个事件已经&quot;on&quot;</li></ul></dd>
    <h3>焦点事件代码</h3>
    <dt>LOST_FOCUS</dt>
    <dd></dd>
    <dt>GOT_FOCUS</dt>
    <dd></dd>
    <h3>逻辑事件代码(来自于内建行为)</h3>
    <dt>BUTTON_CLICK</dt>
    <dd></dd>
    <dt>BUTTON_PRESS</dt>
    <dd></dd>
    <dt>BUTTON_STATE_CHANGED</dt>
    <dd>复选/单选框状态被改变。(并非所有的<em>BUTTON_CLICK</em>事件都会修改这个状态。)</dd>
    <dt>EDIT_VALUE_CHANGING</dt>
    <dd></dd>
    <dt>EDIT_VALUE_CHANGED</dt>
    <dd></dd>
    <dt>SELECT_SELECTION_CHANGED</dt>
    <dd></dd>
    <dt>SELECT_STATE_CHANGED</dt>
    <dd></dd>
    <dt>HYPERLINK_CLICK</dt>
    <dd></dd>
    <dt>ACTIVATE_CHILD</dt>
    <dd></dd>
    <dt>POPUP_REQUEST</dt>
    <dd></dd>
    <dt>POPUP_READY</dt>
    <dd></dd>
    <dt>POPUP_DISMISSED</dt>
    <dd></dd>
    <dt>POPUP_DISMISSING</dt>
    <dd></dd>
    <dt>MENU_ITEM_ACTIVE</dt>
    <dd>鼠标经过菜单项事件。Event.target为该菜单项，Event.owner为菜单的引发者。</dd>
    <dt>MENU_ITEM_CLICK</dt>
    <dd>单机菜单项事件。Event.target为该菜单项，Event.owner为菜单的引发者。</dd>
    <dt>CONTEXT_MENU_REQUEST</dt>
    <dd>当上下文菜单需要显示时引擎会触发该事件。<code>evt.target</code>是鼠标右键点击的顶层元素。<code>evt.source</code> [读/写]是将要弹出的菜单元素。当处理该事件时你可以设置你自己的菜单元素到evt.source字段。</dd>
    <dt>CONTEXT_MENU_SETUP</dt>
    <dd>当上下文菜单找到时触发该事件。<code>evt.source</code>是该菜单元素，你可以修改它。</dd>
    <dt>VISUAL_STATUS_CHANGED</dt>
    <dd>当元素的可见性(<code>display</code>/<code>visibility</code> CSS属性)修改时触发该事件。该事件之后发送给该元素本身(不会进行冒泡)。</dd>
    <dt>DISABLED_STATUS_CHANGED</dt>
    <dd>当元素或者它的容器元素修改了它的禁用(disabled)状态是触发。</dd>
    <dt>TOOLTIP_REQUEST</dt>
    <dd>气泡提示的请求，该事件是在鼠标空闲(MOUSE_IDLE)期间触发的。<em>evt.source</em>中的元素是将要显示的气泡提示元素。你可以设置你自己的DOM元素到<em>evt.source</em>字段。若要取消其他提示，请设置<em>evt.source</em>为<em>null</em>，且事件处理函数返回<em>true</em>。</dd>
    <dt>DOCUMENT_COMPLETE</dt>
    <dd>当文档加载完成后触发——所有的外部资源加载完毕。<em>evt.target</em>为文档的根节点( <code>&lt;html&gt;</code> )。注意：即使某些外部资源未获取到最终也会触发该事件。那些未获取到资源的元素会在状态标识位中设置<code>:incomplete</code>标识。</dd>
    <dt>FORM_SUBMIT</dt>
    <dd>behavior:form从表单中的type=submit按钮检查到提交事件。<code>evt.data</code>字段是一个映射表对象，为发送到服务端的数据。你可以修改数据或通过返回<code>true</code>(事件被处理了)来放弃提交。Y</dd>
    <dt>FORM_RESET</dt>
    <dd>behavior:form从表单中的type=reset按钮检查到提交事件。 <code>evt.data</code>字段为设置到输入字段中的数据。</dd>
    <h3>事件标志位</h3>
    <dt>SINKING</dt>
    <dd>
      <div>事件派发方向。如果该标识被设置，则事件是从父元素派发到子元素。示例:</div>
      <pre v-pre><code>switch(evt.type)
{
   case Event.MOUSE_DOWN | Event.SINKING:
        // 在所有子元素之前处理
   case Event.MOUSE_DOWN:
        // 若所有子元素都没有处理，则在这里处理
}
</code></pre></dd>
    <dt>HANDLED</dt>
    <dd>
      <div>事件已被该元素的某些子元素或行为处理(事件处理函数返回<em>true</em>)。示例:</div>
      <pre v-pre><code>switch(evt.type)
{
   case Event.MOUSE_DOWN:
       // 在所有子元素之后，且它们都么有处理该事件。
   case Event.MOUSE_DOWN | Event.HANDLED:
       // 在所有子元素之后，且某些子元素处理了该事件。
}
</code></pre></dd>
    <h3>拖动模式</h3>
    <dt>DRAGGING_MOVE<br/> DRAGGING_COPY</dt>
    <dd>下面的<em>draggingMode</em>属性的值。</dd>
    <h3>虚拟按键代码 - KEY_DOWN和KEY_UP事件中keyCode的值</h3>
    <dd>
      <pre v-pre><code>VK_CANCEL   VK_BACK     VK_TAB      VK_CLEAR    VK_RETURN   VK_SHIFT    VK_CONTROL
VK_MENU     VK_PAUSE    VK_CAPITAL  VK_KANA     VK_HANGUL   VK_JUNJA    VK_FINAL
VK_HANJA    VK_KANJI    VK_ESCAPE   VK_CONVERT  VK_SPACE    VK_PRIOR    VK_NEXT
VK_END      VK_HOME     VK_LEFT     VK_UP       VK_RIGHT    VK_DOWN     VK_SELECT
VK_PRINT    VK_EXECUTE  VK_SNAPSHOT VK_INSERT   VK_DELETE   VK_HELP     VK_SLEEP
VK_NUMPAD0  VK_NUMPAD1  VK_NUMPAD2  VK_NUMPAD3  VK_NUMPAD4  VK_NUMPAD5  VK_NUMPAD6
VK_NUMPAD7  VK_NUMPAD8  VK_NUMPAD9  VK_MULTIPLY VK_ADD      VK_SEPARATOR VK_SUBTRACT
VK_DECIMAL  VK_DIVIDE   VK_F1       VK_F2       VK_F3       VK_F4       VK_F5
VK_F6       VK_F7       VK_F8       VK_F9       VK_F10      VK_F11      VK_F12
VK_F13      VK_F14      VK_F15      VK_F16      VK_F17      VK_F18      VK_F19
VK_F20      VK_F21      VK_F22      VK_F23      VK_F24
</code></pre>
      <p>示例:</p>
      <pre v-pre><code>switch(event.keyCode)
{
  case Event.VK_HOME: index = 0; break;
  case Event.VK_END: index = this.length - 1; break;
}
</code></pre></dd>
    <h2>属性</h2>
    <dt>type</dt>
    <dd><font color="#999999">只读 - </font><em>Integer</em>,事件的类型，其值为上面定义的常量之一。</dd>
    <dt>altKey</dt>
    <dd><font color="#999999">只读 - </font><em>true/false</em>, 如果ALT键被按下则返回true。该字段对应鼠标、键盘事件有效。</dd>
    <dt>ctrlKey</dt>
    <dd>只读 - <em>true/false</em>, 如果CTRL键被按下则返回true。该字段对应鼠标、键盘事件有效。</dd>
    <dt>shiftKey</dt>
    <dd>只读 - <em>true/false</em>, 如果SHIFT键被按下则返回true。该字段对应鼠标、键盘事件有效。</dd>
    <dt>shortcutKey</dt>
    <dd>r - <em>true/false</em>, 如果CTRL(Windows)或COMMAND (OSX)键被按下则返回true。该字段对应鼠标、键盘事件有效。如果你想以跨平台的方式处理键盘快捷命令时请使用使用这个属性。Windows系统中的CTRL+C 等同于OSX中的COMMAND+C。</dd>
    <dt>commandKey</dt>
    <dd>r - <em>true/false</em>, 如果Win(Windows)或COMMAND (OSX)键被按下则返回true。该字段对应鼠标、键盘事件有效。</dd>
    <dt>extendedKey</dt>
    <dd>r - <em>true/false</em>, 表示是否按下了扩展键, 比如101或102键盘中右边的ALT和CTRL键。</dd>
    <dt>mainButton</dt>
    <dd>只读 - <em>true/false</em>, 鼠标主按钮(通常是鼠标左键)是否按下。该字段对应鼠标事件有效。</dd>
    <dt>propButton</dt>
    <dd>只读 - <em>true/false</em>, 鼠标属性按钮(通常是鼠标右键)是否按下。</dd>
    <dt>buttons</dt>
    <dd>只读 - <em>integer</em>, 位标志，用于表示按下的鼠标按钮, 0x01 - 鼠标主(通常是左键)按钮, 0x02 - 鼠标右键, 0x04 - 鼠标中间按钮。</dd>
    <dt>target</dt>
    <dd>只读 - <em>Element</em>, 该事件的目标元素。</dd>
    <dt>reason</dt>
    <dd>读写 - <em>integer</em>, 控制事件代码的reason字段。</dd>
    <dt>keyCode</dt>
    <dd>读写 - integer, KEY_DOWN/KEY_UP事件的按键代码。KEY_CHAR事件的按下字符的代码点(codepoint)。</dd>
    <dt>group</dt>
    <dd>只读 - <em>symbol</em>, 事件组标识符，这里它是事件处理函数的标识符: #onMouse, #onKey, #onFocus等.</dd>
    <dt>wheelDelta</dt>
    <dd>只读 - integer, 鼠标滚轮&quot;脉冲&quot;事件 - 在onMouse/MOUSE_WHEEL事件中有效。值为-1或+1(取决于方向)。</dd>
    <dt>scrollPos</dt>
    <dd>只读 - <em>integer</em>, 在<em>SCROLL_POS</em>事件中的滚动位置。</dd>
    <dt>scrollAxis</dt>
    <dd>只读 - #vertical | #horizontal, 滚动条在滚动事件中的坐标轴。</dd>
    <dt>x</dt>
    <dd>只读 - <em>integer</em>, 鼠标事件中相对于元素本身(它的内容盒的原点)的x坐标。</dd>
    <dt>y</dt>
    <dd>只读 - <em>integer</em>, 鼠标事件中相对于元素本身(它的内容盒的原点)的y坐标。</dd>
    <dt>xRoot</dt>
    <dd>只读 - <em>integer</em>, 鼠标事件中相对于根元素(&lt;html&gt;)的x坐标。</dd>
    <dt>yRoot</dt>
    <dd>只读 -<em>integer</em>, 鼠标事件中相对于根元素(&lt;html&gt;)的y坐标。</dd>
    <dt>xView</dt>
    <dd>只读 - <em>integer</em>, 鼠标事件中相对于视图(窗口)的x坐标。</dd>
    <dt>yView</dt>
    <dd>只读 - <em>integer</em>, 鼠标事件中相对于视图(窗口)的y坐标。</dd>
    <dt>xScreen</dt>
    <dd>只读 - <em>integer</em>, 鼠标事件中相对于屏幕的x坐标。</dd>
    <dt>yScreen</dt>
    <dd>只读 -<em>integer</em>, 鼠标事件中相对于屏幕的y坐标。</dd>
    <dt>owner</dt>
    <dd>读写 - Element, MENU_ITEM_CLICK事件中该菜单的拥有者(引发者), 它也是Element.sendEvent方法的最后一个参数。</dd>
    <dt>isOnIcon</dt>
    <dd>只读 - true | false, 仅onMouse(evt)事件函数中有效。当鼠标在图标区域时返回true。元素的图标是指foreground、no-repeat的图像。</dd>
    <dt>dragging</dt>
    <dd>只读 - <em>Element</em>, <em>onMouse(evt)</em> 和 <em>onExchange(evt)</em> 事件函数有效。在onMouse()中是被拖动元素的引用。在onExchange()中是被拖动的数据。</dd>
    <dt>draggingMode</dt>
    <dd>只读 - <em>integer</em>, onMouse(evt)事件函数中有效。拖动模式 - Event.DRAGGING_MOVE或Event.DRAGGING_COPY——当前的拖动模式。</dd>
    <dt>draggingDataType</dt>
    <dd>只读 - symbol, &nbsp;<em>onExchange(evt)</em>事件函数中有效。以下值之一:
      <ul>
        <li><code>#text</code> - 纯文本</li>
        <li><code>#html</code> - html</li>
        <li><code>#url</code> - 超链接</li>
        <li><code>#file</code> - 文件列表</li>
        <li><code>#json</code> - JSON数据（符合sciter规范的JSON数据）</li></ul></dd>
    <dt>deltaV, deltaX, deltaY, flags</dt>
    <dd>- onGesture()事件函数中的特有字段。将上面的GESTURE_****值的说明。</dd></dl>
    <h2>Methods</h2>
    <dl>
    <dt>match</dt>
    <dd>(<strong>eventName</strong>:string [,<strong>selector</strong>:string]) : true | false
      <p>当事件含有<em>eventName</em>事件名且它的目标元素匹配<em>selector</em>选择器。<em>eventName</em>可以接受<a href="Event.htm#symbolic-event-names">符号事件名称</a>：</p></dd>    
    <dt>exchangeData</dt>
    <dd>() : array of symbols.
      <p>返回一个关联到exchange操作上的数据项类型的列表。这个列表是一个数组，它包含<code>#text</code>, <code>#html</code>, <code>#url</code>, <code>#file</code>, <code>#picture</code>或<code>#json</code>。</p></dd>
    <dt>exchangeData</dt>
    <dd>(<strong>dataType</strong>:symbol) : value
      <p>这个方法可以或安全到指定数据类型的数据:</p>
      <p><code>#text</code> - 返回字符串 - 拖拽文本;</p>
      <p><code>#html</code> - 返回(url,html)部分 - 被拖拽的HTML片段和HTML本身的url;</p>
      <p><code>#url</code> -  返回(caption,url)部分 - 标题和url本身;</p>
      <p><code>#file</code> - 返回文件名数组 - 被拖拽的文件路径列表;</p>
      <p><code>#picture</code> - 如果拖拽数据中包含一个图像，则返回Image对象;</p>
      <p><code>#json</code> - 返回一个值 - json值。</p></dd></dl>
  <h2 id="symbolic-event-names">符号事件名称</h2>
  <p>符号事件名称被<code>Element.subscribe(&quot;name&quot;, ...)</code>、<code>Element.on(&quot;name&quot;, ...)</code>、<code>Event.match(&quot;name&quot;, ...)</code>以及<code>event &quot;name&quot; (evt) {}</code>方法使用。</p>
  <dl>
    <dt>&quot;click&quot;</dt>
    <dd>- 按钮和超链接点击;</dd>
    <dt>&quot;dblclick&quot;</dt>
    <dd>- 鼠标双击;</dd>
    <dt>&quot;change&quot;</dt>
    <dd>- value值被用户修改;</dd>
    <dt>&quot;submit&quot;</dt>
    <dd>- 在form表单数据提交前触发表单提交事件;</dd>
    <dt>&quot;reset&quot;</dt>
    <dd>- 在form表单数据被重置前触发表单重置事件;</dd>
    <dt>&quot;expand&quot;</dt>
    <dd>- 当各种Bheavior展开(expand)项时被触发(如树视图插件),event.target即为展开的元素; </dd>
    <dt>&quot;collapse&quot;</dt>
    <dd>- 当各种Bheavior折叠(collapse)项时被触发(如树视图插件),event.target即为折叠的元素; </dd>
    <dt>&quot;statechange&quot;</dt>
    <dd>- UI状态修改。例如，当光标或选择位置改变时，behavior:textarea和behavior:richtext行为会触发该UI事件;</dd>
    <dt>&quot;contextmenu&quot;</dt>
    <dd>- 上下文菜单请求(鼠标右击或属性按键点击);</dd>
    <dt>&quot;animationstart&quot;</dt>
    <dd>- 动画生命周期事件 - 通知元素上的动画将要开始;</dd>
    <dt>&quot;animationend&quot;</dt>
    <dd>- 动画生命周期事件 - 通知元素上的动画将要结束;</dd>
    <dt>&quot;mediachange&quot;</dt>
    <dd>- Event.MEDIA_CHANGED, mediachange在运行时检查到显示设置/参数发生改变时被触发。仅当前视图(view)的根文档可以接收这个事件;</dd>
    <dt>&quot;contentchange&quot;</dt>
    <dd>- Event.CONTENT_CHANGED, 当元素的内容发生改变(增加或移除)时接收到这个事件;</dd>
    <dt>&quot;inputlangchange&quot;</dt>
    <dd>- Event.INPUT_LANGUAGE_CHANGED, 当用户改变了输入语言时，当前的聚焦元素收到这个事件。event.data是一个字符串 - ISO语言国家代码。</dd>
    <h4>鼠标(Mouse)事件</h4>
    <dt>&quot;mousedown&quot;</dt>
    <dd>- Event.MOUSE_DOWN 事件; </dd>
    <dt>&quot;mouseup&quot;</dt>
    <dd>- Event.MOUSE_UP 事件;</dd>
    <dt>&quot;mousemove&quot;</dt>
    <dd>- Event.MOUSE_MOVE 事件;</dd>
    <dt>&quot;mouseenter&quot;</dt>
    <dd>- Event.MOUSE_ENTER 事件,鼠标进入该元素内。</dd>
    <dt>&quot;mouseleave&quot;</dt>
    <dd>- Event.MOUSE_LEAVE 事件, 鼠标离开该元素。</dd>
    <dt>&quot;mousedragrequest&quot;</dt>
    <dd>- Event.MOUSE_DRAG_REQUEST 事件, 拖动操作(鼠标按下并且移动)被检查到时触发。</dd>
    <h4>焦点(Focus)事件</h4>
    <dt>&quot;focusin&quot;</dt>
    <dd>- Event.FOCUS_IN, 焦点进入事件，当元素或它内部的元素获取到焦点时触发该事件。如果焦点依然停留在容器元素内部，则容器元素不会接收到这个事件。</dd>
    <dt>&quot;focusout&quot;</dt>
    <dd>- Event.FOCUS_OUT, 焦点离开事件，当元素或它内部的元素失去到焦点时触发该事件。如果焦点依然停留在容器元素内部，则容器元素不会接收到这个事件。</dd>
    <dt>&quot;focus&quot; </dt>
    <dd>- Event.GOT_FOCUS, 获得焦点事件，当元素获取焦点时触发该事件， Event.target是获取焦点的元素。</dd>
    <dt>&quot;blur&quot;</dt>
    <dd>- Event.LOST_FOCUS, 失去焦点事件，当元素失去焦点时触发该事件， Event.target是失去焦点的元素。</dd>
    <h4>键盘事件</h4>
    <dt>&quot;keydown&quot;</dt>
    <dd>- Event.KEY_DOWN, 键盘按下键事件，当有一个键被按下时触发。Event.keyCode是虚拟键代码 - Event.VK_****值之一。</dd>
    <dt>&quot;keyup&quot;</dt>
    <dd>- Event.KEY_UP, 键盘按起键事件，当一个按键松开时触发。Event.keyCode是虚拟键代码 - Event.VK_****值之一。</dd>
    <dt>&quot;keypress&quot;</dt>
    <dd>- Event.KEY_CHAR, 键盘按键事件，当鼠标接收到字符值时被触发。Event.keyCode是字符的UNICODE代码值。</dd>
    <h4>滚动事件</h4>
    <dt>&quot;scroll&quot;</dt>
    <dd>- 滚动事件;</dd>
    <h4>弹出和tooltip事件</h4>
    <dt>&quot;popuprequest&quot;</dt>
    <dd>- Event.POPUP_REQUEST, 当popup元素被创建的第一时间被触发, 这时弹出窗口尚未创建。event.source为弹出popup元素。可以使用这个事件来填充popup的内容。</dd>
    <dt>&quot;popupready&quot;</dt>
    <dd>- Event.POPUP_READY, 当popup元素创建的最后一阶段被触发, 这时弹出窗口已经被创建。 event.source 为弹出popup元素。</dd>
    <dt>&quot;popupdismissed&quot;</dt>
    <dd>- Event.POPUP_DISMISSED, 这个事件在弹出窗口从屏幕上移除后被触发。</dd>
		<dt>&quot;tooltiprequest&quot;</dt>
		<dd>- Event.TOOLTIP_REQUEST, 该事件用于响应Event.MOUSE_IDLE。</dd>
    <h4>文档生命周期事件</h4>
    <dt>&quot;close&quot;</dt>
    <dd>- Event.DOCUMENT_CLOSE, 这个事件在文档从它的容器(view或frame)中移除时被触发。仅文档元素和它的容器可以接收这个事件。</dd>
    <dt>&quot;closerequest&quot;</dt>
    <dd>- Event.DOCUMENT_CLOSE_REQUEST, 这个事件在请求文档从它的容器(view或frame)中移除时被触发，仅文档元素和它的容器可以接收这个事件。通过处理这个请求，应用程序可以通过是处理器中设置<code>event.cancel = true;</code> 来取消窗口或文档的关闭。</dd>
    <dt>&quot;ready&quot;</dt>
    <dd>- Event.DOCUMENT_READY, 当文档被解析完毕并且它的DOM已经创建好时被触发。仅文档元素和它的容器可以接收这个事件。</dd>
    <dt>&quot;complete&quot;</dt>
    <dd>- Event.DOCUMENT_COMPLETE, 当文档下载完毕它请求的所有资源(图片、样式、脚本)之后被触发。仅文档元素和它的容器可以接收这个事件。</dd>
    <h4>Command命令事件</h4>
    <dt>&quot;query:{command}&quot;</dt>
    <dd>- 这个事件在查询准备执行{command}时被触发。比如当准备从剪切板粘贴到元素上时，&quot;query:edit:paste&quot;事件被发送给该元素以检查是否可以接收粘贴的内容。这个元素可以设置event.result字段来反馈是否支持这个command。Command在event.data字段中有一个额外的command参数。</dd>
    <dt>&quot;exec:{command}&quot;</dt>
    <dd>- 这个事件在执行{command}时被触发。比如当元素执行从剪切板粘贴命令时会触发&quot;exec:edit:paste&quot;事件。</dd>
    <h4>系统拖拽事件</h4>
    <dt>drag</dt>
		<dd>- 当被拖拽数据经过元素时被触发。</dd>
		<dt>dragenter</dt>
		<dd>-当数据被拖拽进入元素时被触发。</dd>
		<dt>dragleave</dt>
		<dd>-当数据被拖拽离开元素时被触发。</dd>
		<dt>drop</dt>
		<dd>- 当数据被拖拽到目标元素时被触发。</dd></dl>
    <p>任何其他字符串都会被认为是自定义事件, 要post/send这样的事件，需要使用<code>Element.postEvent</code>/<code>sendEvent(name,...)</code>方法。</p>