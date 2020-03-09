## +Plus与+Formation的区别

<h1 class="article-title">+plus与+formation的区别?</h1>
  <div class="article-content">
    <h2>+plus</h2>
    <p>
      <em>+plus</em>是一种定义和支持DOM树和数据树间映射的一种方式。如果你下面这两个声明, HTML:</p>
    <pre><code>&lt;style&gt;@import url(plus.css)&lt;/style&gt;
&lt;section model="person"&gt;
  &lt;label&gt;First&lt;/label&gt; &lt;input(name.first)&gt;
  &lt;label&gt;Second&lt;/label&gt; &lt;input(name.last)&gt;
  &lt;label&gt;Age&lt;/label&gt; &lt;input|integer(age)&gt;
&lt;/section&gt;</code></pre>
    <p>和脚本：</p>
    <pre><code>namespace person {
  var name = { 
    first: "Albert", 
    last:"Einshtein" 
  }; 
  var age = 53; 
}</code></pre>
    <p>则+plus将构建上面这些DOM元素和数据结构间的双向映射(绑定)。</p>
    <p>当用户改变了<code>input(name.first)</code>字段(<code>&lt;input name="name.first"&gt;</code>简写形式)的value值，则将发生下面这些事情:</p>
    <ol>
      <li>Sciter生成&#8220;change&#8221; DOM事件;</li>
      <li>+plus处理这个事件，并且</li>
      <li>更新指定数据名称空间中的person.name.first的值。</li></ol>
    <p>当数据被某些代码导致改变时，比如：</p>
    <pre><code>person.name.first = "Some other name";</code></pre>
    <p>则将发生下面这些事情:</p>
    <ol>
      <li>Sciter首先已经可以检测到这个可观察对象上的<em>first</em>的变化。</li>
      <li>Sciter调用附加的函数观察器(function-observer) &#8211; 每个绑定到名称空间中的对象/数组都被附加了一个函数观察器。</li>
      <li>这个函数观察器将会更新绑定的DOM元素。</li></ol>
    <p>如你所看到的, 为了实现双向绑定, 在绑定的名称空间中每个数据节点(对象/数组)都必须有附加一个对应观察器。</p>
    <h2>+formation</h2>
    <p>+formation与+plus的主要区别是：+formation不需要单独的数据结构。formation生成的数据结构本身就很自然的映射到DOM元素上。</p>
    <p>HTML:</p>
    <pre><code>&lt;section(person)&gt;
  &lt;label&gt;First&lt;/label&gt; &lt;input(name.first)&gt;
  &lt;label&gt;Second&lt;/label&gt; &lt;input(name.last)&gt;
  &lt;label&gt;Age&lt;/label&gt; &lt;input|integer(age)&gt; 
&lt;/section</code></pre>
    <p>调用formation()函数后将会生成[formation]树:</p>
    <p><img src="images/formation.png" alt="" width="192" height="109" /></p>
    <p>代码可以直接访问这个树，如:</p>
    <pre><code>var root = formation( self ); // 生成整个formation: 
// 设置整个formation树:
root.person.value = { name : { first: "Albert", last: "Einshtein" }, age:69 }; 
// 设置formation树上的某个特定字段:
root.person.name.first.value = "Some other name";</code></pre>
    <p>注意: <code>root.person.name.first</code>是&lt;input&gt;DOM元素的一个直接引用。因此这个DOM元素必须有<code>.value</code>属性。</p>
    <p>这个formation是一个从真实DOM树上派生出来的数据结构，所以你可以通过点语句直接在这个DOM元素上绑定DOM事件来处理用户操作:</p>
    <pre><code>root.person.name.first.on("change", function() {...}) // 或者 
self.on("change", "section[name=person]", function() {...}) // person字段的任何改变</code></pre>
    <h2>总结</h2>
    <p>本质上，+plus和+formation都是做相同事情的 &#8211; 根据代码更新UI/UI改变时通知代码。</p>
    <ul>
      <li>
        <strong>+plus</strong>
        <ul>
          <li><strong>pros:</strong>允许将任意的数据结构绑定到任意的DOM树上。</li>
          <li> <strong>cons:</strong>在大数据和DOM树上，可能会有比较到的内存和CPU消耗。</li></ul>
      </li>
      <li>
        <strong>+formation</strong>
        <ul>
          <li>
            <strong>pros:</strong>速度快，CPU消耗小。 并且可以通过点语句(&#8220;formation中的路径&#8221;)访问&#8220;感兴趣的字段&#8221;: <code>root.person.name.first.state.disabled = true;</code></li>
          <li>
            <strong>cons:</strong>得到的formation数据结构是直接绑定到DOM元素上的。所以当你改变的DOM结构时，在代码中的formation路径需要改变。</li></ul>
      </li>
    </ul>
  </div>