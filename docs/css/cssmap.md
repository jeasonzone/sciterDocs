# 支持的CSS属性

Sciter独有的特性:
* 渐变背景, 见<a href="#background-color-attribute">background-color</a>属性的定义。
* 扩展的图像填充, 见<a href="#background-position-attribute">background-position</a> 和 background-repeat 属性的定义。
* <a href="http://www.terrainformatica.com/htmlayout/fspu.whtm">%% 长度单位</a> - &quot;占自由空间的百分比&quot;。
* <a href="#flow-attribute">flow 属性</a>。
* <a href="#foreground-position-attribute">前景(Foreground)图像</a>。
* <a href="#hit-margin">hit-margin</a> 属性。
* @include "mime-type" url(...) [媒体类型列表]; - CSS中的内嵌脚本。 
示例: 
```html
<style> @include "text/tiscript" url(script.tis) screen; </style> 
```
等价于
```html
<script type="text/tiscript" src="script.tis" />(除了媒体类型条件)。
```
Sciter支持所有的CSS1 <a href="http://www.w3.org/TR/CSS1#basic-concepts">基本概念</a>和<a href="http://www.w3.org/TR/CSS1#cascading-order">层叠顺序</a>。 Sciter也支持CSS 2.1的<a href="http://www.w3.org/TR/CSS21/selector.html#attribute-selectors">属性选择器</a>和一些基本的CSS3选择器。

宿主程序可以使用自定义属性来实现任何目的。 引擎内部不会翻译解释这些属性。

## Sciter支持的CSS属性列表

<table border="1" bordercolor="#fff2cc" cellspacing="0"> 
    <tbody>
     <tr> 
      <td rowspan="23" valign="top"><strong>字体和段落属性</strong></td> 
      <td nowrap="" valign="top" align="right"><strong>font</strong></td> 
      <td> <p>font是一个简写属性，在一个声明中设置所有字体属性，用于一次设置元素字体的两个或更多方面。</p> <p class="note"><span>注释：</span>此属性也有第六个值：&quot;line-height&quot;，可设置行间距。</p> <p>可以按顺序设置如下属性：</p> 
       <ul> 
        <li>font-style</li> 
        <li>font-variant</li> 
        <li>font-weight</li> 
        <li>font-size/line-height</li> 
        <li>font-family</li> 
       </ul> 
       <div>
        参见: 
        <a href="http://www.w3.org/TR/CSS1#font">层叠样式表CSS1</a>。
       </div> 
       <div></div> 
       <div>
        在h-smile引擎中，
        <em>font</em>也支持下面的系统字体:
       </div> 
       <ul> 
        <li><font face="Courier New">system</font> - 输入元素默认的系统UI字体;</li> 
        <li><font face="Courier New">system-menu</font> - 系统菜单字体;</li> 
        <li><font face="Courier New">system-caption</font> - 窗口标题字体;</li> 
        <li><font face="Courier New">system-status</font> - 状态栏和气泡提示系统字体。</li>
       </ul> 
       <div>
        注意: 上面的这些字体名称只有在
        <em>font</em>样式属性中才有效 - 在font-family属性中，这些名称会被忽略。之所以这样做是因为这样比较简单。比如拿
        <font face="Courier New">font:system-menu;</font>来说，它是font-family、font-size、font-weight、font-variant四个属性的简写形式。
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>font-family</strong></td> 
      <td> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td nowrap="" valign="middle">family-name</td> 
          <td>系统中安装的任何可用的字体家族。例如：Times、Helvetica、Zapf-Chancery、Western、Courier等。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">generic-name</td> 
          <td>后面的这些字体家族: serif、sans-serif、cursive、fantasy或monospace。</td>
         </tr>
        </tbody>
       </table> 
       <div>
        参见: 
        <a href="http://www.w3.org/TR/CSS1#font-family">层叠样式表CSS1</a>。
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>font-size</strong></td> 
      <td> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td nowrap="" valign="middle">absolute-size</td> 
          <td>一套关键字集，它们指定字体的预定义大小。命名的字体尺寸根据用户的字体设置偏好来缩放尺寸。可能的值如下: xx-small、x-small、small、medium、large、x-large、xx-large。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">relative-size</td> 
          <td>一套关键字集，它们指定的尺寸是相对于父对象字体尺寸。可能的值如下: larger、smaller。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">length</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象字体尺寸的百分比。</td>
         </tr>
        </tbody>
       </table> 
       <div>
        参见: 
        <a href="http://www.w3.org/TR/CSS1#font-size">层叠样式表CSS1</a>。
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>font-style</strong></td> 
      <td> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>normal</td> 
          <td>默认. 字体是正常的。</td>
         </tr> 
         <tr> 
          <td>italic</td> 
          <td>字体是斜体的。</td>
         </tr> 
         <tr> 
          <td>oblique</td> 
          <td>字体是斜体的。</td>
         </tr>
        </tbody>
       </table> 
       <div>
        参见: 
        <a href="http://www.w3.org/TR/CSS1#font-style">层叠样式表CSS1</a>。
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>font-weight</strong></td> 
      <td> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>normal</td> 
          <td>默认。字体是正常的。</td>
         </tr> 
         <tr> 
          <td>bold</td> 
          <td>字体是粗体的。</td>
         </tr> 
         <tr> 
          <td>bolder</td> 
          <td>字体比常规的粗体更粗。</td>
         </tr> 
         <tr> 
          <td>lighter</td> 
          <td>比正常的字体更细些。</td>
         </tr> 
         <tr> 
          <td>100</td> 
          <td>字体最起码会比200更细。</td>
         </tr> 
         <tr> 
          <td>200</td> 
          <td>字体最起码比100粗，而比300细。</td>
         </tr> 
         <tr> 
          <td>300</td> 
          <td>字体最起码比200粗，而比400细。</td>
         </tr> 
         <tr> 
          <td>400</td> 
          <td>字体为正常字体。</td>
         </tr> 
         <tr> 
          <td>500</td> 
          <td>字体最起码比400粗，而比600细。</td>
         </tr> 
         <tr> 
          <td>600</td> 
          <td>字体最起码比500粗，而比700细。</td>
         </tr> 
         <tr> 
          <td>700</td> 
          <td>字体为粗体。</td>
         </tr> 
         <tr> 
          <td>800</td> 
          <td>字体最起码比700粗，而比900细。</td>
         </tr> 
         <tr> 
          <td>900</td> 
          <td>字体最起码比800粗。</td>
         </tr>
        </tbody>
       </table> 
       <div>
        参见: 
        <a href="http://www.w3.org/TR/CSS1#font-weight">层叠样式表CSS1</a>。
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>letter-spacing</strong></td> 
      <td>
        <div>增加或减少字符间的空白（字符间距）。</div>
        <p>
          该属性定义了在文本字符框之间插入多少空间。由于字符字形通常比其字符框要窄，指定长度值时，会调整字母之间通常的间隔。因此，normal 就相当于值为 0。<br/>
          注释：允许使用负值，这会让字母之间挤得更紧。</p>
        <div>可<strong>指定</strong>下面中的值之一：</div> 
       <table> 
        <tbody>
         <tr> 
          <td>normal</td> 
          <td>默认。规定字符间没有额外的空间。</td>
         </tr> 
         <tr> 
          <td>length</td> 
          <td>定义字符间的固定空间（允许使用负值）。浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>inherit</td> 
          <td>规定应该从父元素继承 letter-spacing 属性的值。</td>
         </tr> 
        </tbody>
       </table> 
      </td>
     </tr> 
     </tr> 
     <tr>
       <td nowrap="" align="right" bgcolor="#ffffdd"><b>font-rendering-mode</b></td>
       <td>定义字体定位和抗锯齿模式:
       <ul>
        <li><i>inherit</i> - 默认值;</li>
        <li><i>sub-pixel</i> - 字体可以放在&quot;像素之间&quot;;</li>
        <li><i>snap-pixel</i> - 字体位置应该定位到像素表格中, 该模式的目的值使输入光标不会覆盖在字体之上。</li>
       </ul>
     </td></tr>
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>line-height</strong></td> 
      <td> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>normal</td> 
          <td>默认。默认高度。</td>
         </tr> 
         <tr> 
          <td>height</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象高度的百分比。</td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>.</td>
         </tr>
        </tbody>
       </table> 
       <div>
        参见: 
        <a href="http://www.w3.org/TR/CSS1#line-height">层叠样式表CSS1</a>。
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>text-align</strong></td> 
      <td> 
       <div>
        <strong>指定</strong>下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>left</td> 
          <td>默认。文本左对齐。</td>
         </tr> 
         <tr> 
          <td>right</td> 
          <td>文本右对齐。</td>
         </tr> 
         <tr> 
          <td>center</td> 
          <td>文本居中对齐。</td>
         </tr> 
         <tr> 
          <td>justify</td> 
          <td>文本自动调整。</td>
         </tr>
        </tbody>
       </table> 
       <div>
        参见: 
        <a href="http://www.w3.org/TR/CSS1#text-align">层叠样式表CSS1</a>。
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>text-decoration</strong></td>
      <td>
        text-decoration-line、text-decoration-style和text-decoration-color的组合值</td></tr>
     <tr><td nowrap="" align="right"><b>text-decoration-line</b></td>
      <td>
        文本修饰的位置:
        <ul>  
         <li><i>none</i> - 默认, 文本没有下划线;</li>
         <li><i>underline</i> -文本有下划线;</li>
         <li><i>overline</i> - 文本有上划线text has a line over it;</li>
         <li><i>line-through</i> - 文本有删除线。</li></ul>
      </td>
     </tr>
     <tr>
      <td nowrap="" align="right"><b>text-decoration-style</b></td>
      <td>
        文本修饰的样式:
        <ul>
          <li><i>solid</i> - 默认, 实线;</li>
          <li><i>double</i> - 双划线;</li>
          <li><i>dotted</i> - dotted line;</li>
          <li><i>dashed</i> - dashed line;</li>
          <li><i>wavy</i> - wavy line</li>
        </ul>
      </td>
     </tr>
     <tr>
      <td nowrap="" align="right"><b>text-decoration-color</b></td>
      <td>指定文本修饰的颜色。<p>值为：color值或<i>currentcolor</i>(默认, 当前文本颜色)。</p></td>
     </tr>
        </tbody>
       </table> 

参见:<a href="http://www.w3.org/TR/CSS1#text-decoration">层叠样式表CSS1</a>。

指定首行文本的缩进。
<table> 
        <tbody>
         <tr> 
          <td>length</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象宽度的百分比。</td>
         </tr>
        </tbody>
       </table> 

参见:<a href="http://www.w3.org/TR/CSS1#text-indent">层叠样式表CSS1</a>

指定下面中的值之一，用于决定超出布局区域的文本是否省略(...)显示。
<table> 
        <tbody>
         <tr> 
          <td>ellipsis</td> 
          <td>超出的文本显示省略号(...)。</td>
         </tr> 
         <tr> 
          <td>path-ellipsis</td> 
          <td>超出的路径显示省略号(...)。</td>
         </tr> 
         <tr> 
          <td>clip</td> 
          <td>默认。简单的裁剪内容区，超出的文本不显示。</td>
         </tr>
        </tbody>
       </table>

琐碎的文本变换，可接受以下值:

none | uppercase | lowercase | capitalize

默认值: none.

