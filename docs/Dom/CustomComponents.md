# 自定义组件

<p>Sciter提供了三种DOM元素的扩展方式:</p>
  <ul>
    <li><strong>行为(Behavior)</strong> - 任意DOM元素, 无论已存在的或自定义的元素, 都可以通过一个脚本类进行扩展。这个类可以定义新的属性、方法和事件处理器。 行为(Behavior)可以通过声明进行赋值 - 通过使用CSS中的<code>prototype</code>属性 或者 在代码中手动的修改已存在DOM元素的<code>prototype</code>属性。</li>
    <li><strong>切面(Aspect)</strong> - 任意DOM元素可以有一个声明在它之上调用的函数集合。这些切面(aspect)函数当被调用时，可以根据需要配置该元素，比如: 修改属性、附加事件处理器等等。切面(Aspect)可以通过声明进行赋值 - 通过使用CSS中的<code>aspect</code>属性。</li>
    <li>特别的<strong>事件处理器</strong> - 它是一个函数，可以在代码中显示地设置到DOM元素上。</li></ul>
  <h2>行为(Behavior)</h2>
  <p>Behavior类是在代码中定义的从stock Element类派生的脚本类。</p>
  <h3>声明式行为(Behavior)赋值</h3>
  <p>行为的声明式赋值是在CSS中使用prototype属性:</p>
  <pre v-pre><code><em>selector</em> {
    prototype: <em>ClassName</em> <em>url(file.tis)</em>;
    /* ... 其他CSS属性 */
}
</code></pre>
  <p>其中:</p>
  <ul>
    <li><em>selector</em>是一个有效的CSS选择器, 示例:</li>
    <ul>
      <li><code>input[type=foo] { prototype: MyWidget; }</code> &nbsp;</li>
      <li><code>foo { display:block; prototype: MyWidget; }</code></li>
      <li><code>widget { prototype: MyWidget; }</code></li></ul>
    <li><em>ClassName</em>是你的脚本类的名称;</li>
    <li><em>url(file.tis)</em>是包含该脚本类的脚本文件的url。如果脚本类是定义在文档本身的script节中的话，这个字段是可省略的。</li></ul>
  <h3>Behavior类的声明</h3>
  <p>Behavior是一个从stock <code>Element</code>类或其他行为类派生的类。下面是一个行为类的模板:</p>
  <pre v-pre><code><u>class</u> MyWidget : <u>Element
</u>{
   // 实例变量, 每个元素将拥有这些变量的一份副本。
   <u>this var</u> foo = &quot;foo&quot;;
   ...
   // 类变量, 所有实例共享这个类的这些变量
   <u>var</u> bar = &quot;bar&quot;;
   ...
   // 生命周期方法:
   // behavior的&quot;constructor&quot;, 当元素获取到该类时被调用
   <u>function</u> <em>attached</em>() { /* <em>this </em>指代该元素 */ }
   // behavior的&quot;destructor&quot;, 当元素失去该类时被调用
   <u>function</u> <em>detached</em>() { /* <em>this</em>指代该元素 */ }
   // 虚拟(virtual)属性
   <u>property</u> baz(v) { ... }
   // 和方法
   <u>function</u> boo() { ... }
   // 事件处理器:
   // 点击事件
   <u>event</u> click (evt, that) { /* 注意: <em>this</em>指代生成click事件的元素
                                <em>that</em>为订阅元素 - 一个MyWidget类的实例 */ }
   // 在 &lt;a class=&quot;next&quot;&gt;元素上的点击事件
   <u>event</u> click $(a.next) (evt, that) { ... /* 注意: <em>this</em>指代a.next元素，即生成click事件的元素 */  }
   ...
}
</code></pre>
  <h4><em>this</em>环境变量</h4>
  <p>所有的方法、事件处理器和属性在运行期被调用时，<code>this</code>变量被设置为该行为类绑定的元素实例上。</p>
  <h2>切面(Aspect)</h2>
  <p>行为(Behavior)类的主要问题是元素在同一时间上只能绑定一个行为类。不过切面(Aspect)却可以通过向DOM元素上定义一个(切面)函数集合来解决这个问题。</p>
  <h3>切面(Aspect)声明式赋值</h3>
  <p><font size="2">切面(Aspect)可以通过<code>aspect</code> CSS属性进行赋值</font>:</p>
  <pre v-pre><code>  aspect: function-name [ url(of-function-implementation-file) ];
