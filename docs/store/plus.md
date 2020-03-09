# plus库

##  Plus框架

  <p>Plus框架的主要目的是提供一种数据绑定工具 —— 数据(模型)可以使用多种方式绑定到对应的HTML元素的展示上。</p>
  <h2>模型声明——<em>model</em>属性</h2>
  <p>任何内部有展示数据(又名模型)的DOM容器元素都可以链接到某个名称空间(对象)上。这种管理使用model属性来指定: </p>
  <pre><code>&lt;body model=&quot;MyDataNamespace&quot;&gt;
   ... 
&lt;/body&gt; 
</code></pre>
  <p>这时，在你的脚本中应该下面的代码: </p>
  <pre><code>namespace MyDataNamespace {
   ...
}
</code></pre>
  <p>这种情况下，则body元素的内容将会链接(绑定)到MyDataNamespace名称空间中的数据上。</p>
  <p>有model属性的最顶层的元素被当做<em>数据模型视图</em> - 反应模型数据名称空间/对象的状态。</p>
 <h2>元素绑定(Bound)</h2>
  <p>元素的value值可以被绑定到模型的某些变量上。+plus框架使用<em>name</em>属性值进行绑定，其中<em>name</em>属性值可以是绑定的变量名或一个表达式。</p>
  <pre><code>&lt;body model=&quot;Data&quot;&gt; 
  &lt;p&gt;Whom to greet: &lt;input|text(greeting) /&gt;&lt;/p&gt;
  &lt;p&gt;Greeting: Hello &lt;output(greeting) /&gt;!&lt;/p&gt;
&lt;/body&gt;
</code></pre>
  <p>上面的两个元素都绑定了模型中的同一个<code>Data.greeting</code>变量。修改&lt;input&gt;元素的值将会自动反应到&lt;output&gt;元素上。</p>
  <p>普通的数据变量直接绑定到关联元素的<code>value</code>属性上。但是如果元素(或它的行为类上)定义了<code>setBoundValue(newVal)</code>元素，则将调用该函数来设置绑定的数据。</p>
  <h2>属性绑定(Bound)</h2>
  <p>Sciter也支持将元素的属性值绑定到变量或对象属性上。要定义绑定属性，仅需在需要绑定的属性名前加上'@'字符，然后在属性值中写入绑定的变量名或一个表达式: </p>
  <pre><code>&lt;li&gt;&lt;picture @src=&quot;customer.image&quot; /&gt; &lt;output(customer.name)/&gt;&lt;/li&gt;