垂直对齐方式，指定下面中的值之一：
<table> 
        <tbody>
         <tr> 
          <td>baseline</td> 
          <td>默认。将支持<strong>垂直对齐</strong>的对象内容对齐到基线上。</td>
         </tr> 
         <tr> 
          <td>sub</td> 
          <td>将文本对齐到支持<strong>垂直对齐</strong>对象的下标位置。</td>
         </tr> 
         <tr> 
          <td>super</td> 
          <td>将文本对齐到支持<strong>垂直对齐</strong>对象的上标位置。</td>
         </tr> 
         <tr> 
          <td>top</td> 
          <td>将内容区对齐到支持<strong>垂直对齐</strong>的对象的顶部。</td>
         </tr> 
         <tr> 
          <td>middle</td> 
          <td>将内容区对齐到支持<strong>垂直对齐</strong>的对象的居中位置。</td>
         </tr> 
         <tr> 
          <td>bottom</td> 
          <td>将内容区对齐到支持<strong>垂直对齐</strong>的对象的底部。</td>
         </tr> 
         <tr> 
          <td>text-top</td> 
          <td>将文本对齐到支持<strong>垂直对齐</strong>的对象的顶部。</td>
         </tr> 
         <tr> 
          <td>text-bottom</td> 
          <td>将文本对齐到支持<strong>垂直对齐</strong>的对象的底部。</td>
         </tr>
        </tbody>
       </table> 
参见:<a href="http://www.w3.org/TR/CSS1#vertical-align">层叠样式表CSS1</a>

指定下面中的值之一：
<table> 
        <tbody>
         <tr> 
          <td valign="top">normal</td> 
          <td>行可以在允许的中断点换行，中断点取决于实际的断行规则。</td>
         </tr> 
         <tr> 
          <td valign="top">none</td> 
          <td>行不可以中断，超出块盒的文本将不会自动适应。</td>
         </tr> 
         <tr> 
          <td valign="top">pre</td> 
          <td>文本中的换行和其他空白符保留。</td>
         </tr> 
         <tr> 
          <td valign="top">prewrap</td> 
          <td bgcolor="#ffffdd" valign="top">文本中的换行和其他空白符保留，同时内容允许在需要换行的地方换行。这与&lt;textarea&gt;的wrap=&quot;on&quot;时的模式相同。非标准属性值。</td>
         </tr>
        </tbody>
       </table>
参见:<a href="http://www.w3.org/TR/CSS1#white-space">层叠样式表CSS1</a>

指定下面中的值之一：
<table>
         <tr> 
          <td valign="top">normal</td> 
          <td>行只允许在断点处断行，如空白符。</td>
          <tr>
            <td valign="top">break-word</td>
            <td>如果一行中没有可接受的换行点时，单词也可以子啊在任何点上换行。</td>
          </tr>
        </table>
参见: <a href="http://www.w3.org/TR/css3-text/#text-wrap">Cascading Style Sheets, level 3</a>

指定下面中的值之一：
<table>
            <tr>
              <td valign="top">normal</td>
              <td>使用默认的换行规则。</td></tr>
            <tr>
              <td valign="top">break-all</td>
              <td>可以在任意字符间进行换行。</td>
            </tr>
          </table>

<table>
    <tr> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>text-selection-color</strong></td> 
      <td bgcolor="#ffffdd">指定被选择文本的颜色(输入元素和有behavior:htmlarea行为的元素)。非标准。继承属性。</td>
     </tr> 
     <tr> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>text-selection-background-color</strong></td> 
      <td bgcolor="#ffffdd">指定被选择文本的背景颜色(输入元素和有behavior:htmlarea行为的元素)。非标准。继承属性。</td>
     </tr> 
     <tr> 
      <td nowrap bgcolor="#ffffdd" align="right"><strong>text-selection-caret-color</strong></td>
      <td bgcolor="#ffffdd">指定背文本光标(在输入框和behavior:htmlarea元素上)的颜色。非标准。继承属性。</td></tr>
     <tr>
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>text-selection</strong></td> 
      <td bgcolor="#ffffdd"> 
       <div>
        &lt;text-color&gt; &lt;background-text-color&gt;
       </div> 
       <div>
        指定被选择文本的颜色(包括背景和前景)。是上面两个属性的简写形式。非标准属性。
       </div></td>
     </tr> 
     <tr> 
      <td rowspan="10" valign="top"> 
       <div>
        <strong>颜色和背景属性</strong>
       </div> 
       <div></div> 
       <div></div> 
       <div></div></td> 
      <td nowrap="" valign="top" align="right"><strong>background</strong></td> 
      <td> 
       <div> 
        <p>background是一个简写属性，在一个声明中设置所有的背景属性。</p> 
        <p>可以设置如下属性：</p> 
        <ul> 
         <li>background-color</li> 
         <li>background-position</li> 
         <li>background-size</li> 
         <li>background-repeat</li> 
         <li>background-origin</li> 
         <li>background-clip</li> 
         <li>background-attachment</li> 
         <li>background-image</li> 
        </ul> 
        <div>
         参见: 
         <a href="http://www.w3.org/TR/CSS1#background">层叠样式表CSS1</a>
        </div>
       </div></td>
     </tr>
</table>

指定下面中的值之一：
<table> 
        <tbody>
         <tr> 
          <td>scroll</td> 
          <td>默认。背景图像随着文档的滚动而滚动。</td>
         </tr> 
         <tr> 
          <td>fixed</td> 
          <td>背景图像固定在可视区域，不随着文档的滚动而滚动。</td>
         </tr>
        </tbody>
       </table>

指定下面中的值之一：
<table> 
        <tbody>
         <tr> 
          <td width="154">transparent</td> 
          <td>默认。背景是透明，可以看到父对象的颜色。</td>
         </tr> 
         <tr> 
          <td>color</td> 
          <td>任何一个颜色值, 包括<a href="http://msdn.microsoft.com/workshop/author/dhtml/reference/colors/colors.asp">颜色表</a>中的颜色值。</td>
         </tr> 
         <tr> 
          <td nowrap="" bgcolor="#ffffdd" valign="middle">color-left-top,<br />color-right-top,<br />color-right-bottom,<br />color-left-bottom</td> 
          <td bgcolor="#ffffdd" valign="middle"><strong><font color="#ff0000">渐变填充</font></strong>。背景渐变填充的四个角的颜色。非标准。HTMLayout独有属性。</td>
         </tr>
        </tbody>
       </table>

指定下面中的值之一：
<table> 
        <tbody>
         <tr> 
          <td>none</td> 
          <td>默认。背景是透明的，可见父对象的颜色。</td>
         </tr> 
         <tr> 
          <td>url(sUrl)</td> 
          <td>背景图像的地址，其中，sUrl可以是绝对或相对URL。</td>
         </tr>
        </tbody>
       </table>

integer, 对于动态图像(APNG, GIF)，指定显示的帧数。

该属性将动态图像冻结在某一特定帧上。

该属性可以使用transition属性实现从起始帧到终止帧的动画。

指定下面中的值之一：
<table> 
        <tbody>
         <tr> 
          <td>length</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象宽度或高度的百分比。</td>
         </tr> 
         <tr> 
          <td>top, center, bottom</td> 
          <td> 
           <div>
            垂直对齐值。可能有以下值 :
           </div> 
           <table> 
            <tbody>
             <tr> 
              <td>top</td> 
              <td>垂直对齐到顶部。</td>
             </tr> 
             <tr> 
              <td>center</td> 
              <td>垂直居中。</td>
             </tr> 
             <tr> 
              <td>bottom</td> 
              <td>垂直对齐到底部。</td>
             </tr>
            </tbody>
           </table></td>
         </tr> 
         <tr> 
          <td>left, center, right</td> 
          <td> 
           <div>
            水平对齐值。可以有以下值:
           </div> 
           <table> 
            <tbody>
             <tr> 
              <td>left</td> 
              <td>水平对齐到左边。</td>
             </tr> 
             <tr> 
              <td>center</td> 
              <td>水平居中。</td>
             </tr> 
             <tr> 
              <td>right</td> 
              <td>水平对齐到右边。</td>
             </tr>
            </tbody>
           </table></td>
         </tr> 
         <tr> 
          <td nowrap="" bgcolor="#ffffdd" valign="middle"><font face="monospace">left</font>-side-length,<br /><font face="monospace">top</font>-side-length,<br /><font face="monospace">right</font>-side-length,<br /><font face="monospace">bottm</font>-side-length</td> 
          <td bgcolor="#ffffdd" valign="middle"> 
           <div>
            <strong><font color="#ff0000">可扩展填充(九宫格)</font></strong>图像外边距。
           </div> 
           <div>
            参见HtmLayout文档中
            <strong>可扩展平铺</strong>节的内容。
           </div> 
           <div>
            要使用可扩展填充背景，需要设置
            <strong>background-repeat</strong>属性的值为'<strong>expand</strong>'。非标准。Sciter/HTMLayout独有。
           </div> 
           <div></div></td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table> 

```css
.style1 { background-position:top center }

.style2 { background-position:0 0 }
```

<a name="background-position-attribute"><strong>background-position</strong></a><strong>-left<br /><a name="background-position-attribute">background-position</a>-right<br /><a name="background-position-attribute">background-position</a>-top<br /><a name="background-position-attribute">background-position</a>-bottom</strong>

用于 <em>background-repeat=expand</em> 模式, 值可以为：<em>stretch</em>、<em>no-repeat</em>。

指定下面中的值之一：
<table> 
        <tbody>
         <tr> 
          <td nowrap="">repeat</td> 
          <td>默认。图像在水平和垂直方向上平铺。</td>
         </tr> 
         <tr> 
          <td nowrap="">no-repeat</td> 
          <td>图像不重复(即不平铺)。</td>
         </tr> 
         <tr> 
          <td nowrap="">repeat-x</td> 
          <td>图像在水平方向上平铺。</td>
         </tr> 
         <tr> 
          <td nowrap="">repeat-y</td> 
          <td>图像在垂直方向上平铺。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle"><strong><em>expand</em></strong></td> 
          <td bgcolor="#ffffdd" valign="middle"><strong><font color="#ff0000">可扩展填充(九宫格)</font></strong> 模式。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="top"><strong><em>stretch </em></strong>[<em>keep-ratio</em>]</td> 
          <td bgcolor="#ffffdd" valign="top">图像被拉伸以铺满整个背景，与&lt;IMG&gt;元素中的图像渲染方式相同。如果指定了<em>keep-ratio</em>，则拉伸时会保持图像的宽高比例。要设置背景图像的位置，请使用background-position属性。</td>
         </tr>
        </tbody>
       </table>

设置对象中文本的颜色。

image-rendering属性对显示图像的算法提供了一个提示，该属性应该用于缩放图像。支持以下值：
<table>
            <tr>
              <td nowrap>inherit</td>
              <td>继承父元素的值</td></tr>
            <tr>
              <td nowrap>auto</td>
              <td>双线性 或 双三次插值</td></tr>
            <tr>
              <td nowrap>crisp-edges</td>
              <td>线性插值</td></tr>
            <tr>
              <td nowrap>pixelated</td>
              <td>最近邻插值</td></tr>
            <tr>
              <td nowrap valign="middle"><strong>default</strong></td>
              <td bgcolor="#ffffdd" valign="middle"><em>crisp-edges</em>的别名</td></tr>
            <tr>
              <td nowrap valign="middle"><strong>optimize-quality</strong></td>
              <td bgcolor="#ffffdd" valign="middle">auto的别名</td></tr>
            <tr>
              <td nowrap valign="top"><strong>optimize-speed</strong></td>
              <td bgcolor="#ffffdd" valign="top">pixelated的别名</td></tr></table>

