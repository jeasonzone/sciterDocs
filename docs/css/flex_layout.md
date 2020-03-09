# CSS 灵活的流(Flow)布局

## 摘要
  <p>本部分用于说明<strong>流式(flow)属性</strong>和<strong>弹性(flex)单位</strong>. 使用它们可以创建非常灵活地适用于各种各样的视图(view)和内容尺寸(content sizes)的布局。</p>
  <p>流式(flow)属性和弹性(flex)单位旨在解决目前现下的CSS无法解决或实现的一些问题: </p>
  <ul>
    <li>支持在容器(containers)和视口(viewport)中的元素的垂直和水平对齐；</li>
    <li>支持当替代元素在同一行内且高度相同时，实现灵活的多栏布局（边栏-内容-边栏）。</li>
    <li>支持定义复杂的位置：当元素的视图顺序(visual order)与DOM中的元素顺序不同时，可以使用静态布局。</li></ul>

## 1.概述

<p id="overview">弹性布局(Flexible layouts)是指使用<em>弹性(flex)</em>长度单位和<em>流(flow)</em>属性。 弹性长度单位(flex units)允许使用在定义元素的尺寸(size)、外边距(margin)、 内边距(padding)，作为包含块(containing block)的剩余可用空间的一部分。弹性单位的值是一个十进制数字，数字后加上&quot;*&quot;(星号)作为单位识别符。</p>
  <p><em>流(flow)</em>属性用来定义包含块(contained blocks)在正常流(position:static)中的布局方法。或者可以说，<em>流(flow)</em> 定义了容器的布局管理器。此模块包含以下标准的布局管理器定义：</p>
  <ol>
    <li>垂直布局 (vertical)</li>
    <li>水平布局 (horizontal)</li>
    <li>水平布局-允许换行 (horizontal-flow)</li>
    <li>垂直布局-允许换行 (vertical-flow)</li>
    <li>模板化布局 (templated layout)</li></ol>
  <p>弹性(Flex)单元的值可以认为是有弹簧张力的。它根据自己本身的&quot;弹性&quot;来自动调整尺寸和位置。如定义值如下：</p>
  <p><img src="../imgs/flex-springs.png" title="flexes presented as spring coils"/></p>
  <p>上面图片中块的布局的HTML代码如下：</p>
  <pre v-pre><code>&lt;div class=&quot;container&quot;&gt;
  &lt;p&gt;... some text ...&lt;/p&gt;
&lt;/body&gt;
</code></pre>
  <p>p元素有以下样式：</p>
  <pre v-pre><code>p
{
  width: 40%;             /* 固定宽度 - 容器的40% */
  margin-left: 2*;        /* 左边的 &quot;弹簧&quot; 的力量为 2 */
  margin-right: 1*;       /* 右边的 &quot;弹簧&quot; 的力量为 1 */
  border:1px solid black; /* 固定宽度的边框 */
}
</code></pre>

## 2. 弹性（Flex）长度单位

<p>在弹性单位中，元素的尺寸是对剩余空间内的可用<a name="containing-block">包含框</a>的计算。</p>
  <p>弹性单位值是在所有非弹性单位值计算完成后计算的——是布局算法的最后一步。在这一步中，它的值可能来于包含容器的剩余未分配空间。在容器的垂直和水平方向上，所有弹性值在这个剩余未分配空间通过竞争来得出自己的计算值。</p>
  <p>弹性单位只适用于元素的CSS属性中的<em>内边距(padding)</em>、<em>外边距(margin)</em>、<em>宽度(width)</em>、<em>高度(height)</em>。 它也可以用在静态(static正常流)、绝对定位(absolute)的元素中。浮动元素(float)不支持弹性单位——若为浮动元素指定了弹性单位值时会被当做<em>auto</em>值。</p>
  <p>在计算元素的最终尺寸时，弹性单元的值被解释为一个权重(weight)。如果剩余空间的弹性值总和小于1*，相应的剩余部分将保持未分配。若果弹性值总和大于或等于1*，所有的剩余空间将使用该弹性值作为比例分配权重来分配。</p>
  <p>例如，下面这个示例:</p>
