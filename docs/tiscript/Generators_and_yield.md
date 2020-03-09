# Generator与yield

<div class="article-content"> 
   <p><img class="aligncenter size-medium" src="../imgs/yield-sign-640x425.jpg" alt="yield-sign" width="640" height="425" sizes="(max-width: 640px) 100vw, 640px" /></p> 
   <p>在Sciter中，任何函数体内包含<code>yield</code>关键字的函数都可以认为是一个生成器(generator)函数。</p> 
   <p>生成器的主要目标是产生一系列的值 – 每次调用生成器返回它的下一个值。<br /> 
      每当生成器执行到<code>yield &lt;表达式&gt;</code>时，生成器就返回下一个值。</p> 
   <p>考虑下面这个生成器函数:</p> 
   <pre v-pre><code> function  ordinals() {
   yield &quot;first&quot;;
   yield &quot;second&quot;;
   yield &quot;third&quot;;
}</code></pre> 
   <p>使用下面的代码来执行这个函数:</p> 
   <pre v-pre><code> for(var ordinal in ordinals()) 
  stdout.println(ordinal);
</code></pre> 
   <p>这个循环体将会被执行三次，并且在生成器的每次调用中，yield将依次返回它的值。<br /> 
      这时，你会看到下面的输出内容:</p> 
   <pre v-pre><code> &gt; first
&gt; second
&gt; third
</code></pre> 
   <p>(生成器中的)<code>yield</code>和(异步任务中的)<code>await</code>同一种机制(<a href="https://en.wikipedia.org/wiki/Coroutine" target="_blank">协同式多线程</a>)的不同体现。</p> 
  </div>