# image-map特性

image-map特性为CSS提供了以下功能:
* 支持所谓的CSS精灵(css精灵)，是一种网页图片应用处理方式。它允许你将一个页面涉及到的所有零星图片都包含到一张大图中去。
* 支持使用一个逻辑名称表示在不同的屏幕分辨率不同大小的多个图像。

image-map特性使用 @image-map 的 at-规则 定义它自己的映射关系，使用image-map()函数来指定url(...)，这里的url指向一张图片。

## @image-map at-规则

@image-map规则包含关键字"@image-map", 后面跟着一个指定的图像映射表的名称标识(将在image-map(name, ...)函数中引用):

```css
@image-map <name> {
   src: <原图片列表>;
   cells: <列数> <行数>;
   items: <项列表>;
}
```

其中:
* `<name>`是一个有效的CSS标识符 - 映射表的名称。
* src既可以是一个url(...)，也可以是以逗号分隔的url() NNdpi对，如: url(x1.png) 100dpi, url(x2.png) 200dpi, url(jumbo.png)。
如果屏幕分辨率小于或等于定义的某一对中的URL的DPI值，则将会使用这一对中URL指定的图片来渲染图像映射表。列表中的最后一个元素可以不包含DPI值——它将作为在屏幕DPI大于列表中其他对的值时默认采用图片。
* cells是一个正数对——第一个是列数，第二个是行数。src指定的图片将会使用这个列数和行数来分隔，并且每一个(或每一组)单元格可以有一个由items属性定义的名称与它相关联。
* items是一个以逗号分隔的列表，它定义里图片中的项，每一项的定义可以为:
    1.`<name>` - 只是一个节名称, 这个名称将会赋值到序列中的下一个单元格。单元格以 先列后行 的顺序排列，第一个(第一行最左边)的单元格序号为1。
    2.`<name>` `<number>` - 节名称和单元格序号(一个从1到单元格总数的正数)。序列中下一个数字将会设置到下一个单元格。
    3.`<name>` <column:number> <row:number> - 在column/row位置的单元格对应的节名称，序列中下一个数字将会对应到下一个单元格。
    4.`<name>` <column:number> <row:number> <columns:number> <rows:number> - 在column/row位置起始，跨越columns列和rows行的矩形单元格范围的节名词，序列中下一个数字不会改变。  

@image-map声明中，Cells 和items属性是可选参数。如果它们被省略，则整个图像映射表将只有一个元素，即这张完整图片。

## image-map()函数

image-map()函数定义使用的图像节点，它可以放置在CSS中任何需要该图片的地方。

有两种image-map函数的使用方法:
* image-map(`<image-map:name>`) - 基于当前屏幕DPI设置，使用@image-map中src属性声明中的一张图像。
* image-map(`<image-map:name>`, `<item:name>`) - 使用图像映射表中一个命名项作为一张图片。

如果没有这个image-map，或者不包含这个项名称，将什么也不做。

## 示例:

### 1. 类工具条场景

下面是一个image-map声明:

<pre v-pre><code>
@image-map toolbar-icons 
{
  src:url(rttb.png);
  cells:15 2; /* 15 列, 2 行 */
  /* 项逻辑名称, 参见toolbar-icons.png */ 
  items: ulist, olist, unindent, indent, picture, table, link;
}</code></pre>

使用方法:

<pre v-pre><code>
.toolbar > button.ulist    { background-image:image-map(toolbar-icons,ulist); } 
.toolbar > button.olist    { background-image:image-map(toolbar-icons,olist); } 
.toolbar > button.unindent { background-image:image-map(toolbar-icons,unindent); } 
.toolbar > button.indent   { background-image:image-map(toolbar-icons,indent); } 
.toolbar > button.picture  { background-image:image-map(toolbar-icons,picture); } 
.toolbar > button.table    { background-image:image-map(toolbar-icons,table); } </code></pre>

### 2. DPI-识别 图像映射表

为小于或等于100DPI的屏幕准备一张star-1x.png的图像映射表：

<pre v-pre><code>
 @image-map dpi-aware {
      src: url(star-1x.png) 100dpi,
           url(star-2x.png) ;
    }</code></pre>

    使用方法：

  <pre v-pre><code>
 #star {
      size:180px;
      background: no-repeat 50% 50% image-map(dpi-aware); /* 这里即可能是star-1x.png，也可能是star-2x.png */   
      border:1px solid;  
    }</code></pre> 