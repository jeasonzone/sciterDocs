# CSS选择器

## Sciter支持的CSS选择器

<table>
  <tr>
    <td>&nbsp;</td>
    <td><strong>含义</strong></td>
    <td><strong>节中描述</strong></td>
  </tr>
  <tr>
    <td colspan="3"><strong>CSS 2.1 选择器 </strong>下面的内容取自<A href="http://www.w3.org/tr/CSS21/selector.html#q2">W3C CSS 2.1 规范</A></td>
  </tr>
  <tr>
    <td><em>*</em></td>
    <td>匹配任何元素</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#universal-selector">通用选择器</A></td>
  </tr>
  <tr>
    <td><em>E</em></td>
    <td>匹配所有使用E标签的元素</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#type-selectors">标签选择器</A></td>
  </tr>
  <tr>
    <td><em>E F</em></td>
    <td>匹配所有属于E元素后代的F元素，E和F之间用空格分隔</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#descendant-selectors">后代元素选择器</A></td>
  </tr>
  <tr>
    <td><em>E &gt; F</em></td>
    <td>匹配所有E元素的子元素F</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#child-selectors">子元素选择器</A></td>
  </tr>
  <tr>
    <td><em>E:first-child</em></td>
    <td>匹配元素E，E是它的父元素的第一个子元素</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#first-child">:first-child伪类</A></td>
  </tr>
  <tr>
    <td><em>E:link & E:visited</em></td>
    <td>匹配元素E，E是一个链接元素，它未被访问(:link)或已被访问(:visited)。</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#link-pseudo-classes">:link伪类</A></td>
  </tr>
  <tr>
    <td><em>E:active</em></td>
    <td>匹配鼠标已经其上按下、还没有释放的E元素</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#dynamic-pseudo-classes">动态伪类</A></td>
  </tr>
  <tr>
    <td><em>E:hover</em></td>
    <td>匹配鼠标悬停其上的E元素</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#dynamic-pseudo-classes">动态伪类</A></td>
  </tr>
  <tr>
    <td><em>E:focus</em></td>
    <td>匹配获得当前焦点的E元素</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#dynamic-pseudo-classes">动态伪类</A></td>
  </tr>
  <tr>
    <td><em>E + F</em></td>
    <td>匹配所有紧随E元素之后的同级元素F</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#adjacent-selectors">毗邻元素选择器</A></td>
  </tr>
  <tr>
    <td><em>E[foo]</em></td>
    <td>匹配所有具有foo属性的E元素，不考虑它的值。</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#attribute-selectors">属性选择器</A></td>
  </tr>
  <tr>
    <td><em>E[foo=&quot;warning&quot;]</em></td>
    <td>匹配所有foo属性等于&quot;warning&quot;的E元素。</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#attribute-selectors">属性选择器</A></td>
  </tr>
  <tr>
    <td><em>E[foo~=&quot;warning&quot;]</em></td>
    <td>匹配所有foo属性具有多个空格分隔的值，其中一个值等于&quot;warning&quot;的E元素。</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#attribute-selectors">属性选择器</A></td>
  </tr>
  <tr>
    <td><em>E[foo%=&quot;warning&quot;]</em></td>
    <td>匹配所有foo属性具有多个空格分隔的值，其中一个值等于&quot;warning&quot;的E元素，其中值是大小写敏感的。</td>
    <td>非标准</td>
  </tr>
  <tr>
    <td><em>E[lang|=&quot;en&quot;]</em></td>
    <td>匹配这类E元素，它具有lang属性，且它的值是&quot;en&quot;或者以&quot;en&quot;开始并立即跟上一个“-”字符，也就是&quot;en-&quot;, 主要用于lang属性,比如“en”、“en-us”、“en-gb”等等</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#attribute-selectors">属性选择器</A></td>
  </tr>
  <tr>
    <td><em>DIV.warning</em></td>
    <td>匹配所有class属性中包含&quot;warning&quot;的DIV元素 (在HTML中, 等同于[class~=&quot;warning&quot;]。)</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#class-html">类选择器</A></td>
  </tr>
  <tr>
    <td><em>E#myid</em></td>
    <td>匹配所有id属性等于&quot;myid&quot;的E元素。</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#id-selectors">ID选择器</A></td>
  </tr>
  <tr>
    <td colspan="3"><strong>CSS 3.0 选择器</strong></td>
  </tr>
  <tr>
    <td><em>E:not( {simple selector} )</em></td>
    <td>