<p>默认值是<em>inherit</em> - 一旦它在一个容器元素上被定义，则该属性将被应用于所有子元素的背景和前景图像上(如果子元素没有覆写该属性的话)。</p>

<table>
<tr> 
      <td rowspan="9" bgcolor="#ffffdd" valign="top"> 
       <div>
        <strong>前景图像属性</strong>
       </div> <p><font size="1">前景(Foreground)图像是Sciter/HTMLayout独有的特性。</font></p> <p><font size="1">前景图像拥有于背景图像相同的属性集合。</font></p> <p><font size="1">Sciter/HTMLayout中块元素的绘制顺序:</font></p> <p><font size="1">1. 背景(background)<br />2. 边框(borders)<br />3. 内容(content)<br />4. 轮廓(outline)<br />5. 前景(foreground)</font></p> 
       <div></div> 
       <div></div></td> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>foreground</strong></td> 
      <td bgcolor="#ffffdd"> 
       <div>
        指定最多4个下面的值，值间以空格符分隔，可以任意顺序：
       </div> 
       <div>
        &lt;foreground-image url&gt; || &lt;foreground-repeat&gt; || &lt;foreground-attachment&gt; || &lt;foreground-position&gt; || &lt;foreground-color&gt; || &lt;foreground-gradient&gt;
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>foreground-color</strong></td> 
      <td bgcolor="#ffffdd">前景层的颜色，实际上它与background-color属性相似，只是它是画在前景层上。所以该属性的合理值是使用rgba()定义的半透明色。 <p><strong><font color="#ff0000">注意</font></strong>: 实体(solid)颜色将会隐藏它下面绘制的所有内容。</p></td>
     </tr> 
     <tr> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>foreground-attachment</strong></td> 
      <td bgcolor="#ffffdd"> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>scroll</td> 
          <td>默认。前景图像随着文档的滚动而滚动。</td>
         </tr> 
         <tr> 
          <td>fixed</td> 
          <td>前景图像固定在可视区域，不随着文档的滚动而滚动。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>foreground-image</strong></td> 
      <td bgcolor="#ffffdd"> 
       <div>
        可指定以下值：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>none</td> 
          <td>默认。前景是透明的，可见父对象的颜色。</td>
         </tr> 
         <tr> 
          <td>url(sUrl)</td> 
          <td>前景图像的地址，其中，sUrl可以是绝对或相对URL。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr>
       <td nowrap valign="top" align="right"><strong>foreground-image-frame</strong></td>
       <td>
         <div>integer, 对于动态图像(APNG, GIF)，指定显示的帧数。</div>
         <div>该属性将动态图像冻结在某一特定帧上。</div>
         <div>该属性可以使用transition属性实现从起始帧到终止帧的动画。</div>
	   </td>
	 </tr>
     <tr> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><a name="foreground-position-attribute"><strong>foreground-position</strong></a></td> 
      <td bgcolor="#ffffdd"> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>length</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象宽度或高度的百分比。</td>
         </tr> 
         <tr> 
          <td>top, center, bottom</td> 
          <td> 
           <div>
            垂直对齐值。可能有以下值 :
           </div> 
           <table> 
            <tbody>
             <tr> 
              <td>top</td> 
              <td>垂直对齐到顶部。</td>
             </tr> 
             <tr> 
              <td>center</td> 
              <td>垂直居中。</td>
             </tr> 
             <tr> 
              <td>bottom</td> 
              <td>垂直对齐到底部。</td>
             </tr>
            </tbody>
           </table></td>
         </tr> 
         <tr> 
          <td>left, center, right</td> 
          <td> 
           <div>
            水平对齐值。可以有以下值:
           </div> 
           <table> 
            <tbody>
             <tr> 
              <td>left</td> 
              <td>水平对齐到左边。</td>
             </tr> 
             <tr> 
              <td>center</td> 
              <td>水平居中。</td>
             </tr> 
             <tr> 
              <td>right</td> 
              <td>水平对齐到右边。</td>
             </tr>
            </tbody>
           </table></td>
         </tr> 
         <tr> 
          <td nowrap="" bgcolor="#ffffdd" valign="middle"><font face="monospace">left</font>-side-length,<br /><font face="monospace">top</font>-side-length,<br /><font face="monospace">right</font>-side-length,<br /><font face="monospace">bottm</font>-side-length</td> 
          <td bgcolor="#ffffdd" valign="middle"> 
           <div>
            <strong><font color="#ff0000">可扩展填充(九宫格)</font></strong>图像外边距。
           </div> 
           <div>
            参见HtmLayout文档中
            <strong>可扩展平铺</strong>节的内容。
           </div> 
           <div>
            要使用可扩展填充背景，需要设置
            <strong>foreground-repeat</strong>属性的值为'
            <strong>expand</strong>'。非标准。Sciter/HTMLayout独有。
           </div> 
           <div></div></td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table> 
       <div>
        <font face="monospace">.style1 { foreground-position:top center }</font>
       </div> 
       <div>
        <font face="monospace">.style2 { foreground-position:0 0 }</font>
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>foreground-position-left<br />foreground-position-right<br />foreground-position-top<br />foreground-position-bottom</strong></td> 
      <td bgcolor="#ffffdd">用于 <em>background-repeat=expand</em> 模式, 值可以为：<em>stretch</em>、<em>no-repeat</em>。更多信息请参见<a href="css-images-plus.htm">css-images-plus</a>。</td>
     </tr> 
     <tr> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>foreground-repeat</strong></td> 
      <td bgcolor="#ffffdd"> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td nowrap="">repeat</td> 
          <td>默认。图像在水平和垂直方向上平铺。</td>
         </tr> 
         <tr> 
          <td nowrap="">no-repeat</td> 
          <td>图像不重复(即不平铺)。</td>
         </tr> 
         <tr> 
          <td nowrap="">repeat-x</td> 
          <td>图像在水平方向上平铺。</td>
         </tr> 
         <tr> 
          <td nowrap="">repeat-y</td> 
          <td>图像在垂直方向上平铺。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle"><strong><em>expand</em></strong></td> 
          <td bgcolor="#ffffdd" valign="middle"><strong><font color="#ff0000">可扩展填充(九宫格)</font></strong> 模式。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="top"><strong><em>stretch </em></strong>[<em>keep-ratio</em>]</td> 
          <td bgcolor="#ffffdd" valign="top">图像被拉伸以铺满整个背景，与&lt;IMG&gt;元素中的图像渲染方式相同。如果指定了<em>keep-ratio</em>，则拉伸时会保持图像的宽高比例。要设置背景图像的位置，请使用background-position属性。</td>
         </tr>
        </tbody>
       </table>
       <div>
        更多信息请参见<a href="css-images-plus.htm">css-images-plus</a>。
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" bgcolor="#ffffdd" valign="top" align="right"><strong>foreground-image-cursor</strong></td> 
      <td bgcolor="#ffffdd"> 
       <div>
	    当<em>foreground-repeat</em>值为<em>no-repeat</em>时，鼠标悬停在前景图片区域时的鼠标指针样式。
       </div> 
       <div>
        值可以为: 
        <em>auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help |  drag-copy | drag-move | no-drop</em> 或者.cur/.ani文件类型的url。
       </div></td>
     </tr> 
     <tr> 
      <td rowspan="36" valign="top"><strong>布局属性</strong></td> 
      <td nowrap="" valign="top" align="right"><strong>border</strong></td> 
      <td> 
       <div>
        指定一个或多个下面的值:<br /> width, style, color。
       </div> 
       <div>
        参见: <a href="http://www.w3.org/TR/CSS1#border">层叠样式表CSS1</a>
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-bottom</strong></td> 
      <td> 
       <div>
        指定一个或多个下面的值:<br /> width, style, color。
       </div> 
       <div>
        参见: <a href="http://www.w3.org/TR/CSS1#border-bottom">层叠样式表CSS1</a>
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-bottom-color</strong></td> 
      <td>指定<a href="http://msdn.microsoft.com/workshop/author/dhtml/reference/colors/colors.asp">颜色表</a>中的颜色名称或RGB值。</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-bottom-style</strong></td> 
      <td> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>none</td> 
          <td>默认。不绘制边框，忽略任何边框宽度。</td>
         </tr> 
         <tr> 
          <td>dotted</td> 
          <td>边框是一条(dotted)虚线。</td>
         </tr> 
         <tr> 
          <td>dashed</td> 
          <td>边框是一条(dashed)虚线。</td>
         </tr> 
         <tr> 
          <td>solid</td> 
          <td>边框是一条(solid)实线。</td>
         </tr> 
         <tr> 
          <td>double</td> 
          <td>边框是画在对象背景上的双线。两条线和它们中间的空间之和等于<strong>borderWidth</strong>。边框宽度最少得3像素宽才能绘制一条双线边框。</td>
         </tr> 
         <tr> 
          <td>groove</td> 
          <td>3D 凹槽边框。其效果取决于 border-color 的值。</td>
         </tr> 
         <tr> 
          <td>ridge</td> 
          <td>3D 垄状边框。其效果取决于 border-color 的值。</td>
         </tr> 
         <tr> 
          <td>inset</td> 
          <td>3D inset 边框。其效果取决于 border-color 的值。</td>
         </tr> 
         <tr> 
          <td>outset</td> 
          <td>3D outset 边框。其效果取决于 border-color 的值。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-bottom-width</strong></td> 
      <td> 
       <div>
        指定下面中的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td width="84">medium</td> 
          <td>默认。</td>
         </tr> 
         <tr> 
          <td>thin</td> 
          <td>比默认宽度窄些。</td>
         </tr> 
         <tr> 
          <td>thick</td> 
          <td>比默认宽度粗些。</td>
         </tr> 
         <tr> 
          <td>width</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle"><strong>%% 单位</strong></td> 
          <td bgcolor="#ffe4ca" valign="middle"><a href="fspu.whtm"><strong>占剩余空间的百分比</strong></a><strong>.</strong></td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-radius</strong></td> 
      <td>
       <p>border-radius 属性是一个简写属性，用于设置四个 border-*-radius 属性。</p>
       <p class="tip"><span>提示：</span>该属性允许您为元素添加圆角边框！</p>
      </td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-collapse*</strong></td> 
      <td>
      <p>border-collapse 属性设置表格的边框是否被合并为一个单一的边框，还是象在标准的 HTML 中那样分开显示。</p>
      <table class="dataintable">
      <tr>
       <td>separate</td>
       <td>默认值。边框会被分开。不会忽略 border-spacing 和 empty-cells 属性。</td>
      </tr>
      <tr>
       <td>collapse</td>
       <td>如果可能，边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性。</td>
      </tr>
      <tr>
       <td>inherit</td>
       <td>规定应该从父元素继承 border-collapse 属性的值。</td>
      </tr>
      </table>
      </td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-color</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-left</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-left-color</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-left-style</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-left-width</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-right</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-right-color</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-right-style</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-right-width</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-style</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-top</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-top-color</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-top-style</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-top-width</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>border-width</strong></td> 
      <td>as per CSS</td>
     </tr> 
     <tr>
       <td nowrap="" align="right"><b>border-radius</b></td>
       <td>	
         <p>as per CSS:</p>
         <ul>
           <li>1、2、3、4个&lt;长度&gt;或&lt;百分比&gt;值。用于指定4个角的弧度值。</li>
           <li>followed optionally by &quot;/&quot; and one, two, three, or four &lt;length&gt; or &lt;percentage&gt; values. This is used to set an additional radius, so you can have elliptical corners.</li>
         </ul>
        <p>当前限制: 所以边框的非零边弧度边框的颜色值应该相同。</p>
      </td>
     </tr>
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>box-shadow</strong></td> 
      <td><pre><code>box-shadow: <i>h-shadow</i> <i>v-shadow</i> <i>blur</i> <i>spread</i> <i>color</i> inset;</code></pre>  
       <p> 向框添加一个或多个阴影。该属性是由逗号分隔的阴影列表，每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略长度的值是 0。</p>
       </td> 
      </tr>
