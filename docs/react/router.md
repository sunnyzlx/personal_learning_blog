# router

## react-router
```
<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { from: 'login'}
}}/>
```
```
<Redirect
  to={{
    pathname: "/login",
    search: "?utm=your+face",
    state: { referrer: currentLocation }
  }}
/>
```
```
<Route exact path={path}
  component={component}
/>
```

- Route render methods: component,render,children
- Route props: history,location, match
- location
```
{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
```
## history
- Window.history是一个只读属性,用来获取History对象的引用，History对象提供了操作浏览器会话历史的接口。
- History.state 
- History.back()
- History.forward()
- History.go()
- History.pushState()
- History.replaceState()
## location
- Location 接口表示其链接到的对象的位置（URL),Document 和 Window 接口都有这样一个链接的Location，分别通过 Document.location和Window.location 访问。
