# 对象匹配特性

## Sciter 3.2.0.3新增的对象匹配特性

在Sciter 3.2.0.3中，我为内建的like操作符和switch/like语句添加了所谓的'对象匹配'特性。

设想我们有一个类似下面的对象/数据列表:
<pre v-pre><code>var shoppingCartData = [
        { product:"苹果", price: 0.95, calories:52 },
        { product:"橘子", price: 0.75, calories:47 },
        { product:"牙刷", price: 1.75 },
        "deleted",
        { product:"Pear", price: 1.25, calories:57 },      
        { product:"肥皂", price: 2.75 },
      ];</code></pre>

我们要将其中的事务于其他物品分离开，若使用新的switch/like特性，语句如下:
<pre v-pre><code>for( var item in shoppingCartData ) 
  switch(item) 
  {
     like { price: Float, calories: Integer } :  
           // 一个食物项
           ...
           break; 
     like { price: Float } : 
           // 不是食物项
           ...
           break;            
     case "deleted" :
           // 被删除项，跳过它 
           break;
     default:
           // 未知项，这是一个彩蛋? 
           break; 
  }</code></pre>



为like添加的模式匹配表达式:
<pre v-pre><code>if( item like { product: String, price: Float } )
    stdout.println( item, "is a pricey product" );</code></pre>

希望这个新特性会为你们的工作带来便利。