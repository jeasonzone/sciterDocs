# 支持的CSS特性

## 背景图像

<dl>
    <dt><strong>background-image-transformation</strong></dt>
    <dd><code>none | &lt;filter&gt;+</code>
      <p><em>none</em>或 以空格符分隔的过滤器列表。过滤器可以是以下函数:</p>
      <ul>
        <li><code>colorize(color)</code> - 每像素, 图像变换的亮度值(luminocity)，使用该亮度值作为每个像素颜色的乘数来产生最终像素颜色，常用于实现按钮图标的禁用状态。</li>
        <li><code>color-schema(color)</code> - 每像素, 将图像的灰度色部分按给出的颜色进行插值变换。</li>
        <li><code>contrast-brightness-gamma( contrast, brightness, gamma )</code> - 每像素, 递增/减每像素的对比度、亮度、gamma值。对比度和亮度可接受0.0 ... 0.1范围的值, 当值为0.5时，意味着&quot;不改变&quot;. Gamma (指数)接受0.0 ... 5.0范围的值，其中1.0意味着不改变。</li>
        <li><code>contrast(value)</code> - 每像素, 增/减每像素的对比度。值为0.0 ... 0.1范围间，其中值为0.5时意味着&quot;不改变&quot;。</li>
        <li><code>brightness(value)</code> - 每像素, 增/减每像素的亮度。值为0.0 ... 0.1范围间，其中值为0.5时意味着&quot;不改变&quot;。</li>
        <li><code>gamma(value)</code> - 每像素, 增/减每像素的gamma值。值为0.0 ... 5.0范围间，其中值为1.0时意味着&quot;不改变&quot;。</li>
        <li><code>hue(color)</code> 或 <code>hue(number)</code> - 每像素, 转换每像素为HSV表示，修改它的hue值后，然后返回成RGB颜色空间。因此如果原始色是黑色、灰色或白色，则它将不会改变。而如果是非灰色，则它将会进行变换/改变。number这个参数范围为0 ... 360——HSV空间中颜色矩阵的角度。</li>
        <li><code>flip-x()</code> - 水平方向的图像的镜像。</li>
        <li><code>flip-y()</code> - 垂直方向的图像的镜像。</li></ul></dd>
    <dt><strong>background-repeat</strong></dt>
    <dd><code>no-repeat | repeat | repeat-x | repeat-y &nbsp;| stretch [keep-ratio] | expand [stretch-top] [stretch-bottom] [stretch-left] [stretch-right] [stretch-middle]</code>
      <p>定义图像填充模式，可以接受以下值:</p>
      <ul>
        <li><code>no-repeat</code> - 图像只在<code>***-image-position</code>位置处渲染一次。</li>
        <li><code>repeat</code> - 平铺图像到整个区域。</li>
        <li><code>repeat-x</code> - 根据<code>***-image-position</code>在一行内平铺图像。</li>
        <li><code>repeat-y</code> - 根据<code>***-image-position</code>在一列内平铺图像。</li>
        <li><code>stretch</code> - 拉伸图像以便铺满整个区域。</li>
        <li><code>stretch keep-ratio</code> - 拉伸图像(保持宽高比)以便铺满整个区域。</li>
        <li><code>expand</code> - 可扩展填充(九宫格)，通过<code>***-image-position</code>定义图像的九个部分以便该图像覆盖整个区域。边角部分按原图展示，top/left/bottom/right/middle部分平铺至图片铺满整个区域。如果指定了<code>stretch-top</code>、<code>stretch-bottom</code>、<code>stretch-left</code>或<code>stretch-middle</code> ，则对于部分进行伸缩而不是平铺。</li></ul></dd></dl>

## 前景图像