</table>

<table>
<tr>
<th >值</th>
<th>描述</th>
</tr>

<tr>
<td><i>h-shadow</i></td>
<td>必需。水平阴影的位置。允许负值。</td>
</tr>

<tr>
<td><i>v-shadow</i></td>
<td>必需。垂直阴影的位置。允许负值。</td>
</tr>

<tr>
<td><i>blur</i></td>
<td>可选。模糊距离。</td>
</tr>

<tr>
<td><i>spread</i></td>
<td>可选。阴影的尺寸。</td>
</tr>

<tr>
<td><i>color</i></td>
<td>可选。阴影的颜色。请参阅 CSS 颜色值。</td>
</tr>

<tr>
<td>inset</td>
<td>可选。将外部阴影 (outset) 改为内部阴影。</td>
</tr>
</table>

<table>
        <tr>
            <td nowrap="" valign="top" align="right"><strong>clear</strong></td>
            <td>
                <p>规定元素的哪一侧不允许其他浮动元素。</p>
                <p>clear 属性定义了元素的哪边上不允许出现浮动元素。在 CSS1 和 CSS2 中，这是通过自动为清除元素（即设置了 clear 属性的元素）增加上外边距实现的。在 CSS2.1中，会在元素上外边距之上增加清除空间，而外边距本身并不改变。不论哪一种改变，最终结果都一样，如果声明为左边或右边清除，会使元素的上外边框边界刚好在该边上浮动元素的下外边距边界之下。</p>
            </td>
        <tr>
            <td>left</td>
            <td>在左侧不允许浮动元素。</td>
        </tr>
        <tr>
            <td>right</td>
            <td>在右侧不允许浮动元素。</td>
        </tr>
        <tr>
            <td>both</td>
            <td>在左右两侧均不允许浮动元素。</td>
        </tr>
        <tr>
            <td>none</td>
            <td>默认值。允许浮动元素出现在两侧。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承 clear 属性的值。</td>
        </tr>
</table>

指定下面的值之一：
<table> 
        <tbody>
         <tr> 
          <td>none</td> 
          <td>默认。元素不浮动，并会显示在其在文本中出现的位置。</td>
         </tr> 
         <tr> 
          <td>left</td> 
          <td>元素向左浮动。</td>
         </tr> 
         <tr> 
          <td>right</td> 
          <td>元素向右浮动。</td>
         </tr>
         <tr> 
          <td>inherit</td> 
          <td>规定应该从父元素继承 float 属性的值。</td>
         </tr>
        </tbody>
       </table>

<table>
  <tr> 
      <td nowrap="" valign="top" align="right"><strong>margin</strong></td> 
      <td> 
      <p>该属性可以有 1 到 4 个值。</p>   
      <p>这个简写属性设置一个元素所有外边距的宽度，或者设置各边上外边距的宽度。</p>
      <p>块级元素的垂直相邻外边距会合并，而行内元素实际上不占上下外边距。行内元素的的左右外边距不会合并。同样地，浮动元素的外边距也不会合并。允许指定负的外边距值，不过使用时要小心。</p>
	  <p class="note"><span>注释：</span>允许使用负值。</p>
       <div>
        参见: <a href="http://www.w3.org/TR/CSS1#margin">层级样式表CSS1</a>
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>margin-bottom</strong></td> 
      <td> 
       <div>
        指定下面的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>auto</td> 
          <td>默认。底部外边距等于顶部外边距。</td>
         </tr> 
         <tr> 
          <td>height</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象高度的百分比。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle"><strong>%% 单位</strong></td> 
          <td bgcolor="#ffe4ca" valign="middle"><strong>占自由空间的百分比</strong></td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>margin-left</strong></td> 
      <td><strong>--&quot;--</strong></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>margin-right</strong></td> 
      <td>--&quot;--</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>margin-top</strong></td> 
      <td>--&quot;--</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>padding</strong></td> 
      <td> 
       <div>
        设置或获取元素与它的外边距间插入的空间尺寸(内边距)，如果有边框，则是对象与边框间的空间尺寸。
<p>这个简写属性设置元素所有内边距的宽度，或者设置各边上内边距的宽度。行内非替换元素上设置的内边距不会影响行高计算；因此，如果一个元素既有内边距又有背景，从视觉上看可能会延伸到其他行，有可能还会与其他内容重叠。元素的背景会延伸穿过内边距。不允许指定负边距值。</p>
       </div> 
       <div>
        指定下面的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>length</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象宽度的百分比。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle"><strong>%% 单位</strong></td> 
          <td bgcolor="#ffe4ca" valign="middle"><strong>占自由空间的百分比。</strong></td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>padding-bottom</strong></td> 
      <td>--&quot;--</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>padding-left</strong></td> 
      <td>--&quot;--</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>padding-right</strong></td> 
      <td>--&quot;--</td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>padding-top</strong></td> 
      <td>--&quot;--</td>
     </tr> 
     <tr> 
      <td rowspan="7" valign="top"> 
       <div>
        <strong>分类属性</strong>
       </div> 
       <div></div></td> 
      <td nowrap="" valign="top" align="right"><strong>list-style</strong></td> 
      <td> 
       <div>
        指定1到3个下面的属性, 可以任意顺序: type, position, image。
       </div> 
       <div>
        参见: <a href="http://www.w3.org/TR/CSS1#list-style">层级样式表CSS1</a>
       </div></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>list-style-image</strong></td> 
      <td> 
       <div>
        指定以下值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>none</td> 
          <td>默认。没有指定图像。</td>
         </tr> 
         <tr> 
          <td>url(sURL)</td> 
          <td>图像的地址，其中sURL既可以是绝对也可以是相对URL地址。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>list-style-position</strong></td> 
      <td> 
       <div>
       <p>设置在何处放置列表项标记。</p>
       <p>该属性用于声明列表标志相对于列表项内容的位置。外部 (outside) 标志会放在离列表项边框边界一定距离处，不过这距离在 CSS 中未定义。内部 (inside) 标志处理为好像它们是插入在列表项内容最前面的行内元素一样。</p>
        指定以下值之一：
       </div> 
       <table class="dataintable">
         <tr>
           <td>inside</td>
           <td>列表项目标记放置在文本以内，且环绕文本根据标记对齐。</td>
         </tr>
         <tr>
           <td>outside</td>
           <td>默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。</td>
         </tr>
         <tr>
           <td>inherit</td>
           <td>规定应该从父元素继承 list-style-position 属性的值。</td>
         </tr>
         </table>
       </td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>list-style-type</strong></td> 
      <td> 
       <div>
	   <p>设置列表项标记的类型。</p>
        指定下面的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td nowrap="" valign="middle">disc</td> 
          <td>默认。标记是实心圆。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">circle</td> 
          <td>标记是空心圆。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">square</td> 
          <td>标记是实心方块。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">decimal</td> 
          <td>标记是数字，如：1, 2, 3, 4等。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">lower-roman</td> 
          <td>小写罗马数字(i, ii, iii, iv, v, 等)。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">upper-roman</td> 
          <td>大写罗马数字(I, II, III, IV, V, 等)。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">lower-alpha</td> 
          <td>小写英文字母(a, b, c, d, e, 等)。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">upper-alpha</td> 
          <td>大写英文字母(A, B, C, D, E, 等)。</td>
         </tr> 
         <tr> 
          <td nowrap="" bgcolor="#ffe4ca" valign="middle">tree-line</td> 
          <td bgcolor="#ffe4ca" valign="middle">画树线。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="middle">none</td> 
          <td>没有标记。</td>
         </tr>
        </tbody>
       </table></td>
     </tr>
     <tr> 
      <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>list-marker-color</strong></td> 
      <td bgcolor="#ffe4ca">设置列表标记(实心圆(方块)、数字、树线)的颜色。</td>
     </tr> 
     <tr> 
      <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>list-marker-size</strong></td> 
      <td bgcolor="#ffe4ca">设置画实心圆(方块)、数字的字体尺寸。对于list-style-type:tree-line属性是设置树线的宽度。</td>
     </tr>
     <tr> 
      <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>list-marker-style</strong></td> 
      <td bgcolor="#ffe4ca"> 
       <div>
        对于list-style-type:tree-line属性，是设置树线的样式:
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>none</td> 
          <td>默认。不画线，忽略边框宽度。</td>
         </tr> 
         <tr> 
          <td>dotted</td> 
          <td>点划线(Dotted)。</td>
         </tr> 
         <tr> 
          <td>dashed</td> 
          <td>虚线(Dashed)。</td>
         </tr> 
         <tr> 
          <td>solid</td> 
          <td>边框是实线(solid)。</td>
         </tr>
        </tbody>
       </table></td>
     </tr>
     <tr>
            <td rowspan="19" valign="top">
                <div>
                    <strong>定位和尺寸属性</strong>
                </div>
                <div></div>
            </td>
            <td nowrap="" valign="top" align="right"><strong>position</strong></td>
            <td>
                <p>规定元素的定位类型。</p>
                <p>这个属性定义建立元素布局所用的定位机制。任何元素都可以定位，不过绝对或固定元素会生成一个块级框，而不论该元素本身是什么类型。相对定位元素会相对于它在正常流中的默认位置偏移。</p>
                <div>
                    可能的值为：
                    <table class="dataintable">
                        <tr>
                            <td>absolute</td>
                            <td>
                                <p>生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。</p>
                                <p>元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>fixed</td>
                            <td>
                                <p>生成绝对定位的元素，相对于浏览器窗口进行定位。</p>
                                <p>元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>relative</td>
                            <td>
                                <p>生成相对定位的元素，相对于其正常位置进行定位。</p>
                                <p>因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。</p>
                            </td>
                        </tr>
                        <tr>
                            <td>static</td>
                            <td>默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。</td>
                        </tr>
                        <tr>
                            <td>inherit</td>
                            <td>规定应该从父元素继承 position 属性的值。</td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
        <tr> 
      <td nowrap="" valign="top" align="right"><strong>left</strong></td> 
      <td rowspan="4"> 
       <div>
        参考<a href="http://www.w3.org/TR/REC-CSS2/visuren.html#positioning-scheme">CSS2建议</a>。
       </div> 
       <div>
        指定以下值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>auto</td> 
          <td>默认。</td>
         </tr> 
         <tr> 
          <td>height</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象高度的百分比，必须显示指定，不允许负值。</td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>right</strong></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>top</strong></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>bottom</strong></td>
     </tr> 
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>height</strong></td> 
      <td> 
       <div>
        指定以下值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td valign="top">auto</td> 
          <td>默认。</td>
         </tr> 
         <tr> 
          <td valign="top">height</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td valign="top">percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象高度的百分比，必须显示指定，不允许为负值。</td>
         </tr> 
         <tr> 
          <td valign="top"><strong>%% 单位</strong></td> 
          <td bgcolor="#ffe4ca" valign="middle">占自由空间的百分比。</td>
         </tr> 
         <tr> 
          <td valign="top"><strong>width(NN%)</strong></td> 
          <td bgcolor="#ffe4ca" valign="middle">设置高度为该元素宽度的百分比值。该属性运行元素师保持比例缩放。</td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr>
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>z-index</strong></td> 
      <td>
      <p>设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。</p>
      <p class="note"><span>注释：</span>元素可拥有负的 z-index 属性值。</p>
      <p class="note"><span>注释：</span>Z-index 仅能在定位元素上奏效（例如 position:absolute;）！</p>
      <p>该属性设置一个定位元素沿 z 轴的位置，z 轴定义为垂直延伸到显示区的轴。如果为正数，则离用户更近，为负数则表示离用户更远。</p>
