## TIScript的新特性

<div class="post" id="post-41756">
  <h1 class="storytitle">Sciter 2.0.2.0 发布了TIScript的一些新特性</h1>
  </div>
    <div class="storycontent">
	  <p>2.0.2.0添加的特性之一是支持在类中声明成员变量。</p>
	  <p>ͨ通过使用this var name = value构造器，你可以定义成员(实例)变量:</p>
<p>这段代码:</p>
	  <pre class="brush: js;"><code>class Foo {
  this var one = 1, // 成员变量
           two = 2; // 成员变量
  function sum() { return this.one + this.two; }
}
var foo = new Foo();
stdout &lt;&lt; foo.sum() &lt;&lt; &quot;\n&quot;;</code>
</pre>
<p>即使该类没有定义构造器，上面这段代码也会输出‘3’。<br/>
每个Foo类的实例都会拥有this.one和this.two变量，并且拥有它们的初始值。</p>
<p>如果有其他类继承了这个Foo类，它也将拥有父类声明的成员变量。</p>
<p>这段代码:</p>
<pre class="brush: js;"><code>class Bar: Foo {
  this var three = 3; // 成员变量
  function sum() { return this.three + super.sum(); }
}
var bar = new Bar();
stdout &lt;&lt; bar.sum() &lt;&lt; &quot;\n&quot;;</code>
</pre>
<p>将会输出‘6’。bar实例将会拥有this.one、this.two、this.three成员变量。</p>
</div>
    </div>