<pre v-pre><code>#container { width:300px; }
#element { width:1*;
           margin-left:2*;
           margin-right:1*;
           border:2px solid;
           padding:0; }
</code></pre>
<p>#container元素中的#element元素将会应用下面的这个计算尺寸：</p>
<pre v-pre><code>
  弹性值总和   = 1* + 2* + 1*               = 4*;
  待分配宽度   = 300px - 2px - 2px          = 296px; // 容器宽度 - 固定边框宽度
  宽度(width)  = 1/4 * 待分配宽度(296px)   = 74px;
  右外边距     = 1/4 * 待分配宽度(296px)   = 74px;
  左外边距     = 2/4 * 待分配宽度(296px)   = 148px;
</code></pre>
<p>弹性单位值的计算遵循所有的通常约束。 例如, 最小宽度(<code>min-width</code>)和最大宽度(<code>max-width</code>)定义可以&quot;弹性&quot;的宽度的边界。出于弹性单位计算的原因，初始（默认）的最小宽度属性值被解释为具有最小的内在价值(intrinsic value)。</p>

### 最小内在价值(min-intrinsic), 最大内在价值(max-intrinsic) 长度值。

<p>CSS的<em>最小宽度(min-width)</em>、<em>最大宽度(max-width)</em>、<em>宽度(width)</em>和<em>最小高度(min-height)</em>、最大高度(max-height)、<em>高度(height)</em>属性值可以接受以下的指定值： <code>'最小内在价值(min-intrinsic)'</code>和<code>'最大内在价值(max-intrinsic)'。</code></p>
  <ul>
    <li><code>最小内在价值(min-intrinsic)</code> —— 在一些容器中，该值指在相应方向上无需溢出(overflow)渲染时的最小长度。例如：对于设置overflow:auto的元素，它的最小长度为显示时没有滚动条的最小长度。</li>
    <li><code>最大内在价值(max-intrinsic)</code>—— 在一些容器中，该值指所有的子元素显示无需换行时的最小长度。或者说，当某元素的高度为max-intrinsic时，在水平布局(类似<em>rtl</em>/<em>ltr</em>)的系统,或者垂直布局的系统(类似<em>ttb</em>)上，最大内在价值(max-intrinsic)指当该元素的宽度达到最小时的该元素最小高度。</li>
  </ul>
  <p>若为段落<code>&lt;p&gt;first second&lt;/p&gt;</code>设置<code>width:min-intrinsic</code>时，该段落的宽度为该段落中最宽的那个单词的宽度。 若为这个段落设置<code>width:max-intrinsic</code>时，则它的宽度为该段落中所有单词和空格长度的总和——该段落将呈现为单行文本。</p>

## 3.流(flow)属性

  <p>流(flow)属性定义了容器如何布局它的子元素们。或者说，它建立了容器元素的布局管理器。</p>
  <p><a name="propdef-flow" class="propdef-title"><strong>'flow'</strong></a></p>
  <table class="propinfo" cellpadding="0" cellspacing="0">
    <tr valign="baseline">
      <td><em>可取值：</em> &nbsp;</td>
      <td>default | horizontal | vertical | horizontal-flow | vertical-flow | &quot;模板&quot; | row(...) | stack | inherit | text</td></tr>
    <tr valign="baseline">
      <td><em>初始值:</em> &nbsp;</td>
      <td>default</td></tr>
    <tr valign="baseline">
      <td><em>可应用于:</em></td>
      <td>盒元素，dsiplay模型为&quot;blocks inside&quot;, 如&quot;block&quot;、&quot;block-inline&quot;</td></tr>
    <tr valign="baseline">
      <td><em>是否可继承:</em> &nbsp;</td>
      <td>否</td></tr>
    <tr valign="baseline">
      <td><em>是否支持百分比:</em> &nbsp;</td>
      <td>否</td></tr>
    <tr valign="baseline">
      <td><em>媒体类型:</em> &nbsp;</td>
      <td>可视</td></tr>
    <tr valign="baseline">
      <td><em>计算值:</em> &nbsp;</td>
      <td>特定的值</td></tr></table>
  <p>该属性定义了子元素在正常流中的布局方法：</p>
  <table>
    <tr>
      <th nowrap>flow值</th>
      <th>子元素呈现结果</th></tr>
    <tr>
      <td nowrap><code>vertical</code></td>
      <td>垂直放置</td></tr>
    <tr>
      <td nowrap><code>horizontal</code></td>
      <td>水平放置在一个单一的行。方向由<em>direction</em>属性定义，特别是<code>ltr</code>和<code>rtl</code>值。</td></tr>
    <tr>
      <td nowrap><code>horizontal-flow</code></td>
      <td>水平放置，如果需要，可以换行成多行。方向由<em>direction</em>属性定义</td></tr>
    <tr>
      <td nowrap><code>vertical-flow</code></td>
      <td>垂直放置, 如果需要，可以换列成多列。</td></tr>
    <tr>
      <td nowrap><code>&quot;模板</code>&quot;</td>
      <td>根据模板来布局。通过 <code>float:&quot;名称&quot;</code> 来将子元素绑定到模板中一个命名的单元格。</td></tr>
    <tr>
      <td nowrap><code>row(标签1,标签2,...)</code></td>
      <td>根据row()模板函数来制定位置。</td></tr>
	<tr>
      <td nowrap><code>stack</code></td>
      <td>元素堆叠在一起。</td></tr></table>
