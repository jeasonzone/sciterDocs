# Angle(角度)

<p>表示一个角度值。</p>
  <dl>
    <p>角度值使用全局的<code><strong>rad</strong>(float)</code>或<code><strong>deg</strong>(integer)</code>函数构建一个角度值。</p>
    <p>Angle字面值是数字和角度单位的组合。下面的表达式将为true:</p>
    <pre v-pre><code>360deg instanceof Angle;
360deg == Math.PI * 2 * 1rad;
360deg == 400grad;
360deg == 1turn;
1turn / 2 == 180deg;</code>
</pre>
    <p>TIScript支持CSS定义的所有单位值:</p>
    <li><code>deg</code> - 度, 在一个完整圆中有360度;</li>
    <li><code>rad</code> - 弧度, 在一个完整圆中有2*π弧度;</li>
    <li><code>grad</code> - 梯度(Gradians)。一个圆共400梯度。90deg = 100grad = 0.25turn ≈ 1.570796326794897rad;</li>
    <li><code>turn</code> - 转、圈(Turns)。1圈等同于360度 - 一个完整的圆;</li>
    <h2>常量</h2>
    <div><strong>N/A</strong></div>
    <h2>属性</h2>
    <dt>degrees</dt>
    <dd>只读, <em>float</em>, 角度值</dd>
    <dt>radians</dt>
    <dd>只读, float, 弧度值。</dd>
    <h2>方法</h2>
    <dt>parse</dt>
    <dd>
      <p>(<strong>s</strong>: string) : angle</p>
      <p>静态方法, 根据CSS规则解析字符串为角度对象。</p></dd>
    <dt>toFloat</dt>
    <dd>
      <p>() : float</p>
      <p>将角度转换为弧度值。</p></dd>
    <dt>toInteger()</dt>
    <dd>
      <p>() : integer</p>
      <p>将角度转换成角度值。</p></dd>
    <dt>toString()</dt>
    <dd>
      <p>() : string</p>
      <p>返回&quot;NNNrad&quot;格式的字符串，其中NNN是一个弧度值。</p></dd>
    <dt>morph</dt>
    <dd>
      <p>( from : angle, to:angle, ratio: float ) : angle</p>
      <p>根据后面的公式计算平均值: <code>(to - from) * ratio + from</code>。</p></dd></dl>