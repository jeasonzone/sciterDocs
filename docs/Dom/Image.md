# 图像(Image)对象

<p>图像(图片)。</p>
  <dl>
    <h2>常量</h2>
	<dt></dt>
    <dd>N/A</dd>
    <h2>属性</h2>
    <dt>url</dt>
    <dd><strong>- </strong><em>string</em>, 该图像的来源url。</dd>
    <dt>width</dt>
    <dd>- <em>integer</em>, pixels,图像的宽度。只读属性。</dd>
    <dt>height</dt>
    <dd>- <em>integer</em>, pixels, 图像的高度。只读属性。</dd>
    <h2>方法</h2>
    <dt>this</dt>
    <dd>
      <div><strong>(  elementWidth</strong>:<em>integer</em>, <strong>elementHeight</strong>:<em>integer,</em><strong> [imageWidth</strong>:<em>integer</em>, <strong>imageHeight</strong>:<em>integer</em>] [, <strong>clearBy</strong>: color], <strong>elem</strong>: Element<strong> &nbsp;)</strong> &nbsp;或者</div>
      <div><strong>( imageWidth</strong>:<em>integer</em>, <strong>imageHeight</strong>:<em>integer</em> [, <strong>clearBy</strong>: color], <strong>renderer</strong>: function<strong> &nbsp;)</strong></div>
      <p>第一种格式的构造方法创建一个新的Image对象并且按照指定的elementWidth/Height渲染elem到它上。如果提供了imageWidth/Height参数，则函数将会尝试缩放元素到该指定宽高盒中。</p>
      <p>第二种格式的构造方法创建一个新的Image对象并且调用<code>function renderer(gfx:</code><a href="Graphics.htm"><code>Graphics</code></a><code>)</code>函数，该函数将该图像的边界绘图对象作为函数的参数。</p>
      <p><strong>clearBy</strong>可选参数定义位图的初始化颜色。默认的图像初始化为argb(0,0,0,0)颜色。</p></dd>
    <dt>destroy</dt>
    <dd>
      <div>()</div>
      <p>销毁底层的本地位图。该方法用于在它不在需要时强制Image对象释放它的位图(可能是相当大的)。</p></dd>
    <dt>toBytes</dt>
    <dd>
      <div>([ <b>packaging</b>: #png | #jpeg | #webp | #raw] [, <strong>compressionLevel</strong>:integer]) : <a href="../script/Bytes.htm">Bytes</a></div>
      <p>保存图像的图像的内容为一个可被使用的字节向量，比如可以上传到服务器上。</p>
      <p><em>compressionLevel</em>是10..100中的一个值  - JPEG/WebP压缩层级。如果<i>compressionLevel</i>被省略或者为0并且未指定packaging参数，则该图像会保存为PNG编码。</p></dd>
    <dt>fromBytes</dt>
      <dd>
        <div>( bytes : <a href="../script/Bytes.htm">Bytes</a> ) : Image</div>
        <p>静态方法, 从字节流中构建图像。bytes可以包含任何支持的图像格式: PNG、JPEG等。</p></dd>
    <dt>size</dt>
    <dd>
      <div>( )</div>
      <p>该方法返回宽度、高度对，使用示例:<br/><code>var (w,h) = img.size();</code></p></dd>
    <dt>colorAt</dt>
    <dd>
      <div>( <strong>x</strong>: integer, <strong>y</strong>: integer [, <strong>c</strong>: color] ) : color</div>
      <p>该方法返回图像在x,y点的像素颜色。如果<em>c</em>参数提供了，则会将x,y点的像素颜色替换为c颜色。</p></dd>
    <dt>alphaMask</dt>
    <dd>
      <div>( <strong>mask</strong>: Image [, <strong>#luminance</strong> | <strong>#r</strong> | <strong>#g</strong> | <strong>#b</strong> | <strong>#a</strong> ] )</div>
      <p>该方法允许从其他图像设置该图像的alpha通道。默认情况下，第二个参数不提供。#luminance - 使用掩码图像的亮度值作为该图像对应位置像素的alpha值。 #r、#g、#b、#a - 使用掩码图像的红、绿、蓝或alpha通道值作为该图像的alpha值。</p></dd>
    <dt>compose</dt>
    <dd>
      <div>( <strong>src</strong>: Image , compositionOp, [dstX,dstY, [srcX,srcY,srcW, srcH ]]] ) : this image</div>
      <p>这个方法可以合并两个images: this (dst) 和 src Image。</p>
      <p>compositionOp是以下可选的合并操作: #src-over, #dst-over, #src-in, #dst-in, #src-out, #dst-out, #src-atop, #dst-atop, #xor, #copy。</p></dd>
    <dt>update</dt>
    <dd>
      <div>( <strong>renderer</strong>: function [, <strong>clearBy</strong>: color ])</div>
      <p>这个方法允许在一个已存在image上做渲染操作，通过<code>function renderer(gfx:</code><a href="Graphics.htm"><code>Graphics</code></a><code>)</code>回调函数的graphics对象参数来实现渲染。如果提供了<em>clearBy</em>参数，且是一个颜色值，则在渲染前将使用该颜色擦除图像。</p></dd></dl>