</table>
  <ul>
    <p>文档中使用的术语：</p>
    <dl>
      <dt><em>流式容器(flow container)</em></dt>
      <dd>流式容器(flow container)是指包含'flow'样式属性且值不为<em>default</em>的块元素。这种元素使用给定的布局管理器来布局它的块子元素。如果流式容器(flow container)包含<em>display</em>不为<code>block</code>、<code>list-item</code>、code>table</code>的子元素，则这些子元素会包装在一个匿名块或表容器以便参与流式布局。</dd>
      <dt><em>流元素(flowed element)</em></dt>
      <dd>流元素(flowed element)的直接父元素为流式容器(flow container)。这些元素被父流式容器的布局管理器用来替换。</dd></dl></ul>
  <h3>3.1. 垂直布局(flow:vertical)</h3>
  <p>垂直流比较接近标准的自上而下的块元素的布局方式，例如<code>div</code>, <code>ul</code>等等。和标准布局方式唯一的区别在于硫元素使用弹性单位时。</p>
  <p>flow:vertical容器中的所有静态子元素将会被替换为从上到下、一个接一个的根据容器宽度形成一个单一的列。其所包含的定义了弹性单位的子元素的宽度值将会使用容器的宽度值来计算。同样，被包含元素的垂直尺寸会使用容器的高度来计算。如果容器的高度未定义，或者高度定义为height:auto，则将没有剩余空间来分配给弹性值，这样的话，在这个方向上的弹性值可以被忽略掉。</p>
  <p>如果容器定义了高度，且它的高度大于被包含元素的最小价值高度(min-intrinsic)，则存在剩余空间。在这样的容器里，这个空间被分配给定义了垂直弹性值的子元素。</p>
  <p>例如，下面的样式:<img src="../imgs/sample-vertical.png" title="Sample of vertical alignment" align="right"/></p>
  <pre v-pre><code>  #container { height:100%; border:1px dotted; }
  #first { margin-bottom:1*; }
