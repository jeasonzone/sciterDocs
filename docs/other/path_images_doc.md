## path图像

<h1>在Sciter中内嵌矩阵图像(路径)</h1>
  <p>这个path是一个url，它使用自定义的<code>path:{commands}</code>协议，它可以在<code>&lt;path d=&quot;{commands}&quot; /&gt;</code>中直接使用<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths">SVG的path命令</a> )。</p>
  <p>因此任何已存在的SVG WYSIWYG编辑工具和SVG图片都可以直接使用 - 仅需从SVG中复制<code>d</code>属性的内容到CSS或HTML中(比如<code>&lt;img&gt;</code>或<code>&lt;picture&gt;</code>的src属性)即可。</p>
  <p>Sciter支持支持全部的&quot;d 命令&quot;: MmLlHhVvCcSsQqTtAaZz.</p>
  <p>示例, 请看下面的样式:</p>
  <pre><code>div {
  background-image: url( path:M0,0 L50,100 L100,0z );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  fill: red;
  stroke: blue;
}
</code></pre>
  <p>将会在元素的背景的(0,0), (50,100) and (100,0)位置上显示一个三角形。</p>
  <h2>可被用于绘图的CSS属性</h2>
  <p>为了可以绘制路径，Sciter未它添加了以下属性支持: </p>
  <ul>
    <li><strong>stroke</strong> : &lt;color&gt;</li>
    <li><strong>stroke-width</strong> : &lt;length&gt;</li>
    <li><strong>stroke-linecap</strong> : &nbsp;<strong>butt</strong> | round | square</li>
    <li><strong>stroke-linejoin</strong> : &nbsp;<strong>miter</strong> | round | bevel </li>
    <li><strong>storke-dasharray</strong>: &lt;length&gt;*</li>
    <li><strong>storke-dashoffset</strong>: &lt;length&gt;</li>
    <li><strong>fill</strong>: &lt;color&gt;</li></ul>
  <p>这些属性与SVG中的含义相同。</p>
  <h2>可扩展的iv-图像</h2>
  <p>我们有时需要一些可扩展的矢量图像，它们可以根据给定的尺寸自动调整大小。</p>
  <p>为了支持这样的图像，d-命令做了以下扩展：</p>
  <h3>右/下 锚点坐标</h3>
  <p>大写的d-命令( MLHVCSQTA )可以接受绝对坐标值，现在它可以使用负坐标值了(包括负零)。</p>
  <p>这时，负坐标意味着它们是图像矩形相对于右下角的偏移值。因此:</p>
  <pre><code> background-image: url( path:M0,0 L-0,-0 );
 stroke: blue;<br/> stroke-width: 3px;
</code></pre>
  <p>将会在元素背景区域绘制一条从左上角到右下角的宽度为3px的斜线。</p>
  <h3>比例坐标</h3>
  <p>你也可以根据图像的渲染位置的比例定义坐标。比例坐标值是一个后面跟着'*'好的0.0 ... 1.0直接的数字。比如:</p>
  <pre><code>background-image: url( path:M0,0 L1*,1* ); 
stroke: red;<br/>stroke-width: 3px;
</code></pre>
  <p>也将会在元素背景区域绘制一条从左上角到右下角的宽度为3px的斜线。</p>
  <p>比例坐标也可以是负值 - 将图像的右下角作为锚点进行渲染。</p>

