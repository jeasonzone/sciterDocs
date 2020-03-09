## IAccessible和UI自动测试

<h1>IAccessible和UI自动测试</h1>
  <p>Sciter3实现了与传统浏览器兼容的IAccessible接口，所以基于IAccessible的UI自动化工具对Sciter也是有效的。</p>
  <p>为了简化UI测试脚本，进行了下面这些扩展:</p>
  <dl>
    <dt><code>HRESULT IAccessible::get_accChild(VARIANT varChild, IDispatch **ppdispChild);</code></dt>
    <dd><i>varChild</i>参数可以通过<code>VARIANT(VT_BSTR,str)</code>接受字符串。这个字符串被解释层一个选择器，如果找到了匹配的元素，则<code>ppdispChild</code>参数将返回该元素的IAccessible的封装对象。这个方法等价于脚本中的Element.select(selector)方法。</dd>
    <dt><code>HRESULT IAccessible::get_accValue(VARIANT varChild, BSTR *pszValue);</code></dt>
    <dd>如果<code>varChild</code>参数时一个负数值(VT_I4)，则它被解释成一个属性的索引，这个方法返回对应属性的值。-1-第一个属性、-2-第二个属性等等。如果<code>varChild</code>参数是一个字符串(VT_BSTR)，则它被解释成一个属性的名称，该方法返回对应属性的值。</dd>
    <dt><code>HRESULT IAccessible::get_accName(VARIANT varChild, BSTR *pszValue);</code></dt>
    <dd>如果<code>varChild</code>参数时一个负数值(VT_I4)，则它被解释成一个属性的索引，这个方法返回对应属性的名称。-1-第一个属性、-2-第二个属性等等。</dd>
    <dt><code>HRESULT IAccessible::get_accState( VARIANT varChild, VARIANT *pvarState);</code></dt>
    <dd>如果<code>varChild</code>参数时-1(VT_I4)，则该方法返回元素上定义的属性数量，值为<code>VARIANT(VT_I4,nAttributes)</code>。</dd></dl>
  <p>标准参数值和其他IAccessible方法如何工作请阅读定义的IAccessible文档。 </p>
  <p></p>