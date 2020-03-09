# CSS变量

我正在添加支持CSS变量。对于Sciter,这是一个非常不错的功能，它与CSS Variables Working Draft中的变量定义相似但语法有点不同:
变量的声明:

```css
body {
   var(foo): #f00;       /* 声明一个名为"foo"的变量，并定义了它的默认值 */
   color: var(foo,#000); /* 使用这个变量var(变量名, 变量不存在时的默认值) */
}
```

变量是可以继承的，所以`<body>`中的所有子元素都可以使用这个变量:

```css
div {
   background-color: var(foo,#00f);
   size:200dip;
}
```

注意，变量包含两部分内容: 变量的名称，已经等变量未定义时的默认值。

在运行期，脚本也可可以调用DOM API来获取/设置这些CSS变量:

```css
$(body).style.setVariable("foo", color(0,255,0)); size:200dip;
```

在脚本中设置后，所有在样式中使用这个变量的元素都会采用新的颜色。