</code></pre>
  <p>当定义下面的HTML标记时:</p>
  <pre v-pre><code>  &lt;div id=&quot;container&quot;&gt;
    &lt;h2&gt;Alignment to top/bottom&lt;/h2&gt;
    &lt;div id=&quot;first&quot; style=&quot;margin-bottom:1*&quot;&gt;
      &lt;code&gt;margin-bottom:1*;&lt;/code&gt;
      &lt;p&gt;Shifts rest to the bottom&lt;/p&gt;
    &lt;/div&gt;
    &lt;div id=&quot;second&quot;&gt;
      Normal div
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
  <p>则会将#first元素放在#container的顶部，而将#second元素放在它的底部。</p>
  <h4>3.1.1. 在flow:vertical容器中外边距堆叠(collapsing)</h4>
  <p>在CSS中，被包含元素的垂直编辑通常会叠到一起。&nbsp;这里唯一需要注意的时当堆叠到垂直边距包含弹性值，而对应的另一个元素是固定值时。这种情况下，这个固定值会作为两个元素间弹性计算值的&quot;最小约束(min-constraint)&quot;。这样，边距是弹性的，但是它不能小于这个固定值。</p>
  <h3>3.2. 水平布局(flow:horizontal)</h3>
  <p>这是一个单行布局。 设置flow:horizontal的容器的所有静态子元素会水平地一个接一个的排列成一行。布局是相对于容器的方向<code>direction</code>属性进行。</p>
  <p>在水平方向上，若子元素的宽度(width)、左右外边距(margin)、边框(border)、内边距(padding)给定了一个弹性值，它们将参与剩余空间的分配。flow:horizontal容器的所有直接子元素将对容器内容区(content box)中左右边界间的剩余空间进行计算，使这个空间根据它们的弹性值进行分配。</p>
  <p>在垂直方向上：被包含元素的高度、上下外边距、边框、内边距的弹性值使用容器的高度值来计算。这使flow:horizontal容器的子元素排序不仅是水平地，也可以是垂直的。</p>
  <p>下面的样式中，所有的子元素拥有相同的高度：</p>
  <pre v-pre><code>#container       { flow:horizontal; border-spacing:4px; padding:4px; }
#container &gt; div { margin:0; height:1*; }
</code></pre>
  <p>渲染结果如下:</p>
  <p><img src="../imgs/sample-horizontal-fill.png"/></p>
  <p>下面，所有的子元素都设置为最小内在价值高度。而将上外边距设置为<code>1*</code>：</p>
  <pre v-pre><code>
  #container       { flow:horizontal; border-spacing:4px; padding:4px; }
  #container &gt; div { margin-top:1*; height:auto; }
                               /* height:auto意思是&quot最小内在价值&quot高度 */
</code></pre>
  <p><img src="../imgs/sample-horizontal-bottom.png"/></p>
  <h4>3.2.1. flow:horizontal容器中的外边距堆叠</h4>
  <p>flow:horizontal容器中包含块的水平外边距堆叠处理方式和flow:vertical容器相同。而对于in-flow子元素，它们不与flow:horizontal容器的外边距堆叠。</p>
  <h4>3.2.2. 内在尺寸(Intrinsic dimensions)</h4>flow:horizontal容器的内在高度(Intrinsic height)是在它内部的一行中最高的元素的外边距框高度。 flow:horizontal容器的内在宽度是所有子元素在水平边距堆叠的情况下的最小内在宽度之和。
  <h3>3.3. 水平可换行布局(flow:horizontal-flow)</h3>
  <p><code>flow:horizontal-flow</code>布局是<code>flow:horizontal</code>布局的一种变种。该布局允许容器的子元素在水平方向上没有足够空间时换行。</p>
  <p><code>clear:left|right|both</code>属性可以明确的中断元素布局流，使其成为多行。</p>
  <p>在满足以下基本条件之一时，允许换行：</p>
  <ol>
    <li>某元素上使用了<code>clear:left|right|both</code>属性；</li>
    <li>该行没有足够的水平工具来放置该元素。</li></ol>
  <p>在垂直方向上，设置弹性值的包含块的高度、上下外边距、边框、内边距的值是使用当前<em>行</em>的高度。该行的高度等于在不影响弹性值计算的情况下该行中最高元素的高度。</p>
  <p>在水平方向上，一行中的元素的弹性值计算和flow:horizontal布局相同。</p>
  <p>例如, 下面的HTML标记语言:</p>
  <pre v-pre><code>
