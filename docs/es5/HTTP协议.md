# HTTP协议
- http://blog.sina.com.cn/s/blog_c112a2980102xm2u.html
- https://www.cnblogs.com/heluan/p/8620312.html
### 1. http
 - HTTP是用于从WWW服务器传输超文本到本地浏览器的传输协议.HTTP是一个应用层协议,由请求和响应构成,是一个标准的客户端和服务器模型
### 2.http协议的主要特点
 - 基于请求/响应模型的协议 
 - 无连接，连接一次之后就会断掉，不会保持连接
 - 无状态，无法区分两次连接者的身份
 - 简单快速，统一资源标志符URI就是在某一规则下能把一个资源独一无二地标识出来
 - 灵活，通过一个http协议，就可以完成不同数据类型的传输
### 3.http报文的组成部分
- 请求消息和响应消息都是由开始⾏(对于请求消息，开始⾏就是请求⾏，对于响应消息，开始行就是状态⾏)，消息报头(可选)，空⾏ (只有CRLF的⾏)，消息正⽂(可选)组成。
- 请求行，消息报头，请求正文
  - Method Request-URI HTTP-Version CRLF
  - 其中 Method表示请求方法;Request-URI是一个统一资源标识符;HTTP-Version表示请求的HTTP协议版本;CRLF表示回⻋车和换⾏(除了作为结尾的CRLF外，不允许出现单独的CR或LF字符)
- 状态行，消息报头，响应正文
  - 状态⾏格式：HTTP-Version Status-Code Reason-Phrase CRLF
  - HTTP-Version表示服务器HTTP协议的版本;Status-Code表示服务器发回的响应状态代码; Reason-Phrase表示状态代码的⽂本描述。
