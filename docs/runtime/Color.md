# Color(颜色)

<p>表示一个颜色值。</p>
  <dl>
    <p>颜色值由全局函数color()创建:</p>
    <dt>color</dt>
    <dd>(<strong>r</strong>: int, <strong>g</strong>: int, <strong>b</strong>: int [, <strong>opacity</strong>: int | float]) : color<br/>(<strong>s</strong>: string ) : color
      <p><em>color</em>函数根据red、green、blue、opacity分量构建一个颜色值。也可以解析CSS语法规则的颜色字符串。</p>
			<p>颜色值也可以使用类似CSS那样的颜色常量来声明:</p>
			<ul>
        <li><code><b>color #rgb</b>;</code></li>
        <li><code><b>color #rrggbb</b>;</code></li>
        <li><code><b>color #rrggbb</b><b>aa</b>;</code></li>
			</ul>
			<p>其中<i>r</i>、<i>g</i>、<i>b</i>和<i>a</i>是16进制数字:0...f。</p>
			<p>也可以使用HTML中的<a href="http://htmlcolorcodes.com/color-names/">颜色名称</a>:</p>
			<ul>
        <li><code>color.violet;</code></li>
        <li><code>color.red;</code></li>
        <li><code>color.gold;</code></li>
      </ul>
		</dd>
    <h2>常量</h2>
    <div><strong>N/A</strong></div>
    <h2>属性</h2>
    <dt>r</dt>
    <dd>只读, <em>integer</em> 0..255, 红色通道值。</dd>
    <dt>g</dt>
    <dd>只读, <em>integer</em> 0..255, 绿色通道值。</dd>
    <dt>b</dt>
    <dd>只读, <em>integer</em> 0..255, 蓝色通道值。</dd>
    <dt>a</dt>
    <dd>只读, <em>integer</em> 0..255, Alpha通道值。</dd>
    <h2>方法</h2>
    <dt>rgba</dt>
    <dd>
      <div>(<strong>r</strong>: int, <strong>g</strong>: int, <strong>b</strong>: int [, <strong>opacity</strong>: int | float]) : color</div>
      <p>静态方法(类的), 根据red、green、blue、opacity分量构建一个颜色值。</p></dd>
    <dt>hsv</dt>
    <dd>
      <div>(<strong>hue</strong>: float | angle, <strong>saturation</strong>: float, <strong>value</strong>: float [, <strong>opacity</strong>: int | float]) : color</div>
      <p>静态方法(类的), 根据HSV(色调[0-360]、饱和度[0.0-1.0]、明度[0.0-1.0])值构建一个颜色值。见: <a href="http://en.wikipedia.org/wiki/HSL_color_space">http://en.wikipedia.org/wiki/HSL_color_space</a></p></dd>
    <dt>hsl</dt>
    <dd>
      <div>(<strong>hue</strong>: float | angle, <strong>saturation</strong>: float, <strong>lightness</strong>: float [, <strong>opacity</strong>: int | float]) : color</div>
      <p>静态方法(类的), 根据HSL(色调[0-360]、饱和度[0.0-1.0]、亮度[0.0-1.0])值构建一个颜色值。见: <a href="http://en.wikipedia.org/wiki/HSL_color_space">http://en.wikipedia.org/wiki/HSL_color_space</a></p></dd>
    <dt>tint</dt>
    <dd>
      <div>( <strong>luminance</strong>: float [, <strong>saturation</strong>: float[, <strong>hue</strong>: float | angle]] ) : color</div>
      <p>返回颜色值-该方法应用的颜色值的色调。luminance和saturation是范围为-1.0...+1.0间的浮点值。<em>hue</em>可以说角度值也可以是浮点值。(角度范围: 0 .. 360)</p></dd>
    <dt>hue</dt>
    <dd>
      <div>( <strong>hue</strong>: angle ) : color</div>
      <p>通过设置在HSL色彩空间的<em>hue</em>(色调)分量返回一个新的颜色值, hue可以是angle或float, 角度范围为0 .. 360。</p></dd>
    <dt>rotate</dt>
    <dd>
      <div>( <strong>hue</strong>: angle ) : color</div>
      <p>通过角度值增加/减少在HSL色彩空间的Hue(色调)分量返回一个新的颜色值。</p></dd>
    <dt>lightness</dt>
    <dd>
      <div>( <strong>lightness</strong>: 0.0...1.0 ) : color</div>
      <p>通过设置在HSL色彩空间的<em>lightness</em>(亮度)分量返回一个新的颜色值。</p></dd>
    <dt>lighten</dt>
    <dd>
      <div>( <strong>dl</strong>: 0.0...1.0 ) : color</div>
      <p>通过增加在HSL色彩空间的<em>lightness</em>(亮度)分量返回一个新的颜色值。</p></dd>
    <dt>darken</dt>
    <dd>
      <div>( <strong>dl</strong>: 0.0...1.0 ) : color</div>
      <p>通过减少在HSL色彩空间的<em>lightness</em>(亮度)分量返回一个新的颜色值。</p></dd>
    <dt>saturation</dt>
    <dd>
      <div>( <strong>saturation</strong>: 0.0...1.0 ) : color</div>
      <p>通过设置在HSL色彩空间的<em>saturation</em>(饱和度)分量返回一个新的颜色值。</p></dd>
    <dt>saturate</dt>
    <dd>
      <div>( <strong>ds</strong>: 0.0...1.0 ) : color</div>
      <p>通过增加在HSL色彩空间的<em>saturation</em>(饱和度)分量返回一个新的颜色值。</p></dd>
    <dt>desaturate</dt>
    <dd>
      <div>( <strong>ds</strong>: 0.0...1.0 ) : color</div>
      <p>通过减少在HSL色彩空间的<em>saturation</em>(饱和度)分量返回一个新的颜色值。</p></dd>
    <dt>opacity</dt>
    <dd>
      <div>( <strong>opacity</strong>: 0.0...1.0 ) : color</div>
      <p>通过设置在RGBA色彩空间的<em>alpha</em>(透明度)分量返回一个新的颜色值。</p></dd>
    <dt>opacify</dt>
    <dd>
      <div>( <strong>delta</strong>: 0.0...1.0 ) : color</div>
      <p>通过增加/减少在RGBA色彩空间的<em>alpha</em>(透明度)分量返回一个新的颜色值。</p></dd>
    <dt>grayscale</dt>
    <dd>
      <div>( <strong>ratio</strong>: 0.0...1.0 = 1.0) : color</div>
      <p>通过设置混合颜色的灰度值返回一个新的颜色值。</p></dd>
    <dt>parse</dt>
    <dd>
      <div>( <strong>text</strong>: string )</div>
      <p>静态方法(类的), 解析<strong>text</strong>字符串为一个颜色值。支持的格式:</p>
      <ul>
        <li>&quot;#RGB&quot;</li>
        <li>&quot;#RRGGBB&quot;</li>
        <li>&quot;rgb(r,g,b)&quot;</li>
        <li>&quot;rgba(r,g,b,a)&quot;</li>
        <li>类似于下面的文字: &quot;yellow&quot;、&quot;gold&quot;、&quot;red&quot;等。</li></ul></dd>
    <dt>toString</dt>
    <dd>
      <div>( [#RGB | #rgb | #rgba] ) : string</div>
      <p>根据提供的格式返回颜色值的字符串表示形式。支持的格式:</p>
      <ul>
        <li><em>#RGB</em> -  输出颜色值字符串格式为&quot;#RRGGBB&quot;;</li>
        <li><em>#rgb</em> -  输出颜色值字符串格式为&quot;rgb(r,g,b)&quot;;</li>
        <li><em>#rgba</em> - 输出颜色值字符串格式为&quot;rgba(r,g,b,a)&quot;。</li></ul></dd>
    <dt>toInteger</dt>
    <dd>
      <div>( ) : int</div>
      <p>转换颜色值为一个32位整数。</p></dd>
    <dt>toHSV</dt>
    <dd>
      <div>( ) : float,float,float</div>
      <p>将颜色值转换成3个值 - H、S和V颜色分量。</p></dd>
    <dt>toHSL</dt>
    <dd>
      <div>( ) : float,float,float</div>
      <p>将颜色值转换成3个值 - H、S和L颜色分量。</p></dd>
    <dt>morph</dt>
    <dd>
      <div>( from : color, to:color, ratio: float ) : color</div>
      <p>根据下面的公式计算平均值: <code>(to - from) * ratio + from</code>(应用于每个颜色分量)。 该转换基于左乘颜色空间。</p></dd></dl>