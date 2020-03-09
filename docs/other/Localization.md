## 本地化(i18n)处理

<h2>1. 静态本地化：使用SGML实体</h2> 
  <p>“静态”的意思是你提前知道你的UI语言，并且在运行期不会发生改变。</p> 
  <p>假设你有下面这样的文档:</p> 
  <pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;include src=&quot;lang:words.htm&quot;/&gt;
  &lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;&amp;hello; &amp;world; !&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre> 
  <p>并且还有两个entity表文件, words-en.htm :</p> 
  <pre><code>&lt;!ENTITY hello                &quot;Hello&quot;&gt;
&lt;!ENTITY world                &quot;World&quot;&gt;</code></pre> 
  <p>和 words-zh.htm :</p> 
  <pre><code>&lt;!ENTITY hello                &quot;你好&quot;&gt;
&lt;!ENTITY world                &quot;世界&quot;&gt;</code></pre> 
  <p>那么当加载这个主HTML文档时，你将在SCN_LOAD_DATA中接收到“lang:words.htm”的URL请求(见上面的<code>&lt;include&gt;</code>中的声明)。<br /> 
  对于这个请求的响应，你可以根据你的应用程序的需要觉得是返回“words-en.htm”或“words-zh.htm”的内容。</p> 
  <h2>2. 静态本地化：使用内嵌方式</h2> 
  <p>假设你有下面这样的文档:</p> 
  <pre><code>&lt;html&gt;
&lt;body&gt;
  &lt;p&gt;
     &lt;include src=&quot;lang:fragment:hello-world&quot;&gt;Hello World&lt;/include&gt;
  &lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre> 
  <p>它使用<code>&lt;include&gt;</code>来请求HTML片段。正常情况下在这里你将只会看到“Hello World”。不过当你的<br /> 
  应用程序一旦处理SCN_LOAD_DATA / “lang:fragment:hello-world” 请求, 则你的响应内容将会自动替换<code>&lt;include&gt;...&lt;/include&gt;</code>中的内容。</p> 
  <h2>3. 动态本地化：使用CSS</h2> 
  <p>“动态”的意思是可以动态加载UI的翻译内容 – 即运行期可切换语言。</p> 
  <p>假设你有下面这样的文档:</p> 
  <pre><code>&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;style&gt;
      @import url(lang.css);
    &lt;/style&gt;
  &lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;
     &lt;span class=&quot;hello-world&quot;&gt;Hello World&lt;/span&gt;
  &lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre> 
  <p>以及下面这样的lang.css内容</p> 
  <pre><code>span.hello-world:lang(en) { content:&quot;Hello World&quot;; }
...
span.hello-world:lang(zh) { content:&quot;你好，世界&quot;; }
...</code></pre> 
  <p>那么当你切换<code>&lt;html lang=...&gt;</code>中lang属性的值时(在加载时或运行期)，你将看到<code>span.hello-world</code>中的内容会自动切换不同的语言。</p> 
  <h2>4. 动态本地化：使用脚本</h2> 
  <p>dk/samples/+lang/目录中提供了一种脚本切换语言的脚本实现。 它使用了CSS aspect特性 – 为特定的DOM元素声明和绑定脚本代码。</p> 
  <p>除了支持简单的文本翻译和替换，它还支持语言智能排版和多元化(pluralization)。 </p> 
  <h2>5. 预处理方式</h2> 
  <p>原则上，你也可以混合使用上面说的所有方法。</p> 
  <p>同时, 在某些情况下，你也可以考虑使用某种本地代码或脚本的预处理器。</p> 
  <p>比如，像下面这样的文档:</p> 
  <pre><code>&lt;html&gt;
&lt;body&gt;
  &lt;p&gt;%HELLO% %WORLD% !&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre> 
  <p>这是一张很简单的预处理方式：通过本地代码在将内容提交给Sciter引擎之前，查找所有类似<code>%HELLO%</code>这样的字符串，并替换它。</p> 
  <p>在脚本中，你可以使用内置的预处理特性，比如像下面这样的代码:</p> 
  <pre><code>&lt;html&gt;
&lt;body&gt;
  &lt;p&gt;&lt;% =words.hello %&gt; &lt;% =words.world %&gt; !&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre> 
  <p>预处理方式有一个共同的问题: 当需要替换html内容时，你需要替换整个html内容。而如果你使用实体(上面讲的第一种方式)时，你只需要下面这样的代码即可:</p> 
  <pre><code>el.html = &quot;&amp;hello; &amp;world&quot;;
</code></pre> 
  <h2>总之</h2> 
  <p>使用哪种方式取决于你的选择。第一种和第二种方式是最有效的，通常它们可以一起使用。<br /> 
  因为动态填充和切换语言这种场景并不是很普遍，即使遇到这种情况也可以通过特定的函数来处理。</p>  