### http消息报头
- 包括普通报头、请求报头、响应报头、实体报头
### 普通报头
- 在普通报头中，有少数报头域用于所有的请求和响应消息，但并不用于被传输的实体，只用于传输的消息。
#### Cache-Control ⽤于指定缓存指令
- 缓存指令是单向的(响应中出现的缓存指令在请求中未必会出现)，且是独立的(一个消息的缓存指令不会影响另⼀个消息处理的缓存机制)，HTTP1.0使用的类似的报头域为Pragma。
- 请求时的缓存指令包括:no-cache(⽤用于指示请求或响应消息不不能缓存)、no-store、max-age、 max-stale、min-fresh、only-if-cached;
- 响应时的缓存指令包括:public、private、no-cache、no-store、no-transform、must-revalidate、 proxy-revalidate、max-age、s-maxage.
#### Date普通报头域
- 表示消息产⽣的⽇期和时间
#### Connection普通报头域
- 允许发送指定连接的选项。例如指定连接是连续，或者指定“close”选项，通知服务器，在响应完成后，关闭连接
### 请求报头
- 请求报头允许客户端向服务器端传递请求的附加信息以及客户端自身的信息。常⽤的请求报头
#### Accept
- Accept请求报头域用于指定客户端接受哪些类型的信息。eg:Accept:image/gif，表明客户端希望接受GIF图象格式的资源;Accept:text/html，表明客户端希望接受html文本。
#### Accept-Charset 
- Accept-Charset请求报头域⽤于指定客户端接受的字符集。
- eg:Accept-Charset:iso-8859-1,gb2312.如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受。
#### Accept-Encoding 
- Accept-Encoding请求报头域类似于Accept，但是它是用于指定可接受的**内容编码**。
- eg:Accept-
Encoding:gzip.deflate.如果请求消息中没有设置这个域,服务器假定客户端对各种内容编码都可以接受。 
#### Accept-Language
- Accept-Language请求报头域类似于Accept，但是它是用于指定一种自然语言。
- eg:Accept- Language:zh-cn.如果请求消息中没有设置这个报头域，服务器假定客户端对各种语言都可以接受。
#### Authorization
- Authorization请求报头域主要用于证明客户端有权查看某个资源。
- 当浏览器器访问一个⻚面时，如果收到服务器的响应代码为401(未授权)，可以发送一个包含Authorization请求报头域的请求，要求服务器对其进行验证。
#### Host(发送请求时，该报头域是必需的)
- Host请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来
的，
- eg:我们在浏览器中输入:http://www.kaikeba.com/ 浏览器发送的请求消息中，就会包含Host请求报头域，
- 如下:Host:www.kaikeba.com 此处使⽤缺省端口号80，若指定了了端口号，则变成:Host:www.kaikeba.com:指定端口号 
#### User-Agent
- User-Agent请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。不过，这个报头域不是必需的
### 响应报头 
- 响应报头允许服务器传递不能放在状态行中的附加响应信息，以及关于服务器的信息和对Request-URI
所标识的资源进⾏下⼀步访问的信息。
#### Location
- Location响应报头域⽤于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。
#### Server
- Server响应报头域包含了服务器用来处理请求的软件信息。与User-Agent请求报头域是相对应的
#### WWW-Authenticate
- WWW-Authenticate响应报头域必须被包含在401(未授权的)响应消息中，客户端收到401响应消息时候，并发送Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。
- eg:WWW-Authenticate:Basic realm="Basic Auth Test!" //可以看出服务器器对请求资源采⽤用的是基本 验证机制。
### 实体报头
- 请求和响应消息都可以传送⼀个实体。一个实体由实体报头域和实体正文组成，但并不是说实体报头域 和实体正⽂要在一起发送，可以只发送实体报头域。实体报头定义了了关于实体正文(eg:有⽆无实体正 ⽂文)和请求所标识的资源的元信息。
#### Content-Encoding
- Content-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采⽤用相应的解码机制，Content- Encoding这样⽤于记录文档的压缩方法，eg:Content-Encoding:gzip
#### Content-Language
- Content-Language实体报头域描述了资源所⽤的⾃然语言。没有设置该域，则认为实体内容将提供给所 有的语⾔言阅读者。eg:Content-Language:da
#### Content-Length 
- Content-Length实体报头域用于指明实体正文的长度，以字节⽅式存储的十进制数字来表示。 
#### Content-Type 
- Content-Type实体报头域⽤语指明发送给接收者的实体正文的媒体类型。
- eg: Content-Type:text/html;charset=UTF-8
- Content-Type:application/json;charset=UTF-8
#### Last-Modified
- Last-Modified实体报头域⽤于指示资源的最后修改⽇期和时间。
#### Expires
- Expires实体报头域给出响应过期的日期和时间。
- 为了了让代理服务器或浏览器在一段时间以后更新缓存中 (再次访问曾访问过的⻚页⾯面时，直接从缓存中加载，缩短响应时间和降低服务器器负载)的⻚面，我们可以使用Expires实体报头域指定⻚页⾯面过期的时间。eg:Expires:Thu，15 Sep 2006 16:23:12 GMT
— HTTP1.1的客户端和缓存必须将其他⾮法的⽇期格式(包括0)看作已经过期。eg:为了了让浏览器器不不要 缓存⻚页⾯面，我们也可以利利⽤用Expires实体报头域，设置为0，jsp中程序如下: response.setDateHeader("Expires","0");
 
### 4.http方法
- GET 请求获取Request-URI所标识的资源
- POST 在Request-URI所标识的资源后附加新的数据
- HEAD 请求获取由Request-URI所标识的资源的响应消息报头 
- PUT 请求服务器存储一个资源，并用Request-URI作为其标识 DELETE 请求服务器删除Request-URI所标识的资源
- TRACE 请求服务器器回送收到的请求信息，主要⽤用于测试或诊断 CONNECT 保留留将来使⽤用
- OPTIONS 请求查询服务器器的性能，或者查询与资源相关的选项和需求
### 5. post与get的区别（7）
   - 重复提交，书签，缓存，历史记录，数据量，不安全，url传递
   - 1）GET在浏览器回退时不会重复提交，而POST会重复提交
   - 2）GET产生的URL地址可以被收藏，而POST不可以
   - 3）GET请求会被浏览器主动缓存，而POST不会，除非手动设置
   - 4）GET请求只能进行URL编码，而POST支持多种编码方式
   - 5）GET请求参数会被完整的保留在浏览器历史记录中，而POST中的参数不会被保留
   - 6）Get 方式传输的数据量非常小，一般限制在 2 KB 左右，但是执行效率却比Post 方法好；而 Post方式传递的数据量相对较大，它是等待服务器来读取数据，不过也有字节限制（实际上IIS4中最大量为80KB，IIS5中为100KB），这是为了避免对服务器用大量数据进行恶意攻击
   - 7）对参数的数据类型，GET只接受ASCII字符，而POST没有限制
   - 8）GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息
   - 9）GET参数通过URL传递，POST放在Request body中
