(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{258:function(v,_,e){"use strict";e.r(_);var t=e(28),n=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"视图-view-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视图-view-对象"}},[v._v("#")]),v._v(" 视图(View)对象")]),v._v(" "),e("p",[v._v("代表该脚本执行的所在窗口。")]),v._v(" "),e("p",[e("strong",[v._v("view")]),v._v(" - 当前的视图对象(或运行脚本)通过使用全局的"),e("em",[v._v("view")]),v._v("变量。")]),v._v(" "),e("dl",[e("dt",[v._v("WINDOW_MINIMIZED"),e("br"),v._v("WINDOW_MAXIMIZED"),e("br"),v._v("WINDOW_HIDDEN"),e("br"),v._v("WINDOW_SHOWN"),e("br"),v._v("WINDOW_FULL_SCREEN")]),v._v(" "),e("dd",[e("em",[v._v("view.state")]),v._v("的值。")]),v._v(" "),e("h2",[v._v("属性")]),v._v(" "),e("dt",[v._v("root")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("只读 - ")]),e("em",[v._v("Element")]),v._v(", 被加载到视图中的文档的根元素。")],1),v._v(" "),e("dt",[v._v("windowState")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("读写")]),v._v(" - 视图的窗口的状态。仅适用于顶层框架窗口(非子窗口)。 可接受的值: "),e("code",[v._v("View.WINDOW_MINIMIZED,")]),v._v(" "),e("code",[v._v("View.WINDOW_MAXIMIZED")]),v._v(", "),e("code",[v._v("View.WINDOW_HIDDEN")]),v._v(", "),e("code",[v._v("View.WINDOW_SHOWN")]),v._v(" 或 "),e("code",[v._v("View.WINDOW_FULL_SCREEN")]),v._v(".")],1),v._v(" "),e("dt",[v._v("focus")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("读写")]),v._v(" - "),e("em",[v._v("Element")]),v._v(", 当前获取输入角度的元素。若要设置一个新元素为聚焦状态，请使用view.focus = el;")],1),v._v(" "),e("dt",[v._v("eventsRoot")]),v._v(" "),e("dd",[e("div",[e("font",{attrs:{color:"#999999"}},[v._v("读写")]),v._v(" - "),e("em",[v._v("Element")]),v._v(', "事件根"元素。用于"模态文档循环"的实现。如果设置了该属性，则所有不是该元素后代的元素的UI事件都会传输到该元素。设置了该元素可能会导致当前聚焦元素改变。下面是一个典型的模态文档循环：')],1),v._v(" "),e("pre",{pre:!0},[e("code",[v._v("\nview."),e("u",[v._v("eventsRoot")]),v._v(" = dlg;\nwhile (dlg.isVisible) view."),e("u",[v._v("doEvent")]),v._v('();\ndlg.style#display = "none";\nview.'),e("u",[v._v("eventsRoot")]),v._v(" = null;\n")])])]),v._v(" "),e("dt",[v._v("screen")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("只读")]),v._v(" - integer, 该窗口位于的屏幕数量。")],1),v._v(" "),e("dt",[v._v("screens")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("只读")]),v._v(" - integer, 系统中的屏幕(监视器)数量。")],1),v._v(" "),e("dt",[v._v("windowCaption")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("读写")]),v._v(" - string, 窗口标题。")],1),v._v(" "),e("dt",[v._v("windowAspectRatio")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("r/w")]),v._v(" - float | null,这个窗口的客户区域的缩放比例;")],1),v._v(" "),e("dt",[v._v("windowResizable")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("r/w")]),v._v(" - boolean, 如果窗口可被用户调整尺寸，则返回"),e("em",[v._v("true")]),v._v(";")],1),v._v(" "),e("dt",[v._v("windowMinimizable")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("r/w")]),v._v(" - boolean, 如果窗口有最小化按钮(可被用户手动最小化)则返回"),e("em",[v._v("true")]),v._v(";")],1),v._v(" "),e("dt",[v._v("windowMaximizable")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("r/w")]),v._v(" - boolean, 如果窗口有最大化按钮(可被用户手动最大化)则返回"),e("em",[v._v("true")]),v._v(";")],1),v._v(" "),e("dt",[v._v("windowTopmost")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("r/w")]),v._v(" - boolean, 如果窗口在最顶层，则返回"),e("em",[v._v("true")]),v._v(";")],1),v._v(" "),e("dt",[v._v("windowMinSize")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("r/w")]),v._v(" - (x:integer,y:integer), 最小窗口尺寸的限制。用户不能使窗口小于这个值;"),e("br"),v._v("\n\t示例: "),e("code",[v._v("view.windowMinSize = (160,100);")])],1),v._v(" "),e("dt",[v._v("windowMaxSize")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("r/w")]),v._v(" - (x:integer,y:integer), 最大窗口尺寸的限制。用户不能使窗口大于这个值;"),e("br"),v._v("\n\t示例: "),e("code",[v._v("view.windowMaxSize = (1600,1000);")])],1),v._v(" "),e("dt",[v._v("windowIcon")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("r/w")]),v._v(" - 窗口图标, 该属性可接受的值: "),e("code",[v._v("null")]),v._v(" - 设置默认图标; "),e("code",[v._v('"url"')]),v._v(" - string, 窗口图标的url; code>Image"),v._v("对象实例.")],1),v._v(" "),e("dt",[v._v("windowBlurbehind")]),v._v(" "),e("dd",[e("font",{attrs:{color:"#999999"}},[v._v("r/w")]),v._v(" - 窗口模糊特效, 该属性接受以下值: "),e("code",[v._v("#auto")]),v._v(" | "),e("code",[v._v("#ultra-dark")]),v._v(" | "),e("code",[v._v("#dark")]),v._v(" | "),e("code",[v._v("#light")]),v._v(" | "),e("code",[v._v("#ultra-light")]),v._v(" | "),e("code",[v._v("#none")]),v._v("。 如果设置了该标志，则window窗口将是半透明的。根文档元素应该使用"),e("code",[v._v("html { background:transparent; }")]),v._v("以便看到窗口后面的桌面。")],1),v._v(" "),e("h2",[v._v("方法")]),v._v(" "),e("dt",[e("strike",[v._v("this")])],1),v._v(" "),e("dd",[v._v("(不可用)")]),v._v(" "),e("dt",[v._v("load")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),e("em",[v._v("url")]),v._v(":string[, "),e("em",[v._v("now")]),v._v(": bool]"),e("strong",[v._v(")")]),v._v(" : true/false")]),v._v(" "),e("p",[v._v("该方法从给定的"),e("em",[v._v("url")]),v._v("加载一个新文档(替换当前这个)到当前视图中。如果"),e("em",[v._v("now")]),v._v("为"),e("em",[v._v("true")]),v._v("则该方法在同步地加载文档——在文档下载并加载到视图后返回。")])]),v._v(" "),e("dt",[v._v("load")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),e("em",[v._v("stream")]),v._v(":Stream"),e("strong",[v._v(")")]),v._v(" : true/false")]),v._v(" "),e("p",[v._v("该方法从给定的内存流"),e("em",[v._v("stream")]),v._v("中加载新的文档(替换当前这个)到当前视图中。")])]),v._v(" "),e("dt",[v._v("box")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),e("em",[v._v("part")]),v._v(" [, "),e("em",[v._v("edge")]),v._v(" [, "),e("em",[v._v("relativeTo")]),v._v(" ]] "),e("strong",[v._v(") ")]),v._v("returns: integer, device pixels")]),v._v(" "),e("p",[v._v("返回视图的边缘的坐标。参数：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("part")]),v._v(" - "),e("strong",[v._v("#left")]),v._v(", "),e("strong",[v._v("#top")]),v._v(", "),e("strong",[v._v("#right")]),v._v(", "),e("strong",[v._v("#bottom")]),v._v(", "),e("strong",[v._v("#width")]),v._v(", "),e("strong",[v._v("#height")]),v._v("中定义的常量标识符之一。定义返回盒(矩形)的哪一部分。#part还可以接受以下常量：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("#rect")]),v._v(" - (x1,y1,x2,y2), "),e("em",[v._v("默认")]),v._v(";")]),v._v(" "),e("li",[e("strong",[v._v("#rectw")]),v._v(" - (x,y,width,height);")]),v._v(" "),e("li",[e("strong",[v._v("#position")]),v._v(" - (x,y)"),e("em",[v._v(",")])]),v._v(" "),e("li",[e("strong",[v._v("#dimension")]),v._v(" - (width,height)"),e("em",[v._v(",")])])]),v._v(" "),e("li",[e("strong",[v._v("edge")]),v._v(", 以下常量之一:")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("#border")]),v._v(" - 边框盒的边缘 - 操作系统窗口边框的边界,")]),v._v(" "),e("li",[e("strong",[v._v("#client")]),v._v(" - 客户区域的边缘"),e("em",[v._v(",")])])]),v._v(" "),e("li",[e("strong",[v._v("relativeTo")]),v._v(", 以下常量之一:")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("#screen")]),v._v(" - 返回现对于屏幕原点的坐标,")]),v._v(" "),e("li",[e("strong",[v._v("#self")]),v._v(", "),e("em",[v._v("默认值")]),v._v(" - 相对于视图客户区域原点的坐标。")])])])]),v._v(" "),e("dt",[v._v("screenBox")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),v._v("["),e("strong",[v._v("screenNo:")]),v._v(" integer,]"),e("em"),e("strong",[v._v("area")]),v._v(" [, "),e("strong",[v._v("part")]),v._v(" ] "),e("strong",[v._v(") ")]),v._v("returns: integer, device pixels")]),v._v(" "),e("p",[v._v("返回在累计桌面空间(cumulative desktop space)上的屏幕(监视器)投影。参数：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("area")]),v._v("，以下值之一：\n          "),e("ul",[e("li",[e("strong",[v._v("#frame ")]),v._v("- 显示器屏幕尺寸, ")]),v._v(" "),e("li",[e("strong",[v._v("#workarea")]),v._v(" - 显示器工作区域(除去任务/菜单栏后的尺寸)。设备像素。")]),v._v(" "),e("li",[e("b",[v._v("#snapshot")]),v._v(" - 返回"),e("i",[v._v("Image")]),v._v(" - 显示器指定部分的截图;")]),v._v(" "),e("li",[e("b",[v._v("#isPrimary")]),v._v(" - 返回"),e("i",[v._v("true")]),v._v(" 当显示器为主显示器时;")]),v._v(" "),e("li",[e("b",[v._v("#device")]),v._v(" - 返回"),e("i",[v._v("string")]),v._v(" - 显示器的名称;")])])]),v._v(" "),e("li",[e("strong",[v._v("part")]),v._v(", 以下值之一:")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("#rect")]),v._v(" - (x1,y1,x2,y2);")]),v._v(" "),e("li",[e("strong",[v._v("#rectw")]),v._v(" - (x,y,width,height), "),e("em",[v._v("默认")]),v._v(";")]),v._v(" "),e("li",[e("strong",[v._v("#position")]),v._v(" - (x,y)"),e("em",[v._v(",")]),v._v(" 屏幕在所有显示器合并的区域内的位置;")]),v._v(" "),e("li",[e("strong",[v._v("#dimension")]),v._v(" - (width,height)"),e("em",[v._v(",屏幕的宽高；")])])]),v._v(" "),e("li",[e("strong",[v._v("screenNo - ")]),v._v("integer, 可选参数。如果提供者提供指定屏幕的度量。如果省略则提供这个窗口的屏幕的度量。")])])]),v._v(" "),e("dt",[v._v("move")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),e("em",[v._v("x")]),v._v(":int, "),e("em",[v._v("y")]),v._v(":int [, "),e("em",[v._v("clientCoordinates")]),v._v(": true | false]"),e("strong",[v._v(" ) ")]),v._v(":void")]),v._v(" "),e("p",[v._v("调整屏幕上的视图(对话框或框架)的窗口位置。该方法仅适用于Sciter。")]),v._v(" "),e("p",[v._v("如果"),e("em",[v._v("clientCoordinates")]),v._v("为"),e("em",[v._v("true")]),v._v("，则x、y被理解成期望的屏幕上客户区域的位置。")])]),v._v(" "),e("dt",[v._v("move")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),e("em",[v._v("x")]),v._v(":int, "),e("em",[v._v("y")]),v._v(":int, "),e("em",[v._v("width")]),v._v(":int, "),e("em",[v._v("height")]),v._v(":int [, "),e("em",[v._v("clientCoordinates")]),v._v(": true | false] "),e("strong",[v._v(" ) ")]),v._v(":void")]),v._v(" "),e("p",[v._v("调整屏幕上的视图(对话框或框架)的窗口位置和尺寸。该方法仅适用于Sciter。")]),v._v(" "),e("p",[v._v("如果"),e("em",[v._v("clientCoordinates")]),v._v("为"),e("em",[v._v("true")]),v._v("，则x、y、"),e("em",[v._v("width")]),v._v("、"),e("em",[v._v("height")]),v._v("被理解成期望的屏幕上客户区域的位置/尺寸。")])]),v._v(" "),e("dt",[v._v("mediaVar")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),e("i",[v._v("name")]),v._v(":string [, "),e("i",[v._v("valueToSet")]),v._v(": any]"),e("strong",[v._v(")")]),v._v(" : value | undefined")]),v._v(" "),e("p",[v._v("返回或设置指定的媒体变量。")])]),v._v(" "),e("dt",[v._v("mediaVars")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),v._v("[ "),e("i",[v._v("newVars")]),v._v(":object]"),e("strong",[v._v(")")]),v._v(" : Object | undefined")]),v._v(" "),e("p",[v._v("如果没有"),e("i",[v._v("newVars")]),v._v("参数，则该方法返回当前视图使用的媒体变量集合。")]),v._v(" "),e("p",[v._v("如果"),e("i",[v._v("newVars")]),v._v("参数是一个对象，则该方法将会根据该对象的属性来更新视图中的媒体变量。")])]),v._v(" "),e("dt",[v._v("selectFile")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),v._v(" "),e("em",[v._v("#save")]),v._v(" | "),e("em",[v._v("#open")]),v._v("| #open-multiple, "),e("em",[v._v("filter")]),v._v(":string , "),e("em",[v._v("ext")]),v._v(": string  [,"),e("em",[v._v("initialPath")]),v._v(":string[, "),e("em",[v._v("dialogCaption")]),v._v(":string]] "),e("strong",[v._v(" ) ")]),v._v(": string | array(string) | null")]),v._v(" "),e("p",[v._v("该方法显示系统的文件选择模态对话框，并且返回选择文件的全名，如果用户选择了取消则返回null。")]),v._v(" "),e("ul",[e("li",[v._v("第一个参数为#save或#open标识符。如果为#save则对话框的标题为"),e("em",[v._v("保存")]),v._v("，如果为#open则对话框的标题为"),e("em",[v._v("打开")]),v._v("。")]),v._v(" "),e("li",[e("em",[v._v("filter")]),v._v("为一个字符串 - 为文件过滤器，它需要兴义一个以'|'字符分隔的文件扩展列表。格式：\"label1|file.ext1|label2|file.ext1|..\" 其中"),e("em",[v._v("label")]),v._v("是该项的显示标签(显示在对话框中的文件类型选择列表中)，file.ext是以';'分隔的文件名列表。")]),v._v(" "),e("li",[e("em",[v._v("ext")]),v._v("是一个字符串 - 默认的文件扩展名，用于用户输入的文件名没有扩展名时。")]),v._v(" "),e("li",[e("em",[v._v("initialPath")]),v._v("是一个字符串 - 默认的初始文件路径，用于设置对话框默认路径。")]),v._v(" "),e("li",[e("em",[v._v("dialogCaption")]),v._v("是一个字符串 - 对话框的标题文字。")])]),v._v(" "),e("div",[v._v("下面的示例会弹出一个对话框来选择一个html文件，并且加载该文件到当前视图。：")]),v._v(" "),e("pre",{pre:!0},[e("code",[v._v("\n"),e("font",{pre:!0,attrs:{color:"#0033cc"}},[v._v("var")]),v._v(" fn = view."),e("strong",[v._v("selectFile")]),v._v("("),e("font",{pre:!0,attrs:{color:"#0033cc"}},[v._v("#open")]),v._v(",\n       "),e("font",{pre:!0,attrs:{color:"#009900"}},[v._v('"HTML Files (*.htm,*.html)|*.HTM;*.HTML|All Files (*.*)|*.*"')]),v._v(" , "),e("font",{pre:!0,attrs:{color:"#009900"}},[v._v('"html"')]),v._v(" );\nif( fn ) view."),e("strong",[v._v("load")]),v._v("(fn);\n")],1)])]),v._v(" "),e("dt",[v._v("selectFolder")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),v._v(" [ "),e("em",[v._v("dialogCaption")]),v._v(":string, ["),e("i",[v._v("defaultFolder")]),v._v(":string]] "),e("strong",[v._v(") ")]),v._v(": string | null")]),v._v(" "),e("p",[v._v("该方法显示系统的目录选择模态对话框，并且返回选择目录的全名，如果用户选择了取消则返回null。")]),v._v(" "),e("ul",[e("li",[e("em",[v._v("dialogCaption")]),v._v("设置选择对话框的标题")]),v._v(" "),e("li",[e("i",[v._v("defaultFolder")]),v._v(" - string, 显示对话框时的默认目录")])]),v._v(" "),e("div",[v._v("注意：在不同的系统中，selectFolder有不同的UI。")])]),v._v(" "),e("dt",[v._v("selectPrinter")]),v._v(" "),e("dd",[v._v("TBD")]),v._v(" "),e("dt",[v._v("dialog")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),e("em",[v._v("url")]),v._v(": string | "),e("em",[v._v("stream")]),v._v(": Stream [, "),e("em",[v._v("parameters")]),v._v(": any [, alignment: int = 5] ] "),e("strong",[v._v("В ) ")]),v._v(": "),e("em",[v._v("undefined")]),v._v(" | 传递给对话框"),e("em",[v._v("close")]),v._v("方法的值。")]),v._v(" "),e("p",[v._v("使用"),e("em",[v._v("url")]),v._v("或内存流"),e("em",[v._v("stream")]),v._v("指定的文档显示一个模态对话框。如果"),e("em",[v._v("parameters")]),v._v("参数指定了，则在对话框内HTML中的脚本可以使用"),e("em",[v._v("view.parameters")]),v._v("变量来访问这些参数。")]),v._v(" "),e("p",[e("em",[v._v("alignment:")]),v._v("1..9 - 窗口相对于屏幕的对齐方式, -1 .. -9 - 相对于父窗口的对齐方式, 请看键盘上的小键盘上数字的含义，例如，5意味的该对话框的中心点将放置在屏幕的居中位置。")])]),v._v(" "),e("dt",[v._v("dialog")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),v._v("creationParams:object"),e("strong",[v._v(" ) ")]),v._v(":"),e("em",[v._v("undefined")]),v._v(" | 传递给对话框"),e("em",[v._v("close")]),v._v("方法的值。")]),v._v(" "),e("p",[v._v("另一种使用一个参数的显示模态对话框的方式。")]),v._v(" "),e("div",[e("em",[v._v("creationParams")]),v._v("参数是一个对象，它可以包含以下字段：")]),v._v(" "),e("ul",[e("li",[e("em",[v._v("url")]),v._v(" - string, 加载到窗口中的文档的url;")]),v._v(" "),e("li",[e("em",[v._v("html")]),v._v(" - string, 加载到窗口中的内容。"),e("em",[v._v("url")]),v._v("或者"),e("em",[v._v("html")]),v._v("必须提供其中之一;")]),v._v(" "),e("li",[e("em",[v._v("x,y, width, height ")]),v._v("- integers, 窗口的尺寸。如果省略则会根据文档的内在尺寸自动计算;")]),v._v(" "),e("li",[e("em",[v._v("client")]),v._v(" - true | false, 如果为true,则上面的x,y, width, height为客户区域(而不是窗口盒)的坐标;")]),v._v(" "),e("li",[e("em",[v._v("parameters")]),v._v(" - object, 传递的参数，它会放到新创建窗口的"),e("em",[v._v("view.parameters")]),v._v("变量中;")]),v._v(" "),e("li",[e("em",[v._v("caption")]),v._v(" - string, 窗口标题;")]),v._v(" "),e("li",[e("em",[v._v("alignment")]),v._v(" - integer, 1..9 - 窗口相对于屏幕的对齐方式, -1 .. -9 - 相对于父窗口。")]),v._v(" "),e("li",[e("em",[v._v("screen")]),v._v(" - integer, 0 .. View.screens - 1, 如"),e("em",[v._v("alignment")]),v._v("是1..9则它决定窗口会在哪个屏幕/监视器上显示，可选参数。")])]),v._v(" "),e("p",[v._v("如果指定了"),e("em",[v._v("x")]),v._v("、"),e("em",[v._v("y")]),v._v("、"),e("em",[v._v("alignment")]),v._v("参数，则x、y定义一个引用点，alignment定义与引用点的相对位置。")])]),v._v(" "),e("dt",[v._v("msgbox")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),e("em",[v._v("type")]),v._v(":symbol,"),e("strong"),e("em",[v._v("text")]),v._v(": string, [ "),e("em",[v._v("title")]),v._v(": string, [ "),e("em",[v._v("buttons")]),v._v(" [, "),e("em",[v._v("onLoad")]),v._v(": function [, "),e("em",[v._v("onClose")]),v._v(": function ]]]] "),e("strong",[v._v(") ")]),v._v(": "),e("em",[v._v("undefined")]),v._v(" | 关闭对话框时的按钮标识符。")]),v._v(" "),e("ul",[e("li",[e("em",[v._v("type")]),v._v(" - symbol, "),e("strong",[v._v("#alert")]),v._v(", "),e("strong",[v._v("#information")]),v._v(", "),e("strong",[v._v("#question")]),v._v(" or "),e("strong",[v._v("#warning")]),v._v("值之一;")]),v._v(" "),e("li",[e("em",[v._v("text")]),v._v(" - string, 纯文本或html;")]),v._v(" "),e("li",[e("em",[v._v("title")]),v._v(" - string, 对话框窗口的标题;")]),v._v(" "),e("li",[e("em",[v._v("buttons")]),v._v(" - 定义按钮数组，以下值之一:")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("#ok")]),v._v(", "),e("strong",[v._v("#cancel")]),v._v(", "),e("strong",[v._v("#abort")]),v._v(", "),e("strong",[v._v("#ignore")]),v._v(", "),e("strong",[v._v("#yes")]),v._v(", "),e("strong",[v._v("#no")]),v._v(" or "),e("strong",[v._v("#close")]),v._v("标签之一, ")]),v._v(" "),e("li",[v._v("类"),e("font",{attrs:{face:"Courier New"}},[v._v('{ id:#somesymbol, text:"Some Text" }')]),v._v("结构的对象,")],1),v._v(" "),e("li",[v._v("上面的标识符或对象的数组;")])]),v._v(" "),e("li",[e("em",[v._v("onClose")]),v._v(" - 签名为"),e("code",[v._v("function(root, id)")]),v._v("，返回"),e("em",[v._v("true")]),v._v("|"),e("em",[v._v("false")]),v._v("。在尝试关闭对话框时调用该函数。 "),e("em",[v._v("id")]),v._v(" - 按下的按钮的id, "),e("em",[v._v("root")]),v._v(" - 对话框中文档的根节点。如果对话框可以关闭则该函数应该返回true。")]),v._v(" "),e("li",[e("em",[v._v("onLoad")]),v._v(" - 函数签名为"),e("code",[v._v("function(root)")]),v._v("。在创建对话框窗口时调用该函数。使用该函数你可以做一些初始化，例如"),e("em",[v._v("text")]),v._v("是一个包含输入框的html，可以填充输入只读的数据。")])]),v._v(" "),e("div",[v._v("示例:")]),v._v(" "),e("ol",[e("li",[e("code",[v._v('view.msgbox(#information, "I am fine!");')]),v._v(" - 将会显示一个简单消息;")]),v._v(" "),e("li",[e("code",[v._v('view.msgbox(#question, "Be or not to be?", "Huh?", '),e("br"),v._v('[ {id:#yes, text:"To be"}, {id:#no, text:"Not to be"} ] );')])]),v._v(" "),e("li",[e("code",[v._v('view.msgbox {type: #question, content: "Be or not to be?", title: "Huh?", buttons: [ {id:#yes, text:"To be"}, {id:#no, text:"Not to be"} ] };')])])])]),v._v(" "),e("dt",[v._v("window")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),v._v("params:object"),e("strong",[v._v(" ) ")]),v._v(":"),e("em",[v._v("View")]),v._v(" - 创建的窗口的视图对象。")]),v._v(" "),e("p",[v._v("创建单独的窗口。")]),v._v(" "),e("div",[e("em",[v._v("params")]),v._v("是一个对象，它可以包含以下字段:")]),v._v(" "),e("ul",[e("li",[e("em",[v._v("type")]),v._v(" - int, 窗口类型，"),e("strong",[v._v("View.FRAME_WINDOW")]),v._v("、 "),e("strong",[v._v("View.TOOL_WINDOW")]),v._v("、"),e("strong",[v._v("View.POPUP_WINDOW")]),v._v("中之一;")]),v._v(" "),e("li",[e("em",[v._v("url")]),v._v(" - string, 加载到该窗口的文档的url;")]),v._v(" "),e("li",[e("em",[v._v("html")]),v._v(" - string, 加载到窗口的内容。"),e("em",[v._v("url")]),v._v("或者"),e("em",[v._v("html")]),v._v("必须提供其中之一;")]),v._v(" "),e("li",[e("em",[v._v("x,y, width, height ")]),v._v("- integers, 窗口的尺寸。如果省略则会根据所给的文档的内在尺寸来自动计算;")]),v._v(" "),e("li",[e("em",[v._v("client")]),v._v(" - true | false, 如果为true,则上面的x,y, width, height为客户区域(而不是窗口盒)的坐标;")]),v._v(" "),e("li",[e("em",[v._v("state")]),v._v(" - integer. 窗口的初始状态，"),e("strong",[v._v("View.WINDOW_SHOWN")]),v._v("、 "),e("strong",[v._v("View.WINDOW_HIDDEN")]),v._v("、"),e("strong",[v._v("View.WINDOW_MINIMIZED")]),v._v("、 "),e("strong",[v._v("View.WINDOW_MAXIMIZED")]),v._v("、"),e("strong",[v._v("View.WINDOW_FULL_SCREEN")]),v._v("其中之一;")]),v._v(" "),e("li",[e("em",[v._v("parameters")]),v._v(" - object, 传递的参数，它会放到新创建窗口的"),e("em",[v._v("view.parameters")]),v._v("变量中;")]),v._v(" "),e("li",[e("em",[v._v("caption")]),v._v(" - string, 窗口标题;")]),v._v(" "),e("li",[e("em",[v._v("alignment")]),v._v(" - integer, 窗口相对于屏幕的位置, -1 .. -9 - 相对于父窗口。")]),v._v(" "),e("li",[e("em",[v._v("screen")]),v._v(" - integer, 0 .. View.screens - 1, 如果"),e("em",[v._v("alignment")]),v._v("是1..9，则该字段决定该窗口显示在哪个屏幕/监视器。可选参数。")])]),v._v(" "),e("p",[v._v("要以脱离(detached)模式打开窗口( 当它的拥有窗口隐藏时，它依然停留在屏幕上 )，请调用这个方法的静态版本 - 使用"),e("code",[v._v("View")]),v._v("类，而不是"),e("code",[v._v("view")]),v._v("实例: "),e("code",[v._v("View.window(...)")]),v._v("。")])]),v._v(" "),e("dt",[v._v("close")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),v._v("["),e("em",[v._v("retval")]),v._v(": any]"),e("strong",[v._v(" ) ")]),v._v(": undefined")]),v._v(" "),e("p",[v._v("关闭当前视图(或对话框[如果它是对话框窗口])。 "),e("em",[v._v("retval")]),v._v("可以是任何脚本对象-"),e("em",[v._v("dialog")]),v._v("()函数的返回值。")])]),v._v(" "),e("dt",[v._v("doEvent")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),v._v("["),e("em",[v._v("#wait")]),v._v(" | "),e("em",[v._v("#nowait")]),v._v(" | "),e("em",[v._v("#all")]),v._v("] | #untilMouseUp"),e("strong",[v._v(" )")]),v._v(" : undefined")]),v._v(" "),e("p",[v._v("将程序控制权交给操作系统。该控制权在操作系统处理完它的事件队列中下一个事件后返回。该方法用于实现模态文档循环。")]),v._v(" "),e("p",[v._v("参数:")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("#wait")]),v._v(" - 等待UI消息队列中的下一个事件，默认行为;")]),v._v(" "),e("li",[e("strong",[v._v("#nowait")]),v._v(" - 如果消息队列中有事件则处理它，否则立即返回;")]),v._v(" "),e("li",[e("strong",[v._v("#all")]),v._v(" - 执行消息队列中所有挂起的消息。如果没有消息则立即返回;")]),v._v(" "),e("li",[e("strong",[v._v("#untilMouseUp")]),v._v(' - "短路", 执行和分派消息直到接收到MOUSE_UP事件，用于拖动的情况下;')])])]),v._v(" "),e("dt",[v._v("update")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("()")]),v._v(" : undefined")]),v._v(" "),e("p",[v._v("执行视图中挂起的所有修改，并且渲染到屏幕上。在调用该方法后，所有DOM元素的盒坐标是是有效的。")]),v._v(" "),e("p",[v._v("该方法用于当你需要提交所有的对DOM的更新时。示例:")]),v._v(" "),e("pre",{pre:!0},[e("code",[v._v("\nfunction retrieveDataFromDB(recordSet)\n{\n  while(!recordSet.EOF())\n  {\n    grid.appendRow(recordSet.row);\n    if(++numRowsAdded > 10)\n    {\n      numRowsAdded = 0;\n      view.update();\n    }\n  }\n}\n")])])]),v._v(" "),e("dt",[v._v("clipboard")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),e("em",[v._v("callback")]),v._v(": function"),e("strong",[v._v(")")]),v._v(" : undefined")]),v._v(" "),e("p",[v._v("为系统剪切板中的每个数据格式调用"),e("em",[v._v("callback")]),v._v("函数。callback函数的签名:"),e("code",[v._v("function ( ")]),e("em",[e("code",[v._v("dataType")])]),e("code",[v._v(": symbol ) {...}")]),v._v(", dataType是以下标识符之一:")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("#text")]),v._v(" - text/plain, 字符串;")]),v._v(" "),e("li",[e("strong",[v._v("#html")]),v._v(" - text/html, 字符串;")]),v._v(" "),e("li",[e("strong",[v._v("#picture")]),v._v(" - bitmap image, 类型为Image的对象;")]),v._v(" "),e("li",[e("strong",[v._v("#url")]),v._v(" - url or link,  "),e("code",[v._v("{ "),e("em",[v._v("url")]),v._v(": string , "),e("em",[v._v("caption")]),v._v(": string }")]),v._v("结构的对象;")]),v._v(" "),e("li",[e("strong",[v._v("#json")]),v._v(" - JSON data, 对象。这时返回值为整数 - 剪贴板上的序列号。剪贴板缓冲每次改变会修改这个号码。")])])]),v._v(" "),e("dt",[v._v("clipboard")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(#get")]),v._v(", "),e("em",[v._v("dataType")]),v._v(": symbol"),e("strong",[v._v(")")]),v._v(" : string | object | Image;")]),v._v(" "),e("p",[v._v("获取dataType定义的剪切板格式的数据。dataType允许的值请参考上一个方法的定义。")]),v._v(" "),e("p",[v._v("注意: 对于 "),e("strong",[v._v("#html")]),v._v("格式，该函数返回两个值: 源url(如果存在)和HTML数据本身。"),e("br"),v._v("若要获取这两个值，请使用: "),e("code",[v._v("var (url, html) = view.clipboard(#get, #html);")])])]),v._v(" "),e("dt",[v._v("clipboard")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(#put")]),v._v(", data: string | object | Image "),e("strong",[v._v(")")]),v._v(" : undefined;")]),v._v(" "),e("p",[v._v("将数据存储到剪切板。当data是一个对象时，它应该具有以下结构，其中除任何属性外，所有属性都是可选的: ")]),v._v(" "),e("pre",{pre:!0},[e("code",[v._v('{\n   text: "some text",\n   html: "<b>some html</b>",\n   link: { caption: "some text", url: "file://some ..." },\n   file: [ "path1",  "path2", ...],\n   json: someData\n}  ')])]),v._v(" "),e("p",[v._v("请注意："),e("i",[v._v("json")]),v._v("剪切板格式是Sciter独有的。你可以将它在Sciter应用程序之前进行传递。")]),v._v(" "),e("p",[v._v("你可以一次设置多种数据项(比如一起设置"),e("i",[v._v("text")]),v._v("和"),e("i",[v._v("html")]),v._v("格式)。目标程序将会根据当前上下文情况从中选择最适合的格式。")])]),v._v(" "),e("dt",[v._v("focusable")]),v._v(" "),e("dd",[v._v("("),e("b",[v._v("#next | #prior | #first | #last")]),v._v(", ["),e("b",[v._v("from")]),v._v(":Element]) : Element\n    "),e("p",[v._v("该方法返回TAB序列中next/previous/first/last焦点元素, 既可以从"),e("i",[v._v("from")]),v._v("元素，也可以从当前焦点元素开始查找。")])]),v._v(" "),e("dt",[v._v("performDrag")]),v._v(" "),e("dd",[v._v("\n        （("),e("strong",[v._v("element")]),v._v(":Element | "),e("b",[v._v("img")]),v._v(": Image, "),e("b",[v._v("xOffset")]),v._v(": integer, "),e("b",[v._v("yOffset")]),v._v(": integer), "),e("strong",[v._v("data")]),v._v(":Object, ddMode: "),e("strong",[v._v("#any")]),v._v(" | "),e("strong",[v._v("#copy")]),v._v(" | "),e("strong",[v._v("#move")]),v._v(") : "),e("strong",[v._v("null")]),v._v(" | "),e("strong",[v._v("#copy")]),v._v(" | "),e("strong",[v._v("#move")]),v._v(" "),e("p",[v._v("执行系统拖拽操作。")]),v._v(" "),e("p",[e("em",[v._v("element")]),v._v(" 是一个DOM元素，它用于作为一个拖拽图像。")]),v._v(" "),e("p",[e("em",[v._v("data")]),v._v(" 是一个对象，它包含以下属性：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("{text: String}")]),v._v(" - 纯文本字符串;")]),v._v(" "),e("li",[e("code",[v._v("{html: String | Element}")]),v._v(" - html, 可以是一个字符串或指元素的外部HTML(outer HTML);")]),v._v(" "),e("li",[e("code",[v._v("{file: String | [String, String, ...]}")]),v._v(" - 拖拽的单个文件名或文件名列表;")]),v._v(" "),e("li",[e("code",[v._v('{link: String | { caption: "some text", url: "file://some ..." } }')]),v._v(" - 一个url字符串或caption/url对;")]),v._v(" "),e("li",[e("code",[v._v("{json: value}")]),v._v(" - 可以序列化为JSON字符串的任意的值。JSON可以用于在不同的Sciter窗口之间传递数据。")])]),v._v(" "),e("p",[e("em",[v._v("data")]),v._v("对象可以包含多个属性, 目标会根据场景选择不同的数据。")]),v._v(" "),e("p",[e("em",[v._v("ddMode")]),v._v("定义拖拽(drag-n-drop)操作允许的类型:")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("#copy")]),v._v(" - 从源位置拷贝到目标位置;")]),v._v(" "),e("li",[e("strong",[v._v("#move")]),v._v(" - 从源位置移动到目标位置;")]),v._v(" "),e("li",[e("strong",[v._v("#any")]),v._v(" - 即可移动也可拷贝。")])]),v._v(" "),e("p",[e("code",[v._v("performDrag()")]),v._v("是一个阻塞操作 - 该函数在拖拽(drag-n-drop)操作完成或被拒绝时返回。")])]),v._v(" "),e("dt",[v._v("cursorLocation")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),v._v(" "),e("strong",[v._v(")")]),v._v(" : (x:int, y: int)")]),v._v(" "),e("p",[v._v("返回光标相对于视图客户区的位置:"),e("br"),e("code",[v._v("var (x,y) = view.cursorLocation();")])])]),v._v(" "),e("dt",[v._v("on")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),v._v(" "),e("strong",[v._v("nameandns")]),v._v(": string, "),e("strong",[v._v("handler")]),v._v(": function "),e("strong",[v._v(")")]),v._v(" : view")]),v._v(" "),e("p",[v._v("将"),e("em",[v._v("handler")]),v._v("绑定到视图(窗口)上的相关事件上。")]),v._v(" "),e("p",[e("em",[v._v("nameandns")]),v._v(" - "),e("a",{attrs:{href:"#event-names"}},[v._v("事件名称")]),v._v('中的值之一，可以包含任意的名称空间，格式："name.namespace"。 ')])]),v._v(" "),e("dt",[v._v("off")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("(")]),v._v(" "),e("strong",[v._v("eventname")]),v._v(": string | "),e("strong",[v._v("handler")]),v._v(": function "),e("strong",[v._v(")")]),v._v(" : view")]),v._v(" "),e("p",[v._v("根据eventname事件名或handler事件处理器本身来解除事件绑定。")]),v._v(" "),e("p",[v._v('eventname这里可以是"name"、"name.namepsace"、".namepsace"。 示例:')]),v._v(" "),e("pre",{pre:!0},[e("code",[v._v('view.off(".mymodule");')])]),v._v(" "),e("p",[v._v("会解除下面代码定义的所有事件处理器：")]),v._v(" "),e("pre",{pre:!0},[e("code",[v._v('view.on("move.mymodule",foo)\n    .on("size.mymodule",foo);')])])]),v._v(" "),e("dt",[v._v("request")]),v._v(" "),e("dd",[e("div",[e("strong",[v._v("( ")]),e("em",[v._v("params")]),v._v(": object"),e("strong",[v._v(") ")]),v._v(": "),e("em",[v._v("undefined")]),v._v(".")]),v._v(" "),e("p",[v._v("发送HTTP请求。"),e("em",[v._v("params")]),v._v("为请求参数对象，它可以包含以下字段：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("type")]),v._v(" - "),e("em",[v._v("symbol")]),v._v(", HTTP的Action, 可以为: "),e("strong",[v._v("#get")]),v._v("、"),e("strong",[v._v("#post")]),v._v("、"),e("strong",[v._v("#put")]),v._v("、"),e("strong",[v._v("#delete")]),v._v(", 默认: #get ;")]),v._v(" "),e("li",[e("strong",[v._v("url")]),v._v(" - string, url;")]),v._v(" "),e("li",[e("strong",[v._v("protocol")]),v._v(" - "),e("em",[v._v("symbol")]),v._v(", 可以为："),e("strong",[v._v("#basic")]),v._v(", "),e("strong",[v._v("#multipart")]),v._v(" and "),e("strong",[v._v("#json")]),v._v("  ;")]),v._v(" "),e("li",[e("strong",[v._v("params")]),v._v(" - "),e("em",[v._v("object")]),v._v(", HTTP请求参数;")]),v._v(" "),e("li",[e("strong",[v._v("headers")]),v._v(" - "),e("em",[v._v("objec")]),v._v("t, 添加的HTTP请求头;")]),v._v(" "),e("li",[e("strong",[v._v("success")]),v._v(" - "),e("em",[v._v("function(data,status)")]),v._v(", 请求成功时的回调函数;")]),v._v(" "),e("li",[e("strong",[v._v("error")]),v._v(" - "),e("em",[v._v("function(err,status)")]),v._v(", 请求出错时的回调函数;")]),v._v(" "),e("li",[e("strong",[v._v("complete")]),v._v(" - "),e("em",[v._v("function(data or err,status)")]),v._v(", 请求完成(无论成功或失败)时的回调函数;")]),v._v(" "),e("li",[e("strong",[v._v("progress")]),v._v(" - "),e("em",[v._v("function(bytesReceived, totalBytes)")]),v._v(", 在每次接收到数据块时被调用。"),e("em",[v._v("bytesReceived")]),v._v("是一个整数 - 到目前为止接收到的字节数量。"),e("em",[v._v("totalBytes")]),v._v('是一个整数 - 从HTTP的"content-length"字段获取的服务端总大小，如果服务器没有报告它，'),e("em",[v._v("totalBytes")]),v._v("可以为"),e("em",[v._v("undefined")]),v._v("。")]),v._v(" "),e("li",[e("strong",[v._v("toFile - ")]),e("em",[v._v("string")]),v._v(", 响应的保存文件名，该文件名应该包含路径。可用于文件下载。")]),v._v(" "),e("li",[e("strong",[v._v("proxyHost")]),v._v(", "),e("strong",[v._v("proxyPort")]),v._v(" - "),e("em",[v._v("string")]),v._v(", "),e("em",[v._v("integer")]),v._v(".如果定义了这两个参数，则请求将会通过定义的代理主机发送。")]),v._v(" "),e("li",[e("strong",[v._v("output")]),v._v(" - symbol, 值可以是"),e("strong",[v._v("#string")]),v._v(" | "),e("strong",[v._v("#stream")]),v._v(" | "),e("strong",[v._v("#bytes")]),v._v(" | "),e("strong",[v._v("#json")]),v._v("其中之一。如果指定了该参数，则强制报告"),e("em",[v._v("data")]),v._v("为String、Stream、Bytes或任意已解析的JSON的实例。")]),v._v(" "),e("li",[e("b",[v._v("noCache")]),v._v(" - true | false, 如果为"),e("i",[v._v("true")]),v._v("，则请求将不会从缓存中读取，也不会将请求响应结果写到缓存中。")])]),v._v(" "),e("div",[v._v("示例: "),e("u",[v._v("sdk/samples/communication/file-download.htm")]),v._v("和"),e("u",[v._v("sdk/samples/communication/http.tis")])])])]),v._v(" "),e("h2",[v._v("通知事件")]),v._v(" "),e("dl",[e("dt",[v._v("onRequest(rq: "),e("a",{attrs:{href:"Request.htm"}},[v._v("Request")]),v._v(")")]),v._v(" "),e("dd",[v._v("当在view上定义了该方法后，它将在请求执行前被调用。这个处理器可以调用"),e("code",[v._v("rq.fulfill()")]),v._v("来为请求提供数据;")]),v._v(" "),e("dt",[v._v("onRequestResponse(rq: "),e("a",{attrs:{href:"Request.htm"}},[v._v("Request")]),v._v(")")]),v._v(" "),e("dd",[v._v("这个方法在请求完成(成功或失败)时被调用。")])]),v._v(" "),e("h2",[v._v("视图事件")]),v._v(" "),e("p",[v._v("视图对象可使用"),e("code",[v._v("view.on(eventname, handler)")]),v._v("将事件绑定到视图:")]),v._v(" "),e("ul",[e("li",[v._v('eventname - 下面的视图事件中的事件名之一，可以包含任意的名称空间，格式："name.namespace"。')]),v._v(" "),e("li",[v._v("handler - 事件发生时调用的函数。")])]),v._v(" "),e("h3",{attrs:{id:"event-names"}},[v._v("事件名称")]),v._v(" "),e("dl",[e("dt",[v._v('"size"')]),v._v(" "),e("dd",[v._v("当视图(窗口)的尺寸被改变时触发。使用view.box()方法可获取该尺寸。")]),v._v(" "),e("dt",[v._v('"sizing"')]),v._v(" "),e("dd",[v._v("当用户正在调整窗口尺寸的时候触发。事件处理函数的签名应该为: "),e("code",[v._v("function(sizingParams)")]),v._v("，其中"),e("code",[v._v("sizingParams")]),v._v("是一个对象，它的结构为："),e("code",[v._v("{ x:integer, y:integer, width:integer, height: integer, side: 1...9 }")]),v._v("，"),e("code",[v._v("side")]),v._v("是修改窗口尺寸拖拽的窗口边/角。")]),v._v(" "),e("dt",[v._v('"move"')]),v._v(" "),e("dd",[v._v("当视图(窗口)的位置发生改变时触发。使用view.box()方法可获取该尺寸或位置。")]),v._v(" "),e("dt",[v._v('"moving"')]),v._v(" "),e("dd",[v._v("当拖拽窗口标题移动窗口时被触发。事件处理函数的签名应该为: "),e("code",[v._v("function(movingParams)")]),v._v("，其中"),e("code",[v._v("movingParams")]),v._v("是一个对象，它的结构为："),e("code",[v._v("{ x:integer, y:integer, width:integer, height: integer }")]),v._v("，事件函数可以修改这个对象的属性来重新调整窗口的移动。")]),v._v(" "),e("dt",[v._v('"statechange"')]),v._v(" "),e("dd",[v._v("当视图的状态(最大化、最小化、隐藏、显示)被改变时触发。见View"),e("em",[v._v(".state")]),v._v("属性。")]),v._v(" "),e("dt",[v._v('"resolutionchange"')]),v._v(" "),e("dd",[v._v("当窗口的PPI(每英寸像素比例因子)被改变时触发。若要获取精确的每英尺像素数，请使用："),e("br"),e("code",[v._v("var ppdip = (1dip).toFloat(#px);")])]),v._v(" "),e("dt",[v._v('"mediachange"')]),v._v(" "),e("dd",[v._v("当媒体被改变(包括resolutionchange)时触发，例如当监视器数量或颜色深度改变时。")]),v._v(" "),e("dt",[v._v('"replacement-start"')]),v._v(" "),e("dd",[v._v("当用户开始通过UI操作(如拖动它的标题)替换(移动 和/或 调整尺寸)窗口时触发。")]),v._v(" "),e("dt",[v._v('"replacement-end"')]),v._v(" "),e("dd",[v._v("当用户完成通过UI操作(如拖动它的标题)替换(移动 和/或 调整尺寸)窗口时触发。")]),v._v(" "),e("dt",[v._v('"activate"')]),v._v(" "),e("dd",[v._v("当Sciter窗口激活状态改变时被触发。事件处理函数可以有"),e("em",[v._v("mode")]),v._v("参数，它可以接受以下值：\n      "),e("ul",[e("li",[e("strong",[v._v("false")]),v._v(" - 窗口处于未激活状态;")]),v._v(" "),e("li",[e("strong",[v._v("true")]),v._v(" - 窗口处于激活状态，但是鼠标不在该窗口上;")]),v._v(" "),e("li",[e("strong",[v._v("#by-mouse")]),v._v(" - 窗口是被鼠标点击来激活的。")])])]),v._v(" "),e("dt",[v._v('"closing"')]),v._v(" "),e("dd",[v._v("该事件是view(窗口)关闭序列的一部分, 在view的文档被销毁前被触发。")]),v._v(" "),e("dt",[v._v('"close"')]),v._v(" "),e("dd",[v._v("view (window)的最后一个事件, 在view (window)被销毁后立即被触发。")])])])}),[],!1,null,null,null);_.default=n.exports}}]);