可能的值：
<table class="dataintable">
<tr>
<td>auto</td>
<td>默认。堆叠顺序与父元素相等。</td>
</tr>
<tr>
<td><i>number</i></td>
<td>设置元素的堆叠顺序。</td>
</tr>
<tr>
<td>inherit</td>
<td>规定应该从父元素继承 z-index 属性的值。</td>
</tr>
</table>
      </td>
     </tr>
     <tr> 
      <td nowrap="" valign="top" align="right"><strong>overflow</strong></td> 
      <td valign="middle"> 
       <div>
        <p>规定当内容溢出元素框时发生的事情。它是overflow-x和overflow-y的简写形式。</p>
        <p>这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。</p>
        <p>格式：overflow-type [scroll-manner]。</p>
		<p>第一个overflow-type的值为以下值：</p>
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>visible</td> 
          <td>默认值。内容不会被修剪，会呈现在元素框之外，不会出现滚动条。</td>
         </tr> 
         <tr> 
          <td>scroll</td> 
          <td>内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。</td>
         </tr> 
         <tr> 
          <td>hidden</td> 
          <td>内容会被修剪，并且其余内容是不可见的，不会出现滚动条。</td>
         </tr> 
         <tr> 
          <td>auto</td> 
          <td>如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle">hidden-scroll</td> 
          <td bgcolor="#ffe4ca" valign="middle">滚动条不显示，但是元素的内容是可以滚动的。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle">scroll-indicator</td> 
          <td bgcolor="#ffe4ca" valign="middle">当鼠标经过该元素时显示滚动位置指示器。</td>
         </tr>
         <tr>
           <td bgcolor="#ffe4ca" valign="middle">none</td>
           <td bgcolor="#ffe4ca" valign="middle">等价于代码：<code>{ overflow:visible; min-width:min-content; min-height:min-content; }</code></td>
         </tr>
        </tbody>
       </table> 
       <div>
        第二个参数(可选)是scroll-manner()函数的定义，见下面的scroll-manner的定义。
       </div></td>
     </tr>
     <tr> 
      <td valign="top" align="right"><strong>overflow-x<br />overflow-y</strong></td> 
      <td> 
       <div>
        <p>格式：overflow-type [scroll-manner]。</p>
		<p>第一个overflow-type的值为以下值：</p>
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>visible</td> 
          <td>默认值。内容不会被修剪，会呈现在元素框之外，不会出现滚动条。</td>
         </tr> 
         <tr> 
          <td>scroll</td> 
          <td>内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。</td>
         </tr> 
         <tr> 
          <td>hidden</td> 
          <td>内容会被修剪，并且其余内容是不可见的，不会出现滚动条。</td>
         </tr> 
         <tr> 
          <td>auto</td> 
          <td>如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle">hidden-scroll</td> 
          <td bgcolor="#ffe4ca" valign="middle">滚动条不显示，但是元素的内容是可以滚动的。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle">scroll-indicator</td> 
          <td bgcolor="#ffe4ca" valign="middle">当鼠标经过该元素时显示滚动位置指示器。</td>
         </tr>
         <tr>
           <td bgcolor="#ffe4ca" valign="middle">none</td>
           <td bgcolor="#ffe4ca" valign="middle">
             等价于代码：<code>{ overflow:visible; min-width:min-content; }</code>或者<br/>
             <code>{ overflow:visible; min-height:min-content; }</code>。
           </td>
         </tr>
        </tbody>
       </table> 
       <div>
        第二个参数(可选)是scroll-manner()函数的定义，见下面的scroll-manner的定义。
       </div></td>
     </tr> 
     <tr> 
      <td bgcolor="#ffe4ca" valign="top" align="right"> 
       <div>
        <strong>scroll-manner</strong>
       </div> 
       <div>
        <strong>scroll-manner-x</strong>
       </div> 
       <div>
        <strong>scroll-manner-y</strong>
       </div></td> 
      <td bgcolor="#ffe4ca"> 
       <div>
        这些属性可以接受<em>inherit</em>值，或者<em>scroll-manner()</em>函数，<em>scroll-manner()</em>的参数可以为:
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td nowrap="" valign="top"><em>inherit</em></td> 
          <td>默认值。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="top"><em>animation : </em>true | false</td> 
          <td>启用/禁用 所有的****-animation属性。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="top"><em>page-animation : </em>true | false</td> 
          <td>如果为true,则UP/DOWN按键将引起平滑滚动<strong>页</strong>动画。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="top"><em>step-animation</em> : true | false</td> 
          <td>如果为true,则UP/DOWN按键将引起平滑滚动动画。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="top"><em>home-animation</em> : true | false</td> 
          <td>如果为true,则HOME/END按键将引起平滑滚动动画。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="top"><em>wheel-animation</em> : true | false</td> 
          <td>如果为true,则鼠标滚轮事件将引起平滑滚动动画。</td>
         </tr> 
         <tr> 
          <td nowrap="" valign="top"><em>step</em> : length | percent | auto</td> 
          <td> 
           <div>
            一次滚动的步长(UP/DOWN按键)的计算基于第一个可见元素的尺寸。滚动步长的length值将转换成像素值。percent值将基于对应元素的尺寸计算。 
           </div> 
           <div>
            默认值是宽度或高度的6.25% (1/16)。 
            <em>auto</em> 意味着&quot;积分步长&quot; - 滚动整行。
           </div></td>
         </tr> 
         <tr> 
          <td nowrap="" valign="top"><em>page</em> : length | percent | auto</td> 
          <td> 
           <div>
            <em>auto</em>意思是&quot;积分步长&quot; - 单次滚动步长(UP/DOWN按键)的计算基于最后一个可见项的尺寸。滚动步长的length值将转换成像素值。percent值将基于对应元素的尺寸计算。
           </div> 
           <div>
            默认值是100% - 元素的整个滚动区域的宽度或高度。
           </div></td>
         </tr>
         <tr>
          <td nowrap="" valign="top"><em>wheel-step</em> : length | percent | auto</td>
          <td>
            <div>当每次接收到MOUSE_WHEEL事件时，当前滚动位置的增量。</div>
          </td>
         </tr>
        </tbody>
       </table> 
       <div>
        滚动条手动滚动样式的定义示例：
       </div> 
       <div>
        <font face="Courier New">div#scrollable {</font>
       </div> 
       <div>
        <font face="Courier New">&nbsp;overflow:auto;</font>
       </div> 
       <div>
        <strong><font face="Courier New">&nbsp;scroll-manner</font></strong>
        <font face="Courier New">: scroll-manner( page-animation:true,</font>
       </div> 
       <div>
        <font face="Courier New">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;step-animation:false, &nbsp;&nbsp;</font>
       </div> 
       <div>
        <font face="Courier New">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;step:auto );</font>
       </div> 
       <div>
        <font face="Courier New">}</font>
       </div></td>
     </tr>
     <tr> 
      <td valign="top" align="right"><strong>width</strong></td> 
      <td> 
       <div>
        指定下面的值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>auto</td> 
          <td>默认。元素的默认宽度。</td>
         </tr> 
         <tr> 
          <td>width</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于父对象宽度的百分比，不需要负值。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle"><strong>%% 单位</strong></td> 
          <td bgcolor="#ffe4ca" valign="middle"><strong>占容器的自由空间的百分比。</strong></td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td valign="top" align="right"><strong>min-height</strong></td> 
      <td> 
       <div>
        指定元素的最小高度。
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>length</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td>整数值, 后面跟个百分号(%)。相对于容器块高度的百分比作为元素的最小高度。如果包含块的高度没有显示指定，则该元素没有最小高度，该属性被解释成0%。要获取更多的关于包含块和怎么计算它的高度，参见<a href="http://www.w3.org/tr/rec-css2" target="_top">层级样式表(CSS2)</a>规范。</td>
         </tr> 
         <tr> 
          <td valign="top"><strong>width(NN%)</strong></td> 
          <td bgcolor="#ffe4ca" valign="middle">将会设置min-height为元素本身宽度的百分比值。这种值允许元素保持宽高比。</td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td valign="top" align="right"><strong>min-width</strong></td> 
      <td> 
       <div>
        指定元素的最小宽度。
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>length</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td> 
           <div>
            整数值, 后面跟个百分号(%)。相对于父对象宽度的百分比，不允许负值。
           </div> 
           <div>
            要获取更多关于包含块的信息和怎样计算它的宽度，参见<a href="http://www.w3.org/tr/rec-css2" target="_top">层级样式表2(CSS2)</a>规范。
           </div></td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle">auto</td> 
          <td bgcolor="#ffe4ca" valign="middle"> 
           <div>
            min-width等于元素的最小内在宽度。
           </div> 
           <div>
            在Sciter/HTMLayout中，所有元素默认情况下都会获取这个值来模仿IE行为。非标准。 
           </div></td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td valign="top" align="right"><strong>max-height</strong></td> 
      <td> 
       <div>
        指定元素的最大宽度。
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>length</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td> 
           <div>
            整数值, 后面跟个百分号(%)。相对于父对象高度的百分比。不允许负值。
           </div> 
           <div>
            更多关于包含块和怎么计算它的高度的信息，请参见<a href="http://www.w3.org/tr/rec-css2" target="_top">层级样式表2(CSS2)</a>规范。
           </div></td>
         </tr> 
         <tr> 
          <td valign="top"><strong>width(NN%)</strong></td> 
          <td bgcolor="#ffe4ca" valign="middle">将会设置max-height为元素本身宽度的百分比值。这种值允许元素保持宽高比。</td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td valign="top" align="right"><strong>max-width</strong></td> 
      <td> 
       <div>
        指定元素的最大宽度。
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>length</td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>percentage</td> 
          <td> 
           <div>
            整数值, 后面跟个百分号(%)。相对于父对象高度的百分比。不允许负值。
           </div> 
           <div>
            更多关于包含块和怎么计算它的高度的信息，请参见<a href="http://www.w3.org/tr/rec-css2" target="_top">层级样式表2(CSS2)</a>规范。
           </div></td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle">auto</td> 
          <td bgcolor="#ffe4ca" valign="middle"> 
           <div>
            max-width等于元素的最大内在宽度。
           </div> 
           <div>
		    在Sciter\HTMLayout中，&lt;TABLE&gt;默认有这个值。它允许在未设置width属性时来决定table的尺寸。
           </div> 
           <div>
            非标准。
           </div> 
           <div>
            示例：边框看起来像是设置了max-width:auto:
           </div> 
           <table border="1" cellspacing="1"> 
            <tbody>
             <tr> 
              <td>这个表(table)没有设置width属性。</td>
             </tr>
            </tbody>
           </table></td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr>
     <tr> 
      <td bgcolor="#ffe4ca" valign="top" align="right"><a name="flow-attribute"><strong>flow</strong></a></td> 
      <td bgcolor="#ffe4ca" valign="middle"> 
       <div>
        在块容器(如DIV)中子元素的流式布局方向(Flow direction)。这个属性定义了块容器使用的<em>布局管理器(layout manager)</em>(LM)。
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td><strong>vertical</strong></td> 
          <td>默认值。块元素中的所有子元素按照从上到下的位置摆放，是HTML中DIV的标准行为。</td>
         </tr> 
         <tr> 
          <td><strong>horizontal</strong></td> 
          <td>块元素中的所有子元素按照从左到右的位置摆放成一行。</td>
         </tr> 
         <tr> 
          <td><strong>horizontal-flow</strong></td> 
          <td>多行布局。 块元素中的所有子元素按照从左到右的位置摆放，当超出块边界时转换到下一行。在这个布局中height:100%%等于一行的高度。</td>
         </tr> 
         <tr> 
          <td><strong>vertical-flow</strong></td> 
          <td>多列布局。 块元素中的所有子元素按照从上到下的位置摆放，当超出块边界时转换到下一列。在这个布局中width:100%%等于一列的宽度。</td>
         </tr> 
         <tr> 
          <td><strong>&quot;...模板...&quot;</strong></td> 
          <td></td>
         </tr>
         <tr> 
          <td><strong>stack</strong></td> 
          <td>
		  标签页容器。子元素作为卡片堆叠在一起。子元素的渲染顺序由子元素的z-index属性定义。每个子元素的弹力单位的计算都是独立的。
		  </td>
         </tr>
		 <tr> 
          <td><strong>text</strong></td> 
          <td></td>
         </tr>
        </tbody>
       </table> 
       <div>
        更多信息参见 <a href="http://www.terrainformatica.com/w3/flex-layout/flex-layout.htm">流式布局和弹力单位</a> 文档。
       </div></td>
     </tr>
     <tr> 
      <td bgcolor="#ffe4ca" valign="top" align="right"><a name="hit-margin"><strong>hit-margin</strong></a></td> 
      <td bgcolor="#ffe4ca" valign="middle">指定下面的1到4个以空格分隔的值。语法于<em>margin</em>属性相同。hit-margin 定义元素的&quot;悬停区域&quot;。正数/负数 增加/减少 悬停区域。hit-margin的计算从元素边框(border)盒开始。</td>
     </tr> 
     <tr> 
      <td bgcolor="#ffe4ca" valign="top" align="right"><strong>size</strong></td> 
      <td bgcolor="#ffe4ca" valign="middle">length [ length] 
       <div>
        这个属性是width、height属性的简写形式。如果只提供了一个值，则width和height都等于这个值。如果提供了两个值，则第一个值是width，第二个值是height。
       </div></td>
     </tr>
     <tr> 
      <td bgcolor="#ffe4ca" valign="top" align="right"><strong>mapping</strong></td> 
      <td bgcolor="#ffe4ca" valign="middle"><em>inherit</em> | <em>none</em> | <em>left-to-right</em> | <em>top-to-right</em> |<br /><em>inherit( &lt;part-list&gt; )</em> | <em>none( &lt;part-list&gt; )</em> | <em>left-to-right( &lt;part-list&gt; )</em> | <em>top-to-right( &lt;part-list&gt; )</em> 
	  <p>其中，<font face="monospace" size="2">&lt;part-list&gt;</font>是一个以逗号分隔的列表，它包含了一个或多个下面的描述: <font face="monospace" size="2">border</font>, <font face="monospace" size="2">padding</font>, <font face="monospace" size="2">margin</font>, <font face="monospace" size="2">background</font>, <font face="monospace" size="2">foreground</font>, <font face="monospace" size="2">layout</font>。</p> 
	  <p>该属性设置方向相关属性的映射。如下面的声明:</p>
    <pre v-pre><code> div::marker {
  size:1em;
  margin:*;
  background:red; 
  border-radius:0.5em;
} </code></pre>
<p>会导致边框(颜色、宽度、样式)和外边距的左和右进行交换(即镜像)，所以示例中左边框会当做右边框，右边框会当做左边框来绘制。</p>
注意：该属性默认是可继承的。所以定义<font face="monospace" size="2">body { mapping: left-to-right;}</font>后，该元素和它的继承元素的方向属性都会进行左右镜像转换。<font face="monospace" size="2">&lt;part-list&gt;</font>中名称的含义: 
       <ul> 
        <li><font face="monospace" size="2">border</font> - 边框的所有相关属性: color, style, width。</li> 
        <li><font face="monospace" size="2">padding</font> - 所有内边距属性: padding-left, padding-right等。</li> 
        <li><font face="monospace" size="2">margin</font> - 所有外边距属性: margin-left, margin-right, hit-margin等。</li> 
        <li><font face="monospace" size="2">background</font> - 有方向的背景属性: background-position, background-image , 背景渐变。</li> 
        <li><font face="monospace" size="2">foreground</font> - 有方向的前景属性: foreground-position, foreground-image。</li> 
        <li><font face="monospace" size="2">layout</font> - 例如：<font face="monospace" size="2">flow:horizontal; mapping: left-to-right(layout);</font> 将会导致子元素从右到左的方向放置。</li>
       </ul></td>
     </tr>
     <tr> 
      <td rowspan="5" valign="top"> 
       <div>
        <strong>轮廓(Outline)</strong>
       </div> <p><font size="1">轮廓与边框相似，不过它们有以下不同:</font></p> 
       <div>
        <font size="1">1. 轮廓不会占用空间。</font>
       </div> 
       <div>
        <font size="1">2. 轮廓矩形的所有边界拥有相同的属性值。</font>
       </div></td> 
      <td valign="top" align="right"><strong>outline</strong></td> 
      <td nowrap="" valign="top">
       <div>
      <p>outline （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。</p>
      <p class="note"><span>注释：</span>轮廓线不会占据空间，也不一定是矩形。</p>
      <p>outline 简写属性在一个声明中设置所有的轮廓属性。</p>
      <p>可以按顺序设置如下属性：</p>
      <ul>
      <li>outline-color</li>
      <li>outline-style</li>
      <li>outline-width</li>
      </ul>
      <p>如果不设置其中的某个值，也不会出问题，比如 outline:solid #ff0000; 也是允许的。</p>
        可以指定以下值:
       </div> 
       <div>
        [ &lt;'outline-color'&gt; || &lt;'outline-style'&gt; || [&lt;'outline-width'&gt; [ &lt;'outline-offset'&gt; ] ]
       </div></td>
     </tr> 
     <tr> 
      <td valign="top" align="right"><strong>outline-width</strong></td> 
      <td nowrap="" valign="top"> 
       <div>
        轮廓宽度:
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td width="84" align="right"><em>medium</em></td> 
          <td>默认值。</td>
         </tr> 
         <tr> 
          <td align="right"><em>thin</em></td> 
          <td>比默认宽度细。</td>
         </tr> 
         <tr> 
          <td align="right"><em>thick</em></td> 
          <td>比默认宽度粗。</td>
         </tr> 
         <tr> 
          <td align="right"><em>width</em></td> 
          <td>浮点数字, 后面跟个绝对长度单位(cm、mm、in、pt、pc、px) 或一个相对长度单位(em、ex)。要获取更多关于长度单位的信息，请参见<a href="http://www.w3.org/TR/CSS1#length-units">CSS长度单位指南</a>。</td>
         </tr> 
         <tr> 
          <td>calc(...)</td> 
          <td><a href="csss!-calc-function.htm">calc函数</a>。</td>
         </tr>
        </tbody>
       </table></td>
     </tr>
     <tr> 
      <td valign="top" align="right"><strong>outline-style</strong></td> 
      <td nowrap="" valign="top"> 
       <div>
        指定以下值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td align="right"><em>none</em></td> 
          <td>默认值。不绘制边框，忽略边框宽度。</td>
         </tr> 
         <tr> 
          <td align="right"><em>dotted</em></td> 
          <td>轮廓是点划线(dotted)。</td>
         </tr> 
         <tr> 
          <td align="right"><em>dashed</em></td> 
          <td>轮廓是虚线(dashed)。</td>
         </tr> 
         <tr> 
          <td align="right"><em>solid</em></td> 
          <td>轮廓是实线。</td>
         </tr>
		 <tr> 
          <td align="right"><em>glow</em></td> 
          <td>轮廓有光晕效果。</td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td valign="top" align="right"><strong>outline-color</strong></td> 
      <td nowrap="" valign="top">轮廓的颜色。</td>
     </tr> 
     <tr> 
      <td valign="top" align="right"><strong>outline-offset</strong></td> 
      <td valign="top">长度单位, 轮廓的偏移量。正数值-向外偏移, 负数值-向内偏移。CSS3属性。</td>
     </tr> 
     <tr> 
      <td rowspan="5" valign="top"> 
       <div>
        <strong>伪类和其他属性</strong>
       </div> 
       <div></div></td> 
      <td nowrap="" valign="top" align="right"><strong>cursor</strong></td> 
      <td><em>auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help | progress</em>值或.cur/.ani类型文件的URL。</td>
     </tr>
     <tr>
            <td nowrap="" valign="top" align="right"><strong>display</strong></td>
            <td>
                <p>display 属性规定元素应该生成的框的类型。</p>
                <p>这个属性用于定义建立布局时元素生成的显示框类型。对于 HTML 等文档类型，如果使用 display 不谨慎会很危险，因为可能违反 HTML 中已经定义的显示层次结构。对于 XML，由于 XML
                    没有内置的这种层次结构，所有 display 是绝对必要的。</p>
                <p class="note"><span>注释：</span>CSS2 中有值 compact 和 marker，不过由于缺乏广泛的支持，已经从 CSS2.1 中去除了。</p>
                <div>
                    可能的值：
                    <table class="dataintable">
                        <tr>
                            <td>none</td>
                            <td>此元素不会被显示。</td>
                        </tr>
                        <tr>
                            <td>block</td>
                            <td>此元素将显示为块级元素，此元素前后会带有换行符。</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>默认。此元素会被显示为内联元素，元素前后没有换行符。</td>
                        </tr>
                        <tr>
                            <td>inline-block</td>
                            <td>行内块元素。（CSS2.1 新增的值）</td>
                        </tr>
                        <tr>
                            <td>list-item</td>
                            <td>此元素会作为列表显示。</td>
                        </tr>
                        <tr>
                            <td>contents</td>
                            <td>此元素会作为文本内容。</td>
                        </tr>
                        <tr>
                            <td>table</td>
                            <td>此元素会作为块级表格来显示（类似 &lt;table&gt;），表格前后带有换行符。</td>
                        </tr>
                        <tr>
                            <td>inline-table</td>
                            <td>此元素会作为内联表格来显示（类似 &lt;table&gt;），表格前后没有换行符。</td>
                        </tr>
                        <tr>
                            <td>table-row</td>
                            <td>此元素会作为一个表格行显示（类似 &lt;tr&gt;）。</td>
                        </tr>
                        <tr>
                            <td>table-cell</td>
                            <td>此元素会作为一个表格单元格显示（类似 &lt;td&gt; 和 &lt;th&gt;）</td>
                        </tr>
                        <tr>
                            <td>table-body</td>
                            <td>此元素会作为一个表格体</td>
                        </tr>
                        <tr>
                            <td>inherit</td>
                            <td>规定应该从父元素继承 display 属性的值。</td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
        <tr>
            <td nowrap="" valign="top" align="right"><strong>visibility</strong></td>
            <td>
                <p>visibility 属性规定元素是否可见。</p>
                <p>这个属性指定是否显示一个元素生成的元素框。这意味着元素仍占据其本来的空间，不过可以完全不可见。</p>
                可能的值有：
                <table>
                    <tbody>
                        <tr>
                            <td align="right"><em>visible</em></td>
                            <td>默认值。元素可见且占用空间;</td>
                        </tr>
                        <tr>
                            <td align="right"><em>hidden</em></td>
                            <td>元素不可见，但占用空间;</td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffe4ca" align="right"><em>none</em></td>
                            <td bgcolor="#ffe4ca">Sciter独有, 元素从渲染树上移除，等同于 display:none。</td>
                        </tr>
                        <tr>
                            <td align="right"><em>collapse</em></td>
                            <td>元素不可见，且不占用空间;</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <font color="#990033">注意: Sciter\HTMLayout对<em>collapse</em>值进行了扩展，它不仅支持标准CSS中的表格(table),
                        也支持所有的其他元素。<em>visibility:
                            collapse</em>等同于<em>display:none</em>，不过collapsed元素会参与容器的内在宽度的计算，因此动态修改visibility:visible成visibility:collapse不会引起容器元素的宽度计算改变。
                    </font>
                </p>
                <p>
                    <font color="#990033">
                        推荐通过visibility:visible/collapse来设置动态的隐藏/显示效果。通过设置display:none来隐藏元素是很容易的，但是重新显示它会比较麻烦——有多种display值可供选择:
                        block, inline-block, list-item等。</font>
                </p>
            </td>
        </tr>
        <tr> 
      <td bgcolor="#ffffdd" valign="top" align="right"><strong>direction</strong></td> 
      <td bgcolor="#ffffdd"> 
       <div>
        指定以下值之一：
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>ltr</td> 
          <td>默认，内容从左到右布局。</td>
         </tr> 
         <tr> 
          <td>rtl</td> 
          <td>默认，内容从右到左布局。</td>
         </tr> 
         <tr> 
          <td>inherit</td> 
          <td>内容布局从父元素继承。</td>
         </tr>
        </tbody>
       </table></td>
     </tr>
     <tr>
            <td bgcolor="#ffffdd" valign="top" align="right"><strong>transition</strong></td>
            <td bgcolor="#ffffdd">
                <div>定义修改元素状态时的过渡效果。 值的格式如下:</div>
                <pre v-pre><code>propname(easeFunc,duration[,easeFuncRollback,durationRollback])</code></pre>
                <div>其中 <i>propname</i> 是一个可做动画的CSS属性名称，<i>easeFunc</i> 是一个动画擦除函数, 为下面的值之一:</div>
                <pre v-pre><code>none 
                    linear 
                    quad-in    quad-out    quad-in-out
                    cubic-in   cubic-out   cubic-in-out
                    quart-in   quart-out   quart-in-out
                    quint-in   quint-out   quint-in-out
                    sine-in    sine-out    sine-in-out
                    expo-in    expo-out    expo-in-out
                    circ-in    circ-out    circ-in-out
                    elastic-in elastic-out elastic-in-out
                    back-in    back-out    back-in-out
                    x-back-in  x-back-out  x-back-in-out
                    xx-back-in xx-back-out xx-back-in-out
                    bounce-in  bounce-out  bounce-in-out</code></pre>
                <div>示例:</div>
                <pre v-pre><code>.mybutton:hover { color:red; border-color: white;
                      transition: color(linear,200ms) border-color(linear,100ms); }</code></pre>
                <div>注意：transition是在很久之前基于H-SMILE core实现的，所以它的语法和W3C有些区别。</div>
            </td>
        </tr>
        <tr> 
      <td rowspan="2" valign="top"> 
       <div>
        <strong>分页媒体(打印)</strong>
       </div></td> 
      <td valign="top" align="right"><strong>page-break-before</strong></td> 
      <td nowrap="" valign="top"> 
       <div>
        指定下面的值之一:
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>auto</td> 
          <td>- 默认值。</td>
         </tr> 
         <tr> 
          <td>always</td> 
          <td>- 在该元素之前总是插入分页符。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle">percentage</td> 
          <td bgcolor="#ffe4ca" valign="middle">- 整数值，后面跟着一个百分号(%)。 <strong>有条件分页</strong>。该值是页高度的百分比值，如果元素在页上的位置大于这个值，则引擎会在它之前插入分页符。 </td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td valign="top" align="right"><strong>page-break-after</strong></td> 
      <td nowrap="" valign="top"> 
       <div>
        指定下面的值之一:
       </div> 
       <table> 
        <tbody>
         <tr> 
          <td>auto</td> 
          <td>- 默认值。</td>
         </tr> 
         <tr> 
          <td>always</td> 
          <td>- 在该元素之后总是插入分页符。</td>
         </tr> 
         <tr> 
          <td bgcolor="#ffe4ca" valign="middle">percentage</td> 
          <td bgcolor="#ffe4ca" valign="middle">- 整数值，后面跟着一个百分号(%)。 <strong>有条件分页</strong>。该值是页高度的百分比值，如果元素的底部在页上的位置大于这个值，则引擎会在它之后插入分页符。 </td>
         </tr>
        </tbody>
       </table></td>
     </tr> 
     <tr> 
      <td rowspan="3" bgcolor="#ffe4ca" valign="top"><strong>行为属性</strong></td> 
      <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>behavior</strong></td> 
      <td bgcolor="#ffe4ca"> 
       <div>
	    以空格分隔的<a href="http://www.w3.org/TR/REC-xml/#NT-Nmtoken">nmtoken</a>列表 - 应用到该元素上的本地行为名称列表。
       </div> 
       <p>Behavior是应用程序或内建的behavior类型的名称。</p></td>
     </tr> 
     <tr> 
      <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>prototype</strong></td> 
      <td bgcolor="#ffe4ca"> 
       <div>
        <em>name</em> [ 
        <em>url(...)</em> ]
       </div> <p><font color="#ff0000">仅支持Sciter!</font></p> 
       <div>
        脚本中一个类的名称——该元素的原型(prototype)脚本对象(类)。这个类可以定义方法、属性和这个样式应用到的元素的事件处理方法。要使用类似<em>namespace.class</em>这样的组合名称，请使用括号括住它: 
        <font face="Courier New">prototype: &quot;Module.CoolWidget&quot;;</font>
       </div> <p>如果提供了<em>url</em>部分，则引擎会在查找该行为类之前先假装指定的脚本文件(如果这个文件未加载的话)。</p></td>
     </tr>
     <tr>
            <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>aspect</strong></td>
            <td bgcolor="#ffe4ca">
                <div>
                    <strong>(</strong>
                    <font color="#ff0000">&quot;functionName&quot;</font> [
                    <em>url(...)</em> ]
                    <strong>) +</strong>
                </div>
                <p>
                    <font color="#ff0000">仅支持Sciter!</font>
                </p>
                <p>一个name/url对的列表。列表中每个元素是该元素生命周期内会调用一次的函数全名。url是可选的，如果提供了它，将会导致加载这个url指定的脚本文件。</p>
                <p><em>aspect</em>是一个可继承属性，如果元素有多个样式规则定义了aspect，则aspect的值使用所有aspect列表。</p>
                <p>示例, 这里有两条规则:</p>
                <pre v-pre><code>input[click] { aspect: handleClickAttribute; }
                    input[focus] { aspect: handleFocusAttribute; }
                    </code></pre>
                <p>对于<code>&lt;input type=text click=&quot;...&quot; focus=&quot;...&quot;&gt;</code>元素，</p>
                <p>将会引起该元素对handleClickAttribute()和handleFocusAttribute()的调用，在所有调用中，<em>this</em>变量执行该元素。</p>
            </td>
        </tr>
        <tr>
            <td rowspan="6" bgcolor="#ffe4ca" valign="top"><strong>其他属性</strong></td>
            <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>content</strong></td>
            <td bgcolor="#ffe4ca">
                <div><code>&quot;string&quot; | attr(attrname)</code></div>
                <p>允许在样式中重定义元素的文本内容。在h-smile中，<em>content</em> 可以应用到元素它本身。</p>
                <p>如果content值是一个字符串，则该字符串直接替换元素的内容。如果content的值是<code>attr(attrname)</code>，则元素的内容替换为该元素attrname属性的值。</p>
                <div>示例：这个属性允许作为一个开关给一些元素通过CSS定义不同的标题:</div>
                <pre v-pre><code>p.status[state=&quot;pending&quot;] { content: &quot;Pending&quot;; foreground-image:...; }
                    p.status[state=&quot;done&quot;] { content: &quot;Done&quot;; foreground-image:...; }
                    p.status[state=&quot;warning&quot;] { content: &quot;Warning!&quot;; foreground-image:...; }</code></pre>
                <div>
                    <em>content</em>属性只允许应用于有文本内容的属性。例如，它对于P、SPAN等是有效的，但它对DIV是无效的。
                </div>
            </td>
        </tr>
        <tr>
            <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>vertical-scrollbar</strong></td>
            <td bgcolor="#ffe4ca">
                <font color="#ff0000">&quot;style-set-name&quot;</font> - 定义的垂直滚动条的样式集。
            </td>
        </tr>
        <tr>
            <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>horizontal-scrollbar</strong></td>
            <td bgcolor="#ffe4ca">
                <font color="#ff0000">&quot;style-set-name&quot;</font> - 定义的水平滚动条的样式集。参见:
                html_samples/css-plus/scrollbar-styling.htm文件中是怎么定义的。
            </td>
        </tr>
        <tr>
            <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right"><strong>popup-position</strong></td>
            <td bgcolor="#ffe4ca"><em>popup-reference-point</em> <em>anchor-reference-point</em> |
                <em>advisory-position</em>
                <p>可以定义以下值:</p>
                <ul>
                    <li>默认相对于请求弹出的元素(弹出锚点元素)的弹出位置。<em>popup-reference-point</em>和<em>anchor-reference-point</em>可以接受以下值:
                        <br /><em>default</em> | <em>top-left |</em> <em>top-center |</em> <em>top-right</em> |
                        <em>middle-left |</em> <em>middle-center</em> | <em>middle-right |</em> <em>bottom-left</em> |
                        <em>bottom-center</em> | <em>bottom-right</em>.</li>
                    <li><em>advisory-position</em>可以取以下值：</li>
                    <ul>
                        <li><em>at-tail</em> - 作为&lt;select&gt;元素的弹出元素显示 - 在锚点元素的下面，如果下面没有足够空间时，则在它的顶部;</li>
                        <li><em>at-head</em> - 在锚点的上面;</li>
                        <li>at-end - 在锚点旁边弹出(类似于二级弹出菜单)，至于是哪一边取决于方向和可用空间;</li>
                        <li><em>at-start</em> - 正常情况下出现在锚点的左边。对于RTL方向 - 出现在右边。</li>
                    </ul>
                </ul>
                <p>popup-position属性为
                    &lt;select&gt;、&lt;menu&gt;等元素指定弹出位置。如果定义了popup-position，它也会覆盖掉Element.popup(el,postition)调用中指定的位置。
                </p>
                <p>例如, 下面的声明:</p>
                <pre v-pre><code>select[type=select-dropdown] &gt; popup { popup-position: top-left top-right; }</code></pre>
                <p>会到导致select的弹出窗口出现在弹出窗口的右边，而不是它的下边。参见samples/popup/select-popup-positioning.htm</p>
            </td>
        </tr>
        <tr>
            <td nowrap="" bgcolor="#ffe4ca" valign="top" align="right">
                <strong>popup-anchor-reference-point</strong><br /><strong>popup-reference-point</strong></td>
            <td bgcolor="#ffe4ca"><em>default</em> | <em>top-left |</em> <em>top-center |</em> <em>top-right</em> |
                <em>middle-left |</em> <em>middle-center</em> | <em>middle-right |</em> <em>bottom-left</em> |
                <em>bottom-center</em> | <em>bottom-right</em><br /><em>default</em> | <em>top-left |</em>
                <em>top-center |</em> <em>top-right</em> | <em>middle-left |</em> <em>middle-center</em> |
                <em>middle-right |</em> <em>bottom-left</em> | <em>bottom-center</em> | <em>bottom-right</em>
                <p>上面的<strong>popup-position</strong>的个别部分。</p>
            </td>
        </tr>
        <tr>
            <td nowrap bgcolor="#ffe4ca" align="right"><strong>zoom</strong></td>
            <td bgcolor="#ffe4ca">% 或 浮点数- 元素的<strong>内容(content)</strong>的缩放比例。100% 或 1.0 表示无缩放。
                <p>注意: Sciter中的zoom类似于IE的zoom，但有两处不同:</p>
                <ol>
                    <li>sciter中的<em>zoom</em>定义的缩放因子可以表示为任何长度单位<strong>(除了px)</strong>. px单元总是被处理为物理像素。</li>
                    <li>zoom定义的是子元素的缩放比例，而不是元素本身。</li>
                </ol>
            </td>
        </tr>
</table>

<h3 align="left">长度单位</h3> 
  <p align="left">引擎支持以下几种长度单位:</p> 
  <ul> 
   <li><strong>px</strong> - 像素, 相对于视图设备。<font color="#990033">在屏幕上1px对应1设备像素。在打印机上1px对应1/96英尺。</font></li> 
   <li><strong>em</strong> - 与字体相关的<em>font-size</em>;</li> 
   <li><strong>ex</strong> - 与字体相关的<em>x-height</em>;</li> 
   <li><strong>in</strong> - 英尺 — 1英尺等于2.54厘米;</li> 
   <li><strong>cm</strong> - 厘米;</li> 
   <li><strong>mm</strong> - 毫米;</li> 
   <li><strong>pt</strong> - 点 — 点是由CSS2.1使用的，1pt等于1/72英尺;</li> 
   <li><strong>pc</strong> - 派卡(Pica)。绝对长度单位。相当于我国新四号铅字的尺寸。1pc等于12pt;</li> 
   <li><strong>%</strong> - 百分数 — 通常等于对应父元素的度量值的百分比值，但也不是总是这样, 参见CSS规范。</li> 
   <li><strong>vw</strong> - 视图(窗口)宽度的1/100th;</li>
   <li><strong>vh</strong> - 视图(窗口)高度的1/100th;</li>
   <li><strong>vmin</strong> - 视图(窗口)最小边(宽/高)的1/100th;</li>
   <li><strong>vmax</strong> - 视图(窗口)最大边(宽/高)的1/100th.</li>
    
   <li><strong><font color="#990033">%%</font></strong><font color="#990033"> - flex (&quot;weight&quot;) — 参见<a href="http://www.terrainformatica.com/htmlayout/fspu.whtm">h-smile弹力单位</a>。</font></li> 
   <li><strong><font color="#990033">*</font></strong><font color="#990033"> - flex (&quot;weight&quot;) — 1* 等于  100%%;</font></li> 
   <li><strong><font color="#990033">dip - 设备独立像素(d</font></strong><font color="#990033">evice <strong>i</strong>ndependent <strong>p</strong>ixels) - 逻辑单位. 1dip = 1/96(英尺)，因此在96DPI的显示器上等于1像素。在高dpi屏幕上，它将会大于物理像素。示例: 在120DPI屏幕上，2dip将等于3px。在打印机上，'dip'和'px'单位是相等的。</font></li>
  </ul> 
  <h3>颜色</h3> 
  <p>引擎支持以下几种颜色常量的定义:</p> 
  <ul> 
   <li><code>color: <strong>#f00</strong>; - #rgb形式。</code></li> 
   <li><code>color: <strong>#ff0000</strong> - #rrggbb 形式。</code></li>
   <li><code>color: <strong>#aaff0000</strong> - #aarrggbb 形式。</code></li>
   <li><code>color: <strong>rgb</strong>(255,0,0) - rgb(0..255,0..255,0..255) 形式。</code></li> 
   <li><code>color: <strong>rgb</strong>(100%,0%,0%) - rgb(0..100%,0..100%,0..100%) 形式。</code></li> 
   <li><code>color: <strong>rgba</strong>(255,0,0,0.5) - rgba(0..255,0..255,0..255,0..1) 形式。</code></li>    
   <li><code>color: <strong>hsl</strong>(300,0%,0%) - hsl(0..360,0..100%,0..100%) 形式 - HSL色彩空间。</code></li> 
   <li><code>color: <strong>tint</strong>(@base-color, 50%, 0%) - tint(base-color, -1.0..1.0 [, -1.0..1.0]) 形式。</code></li>
   <li>
     <code>color: <b>morph</b>(basecolor, ...)</code> - 色彩morphing/transformation函数
     <p><i>basecolor</i>可以是颜色常量或变量。</p>
     <p>该函数可以接受以下参数之一:</p>
     <ul>
    <li><code>hue:Adeg</code> - 通过修改HSL色彩空间基色(basecolor)的H(色调)分量来创建一个新色彩值。A是角度值，值范围为0...360 - 即H分量的绝对值。</li>
    <li><code>rotate:Adeg</code> - 通过相对角度来修改基色的H分量值, A是旋转的角度 : -360deg ... +360deg。</li>
    <li><code>lightness:p%</code> - 通过修改HSL色彩空间基色(basecolor)的L(亮度)分量来创建一个新色彩值。<i>p</i>的范围为0...100 - 即L分量的绝对值。</li>
    <li><code>lighten:p%</code> - 通过增加HSL色彩空间基色(basecolor)的L(亮度)分量来创建一个新色彩值。<i>p</i>的范围为0...100 - 即L分量的相对增加值。</li>
    <li><code>darken:p%</code> - 通过减少HSL色彩空间基色(basecolor)的L(亮度)分量来创建一个新色彩值。<i>p</i>的范围为0...100 - 即L分量的相对减少值。</li>
    <li><code>saturation:p%</code> - 通过修改HSL色彩空间基色(basecolor)的S(饱和度)分量来创建一个新色彩值。<i>p</i>的值范围为0...100 - 即S分量的绝对值。</li>
    <li><code>saturate:p%</code> - 通过增加HSL色彩空间基色(basecolor)的S(饱和度)分量来创建一个新色彩值。<i>p</i>的范围为0...100 - 即S分量的相对增加值。</li>
    <li><code>desaturate:p%</code> - 通过减少HSL色彩空间基色(basecolor)的S(亮度)分量来创建一个新色彩值。<i>p</i>的范围为0...100 - 即S分量的相对减少值。</li>
    <li><code>opacity:p%</code> - 通过修改RGBG色彩空间基色(basecolor)的A(透明度)分量来创建一个新色彩值。<i>p</i>的值范围为0...100 - 即A分量的绝对值, 如果是<code>100%</code>，则色彩是不透明的，如果是<code>0%</code>，则色彩是纯透明的。</li>
    <li><code>opacify:p%</code> - 通过增加/减少基色的当前A(透明度)值来创建一个新的颜色值。<i>p</i>的值范围 -100%...100% - relative 即A分量的增加/减少值。</li>
    <li><code>color2,mix:p%</code> - 创建基色与color2的混合色彩, <i>p</i>的值范围为0%...100% - 即混合的比例。如果p == 0%则结果是基色，如果是100%则结果是color2。</li>
    <li><code>grayscale:p%</code> - 将基色转换为灰度值。如果p是100%则结果是纯灰度色彩(R == G == B)。如果p是0%则结果是原始基色。</li>
    <li><code>sepia:p%</code> - 将基色转换为褐色值. 如果p是100%，则结果是纯褐色, 如果p是0%则结果是原始基色。</li>
    </ul>
  </li></ul>
  <h3 align="left">自定义CSS属性</h3> 
  <p align="left">Sciter支持自定义CSS属性。所有的自定义属性名称以'-'字符开头。自定义属性不会从父元素继承到子元素。 下面是一个自定义属性的声明:</p> 
  <p align="left">p { border: 1px solid red; <strong>-custom: &quot;value&quot;;</strong> &nbsp;&nbsp;}</p> 
  <p align="left">在上面的这个声明后，所有的<strong>&lt;p&gt;</strong>元素都会有值为&quot;value&quot;的<strong>-custom</strong>样式属性。</p> 
  <p align="left">自定义属性的值可以为下面的值之一:</p> 
  <ul> 
   <li> 
    <div align="left">
     字符串 (使用&quot;&quot;括起来), 示例: 
     <em>&quot;string&quot;</em> ;
    </div></li> 
   <li> 
    <div align="left">
     nmtoken(Name Token的缩写，中文意思就是名称记号，它表示由一个或多个字母、数字、句点、连字号或底线所组成的一个名称), 示例: 
     <em>some-token</em> ;
    </div></li> 
   <li> 
    <div align="left">
     数字值, 示例: 
     <em>3.1415</em> ;
    </div></li> 
   <li> 
    <div align="left">
     url, 示例: 
     <em>url(http://something.com)</em>; &nbsp;
    </div></li> 
   <li> 
    <div align="left">
     CSS选择器, 示例: 
     <em>selector(#id &gt; .cls)</em>;
    </div></li>
  </ul>
  <h3>CSS变量</h3>
  <p>CSS变量是一个变量名包裹在<code>var(...)</code>结构中的一个声明, 示例:</p>
    <pre v-pre><code>body {
  var(back-color): #ccc;
  var(text-color): #000;
  var(base-width) : 100dip; 
}</code></pre>
    <p>变量会从父元素继承给子元素。例如: 如果变量声明在&lt;body&gt;上，则它将影响body的所有子元素。</p>
    <p>变量可以使用在一些CSS样式值中 - 所有颜色值或长度单位:</p>
    <ul>
       <li><code>var(name,defaultValue)</code> - 使用name的值替换声明的变量,。如果未声明该变量，则使用defaultValue替换。</li> 
       <li><code>length(name)</code> - 使用name的值替换声明的变量。如果未声明该变量，或值不为长度单位，则是undefined。</li> 
       <li><code>color(name)</code> - 使用name的值替换声明的变量。如果未声明该变量，或值不为颜色值，则是undefined。</li></ul>
      <p>下面是一个变量的使用示例:</p>
  <pre v-pre><code>div {
  background-color: color(back-color); /* #ccc */
  width: length(base-width); /* 100dip */
  height: var(base-height,80dip); /* 80dip as base-height was not defined */
}</code></pre>