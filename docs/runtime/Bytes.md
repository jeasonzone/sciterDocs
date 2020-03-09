# Bytes(字节)

<p>Bytes是一个字节数组。</p>
  <dl>
    <h2>常量</h2>
    <div>N/A</div>
    <h2>属性</h2>
    <dt>[index]</dt>
    <dd><strong>- </strong><em>integer</em>, 读写属性。数组中在<em>index</em>位置的元素。Index基于0开始。</dd>
    <dt>length</dt>
    <dd>- <em>integer</em>, 只读属性。数组中字节的数量。</dd>
    <dt>type</dt>
    <dd>- <em>any</em>, 可用于任何目的。但目前sciter用它来报告接收的或request()方法发送的数据mime-type (字符串)。</dd>
    <dt>name</dt>
    <dd>- <em>any</em>, 可用于任何目的。但目前siter用它来报告接收的或request()方法发送的数据的文件名或url。</dd>
    <h2>方法</h2>
    <dt>this</dt>
    <dd>
      <p>( <em>numBytes</em>: integer )</p>
      <p>Bytes类型对象的构造函数 —— <em>numBytes</em>为Bytes的长度。</p></dd>
    <dt>toString</dt>
    <dd>
      <p><strong>( </strong>[<em>encoding</em>:string] <strong>)</strong> returns: <em>string</em></p>
      <p>如果encoding未指定或是&quot;base64&quot;时，返回字节数组的<em>base64</em>编码格式的字符串。否则如果编码是IANA字符集列表<a href="http://www.iana.org/assignments/character-sets">http://www.iana.org/assignments/character-sets</a>支持的一种，则返回对应的编码格式字符串。</p>
      <p>示例： <code>var str = bytes.toString(&quot;UTF-8&quot;);</code> 返回UTF-8编码的字符串。</p></dd>
    <dt>fromString</dt>
    <dd>
      <p><strong>( </strong><em>str</em>: string[, <em>encoding</em>:string] <strong>)</strong> returns: <em>Bytes</em></p>
      <p>静态方法, 从<em>str</em>字符串根据<em>encoding</em>编码创建一个Bytes对象(字节数组)。</p>
      <p>如果encoding未指定或是&quot;base64&quot;时，则认为是&quot;base64&quot;。否则如果编码是IANA字符集列表<a href="http://www.iana.org/assignments/character-sets">http://www.iana.org/assignments/character-sets</a>支持的一种，则返回对应的编码格式字符串。</p>
      <p>示例：<code>var bytes = Bytes.fromString(&quot;Привет, мир!&quot;, &quot;utf-8&quot;);</code> 返回UTF-8编码的字符串。</p></dd>
    <dt>md5</dt>
    <dd>
      <p><strong>( </strong>&nbsp;<strong>)</strong> returns: <em>string</em></p>
      <p>返回表示该字节数组的MD5的32个字符的字符串。</p></dd>
    <dt>crc32</dt>
    <dd>
      <p><strong>( </strong>&nbsp;<strong>)</strong> returns: <em>integer</em></p>
      <p>返回该字节数组的CRC32技术结果的整数值。</p>
	  </dd>
    <dt>compare</dt>
		<dd>( other: Bytes&nbsp;) returns : integer, -1,0,1
    <p>比较两个Bytes对象的内容是否相等, 返回-1,0或1，其中当两个对象的内容相等时返回0。</p></dd>
    <dt>save</dt>
    <dd>
      <div><strong>( </strong><em>filename</em>:string <strong>)</strong> returns: <em>true|false</em></div>
      <p>保存字节数组到文件。如果文件已经存在，则覆盖。</p></dd>
    <dt>load</dt>
    <dd>
      <div><strong>( </strong><em>filename</em>:string <strong>)</strong> returns: <em>Bytes</em></div>
      <p>静态方法。创建一个新的Bytes对象，并将filename文件加载到它，并返回该对象。</p></dd>
    <dt>compress</dt>
    <dd>
      <div><strong>( </strong><strong>)</strong> returns: <em>Bytes</em></div>
      <p>创建一个新的Bytes对象 - 原始字节数组的压缩版本。</p></dd>
    <dt>decompress</dt>
    <dd>
      <div><strong>( </strong><strong>)</strong> returns: <em>Bytes | null</em></div>
      <p>创建一个新的Bytes对象, 恢复先前压缩的字节数组。如果数组之前为压缩则返回<i>null</i>。</p></dd>
  </dl>