class Vue extends EventTarget {
  constructor(options){
    super();
    this.$options = options;
    this._data = this.$options.data;
    this.el = document.querySelector(this.$options.el)
    this.observe(this._data)
    this.compileNode(this.el)
  }
  observe(data){
    let _this = this;
    this._data = new Proxy(data, {
      set(target,prop,newVal){
        let event = new CustomEvent(prop,{
          detail: newVal
        })
        _this.dispatchEvent(event)
        return Reflect.set(...arguments)
      }
    })
  }
  compileNode(el){
    let child = el.childNodes;
    [...child].forEach(node => {
      if(node.nodeType === 3){
        let text = node.textContent;
        let reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g;
        if(reg.test(text)){
          let $1 = RegExp.$1;
          if(this._data[$1]){
            node.textContent = text.replace(reg, this._data[$1])
          }
          this.addEventListener($1, e=>{
            node.textContent = text.replace(reg, e.detail)
          })
        }
      }else if(node.nodeType === 1){
        let attrs = node.attributes;
        if(attrs.hasOwnProperty('v-model')){
          let keyName = attrs['v-model'].nodeValue;
          // node.value = this._data[keyName]
          node.addEventListener('input', e=>{
            this._data[keyName] = e.target.value;
          })
        }
        this.compileNode(node)
      }
    })
  }
}