<DIV>匹配不符合当前选择器的任何E标签元素</DIV>
<DIV>示例: E:not(:first-child)匹配非它父元素的第一个子元素的所有元素。</DIV></td>
    <td><A href="http://www.w3.org/tr/css3-selectors/#negation">否定伪类</A></td>
  </tr>
  <tr>
    <td><em>E[foo^=&quot;val&quot;]</em></td>
    <td>匹配所有foo属性值是以&quot;val&quot;开始的E元素</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>E[foo$=&quot;val&quot;]</td>
    <td>匹配所有foo属性值是以&quot;val&quot;结尾的E元素</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><em>E[foo*=&quot;val&quot;]</em></td>
    <td>匹配所有foo属性值包含有&quot;val&quot;的E元素</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><em>E:nth-child(An+B)</em></td>
    <td>匹配E元素，它是将它父元素的所有子元素按<em>A</em>个元素分组后的每组中的第<em>B</em>个元素。A和B都是整数。</td>
    <td rowspan="2"><A href="http://www.w3.org/tr/2001/CR-css3-selectors-20011113/#structural-pseudos">结构伪类选择器</A></td>
  </tr>
  <tr>
    <td><em>E:nth-last-child(An+B)</em></td>
    <td>匹配E元素，它是将它父元素的所有子元素按<em>A</em>个元素分组后的每组中从后往前数第<em>B</em>个元素。A和B都是整数。</td>
  </tr>
  <tr>
    <td><em>E:not(simple selector)</em></td>
    <td>匹配不符合当前选择器的任何E标签元素</td>
    <td><A href="http://www.w3.org/tr/css3-selectors/#negation">否定伪类</A></td>
  </tr>
  <tr>
    <td><em>E:only-child</em></td>
    <td>匹配父元素下仅有的一个子元素，等同于E:first-child:last-child或者E:nth-child(1):nth-last-child(1)。 </td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#only-child-pseudo">:only-child伪类</A></td>
  </tr>
  <tr>
    <td><em>E:only-of-type</em></td>
    <td>匹配父元素下使用相同标签的唯一一个子元素，等同于E:first-of-type:last-of-type或者E:nth-of-type(1):nth-last-of-type(1)</td>
    <td><A href="http://www.w3.org/tr/CSS21/selector.html#only-of-type-pseudo">:only-of-type伪类</A></td>
  </tr>
  <tr>
    <td><em>E:has-child-of-type(T)</em></td>
    <td>匹配E元素，它仅有一个T类型的子元素。</td>
    <td rowspan="2"><FONT color=#cc0000>非标准, h-smile独有</FONT></td>
  </tr>
  <tr>
    <td><em>E:has-children-of-type(T)</em></td>
    <td>匹配E元素，它有一个或多个T类型的子元素。</td>
  </tr>
  <tr>
    <td colspan="3"><strong>运行时状态标志(大部分都是h-smile独有的)</strong></td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:focus</em></strong></td>
    <td valign="middle">匹配处于 聚焦 状态的元素</td>
    <td valign="middle">STATE_FOCUS</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:tab-focus</em></strong></td>
    <td valign="middle">匹配使用TAB键获得焦点的元素</td>
    <td valign="middle">STATE_TABFOCUS</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:focusable</em></strong></td>
    <td valign="middle">匹配任何定义了tabindex属性或可聚焦的元素。附加到元素上的行为(Behavior)可以处理&quot;聚焦&quot;事件(HANDLE_FOCUS)。例如，默认情况下，&lt;a href&gt;元素和大多数&lt;input&gt;/&lt;widget&gt;元素是可聚焦的。拥有 overflow:auto|scroll的元素本质上也是可聚焦的。</td>
    <td valign="middle">STATE_FOCUSABLE</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:current</em></strong></td>
    <td valign="middle">匹配当前E元素。如&lt;select&gt;中的当前&lt;option&gt;。</td>
    <td valign="middle">STATE_CURRENT</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:checked</em></strong></td>
    <td valign="middle">匹配处于选择(:checked)状态的E元素。<em>checkbox</em>、<em>radio</em>、<em>select</em>(针对option)这些元素的内部行为会自动切换这个状态。</td>
    <td valign="middle">STATE_CHECKED</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:disabled</em></strong></td>
    <td valign="middle">匹配处于禁用状态的E元素。容器中所有有<em>disabled</em>属性的元素都会有该状态标志。</td>
    <td valign="middle">STATE_DISABLED</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:read-only</em></strong></td>
    <td valign="middle">匹配处于只读状态(定义了readonly属性)的E元素。</td>
    <td valign="middle">STATE_READONLY</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:expanded</em></strong></td>
    <td valign="middle">匹配处于展开(expanded)状态的E元素。<em>select</em>元素的内部行为会切换该状态标志。该状态用于&lt;select&gt;中的折叠节点。</td>
    <td>STATE_EXPANDED</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:collapsed</em></strong></td>
    <td valign="middle">与<strong>:expanded</strong>状态刚好相反，匹配处于折叠(collapsed)状态的E元素。元素可以处于展开(expanded)或折叠(collapsed)状态，但不能同时处于这两只状态。 </td>
    <td>STATE_COLLAPSED</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:incomplete</em></strong></td>
    <td valign="middle">匹配处于未完成(incomplete)状态的E元素。未完成状态一般是指一个请求资源(如前景或背景图片)尚未加载完成时。</td>
    <td valign="middle">STATE_INCOMPLETE</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:busy</em></strong></td>
    <td valign="middle">匹配处于忙(busy)状态的E元素。该状态一般是指元素请求下载一些数据，而数据还没到达时的状态。该状态可以在行为(behavior)的代码中设置。</td>
    <td valign="middle">STATE_BUSY</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:empty</em></strong></td>
    <td valign="middle">匹配没有文本内容和子元素的E元素。</td>
    <td valign="middle">STATE_emPTY</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:has-child</em></strong></td>
    <td valign="middle">匹配只有一个子元素的E元素。</td>
    <td valign="middle">STATE_HAS_CHILD</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:has-children</em></strong></td>
    <td valign="middle">匹配有一个或多个子元素的E元素。</td>
    <td valign="middle">STATE_HAS_CHILDREN</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:animating</em></strong></td>
    <td valign="middle">匹配当前处于展示动画中的E元素，如展开/折叠中。</td>
    <td valign="middle">STATE_ANIMATING</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:popup</em></strong></td>
    <td valign="middle">匹配当前作为弹出窗口显示的E元素。</td>
    <td valign="middle">STATE_POPUP</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:owns-popup</em></strong></td>
    <td valign="middle">匹配请求显示弹出窗口，并且当前弹出窗口已经弹出的E元素。即E元素是弹出窗口的拥有者。</td>
    <td valign="middle">STATE_OWNS_POPUP</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:synthetic</em></strong></td>
    <td valign="middle">匹配由引擎合成的E元素。如表格(&lt;table&gt;)中所有缺失的单元格拥有该状态。</td>
    <td valign="middle">STATE_SYNTHETIC</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:drop-target</em></strong></td>
    <td valign="middle">匹配E元素，当拖拽操作正在进行中，E为被拖拽元素的有效目标元素。</td>
    <td valign="middle">STATE_DROP_TARGET</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:drag-over</em></strong></td>
    <td valign="middle">匹配拖拽目标E元素, 被拖拽元素经过E。</td>
    <td valign="middle">STATE_DRAG_OVER</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:moving</em></strong></td>
    <td valign="middle">匹配正在拖拽移动(drag-moving)的E元素(拖拽源的临时副本)。</td>
    <td valign="middle">STATE_MOVING</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:copying</em></strong></td>
    <td valign="middle">匹配拖拽拷贝(drag-copying)的E元素(拖拽源的临时副本)。</td>
    <td valign="middle">STATE_COPYING</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:drag-source</em></strong></td>
    <td valign="middle">匹配拖拽源的E元素，当前处于拖拽操作中。</td>
    <td valign="middle">STATE_DRAG_SOURCE</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:rtl</em></strong></td>
    <td valign="middle">匹配E元素，E元素处于从右到左的环境中——当它或离它最近的容器元素定义了<em>dir</em>属性，且该属性值为&quot;rtl&quot;。</td>
    <td valign="middle">&nbsp;</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:ltr</em></strong></td>
    <td valign="middle">匹配E元素，E元素处于从左到右的环境中当它或离它最近的容器元素定义了<em>dir</em>属性，且该属性值为&quot;ltr&quot;。</td>
    <td valign="middle">&nbsp;</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:ready</em></strong></td>
    <td valign="middle">当文档的DOM树初始化完成时，E元素处于该状态。</td>
    <td valign="middle">&nbsp;</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:invalid</em></strong></td>
    <td valign="middle">当E元素处于失效状态时，E元素处于该状态，比如输入框中的字符长度超出限制的长度时就处于这个状态。</td>
    <td valign="middle">&nbsp;</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:lang(en)</em></strong></td>
    <td valign="middle">当前语言是英语(en)时(根html元素的lang属性值为"en")，E元素处于该状态。</td>
    <td valign="middle">&nbsp;</td>
  </tr>
  <tr>
    <td nowrap valign="top"><strong><em>E:has-bound-attributes</em></strong></td>
    <td valign="middle">当E元素至少有一个bound属性(属性名以'@'作为前缀)时，E元素处于该状态。</td>
    <td valign="middle">&nbsp;</td>
  </tr>
  <tr>
    <td nowrap="" valign="top" colspan="3"><strong>伪元素</strong></td>
  </tr>
  <tr>
    <td nowrap="" valign="top"><b>::before</b></td>
    <td valign="middle">::before会为被选择元素创建它的排在第一个的子元素。它通常是通过content属性为一个元素添加一个装饰内容。它的display默认是inline。</td>
    <td valign="middle"/>
  </tr>
  <tr>
    <td nowrap="" valign="top"><b>::after</b></td>
    <td valign="middle">::after会为被选择元素创建它的排在最后一个的子元素。它通常是通过content属性为一个元素添加一个装饰内容。它的display默认是inline。</td>
    <td valign="middle"/>
  </tr>
  <tr>
    <td nowrap="" valign="top"><b>::marker</b></td>
    <td valign="middle">
    ::marker定义一个特别的伪元素，它渲染在背景层上面和内容层下面。这个标记元素放置在元素的padding盒内部，并且可以使用弹性单位。比如:
    <pre v-pre><code> div::marker {
  size:1em;
  margin:*;
  background:red; 
  border-radius:0.5em;
} </code></pre>
  <p>将会在div的中心位置绘制一个1em的圆。可以用于为元素添加装饰内容。它的display默认是block。</p>
    </td>
    <td valign="middle"><html>非标准, h-smile core独有的。</html></td>
  </tr>
  <tr>
    <td nowrap valign="top"> <b>::shade</b></td>
    <td valign="middle"> 
    ::shade相当于一个隐藏DOM跟节点 - 一个可以选择在数组元素内容的上面、下面的特殊的伪元素。 shade元素放置在元素的padding盒内部，并且可以使用flex单位。例如:
    <pre v-pre><code> div::marker {
  size:1em;
  margin:*;
  background:red; 
  border-radius:0.5em;
} </code></pre>
  <p>将会在div的中心位置上渲染一个1em的圆。可以用于向元素添加外观内容。默认情况下，它是块元素。</p></td>
   <td valign="middle"></td>
  </tr>
</table>