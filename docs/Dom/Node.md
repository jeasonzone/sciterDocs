# 节点(Node)对象

<p>代表非元素DOM节点：文本 或 注释。</p>
  <dl>
    <h2>属性</h2>
    <dt>parent</dt>
    <dd><font color="#999999">只读 - </font><em>Element</em>, 节点的父元素。如果该节点未连接任何元素则返回<em>null</em>。</dd>
    <dt>nodeIndex</dt>
    <dd><font color="#999999">只读</font> - Integer, 该节点在父节点容器中的索引位置。</dd>
    <dt>nextNode</dt>
    <dd><font color="#999999">只读 - </font><em>Element or Node</em>, 该节点的下一个兄弟节点。如果该节点是最后一个，则返回<em>null</em>。</dd>
    <dt>priorNode</dt>
    <dd><font color="#999999">只读</font> - <em>Element or Node</em>, 该节点的上一个兄弟节点。如果该节点是第一个，则返回<em>null</em>。</dd>
    <dt>text</dt>
    <dd><font color="#999999">读写</font> - <em>String</em>, 该节点的文本。</dd>
    <dt>isElement</dt>
    <dd><font color="#999999">只读</font> - 如果该节点是一个元素，则返回<em>true</em>，否则返回<em>false</em>。</dd>
    <dt>isText</dt>
    <dd><font color="#999999">只读</font> - 如果该节点是一个文本节点，则返回<em>true</em>。</dd>
    <dt>isComment</dt>
    <dd><font color="#999999">只读</font> - 如果该节点是一个注释，则返回<em>true</em>。</dd>
    <h2>方法</h2>
    <dt>createText</dt>
    <dd>
      <div><strong>(text: string)</strong> : <em>Node</em></div>
      <p>创建一个文本DOM节点。</p></dd>
    <dt>createComment</dt>
    <dd>
      <div><strong>(text: string)</strong> : <em>Node</em></div>
      <p>创建一个注释DOM节点。</p></dd>
    <dt>createElement</dt>
    <dd>
      <div><strong>(tagname:symbol | string [, attributes: object] [, text:string])</strong> : <em>Elemen</em>t</div>
      <p>创建一个元素节点。等价于<code>new Element(...)</code>。</p></dd>
    <dt>toString</dt>
    <dd>
      <div><strong>()</strong> : <em>string</em></div>
      <p>返回节点的文本表示形式的字符串。</p></dd>
    <dt>clone</dt>
    <dd>
      <div><strong>() </strong>:<em>Node</em></div>
      <p>返回一个该节点的拷贝。新节点不与DOM连接。</p></dd>
    <dt>insertNodeBefore</dt>
    <dd>
      <div><strong>( node: Node)</strong></div>
      <p>将node节点插入到DOM中该元素之前。</p></dd>
    <dt>insertNodeAfter</dt>
    <dd>
      <div><strong>( node: Node)</strong></div>
      <p>将node节点插入到DOM中该元素之后。</p></dd>
    <dt>detach</dt>
    <dd>
      <div><strong>( ) </strong>: Node</div>
      <p>从它的父节点容器中移除该节点。调用该方法后，该节点的<em>parent</em>将会变成<em>null</em>。</p></dd>
    <dt>remove</dt>
    <dd>
      <div><strong>( ) </strong>: Element</div>
      <p>从它的父节点容器中移除该节点。调用该方法后，该节点的<em>parent</em>将会变成<em>null</em>。</p></dd>
    <dt>commonParent</dt>
		<dd>( other: Node ) : Element<p>返回this与other节点的公共父节点。</p></dd></dl>