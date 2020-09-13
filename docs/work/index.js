Promise.all = function(promises){
  let arr = []
  return new Promise((resolve,reject)=>{
    promises.forEach((promise, index)=>{
      promise.then(data=>{ 
        arr[index] = data

        if(arr.filter((i)=>{ return i!==undefined})===promises.length){
          resolve(arr)
        }
      }).catch(err=>{
        reject(err)
      })
    })
  })
}

transform: rotate(360) 0.5s

.bg {
  nth-child
}
隔行显色
省略
旋转