&lt;div style=&quot;flow:horizontal-flow&quot; &gt;
      &lt;div style=&quot;width:100px&quot; &gt; 
	    width:100px 
	  &lt;/div&gt;
      &lt;div style=&quot;width:1*&quot;    &gt; 
	    flexible width:1*
        flexible width:1* 
	  &lt;/div&gt;
      &lt;div style=&quot;width:1*&quot;&gt; 
        flexible width:1*
        flexible width:1*
        flexible width:1* 
	&lt;/div&gt;
  &lt;div style=&quot;width:150px&quot; &gt; 
    width:150px
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
  <p>渲染结果如下:</p>
  <p><img src="../imgs/sample-horizontal-flow.png"/></p>
  <h3>3.4. 垂直可换列布局(flow:vertical-flow)</h3>
  <p><code>flow:vertical-flow</code>布局类是一个多列布局，似于<code>flow:horizontal-flow</code>。在垂直方向上，元素会从上到下的排列放置。如果容器没有足够的垂直空间，元素会换列，变成多列布局。</p>
  <p><code>clear:left|right|both</code> 属性允许中断列，使其明确地成为多列布局。</p>
  <p>在满足一下条件之一时，会进行换列：</p>
  <ol>
    <li>在垂直方向上，该列上所有元素的弹性值之和大于1*；</li>
    <li><code>clear:left|right|both</code>属性在某个元素中明确使用；</li>
    <li>没有足够的垂直空间来放置下一个元素。</li></ol>
  <p>在水平方向上，容器内的子元素的宽度、左右外边距、内边距的弹性值使用当前列的宽度来计算。该行的宽度等于在不影响弹性值计算的情况下该行中最宽元素的宽度。</p>
  <p>在垂直方向上，某列中元素的弹性值计算方法与flow:vertical布局相同。</p>
  <p>例如，下面的HTML标记：</p>
  <pre v-pre><code>
&lt;ul style=&quot;flow:vertical-flow&quot;&gt;
  &lt;li style=&quot;height:150px&quot; &gt; 
    1. height:150px 
  &lt;/li&gt;
  &lt;li style=&quot;height:100px&quot; &gt; 
    2. height:100px
  &lt;/li&gt;
  &lt;li style=&quot;height:0.3*&quot; &gt; 
    3. flexible height:0.3*
       flexible height:0.3* 
  &lt;/li&gt;
  &lt;li style=&quot;height:0.7*&quot; &gt; 
    4. flexible height:0.7*
       flexible height:0.7*
       flexible height:0.7* 
  &lt;/li&gt;
  &lt;li style=&quot;height:150px&quot; &gt; 
    5. height:150px
  &lt;/li&gt;
  &lt;li style=&quot;height:150px&quot; &gt; 
    6. height:150px
  &lt;/li&gt;
  &lt;li style=&quot;height:150px&quot; &gt; 
    7. height:150px
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre>
  <p>每个列表项设置了<code>width:150px</code>，这会生成下面的布局，列表项会处理成3列：</p>
  <p><img src="../imgs/sample-vertical-flow.png"/></p>
  <h3>3.5. 模板布局(flow:&quot;template&quot; / flow: grid(...))</h3>
  <p>请注意，该布局是<a href="http://www.w3.org/TR/css3-layout/.">http://www.w3.org/TR/css3-layout/.</a> 的一个简化版本，该想法的所有版权属于该文档的作者。</p>
  <p><code>flow: &lt;模板表达式&gt;</code>  允许根据模板表达式来替换放置元素。</p>
  <p>在这里，模板表达式是一个字符串标识序列。每个字符串标识是一个使用空格分隔的名称标识列表中的一项，其中每个标识指定一个网格中的单元格。多列允许有相同的名称。在这种情况下，该标识相当于定义了一个横跨多个单元网格的占位符。</p>
  <p>例如, 下面的模板定义了从&quot;a&quot;到&quot;f&quot;的一个3x4的共6个占位网格的表格。某些占位网格跨越了多个单元格：</p>
  <pre v-pre><code>flow: &quot;a a a&quot;
      &quot;b c e&quot;
      &quot;d c e&quot;
      &quot;d c f&quot;;
</code></pre>
  <p>容器中的每个子元素使用 <code>float:&quot;占位标识名称&quot;</code> 属性绑定到模板定义的特定的占位网格对应的位置：</p>
  <pre v-pre><code>
li:nth-child(1) { <code>float:&quot;a&quot;</code>; }
li:nth-child(2) { <code>float:&quot;b&quot;</code>;
                  width:150px;
                  height:max-intrinsic; }
