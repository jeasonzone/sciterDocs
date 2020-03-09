# CSS扩展 - @set样式集

## 有样式集(style-set)的DOM元素的样式解决方案


   <h1 class="storytitle">CSS扩展 - 样式集</h1>
    <div class="storycontent"><p>HTMLayout和Sciter都使用H-SMILE来渲染HTML/CSS，并且都支持所谓的&quot;样式集&quot;。</p>
        <p>在这篇文章中，我将尝试解释&quot;样式集&quot;是什么，以及为什么要引入它。</p>
        <p>首先: 样式集是一个命名的样式规则块 – 应用到某些DOM子树上的样式定义系统(集合)。</p>
        <p>样式集的声明以`@set`关键字开始，后面跟着样式集的名称，然后是用‘{‘ 和 ‘}’括起来的样式规则块:</p>
        <p>代码块 A:</p>
        <pre class="brush: css;" v-pre><code>@set MyStyleSet{
   :root { font:12pt Verdana; margin:0; padding:0 }
   :root &gt; li { font:12pt Verdana; display:block; }
   strong { color:red; }
}</code></pre>
        <p>如我们所看到的，这个样式集的名称为‘MyStyleSet’，它包含3个规则。注意其中<code>:root</code>伪类的用法 –
            在样式集中，:root指应用该样式集的元素，该元素成为了这个样式集中的DOM子树的根元素。</p>
        <p>要将该样式集应用到某个DOM子树上，可以在CSS中使用<code>style-set</code>属性:</p>
        <p>代码块 B:</p>
        <pre class="brush: css;" v-pre><code>ul#my-list
{
   style-set: MyStyleSet;
}</code></pre>
        <p>上面的代码告诉CSS引擎：<code>ul#my-list</code>元素<strong>和它的所有子元素</strong>将使用上面的样式集。</p>
        <p>样式集允许在一个紧凑的块中定义相关的样式声明系统。如果你有多个可以被应用到相同DOM子树的样式集，你可以通过修改应用到某一个元素(DOM子树的根元素)上的样式集名称来切换样式集:</p>
        <p>代码块 C:</p>
        <pre class="brush: css;" v-pre><code>html[theme=&quot;MyCoolTheme&quot;] ul#my-list {  style-set: MyStyleSet; }
html[theme=&quot;AnotherCoolTheme&quot;] ul#my-list {  style-set: AnotherStyleSet; }</code></pre>
        <p>使用这种方式，通过修改html元素的theme属性, 我们可以应用两种不同且独立的样式集到ul#my-list元素和它的子元素上。</p>
        <p>如果没有样式集(常规的CSS中)，我们需要写下面这些规则: 代码块D:</p>
        <pre class="brush: css;" v-pre><code>html[theme=&quot;MyCoolTheme&quot;] ul#my-list { font:12pt Verdana; margin:0; padding:0 }
