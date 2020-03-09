(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{375:function(v,_,e){"use strict";e.r(_);var t=e(28),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"图像-image-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图像-image-对象"}},[v._v("#")]),v._v(" 图像(Image)对象")]),v._v(" "),e("p",[v._v("图像(图片)。")]),v._v(" "),e("dl",[e("h2",[v._v("常量")]),v._v(" "),e("dt"),v._v(" "),e("dd",[v._v("N/A")]),v._v(" "),e("h2",[v._v("属性")]),v._v(" "),e("dt",[v._v("url")]),v._v(" "),e("dd",[e("strong",[v._v("- ")]),e("em",[v._v("string")]),v._v(", 该图像的来源url。")]),v._v(" "),e("dt",[v._v("width")]),v._v(" "),e("dd",[v._v("- "),e("em",[v._v("integer")]),v._v(", pixels,图像的宽度。只读属性。")]),v._v(" "),e("dt",[v._v("height")]),v._v(" "),e("dd",[v._v("- "),e("em",[v._v("integer")]),v._v(", pixels, 图像的高度。只读属性。")]),v._v(" "),e("h2",[v._v("方法")]),v._v(" "),e("dt",[v._v("this")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(  elementWidth")]),v._v(":"),e("em",[v._v("integer")]),v._v(", "),e("strong",[v._v("elementHeight")]),v._v(":"),e("em",[v._v("integer,")]),e("strong",[v._v(" [imageWidth")]),v._v(":"),e("em",[v._v("integer")]),v._v(", "),e("strong",[v._v("imageHeight")]),v._v(":"),e("em",[v._v("integer")]),v._v("] [, "),e("strong",[v._v("clearBy")]),v._v(": color], "),e("strong",[v._v("elem")]),v._v(": Element"),e("strong",[v._v("  )")]),v._v("  或者")]),v._v(" "),e("div",[e("strong",[v._v("( imageWidth")]),v._v(":"),e("em",[v._v("integer")]),v._v(", "),e("strong",[v._v("imageHeight")]),v._v(":"),e("em",[v._v("integer")]),v._v(" [, "),e("strong",[v._v("clearBy")]),v._v(": color], "),e("strong",[v._v("renderer")]),v._v(": function"),e("strong",[v._v("  )")])]),v._v(" "),e("p",[v._v("第一种格式的构造方法创建一个新的Image对象并且按照指定的elementWidth/Height渲染elem到它上。如果提供了imageWidth/Height参数，则函数将会尝试缩放元素到该指定宽高盒中。")]),v._v(" "),e("p",[v._v("第二种格式的构造方法创建一个新的Image对象并且调用"),e("code",[v._v("function renderer(gfx:")]),e("a",{attrs:{href:"Graphics.htm"}},[e("code",[v._v("Graphics")])]),e("code",[v._v(")")]),v._v("函数，该函数将该图像的边界绘图对象作为函数的参数。")]),v._v(" "),e("p",[e("strong",[v._v("clearBy")]),v._v("可选参数定义位图的初始化颜色。默认的图像初始化为argb(0,0,0,0)颜色。")])]),v._v(" "),e("dt",[v._v("destroy")]),v._v(" "),e("dd",[e("div",[v._v("()")]),v._v(" "),e("p",[v._v("销毁底层的本地位图。该方法用于在它不在需要时强制Image对象释放它的位图(可能是相当大的)。")])]),v._v(" "),e("dt",[v._v("toBytes")]),v._v(" "),e("dd",[e("div",[v._v("([ "),e("b",[v._v("packaging")]),v._v(": #png | #jpeg | #webp | #raw] [, "),e("strong",[v._v("compressionLevel")]),v._v(":integer]) : "),e("a",{attrs:{href:"../script/Bytes.htm"}},[v._v("Bytes")])]),v._v(" "),e("p",[v._v("保存图像的图像的内容为一个可被使用的字节向量，比如可以上传到服务器上。")]),v._v(" "),e("p",[e("em",[v._v("compressionLevel")]),v._v("是10..100中的一个值  - JPEG/WebP压缩层级。如果"),e("i",[v._v("compressionLevel")]),v._v("被省略或者为0并且未指定packaging参数，则该图像会保存为PNG编码。")])]),v._v(" "),e("dt",[v._v("fromBytes")]),v._v(" "),e("dd",[e("div",[v._v("( bytes : "),e("a",{attrs:{href:"../script/Bytes.htm"}},[v._v("Bytes")]),v._v(" ) : Image")]),v._v(" "),e("p",[v._v("静态方法, 从字节流中构建图像。bytes可以包含任何支持的图像格式: PNG、JPEG等。")])]),v._v(" "),e("dt",[v._v("size")]),v._v(" "),e("dd",[e("div",[v._v("( )")]),v._v(" "),e("p",[v._v("该方法返回宽度、高度对，使用示例:"),e("br"),e("code",[v._v("var (w,h) = img.size();")])])]),v._v(" "),e("dt",[v._v("colorAt")]),v._v(" "),e("dd",[e("div",[v._v("( "),e("strong",[v._v("x")]),v._v(": integer, "),e("strong",[v._v("y")]),v._v(": integer [, "),e("strong",[v._v("c")]),v._v(": color] ) : color")]),v._v(" "),e("p",[v._v("该方法返回图像在x,y点的像素颜色。如果"),e("em",[v._v("c")]),v._v("参数提供了，则会将x,y点的像素颜色替换为c颜色。")])]),v._v(" "),e("dt",[v._v("alphaMask")]),v._v(" "),e("dd",[e("div",[v._v("( "),e("strong",[v._v("mask")]),v._v(": Image [, "),e("strong",[v._v("#luminance")]),v._v(" | "),e("strong",[v._v("#r")]),v._v(" | "),e("strong",[v._v("#g")]),v._v(" | "),e("strong",[v._v("#b")]),v._v(" | "),e("strong",[v._v("#a")]),v._v(" ] )")]),v._v(" "),e("p",[v._v("该方法允许从其他图像设置该图像的alpha通道。默认情况下，第二个参数不提供。#luminance - 使用掩码图像的亮度值作为该图像对应位置像素的alpha值。 #r、#g、#b、#a - 使用掩码图像的红、绿、蓝或alpha通道值作为该图像的alpha值。")])]),v._v(" "),e("dt",[v._v("compose")]),v._v(" "),e("dd",[e("div",[v._v("( "),e("strong",[v._v("src")]),v._v(": Image , compositionOp, [dstX,dstY, [srcX,srcY,srcW, srcH ]]] ) : this image")]),v._v(" "),e("p",[v._v("这个方法可以合并两个images: this (dst) 和 src Image。")]),v._v(" "),e("p",[v._v("compositionOp是以下可选的合并操作: #src-over, #dst-over, #src-in, #dst-in, #src-out, #dst-out, #src-atop, #dst-atop, #xor, #copy。")])]),v._v(" "),e("dt",[v._v("update")]),v._v(" "),e("dd",[e("div",[v._v("( "),e("strong",[v._v("renderer")]),v._v(": function [, "),e("strong",[v._v("clearBy")]),v._v(": color ])")]),v._v(" "),e("p",[v._v("这个方法允许在一个已存在image上做渲染操作，通过"),e("code",[v._v("function renderer(gfx:")]),e("a",{attrs:{href:"Graphics.htm"}},[e("code",[v._v("Graphics")])]),e("code",[v._v(")")]),v._v("回调函数的graphics对象参数来实现渲染。如果提供了"),e("em",[v._v("clearBy")]),v._v("参数，且是一个颜色值，则在渲染前将使用该颜色擦除图像。")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);