li:nth-child(3) { <code>float:&quot;c&quot;</code>;
                  width:*; height:*; } /* flexes, a.k.a. shrink-to-fit */
li:nth-child(4) { <code>float:&quot;d&quot;</code>;
                  width:150px;
                  height:*; }
li:nth-child(5) { <code>float:&quot;e&quot;</code>;
                  width:150px;
                  height:*; }
li:nth-child(6) { <code>float:&quot;f&quot;</code>;
                  width:150px;
                  height:150px; }
</code></pre>
  <p>注意，在使用该流式(flow)布局的容器内的直接子元素使用<code>float:left|right</code>将不起作用。或者说，被流式布局的元素只能使用<code>flow:&quot;template&quot;</code>定义的单元格来布局。</p>
  <p>模板容器中的所有没有绑定到网格的子元素将会作为单独的一行追加到最后。如果有多个子元素有相同的占位符名称，只有第一个(DOM中的顺序)将被绑定到占位网格上，剩余的元素会变成未绑定的。</p>
  <p>每个占位符名称在模板中必须是唯一的、矩形的。否则，该模板将无效，流式布局将采用默认的<code>flow:default</code>.</p>
  <p>例如，下面的HTML标记：</p>
  <pre v-pre><code>&lt;ul&gt;
    &lt;li&gt; &quot;a&quot;, width:auto (that is 1*), height:auto(that is max-intrinsic) &lt;/li&gt;
    &lt;li&gt; &quot;b&quot;, width:150px, height:max-intrinsic &lt;/li&gt;
    &lt;li&gt; &quot;c&quot;, width:*, height:* (a.k.a. shrink-to-fit) &lt;/li&gt;
    &lt;li&gt; &quot;d&quot;, width:150px, height:* &lt;/li&gt;
    &lt;li&gt; &quot;e&quot;, width:150px, height:* &lt;/li&gt;
    &lt;li&gt; &quot;f&quot;, width:150, height:150px&lt;/li&gt;
 &lt;/ul&gt;
</code></pre>
  <p>设置样式后渲染结果如下：</p>
  <p><img src="../imgs/sample-template.png" alt="sample:template"/></p>
  <p>除了用字符定义名称外，还可以使用子元素在模板容器中的顺序数字，所以下面的这个模板：</p>
  <pre v-pre><code>flow: grid(1 1,<br/>           2 3);
</code></pre>
  <p>会导致容器的前三个子元素布局到两行，且第一个元素放置在第一行，而第二、第三个元素放置在第二行。</p>
  <h3 id="flow-row">3.6. row函数布局( flow: row(tag1, tag2, ...) )</h3>
  <p>flow:row()函数用来实现类似table的布局。 row()函数的参数为元素标签的列表，该列表定义的元素将会放置在表格中的单独一行。</p>
  <p>考虑下面的HTML标记:</p>
  <pre v-pre><code>&lt;dl&gt;&lt;dt&gt;第一项&lt;/dt&gt;
    &lt;dd&gt;第一项的描述&lt;/dd&gt;<br/>    &lt;dt&gt;第二项&lt;/dt&gt;
    &lt;dd&gt;第二项的描述&lt;/dd&gt;&lt;/dl&gt;
</code></pre>
  <p>并且设置它的样式如下:</p>
  <pre v-pre><code>dl { flow: row(dt,dd); }
</code></pre>
  <p>则它们将会渲染成如下：</p>
  <div align="left">
    <table border="1" cellpadding="1" cellspacing="1">
      <tr>
        <td>第一项</td>
        <td>第一项的描述</td></tr>
      <tr>
        <td>第二项</td>
        <td>第二项的描述</td></tr></table>
    <p>如果flow:row(...)布局的元素内存在不匹配row中的模板的元素，则该元素将会被放置在单独的一行并跨越所有列。所有考虑下面的HTML标记：</p>
    <pre v-pre><code>&lt;dl&gt;
  &lt;header&gt;组别1&lt;/header&gt;    
    &lt;dt&gt;第一项&lt;/dt&gt;    
    &lt;dd&gt;第一项的描述&lt;/dd&gt;<br/>    &lt;dt&gt;第二项&lt;/dt&gt;    
    &lt;dd&gt;第二项的描述&lt;/dd&gt;
  &lt;header&gt;组别2&lt;/header&gt;    
    &lt;dt&gt;第三项&lt;/dt&gt;    
    &lt;dd&gt;第三项的描述&lt;/dd&gt;<br/>&lt;/dl&gt;
