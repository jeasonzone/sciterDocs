# q(JQuery)库

## 基本原则 与 ElementList

  <p>Sciter的所有内建方法都提供了一个元素实例的列表，它是一个可以包含元素的ElementList类型(class)的数组。</p>
  <p>和其他内建类一样，ElementList也是可扩展的。q.tis(部分)实现了jQuery的功能，它是ElementList类的一个扩展函数集。</p>
  <p>因此，下面的这些函数的返回值就是用于query对象的:</p>
  <ul>
    <li><code>$$(selector) : ElementList</code> - 全局的&quot;字符串器&quot;函数;</li>
    <li><code>element.$$(selector) : ElementList </code>- DOM元素的方法函数 - 返回element的作用域内的元素列表;</li>
    <li><code>element.selectAll(&quot;selector&quot;) &nbsp;: ElementList</code> - 类似于<code>element.$$(selector)</code>, 不过它的参数是一个普通的字符串;</li>
    <li><code>element.selectParents(&quot;selector&quot;) &nbsp;: ElementList</code> - 类似于<code>element.$$(selector)</code>, 不过它的参数是一个普通的字符串;</li></ul>
  <p>注意：ElementList继承于标准的Array对象，所以数组的所有方法ElementList都可以使用。</p>
  <h3>q()函数</h3>
  <p>q.tis定义了一个<code>q()</code>函数，该函数等价于<code>$()</code> in jQuery realm. <code>q()</code>，它接受以下参数，并且返回一个ElementList类型的数组:</p>
  <ul>
    <li><code>q(&quot;selector&quot;)</code> - 根据指定的选择器返回一个匹配元素的数组——实例为ElementList的数组;</li>
    <li><code>q(&quot;&lt; some html &gt;&quot;)</code> - 如果参数字符串以'&lt;'开头，并且以'&gt;'结尾，则该参数会被当做一段html代码。这种情况下，该函数将会解析该html代码，并且返回解析后的元素列表。</li>
    <ul>
      <p>示例: <code>q(&quot;&lt;p&gt;Some text&lt;/p&gt;&quot;)</code> 将返回一个只包含一个元素(一个p段落)的列表。</p></ul>
    <li><code>q(element)</code> - 封装element元素到一个只有一个元素的ElementList数组，并返回该数组。</li>
    <li><code>q(elementlist)</code> - 如果参数是ElementList实例。则该函数仅仅是简单地返回该参数。</li>
    <li><code>q(function)</code> - 将函数添加到事件队列中，并立即返回。该函数将稍后执行。类似于传统浏览器中的 <code>window.setTimeout(function,0);</code>。Sciter中脚本的执行发生在DOM元素准备好后，所以这里无需任何的jQuery-alike。</li></ul>
  <dl>
    <h2>DOM操作</h2>
    <dt>add</dt>
    <dd>
      <p><code>add(selector, [context]) &nbsp;⇒ collection</code></p>
      <p>添加满足selector选择器的元素到元素列表中。返回一个新的、更新后的容器。</p></dd>
    <dt>addClass</dt>
    <dd>
      <p><code>addClass(name) &nbsp;⇒ self</code><br/><code>addClass(function(index, oldClassName){ ... }) &nbsp;⇒ self</code></p>
      <p>为元素添加class，<em>name</em>可以是多个以空格分隔的名称。</p></dd>
    <dt>removeClass</dt>
    <dd>
      <p><code>removeClass() &nbsp;⇒ self<br/>removeClass(name) &nbsp;⇒ self</code><br/><code>removeClass(function(index, oldClassName){ ... }) &nbsp;⇒ self</code></p>
      <p>移除元素中的class。<em>name</em>可以是多个以空格分隔的名称。如果name参数未指定，则移除元素的 &quot;class&quot;属性。</p></dd>
    <dt>toggleClass</dt>
    <dd>
      <p><code>toggleClass(name) &nbsp;⇒ self</code><br/><code>toggleClass(function(index, oldClassName){ ... }) &nbsp;⇒ self</code></p>
      <p>切换(添加/移除)元素的class。<em>name</em>可以是多个以空格分隔的名称。</p></dd>
    <dt>after</dt>
    <dd>
      <p><code>after(content) &nbsp;⇒ self</code></p>
      <p>在容器中每个元素后面添加content内容。<em>content</em>可以是html字符串、DOM元素或元素数组：</p>
      <pre><code>q(&quot;form input&quot;).after(&quot;&lt;span&gt;A note after the input&lt;/span&gt;&quot;);
