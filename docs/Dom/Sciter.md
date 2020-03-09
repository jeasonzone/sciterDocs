# Sciter对象

<p>代表当前Sciter应用程序的实例。</p>
  <dl>
    <h2>常量</h2>
    <dt>VERSION</dt>
    <dd>Sciter的版本，整数。高位的wrod值时版本号，低位的word是子版本号。</dd>
    <dt>REVISION</dt>
    <dd>Sciter的修订号，整数。高位的wrod值时修订号，低位的word是连续的构建号。</dd>
    <dt>LICENSEE</dt>
    <dd>string, Sciter的组织/个人证书名称。</dd>
    <h2>方法</h2>
    <dt>this</dt>
    <dd><strong>N/A, </strong>目前不可用。</dd>
    <dt>userName</dt>
    <dd>
      <div><strong>()</strong> returns: <em>string</em></div>
      <p>返回字符串 - 这个运行的Sciter实例的操作系统登录用户名。</p></dd>
    <dt>machineName</dt>
    <dd>
      <div><strong>(</strong>[<strong>full</strong>]<strong>) </strong>returns: <em>string</em></div>
      <p>返回这个运行的Sciter实例的机器名。如果提供了<em>full</em>参数且为<em>true</em>，则这个函数返回这个机器的完全限定的网络域名。</p></dd>
    <dt>launch</dt>
    <dd>
      <div><strong>( filename</strong>: string<strong> ) </strong>returns: <em>true/false</em></div>
      <p>启动这个机器上另一个应用程序。<em>Filename</em>是应用程序的文件名，或要打开的文档。</p></dd></dl>