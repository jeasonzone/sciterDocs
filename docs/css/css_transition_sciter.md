# CSS属性 - transition

transition属性接受一个值或一个值列表 - 每个值是一个CSS属性的变换函数的描述，它描述了从初始状态到transition定义的规则描述的状态的变换方式。例如:

```css
div
{
  width:100px;
  height:100px;
}
div:hover
{
  width:200px;
  height:200px;
  transition: width(linear,400ms)
              height(linear,400ms);
}
```

上面第二个规则定义了元素从正常状态到:hover状态时width和height属性的过渡效果。transition属性定义了双向的过渡 - 从正常状态到:hover状态 以及 从:hover状态到正常状态。

## Transition定义语法

Transition的值是一个函数，或者以空格分隔的函数列表，可以是以下函数之一:
1. <strong>Cannonic定义(使用命名参数):</strong>

attribute ( easing-function:name, duration: duration , delay: duration ) 或
attribute ( easing-function-in:name, duration-in: duration , delay-in: duration, 
easing-function-out:name, duration-out: duration , delay-out: duration )
声明当元素获得或失去transition定义处的样式时的属性的(双向)动画。 当元素失去有transition属性的样式时，引擎自动初始化回滚动画 - 属性的值以相反方向改变，就好像时间倒退了一样。命名参数的顺序没有相关性。

2.<strong> attribute ( easing-function, duration [, delay ] )</strong>

声明当元素获得或失去transition定义处的样式时的属性的(双向)动画。 当元素失去有transition属性的样式时，引擎自动初始化回滚动画 - 属性的值以相反方向改变，就好像时间倒退了一样。

3. <strong>attribute ( easing-function, duration , delay , rollback-easing-function, [rollback-duration [, rollback-delay ]] )</strong>

声明当元素获得或失去transition定义处的样式时的属性的(双向)动画，并显示的声明回滚动画的函数。

4. <strong>attribute ( easing-function, duration [, delay ], none )</strong>

声明当元素获得transition定义处的样式时的属性的动画，注意：仅是从初始到当前方向的动画，没有回滚动画。当元素失去该样式时，不会触发动画 - 元素立即获取新的样式值。

5. <strong>attribute ( none , rollback-easing-function, rollback-duration [, rollback-delay ] )</strong>

声明当元素失去transition定义处的样式时的属性的动画，注意：仅是从当前到初始方向的动画。当元素获得该样式时，不会触发动画 - 元素立即获取新的样式值

6. <strong>sound ( in: url(sound1.wav) [,out: url(sound2.wav)] )</strong>

定义动画过渡时播放的声音。

其中:
* attribute - 可动画化的CSS属性名称, 比如width(linear,0.4s)函数定义了width属性的动画过渡规则;
* easing-function - easing-functions.htm文件中陈列的擦除函数之一;
* duration - 动画持续时间, 秒或毫秒数, 比如0.4s 和 400ms;
* delay - 启动属性动画的延迟时间。

## 过渡(Transition)触发时

当元素修改它的状态时(比如变成:hover状态 或 一些属性值改变)，有一个新的样式应用到它上(首先这样的样式已经定义)。可以说这时元素有两个样式集: p-style - 旧样式 和 n-style - 将应用的新样式。 这两个样式集如果其中一个或两个都定义了transition属性，则会发生以下动作:

|.|.|
|--------|-------------|
| p-style.transition - null, n-style.transition - defined : | transition值为正方向过渡时的初始化状态, 使用n-style.transition的定义。 |
| p-style.transition - defined, n-style.transition - null : | transition值为反方向(回滚)过渡时的初始化状态，使用p-style.transition的定义。 |
| p-style.transition - defined, n-style.transition - defined 并且两个transition不相同 - 过渡(transition)使用新的规则 | transition值为正方向过渡时的初始化状态, 使用n-style.transition的定义 |

## 中断过渡(Transition)

当过渡时，如果元素的transition属性获取的新的值，则transition使用上面的规则切换方向。唯一的不同是所有的过渡持续时间等于当时的transition定义的时间。比如，未完成的回滚过渡将比完全的回滚消耗更少的时间。同样的，当重新应用某些transition属性时也会比全方向的过渡消耗更少的时间。
