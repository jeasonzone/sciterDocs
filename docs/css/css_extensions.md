# CSS常量

## h-smile对标准CSS的扩展

### @const规则

@const</EM>规则可以定义一些命名常量，以便在接下来的样式声明中将这些常量作为样式的属性值。<BR />const常量声明示例(CSS+):

```css
/* 常量的声明: */
@const BASE_COLOR: #00FF00;
/* 在样式声明中使用常量: */
#myelement { border: 1px solid @BASE_COLOR; }
```

声明的代码中，第一行定义了一个BASE_COLOR常量，在第二行中使用该常量作为一个样式属性的值。

@const规则使用下面的语句:

```css
@constname [,name1 [,name2 ... ]] :values ;
```

':'号后面的值列表将会赋值到':'号左边的常量上。<EM>values</EM>是一个CSS可接受的属性值序列。它可以是单个值(如上面的#00FF00)，也可以是一个定义复合属性(短格式)的值集合。例如，下面定义了一个常量，它是background属性的一个值集。
        
```css
@const MY_BACKGROUND: yelllow repeat url(hatch.png);
#myelement { background: @MY_BACKGROUND; }
```

常量的插入点的标记方法：在'@'字符后边跟着用@const声明的对应常量名称。

@const的作用域:

* @const声明是全局的。常量声明后，在一个文件中是可见的，并且可以在所有后续css文件和文档中声明使用。
* @const声明使用先来先服务规则。一旦定义了常量就不能被覆盖。
* 多次定义相同的常量不是一个错误，只是只有第一个声明的常量才能被使用。

@const定义的示例请参考htmlayout和Sciter SDK中的.../css-plus/constants.htm文件。