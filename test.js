function myFn(a) {
    this.a = a
}
let obj = {}
let myNewfn = myFn.mybind(obj);
myNewfn('b')
console.log(obj)

Function.prototype.mybind = function (obj) {
    let fn = this
    return function (...arg) {
        fn.apply(obj, arg)
    }
}