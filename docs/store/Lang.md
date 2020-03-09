# Lang库

## 多语言(Lang)框架

  <p>Lang框架是实现i18n自动识别UI的一种方式，这些UI可以以多种人类语言来展示。它提供了下面一些特性:</p>
  <ol>
    <li>翻译静态文本和标签(label);</li>
    <li>格式化动态值，包括多种数据和自定义规则;</li>
    <li>对UI支持的语言可以一次翻译，多次展示;</li>
    <li>将特定语言翻译定义到一个文件中，而不是分散在大量的代码、样式和html文件中。这样若要给UI添加新的语言翻译，只需要创建一个新的语言文件。</li></ol>
  <h2>基本原则</h2>
  <p>应用程序的UI有一个或多个HTML文件组成，且这些文件对所有支持语言是相同的。</p>
  <p>每种支持的语言需要有一个所谓的翻译映射文件TMF(translation map file).</p>
  <p>TMF文件是一个tiscript脚本文件，它定义翻译项ID(&quot;translatable ID&quot;)和对应展示的人类语言的映射关系。</p>
  <h3>TMF文件的结构</h3>
  <p>TMF是一个普通的脚本文件，区别是加载完成后会调用eval()函数进行求值。</p>
  <p>TMF文件的求值结果将作为一个对象——一个翻译项ID(&quot;translatable ID&quot;)对应到另一个字符串或函数(提供翻译/复合字符串)的映射表。</p>
  <p>下面是一个简单的中文的翻译映射文件:</p>
  <pre><code>({
  &quot;Matchboxes&quot;:&quot;盒子&quot;,        // 静态文本入口
  &quot;There are # matches in the box&quot; : // 简单的多态入口
      function(n) { 
        return  n == 0 ? &quot;该盒子是空的&quot; 
              : n == 1 ? &quot;该盒子中只有一个物品&quot; 
              : String.printf(&quot;该盒子共有%d个物品&quot;,n);
  },
  ...
}) 
</code></pre>
  <p>正如你说看到的，这个映射文件就是一个从翻译项到给定语言的映射表。</p>
  <h2>引入多语言框架</h2>
  <p>要引入多语言(Lang)框架，你只需在你的样式中包含sciter-sdk/+lang/目录中的lang.css文件。示例:</p>
  <pre><code>&lt;style&gt;
   @import url(../lang.css);
&lt;/style&gt;
</code></pre>
  <h3>引入指定的翻译映射语言文件</h3>
  <p>要引入指定的翻译映射语言文件，只需在html文档的head部分引入特定的&lt;link&gt;元素:</p>
  <pre><code>&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;!-- 这两个link定义了英语和俄语的翻译语言文件 --&gt;
    &lt;link href=&quot;lang/ru.tis&quot; hreflang=&quot;ru&quot; rel=&quot;translation&quot; &gt;
    &lt;link href=&quot;lang/en.tis&quot; hreflang=&quot;en&quot; rel=&quot;translation&quot; &gt;
    ...
