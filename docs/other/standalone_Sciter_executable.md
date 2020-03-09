# scapp.exe

<div class="article-header">
    <h1 class="article-title">scapp.exe &#8211; 一个Sciter单文件可执行程序</h1>
  </div>
  <div class="article-content">
    <p>SDK中添加了一个scapp.exe。</p>
    <p>这个ScApp是一个静态链接了Sciter，不依赖额外模块的可执行程序。</p>
    <p>scapp.exe可以不指定参数运行，也可以指定一个扩展名为<code>.htm</code>、<code>.tis</code>、<code>.scapp</code>的文件名参数:</p>
    <pre><code>> scapp.exe</code></pre>
    <p>或</p>
    <pre><code>> scapp.exe tetris.scapp</code></pre>
    <p>如果启动时未指定参数，则它会尝试在当前目录下寻找<code>main.htm</code>、<code>main.tis</code>或<code>main.scapp</code>文件。</p>
    <p>如果指定了.htm[l]文件，则将创建Sciter窗口，并加载这个htm[l]文件。</p>
    <p>.scapp文件是一个在根目录下包含/main.tis的zip文件。这个main.tis文件中需要有创建窗口和调用<code>Sciter.run();</code>的代码 &#8211; GUI消息泵循环:</p>
    <pre><code>  // create first window, it may call Sciter.requestQuit(0) to exit from the loop below
  var window = View.window { ... };
  // run message pump loop of the application
  return Sciter.run(); 
</code></pre>
    <p>本质上，它和tiscript.exe使用同样的方式运行脚本。</p>
  </div>