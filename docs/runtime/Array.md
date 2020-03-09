# Array(数组)

<p>代表一些值的索引向量(数组)。</p>
  <dl>
    <h2>属性</h2>
    <dt>length</dt>
    <dd>- <em>integer</em>, 读/写属性。数组中项的数量。</dd>
    <dt>[index]</dt>
    <dd><strong>- </strong><em>value</em>, 读/写属性。数组中在<em>index</em>索引位置的元素，索引基于0开始。</dd>
    <dt>[begin..end]</dt>
    <dd><strong>- </strong><em>integers</em>, begin和end索引基于0，表示一段范围。返回数组中一个从<em>start</em>索引(包含)开始到<em>end</em>索引(不包含)结束的子数组。<em>Begin</em>和<em>end</em>参数是可忽略的。如果begin被忽略，则会假设begin为0，如果end被忽略，则会假设end值为<em>length</em>。</dd>
    <dt>first</dt>
    <dd>- <em>value</em> | <em>undefined</em>, 数组的第一个元素(如果存在)。</dd>
    <dt>last</dt>
    <dd>- <em>value</em> | <em>undefined</em>, 数组的最后一个元素(如果存在)。</dd>
    <h2>方法</h2>
    <dt>Array</dt>
    <dd><strong>([value1 [, value2 [, ... valueN ]]])</strong>
      <p>根据所给的参数创建一个新数组对象。用法如下：<br/>
	  var a = new Array(...);</p></dd>
    <dt>toLocaleString</dt>
    <dd>
      <div><strong>()</strong> returns: string</div>
      <p>Returns string - 逗号分隔的值列表。</p></dd>
    <dt>toString</dt>
    <dd>
      <div><strong>()</strong> returns: string</div>
      <p>Returns string - 逗号分隔的值列表。</p></dd>
    <dt>valueOf</dt>
    <dd>
      <div><strong>()</strong> returns: string</div>
      <p>同<em>toString</em>.</p></dd>
    <dt>clone</dt>
    <dd>
      <div><strong>(</strong>[deep:true]<strong>) </strong>returns: array</div>
      <p>返回一个该数组的新拷贝。如果<em>deep</em> === true，则该函数会递归，进行深克隆。</p></dd>
    <dt>push</dt>
    <dd>
      <div><strong>([value1 [, value2 [, ... valueN ]]])</strong> returns: value</div>
      <p>将参数中的值都添加到数组末尾。返回最后一个插入的元素。</p></dd>
    <dt>shift</dt>
    <dd>
      <div><strong>()</strong> returns: value | undefined</div>
      <p>移除数组中的第一个元素，返回移除的元素。</p></dd>
    <dt>pop</dt>
    <dd>
      <div><strong>()</strong> returns: value | undefined</div>
      <p>移除数组中的最后一个元素，返回移除的元素。</p></dd>
    <dt>unshift</dt>
    <dd>
      <div><strong>(value)</strong> returns: value | undefined</div>
      <p>将value插入到数组中的第一个位置。返回该插入的元素。</p></dd>
    <dt>concat</dt>
    <dd>
      <div><strong>([value1 [, value2 [, ... valueN ]]]) </strong>returns: array</div>
      <p>将参数中的值添加到数组中。返回该数组。</p></dd>
    <dt>join</dt>
    <dd>
      <div><strong>([delimeter])</strong> returns: string</div>
      <p>返回该数组中所有元素的字符串，这些字符串以<em>delimeter</em>或逗号分隔。</p></dd>
    <dt>reverse</dt>
    <dd>
      <div><strong>()</strong> returns: array</div>
      <p>反转该数组中的元素顺序。返回该数组。</p></dd>
    <dt>slice</dt>
    <dd>
      <div><strong>(start[, end])</strong> returns: array | undefined</div>
      <p>返回数组中一个从<em>start</em>索引(包含)开始到<em>end</em>索引(不包含)结束的子数组。</p></dd>
    <dt>splice</dt>
    <dd>
      <div><strong>(index, count [, element1, element2, ...] )</strong> returns: array </div>
      <p>该函数: </p>
      <ol>
        <li>从<em>index</em>索引开始移除<em>count</em>个元素；</li>
        <li>从<em>index</em>索引开始插入element1、element2、...个元素；</li>
        <li>将移除的元素作为一个数组返回。如果<em>count</em>为0，将会返回一个空数组。</li></ol></dd>
    <dt>sort</dt>
    <dd>
      <div><strong>( [compareFunction] )</strong> returns: array</div>
      <p>对数组中的元素进行递增排序。如果提供了<em>compareFunction</em>参数，则在排序中使用compareFunction来比较元素。 <em>compareFunction</em>函数参数中应该接受两个值，并且返回-1、0、+1作为结果。</p></dd>
    <dt>indexOf</dt>
    <dd>
      <div><strong>( </strong><em>value</em> [, <em>notfound</em> = -1] <strong>)</strong> returns: int | <em>notfound</em></div>
      <p>获取<em>value</em>在数组中的索引位置。如果<em>value</em>在数组中未找到，则返回<em>notfound</em>值(默认为-1)。</p></dd>
    <dt>lastIndexOf</dt>
    <dd>
      <div><strong>( </strong><em>value</em> [, <em>notfound</em> = -1] <strong>)</strong> returns: int | <em>notfound</em></div>
      <p>获取<em>value</em>在数组中的最后一个索引位置。如果<em>value</em>在数组中未找到，则返回<em>notfound</em>值(默认为-1)。</p></dd>
    <dt>remove</dt>
    <dd>
      <div><strong>( </strong><em>index</em>:int <strong>) </strong>returns: value | nothing</div>
      <p>移除数组中在<em>index</em>位置的元素。返回移除的元素。</p></dd>
    <dt>removeByValue</dt>
    <dd>
      <div><strong>( </strong><em>value</em> <strong>) </strong>returns: value | nothing</div>
      <p>尝试根据<em>value</em>在数组中定位元素并移除它。返回移除的元素。</p></dd>
    <dt>map</dt>
    <dd>
      <div><strong>(</strong> <em>callback</em>: function [, <em>thisObject</em>] <strong>)</strong> : array</div>
      <p>该函数创建一个新数组，该数组中的元素为原数组中为每个元素调用<em>callback</em>函数后的结果集。如果<em>thisObject</em>参数被提供，则该对象作为callback函数中的<em>this</em>变量。</p>
      <p>该callback函数接受两个参数: <code>callback(currentValue, index, array)</code> 其中:</p>
      <ul>
        <li><em>currentValue</em> 是在<em>index</em>位置的数组元素的值;</li>
        <li><em>array</em> 是该callback函数访问的数组。</li></ul>
      <p><em>map</em>方法被调用中<span class="Apple-converted-space"> </span>不会修改原数组。</p>
      <p>如果callback函数结尾没有返回(即没有显示的return语句)，则该元素将不会添加到结果数组中(相当于下面的filter()方法返回false)。注意: 这里的filter()行为不是标准的。</p>
      <p>示例:</p>
      <pre v-pre><code>var numbers = [1, 2, 3];