html[theme=&quot;MyCoolTheme&quot;] ul#my-list &gt; li { font:12pt Verdana; display:block; }
html[theme=&quot;MyCoolTheme&quot;] ul#my-list strong { color:red; }
html[theme=&quot;AnotherCoolTheme&quot;] ul#my-list { font:10pt Arial; margin:0; padding:0 }
html[theme=&quot;AnotherCoolTheme&quot;] ul#my-list &gt; li { font:10pt Arial; display:list-item; }
html[theme=&quot;AnotherCoolTheme&quot;] ul#my-list strong { color:blue; }</code></pre>
        <p>这样的代码不是很漂亮，也很容易在赋值拷贝的过程中出错。</p>
        <p>使用样式集的另一个好处是方便地制作样式库，比如：<a href="http://jqueryui.com/">jQueryUI库</a>，获取其他Web库，像<a href="http://jqueryui.com/demos/tabs/">Tabs UI组件</a>就可以将它的所有样式都使用样式集来定义:</p>
        <pre class="brush: css;" v-pre><code>@set Tabs {
   :root &gt; ul.ui-tabs-nav { ... }
   :root &gt; div.ui-tabs-panel { ...; display:none; }
   :root &gt; div.ui-tabs-panel.current { ... ; display:block; }
}</code></pre>
        <p>并且jQuery UI库的不同主题文件可以有不同的、独立的Tabs样式集声明。</p>
        <p>样式集不仅是一种定义样式系统的方便紧凑的方式，它也能减少DOM元素的样式解决方案的计算复杂度。考虑下面的代码和上面代码块D中定义的样式系统:</p>
        <pre class="brush: xml;" v-pre><code>&lt;ul id=&quot;my-list&quot;&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</code></pre>
        <p>上面的代码中，CSS处理器要解决li元素的处理方案，它需要浏览所有样式表中的<strong>所有</strong>规则(在这个示例中有6个)。 例如，要处理下面的这个规则:</p>
        <pre class="brush: css;" v-pre><code>html[theme=&quot;MyCoolTheme&quot;] ul#my-list &gt; li</code></pre>
        <p>要处理li元素应用的样式，CSS处理器不仅要浏览该元素本身的样式，也要浏览它的所有父元素的样式，以便查找到html元素的theme属性集合。通常有N个元素S个样式规则的DOM的样式处理方案的计算复杂度是O(N*S)。</p>
        <p>使用样式集可以极大的减少复杂度。因为需要处理的样式规则数量变少了。在代码块D(常规CSS)中有6个规则,而代码块C(样式集)中只有2个规则。在样式集中的样式规则仅会在定义了style-set属性的元素上才会浏览。
            style-set属性是可继承(inheritable)的，所以在子树上的任意&quot;样式根(styled root)&quot;元素都将拥有相同的style-set的值。
            在实践中，假设你的UI有许多可以动态切换的主题，添加一个新的主体并不会减慢样式解决方法的效率。 你也可以创建你的组件的样式库，仅需在CSS中简单的定义下style-set样式集即可。</p>
        <p><a href="http://www.terrainformatica.com/2008/07/css-selectors-and-computational-complexity/">关于CSS选择器计算复杂性的更多信息</a></p>
        <h3>有样式集(style-set)的DOM元素的样式解决方案</h3>
        <p>样式的解决方案有下面几个步骤:</p>
        <ol><li>通常是遍历某特定元素的所有样式来解决。在这个阶段，在style-set块中的样式不会被处理。</li>
            <li>在步骤#1之后，如果该元素定义style-set属性，则会为该元素查找该样式集块。如果该样式集块被找到，则从块中找出对应规则应用到该元素上。</li></ol>
        <p>如你说看到的，样式集的权限比常规CSS规则更高。要使常规样式可以覆盖样式集中的规则，则需要使用<code>!important</code>修改器, 像这样:</p>
        <pre class="brush: css;" v-pre><code>ul#my-list 
{ 
   style-set: MyStyleSet; 
} 
ul#my-list strong 
{  
   color: yellow !important; /*通过使用更强的{ color:red; }来覆盖MyStyleSet样式集中的样式 */
} 
</code></pre>

## 样式集 与 OOP

        <p>为了使样式集更加地模块化和更利于复用，我为样式集添加了继承功能 – 你可以定义一个新的样式集，它可以从一个基本样式集继承。</p>
        <pre class="brush: css;" v-pre><code>@set Tabs {
   :root &gt; ul.ui-tabs-nav { display: block; margin:Xpx; ... }
   /* 其他的定义布局的属性规则 */
}
@set BlueTabs &lt; Tabs /* 继承Tabs样式集的所有规则 */
{
   :root &gt; ul.ui-tabs-nav { color: blue; }
   /* 其他 &quot;color&quot; 规则 */
}
@set RedTabs &lt; Tabs /* 继承Tabs样式集的所有规则 */
{
   :root &gt; ul.ui-tabs-nav { color: red; }
   /* 其他 &quot;color&quot; 规则 */
}
</code></pre>
        <p>上面的声明引入了3个可以独立使用的样式集，其中，RedTabs 和 BlueTabs 共享相同的属性 – Tab样式集。</p>
        <p>样式集已经被广泛地用在H-SMILE core中的<em>主样式表</em>中。 主样式表定义了内置元素的样式和内部输入元素的行为。</p>
    </div>
 