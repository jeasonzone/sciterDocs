## 在脚本中使用CSS常量

  <div class="storycontent"> 
   <p>在Sciter中，你可以使用@const来定义CSS常量，比如:</p> 
   <pre class="brush: css;"><code>
&lt;style&gt;
  @const TEST_STR:&quot;test&quot;;
  @const TEST_COLOR: rgb(128,0,0);
  @const TEST_NUMBER: 128;
&lt;/style&gt;
</code></pre> 
   <p>这些常量不仅可以在CSS中使用(比如@TEST_COLOR)，也可以在脚本中使用:</p> 
   <pre class="brush: js;"><code>
var test_str = self.style.constant(&quot;TEST_STR&quot;);
</code></pre> 
   <p>如果你觉得self.style.constant太繁琐，你可以为它定义一个"字符串器"函数:</p> 
   <pre class="brush: js;"><code>
  function $const( name ) { return self.style.constant(name) || &quot;&quot;; }
</code></pre> 
   <p>这样你就可以这样使用了:</p> 
   <pre class="brush: js;"><code>
var t1 = $const(TEST_STR);    // 字符串, &quot;test&quot; 
var t2 = $const(TEST_COLOR);  // 颜色类型, color(128,0,0)
var t3 = $const(TEST_NUMBER); // 整数, 128
</code></pre> 
  </div>