### 6. http状态码
   - 1XX：指示信息——表示请求已接收，继续处理
   - 2XX：成功——表示请求已被成功接收
   - 3XX：重定向——要完成请求必须进行更进一步的操作
   - 4XX：客户端错误——请求有语法错误或请求无法实现
   - 5XX：服务器错误——服务器未能实现合法的请求
#### 常⻅见状态代码、状态描述、说明:
- 200 OK //客户端请求成功
- 400 Bad Request //客户端请求有语法错误，不能被服务器器所理理解
- 401 Unauthorized //请求未经授权，这个状态代码必须和WWW-Authenticate报头域⼀一起使⽤用 
- 403 Forbidden //服务器收到请求，但是拒绝提供服务
- 404 Not Found //请求资源不存在，eg:输⼊了错误的URL
- 500 Internal Server Error //服务器器发生不可预期的错误
- 503 Server Unavailable //服务器器当前不能处理客户端的请求，⼀段时间后可能恢复正常
### 6. 什么是持久连接，http1.1版本才支持
  - 在HTTP1.0中，默认的是短连接，没有正式规定 Connection:Keep-alive 操作；
  - HTTP/1.1所有连接都是Keep-alive的，也就是默认都是持续连接的。
  - 在事务处理结束之后仍然保持在打开状态的TCP连接称之为持久连接。
### 7. 什么是管道化
  - HTTP/1.1允许在持久连接上可选的使用请求管道
  - 是相对于keep-alive连接的又一性能优化。在响应到达之前，可以将多条请求放入队列，当第一条请求通过网络流向服务器时，第二条和第三条请求也可以开始发送了。在高时延网络条件下，这样做可以降低网络的环回时间，提高性能
  - 把请求响应打包回来
  - 管线化是允许浏览器同时发出A请求和B请求，但是服务器还是按照顺序，先回应A请求，完成后再回应B请求。
请求A——>请求B——>请求C——>响应A——>响应B——>响应C
   - 1）管线化机制通过持久连接完成，仅HTTP/1.1支持此技术
   - 2）只有GET和HEAD请求可以进行管线化，而POST则有所限制。
   - 3）初次创建连接时不应启动管线机制，因为对方（服务器）不一定支持HTTP/1.1版本的协议
### 8. 什么是多工
   - HTTP/2复用TCP连接，在一个连接里，客户端和浏览器都可以同时发送多个请求和回应，而且不用按照顺序一一对应，这样就避免了“对头堵塞”。
   - 举例来说，在一个TCP连接里面，服务器同时受到了A请求和B请求，于是先回应A请求，结果发现处理过程非常耗时，于是就发送A请求已经处理好的部分，接着回应B请求，完成后，在发送A请求剩下的部分，这样双向的、实时的通信，就叫做多工。
#### 9. 
  - https加密，数字证书，对称加密和非对称加密
  - https://juejin.im/post/6844903504046211079#heading-0
  - 三次握手和四次挥手
  - https://baijiahao.baidu.com/s?id=1654225744653405133&wfr=spider&for=pc
  - https://juejin.im/entry/6844903638532358151
  - https://juejin.im/post/6844903748918050829

### 10.host文件以及host的作用
- https://www.cnblogs.com/huhuxixi/p/10602977.html
- 加快域名解析
  - 对于要经常访问的网站，我们可以通过在Hosts中配置域名和IP的映射关系，提高域名解析速度。由于有了映射关系，当我们输入域名计算机就能很快解析出IP，而不用请求网络上的DNS服务器
- 方便局域网用户
- 屏蔽网站
- 企业开发过程中，使用本地域名代替繁琐的Ip地址进行开发
function shuffle(arr){
  let a = arr.slice()
  let len = a.length
  for(let i=0;i<len;i++){
    let j = Math.floor(Math.random()*(len))
    let tmp = a[j]
    a[j] = a[i]
    a[i] = tmp
  }
  return a
}
