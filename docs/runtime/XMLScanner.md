# XMLScanner(XML浏览器)

<p>XMLScanner - XML/HTML tokenzier。也被称为XML解析器。</p>
    <dl>
      <h2>常量</h2>
      <p>token()方法的返回值。</p>
        <dt>ERROR</dt>
        <dd>- 在输入流中的标记错误</dd>
        <dt>EOF</dt>
        <dd>- 到达流的末尾</dd>
        <dt>HEAD</dt>
        <dd>
          <div>- 解析到标签元素头开始:</div>
          <pre v-pre><code>&lt;tag ...<br/> &nbsp;^-- 该常量产生自这里</code></pre></dd>
        <dt>HEAD_END</dt>
        <dd>
          <div>- 解析到非空标签元素头结束:</div>
          <pre v-pre><code>&lt;tag ... &gt;<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^-- 该常量产生自这里</code></pre></dd>
        <dt>EMPTY_HEAD_END</dt>
        <dd>
          <div>- 解析到空标签元素头结束:</div>
          <pre v-pre><code>&lt;tag ... /&gt;<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^-- 该常量产生自这里</code></pre></dd>
        <dt>TAIL</dt>
        <dd>
          <div>- 解析到空标签元素尾开始:</div>
          <pre v-pre><code>&lt;/tag&gt;<br/> ^-- 该常量产生自这里</code></pre></dd>
        <dt>ATTR</dt>
        <dd>
          <div>- 解析到属性:</div>
          <pre v-pre><code>&lt;tag attr=&quot;value&quot; &gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^-- 该常量产生自这里</code></pre>
          <p>属性可以有或没有(html样式)值。scanner.attribute是属性的名，scanner.value是属性的值。</p></dd>
        <dt>TEXT</dt>
        <dd>
          <div>-解析到文本.</div>
          <p><em>scanner.value</em>包含该文本。</p></dd>
        <dt>CDATA</dt>
        <dd>
          <div>- 解析到cdata:</div>
          <pre v-pre><code>&lt;![CDATA[ ...value... ]]&gt;<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^-- 该常量产生自这里</code></pre>
          <p>scanner.value包含cdata的文本。</p></dd>
        <dt>PI</dt>
        <dd>
          <div>- 解析到处理指令:</div>
          <pre v-pre><code>&lt;? ...value... ?&gt;<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^-- happens here</code></pre>
          <p><em>scanner.value</em> 包含指令的文本</p></dd>
        <dt>DOCTYPE</dt>
        <dd>- 解析到doctype声明:
          <pre v-pre><code>&lt;!DOCTYPE ...value... &gt;<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^-- 该常量产生自这里</code></pre>
          <p><em>scanner.value</em> 包含doctype的声明文本: <!DOCTYPE 后面的和 '>' 前面的字符串。</p></dd>
          <h2>属性</h2>
        <dt>value</dt>
        <dd>- <em>string</em>, 属性的值、文本、cdata或指令文本等。</dd>
        <dt>attribute</dt>
        <dd>- <em>string</em>, 属性名。当token == XMLScanner.ATTR时有效。</dd>
        <dt>tag</dt>
        <dd>- <em>string</em>, 标签名。当token为XMLScanner.HEAD、XMLScanner.TAIL或XMLScanner.HEAD_END时有效。</dd>
          <h2>方法</h2>
        <dt>token</dt>
        <dd>
          <p><strong>( </strong>&nbsp;<strong>)</strong> returns: <em>int</em></p>
          <p>返回一个上面的常量。请使用它们的全格式，如XMLScanner.HEAD、XMLScanner.TAIL等。</p></dd></dl>