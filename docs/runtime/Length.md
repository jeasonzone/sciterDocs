# Length(长度)

<dl>
          <div>长度类型，代表长度(距离)值。如mm, cm, px, in, pt等。</div>
          <p>长度是使用下面的构造函数构建。</p>
          <h2>构造函数</h2>
        <dt>em</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length, 这些函数根据对应类型构建长度值。</div></dd>
        <dt>ex</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length</div></dd>
        <dt>pr</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length/percentage</div></dd>
        <dt>fx</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length</div></dd>
        <dt>px</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length</div></dd>
        <dt>in</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length</div></dd>
        <dt>cm</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length</div></dd>
        <dt>mm</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length</div></dd>
        <dt>pt</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length</div></dd>
        <dt>pc</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length</div></dd>
        <dt>dip</dt>
        <dd>
          <div>(<strong> v</strong>: int | float ) : length</div></dd>
        <dt>length</dt>
        <dd>
          <div>(<strong> v</strong>: int | float, units: symbol ) : length</div></dd>
          <h2>常量</h2>
        <div><strong>N/A</strong></div>
          <h2>属性</h2>
        <dt>units</dt>
        <dd>只读, <em>symbol</em>, 返回值为下面值之一:
          <ul>
            <li>#em - em 字体单位;</li>
            <li>#ex - ex 字体单位;</li>
            <li>#pr - 百分比 '%';</li>
            <li>#fx - 弹力单位(h-smile CSS特有单位): 1fx = '1*' or '100%%';</li>
            <li>#px - 像素, 通常依赖于设备;</li>
            <li>#in - 英尺;</li>
            <li>#cm - 厘米;</li>
            <li>#mm - 毫米;</li>
            <li>#pt - 打印点(1/72 每英尺)</li>
            <li>#pc - typographical pica (1/12 每点)</li>
            <li>#dip - 设备独立像素 ( 1/96 每英尺)</li></ul></dd>
          <h2>方法</h2>
        <dt>parse</dt>
        <dd>
          <p>( <strong>text</strong>: string [, defval: undefined ) : length | defval</p>
          <p>静态方法, 解析字符串为长度值。如果解析失败则返回定义的defval值。</p></dd>
        <dt>make</dt>
        <dd>
          <div>(<strong> v</strong>: int | float, <strong>units</strong>: symbol ) : length</div>
          <p>静态方法, 根据<strong>units</strong>构建对应对象的长度值。</p></dd>
        <dt>toString</dt>
        <dd>
          <p>( ) : string</p>
          <p>返回长度值的字符串表示形式。例如&quot;12.5pt&quot;、&quot;1px&quot;等。</p></dd>
        <dt>toInteger</dt>
        <dd>
          <p>( ) : int</p>
          <p>转换长度为整数值。</p></dd>
        <dt>toFloat</dt>
        <dd>
          <p>( [<strong>unit</strong>: symbol [, <strong>defvalue</strong>: any ]) : float</p>
          <p>转换长度为浮点值。如果<em>unit</em>参数指定了上面定义的单位之一，则结果返回该单位的浮点表示。如果转换失败则返回定义的defval值(如果defvalue参数被省略则返回0.0)。</p></dd>
        <dt>morph</dt>
        <dd>
          <p>( <strong>lengthFrom</strong>, <strong>lengthTo</strong>, ratio ) : length</p>
          <p>使用下面的公式计算平均值: (lengthTo - lengthFrom) * ratio + lengthFrom;</p></dd>
        <dt></dt>
        <dd></dd></dl>