class Observer {
  constructor(value){
    this.value = value
    if(!Array.isArray){
      this.walk(value)
    }
  }
  walk(obj){
    const keys = Object.keys(obj)
    for(let i=0;i<keys.length;i++){
      defineReactive(obj, keys[i], obj[keys[i]])
    }
  }
}
function defineReactive(obj, key, value){
  if(typeof val === 'object'){
     new Observer(val)
  }
  let dep = new dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get:function(){
      dep.depend()
      return val
    },
    set:function(newVal){
      if(val===newVal){
        return
      }
      val = newVal
      dep.notify()
    }
  })
}
class Dep {
  constructor(){
    this.subs = [] //观察者集合
  }
  //添加观察者
  addSub(sub){
    this.subs.push(sub)
  }
  //移除观察者
  removeSub(sub){
    remove(this.subs, sub)
  }
  //核心，如果存在，就进行依赖收集操作
  depend(){
    if(Dep.target){
      Dep.target.addDep(this)
    }
  }
  notify(){
    const subs = this.subs.slice()
    for(let i=0,len=this.subs.length;i<len;i++){
      subs[i].update() //执行更新
    }
  }
}
Dep.target = null
function remove(arr, item){
  if(arr.length){
    let index = arr.indexOf(item)
    if(index>-1){
      return arr.splice(index, 1)
    }
  }
}

class Watcher{
  constructor(vm, expOrFn, cb){
    this.vm = vm
    this.getter = typeof expOrFn === 'function' ? expOrFn : parsePath(expOrFn)
    this.cb = cb
    this.value = this.get()
  }
  get(){
    Dep.target = this
    let value = this.getter.call(this.vm,this.vm)
    Dep.target = null
    return value
  }
  update(){
    const oldVal = this.value
    this.value = this.get()
    this.cb.call(this.vm,this.value, oldVal)
  }
  addDep(dep){
    dep.addSub(this)
  }
}

class Observer{
  constructor(value){
    this.value = value
    if(!Array.isArray(value)){
      this.walk(value)
    }
  }
  walk(obj){
    const keys = Object.keys(obj)
    for(let i=0,l=keys.length;i<l;i++){
      defineReactive(obj, keys[i],obj[keys[i]])
    }
  }
}
function defineReactive(obj,key,val){
  if(typeof val === 'object'){
    new Observer(val)
  }
  let dep = new Dep()
  Object.defineProperty(obj,key,{
    enumerable: true,
    configurable: true,
    get: function(){
      dep.depend()
      return val
    },
    set: function(newVal){
      if(val===newVal){
        return
      }
      val = newVal
      dep.notify()
    }
  })
}

class Dep{
  constructor(){
    this.subs = []
  }
  addSub(sub){
    this.subs.push(sub)
  }
  removeSub(sub){
    remove(this.subs,sub)
  }
  depend(){
    if(Dep.target){
      Dep.target.addDep(this)
    }
  }
  notify(){
    const subs = this.subs.slice()
    for(let i=0,len=subs.length;i<len;i++){
      subs[i].update()
    }
  }
}
Dep.target = null
function remove(arr, sub){
  if(arr.length){
    let index = arr.indexOf(sub)
    if(index>-1){
      return arr.splice(index,1)
    }
  } 
}
class Watcher{
  constructor(vm,expOrFn,cb){
    this.vm = vm
    this.getter = typeof expOrFn === 'function' ? expOrFn: parsePath(expOrFn)
    this.cb = cb
    this.value = this.get()
  }
  get(){
    Dep.target = this
    let value = this.getter.call(this.vm,this.vm)
    Dep.target = undefined
    return value
  }
  update(){
    let oldVal = this.value
    this.value = this.get()
    if(this.value!==oldVal){
      this.cb.call(this.vm,this.value,oldVal)
    }
  }
  addDep(dep){
    dep.addSub(this)
  }
}