# Index(索引)

<p>持久化的storage对象中的Index对象。</p>
    <dl>
        <h2>属性</h2>
        <dt>length</dt>
        <dd>- <em>integer</em>,只读属性。index的长度, 该index表示的关联对象的数量。</dd>
        <dt>asc</dt>
        <dd>- <em>boolean</em>, 只写属性。index中的对象的访问方向。</dd>
        <dt>[key]</dt>
        <dd><strong>- </strong><em>value</em>, 读写属性。在key位置的DbIndex的元素。key必须是和DbIndex对象相同的类型。<br/>
        如果index非唯一，则返回值将是undefined或一个数组array - 匹配该键的所有项列表。</dd>
        <dt>[begin..end]</dt>
        <dd>- keys, first和last元素范围指定的键集合。返回DbIndex从start键到end键的元素片段。<br/>
		begin是key的低边界的键值(如果为null, 则没有低边界)。<br/>
		end是key的高边界的键值(如果为null, 则没有高边界)。</dd>
          <h2>方法</h2>
        <dt>add</dt>
        <dd>
          <p>( key, val [, replace: true|false ] ) : true|false</p>
          <p>将val对象插入到Index中，并且将它与key键值关联。replace参数指定当对象已经存在时是否替换它。</p></dd>
        <dt>remove</dt>
        <dd>
          <div>( key [,obj] ) returns: true | false</div>
          <p>从index中根据key移除obj对象。如果成功则返回true，否则返回false。<br/>
		  如果Index是唯一的, 则obj参数时可选的。</p></dd>
        <dt>select</dt>
        <dd>
          <p>( min-key, max-key [, ascent [, start-inclusive [, end-inclusive]]] ) returns: selection object.</p>
          <p>返回Index中的selection对象。该对象基于 min-key、max-key、ascent或descent顺序、start-inclusive、end-inclusive条件。默认值为:</p>
          <ul>
            <li><em>ascent = true</em></li>
            <li><em>start-inclusive = true</em></li>
            <li><em>end-inclusive = true</em></li></ul>
          <p>示例:<br/>
		  var sel = index.select(minVal, maxVal, true);<br/>
		  for( var obj in sel ) { ... }</p></dd>
		</dd>
    <dt>clear</dt>
		<dd>( ) : undefined
    <p>从index对象中移除所有项。</p></dd></dl>