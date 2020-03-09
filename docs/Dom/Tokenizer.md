# Tokenizer对象

<p>Tokenizer对象是一个用于支持为加载到DOM元素中的源代码的高亮显示的渲染辅助类: &lt;pre&gt;,&lt;code&gt;,&lt;textarea&gt;,&lt;plaintext&gt;。</p>
  <p>它需要与Selection.applyMark()函数一起使用。</p>
  <dl>
    <h2>常量</h2>
    <p>N/A</p>
    <h2>属性</h2>
    <dt>tokenStart</dt>
    <dd>- <a href="Selection.htm#bookmark">bookmark</a>, token的起始位置。</dd>
    <dt>tokenEnd</dt>
    <dd>- <a href="Selection.htm#bookmark">bookmark</a>, token的结束位置。</dd>
    <dt>tag</dt>
    <dd>- string, tokenizer的标记代码 - 标签名称, 在token为#TAG-START和#TAG-END时有效。</dd>
    <dt>attr</dt>
    <dd>- string, tokenizer的标记代码 - 属性名称, 在token为#TAG-ATTR时有效。</dd>
    <dt>value</dt>
    <dd>- string, token文本内容 或 属性值(token为#TAG-ATTR时)。</dd>
    <dt>type</dt>
    <dd>- symbol, #source 或 #markup - 当前tokenizer模型的类型。</dd>
    <dt>element</dt>
    <dd>- 被解析的DOM元素。</dd>
    <h2>方法</h2>
    <dt>this</dt>
    <dd>
      <strong>( element</strong>: Element, <strong>tokenizerType</strong>: symbol [, <strong>subType</strong>: symbol] <strong>)</strong> : Tokenizer
      <p>Tokenizer实例的构造器, 参数:</p>
      <ul>
        <li><strong>element</strong> - 待渲染源代码文本的DOM元素。</li>
        <li><strong>tokenizerType</strong> - 定义使用的tokenizer类型: <code>#markup</code> 或 <code>#source</code>。</li>
        <li><strong>subType</strong> - symbol, 当前它可以为<code>#style</code>或其他任何值。当为#style时，tokenizer会修改#NAME token解析的行为 - 允许如CSS那样使用<code>-</code>来分隔token的名称。</li></ul></dd>
    <dt>push</dt>
    <dd>
      <strong>( tokenizerType</strong>: symbol<strong>, until</strong>: string<strong> </strong>[, <strong>subType</strong>: symbol]<strong> )</strong> : this
      <p>为&quot;island&quot;的不同语法添加(入栈)sub-tokenizer。该规则应用于<code>#markup</code> tokenizer来为&lt;style&gt; 和&lt;script&gt;元素解析内容。</p>
      <ul>
        <li><strong>tokenizerType</strong> - 定义使用的tokenizer类型: <code>#markup</code> 或 <code>#source</code>。</li>
        <li><strong>until</strong> - string, 定义&quot;island&quot;的结束位置, 例如: <code>&lt;/script&gt;&quot;</code>, <code>&quot;&lt;/style&gt;&quot;</code> .当tokenizer返回until指定的<code>#END-OF-ISLAND</code>时结束。</li>
        <li><strong>subType</strong> - 参见上一个函数方法。</li></ul></dd>
    <dt>pop</dt>
    <dd>
      <strong>( )</strong> : this
      <p>移除(出栈)上一个tokenizer。该规则用于响应获取到<code>#END-OF-ISLAND</code> token。</p></dd>
	<dt>token</dt>
    <dd>
      <strong>( )</strong> : symbol
      <p>解析输入，并且返回token类型:</p>
      <ul>
        <li><strong>#markup</strong> tokenizer的Token类型有:</li>
        <ul>
          <li><strong>#TAG-START</strong> -  标签(tag)的起始, 如解析到<code>&lt;div</code>时;</li>
          <li><strong>#TAG-HEAD-END</strong> - 标签(tag)头的结束, 如当<code>&lt;div id=&quot;some&quot;&gt;</code>解析完成后;</li>
          <li><strong>#TAG-EMPTY-END</strong> - 空标签结束, 如当<code>&lt;div id=&quot;some&quot; /&gt;</code>解析完成后;</li>
          <li><strong>#TAG-END</strong> - 标签(tag)的结束, 如解析到<code>&lt;/div&gt;</code>时; </li>
          <li><strong>#TAG-ATTR</strong> - 当解析到标签头中的属性名称/值时;</li>
          <li><strong>#TEXT</strong> - 当解析到文本时, tokenizer.value为文本内容;</li>
          <li><strong>#COMMENT</strong> - 当解析到注释时, tokenizer.value为注释内容;</li>
          <li><strong>#CDATA</strong> - 当解析到CDATA SGML节时;</li>
          <li><strong>#PI</strong> - 当解析到SGML处理指令时;</li>
          <li><strong>#DOCTYPE</strong> - 当解析到doctype声明时;</li>
          <li><strong>#ENTITY</strong> - 当HTML/XML实体解析后, tokenizer.value为实体的文本内容;</li>
          <li><strong>#ERROR</strong> - 当发生HTML/XML基础语法错误时。</li></ul>
        <li><strong>#source </strong>特有的token类型:</li>
        <ul>
          <li><strong>#NUMBER</strong> - 解析到数值: 123, 456.09, 0xFF, 等.</li>
          <li><strong>#NUMBER-UNIT</strong> - 解析到包含单位指示器的数字: 100px, 400ms, 等.</li>
          <li><strong>#STRING</strong> - 解析到字符串, 目前仅为&quot;string&quot; 或'string'。</li>
          <li><strong>#NAME</strong> - 解析到name token - 一个字符串序列，它看起来像关键字或变量名。</li>
          <li><strong>#COMMENT</strong> - 解析到注释, 单行注释<code>//</code> &nbsp; 或 多行注释<code>/* ... */</code> .</li>
          <li><strong>#OPERATOR</strong> - 解析到&quot;操作符&quot; 如: <code>:!%+-/*;</code> ,等。</li>
          <li><strong>#O-PAREN</strong> 和 <strong>#C-PAREN</strong> - 当遇到<code>(</code> 或 <code>)</code> 时。</li>
          <li><strong>#ERROR</strong> - 基础语法错误，例如未关闭的字符串。</li>
          <li><strong>#END-OF-ISLAND</strong> - 当被压栈的tokeinizer获取到<em>until </em>参数指定的字符序列时。</li></ul></ul></dd>
    <dt>elementType</dt>
		<dd>( tag: string ) : (elementType, contentModelType, parsingType)
      <p>这个静态方法返回sciter默认已知的HTML标记元素类型。</p>
			<p><i>elementType</i>是以下值之一:</p>	
			<pre v-pre><code>const UNKNOWN_TAG = 0;      // 未知 
const INLINE_BLOCK_TAG = 1; // &lt;img&gt;, &lt;input&gt; ...
const BLOCK_TAG = 2;        // &lt;div&gt;,&lt;ul&gt;,&lt;p&gt; ... 
const INLINE_TAG = 3;       // &lt;span&gt;,&lt;b&gt;,&lt;strong&gt; ...
const TABLE_TAG = 4;        // &lt;table&gt;
const TABLE_BODY_TAG = 5;   // &lt;thead&gt;,&lt;tbody&gt;,&lt;tfoot&gt;
const TABLE_ROW_TAG = 6;    // &lt;tr&gt;
const TABLE_CELL_TAG = 7;   // &lt;td&gt;,&lt;th&gt;
const INFO_TAG = 8;         // &lt;link&gt;,&lt;style&gt;,&lt;head&gt; ...  
</code></pre>
      <p><i>contentModelType</i>描述该元素内蒙被允许存在的内容类型:</p>
			<pre v-pre><code>const CMODEL_BLOCKS = 0;      // 流元素 - 块和内联元素: &lt;div&gt;
const CMODEL_INLINES = 1;     // 段落元素 - inlines: &lt;p&gt;
const CMODEL_TRANSPARENT = 2; // &lt;del&gt;, &lt;a&gt;, etc. 
const CMODEL_TEXT = 3;        // 仅文本: &lt;title&gt; 
const CMODEL_TABLE = 4;       // 仅表格组件元素
</code></pre>
      <p><i>parsingType</i> 描述HTML解析结果:</p>
			<pre v-pre><code>const PMODEL_NORMAL = 0;  // 正常的头/为: &lt;div&gt;&lt;/div&gt; ...
const PMODEL_NO_TAIL = 1; // 没有尾: &lt;img&gt;, &lt;br&gt;, &lt;hr&gt; ...
const PMODEL_CDATA = 2;   // 头/尾, 已知包含CDATA: &lt;script&gt;,&lt;style&gt;,...
</code></pre></dd></dl>