</code></pre></div>
  <p>依然使用上面的样式，则它们会渲染成：</p>
  <table border="1" cellpadding="1" cellspacing="1">
    <tr>
      <td colspan="2"><strong>组别1</strong></td></tr>
    <tr>
      <td>第一项</td>
      <td>第一项的描述</td></tr>
    <tr>
      <td>第二项</td>
      <td>第二项的描述</td></tr>
    <tr>
      <td colspan="2"><strong>组别2</strong></td></tr>
    <tr>
      <td>第三项</td>
      <td>第三项的描述</td></tr></table>
  <p>flow:row的声明可以在一列中接受一个元素列表。如:</p>
  <pre v-pre><code>flow: row(label, input select textarea);
</code></pre>
  <p>定义了两列，第一列放置了<code>&lt;label&gt;</code>元素，而所有其他的<code>&lt;input&gt;,&lt;select&gt;</code>和<code>&lt;textarea&gt;</code> &nbsp;元素被放置在第二列。</p>
  <h3>3.7. flow: stack</h3>
  <p>flow:stack布局用于在容器中的任意位置放置元素。渲染的顺序取决于元素的DOM位置或<code>z-index</code>属性定义的顺序。</p>
  <p>在水平和垂直方向上, 被包含元素的width、height、margin、padding的弹性值使用容器元素的宽度和高度来计算。在弹性计算中，没有子元素都被当做容器元素的唯一子元素来对待 - 子元素的位置不会影响其他子元素的位置。</p>
  <p>flow:stack容器元素的内在尺寸等同于容器中子元素外边距盒的最宽的和最高值。</p>
  <p>考虑下面的HTML代码:</p>
  <pre v-pre><code>&lt;section tab=&quot;标签页一&quot;&gt;
   &lt;div&gt;标签页二&lt;/div&gt;
   &lt;div&gt;标签页三&lt;/div&gt;
&lt;/section&gt;
</code></pre>它的样式为:
  <pre v-pre><code>section { flow: stack; width: max-content; }
section &gt; div { size:*; /* 跨越整个容器 */
                visibility:hidden; }
section[tab=first] &gt; div:nth-child(1) { visibility:visible; }<br/>section[tab=second] &gt; div:nth-child(2) { visibility:visible; }
</code></pre>
  <p>通过修改<code>section</code>元素的&nbsp;<code>tab</code>属性值，我们可以切换标签页的显隐。</p>
  <p>原则上，flow:stack布局在某些方面类似于在position:relative容器中包含position:absolute子元素。不过flow:stack的内在尺寸计算规则是其他CSS属性无法模拟的。</p>
  <h2>4. <em>flow</em>属性、<em>float</em>属性 和块格式上下文(block formatting context)</h2>
  <p>那些flow属性设置了非默认值的元素的直接子元素，将会建立一个新的块格式上下文，这个上下文类似于表格中的单元格。</p>
  <h2>5. <em>flow</em>属性 与<em>position</em>属性</h2>
  <p>流元素(flowed element)是指在流容器中的position为静态(默认)的子元素们。这意味着那些包含<code>position: absolute | fixed</code>的子元素会被当做<code>position:static</code>来处理。</p>
  <p>在流元素中<code>position:relative</code> 是被允许的。因此，这些元素可以使用<code>left</code>、<code>right</code>、 <code>bottom</code>和<code>top</code>属性来定义它们相对于静态位置的偏移。</p>
  <h3>5.1 <em>position: absolute | fixed</em> 与 弹性<em>(Flex)</em>单位值</h3>
  <p><img src="../imgs/sample-position-fixed.png" align="right" alt="sample:position-fixed"/>弹性单位可以用在定义了<em>position:absolute</em>或<em>position:fixed</em>的元素的<em>left</em>、<em>top</em>、<em>right</em>和<em>bottom</em>属性中，这些元素的内边距(<em>padding</em>), 外边距(<em>margin</em>), 宽度(<em>width</em>)和高度(<em>height</em>)中的弹性单位值的计算将会参考包含它们的父块。</p>
  <p>例如：下面的样式将会将#light-box-dialog元素放置在视口(viewport)的中央：</p>
  <pre v-pre><code>
