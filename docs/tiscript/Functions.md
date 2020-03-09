# 函数

  <p>TIScript֧支持命名和匿名(lambda)第一类函数。函数是Function类的对象。</p>
  <h2><a name="named-functions" id="named-functions">命名函数</a></h2>
  <p>命名函数使用下面的语句来声明:</p>
  <pre v-pre class="code tiscript"><code>function &lt;函数名&gt; ( &lt;参数&gt; )
{
  //...函数体
}
</code></pre>
  <dl>
    <dt>其中:</dt>
    <dd><em>&lt;函数名&gt;</em>是一个函数的名称, 或者是:  <br/>
	简单的<em>&lt;nmtoken&gt;</em> , 或<br/>组合名称: <em>&lt;nmtoken1&gt;</em> [ <code>.</code> <em>&lt;nmtoken2&gt;</em> [ . <em>&lt;nmtoken3&gt;</em> [ . <em>&lt;nmtokenN&gt;</em> ]]] <sup><a href="#fn__1" name="fnt__1" id="fnt__1" class="fn_top">1)</a></sup><br/><em>&lt;参数&gt;</em>是一个函数参数列表:<br/>
	[<em>&lt;参数名1&gt;</em> [ <code>,</code> <em>&lt;参数名2&gt;</em> [ <code>,</code> ... <em>&lt;参数名N&gt;</em> ]]]</dd></dl>
  <h2><a name="anonymous-functions" id="anonymous-functions">匿名函数</a></h2>
  <p>匿名函数(又名lambda表达式)可以使用以下语句来声明:</p>
  <p>经典的JavaScript格式:</p>
  <pre v-pre class="code tiscript"><code><code>function</code> <code>(</code> &lt;parameters&gt; <code>)</code> <code>{</code> &lt;statements&gt; <code>}</code>
</code></pre>
  <p>单表达式lambda格式:</p>
  <pre v-pre><code><b>:</b> &lt;parameters&gt; <b>:</b> &lt;statement&gt;
</code></pre>
  <p>块表达式lambda函数格式:</p>
  <pre v-pre><code><b>:</b> &lt;parameters&gt; <b>:</b> &lt;statements&gt; <b>:</b>
</code></pre>
	<h3>"That" lambda函数声明:</h3>
	<p>这种声明的函数没有自己的this环境变量。this环境变量取自它外部调用它的函数this，类似于
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">ES6中的箭头函数</a>。</p>
	<p>单表达式lambda格式:</p>
  <pre v-pre><code><b>|</b> &lt;parameters&gt; <b>|</b> &lt;statement&gt;</code></pre>
  <p>块表达式lambda函数格式:</p>
  <pre v-pre><code><b>|</b> &lt;parameters&gt; <b>{</b> &lt;statements&gt; <b>}</b> 