</code></pre>
  <p>上面的picture元素的<code>src</code>属性将绑定<code>customer.image</code>变量，并且output元素也绑定了<code>customer.name</code>变量。</p>
  <p>下面这几个绑定属性将映射到state状态上:</p>
  <ul>
    <li><code>@enabled=&quot;表达式&quot;</code> - bool类型的表达式，绑定到element.state.disabled = !表达式;</li>
    <li><code>@disabled=&quot;表达式&quot;</code> - bool类型的表达式，绑定到element.state.disabled = 表达式;</li> 
    <li><code>@readonly=&quot;表达式&quot;</code> - bool类型的表达式，绑定到element.state.readonly = 表达式;</li>
    <li><code>@expanded=&quot;表达式&quot;</code> - bool类型的表达式，绑定到element.state.expanded = 表达式;</li>
    <li><code>@collapsed=&quot;表达式&quot;</code> - bool类型的表达式，绑定到element.state.collapsed = 表达式;</li></ul>
  <h2>可重复项(Repeatable)</h2>
  <p>任何容器元素可以有个each=&quot;<em>item</em> in <em>items</em>&quot;属性定义。这时容器内的元素将被当做模板代码，容器的内容的初始化将会遍历items集合，items中每一项都会根据模板克隆并填充数据。 <em>each</em>属性的格式如下:</p>
  <pre><code>[{index},]{item} <strong>in</strong> {items-表达式} [ <strong>|</strong> {filter-表达式}
</code></pre>
  <p>其中:</p>
  <ul>
    <li><code>{item}</code> - 任意名称，它代表repeatable节中当前项的变量名称;</li>
    <li><code>{index}</code> - 可选, 当前项在items数组中的索引;</li>
    <li><code>{items-表达式}</code> - 模型中的一个变量，或者是一个返回对象列表/数组的表达式</li>
    <li><code>{filter-表达式}</code> - 可选, 应用到对象列表/数组上的过滤器。它可以是:</li>
    <ul>
      <li><code>null</code> (或省略) - 未设置过滤器, 所有元素都将被渲染;</li>
      <li><code>object</code> (包括对象object字面值) - 仅渲染与这个对象的所有属性名和值均匹配的元素;</li>
      <li><code>function(item, index)</code> - 为每个变量项将被调用的函数, 如果它返回<em>true</em>，则该项可以被渲染;</li>
      <li><code>&quot;string&quot;</code> - 如果每个变量项中的任何字符串属性包含这个字符串，则该项可以被渲染。</li></ul></ul>
  <p>示例：将myCustomers数组中的每一项作为ol的列表项进行渲染:</p>
  <pre><code>  &lt;ol each=&quot;customer in myCustomers&quot;&gt;
      &lt;li&gt;&lt;picture @src=&quot;customer.image&quot; /&gt; &lt;output(customer.name)/&gt;&lt;/li&gt;
  &lt;/ol&gt;
</code></pre>
  <h2>在数据路径上观察变化</h2>
  <p>Plus定义了<code>@observing</code>装饰器换上，它可以用于在模型数据树上订阅事件函数。订阅的语法如下:</p>
<pre><code>@observing &quot;path&quot; [&quot;path2&quot;[,&nbsp;... &quot;pathN&quot; ]] 
  function(path) {
  }</code></pre>
  <p>其中，<i>path</i>是一个以<code>.</code>(点)和<code>[]</code>(如果元素路径是一个数组时)分隔的字符串。</p>
  <p>这个函数被调用时，<i>this</i>被设置为路径最右端的对象或数组。</p>
  <p>示例:</p>
<pre><code>namespace Data 
{ 
   var items = [
       { name:&quot;Alan&quot;, state: true },
       { name:&quot;Winston&quot;, state: false }
   ];
   @oberving &quot;items[].state&quot; function() {
      // items中某项的.state属性被改变
      // 'this'这里是item
   }
}</code></pre>
  <h2>基本的事件绑定属性</h2>
  <p>元素可以包含一些事件属性，它们可以定义一个当对应事件发生时执行的函数。这个处理器函数被调用时，<code>this</code>变量被设置为对应的DOM元素。而第一个参数被设置为该DOM元素绑定的模型对象。</p>
  <p>事件属性列表: &quot;click&quot;, &quot;dblclick&quot;, &quot;change&quot;, &quot;enter&quot;, &quot;escape&quot;, &quot;focusin&quot;, &quot;focusout&quot;.</p>
  <p>示例:</p>
  <pre><code>  &lt;b click=&quot;items.removeByValue(item)&quot;&gt;x&lt;/b&gt;
</code></pre>
  <p>点击上面的<code>&lt;b&gt;</code>元素将会调用<code>items.removeByValue()</code>函数，并且将当前item对象作为它的第一参数。</p>
  <h2>子-模型</h2>
  <p>主数据模型视图元素内部的元素也可以定义<em>model</em>属性 - 它们被称作子视图，看起来像数据树的一部分。</p>
  <pre><code>namespace MyDataNamespace
{
  var records = [ {name: &quot;first&quot;, ...},<br/>                  {name: &quot;second&quot;, ...},
                  {name: &quot;third&quot;, ...} ];
  var <u>currentRecord</u> = {}; // 用于子模型;
  // 设置当前记录的函数
  function setCurrentRecord(index) { currentRecord = records[index]; }
}
</code></pre>
  <p>通过子模型，我们可以在视图树，这些视图元素在当前模型(名称空间/对象)中查找绑定元素:</p>
  <pre><code>&lt;body model=&quot;MyDataNamespace&quot;&gt;
   &lt;!-- records list --&gt;
   &lt;ol each=&quot;index,record in records&quot;&gt;
      &lt;li&gt;&lt;output(record.name) click=&quot;setCurrentRecord(index)&quot; /&gt;&lt;/li&gt;
   &lt;/ol&gt;
   &lt;!-- current record view --&gt;
   &lt;section #record-details-view <u>model=&quot;currentRecord&quot;</u>&gt;
      &lt;input(name) /&gt;
      ...
   &lt;/section&gt;
&lt;/body&gt;
</code></pre>
  <p>子视图元素观察[子]模型中的变量的修改, 因此当变量被改变时，所以观察元素都将重新绑定新的数据。</p>
  <p>在上面的示例中，在列表中的<em>output(name)</em>元素上点击时，将会调用<code>setCurrentRecord()</code>函数，从而触发currentRecord被设置为一个新对象。参见demos/L-list-detail.htm示例。</p>