(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{455:function(t,e,s){"use strict";s.r(e);var a=s(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前端通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端通信"}},[t._v("#")]),t._v(" 前端通信")]),t._v(" "),s("h3",{attrs:{id:"_1-同源策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-同源策略"}},[t._v("#")]),t._v(" 1.同源策略")]),t._v(" "),s("ul",[s("li",[t._v("同源策略限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键安全机制")]),t._v(" "),s("li",[t._v("什么是源：协议、域名与端口。这三者任何一个不一样的话，就算是跨域")]),t._v(" "),s("li",[t._v("什么是限制：不是一个源的文档，没有权限去操作另一个源的文档")]),t._v(" "),s("li",[t._v("限制为\n"),s("ul",[s("li",[t._v("cookie，localStorage和IndexDB无法读取")]),t._v(" "),s("li",[t._v("DOM无法获得")]),t._v(" "),s("li",[t._v("ajax请求无法发送")])])]),t._v(" "),s("li",[t._v("cookie的域名共享：共享之间的二级域名必须是解析于同一个顶级域名之下，就是把两个域名的cookie域设置为同一个顶级域名")])]),t._v(" "),s("h3",{attrs:{id:"_2-前后端如何通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-前后端如何通信"}},[t._v("#")]),t._v(" 2.前后端如何通信")]),t._v(" "),s("ul",[s("li",[t._v("Ajax 支持同源通信")]),t._v(" "),s("li",[t._v("WebSocket 不受同源策略影响")]),t._v(" "),s("li",[t._v("CORS 既支持同源通信也支持跨域通信")])]),t._v(" "),s("h3",{attrs:{id:"_3-如何创建ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何创建ajax"}},[t._v("#")]),t._v(" 3.如何创建ajax")]),t._v(" "),s("h4",{attrs:{id:"xmlhttprequest对象的工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest对象的工作流程"}},[t._v("#")]),t._v(" XMLHttpRequest对象的工作流程")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("util.json=function(options){\n  var opt = {\n    url: '',\n    type: 'get',\n    data: {},\n    success: function(){},\n    error: function(){}\n  }\n  util.extend(opt, options) // 此处应实现一个深拷贝\n  if(opt.url){\n    var xhr=XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject()\n    var url=opt.url,\n        type=opt.type.toUpperCase(),\n        data=opt.data,\n        dataArr=[];\n    for(var k in data){\n      dataArr.push(k+'='+data[k])\n    }\n    if(type==='GET'){\n      url=url + '?' + dataArr.join('&');\n      xhr.open(type, url.replace(/\\?$/g, ''), true);\n      xhr.send();\n    }\n    if(type==='POST'){\n      xhr.open(type, url, true);\n      xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');\n      xhr.send(dataArr.join('&'))\n    }\n    xhr.onload=function(){\n      if(xhr.status===200||xhr.status===304 || xhr.status===206){ //若是媒体资源，增加206状态码，媒体资源比较大，是部分返回\n        var res;\n        if(opt.success && opt.success instanceof Function){\n          res=xhr.responseText;\n          if(typeof res === 'string'){\n            res=JSON.parse(res)\n            opt.success.call(xhr, res)\n          }\n        }\n      }else{\n        if(opt.error && opt.error instanceof Function){\n          opt.error.call(xhr, res)\n        }\n      }\n    }\n  }\n}\n")])])]),s("h3",{attrs:{id:"_4-跨域通信的几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-跨域通信的几种方式"}},[t._v("#")]),t._v(" 4.跨域通信的几种方式")]),t._v(" "),s("h4",{attrs:{id:"jsonp-只支持get请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-只支持get请求"}},[t._v("#")]),t._v(" JSONP(只支持GET请求)")]),t._v(" "),s("ul",[s("li",[t._v("原理： 通过 script 标签的异步加载来实现的。利用script标签不受同源策略的限制，天然可以跨域的特性。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<script>\nvar script = document.createElement('script');\nscript.type = 'text/javascript';\n\nscript.src = 'https://api.asilu.com/geo/&callback=jsonp';//这个是获取当前经纬度的接口\ndocument.head.appendChild(script);//创建并添加script标签到<head>下\n\n// 回调执行函数\nfunction jsonp(res) {\n    console.log(res);//打印jsonp返回的信息\n}\n<\/script>\n")])])]),s("h4",{attrs:{id:"hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[t._v("#")]),t._v(" Hash")]),t._v(" "),s("ul",[s("li",[t._v("url中#号后面的部分为hash, hash的变动，你的页面不会刷新")]),t._v(" "),s("li",[t._v("url中?号后面的部分为search， search的改变会刷新页面，故search不可以做跨域通信")])]),t._v(" "),s("h4",{attrs:{id:"postmessage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postmessage"}},[t._v("#")]),t._v(" postMessage")]),t._v(" "),s("ul",[s("li",[t._v("H5中新增的postMessage()方法，可以用来做跨域通信")])]),t._v(" "),s("h4",{attrs:{id:"websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" webSocket")]),t._v(" "),s("ul",[s("li",[t._v("WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var ws = new WebSocket('wss://echo.websocket.org');\nws.onopen = function (evt) {\n  console.log('Connection open ...');\n  ws.send('Hello WebSockets!');\n};\nws.onmessage = function (evt) {\n  console.log('Received Message: ', evt.data);\n  ws.close();\n};\nws.onclose = function (evt) {\n  console.log('Connection closed.');\n};\n")])])]),s("h4",{attrs:{id:"cors-现代浏览器普遍跨域解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-现代浏览器普遍跨域解决方案"}},[t._v("#")]),t._v(" CORS(现代浏览器普遍跨域解决方案)")]),t._v(" "),s("ul",[s("li",[t._v("整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信")])])])}),[],!1,null,null,null);e.default=n.exports}}]);