</code></pre></dd>
    <dt>before</dt>
    <dd>
      <p><code>before(content) &nbsp;⇒ self</code></p>
      <p>在容器中每个元素前面添加content内容。<em>content</em>可以是html字符串、DOM元素或元素数组：</p>
      <pre><code>q(&quot;form input&quot;).before(&quot;&lt;label&gt;field:&lt;/label&gt;&quot;);
</code></pre></dd>
    <dt>replaceWith</dt>
    <dd>
      <p><code>replaceWith(content) &nbsp;⇒ self</code></p>
      <p>替换容器中的每个元素为新的content内容。<em>content</em>可以是html字符串、DOM元素或元素数组。</p></dd>
    <dt>append</dt>
    <dd>
      <p><code>append(content) &nbsp;⇒ self</code></p>
      <p>在容器中每个元素内部附加content内容。<em>content</em>可以是html字符串、DOM元素或元素数组。</p>
      <pre><code>q(&quot;ul&quot;).append(&quot;&lt;li&gt;New list item&lt;/li&gt;&quot;);
</code></pre></dd>
    <dt>appendTo, $appendTo</dt>
    <dd>
      <p><code>appendTo(target) &nbsp;⇒ self</code><br/><code>$appendTo(selector) &nbsp;⇒ self</code></p>
      <p>将该列表中的元素内容添加到目标元素。该操作与<em>append</em>正好相反。</p>
      <pre><code>q(&quot;ol&gt;li&quot;).appendTo(&quot;ul&quot;);
</code></pre></dd>
    <dt>attr</dt>
    <dd>
      <p><code>attr(name) &nbsp;⇒ string<br/>attr(name, value) &nbsp;⇒ self<br/>attr(name, function(index, oldValue){ ... }) &nbsp;⇒ self<br/>attr({ name: value, name2: value2, ... }) &nbsp;⇒ self</code></p>
      <p>读取或设置DOM元素的属性。<code>attr(name)</code>从列表中的第一个元素上读取属性。其他变体是设置列表中每个元素的属性。</p>
      <pre><code>var form = q(&quot;form&quot;);
form.attr(&quot;action&quot;);                 //=&gt; 读取action属性
form.attr(&quot;action&quot;, &quot;/create.php&quot;);  //=&gt; 设置action属性
form.attr(&quot;action&quot;, undefined);      //=&gt; 移除action属性
// multiple attributes at once:
form.attr {
  action: &quot;/create.php&quot;,
  method: &quot;post&quot;
};
</code></pre></dd>
    <dt>removeAttr</dt>
    <dd>
      <p><code>removeAttr(name) &nbsp;⇒ self</code></p>
      <p>移除列表中每个元素的name参数指定的属性。</p></dd>
    <dt>children, $children</dt>
    <dd>
      <p><code>children([&quot;selector&quot;]) &nbsp;⇒ collection</code><br/><code>$children(selector) &nbsp;⇒ collection</code></p>
      <p>获取当前列表中每个元素的直接子元素，返回一个新列表。</p>
      <pre><code>q(&quot;ol&quot;).children(&quot;li:nth-child(2n)&quot;); //返回&lt;ol&gt;中偶数项列表 
$$(ol).$children(li:nth-child(2n));   
</code></pre></dd>
    <dt>closest, $closest</dt>
    <dd>
      <p><code>closest([&quot;selector&quot;]) ⇒ collection<br/>closest(collection) ⇒ collection<br/>closest(element) ⇒ collection<br/>closest(function(){}) ⇒ collection<br/>$closest(selector) &nbsp;⇒ collection</code></p>
      <p>获取列表中每个元素的直接父元素列表。返回一个新列表。</p>
      <pre><code>var input = q(&quot;input[type=text]&quot;);