#light-box-dialog
{
  position: fixed;
  left:1*; top:1*; right:1*; bottom:1*;
  width: 400px;
  height: auto;
}
</code></pre>
  <p> #light-box-dialog元素的宽度为400像素，高度为自动(即最小内在高度height:min-intrinsic)，且该元素将会放置在视口中央。</p>
  <h2>6. <em>flow</em>属性与<em>vertical-align</em>属性</h2>
  <p>流元素建立了一个块格式上下文。因此它们的vertical-align属性定义了它们内部垂直方向上的对齐方式，而不是它们本身在垂直方向上的对齐方式。或者说<em>vertical-align</em>类似于表格中的单元格。</p>
  <h2>7. <em>flow</em>属性与<em>border-spacing</em>属性</h2>
  <p><em>border-spacing</em>属性定义了两个流元素在水平和垂直方向上外边距的最小值。如果一个流元素定义了自己的外边距，则外边距使用的值是<em>border-spacing</em>定义值和该外边距定义中比较大的那个值。 如果这个外边距值使用了弹性单位值，则该弹性值的计算会将<em>border-spacing</em>值作为最小约束值。在这种情况下，计算出的弹性值不能小于<em>border-spacing</em>属性值。</p>
  <h2>8. <em>flow</em>属性 与 外边距堆叠</h2>
  <p>不同的布局管理器的对流元素的外边距堆叠处理是不一样的。流容器外边距不会与它内部的硫元素堆叠。</p>
  <h2>9. <em>flow</em>属性和 行内块(<em>inline-block</em>)元素</h2>
  <p>行内块放置在对应的行框中。原则上，行框是可以&quot;弹性&quot;的。</p>
  <p>所以, 像&lt;img&gt;、&lt;input&gt;、&lt;span style=&quot;display:inline-block&quot;&gt;这些<em>inline-block</em>元素可以使用弹性单位来定义它们的尺寸、外边距、内边距。行框上下文的弹性单位计算依据于行框的水平、垂直尺寸，而它们的内容将不是可弹性的。</p>
  <p>在水平方向上，行框在分配完所有非弹性内容后可能存在剩余的空间(例如单词框)。这些空间将会在所有指定了弹性值的元素的宽度、左右外边距(或内边距)间分配。</p>
  <p>在垂直方向上, 行内块(inline-block)元素的高度、上下外边距、内边距中的弹性值依据于行框的高度。例如，可以定义多个和行框同高度的子元素。</p>
  <p>如果这样定义了，text-align:justify属性的计算将会放置弹性值计算之后。</p>
  <p>例如下面的HTML标记:</p>
  <pre v-pre><code>&lt;style&gt;
  p
  {
    padding:4px; border:2px solid black; line-height:1.8em;
  }
  span
  {
    display:inline-block; border: 2px solid salmon;
    background:seashell;
  }
&lt;/style&gt;
&lt;p&gt;
   First span:&lt;span style=&quot;width:2*&quot;&gt;width:2*&lt;/span&gt;
   and second one:&lt;span style=&quot;width:1*&quot;&gt;width:1*&lt;/span&gt;
&lt;/p&gt;
</code></pre>
  <p>这回到这<code>p</code>元素各种各样的宽度值：</p>
  <p><img src="../imgs/sample-inline-block-1.png" title="Use of flexes with inline-block elements"/></p>
  <p><img src="../imgs/sample-inline-block-2.png" title="Use of flexes with inline-block elements"/></p>
  <p>注意，上面的最后一个图像上，span已经达到了它的最小内在宽度(min-intrinsic)，所以它们已经排除掉了相关的弹性值计算。</p>