var squares = numbers.map(:el:el*el); // 创建一个新数组
// 这时，squares数组中的数据为[1, 4, 9]。
</code></pre></dd>
    <dt>reduce</dt>
    <dd>
      <p><strong>(</strong> callback:function [, initialValue] <strong>)</strong> : value</p>
      <p>该方法应用callback函数到数组上，callback用于比较数组中的两个值(从左到右)并最终减少到一个值。</p>
      <p>callback函数接受以下参数: <code>callback(previousValue, currentValue, index, array)</code> 其中:</p>
      <ul>
        <li><em>previousValue</em> 或者称作<em>initialValue</em> (在第一次运行) 或者是 上一次运行callback的结果;</li>
        <li><em>currentValue</em> 是在<em>index</em>位置的数组元素的值;</li>
        <li><em>array</em> 是该callback函数访问的数组。</li></ul>
      <p>该方法返回<em>callback</em>最后一次调用的返回值。</p>
      <p>该方法被调用中<span class="Apple-converted-space"> </span>不会修改原数组。</p>
      <p>如, 下面的代码片段将会计算出数组中所有元素的总和:</p>
      <pre v-pre><code>var total = [0, 1, 2, 3].reduce( :a, b: a + b );
// 此时total值为6。
</code></pre></dd>
    <dt>filter</dt>
    <dd>
      <p><strong>(</strong> <em>callback</em>: function [, <em>thisObject</em>] <strong>)</strong> : array</p>
      <p>该方法为数组中的每个元素调用一次<em>callback</em><span class="Apple-converted-space"> </span>函数，并且创建一个新数组，该新数组包含<em>callback</em>返回<em>true</em>的元素。callback函数可以结束下面的参数: <code>callback(currentValue, index, array)</code> 其中</p>
      <ul>
        <li><em>currentValue</em> 是在<em>index</em>位置的数组元素的值;</li>
        <li><em>array</em> 是该callback函数访问的数组。</li>
      </ul>
      <p><em>filter</em>方法被调用中<span class="Apple-converted-space"> </span>不会修改原数组。</p>
      <p>例如, 下面的代码将会从原数组中的大于10的元素创建一个新数组:</p>
      <pre v-pre><code>var filtered = [12, 5, 8, 130, 44].filter(:el: el &gt; 10);