var itsForm = input.closest(&quot;form&quot;);
</code></pre></dd>
    <dt>contents</dt>
    <dd>
      <p><code>contents() &nbsp;⇒ list (array) of nodes</code></p>
      <p>返回内容节点数组——列表中所有元素的所有子节点的合并列表。</p></dd>
    <dt>css</dt>
    <dd>
      <p><code>css(property) &nbsp;⇒ value<br/>css(property, value) &nbsp;⇒ self<br/>css({property: value, property2: value2, ... }) &nbsp;⇒ self</code></p>
      <p>获取或设置列表中的DOM元素的样式属性。</p>
      <pre><code>var elem = q(&quot;h1&quot;);
elem.css(&quot;background-color&quot;);                         // 读属性
elem.css(&quot;background-color&quot;, &quot;#369&quot;);       // 写属性
elem.css(&quot;background-color&quot;, color(0x33,0x66,0x99));  // 写属性
elem.css(&quot;background-color&quot;, undefined);              // 移除属性
// 设置多个属性:
elem.css { background-color: &quot;#8EE&quot;,
           opacity: 0.75,
           font-size: 28pt };
</code></pre></dd>
    <dt>each</dt>
    <dd>
      <p><code>each(function(index, item){ ... }) &nbsp;⇒ self</code></p>
      <p>为列表中的每个元素调用参数中的函数。在每次调用中的<em>this</em>变量被设置为迭代的当前元素。</p>
      <pre><code>q(&quot;form input&quot;).each(function(index){
  stdout.println(&quot;input at &quot;,index,&quot; is &quot;, this);
});
</code></pre>
      <p>注意，声明的代码可以简写成下面的形式:</p>
      <pre><code>for(var (idx,el) in q(&quot;form input&quot;))
  stdout.println(&quot;input at &quot;,idx,&quot; is &quot;, el);
</code></pre>
      <p>- 少了括号，并且每次迭代中没有函数调用。</p></dd>
    <dt>empty</dt>
    <dd>
      <p><code>empty() &nbsp;⇒ self</code></p>
      <p>清空列表中每个元素的内容。</p></dd>
    <dt>eq</dt>
    <dd>
      <p><code>eq(index) &nbsp;⇒ collection</code></p>
      <p>获取列表中在index位置的项。</p>
      <pre><code>q(&quot;li&quot;).eq(0);  // 第一项
q(&quot;li&quot;).eq(-1); // 最后一项
</code></pre></dd>
    <dt>filter, $filter</dt>
    <dd>
      <p><code>filter(&quot;selector&quot;) &nbsp;⇒ collection<br/>filter(function(index){ ... }) &nbsp;⇒ collection</code><br/><code>$filter(selector) &nbsp;⇒ collection</code></p>
      <p>过滤列表中的元素，因此过滤后列表中只包含满足selector选择器或调用参数中的过滤函数返回<em>true</em>的元素。</p></dd>
    <dt>find, $find</dt>
    <dd>
      <p><code>find(&quot;selector&quot;) &nbsp;⇒ collection<br/>find(collection) &nbsp;⇒ collection<br/>find(element) &nbsp;⇒ collection</code><br/><code>$find(selector) &nbsp;⇒ collection</code></p>
      <p>查找列表中满足selector选择器的元素子孙。如果指定了collection(元素的列表)，则返回结果是该collection列表(子集)——所有在self和collection中都包含的元素。</p>
      <pre><code>var form = $$(#myform);
var inputs = form.$find(input,textarea,select,widget,button);
</code></pre></dd>
    <dt>first</dt>
    <dd>
      <p><code>first() &nbsp;⇒ collection</code></p>
      <p>从列表中获取第一个元素，返回只包含一个元素的列表，如果self为空列表时则返回一个空列表。</p>
      <pre><code>var form = q(&quot;form&quot;).first();
</code></pre></dd>
    <dt>get</dt>
    <dd>
      <p><code>get() &nbsp;⇒ array<br/>get(index) &nbsp;⇒ DOM element</code></p>
      <p>获取列表中在<em>index</em>位置的元素，如果index未指定，则返回整个列表作为一个普通数组。</p>
      <pre><code>var items = q(&quot;li&quot;);
var li2 = items.get(2);
</code></pre>
      <p class="note">注意: 你也可以使用indexed访问器来达到相同目的:</p>
      <pre><code>var li2 = items[2];
</code></pre></dd>
    <dt>has, $has</dt>
    <dd>
      <p><code>has(&quot;selector&quot;) &nbsp;⇒ collection<br/>has(element) &nbsp;⇒ collection<br/>$has(selector) &nbsp;⇒ collection</code></p>
      <p>过滤列表，使它仅包含满足selector选择器的元素，或者指定的element元素。</p>
      <pre><code>q(&quot;dl &gt; dd&quot;).has(&quot;a[href]&quot;)
//=&gt; 只获取包含链接的dd元素
</code></pre></dd>
    <dt>hasClass</dt>
    <dd>
      <p><code>hasClass(&quot;name&quot;) &nbsp;⇒ true/false</code></p>
      <p>检查列表中是否有元素有name指定的class。</p></dd>
    <dt>hide</dt>
    <dd>
      <p><code>hide() &nbsp;⇒ self</code></p>
      <p>这里只是简单的执行<code>this.addClass(&quot;hidden&quot;)</code>。因此为了使该方法有用，你需要在你的CSS中有<code>*.hidden { display:none; }</code>或类似的声明。</p>
      <p class="note">注意：这个hide()方法的实现不同于jQuery或Zepto。<code>hide()</code>这里只是设置<code>el.style.display=&quot;none&quot;</code>使<code>show()</code>变得无效而已。</p></dd>
    <dt>show</dt>
    <dd>
      <p><code>show() &nbsp;⇒ self</code></p>
      <p>这里只是简单的执行<code>this.removeClass(&quot;hidden&quot;)</code>.因此为了使该方法有用，你需要在你的CSS中有<code>*.hidden { display:none; }</code>或类似的声明。</p></dd> 
	<dt>toggle</dt>
    <dd>
      <p><code>toggle() &nbsp;⇒ self</code><br/><code>toggle(onoff) &nbsp;⇒ self</code></p>
      <p>为列表中每个元素根据class是否有hidden来调用show()或hide()方法。如果onoff参数被提供，则会根据该参数来决定是调用self.show()还是self.hide()。</p></dd>
    <dt>html</dt>
    <dd>
      <p><code>html() ⇒ string<br/>html(&quot;content&quot;) ⇒ collection<br/>html(function(index, oldHtml){ ... }) ⇒ collection</code></p>
      <p>上面的第一个方法获取列表中的第一个元素的HTML内容。其他方法用来设置容器中元素的HTML内容。</p>
      <pre><code>q(&quot;.comment:empty&quot;).html(&quot;&lt;em&gt;no comments yet!&lt;/em&gt;&quot;);
</code></pre></dd>
    <dt>index</dt>
    <dd>
      <p><code>index([element]) &nbsp;⇒ integer | undefined</code></p>
      <p>获取<em>element</em>元素在列表中的索引位置，如果<em>element</em>不在列表中，则返回-1。如果element参数未指定，则返回列表中第一个元素在它的兄弟元素中的索引位置。</p>
      <pre><code>q(&quot;li:nth-child(2)&quot;).index() //=&gt; 1
</code></pre></dd>
    <dt>insertAfter, insertBefore</dt>
    <dd>
      <p><code>insertAfter(target) &nbsp;⇒ self</code><br/><code>insertBefore(target) &nbsp;⇒ self</code></p>
      <p>将列表中的元素插入到target元素的后面/前面。该操作类似于<em>after()</em>、<em>before()</em>方法，只是源/目标元素刚好相反。</p>
      <pre><code>var fields = q(&quot;form input&quot;);<br/>q(&quot;&lt;em&gt;Required field&lt;/em&gt;&quot;).insertAfter(fields.filter(&quot;.required&quot;));
</code></pre></dd>
    <dt>is, $is</dt>
    <dd>
      <p><code>is(&quot;selector&quot;) &nbsp;⇒ true/false<br/>$is(selector) &nbsp;⇒ true/false</code></p>
      <p>检查列表中的第一个元素是否匹配selector选择器。</p></dd>
    <dt>last</dt>
    <dd>
      <p><code>last() &nbsp;⇒ collection</code></p>
      <p>获取列表中的最后一个元素，返回的列表值包含一个元素。如果self本身为空则返回空列表。</p>
      <pre><code>var form = q(&quot;form&quot;).last();
</code></pre></dd>
    <dt>next, $next</dt>
    <dd>
      <p><code>next() &nbsp;⇒ collection<br/>next(&quot;selector&quot;) &nbsp;⇒ collection<br/>$next(selector) &nbsp;⇒ collection</code></p>
      <p>将列表中的每个元素都跳到下一个元素。</p>
      <pre><code>var dd = q(&quot;dl &gt; dt&quot;).next(); //所有元素都跳到下一个td元素
</code></pre></dd>
    <dt>not, $not</dt>
    <dd>
      <p><code>not(&quot;selector&quot;) &nbsp;⇒ collection<br/>not(collection) &nbsp;⇒ collection<br/>not(function(index){ ... }) &nbsp;⇒ collection<br/>$not(selector) &nbsp;⇒ collection</code></p>
      <p>过来当前容器中的元素，返回一个新的容器列表，它包含所有不匹配selector的元素。如果参数为collection而非selector，则新的容器列表只包含collection中没有的元素。如果参数为一个函数function，则返回容器值包含遍历元素时function返回<em>false</em>的元素。在function内部，<em>this</em>指向遍历时的当前元素。</p>
      <p><em>filter()</em>方法功能与该函数正好相反。</p></dd>
    <dt>parent, $parent</dt>
    <dd>
      <p><code>parent() &nbsp;⇒ collection<br/>parent(&quot;selector&quot;) &nbsp;⇒ collection<br/>$parent(selector) &nbsp;⇒ collection</code></p>
      <p>获取容器中每个元素的直接父元素的列表，如果selector参数被指定，则返回值只包含满足selector的父元素。</p></dd>
    <dt>parents, $parents</dt>
    <dd>
      <p><code>parents() &nbsp;⇒ collection<br/>parents(&quot;selector&quot;) &nbsp;⇒ collection<br/>$parents(selector) &nbsp;⇒ collection</code></p>
      <p>获取容器中每个元素的所有祖先元素的列表，如果指定了selector参数，返回结果将会仅包含满足selector的祖先元素。</p>
      <p>若要获取直接父元素，请使用<em>parent()</em>。若要获取满足selector的第一祖先元素，请使用<em>closest()</em>。</p>
      <pre><code>var all_parents = $('h1').parents();
</code></pre></dd>
    <dt>prepend</dt>
    <dd>
      <p><code>prepend(content) &nbsp;⇒ self</code></p>
      <p>为列表中每个元素预加(相对于附加)内容。<em>content</em>可以是html字符串、DOM元素或元素数组。</p>
      <pre><code>q(&quot;ul&quot;).prepend(&quot;&lt;li&gt;New list item&lt;/li&gt;&quot;);
</code></pre></dd>
    <dt>prependTo, $prependTo</dt>
    <dd>
      <p><code>proependTo(target) &nbsp;⇒ self</code><br/><code>$prependTo(selector) &nbsp;⇒ self</code></p>
      <p>将列表中的内容预加(相对于附加)到target目标元素上。类似于<em>prepend()</em>，不过源/目标正好相反。</p>
      <pre><code>q(&quot;ol&gt;li&quot;).prependTo(&quot;ul&quot;);
</code></pre></dd>
    <dt>prev, $prev</dt>
    <dd>
      <p><code>prev() &nbsp;⇒ collection<br/>prev(&quot;selector&quot;) &nbsp;⇒ collection<br/>$prev(selector) &nbsp;⇒ collection</code></p>
      <p>获取列表中每个元素的前一个兄弟元素的列表。</p>
      <pre><code>var dd = q(&quot;dl &gt; dd&quot;).prev(); // 所有元素都迁移到前一个dt上。
</code></pre></dd>
    <dt>remove</dt>
    <dd>
      <p><code>remove() &nbsp;⇒ self</code></p>
      <p>将当前容器中的元素从DOM树中它们父元素上解除这些元素的绑定。</p></dd>
    <dt>siblings, $siblings</dt>
    <dd>
      <p><code>siblings() &nbsp;⇒ collection</code><br/><code>siblings(&quot;selector&quot;) &nbsp;⇒ collection</code><br/><code>$siblings(selector) &nbsp;⇒ collection</code></p>
      <p>获取列表中每个元素的后一个兄弟元素的列表。如果selector参数被指定，则值返回匹配的兄弟元素。</p></dd>
    <dt>size</dt>
    <dd>
      <p><code>size() &nbsp;⇒ integer</code></p>
      <p>报告列表中元素的数量。注意，你可以使用<em>length</em>方法来替代该方法。</p></dd>
    <dt>unwrap</dt>
    <dd>
      <p><code>unwrap() &nbsp;⇒ self</code></p>
      <p>移除容器中每个元素的直接父元素。</p>
      <pre><code>q(&quot;body&quot;).append(&quot;&lt;div id=wrapper&gt;&lt;p&gt;Content&lt;/p&gt;&lt;/div&gt;&quot;)
q(&quot;#wrapper p&quot;).unwrap().parent()  //=&gt; [&lt;body&gt;]
</code></pre></dd>
    <dt>wrap</dt>
    <dd>
      <p><code>wrap(&quot;html&quot;) &nbsp;⇒ self<br/>wrap(element) &nbsp;⇒ self<br/>wrap(function(index){ ... }) &nbsp;⇒ self</code></p>
      <p>封装容器中的每个元素到一个DOM结构中。html参数可以包含一个或多个元素。如果提供了function参数，则该方法会为每个元素调用function函数，并且返回html或元素的引用。</p>
      <pre><code>// 封装.buttons中的每个&lt;a&gt;元素到span中:
q(&quot;.buttons a&quot;).wrap(&quot;&lt;span/&gt;&quot;);
// 封装每个code块到一个div和pre中:
q(&quot;code&quot;).wrap(&quot;&lt;div class=code&gt;&lt;pre&gt;&lt;/pre&gt;&lt;/div&gt;&quot;);
// 封装所有input到一个span中，该span的class名称对应input的类型:
q(&quot;input&quot;).wrap( :: &quot;&lt;span class=&quot; + this.attributes[&quot;type&quot;] + &quot;-field /&gt;&quot; );
//=&gt; &lt;span class=text-field&gt;&lt;input type=text /&gt;&lt;/span&gt;,
//   &lt;span class=search-field&gt;&lt;input type=search /&gt;&lt;/span&gt;
</code></pre></dd>
    <h2>事件</h2>
	支持的标志事件列表:
    <ul>
      <li>click, dblclick,</li>
      <li>mousedown, mouseenter, mouseleave, mousemove, mouseout, mouseover, mouseup,</li>
      <li>focusout, focusin, blur, focus,</li>
      <li>keydown, keypress, keyup,</li>
      <li>scroll, change, submit, reset,</li></ul>
    <p>Sciter特有事件列表:</p>
    <ul>
      <li>expanded, collapsed</li></ul>
    <p>事件类型可以使用&quot;event.namespace&quot;语句将其包含在某个名称空间中，请阅读jQuery文档中的<a href="http://docs.jquery.com/Namespaced_Events" title="Namespaced Events" target="_blank">Namespaced Events</a>章节。</p>
    <p>支持自定义事件: 你可以订阅一些如&quot;dosomething.mylib&quot;的事件，并且在你的代码里使用trigger()来触发它。</p>
    <dt>on, Element.on</dt>
    <dd><code>on(type, [selector], function(event){ ... }) &nbsp;⇒ self<br/>on({ type: handler, type2: handler2, ... }, [selector]) &nbsp;⇒ self</code>
      <p>添加事件处理器到列表中的所有元素。多个事件类型名称可以通过空格符来分隔，或者作为一个对象——它的键为事件类型，而值是事件处理器。如果指定了selector参数，则只有满足selector的元素的事件才会响应。</p>
      <p>事件处理器在附加了处理器并且满足selector选择器(如果指定了selector)的元素的上下文上执行。</p>
      <p class="note">注意 #1: 当事件处理器返回<em>false</em>，则意味着事件被&quot;处理&quot;，这时将会终止事件继续传播。这一点与Sciter中的事件不一样，在Sciter中，事件被&quot;处理&quot;时是<code>return true;</code>。</p>
      <p class="note">注意 #2: 在Sciter中，传递给事件处理器的参数是一个Event(事件)对象。</p>
      <pre><code>var elem = q(&quot;#content&quot;);
// 观察#content中的所有点击事件:
elem.on(&quot;click&quot;, function(e){ ... });
// 观察#content中的所有导航链接的点击事件
elem.on(&quot;click&quot;, &quot;nav a&quot;, function(e){ ... });
// 观察文档中的所有导航链接的点击事件
self.on(&quot;click&quot;, &quot;a&quot;, function(e){ ... });
</code></pre></dd>
    <dt>off, Element.off</dt>
    <dd><code>off(type, [selector], function(e){ ... }) &nbsp;⇒ self<br/>off({ type: handler, type2: handler2, ... }, [selector]) &nbsp;⇒ self<br/>off(type, [selector]) &nbsp;⇒ self<br/>off() &nbsp;⇒ self</code>
      <p>解除使用on()方法绑定的事件处理器。若要解除一个指定的事件处理器，function参数必须与传递给on()方法的函数相同。否则，调用该方法将或解除所有type类型的事件处理器。若要解除一个名称空间中的所有事件，请使用<code>off(&quot;.mylib&quot;);</code>-——没有事件类型名称，只有名称空间。当调用该方法没有传递参数时，它将解除所有注册到当前元素列表上的事件处理器。</p>
      <pre><code>var elem = q(&quot;#content&quot;);
// 解除#content中的所有点击事件处理器:
elem.off(&quot;click&quot;);
// 解除.mylib名称空间中的所有事件处理器:
elem.off(&quot;.mylib&quot;);
</code></pre></dd>
    <dt>one, Element.one</dt>
    <dd><code>one(type, [selector], function(event){ ... }) &nbsp;⇒ self<br/>one({ type: handler, type2: handler2, ... }, [selector]) &nbsp;⇒ self</code>
      <p>该方法类似于on()，它绑定的事件处理器在执行一次后会自动解除绑定。</p></dd>
    <dt>trigger, Element.trigger</dt>
    <dd><code>trigger(event[, param1, param2,...]) &nbsp;⇒ true/false</code>
      <p>触发元素列表上的指定事件。Event这里是一个字符串，它包含事件名称，可以有名称空间。</p>
      <p>如果指定了其他参数，则这些参数将会被传递到事件处理器函数中第一个以后的参数。</p>
      <p>如果有一个事件处理器&quot;处理&quot;了该事件，该方法将返回<em>true</em>，否则返回<em>false</em>。</p>
      <pre><code>// 订阅自定义事件:
q(&quot;#content&quot;).on(&quot;show-alert.myapp&quot;, function(evt,msg) { view.msgbox(#alert,msg) } );
// 调用自定义事件，并且传递额外的参数:
q(&quot;#content &gt; a&quot;).trigger(&quot;show-alert.myapp&quot;, &quot;Red alert!&quot;);
// 注意：这个事件将会冒泡到容器元素上。
</code></pre></dd></dl>
  <p class="note">注意: q.tis模块也会添加on()、off()、one()、trigger()方法到Element类上，以便有统一的事件处理。</p>