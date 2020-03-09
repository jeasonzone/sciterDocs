# popup-position属性

popup-position属性允许显示定义弹出元素在其锚定元素(弹出元素的拥有者)的弹出位置。

popup-position属性接受以下值:

* popup-position: default; - 默认位置(行为指定)。
* popup-position: inherit; - 从它的父元素继承。
* popup-position: `<popup-reference-point>` `<anchor-reference-point>`; - 明确指定弹出位置。

其中:

`<popup-reference-point>`和`<anchor-reference-point>`可以使用以下枚举值:

* top-left
* top-center
* top-right
* middle-left
* middle-center
* middle-right
* bottom-left
* bottom-center
* bottom-right

示例，下面的声明:

<pre v-pre><code>
select > popup {
  popup-position: top-right bottom-right;

}
</code></pre>

将弹出元素的右上角放置在锚点元素(这是是select元素本身)的右下角。