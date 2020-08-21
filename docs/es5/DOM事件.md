# DOM事件
### 1.DOM事件级别
  - DOM 0级：写法：el.οnclick=function(){}
  - 由于DOM 1级中没有事件的相关内容，所以没有DOM 1级事件
  - DOM 2级写法：el.addEventListener(event-name, callback, useCapture)
    - event-name: 事件名称，可以是标准的DOM事件
    - callback: 回调函数，当事件触发时，函数会被注入一个参数为当前的事件对象 event
    - useCapture: 默认是false，代表事件句柄在冒泡阶段执行
  - DOM 3级写法和DOM2级一致 只是在DOM 2级事件的基础上添加了更多的事件类型
### 2. DOM事件模型
   - 捕获，冒泡     
   - 捕获是从上往下到达目标元素，冒泡是从当前元素，也就是目标元素往上到window。是两个过程。
### 3. DOM事件流
   - （1）捕获阶段：事件从window对象自上而下向目标节点传播的阶段；
   - （2）目标阶段：真正的目标节点正在处理事件的阶段；
   - （3）冒泡阶段：事件从目标节点自下而上向window对象传播的阶段。
### 4. 描述DOM事件捕获的具体流程
 - 捕获是从上到下，具体第一个真正接收的是window（对象）
 - 第二个接收的是document（对象）
 - 第三个接收的是html标签（document.documentElement）
 - 第四个接收的是body（document.body）
 - ......(父级--子级，剩下的就是按照普通的html结构一层一层往下传)——最后到达目标元素。
### 5. 描述DOM事件冒泡的具体流程（与事件捕获正好相反）
 - 第一个接收的是目标元素
 - 第二个接收的是...（子级--父级，按照html结构一层一层往上传）
 - 然后接收的是body标签——html标签——document对象
 - 最后一个接收的是window对象。
### 6.事件委托（代理）
 - 由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）
 - 优点：
   - 1.节省内存占用，减少事件注册
   - 2.新增子对象时无需再次对其绑定事件，适合动态添加元素
### 7. Event对象使用
 - http://blog.sina.com.cn/s/blog_c112a2980102xktf.html
 - 什么是事件对象？在触发DOM上的事件时都会产生一个对象，就是事件对象。事件对象event。
 - event.type， 获取绑定的事件类型,比如click，mouseover等
#### 1.阻止默认行为：
 - event.preventDefault()
 - 什么是默认事件呢？例如表单一点击提交按钮(submit)跳转页面、a标签默认页面跳转或是锚点定位等
#### 2.阻止冒泡：
 - event.stopPropagation() 方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行
 - stopImmediatePropagation 既能阻止事件向父元素冒泡，也能阻止元素同事件类型的其它监听器被触发, 当一个元素绑定多个事件处理程序的时候，事件会按照顺序全部执行，如果不想让后面的事件处理程序执行，就在当前事件里加这个方法，就不执行后面的事件处理程序了
#### 3.event.target & event.currentTarget
 - event.target, 是真正触发事件的元素
 - event.currentTarget, 是当前监听事件者
#### 4. IE中的事件对象常用属性和方法
 - event.type;//用于获取事件类型，比如click，mouseover等
 - event.srcElement;返回触发事件的元素，相当于常用的event.target
 - event.cancelBubble;//用于阻止事件冒泡，设置为true表示阻止冒泡，设置为false表示不阻止冒泡。
 - event.returnValue;//阻止事件的默认行为，比如阻止a的href链接。设置为false表示阻止事件的默认行为。
```
function showMes（event）{
   event=event || window.event;//ie8以前的浏览器需要用window.event
   event.type;
   event.srcElement;
   event. srcElement.nodeName;
   event.cancelBubble=true;
   event.returnValue=false;
}
```
### 8. 自定义事件
 - https://www.cnblogs.com/cwsb/p/10384219.html
 #### 1）创建事件, 
   - Event是无法传递参数的， var event = new Event('build');
   - CustomEvent是可以传递参数的
   - var event = new CustomEvent('build', { detail: elem.dataset.time })
 #### 2）监听事件 Listen for the event.
   - elem.addEventListener('build', function (e) { //... }, false);
 #### 3）分发/触发事件 Dispatch the event.
   - elem.dispatchEvent(event);
 
```
var eve = new Event('test')
elem.addEventListener('test', function(){
    console.log('event test')
},false)
elem.dispatchEvent(eve) //触发的是事件对象eve,  监听的是事件类型test
```
### 8.手写EventEmitter(发布订阅模式--简单版)
```
// 手写发布订阅模式 EventEmitter
      class EventEmitter {
        constructor() {
          this.events = {};
        }
        // 实现订阅
        on(type, callBack) {
          if (!this.events) this.events = Object.create(null);

          if (!this.events[type]) {
            this.events[type] = [callBack];
          } else {
            this.events[type].push(callBack);
          }
        }
        // 删除订阅
        off(type, callBack) {
          if (!this.events[type]) return;
          this.events[type] = this.events[type].filter(item => {
            return item !== callBack;
          });
        }
        // 只执行一次订阅事件
        once(type, callBack) {
          function fn() {
            callBack();
            this.off(type, fn);
          }
          this.on(type, fn);
        }
        // 触发事件
        emit(type, ...rest) {
          this.events[type] &&
            this.events[type].forEach(fn => fn.apply(this, rest));
        }
      }
      // 使用如下
      const event = new EventEmitter();

      const handle = (...rest) => {
        console.log(rest);
      };
      event.on("click", handle);

      event.emit("click", 1, 2, 3, 4);

      event.off("click", handle);

      event.emit("click", 1, 2);

      event.once("dbClick", () => {
        console.log(123456);
      });
      event.emit("dbClick");
      event.emit("dbClick");

```