</code></pre>
  <p>其中，<code>&quot;function-name&quot;</code>是“aspect”函数的完整名称，它用于在元素上配置/装载一些扩展功能。<code>url(...)</code>是定义该切面函数的所在脚本文件。</p>
  <p>切面处理的原则:</p>
  <p>“aspect”函数是一个普通的脚本函数，当它被调用时:</p>
  <ol>
    <li><code>this</code>变量被设置为满足CSS规则的DOM元素实例。</li>
    <li>在DOM元素的每个生命周期中仅被触发一次。</li></ol>
  <p>CSS的aspect属性使用非标准的继承方式 – 如果元素匹配了多个定义了<code>aspect</code>属性的CSS规则，该元素会生成一个来自所有这些规则定义的aspect函数列表。比如，如果你有下面这样的规则(示例取自Plus框架):</p>
  <pre v-pre><code>[click] { aspect:Plus.Click; }
[dblclick] { aspect:Plus.DblClick; }
</code></pre>
  <p>并且在HTML标记中定义了这样的元素：</p>
  <pre v-pre><code>&lt;b id=&quot;clickable&quot; click=&quot;...&quot; dblclick=&quot;...&quot;&gt;text&lt;/b&gt;
</code></pre>
  <p>则该元素将产生两次调用 – <code>Plus.Click()</code>和<code>Plus.DblClick()</code>, 你也可以在CSS中将它们定义为下面这种形式:</p>
  <pre v-pre><code>#clickable { aspect:&quot;Plus.Click&quot; &quot;Plus.DblClick&quot;; }
</code></pre>
  <p>aspect机制已经在Sciter SDK中的Plus( /samples/+plus/ )和Lang( /samples/+lang/ )中被广泛的使用。Plus提供了类似AngularJS的数据绑定功能，Lang提供了i18n的相关支持。</p>
  <h4>含参数切面定义</h4>
  <p>Aspect函数在CSS中赋值时可以包含一个参数:</p>
  <pre v-pre><code>#chart { aspect: MicroChart.Donut(fill: #f00 #0f0 #00f, thickness:0.2 ); }
</code></pre>
  <p>这样在<code>MicroChart.Donut</code>函数被调用时，它将有一个对象参数:</p>
  <pre v-pre><code>const params = {
  fill: [ color(255,0,0), color(0,255,0), color(0,0,255) ],
  thickness: 0.2
};
MicroChart.Donut(params); // 实际上是调用MicroChart.Donut.call(domElement,params);
</code></pre>
  <p>如果你的切面函数支持参数，则它的签名应该为:</p>
  <pre v-pre><code>namespace MicroChart {
  function Donut(params = {}) {
    // do something with this element ...
  }
}
</code></pre>
  <p>这样就可以既支持有参数的，也可以支持无参数的切面函数。</p>
  <h2>事件(Event)处理器</h2>
  <p>UI编程就是各种各样的事件处理。在Sciter中，事件处理器是一个通过下列方法赋值到元素上的普通函数:</p>
  <h3>事件函数</h3>
  <p>你可以在某处定义<a href="../script/language/Functions.htm#event-functions">事件函数</a>，然后在合适的位置通过移位运算符赋值到DOM元素上:</p>
  <pre v-pre><code>// 一个基础的事件处理器
elem &lt;&lt; <u>event</u> click () { ... }
</code></pre>
  <p>注意上面的<code>click</code>语句, 它是一个事件定义，它的格式为: <em>name</em>[<code>.</code><em>namespace</em>] [<code>$(</code><em>selector</em><code>)</code>]， 其中:</p>
  <ul>
    <li><em>name</em>是一个<a href="Event.htm#symbolic-event-names">已知事件</a> 或 自定义事件 的名称;</li>
    <li><em><code>.</code> namespace</em>是类似jQuery中的任意的事件namespace的名称, 可省略;</li>
    <li><em>selector</em>是一个CSS选择器。如果提供了，则仅有满足条件的DOM元素上才能接收到事件, 可省略。</li></ul>
  <p>这里是一个&quot;change&quot;事件的处理示例，它绑定到文档中任意一个&lt;input type=text&gt;元素上:</p>
  <pre v-pre><code>elem &lt;&lt; <u>event</u> change $(input[type=text]) { 
  <em>// this</em> 指代input[type=text]
  var changedValue = this.value;
  ...
}
</code></pre>
  <p>事件的名称空间用于在必要时唯一标识该事件, 比如要<strong>unsubscribe</strong>某个特定的事件处理器组:</p>
  <pre v-pre><code>elem &gt;&gt; &quot;.mygroup&quot;; // 移除所有包含.mygroup名称空间的事件处理器
</code></pre>
  <h3>传统的事件处理函数</h3>
  <p>Element类的<code>Element.on(&quot;name.namespace&quot;, &quot;selector&quot;, function )</code>方法可以用于根据指定的&quot;name&quot;向元素附加事件处理器。 </p>
  <p>还有，<code>Element.off(...) </code>可用于解绑事件处理器。</p>