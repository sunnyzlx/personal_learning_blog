# cookie

```
function setCookie(key,value, expires){
  if(expires>0){
    let date = new Date()
    let ms = expires * 3600 * 1000
    date.setTime(date.getTime()+ms)
    expires = date.toUTCString()
  }
  let str = `${key}=${encodeURIComponent(value)}; expires=${expires}`;
  document.cookie = str
}
function getCookie(key){
  let arr = document.cookie.split('; ')
  for(let item of arr){
    let temp = item.split('=')
    if(temp[0]===key){
      return decodeURIComponent(temp[1])
    }else{
      return ''
    }
  }
}
function deleteCookie(key,value){
  let date = new Date()
  date.setTime(date.getTime()-1000)
  document.cookie = `${key}=${encodeURIComponent(value)}; expires=${date.toUTCString()}`
}
```