// filtered此时为[12, 130, 44]
</code></pre></dd>
    <dt>find</dt>
    <dd><strong>( </strong><b>predicate</b>:function [, <b>thisArg</b>: object]<strong> )</strong> : (index:integer, element: any)
      <p>为数组中的每个元素调用predicate<i>函数</i>指导返回&quot;truthy&quot;值。返回值为找到的元素。</p>
			<p>predicate的函数签名如下: </p>
			<p><code>function (element:any [, index:integer [, arr: array ]] ) : true | false</code></p>
			<p>其中: </p>
			<ul>
        <li><i>element</i> - 数组中的当前元素;</li>
        <li><i>index</i> - 数组中的当前元素的索引</li>
        <li><i>arr</i> - 该数组的引用。</li>
			</ul>
			<p>如果指定了<i>thisArg</i>参数，则它将作为predicate函数中的<i>this</i>变量。</p>
			<p>该函数返回找到的索引及元素，所以你可以这样用:</p>
			<pre v-pre><code>var (i,v) = someArr.find(:el: el.id == &quot;foo&quot; ); // value and index, or
var v = someArr.find(:el: el.id == &quot;foo&quot; ); // just value</code></pre>
			</dd>
    <dt>some</dt>
    <dd><strong>( </strong><b>predicate</b>:function [, <b>thisArg</b>: object]<strong> )</strong> :  true | false 
      <p>为数组中的每个元素调用predicate<i>函数</i>指导返回&quot;truthy&quot;值。当找到元素时返回值为<i>true</i>。如果没有找到，则返回<i>false</i>。</p>
			<p>predicate的函数签名如下: </p>
			<p><code>function (element:any [, index:integer [, arr: array ]] ) : true | false</code></p>
			<p>其中: </p>
			<ul>
        <li><i>element</i> - 数组中的当前元素;</li>
        <li><i>index</i> - 数组中的当前元素的索引</li>
        <li><i>arr</i> - 该数组的引用。</li>
			</ul>
			<p>如果指定了<i>thisArg</i>参数，则它将作为predicate函数中的<i>this</i>变量。</p>
    </dd>
    <dt>every</dt>
    <dd><strong>( </strong><b>predicate</b>:function [, <b>thisArg</b>: object]<strong> )</strong> :  true | false 
    <p> 为数组中的每个元素调用predicate<i>函数</i>指导返回&quot;truthy&quot;值。，当所有元素调用predicate都返回true时，则返回值为true，否则返回值为false。</p>
			<p>predicate的函数签名如下: </p>
			<p><code>function (element:any [, index:integer [, arr: array ]] ) : true | false</code></p>
			<p>其中: </p>
			<ul>
        <li><i>element</i> - 数组中的当前元素;</li>
        <li><i>index</i> - 数组中的当前元素的索引</li>
        <li><i>arr</i> - 该数组的引用。</li>
			</ul>
			<p>如果指定了<i>thisArg</i>参数，则它将作为predicate函数中的<i>this</i>变量。</p>
    </dd>
    <dt>addObserver</dt>
    <dd><strong>( observer</strong>:function<strong> )</strong> : undefined
      <p>为该数组添加观察器(observer) - 观察器是一个函数，当数组修改时会调用该函数。该观察器函数的签名应该为:</p>
      <p><code>function observer(changeDefinition) {}</code> 其中changeDefinition是一个元组，它包含以下字段:</p>
      <ul>
        <li><code>[0]</code> - symbol, <code>#add-range</code>(属性增加)、<code>#update-range</code>(属性修改)、<code>#delete-range</code>(属性删除)中之一;</li>
        <li><code>[1]</code> - array, 属性被修改的数组;</li>
        <li><code>[2]</code> - symbol or string, 属性名;</li>
        <li><code>[3]</code> - integer, 范围起始，第一个被修改元素的索引;</li>
        <li><code>[4]</code> - integer, 范围结束(不包含)。</li></ul></dd>
    <dt>removeObserver</dt>
    <dd><strong>( observer</strong>:function<strong> )</strong> : undefined
      <p>根据函数引用从中移除给定的观察器。</p></dd></dl>