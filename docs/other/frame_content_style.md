## frame的content-style属性

<div class="post" id="post-41987">
      <h1 class="storytitle">
        &lt;frame content-style="content.css"&gt;
      </h1>
    </div>
    <div class="storycontent">
      <p>Sciter中，&lt;frame&gt;元素可以定义content-style属性。</p>
        <p>
          <code>content-style</code>属性定义src属性中的URL指定的文档的顶层样式表:
        </p>
        <pre><code>&lt;frame src=&quot;some-child.htm&quot; content-style=&quot;content.css&quot; /&gt;</code></pre>
        <p>
          如果这个some-child.htm文档的末尾定义了<code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;content.css&quot;&gt;</code>  则content.css文档将会附加到some-child.htm样式表的末尾:
        </p>
        <pre><code>&lt;html&gt; 
  &lt;head&gt; 
    &lt;style&gt; 
      ... 本地样式 ... 
    &lt;/style&gt;
  &lt;/head&gt; 
  &lt;body&gt; 
    ... 本地内容 ... 
  &lt;/body&gt; 
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;content.css&quot; /&gt;
&lt;/html&gt;</code></pre>
        <div>
        </div>
        <p>
          所以当宿主文档想:
        </p>
        <ol>
          <li>
            1.自定义渲染frame中的子文档时
          </li>
          <li>
            2.为子文档注入一些脚本行为时
          </li>
        </ol>
        <p>
          它可以指定自己的content.css文件，而无需修改那些子文档。
        </p>
        <p>
          Sciter SDK 内建的文档浏览器就是一个content-style属性的使用示例:
        </p>
        <p>
          <code>
            {sciter-sdk]/doc/main.htm
          </code>
          定义的内容frame为:
        </p>
        <pre><code>&lt;frame #content src=&quot;content/preface.htm&quot; content-style=&quot;styles/content.css&quot;/&gt;</code></pre>
        <p>
          因此，每个加载到frame中的子文档都会应用
          <code>{sciter-sdk}/doc/styles/content.css</code>
          样式到它的内容区域。
        </p>
    </div>