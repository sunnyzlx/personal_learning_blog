# window对象

## window对象的属性

### window.name
- 窗口的名字，字符串。默认为“”,这个属性主要配合超链接和表单的target属性使用
### window.self,window.window
- window.self和window.window属性都指向窗口本身。这两个属性只读
### window.top, window.parent
- window.top属性指向最顶层窗口，主要用于在框架窗口（frame）里面获取顶层窗口。
- window.parent属性指向父窗口。如果当前窗口没有父窗口，window.parent指向自身。
- 对于不包含框架的网页，这两个属性等同于window对象
### window.devicePixelRatio
- 返回一个数值,它表示一个 CSS 像素由多少个物理像素组成。它可以用于判断用户的显示环境，如果这个比率较大，就表示用户正在使用高清屏幕，因此可以显示较大像素的图片
### 位置大小属性
- window.screenX，window.screenY,返回浏览器窗口左上角相对于当前屏幕左上角的水平距离和垂直距离（单位像素）。这两个属性只读
- window.innerHeight，window.innerWidth,返回网页在当前窗口中可见部分的高度和宽度，即“视口”（viewport）的大小（单位像素）,这两个属性只读,注意，这两个属性值包括滚动条的高度和宽度
- window.outerHeight，window.outerWidth,属性返回浏览器窗口的高度和宽度，包括浏览器菜单和边框（单位像素）。这两个属性只读
- window.scrollX属性返回页面的水平滚动距离，window.scrollY属性返回页面的垂直滚动距离，单位都为像素。这两个属性只读
- window.pageXOffset属性和window.pageYOffset属性，是window.scrollX和window.scrollY别名

## window 对象的方法

### window.requestAnimationFrame
```
let element = document.getElementById('animate')
element.style.position = 'absolute'

let start = null
function step(timestamp){
  if(!start) start = timestamp
  let progress = timestamp - start
  element.style.left = Math.min(progress/10, 200)+'px'
  if(progress<2000){
    window.requestAnimationFrame(step)
  }
}
window.requestAnimationFrame(step)
```