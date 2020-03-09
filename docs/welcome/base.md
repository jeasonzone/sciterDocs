# Sciter 架构

Sciter没有使用<a href="http://www.w3.org/DOM">W3C DOM</a>的DOM模型，因为我们发现它太复杂了(<a href="http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/ecma-script-language-binding.html">76个不同的类</a>，真的！)

## DOM 和 Window 相关类

Sciter在脚本中提供了下面的DOM和Window相关的8个特定类：


- Element - DOM元素对象。所有的HTML元素，包括document(root)、frame、inputs等Sciter中的元素。
<p>Attributes - HTML元素的所有命名属性的集合。</p>
<p>Style - HTML元素的所有被应用的样式属性的集合。</p>
- Image - 图像对象，代表位图图像。你可以使用Graphics的方法在该图像上进行绘图。
- Graphics - 绘图操作的封装对象。你可以在Sciter中任何元素和图像的表面上进行绘制。
- View - 代表Sciter窗口，如主Sciter窗口和对话框。
- Event - 代表当前UI事件。
- Sciter - 一个全局对象，它持有一些Sciter应用程序特有的方法。


## 视图(View)、文档(document)、框架(frame)、根元素

> Sciter中View对象代表最顶层窗口。Sciter.exe程序的主窗口或者X-Sciter.dll沙箱窗口的客户区域就是视图(view)。对话框窗口也有视图对象与其关联。
每个视图都有一个root 属性 - 指被加载的文档的根元素。在Sciter中，根元素是被加载文档的`<html>`元素，没有专门的文档(Document)类。 整个文档实际是一个元素树——`<html>`元素和它的子元素。

### 框架(frame)和框架集(frameset)

框架和框架集也是普通的DOM元素。`<frame>`只有一个子元素——加载到它里面的文档的`<html>`元素。加载到frame中的文档的根元素的parent属性指向这个`<frame>`元素。这看起来很简单吧。

在Sciter中，框架(`<frame>`)可以出现在HTML中的任何部分(不仅是在`<frameset>`)，所以在Sciter中`<frame>`和`<iframe>`没有区别。而且任何块元素(如`<div>`)都可以被当做`<frame>`来使用，只需要为它声明style="behavior:frame"。

Element对象有load方法，该方法允许向内容区(重新)加载任何元素和使用`<frame>`指定的外部源——url或流(包括动态内存流)。所以在Sciter中块元素(如`<div>`)与框架没有多大区别。当你需要在同一屏幕中隔离不同的样式系统或脚本时可以考虑使用框架。

相同的使用方法——`<frameset>`也是一个纯DOM元素，且可以出现在任何可接受块元素的地方。 `<frameset>`不仅可以包含`<frame>`元素，而且也可以任何块元素。因此在Sciter中，`<frameset>`是定义包含splitters的容器的一个便捷途径。而且任何块元素都可以变换成框架集，只需要在它的样式声明中指定behavior:frameset行为。




## 脚本简介

Sciter只能解析tiscript脚本片段和文件。若要在文档中包含脚本块，需要使用下面的元素：

```js
    <script type="text/tiscript" src="脚本文件的url" />
```

或者内联的脚本块:

```js
    <script type="text/tiscript">
        // 脚本语句..
    </script>
```
### 全局名称空间、视图(view)、本身(self)对象

文档会为脚本的执行建立名称空间。所有的类和函数定义方式如下：

```js
    <script type="text/tiscript">
        function foo() { ... }
    </script>
```

这样定义出来的类和函数属于全局文档名称空间。self和view全局变量是这个名称空间的成员。

>self:是当前文档(`<html>`节点)的一个引用。<br>
view:是当前视图对象(通常它是一个Sciter窗口)的一个引用。

### 脚本的执行

Sciter将执行脚本作为文档加载的最后一步——在</html>标签解析完成后。所以当脚本执行时，DOM已经建立好，脚本可以直接引用它。
引擎中脚本的执行有三个主要步骤：
- 执行脚本本身包含的类和行为；
- 执行在CSS中使用prototype:somebehavior;设置了的元素行为；
- 执行self.ready()引用的方法(如果它在脚本中声明了的话)。

当文档需要从视图中卸载(如Sciter窗口从用户那接收到关闭窗口的请求)时, 引擎会调用self.closing()方法(如果它在脚本中声明了的话)。如果该方法返回false，则终止卸载。使用这种方式可以拦截文档的卸载。