</code></pre>
  <p>嵌套函数(其他函数内部的函数)是允许的。</p>
	<h2>异步方法</h2>
	<pre v-pre><code><b>async function </b>( &lt;parameters&gt; ) 
{ 
  (&lt;statement&gt; | &lt;await-expression&gt;)* 
}
</code></pre>
	<p>异步方法是异步执行的，并且可以在函数体中使用await表达式。</p>
	<h2>生成器方法</h2>
	<pre v-pre><code><b>function* </b>( &lt;parameters&gt; ) 
{ 
  (&lt;statement&gt; | &lt;yield-statement&gt;)* 
}
</code></pre>
	<p>生成器方法用在for(var x in generator)语句中。生成器使用yield来发送值。</p>
  <h2><a name="event-functions" id="event-functions">事件函数</a></h2>
  <p>事件处理函数是一种函数名称是字符串的正常函数。它不是使用function来声明，而是使用event关键字:</p>
  <pre v-pre><code>event name[.namespace] [$(selector)]  [( [eventObj [,element] ) ]
</code>{
  //... 事件处理函数体
}
</code></pre>
  <p>其中:</p>
  <ul>
    <li><em>name</em>是一个已知事件或自定义事件的名称;</li>
    <li><em><code>.</code> namespace</em>是类似jQuery中的任意的事件namespace的名称, 可省略;</li>
    <li><em>selector</em>是一个CSS选择器。如果提供了，则仅有满足条件的DOM元素上才能接收到事件, 可省略。</li>
   </ul>
  <ul>
    <li />
    <li>调用参数是可省略的, 如果提供了，则它可以包含一个或两个参数:
      <ol>
        <li><code>eventObj</code>是接收到的事件对象实例参数名称。它可以是任意有效的名称，比如: evt, eo 或event。</li>
        <li><code>element</code>是接收到消息的DOM元素的参数名称。</li>
      </ol>
     </li>
   </ul>
  <h2><a name="optional-parameters" id="optional-parameters">可选参数</a></h2>
  <p>TIScript在函数声明中支持可选参数:</p>
  <h3><a name="parameters-with-default-values" id="parameters-with-default-values">有默认值的参数</a></h3>
  <p>在函数中的一些参数可以定义它的默认值，如:</p>
  <pre v-pre class="code tiscript"><code>function Foo(a, b, c = 12)
{
  return a + b + c;
}
</code></pre>
  <p>这个函数可以使用两个参数来调用:</p>
  <pre v-pre class="code tiscript"><code>var r1 = Foo(1, 2);    // r1 = 15
</code></pre>
  <p>也可以使用三个参数来调用:</p>
  <pre v-pre class="code tiscript"><code>var r2 = Foo(1, 2, 3); // r2 = 6
</code></pre>
  <p>在参数列表中，有默认值的参数右边不能有非可选参数，即只有最后面(或所有)的参数才可以有默认值。</p>
  <h3><a name="varargs" id="varargs">变长参数</a></h3>
  <p>又名 参数向量</p>
  <p>有些情况下，当定义函数时，你并不知道参数的数量，这时你可以使用下面的声明:</p>
  <pre v-pre class="code tiscript"><code><code>function</code> Bar(a, b, rest..)
{
  <code>var</code> total = a + b;
  <code>f</code>or (<code>var</code> n <code>in</code> rest) total += n;
  <code>return</code> total;
}
</code></pre>
  <p>在运行期，rest变量将包含一个确定数量参数的数组。所以在</p>
  <pre v-pre class="code tiscript"><code><code>var</code> r1 = Bar(1, 2, 3, 4);
</code></pre>
  <p>语句执行后，r1的值将为10, 在</p>
  <pre v-pre class="code tiscript"><code><code>var</code> r2 = Bar(1, 2);
</code></pre>
  <p>语句后，r2的值将为3。</p>
  <h2>字符串器函数</h2>
  <p>字符串器函数是一个名称以'$'开头的正常函数或方法。</p>
  <p>当解析调用这个函数时，tiscript将会将'('和')'内部的任何字符都当做字符串。示例:</p>
  <pre v-pre><code><code>var</code> bodyDiv = self.$( div#body );
</code></pre>
  <p>这个调用等价于:</p>
  <pre v-pre><code><code>var</code> bodyDiv = self.$( &quot;div#body&quot; );
</code></pre>
  <p>如果'('和')'中的文本包含如')'或'}'等标识符时，需要转义成\)或\}.</p>
  <h3>字符串器参数</h3>
  <p>'('和')'中的文本可以包含所谓的tiscript内嵌代码 - 需要被执行的tiscript序列并且字符串执行结果会被插入到文本中。若要在字符串中包含这样的代码，需要使用'{' 和'}'将它括起来。示例:</p>
  <pre v-pre><code>var n = 3;
<code>var</code> nthDiv = self.$( div:nth-child(<code>{ n }</code>) );
</code></pre>
  <p>上面的$()调用将会被解析成下面的语句:</p>
  <pre v-pre><code><code>var</code> nthDiv = self.$( <code>&quot;div:nth-child(&quot; </code>, n , <code>&quot;)&quot;</code> );
</code></pre>
  <h3>自定义字符串器函数</h3>
  <p>这是一个在Sciter中真实使用的一个字符串器函数，它被用于插入HTML片段:</p>
  <pre v-pre><code>function Element.$append( params.. ) // 接受HTML判断，作为参数向量
{
  for( var i = 1; i &lt; params.length; i += 2 ) // each odd parameter is an inclusion - result of the correspondent { ... } expression.
    params[i] = params[i].toHtmlString();     // convert our inclusion into escaped HTML string for safety.
  this.insert( params.join(&quot;&quot;) );             // 合并所有参数到一个字符串并且调用Element.insert(html)
                                              // Sciter中的DOM元素的方法
}
</code></pre>
  <p>有了这个函数，我们可以这样使用它:</p>
  <pre v-pre><code>var arr = [1,2,3];
var table = self.$( table#some );
for( var n in arr ) 
  table.$append ( &lt;tr&gt;&lt;td&gt;Cell #{n}&lt;/td&gt;&lt;/td&gt; );
</code></pre>
  <p>上面的代码将会向表中插入包含"Cell #1", "Cell #2" and "Cell #3"文本的 三行/单元格。是不是很方便?</p>
  <h2>使用对象声明的函数调用</h2>
  <p>如果一些函数接受一个对象参数，则它调用时可以省略'(' 和 ')'，如:</p>
  <pre v-pre><code>  foo { one:1, two:2 } 
</code></pre>
  <p>它等价于 JavaScript调用:</p>
  <pre v-pre><code>  foo ({ one:1, two:2 })
</code></pre>
  <hr/>
  <p><sup><a href="#fnt__1" id="fn__1" name="fn__1">1)</a></sup> 使用复合名称的函数声明是下面的格式的简写形式:<br/><code>name1.name2.name3. ... .nameN = function( &lt;参数&gt; ) { &lt;语句&gt; }</code></p>