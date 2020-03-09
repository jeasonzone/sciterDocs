## 打印预览模板页面格式

打印页面(Pager)模板是一个普通的HTML文档，它必须包含一个元素 - &lt;pageframe&gt;。其他元素都是可选的。
  <p>下面是和behavior:pager相关的所有元素列表:</p>
  <ul>
    <li><code>&lt;pageframe&gt;</code> - &nbsp;被打印文档的容器。<code>&lt;pageframe&gt;</code>的内容盒用于呈现文档的被打印部分。</li>
    <li><code>id=&quot;document-url&quot;</code>的元素 - 可选, 将会包含被打印文档的URL;</li>
    <li><code>id=&quot;document-title&quot;</code>的元素- 可选, 将会包含被打印文档的&lt;title&gt;元素中的文本;</li>
    <li><code>id=&quot;page-no&quot;</code>的元素 - 可选, 将会包含当前页号;</li>
    <li><code>id=&quot;total-pages&quot;</code>的元素- 可选, 将会包含文档的总页数。</li></ul>
  <p>模板文档中&lt;html&gt;元素的属性:</p>
  <ul>
    <li><code>page-no=N</code> - 在pageframe中渲染的页面的页号;</li>
    <li><code>page-parity=&quot;odd&quot; | &quot;even&quot;</code> - 页面的奇偶标志.</li></ul>
  <p>上面的这些属性可以应用在模板文档中设置CSS样式，如下面的CSS规则:</p>
  <pre><code>html[page-parity=odd] footer  { text-align:left; }
html[page-parity=even] footer { text-align:right; }</code>
</pre>
  <p>将会使模板中<code>&lt;footer&gt;</code>元素在奇偶页面有不同的对齐方式。</p>
