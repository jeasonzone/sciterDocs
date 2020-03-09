# System(系统)

<p class="note">脚本中这个对象的方法不总是有效的 - 它们依赖于当前VM创建时的一些特征参数。</p>
  <dl>
    <h2>常量</h2>
    <dt>IS_READONLY</dt>
    <dd>- int, scanFiles callback/attributes, 文件/目录 是只读的。</dd>
    <dt>IS_DIR</dt>
    <dd>- int, scanFiles callback/attributes, 文件是目录(文件夹)。</dd>
    <dt>IS_HIDDEN</dt>
    <dd>- int, scanFiles callback/attributes, 文件/目录 被标记为隐藏。</dd>
    <dt>IS_SYSTEM</dt>
    <dd>- int, scanFiles callback/attributes, 文件/目录 被标记为系统内部文件。</dd>
    <dt>MOBILE_OS</dt>
    <dd>- 如果是在移动平台运行的<em>mosciter</em>，将为true，否则是false。</dd>
    <dt>DESKTOP_OS</dt>
    <dd>- 如果是在PC平台运行的<em>sciter</em>，将为true，否则是false。</dd>
    <dt>OS</dt>
    <dd>- symbol, 在Windows系统中讲述以下值之一:
      <ul>
        <li><code>#Windows-2000</code></li>
        <li><code>#Windows-2003</code></li>
        <li><code>#Windows-XP</code></li>
        <li><code>#Windows-Vista</code></li>
        <li><code>#Windows-7</code></li>
		    <li><code>#Windows-7.1</code></li>
		    <li><code>#Windows-8</code></li>
		    <li><code>#Windows-8.1</code></li>
		    <li><code>#Windows-10</code></li>
      </ul>
    </dd>
    <dt>PLATFORM</dt>
    <dd>- symbol, 以下值之一:
      <ul>
        <li><code>#Windows</code></li>
        <li><code>#OSX</code></li>
        <li><code>#Linux</code></li>
      </ul>
    </dd>
    <dt>EOL</dt>
		<dd>- string, 平台特有的行终结符, 在windows系统上是&quot;\r\n&quot;，而其他系统是&quot;\n&quot;。</dd>
    <h2>属性</h2>
    <dt>language</dt>
    <dd>语言的缩写名称, ISO 639标准中的名称。</dd>
    <dt>country</dt>
    <dd>国家/地区名称, 基于ISO 3166标准。</dd>
    <dt>ticks</dt>
    <dd>高分辨率定时器。返回自引擎启动后到只当前为止的毫秒数。</dd>
    <h2>方法</h2>
    <dt>scanFiles</dt>
    <dd>
      <p><strong>( </strong><em>path</em>:string [,<em> callback</em>:function]<strong> )</strong> :integer</p>
      <p>该函数为<em>path</em>指定目录下发现的文件/目录调用<em>callback</em>函数。<em>Path</em>可以包含像?或*的特殊字符。函数返回查找到文件/目录数量。</p>
      <p>如果callback参数未指定，则该函数只返回满足path条件的项的数量。这种形式的调用一般用于判断一些文件是否存在。</p>
      <p>Callback函数可以接受两个参数:</p>
      <blockquote>
        <p>function <em>callback</em>( <em>filename</em>: string, <em>attributes</em>: integer ): bool</p></blockquote>
      <p>其中，<em>filename</em>是一个文件名，<em>attributes</em>是一个整数——IS_***标记的OR操作集合。Callback应该返回<em>true</em>。如果返回<em>false</em>，将终止查找。</p></dd>
    <dt>home</dt>
    <dd>
      <div><strong>(</strong>[<em>relpath</em>:string]<strong>)</strong> returns: <em>string</em></div>
      <p>返回应用程序的主目录 - sciter的启动目录。如果<em>relpath</em>是一个字符串，则它将会被附加到返回值后面。 因此你需要知道文件在sciter目录或子目录的全文件名。</p></dd>
    <dt>path</dt>
    <dd>
      <div><strong>(</strong>system-folder: symbol [,<em>relpath</em>:string]<strong>)</strong> returns: <em>string</em></div>
      <p>返回下面的系统目录之一。 <em>system-folder</em>参数的值可以为:</p>
      <ul>
        <li><code>#SYSTEM</code></li>
        <li><code>#SYSTEM_BIN</code></li>
        <li><code>#PROGRAM_FILES</code></li>
        <li><code>#USER_APPDATA</code></li>
        <li><code>#COMMON_APPDATA</code></li>
        <li><code>#USER_DOCUMENTS</code></li>
        <li><code>#COMMON_DOCUMENTS</code></li>
				<li><code>#USER_HOME</code> - 用户的home目录</li></ul></dd>
    <dt>exec</dt>
    <dd>
      <div><strong>(</strong>exe-path: string [,arg1:string ... argN: string]<strong>)</strong> returns: integer</div>
      <p>异步启动一个可执行程序，可传递可选命令行参数列表。这个方法无需等待可执行程序执行结束。</p>
      <p>如果程序启动成功则返回0。否则返回C运行库的<code>errno</code>变量代码(<span>EACCES</span>, <span>ENOTDIR</span>等)。 &nbsp;&nbsp;</p>
    </dd>
  </dl>