# CSSS!的calc函数

  <p><dfn id="calcltexpressiongt">calc(&lt;表达式&gt;)</dfn>函数可以用在接受长度值的任何位置。括号中的表达式会计算为em长度单位。在h-smile中calc()中的表达式将会被CSSS!求值引擎解释，它可以使用CSSS!特性的一个限制子集。在表达式中你可以访问DOM属性和元素的状态，请使用下面的语句:</p>
  <ul>
    <li><code>self.attribute</code> - 访问元素的DOM属性。</li>
    <li><code>self:state-flag</code> -访问DOM元素的运行期状态标志: hover、active、focus等。</li></ul>
  <p>其中，self是调用calc()函数的元素引用。</p>

## 可以在calc()函数中使用的DOM元素的函数(方法)

  <p>下面是为calc()函数中的CSSS!定义的方法集:</p>
  <ul>
    <li><code>[element.]children()</code> - integer, 返回元素的子元素数量。</li>
    <li><code>[element.]child(n:integer)</code> - DOM元素, 返回在n位置的子元素。n是一个范围在1..children()间的正数。</li>
    <li><code>[element.]next()</code> - DOM元素, 返回当前元素的下一个兄弟元素。</li>
    <li><code>[element.]previous()</code> - DOM元素, 返回当前元素的上一个兄弟元素。</li>
    <li><code>[element.]parent()</code> - DOM元素, 返回当前元素的父元素。</li>
    <li>选择器方法:</li>
    <ul>
      <li><code>element.$( selector )</code> - 返回满足选择的元素集合。这个返回只会检索element的子元素。selector中的:root伪类匹配element元素。示例:<code>self.$(:root &gt; li):expanded = true</code>将仅会为self的直接li子元素设置expanded状态。</li>
      <li><code>element.$1( selector )</code> - 同上，区别是仅返回一个满足选择器的元素。</li>
      <li><code>element.$p( selector )</code> - 返回匹配selector的element元素的父元素集。selector中的:root是全局的DOM根元素。</li>
      <li><code>element.$1p( selector )</code> - 返回匹配selector的最近父元素。selector中的:root是全局的DOM根元素。</li></ul>
    <li><code>[element.]text-width(&quot;string&quot;)</code> - 返回当前样式下的element元素的string字符串的像素宽度。</li>
    <li><code>[element.]min-intrinsic-width()</code>, <code>[element.]max-intrinsic-width()</code> - 元素的内在宽度。</li>
    <li><code>[element.]min-intrinsic-height()</code>, <code>[element.]max-intrinsic-height()</code> - 元素的内在高度。</li>
    <li><code>[element.]system-scrollbar-width(),[element.]system-scrollbar-height()</code> - 系统中垂直/水平滚动条的宽度/高度。</li>
    <li><code>[element.]system-border-width()</code> - 系统形状的输入元素的边框宽度。</li>
    <li><code>[element.]system-small-icon-width(),[element.]system-small-icon-height()</code> - 宿主系统使用的小图标尺寸。</li>
    <li><code>[element.]foreground-image-width(),[element.]foreground-image-height()</code> - 为element元素定义的前景图像(如果存在)的物理尺寸。</li>
    <li><code>[element.]background-image-width(),[element.]background-image-height()</code> - 为element元素定义的背景图像(如果存在)的物理尺寸。</li></ul>