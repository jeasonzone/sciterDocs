# Object(对象)

#<p>忽略它的名称，Object这里指代tiscript中的任何一个类，即任何一个类都包含下面的方法和属性。下面的if语句括号中的语句的值将为<em>true</em>:</p>
  <pre v-pre><code>var obj = { one:1, two:2 }; // 从文字描述中创建一个对象
if( obj instanceof Object )
      stdout.printf( &quot;I am an instance of Object&quot; ); // 这里将会输出
</code></pre>
  <dl>
    <h2>属性</h2>
    <dt>className</dt>
    <dd>只读, string. 如果对象作为用户自定义类的实例被创建，该函数返回类的名称。</dd>
    <dt>length</dt>
    <dd>只读, integer. 返回这个对象实例拥有的成员总数量。</dd>
    <h2>方法</h2>
    <dt>this</dt>
    <dd>( )
      <p>构造器, 创建对象类的实例。</p></dd>
    <dt>toString<br/> toLocaleString</dt>
    <dd>( ) : string
      <p>返回<code>&quot;[object Object]&quot;字符串</code>。</p></dd>
    <dt>valueOf</dt>
    <dd>( ) : value
      <p>返回对象本身的值。</p></dd>
    <dt>clone</dt>
    <dd>( [deep:true] ) : object
      <p>产生一个对象的副本，并返回该副本。如果<em>deep</em> === true，则该函数会递归，进行深克隆。</p></dd>
    <dt>extend</dt>
    <dd>( [deep:true], object1, object2, ... &nbsp;) : this
      <p>通过将object1、object2等对象的属性合并的方式来扩展对象。</p></dd>
    <dt>exists</dt>
    <dd>( <strong>tag</strong>: value, [<strong>deep</strong> = false] ) : true | false
      <p>检查tag属性是否存在，如果deep == true，则进行深查找 - 在该对象本身和它的类链上查找。</p></dd>
    <dt>remove</dt>
    <dd>( <strong>tag</strong>: value ) : void
      <p>从对象中移除tag(又名name)属性。</p></dd>
    <dt>call</dt>
    <dd>( <strong>func</strong>: function, [<strong>p1</strong>:value, <strong>p2</strong>:value, ... <strong>pN</strong>:value [, <strong>argv</strong>: array] ] ) : value
      <p>调用<em>func</em>函数，并且使该函数上下文中的<em>this</em>变量等于该对象。如果提供了参数，则这些参数会传递到该函数中。如果<em>argv</em>被提供，则它的成员将会添加到参数列表中。</p></dd>
    <dt>show</dt>
    <dd>( [<strong>out</strong>: Stream] ) : void
      <p>报告该对象的类名和它的属性名/值列表。用于调试。</p></dd>
    <dt>eval</dt>
    <dd>( <strong>what</strong>: string | Stream [, <strong>namespace</strong>: object] ): value
      <p>对<strong>what</strong>进行求值(解释执行)，其中<em>this</em>等于该对象。如果<em>namespace</em>对象被提供，则<strong>what</strong>会将<em>namespace</em>作为全局空间来进行求值。</p></dd>
    <dt>propertyAt</dt>
    <dd>( <strong>tag</strong>: value ) : value
      <p>在该对象内根据tag查找它的成员/属性。该函数等价于<em>obj.tag</em>。</p></dd>
    <dt>seal</dt>
    <dd><strong>( </strong>[<strong>strict</strong>:true|false] <strong>)</strong> : object
      <p>密封，锁定对象的结构 - 在调用后，任何尝试向该对象添加或移除属性的操作都会抛出一个错误。已经存在的属性可以被修改。返回值是该对象本身。如果<em>strict</em>参数被提供且为<em>true</em>，则任何获取位置属性的操作都会抛出一个错误。</p></dd>
    <dt>isSealed</dt>
    <dd><strong>( </strong>[<strong>strict</strong>:true|false]<strong> )</strong> : true | false | undefined
      <p>如果对象被密封的，则返回<em>true</em>。如果<em>strict</em>参数被提供且为<em>true</em>，则只有<em>seal(true)</em>时才返回<em>true</em>。</p></dd>
    <dt>freeze</dt>
    <dd><strong>( </strong>[<strong>strict</strong>:true|false] <strong>)</strong> : object
      <p>冻结，锁定对象 - 使它是不可变的 - 任何添加、移除和修改属性值的操作都将抛出一个异常。返回值是该对象本身。如果<em>strict</em>参数被提供且为<em>true</em>，则任何获取位置属性的操作都会抛出一个错误。</p></dd>
    <dt>isFrozen</dt>
    <dd><strong>( </strong>[<strong>strict</strong>:true|false]<strong> )</strong> : true | false | undefined
      <p>如果对象被冻结的，则返回<em>true</em>。如果<em>strict</em>参数被提供且为<em>true</em>，则只有<em>freeze(true)</em>时才返回<em>true</em>。</p></dd>
    <dt>addObserver</dt>
    <dd><strong>( observer</strong>:function<strong> )</strong> : undefined
      <p>为该对象添加观察器(observer) - 观察器是一个函数，当对象修改时会调用该函数。该观察器函数的签名应该为:</p>
      <p><code>function observer(changeDefinition) {}</code> 其中changeDefinition是一个元组，它包含以下字段:</p>
      <ul>
        <li><code>[0]</code> - symbol, <code>#add</code>(属性增加)、<code>#update</code>(属性修改)、<code>#delete</code>(属性删除)中之一;</li>
        <li><code>[1]</code> - object, 属性被修改的对象;</li>
        <li><code>[2]</code> - symbol or string, 属性名;</li>
        <li><code>[3]</code> - any, 新值;</li>
        <li><code>[4]</code> - any, 旧值。</li></ul></dd>
    <dt>removeObserver</dt>
    <dd><strong>( observer</strong>:function<strong> | functionName</strong>:symbol<strong> )</strong> : undefined
      <p>根据函数引用或观察器名从对象中移除给定的观察器。</p></dd>
    <dt>referenceOf</dt>
    <dd><strong>( namespace</strong>:object, <strong>path</strong>:string<strong> )</strong> : (collection:object, key:symbol|string)<br/>
	当给定了以点号分隔(如&quot;one.two.three&quot;)的<strong>path</strong>时，该函数返回一个obj/key对。其中，obj为该对象中定义了&quot;three&quot;属性的对象和该属性的名称。</dd>
    <dt>keys</dt>
    <dd>( ) : array
     <p>该函数返回一个数组，数组中存放着该对象的所有键名的标识符。</p></dd></dl>