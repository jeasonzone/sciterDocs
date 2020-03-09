# @mixin特性

## 移动端开发分类

<h1 class="article-title">Sciter中CSS的@mixin特性</h1> 
  <div class="article-content"> 
   <p>我正在为Sciter的CSS添加<code>@mixin</code>功能。</p> 
   <p>mixin是一个命名的CSS属性定义集合，这个集合可以被直接应用到CSS规则中。这个特性类似于<a href="http://sass-lang.com/guide#topic-6">SASS’s mixins</a>。</p> 
   <p>参考下面的声明:</p> 
   <pre v-pre><code>    @mixin LIKE-BUTTON 
    {
      behavior:button;
      background: linear-gradient(top, #3498db, #2980b9);
      border-radius: 28dip;
      color: #ffffff;
      font-size: 20dip;
      padding: 10dip 20dip 10dip 20dip;
      text-decoration: none;
    }</code></pre> 
   <p>它声明了一个LIKE-BUTTON属性块，这个属性块可以使用LIKE-BUTTON名称(以@为前缀)被应用到样式中：</p> 
   <pre v-pre><code>    div { 
      @LIKE-BUTTON; 
      margin:1em; 
    }
    a { 
      @LIKE-BUTTON; 
      display:inline-block; 
    }</code></pre> 
  </div>