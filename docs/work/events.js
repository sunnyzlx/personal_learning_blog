class eventEmitter {
  constructor(){
    this._events = Object.create(null)
  }

  addListener(type,fn){
    this._events[type] = this._events[type] || []
    this._events[type].push(fn)
  }
  once(type,fn){
    let self = this
    function on(){
      self.$off(type, on)
      fn.apply(self, arguments)
    }
    on.fn = fn
    this.$on(type, on)
  }
  //用removeListener函数移除监听函数,但是匿名函数是无法移除的
  removeListener(type,fn){
    if(!arguments.length){
      this._events = Object.create(null)
      return this
    }
    let cbs = this._events[type]
    if(!cbs){
      return this
    }
    if(!fn){
      this._events[type] = Object.create(null)
      return this
    }
    for(let i=0,l=cbs.length;i<l;i++){
      if(cbs[i]===fn){
        cbs.splice(i,1)
        return this
      }
    }

  }
  emit(type, ...args){
    let cbs = this._events[type]
    if(cbs){
      for(let i=0,l=cbs.length;i<l;i++){
        cbs[i].apply(this, args)
      }
    }
    return this
  }
  
}
