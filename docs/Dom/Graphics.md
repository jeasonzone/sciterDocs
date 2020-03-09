# 绘图(Graphics)对象

<h2 id="graphics">图像(Graphics)对象</h2>
  <p>代表元素的图形表面。</p>
  <p>几乎所有的绘图方法都会返回Graphic对象，以便支持层叠调用。所有下面的代码：<font face="Courier New">gfx.lineWidth(2).line(0,0,100,100)</font>将会画从(0,0)到(100,100)的2px宽的线。</p>
  <dl>
    <h3>常量</h3>
    <dt>JOIN_MITER<br/>JOIN_ROUND<br/>JOIN_BEVEL</dt>
    <dd>连接类型，<em>lineJoin</em>属性的值。</dd>
    <dt>CAP_BUTT<br/>CAP_SQUARE<br/>CAP_ROUND</dt>
    <dd>线帽类型, <em>lineCap</em>属性的值。</dd>
    <dt>ALIGN_DEFAULT<br/>ALIGN_START<br/>ALIGN_END<br/>ALIGN_CENTER</dt>
    <dd>文本的对齐方式，<em>Text.Alignment</em>函数参数的值。</dd>
    <h3>属性</h3>
    <dt>lineJoin</dt>
    <dd>读写 - <em>integer</em>, 线条连接类型，值为JOIN_xxx常量之一。</dd>
    <dt>lineCap</dt>
    <dd>读写 - <em>integer</em>, 线帽类型，值为CAP_xxx常量之一。</dd>
    <dt>blendMode</dt>
    <dd>读写 - <em>integer</em>, 绘图操作的混合模式，值为BLEND_xxx常量之一。</dd>
    <dt>imageBlendMode</dt>
    <dd>读写 - <em>integer</em>, 图像绘制的混合模式，值为BLEND_xxx常量之一。</dd>
    <dt>imageBlendColor</dt>
    <dd>读写 - <em>integer</em>, color. 图像混合颜色。</dd>
    <h3>静态方法</h3>
    <dt>RGBA</dt>
    <dd>
      <div>(<strong>red</strong><em>:integer</em> , <strong>green</strong><em>:integer</em>, <strong>blue</strong><em>:integer</em> [, <strong>alpha</strong><em>:integer|float (0.0 .. 1.0)</em>]) <em>:color</em> or<br/>(<strong>s</strong><em>:</em>string) <em>:color</em></div>
      <p>返回颜色的rgba值。示例: var c = Graphics.RGBA(0xff,0,0); - 纯红色 或者 Graphics.RGBA(&quot;red&quot;); 或者 Graphics.RGBA(&quot;#ff0000&quot;);</p></dd>
    <h3>方法</h3>
    <dt><strike>constructor</strike></dt>
    <dd>(不创建对象)</dd>
    <dt>clearAll</dt>
    <dd>
      <div>( [color: color] ): Graphics</div>
      <p>清除图像。</p></dd>
    <dd></dd>
    <h4>形状和线条</h4>
    <dt>line</dt>
    <dd>
      <div>( <strong>x1</strong>:<em>float</em>, <strong>y1</strong>:<em>float</em>, <strong>x2</strong>:<em>float</em>, <strong>y2</strong>:<em>float</em> ) : Graphics</div>
      <p>使用当前的lineColor和lineGradient来画一条从x1,y1到x2,y2的<strong>线条</strong>。</p></dd>
    <dt>triangle</dt>
    <dd>
      <div>( x1:<em>float</em>, y1:<em>float</em>, x2:<em>float</em>, y2:<em>float</em>, x3:<em>float</em>, y3:<em>float</em> ) : Graphics</div>
      <p>使用当前的lineColor/lineGradient和fillColor/fillGradient来画一个<strong>三角形</strong>。</p></dd>
    <dt>rectangle</dt>
    <dd>
      <div>( x:<em>float</em>, y:<em>float</em>, w:<em>float</em>, h:<em>float</em> ) or</div>
      <div>( x:<em>float</em>, y:<em>float</em>, w:<em>float</em>, h:<em>float</em>, r:<em>float</em> ) or</div>
      <div>( x:<em>float</em>, y:<em>float</em>, w:<em>float</em>, h:<em>float</em>, rx:<em>float</em>, ry:<em>float</em> ) or</div>
      <div>( x:<em>float</em>, y:<em>float</em>, w:<em>float</em>, h:<em>float</em>, rx_top:<em>float</em>, ry_top:<em>float</em>, rx_bottom:<em>float</em>, ry_bottom:<em>float</em> ) : Graphics</div>
      <p>使用当前的lineColor/lineGradient和fillColor/fillGradient来画一个<strong>矩形</strong>，该矩形可设置是否有圆角。</p></dd>
    <dt>ellipse</dt>
    <dd>
      <div>( x1:<em>float</em>, y1:<em>float</em>, r:<em>float</em> ) : Graphics or</div>
      <div>( x1:<em>float</em>, y1:<em>float</em>, rx:<em>float</em>, ry:<em>float</em> ) : Graphics</div>
      <p>使用当前的lineColor/lineGradient和fillColor/fillGradient来画一个<strong>圆形</strong>或<strong>椭圆</strong>。</p></dd>
    <dt>arc</dt>
    <dd>
      <div>( x1:<em>float</em>, y1:<em>float</em>, rx:<em>float</em>, ry:<em>float</em>, startAngle:<em>float</em>, swipeAngle:<em>float</em> ) : Graphics</div>
      <p>使用当前的lineColor/lineGradient和fillColor/fillGradient来画一个<strong>圆弧</strong>或<strong>圆饼</strong>(如果设置了填充的话)。</p></dd>
    <dt>star</dt>
    <dd>
      <div>( x1:<em>float</em>, y1:<em>float</em>, r1:<em>float</em>, r2:<em>float</em>, startAngle:<em>float</em>, numRays:<em>integer</em> ) : Graphics</div>
      <p>使用当前的lineColor/lineGradient和fillColor/fillGradient来画一个<strong>星</strong>。</p></dd>
    <dt>polygon</dt>
    <dd>
      <div>( x1:<em>float</em>, y1:<em>float</em>, x2:<em>float</em>, y2:<em>float</em>, .... ) : Graphics or</div>
      <div>( v1:array, v2:<em>array</em>, .... ) : Graphics</div>
      <p>使用当前的lineColor/lineGradient和fillColor/fillGradient来画一个<strong>多边形</strong>。</p></dd>
    <dt>pointInPolygon</dt>
    <dd>
      <div>( x:<em>float</em>, y:<em>float, </em>polyX1:<em>float</em>, polyY1:<em>float</em>, polyX2:<em>float</em>, polyY2:<em>float</em>, ....<em> </em>&nbsp;): <em>true</em> | <em>false</em> or</div>
      <div>( x:<em>float</em>, y:<em>float, </em>polygon:<em>array</em> ): <em>true</em> | <em>false</em></div>
      <p>如果(x,y)点在polygon多边形内则返回true，否则返回false。</p></dd>
    <dt>polyline</dt>
    <dd>
      <div>( x1:<em>float</em>, y1:<em>float</em>, x2:<em>float</em>, y2:<em>float</em>, .... ) : Graphics or</div>
      <div>( v1:array, v2:<em>array</em>, .... ) : Graphics</div>
      <p>使用当前的lineColor/lineGradient和fillColor/fillGradient来画一个<strong>折线(多段线)</strong>。</p></dd>
    <dt>drawPath</dt>
    <dd>
      <div>( path: Graphics.Path ) : Graphics</div>
      <p>使用现在的填充模式和线画刷来绘制path路径对象。</p></dd>
    <dt>copyImage</dt>
    <dd>
      <div>( img:<a href="Image.htm">Image</a> , x:<em>float</em>, y:<em>float</em> [, xIimg:<em>integer</em>, yImg:<em>integer, </em>wIimg:<em>integer</em>, hImg:<em>integer</em> ] ) : Graphics</div>
      <p>将点阵图像img绘制到graphics图像表面。无变换应用到图像上。</p></dd>
    <h4>图像绘制</h4>
    <dt>blendImage</dt>
    <dd>
      <div>( img:<a href="Image.htm">Image</a> , x:<em>float</em>, y:<em>float</em> [, xIimg:<em>integer</em>, yImg:<em>integer, </em>wIimg:<em>integer</em>, hImg:<em>integer</em> ] [, alpha: float | integer] ) : Graphics</div>
      <p>将<em>img</em>图像混合到graphics图像表面。该操作会重新计算图像的每个像素的alpha值。<em>alpha</em>参数值可以是[ 0.0 .. 1.0 ]或[ 0 .. 255 ]中的一个值。</p></dd>
    <dt>drawImage</dt>
    <dd>
      <div>( img:<a href="Image.htm">Image</a> , x:<em>float</em>, y:<em>float</em> [, w:<em>float</em>, h:<em>float</em>]<em> </em>[, xIimg:<em>integer</em>, yImg:<em>integer, </em>wIimg:<em>integer</em>, hImg:<em>integer</em> ] ) : Graphics</div>
      <p>将<em>img</em>图像混合到graphics图像表面。该操作会应用当前的变换(缩放、旋转)。</p></dd>
    <h4>画线和填充属性</h4>
    <dt>strokeWidth</dt>
    <dd>
      <div>( width: float ) : Graphics</div>
      <p>为后面的绘制操作设置线条宽度。</p></dd>
    <dt>strokeColor</dt>
    <dd>
      <div>( color: color ) : Graphics</div>
      <p>为后面的绘制操作设置线条颜色。</p></dd>
    <dt>strokeJoin</dt>
    <dd>
      <div>( cap: #mitter | #round | #bevel ) : Graphics</div>
      <p>设置线条连接处渲染类型。</p></dd>
    <dt>strokeCap</dt>
    <dd>
      <div>( cap: #butt | #square | #round ) : Graphics</div>
      <p>线帽 - 线条结束处样式。</p></dd>
    <dt>strokeDash</dt>
    <dd>
      <div>( dash: #solid | #dotted | #dashed | pattern: Array  [, offset: float ]) : Graphics</div>
      <p>线条绘制样式, 或者是预定义类型(#solid, #dotted 或 #dashed)，或者一个数组定义的自定义模式，这个数组中的元素(浮点数)用于定义每个点和空间的长度。</p></dd>
    <dt>noStroke</dt>
    <dd>
      <div>() : Graphics</div>
      <p>禁用线条(轮廓)绘制。</p></dd>
    <dt>fillColor</dt>
    <dd>
      <div>( color: color ) : Graphics</div>
      <p>设置实体(solid)填充的颜色。</p></dd>
    <dt>strokeLinearGradient</dt>
    <dd>
      <div>( x1: float, y1: float, x2: float, y2: float, color1: rgba, color2: rgba [, p: float] ) : Graphics</div>
      <p>设置线条线性渐变的参数。</p></dd>
    <dt>strokeLinearGradient</dt>
    <dd>
      <div>( x1: float, y1: float, x2: float, y2: float, colors: [color1, color2, color3, .. ] ) : Graphics</div>
      <p>设置线条线性渐变的参数(可以设置多个渐进色)。</p></dd>
    <dt>strokeLinearGradient</dt>
    <dd>
      <div>( x1: float, y1: float, x2: float, y2: float, colors: [color1, color2, color3], colorstops: [float, float, float] ) : Graphics</div>
      <p>设置线条线性渐变的参数(可以设置多个渐进色和渐变结束位置(0.0 ... 1.0))。</p></dd>
    <dt>fillLinearGradient</dt>
    <dd>
      <div>( x1: float, y1: float, x2: float, y2: float, color1: rgba, color2: rgba [, p: float] ) : Graphics</div>
      <p>设置线性渐变填充的参数，填充颜色使用color2。</p></dd>
    <dt>fillLinearGradient</dt>
    <dd>
      <div>( x1: float, y1: float, x2: float, y2: float, colors: Array [, stops: Array] ) : Graphics</div>
      <p>设置辐射渐变填充的参数，填充颜色使用<i>colors</i>数组，另外你也可以提供<i>stop</i>位置 - 0.0 ... 1.0之间的值组成的数组。</p></dd>
    <dt>lineRadialGradient</dt>
    <dd>
      <div>( x1: float, y1: float, r: float, color1: rgba, color2: rgba [, p: float] ) : Graphics</div>
      <p>设置辐射渐变填充的参数。</p></dd>
    <dt>fillRadialGradient</dt>
    <dd>
      <div>( x1: float, y1: float, r: float, colors: Array [, stops: Array] ) : Graphics</div>
      <p>设置辐射渐变填充的参数，填充颜色使用<i>colors</i>数组，另外你也可以提供<i>stop</i>位置 - 0.0 ... 1.0之间的值组成的数组。</p></dd>
    <dt>noFill</dt>
    <dd>
      <div>( ) : Graphics</div>
      <p>为接下来的绘制操作禁用填充。</p></dd>
    <h4>仿射变换</h4>
    <dt>rotate</dt>
    <dd>
      <div>( radians: float ) : Graphics</div>
      <p>旋转<em>radians</em>角度的系统坐标系。</p></dd>
    <dt>scale</dt>
    <dd>
      <div>( sx: float, sy: float ) : Graphics</div>
      <p>缩放系统坐标系。<code>sx</code>是水平方向上的缩放比例，<code>sy</code>是垂直方向上的缩放比例。 两个参数都必须是正数。当值小于<code>1.0</code>时进行缩放，当值大于<code>1.0</code>时进行放大。</p></dd>
    <dt>translate</dt>
    <dd>
      <div>( tx: float, ty: float ) : Graphics</div>
      <p>将系统坐标的原点移动到(tx,ty)点。</p></dd>
    <dt>skew</dt>
    <dd>
      <div>( shx: float, shy: float ) : Graphics</div>
      <div>
        <div>设置倾斜变换。</div></div></dd>
    <dt>transform</dt>
		<dd>
      <div>( sx : float, shy : float, shx : float, sy : float, tx : float, ty : float&nbsp;) : Graphics</div>
      <p>设置变换矩阵：</p>
			<pre v-pre><code>  sx  shy tx
[ shx sy  ty ]
  0   0   1 </code></pre></dd>
    <dt>screenToWorld</dt>
    <dd>
      <div>(r: number) : float</div></dd>
    <dt>screenToWorld</dt>
    <dd>
      <div>(x: number, y: number) : (float, float)</div>
      <p>这两个函数将系统屏幕坐标系转换到一个rotate()、scale()、translate()、skew()、transform()定义的坐标系。</p></dd>
    <dt>worldToScreen</dt>
    <dd>
      <div>(r: number) : float</div></dd>
    <dt>worldToScreen</dt>
    <dd>
      <div>(x: number, y: number) : (float, float)</div>
      <p>这两个函数将一个rotate()、scale()、translate()、skew()、transform()定义的坐标系转换到系统屏幕坐标系。</p></dd>
    <h4>文本输出</h4>
    <dt>drawText</dt>
    <dd>
      <div>( text: <em>Graphics.Text</em>, x: float, y: float [, clr: color] [, pointOf: integer] ) : Graphics</div>
      <p>在(x,y)位置处渲染文本布局对象(见下面)，可使用以下可选参数:</p>
      <ul>
        <li>clr - color, 如果提供该参数则使用该颜色渲染文本。如果未给该参数则使用当前的填充和线条画刷来渲染文本和轮廓。</li>
        <li>pointOf - 范围:1..9。 定义文本布局的哪一部分对应到(x,y)。该数字的意义请看键盘上的小键盘数字。&nbsp;示例:<br/>
		<code>gfx.drawText(text, 100,100, 5);</code> - 该text的中心点绘制到(100,100)点。<br/>
		默认情况下pointOf=7 - x,y对应于文本的左上角坐标。</li></ul></dd>
    <dt>fonts</dt>
    <dd>
      <div>( [template:string] ) : array of strings, class method (a.k.a. static method).</div>
      <p>返回一个字符串数组 - 安装的姿态名称列表。 <em>template</em>是字体名称的模板。例如， 在你的系统上，Graphics.fonts(&quot;Arial*&quot;)可能返回一个[&quot;Arial&quot;, &quot;Arial Black&quot;, &quot;Arial Narrow&quot;]数组。</p></dd>
    <h4>状态</h4>
    <dt>antialiasing</dt>
    <dd>
      <div>( <strong>onOff</strong>: boolean ) : Graphics</div>
      <p>启用/禁用抗锯齿。默认情况下，抗锯齿是<i>打开(on)</i>状态。</p></dd>
    <dt>save</dt>
    <dd>
      <div>( ) : Graphics</div>
      <p>保存当前绘图对象属性到内部状态堆栈的顶层。</p></dd>
    <dt>restore</dt>
    <dd>
      <div>( ): Graphics</div>
      <p>从内部状态堆栈的顶层恢复绘图对象。</p></dd>
    <h4>层</h4>
    <dt>pushLayer</dt>
    <dd>
      <div>( <strong>x</strong>: float, <strong>y</strong>: float, <strong>width</strong>: float, <strong>height</strong>: float [, <strong>opacity</strong>: 0.0... 1.0 | <b>filter</b>] ) : Graphics</div>
      <p>设置矩形裁剪区域，可设置不透明度。</p></dd>
    <dt>pushLayer</dt>
    <dd>
      <div>( <strong>region</strong>: Graphics.Path [, <strong>opacity</strong>: 0.0... 1.0] ) : Graphics</div>
      <p>设置矩形裁剪区域到路径(path)对象，可设置不透明度。</p></dd>
    <dt>pushLayer</dt>
    <dd>
      <div>( <strong>image</strong>: Image, mask1a: true | false, [, <strong>opacity</strong>: 0.0... 1.0] ) : Graphics</div>
      <p>设置image的剪辑掩码。 如果<em>mask1a</em>为true，则所有alpha == 0的像素点将<strong>不会</strong>被渲染。如果<em>mask1a</em>为false，则它是一个相反的掩码 - 所有alpha == 0的像素点将被渲染。</p></dd>
    <dt>pushLayer</dt>
    <dd>
      <div>( <strong>area</strong>: Symbol [, <b>filter</b>] ) : Graphics</div>
      <p>设置矩形裁剪区域。area参数可设置一下值之一:</p>
      <ul>
        <li><code>#background-area</code> - 元素的背景区域，包括圆角边框(如果为该元素声明了的话);</li>
        <li><code>#client-box</code> - 元素的客户区域(内部盒前景可能出现的滚动条区域);</li>
        <li><code>#margin-box</code> - 元素的外边距盒;</li>
        <li><code>#border-box</code> - 元素的边框盒;</li>
        <li><code>#padding-box</code> - 元素的内边距盒;</li>
        <li><code>#inner-box</code> - 元素的内部/内容盒;</li>
			</ul>
			<p><i>filter</i>是以下CSS过滤器之一(表示为元组):</p>
			<ul>
        <li><code>[blur:</code> radius<code>]</code> - radius这里是一个长度单位;</li>
        <li><code>[brightness:</code> 0.0...1.0<code>]</code></li>
        <li><code>[contrast:</code> 0.0...1.0<code>]</code></li>
        <li><code>[grayscale:</code> 0.0...1.0<code>]</code></li>
        <li><code>[hue-rotate:</code> 0...360<code>]</code></li>
        <li><code>[invert:]</code></li>
        <li><code>[opacity:</code> 0.0...1.0<code>]</code></li>
        <li><code>[saturate:</code> 0.0...1.0<code>]</code></li>
        <li><code>[sepia:</code> 0.0...1.0<code>]</code></li>
        <li><code>[drop-shadow:</code> color, dx, dy, radius, spread<code>]</code> - dx,dy,radius和spread都是长度单位。</li>
      </ul>
    </dd>
    <dt>popLayer</dt>
    <dd>
      <div>( ): Graphics</div>
      <p>从绘图对象中弹出绘图层。如果该层使用了不透明度则这是会重新渲染。</p></dd></dl>
  <h2>路径(Graphics.Path)对象</h2>
  <dl>
    <dt>this</dt>
    <dd>
      <div>([<b>d</b>:string]) : Graphics</div>
      <p>构造函数, 开始一个新路径。请使用<code>var path = new Graphics.Path();</code>来创建一个新的路径对象。</p>
      <p> <i>d</i>是一个<code>&lt;path d=...&gt;</code>格式的SVG属性值, 如果指定了该值，则会初始化该路径。</p></dd>
    <dt>moveTo</dt>
    <dd>
      <div>( x:<em>float</em>, y:<em>float </em>[, relative <em>= false</em> ] ) : Graphics.Path</div>
      <p>移动当前绘制路径位置到x,y。如果<em>relative</em>为<em>true</em>，则<em>x</em>、<em>y</em>被理解成从当前路径位置的增量。</p></dd>
    <dt>lineTo</dt>
    <dd>
      <div>( x:<em>float</em>, y:<em>float </em>[, relative <em>= false</em> ] ) : Graphics.Path</div>
      <p>绘制线条，同时将当前绘制路径位置移动到x,y。如果<em>relative</em>为<em>true</em>，则<em>x</em>、<em>y</em>被理解成从当前路径位置的增量。</p></dd>
    <dt>hlineTo</dt>
    <dd>
      <div>( x:<em>float </em>[, relative <em>= false</em> ] ) : Graphics.Path</div>
      <p>绘制水平线条，同时将当前绘制路径位置移动到x,y(当前)。如果<em>relative</em>为<em>true</em>，则<em>x</em>被理解成从当前路径位置的增量。</p></dd>
    <dt>vlineTo</dt>
    <dd>
      <div>( y:<em>float </em>[, relative <em>= false</em> ] ) : Graphics.Path</div>
      <p>绘制垂直线条，同时将当前绘制路径位置移动到x(当前),y。如果<em>relative</em>为<em>true</em>，则<em>y</em>被理解成从当前路径位置的增量。</p></dd>
    <dt>arcTo</dt>
    <dd>
      <div>( x1:<em>float</em>, y1:<em>float,</em> x2:<em>float</em>, y2:<em>float</em>, radius: <em>float&nbsp;</em><em> </em>[, relative <em>= false</em> ] ) : Graphics.Path</div>
      <p>在[(x0,y0) - (x1,y1)]和[(x1,y1) - (x2,y2)]的两条线之间的(x1,y1)点的角落处会在弧线。参见: <a onmousedown="return rwt(this,'','','','3','AFQjCNEYwX0AEYPgDi7lZpmT-fu-hkXZDg','','0ahUKEwiIlomZyu7UAhUL4WMKHUIGC24QFgg1MAI','','',event)" href="https://www.google.ca/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=3&amp;ved=0ahUKEwiIlomZyu7UAhUL4WMKHUIGC24QFgg1MAI&amp;url=http%3A%2F%2Fwww.dbp-consulting.com%2Ftutorials%2Fcanvas%2FCanvasArcTo.html&amp;usg=AFQjCNEYwX0AEYPgDi7lZpmT-fu-hkXZDg" data-ctbtn="0" data-cthref="/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=3&amp;ved=0ahUKEwiIlomZyu7UAhUL4WMKHUIGC24QFgg1MAI&amp;url=http%3A%2F%2Fwww.dbp-consulting.com%2Ftutorials%2Fcanvas%2FCanvasArcTo.html&amp;usg=AFQjCNEYwX0AEYPgDi7lZpmT-fu-hkXZDg">Canvas 
ArcTo教程</a></p></dd>
    <dt>arc</dt>
    <dd>
      <div>( cx:<em>float</em>, cy:<em>float,</em> radius:<em>float</em>[, radiusy:<em>float</em>], start: <em>float | angle&nbsp;</em><em/>, swipe : <i>float | angle</i> ) : Graphics.Path</div>
      <p>以(<i>cx</i>,<i>cy</i>)为中心点，以<i>radius</i>为半径，从<i>start</i>开始画<i>swipe</i>角度的弧线。Swipe 为旋转角度 - 当它为正时为顺时针，反之为逆时针。</p></dd>
    <dt>quadraticCurveTo</dt>
    <dd>
      <div>( xc:<em>float</em>, yc:<em>float</em> , x:<em>float</em>, y:<em>float</em> [, relative <em>= false</em> ] ) : Graphics.Path</div>
      <p>(tbd)</p></dd>
    <dt>bezierCurveTo</dt>
    <dd>
      <div>( xc1:<em>float</em>, yc1:<em>float</em> , xc2:<em>float</em>, yc2:<em>float, </em>x:<em>float</em>, y:<em>float</em> [, relative <em>= false</em> ] ) : Graphics.Path</div>
      <p>(tbd)</p></dd>
    <dt>close</dt>
    <dd>
      <div>( &nbsp;) : Graphics.Path</div>
      <p>闭合当前的路径/图形。</p></dd>
    <dt>fillEvenOdd</dt>
    <dd>
      <div>( <strong>even</strong>: true|false ) : Graphics.Path</div>
      <p>设置多边填充的奇/偶规则。</p></dd>
    <dt>isPointInside</dt>
    <dd>
      <div>( <strong>x</strong>: float, <strong>y</strong>: float ) : true | false</div>
      <p>测试(x,y)点十分在路径内。</p></dd>
    <dt>combine</dt>
    <dd>
      <div>( <strong>mode</strong> : symbol, <strong>other</strong> : Graphics.Path ) : Graphics.Path</div>
      <p>合并<em>this</em>和<em>other</em>的路径, 返回一个新的合并后的路径。<em>mode</em>参数可以为以下值之一:</p>
      <ul>
        <li><strong>#union</strong> - 结果路径是这两个数据的合集 - 包含<em>this</em><strong>或</strong><em>other</em>的区域;</li>
        <li><strong>#intersect</strong> - 结果路径是这两个数据的交集 - 包含在<em>this</em> <strong>且</strong> <em>other</em>中的区域;</li>
        <li><strong>#xor</strong> - 结果路径是这两个数据的xor集 - 包含<strong>仅</strong>在<em>this</em> <strong>或</strong> <em>other</em>路径中的区域，但不包含同时在这两个路径中的区域;</li>
        <li><strong>#exclude</strong> - 结果路径包含<em>this</em>路径中排除与<em>other</em>重叠的区域后的区域。</li></ul></dd></dl>
  <h2>文本(Graphics.Text)对象</h2>
  <p>代表绘制到图像上的文本布局对象。</p>
  <p>所有的文本的长度度量都是基于DIP - 设备独立像素(1/96 英寸/像素点数)。</p>
  <dl>
    <h3>属性</h3>
    <dt>lines</dt>
    <dd>只读 - integer, 文本布局中的行数。若要该值有意义，你需要先设置文本布局的宽度，如<code>text.width(100);</code></dd>
	<dt>chars</dt>
    <dd>读写 - string, 文本布局渲染的字符集合。请在设置该对象的最小/最大宽度后再修改该属性。</dd>
    <h3>方法</h3>
    <dt>this</dt>
    <dd>
      <div>(str: <em>string</em> [, styleSource: <em>Element</em>])</div>
      <p>从一个字符串构建文本对象。当<em>styleSource</em>参数用于初始化文本对象的样式(字体、对齐方式等)。</p></dd>
    <dt>font</dt>
    <dd>
      <div>( name: <em>string</em>, size: <em>float</em>, [ bold: <em>true|false</em>, [ italic: <em>true|false</em>]] ) : Graphics.Text</div>
      <p>定义该文本对象的字体属性。</p></dd>
    <dt>width</dt>
    <dd>
      <div>( ) : ( maxWidth:<em>float</em>, minWidth:<em>float</em>, boxWidth:<em>float</em> )</div>
      <p>返回文本的最大和最小宽度和先前使用width(w)设置设置的盒宽度。</p>
      <p>最大宽度是文本无需换行时的宽度。如果文本包含一个新行[sequences]，则maxWidth是最宽的字符串的宽度。最小宽度文本中最宽的单词的宽度。</p></dd>
    <dt>width</dt>
    <dd>
      <div>( w:float ) : Graphics.Text</div>
      <p>设置布局对象的宽度。在width被设置后，所有相关的属性(height, lines)就有值了。</p></dd>
    <dt>height</dt>
    <dd>
      <div>( ) : (textHeight:float, boxHeight:float)</div>
      <div>返回文本的计算高度和先前使用height(h)设置设置的盒高度。</div></dd>
    <dt>height</dt>
    <dd>
      <div>( boxHeight: <em>float</em> ) : Graphics.Text</div>
      <div>设置文本对象的盒高度。</div></dd>
    <dt>line</dt>
    <dd>
      <div>(linNo: <em>integer</em>) : ( y: <em>float</em>, height: <em>float</em>, baselineOffset: float, length:<em>integer</em> )</div>
      <p>返回文本布局对象中特定行的度量信息:</p>
      <ul>
        <li>y - 距文本起始位置行的距离;</li>
        <li>height - 行高height of the line;</li>
        <li>baselineOffset - 基线(baseline)与行的y值的偏移量;offset of the baseline from y value of the line;</li>
        <li>length - 该行的字符的数量(精确到UTF16编码单位)， 包含新的行序(如果存在)。</li></ul></dd>
    <dt>alignment</dt>
    <dd>
      <div>( textAlignment: ALIGN_***, verticalAlignment: ALIGN_***) : Graphics.Text</div>
      <p>设置文本对象的文本对齐和垂直对齐方式。</p></dd>
    <dt>alignment</dt>
    <dd>
      <div>( ) : ( ALIGN_***, ALIGN_***)</div>
      <p>返回文本对象的文本对齐和垂直对齐方式。</p></dd></dl>
  <div>TBD.</div>