# 九宫格图像

九宫格图像是定义DOM元素弹性边框盒背景的一种简单而有效的方式。
  <p>下面是一个九宫格图像的示例, 这个图片如下:</p>
  <p><img src="../imgs/back.png" alt="source"/></p>
  <p>该图片扩展或作为下面的div元素的背景:</p>
  <p><img src="../imgs/final.png" alt="destination"/></p>
  <p>九宫格图像是一张位图图像，如png、jpeg 或 gif。Sciter为标准的background-repeat属性扩展了新值，用于声明九宫格图像，。同时可以通过background-position属性来定义原图像中的每一节如何渲染。</p>
  <p>正式的定义:</p>
  <pre v-pre><code>background-repeat: expand [stretch-top] [stretch-bottom] [stretch-middle] [stretch-left] [stretch-right];
background-position: top right bottom left;</code>
</pre>
  <p>其中:</p>
  <ul>
    <li><code>top</code>、<code>right</code>、<code>bottom</code>、<code>left</code>是一个数字(图像像素数)，将图像分拆成9个区域，它们定义了图像拆分的这9个区域的宽度/高度外边距。这些区域将会被复制、平铺或者拉伸到目标区域上(见下面的说明);</li>
    <li><code>stretch-top</code>、<code>stretch-bottom</code>、<code>stretch-middle</code>、<code>stretch-left</code>、<code>stretch-right</code>这几个值用于定义对应区域如何复制到目标部分上。例如，如果没有stretch-top, 则原图像顶部区域将被平铺到目标区域的该部分。而如果定义了stretch-top值，则原图像的顶部区域将被拉伸到目标区域的该部分。</li></ul>
  <p>注意: background-repeat:expand图像将铺满元素的内边距内的所有区域。因此我们可以重用background-position属性来定义图像的每一部分如何渲染。</p>

## 平铺示例

<p>下面是一个示例，它用于说明声明的图片如何扩展到&lt;div&gt;元素的目标区域。CSS定义如下:</p>
  <pre v-pre><code>div
 {
   background-image:url(back.png);
   background-repeat:expand; 
   background-position:14 14 14 14; /* 这个图像的所有&quot;边框&quot;部分都是14px宽 */
   padding:14px;
   height:100px;
 }</code>
</pre>
  <div><img src="../imgs/schema.png" alt="Illustration of expandable image"/></div>
  <p>这个示例使用的文档的所有HTML源代码为:</p>
  <pre v-pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;style&gt;
      body { background-color: white white bisque bisque; margin:0; padding:20px; }
      div
      {
        background-image:url(back.png);
        background-repeat:expand;
        background-position:14 14 14 14;
        padding:14px;
        height:100px;
      }
    &lt;/style&gt;
  &lt;/head&gt;
&lt;body&gt;
  &lt;div&gt;Hello world!&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
</pre>

## 拉伸示例

<p>这里有另一张图像，我们需要使它在水平方向上平铺，而在垂直方向上拉伸。源图像为:</p>
  <p><img src="../imgs/back-stretch.png" alt="Source"/></p>
  <p>该图像的渲染效果示例:</p>
  <p><img src="../imgs/final-stretch.png" alt="Final rendering"/></p>
  <p>上面的效果的所有HTML文档源码为:</p>
  <pre v-pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;style&gt;
      body { background-color: white white bisque bisque; margin:0; padding:20px; }
      button
      {
        background-image:url(back-stretch.png);
        background-repeat:expand stretch-left stretch-middle stretch-right;
        background-position:8 8 8 8;
        padding:10px;
      }
    &lt;/style&gt;
  &lt;/head&gt;
&lt;body&gt;
 Buttons with custom shapes:
 &lt;button&gt;Small&lt;/button&gt;,
 &lt;button&gt;Fairly big with&lt;br/&gt;multiline text&lt;/button&gt; and
 &lt;button&gt;Even bigger&lt;br/&gt;because it has three&lt;br/&gt;lines of text&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
</pre>