<dl>
    <dt><strong>foreground-image-transformation</strong></dt>
    <dd><code>none | &lt;filter&gt;+</code>
      <p><em>none</em>或 以空格符分隔的过滤器列表。过滤器可以是以下函数:</p>
      <ul>
        <li><code>colorize(color)</code> - 每像素, 图像变换的亮度值(luminocity)，使用该亮度值作为每个像素颜色的乘数来产生最终像素颜色，常用于实现按钮图标的禁用状态。</li>
        <li><code>color-schema(color)</code> - 每像素, 将图像的灰度色部分按给出的颜色进行插值变换。</li>
        <li><code>contrast-brightness-gamma( contrast, brightness, gamma )</code> - 每像素, 递增/减每像素的对比度、亮度、gamma值。对比度和亮度可接受0.0 ... 0.1范围的值, 当值为0.5时，意味着&quot;不改变&quot;. Gamma (指数)接受0.0 ... 5.0范围的值，其中1.0意味着不改变。</li>
        <li><code>contrast(value)</code> - 每像素, 增/减每像素的对比度。值为0.0 ... 0.1范围间，其中值为0.5时意味着&quot;不改变&quot;。</li>
        <li><code>brightness(value)</code> - 每像素, 增/减每像素的亮度。值为0.0 ... 0.1范围间，其中值为0.5时意味着&quot;不改变&quot;。</li>
        <li><code>gamma(value)</code> - 每像素, 增/减每像素的gamma值。值为0.0 ... 5.0范围间，其中值为1.0时意味着&quot;不改变&quot;。</li>
        <li><code>hue(color)</code> 或 <code>hue(number)</code> - 每像素, 转换每像素为HSV表示，修改它的hue值后，然后返回成RGB颜色空间。因此如果原始色是黑色、灰色或白色，则它将不会改变。而如果是非灰色，则它将会进行变换/改变。number这个参数范围为0 ... 360——HSV空间中颜色矩阵的角度。</li>
        <li><code>flip-x()</code> - 水平方向的图像的镜像。</li>
        <li><code>flip-y()</code> - 垂直方向的图像的镜像。</li></ul></dd>
    <dt><strong>foreground-repeat</strong></dt>
    <dd><code>no-repeat | repeat | repeat-x | repeat-y &nbsp;| stretch [keep-ratio] | expand [stretch-top] [stretch-bottom] [stretch-left] [stretch-right] [stretch-middle]</code>
      <p>定义图像填充模式，可以接受以下值:</p>
      <ul>
        <li><code>no-repeat</code> - 图像只在<code>***-image-position</code>位置处渲染一次。</li>
        <li><code>repeat</code> - 平铺图像到整个区域。</li>
        <li><code>repeat-x</code> - 根据<code>***-image-position</code>在一行内平铺图像。</li>
        <li><code>repeat-y</code> - 根据<code>***-image-position</code>在一列内平铺图像。</li>
        <li><code>stretch</code> - 拉伸图像以便铺满整个区域。</li>
        <li><code>stretch keep-ratio</code> - 拉伸图像(保持宽高比)以便铺满整个区域。</li>
        <li><code>expand</code> - 可扩展填充(九宫格)，通过<code>***-image-position</code>定义图像的九个部分以便该图像覆盖整个区域。边角部分按原图展示，top/left/bottom/right/middle部分平铺至图片铺满整个区域。如果指定了<code>stretch-top</code>、<code>stretch-bottom</code>、<code>stretch-left</code>或<code>stretch-middle</code> ，则对于部分进行伸缩而不是平铺。</li></ul></dd></dl>

## 文本

<dl>
    <dt><strong>text-overflow</strong></dt>
    <dd><code>clip | ellipsis | path-ellipsis</code>
      <p>决定超出布局区域的文本如何绘制。该属性仅对文本容器元素有效—— a) 建立了块盒(如定义了<code>display:block</code> ) 和 b) 定义了<code>overflow-x:hidden;</code>的元素。</p>
      <ul>
        <li><code>clip</code> - 默认值, 文本被内容区域裁剪掉;</li>
        <li><code>ellipsis</code> - 截断文本以便适合内容区域，同时在后面添加<code>…</code>(省略号)来表示有更多的字符。</li>
        <li><code>path-ellipsis</code> - 在字符串中最后一个'/'或'\'字符处分隔出结尾部分，截断开头部分，并在起始部分和结束部分间添加<code>…</code>(省略号)。H-SMILE独有。</li></ul></dd></dl>

## 布局

<dl>
    <dt><strong>mapping</strong></dt>
    <dd><code>inherit | none | left-to-right | top-to-right |<br/>inherit( &lt;part-list&gt; ) | none( &lt;part-list&gt; ) | left-to-right( &lt;part-list&gt; ) | top-to-right( &lt;part-list&gt; )</code>
      <p>其中，<font face="monospace" size="2">&lt;part-list&gt;</font>是一个以逗号分隔的列表，它包含了一个或多个下面的描述: <font face="monospace" size="2">border</font>, <font face="monospace" size="2">padding</font>, <font face="monospace" size="2">margin</font>, <font face="monospace" size="2">background</font>, <font face="monospace" size="2">foreground</font>, <font face="monospace" size="2">layout</font>。</p> 
	  <p>该属性设置方向相关属性的映射。如下面的声明:</p> <pre v-pre><code>div { mapping: left-to-right(border,margin); }
</code></pre> <p>会导致边框(颜色、宽度、样式)和外边距的左和右进行交换(即镜像)，所以示例中左边框会当做右边框，右边框会当做左边框来绘制。</p>
注意：该属性默认是可继承的。所以定义<font face="monospace" size="2">body { mapping: left-to-right;}</font>后，该元素和它的继承元素的方向属性都会进行左右镜像转换。<font face="monospace" size="2">&lt;part-list&gt;</font>中名称的含义: 
       <ul> 
        <li><font face="monospace" size="2">border</font> - 边框的所有相关属性: color, style, width。</li> 
        <li><font face="monospace" size="2">padding</font> - 所有内边距属性: padding-left, padding-right等。</li> 
        <li><font face="monospace" size="2">margin</font> - 所有外边距属性: margin-left, margin-right, hit-margin等。</li> 
        <li><font face="monospace" size="2">background</font> - 有方向的背景属性: background-position, background-image , 背景渐变。</li> 
        <li><font face="monospace" size="2">foreground</font> - 有方向的前景属性: foreground-position, foreground-image。</li> 
        <li><font face="monospace" size="2">layout</font> - 例如：<font face="monospace" size="2">flow:horizontal; mapping: left-to-right(layout);</font> 将会导致子元素从右到左的方向放置。</li>
       </ul></dd></dl>
