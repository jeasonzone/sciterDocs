## Sciter中HTML特殊格式

<div class="post" id="post-41810">
	 <h1 class="storytitle">Sciter中HTML的属性短格式写法</h1>
</div>
	<div class="storycontent">
		<p>Sciter v.3中的HTML解析器支持属性短格式写法，比较下面两种等同的声明格式:</p>
<p>紧凑型:</p>
<pre class="brush: html;"> <code>
  &lt;input|currency(itemPrice) value=1000&gt; </code>
</pre>
<p>标准型:</p>
<pre class="brush: html;"> <code>
  &lt;input type="currency" name="itemPrice" value=1000&gt; </code>
</pre>
<p>正如你所看到的，第一种格式更简短，且可读性更好(当然是主观上啦)。</p>
<p>这里是所有支持的属性短格式写法列表:</p>
<ul>
<li><code>#name</code> &#8211; <em>id</em>, 属性名称以‘#’字符开始，将解析为 id=”name”</li>
<li><code>.name</code> &#8211; <em>class</em>, 等同于class="name"。元素可以有多个“点属性”，它们组合成一个class属性。所以，&lt;div.container.collapsed&gt;等同于:  &lt;div class=&#8221;container collapsed&#8221;&gt;。</li>
<li><code>|name</code> &#8211; <em>type</em>, 属性名称以‘|’字符开始，将解析为 type="name"</li>
<li><code>(someName)</code> &#8211; <em>name</em>, 属性名称以‘(‘和‘)’字符闭合，将解析为 <code>name="someName"</code></li>
</ul>
</div>
</div>