</code></pre>
  <p>加载时，Lang会将与&lt;html lang=&quot;...&quot;&gt;属性匹配的TMF文件加载进来。所以UI会将&lt;html&gt;标签的lang属性定义的语言作为默认的展示语言。</p>
  <h3>在html中标记翻译&quot;点&quot;</h3>
  <h4>静态文本</h4>
  <p>若要在你的UI中定义可翻译的静态文本，可以采用下面的几种方式:</p>
  <ol>
    <li>使用<code>&lt;dfn&gt;</code>元素, 示例: <br/>
	<code>&lt;dfn&gt;待翻译文本&lt;/dfn&gt; </code><br/>
	如果你的TMF文件中包含下面的入口: <br/> &nbsp;<code>&quot;待翻译文本&quot; : &quot;翻译后的文本&quot;</code> <br/>
	则用户将会看到&quot;<em>翻译后的文本</em>&quot;，而不是<code>&lt;dfn&gt;</code>元素中的原始内容;</li>
    <li>使用<code>&lt;label&gt;</code>元素。Lang框架默认会将&lt;label&gt;元素当做&lt;dfn&gt;元素对待;</li>
    <li>为任何元素的class属性包含<code>dfn</code>文本即可，如：<code>&lt;li class=&quot;dfn&quot;&gt;待翻译文本&lt;/li&gt;</code>;</li>
    <li>使用CSS选择器为任何元素设置aspect为<em>Lang.Label</em>:<br/>
	<code>ul#options &gt; li &nbsp;{ aspect:&quot;Lang.Label&quot;; }</code></li></ol>
  <h4>动态文本 - 多态文本(即需要根据某个变量动态变化的文本)</h4>
  <p>有一些场景是文本需要被格式化或复合成不同的表示文本。例如考虑下面这些情况: &quot;1对应cactus&quot; 但是&quot;2对应cactii&quot;, &quot;1对应match&quot; 但是&quot;2对应matches&quot;等。 多态规则是一个非常特定语言化的，而且通常不能很好的生成正确的文本。所以Lang框架旨在提供一种最基础的解决多态文本的方式，而不是考虑覆盖所有语言可能的应用场景。</p>
  <p>若要在你的UI中定义可翻译的动态文本，可以采用下面的几种方式:</p>
  <ol>
    <li>使用<code>&lt;var&gt;</code>元素, 示例: <br/>
	<code>&lt;var&gt;There are # matches in the box&lt;/var&gt;</code>. <br/>The Lang框架为为<code>&lt;var&gt;</code>元素生成一个<code>value</code>属性。因此，当你在代码中将某些数字值设置到<code>&lt;var&gt;</code>元素上时，Lang框架将会调用映射表中对应的格式化函数来格式化<code>&lt;var&gt;</code>中的字符串。参考上面的翻译映射文件。 </li>
    <li>为任何元素的class属性包含<code>var</code>文本即可, 如：<code>&lt;li class=&quot;var&quot;&gt;There are # matches in the box&lt;/li&gt;</code>;</li>
    <li>使用CSS选择器为任何元素设置aspect为<em>Lang.Formatter</em>:<br/>
	<code>ul#options &gt; li &nbsp;{ aspect:&quot;Lang.Formatter&quot;; }</code></li></ol>
  <h2>翻译映射文件的自动生成和维护</h2>
  <p>为了使用Lang框架，我猜测你可能会做以下几个步骤:</p>
  <h4>0. 创建一个初始的en.tis翻译文件，它有以下内容:</h4>
  <pre><code>({ })
</code></pre>
  <p>保存该文件到/lang/en.tis。现在你有了一个控制翻译表。</p>
  <h4>1. 使用你的默认语言定义你的UI。</h4>
  <p>现在让我假设它是英语，你的UI看起来可能如下面的样子:</p>
  <pre><code>&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;link href=&quot;lang/en.tis&quot; hreflang=&quot;en&quot; rel=&quot;translation&quot; &gt;
    &lt;style&gt;
      @import url(../lang.css); /* 启用Lang框架 */
    &lt;/style&gt;
    &lt;script type=&quot;text/tiscript&quot;&gt;
      include &quot;../lang.tis&quot;;       // 加载Lang框架
      include &quot;../lang-tool.tis&quot;;  // 加载Lang框架工具库——翻译映射表生成器
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;label&gt;MATCHES&lt;/label&gt; 
    &lt;var id=&quot;nmatches&quot;&gt;MATCHES-PLURALIZED&lt;/var&gt;&lt;/p&gt; 
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
  <p>注意声明代码中的<code>include &quot;../lang-tool.tis&quot;;</code>。它包含了一个翻译映射表生成工具。 </p>
  <h4>2. 在你的程序中加载html标记语言，并且运行生成映射表工具</h4>
  <p>在加载完UI页面后，在你的应用程序中按下CTRL+SHIFT+F11，这时会调用翻译映射表生成器，他会将生成的映射表放到剪切板中。 <br/></p>
  <p>将剪切板中的内容复制到某个文件中，如果是上面的空映射表和html代码，则你得到的内容应该如下:</p>
  <pre><code>// items not found:
{
 &quot;MATCHES-PLURALIZED&quot;:&quot;function (v){ return \&quot;?\&quot; }&quot;,
 &quot;MATCHES&quot;:&quot;?&quot;
}
// OK, no unused items
</code></pre>
  <p>第一节将会给出在你的最终映射表中需要被翻译和出现项的列表:</p>
  <pre><code>({ 
 &quot;MATCHES-PLURALIZED&quot;: function (v){ return ... },
 &quot;MATCHES&quot;: &quot;Matches&quot;
})
</code></pre>
  <p>你可以在你的app开发生命周期中重复上面的过程——有些项会被增加，而有些项会被移除(你将会在第二节看到它们)。在提交QA和测试之前建成这些项。</p>
  <p>接着只需注释掉映射表生产工具的引用: &nbsp;<code>// include &quot;../lang-tool.tis&quot;;</code>这样它就不会占用任何空间和快捷键。 </p>