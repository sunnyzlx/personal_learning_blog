- https://juejin.im/post/5ac2fb886fb9a028b86e328c
- 简单版
```
class eventEmitter {
  constructor(){
    //存储事件
    this._events = this._events || new Map()
  }
  // 监听事件
  addListener(type,fn){
    if(!this._events.get(type)){
      this._events.set(type, fn)
    }
  }
  //触发事件
  emit(type){
    let handler;
    let args = [].slice.call(arguments, 1)
    handler = this._events.get(type)
    if(args.length>0){
      handler.apply(this, args)
    }else{
      handler.call(this)
    }
    return true;
  }
}


```
- 面试版
```
class eventEmitter {
  constructor(){
    this._events = this._events || new Map()
  }

  addListener(type,fn){
    let handler = this._events.get(type)
    if(!handler){
       this._events.set(type,fn)
    }else if(handler && typeof handler === 'function'){
      this._events.set(type, [handler, fn])
    }else{
      handler.push(fn)
    }
  }
  //用removeListener函数移除监听函数,但是匿名函数是无法移除的
  removeListener(type,fn){
    let handler = this._events.get(type)
    if(handler && typeof handler === 'function'){
      this._events.delete(type)
    }else{
      let index = handler.indexOf(fn)
      if(index !== -1){
        handler.splice(index,1)
        if(handler.length === 1){
          this._events.set(type, handler[0])
        }
      }else{
        return this;
      }
    }
  }
  emit(type, ...arg){
    let handler = this._events.get(type);
    let emitHandler = function(fn, ...args){
      if(args.length>0){
        fn.apply(this, args)
      }else{
        fn.call(this)
      }
    }
    if(Array.isArray(handler)){
      for(let i=0,len=handler.length; i<len; i++){
        emitHandler(handler[i], ...arg)
      }
    }else{
      emitHandler(handler, ...arg)
    }
    return true
  }
  
}

const emitter = new eventEmitter()
function a1(man){
  console.log(`expel ${man}`);
}
function b1(man){
  console.log(`kill ${man}`);
}
emitter.addListener('arson', a1);
emitter.addListener('arson', b1)
emitter.removeListener('arson', a1)

emitter.emit('arson', 'lee')
```