# 脚本隐藏特性

## Sciter脚本隐藏特性

在脚本中，有一个otherwise关键字，它用在循环语句中，比如:
<pre v-pre><code>var emptyArr = [];
for(var el in emptyArr)
  stdout.println(el);
otherwise
  stdout.println("nothing seen, array is empty!");</code></pre>

上面的代码执行后将输出：nothing seen, array is empty!。

当循环体未执行时，循环语句(块)之后的otherwise语句将被执行。