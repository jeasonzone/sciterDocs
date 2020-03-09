# Storage(存储)

<p>代表持久性存储。</p>
    <dl>
          <h2>属性</h2>
        <dt>root</dt>
        <dd>- <em>object</em>, 读写属性。Storage中的根对象。</dd>
        <dt>autocommit</dt>
        <dd>- <em>boolean</em>, 只读属性。表示Storage自动提交所有关联对象到存储器中。</dd>
          <h2>方法</h2>
        <dt>open</dt>
        <dd>
          <p><strong>( </strong><em>file-name</em><strong> </strong> [, autocommit] ) returns: storage | null</p>
          <p>静态方法。打开<em>file-name</em>文件存储对象，并返回该存储对象的实例。<br/>
		  <em>autocommit</em>指定storage关联的对象是否自动提交到存储器中。默认为<em>true</em>。</p></dd>
        <dt>close</dt>
        <dd>
          <div><strong>()</strong></div>
          <p>关闭底层的存储对象。如果<em>autocommit</em>为true，则将提交所有数据。</p></dd>
        <dt>commit</dt>
        <dd>
          <p><strong>()</strong></p>
          <p>提交所有关联对象到存储器器中。</p></dd>
        <dt>createIndex</dt>
        <dd>
          <div><strong>(</strong><em>type [, unique]</em><strong>)</strong> returns: <em>Index | null</em></div>
          <p>创建一个类型为type的index对象，并返回该<em>Index</em>对象。<em>Index</em>是唯一还是可重复的依赖于<em>unique</em>参数。<em>unique</em>默认为<em>true</em>。支持的类型: <em>#integer、#float、#date、#string</em>。</p></dd></dl>