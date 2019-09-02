# js算法思想学习

- 算法的本质是寻找规律并实现
- 如何找到规律？发现输入和输出的关系，找到突破点
- 复杂的实现怎么办？ 实现是程序加数据结构的结合体
- 数据结构用来保存数据和调度，本身一个代码的实现靠的是程序结构和数据结构的配合

## 基础算法（5）
### 字符串
#### 反转字符串中的单词
```
// reverse()方法是数组方法，故需要先将item.split('')由字符串变为数组
  export function reverseWord(str){
    return str.split(' ').map(item => {
      return item.split('').reverse().join('')
    }).join(' ')
  }
  // split分割 匹配正则，\s空格， g全局匹配，查找所有匹配，而非在找到第一个匹配后停止
  export function reverseWord1(str){
    return str.split(/\s/g).map(item => {
      return item.split('').reverse().join('')
    }).join(' ')
  }

  // match识别 匹配正则，[]可选项，\w匹配大写字母小写字母0-9_，+多余1次， g全局匹配，查找所有匹配，而非在找到第一个匹配后停止
  export function reverseWord2(str){
    return str.match(/[\w']+/g).map(item => {
      return item.split('').reverse().join('')
    }).join(' ')
  }
```
#### 计算二进制字串

### 数组 
#### 电话号码的组合（公式运算）
#### 卡牌分组（归类运算）
#### 种花问题（筛选运算）
#### 格雷编码（编码运算）
### 正则表达式
#### 重复的子字符串
#### 正则表达式匹配
### 排序 *****
 - 时间复杂度： 看得是运行次数， 空间复杂度： 看得是占用内存情况  
 - 参考连接：https://www.jianshu.com/p/f4cca5ce055a
#### 快速排序
#### 冒泡排序
```
// 原理： 比较两元素大小，然后换位置
function bubbleSort(arr){
  for(let i=arr.length-1, temp; i>0; i--){ //定义每次循环的遍历次数，即边界
    for(let j=0; j<i; j++){ //定义从当前位置遍历到哪个边界
      if(arr[j]>arr[j+1]){ //比较大小
        temp=arr[j] //暂存当前元素
        arr[j]=arr[j+1] //交换位置，冒泡输出元素
        arr[j+1]=temp
      }
    }
  }
  return arr
}
```
#### 选择排序
```
// 原理：从当前元素开始，选择比ta小的元素，跟ta交换位置
function selectionSort(arr){
  for(var i=0, len=arr.length, min; i<len;i++){ //确定每次循环的循环边界
    min=arr[i] //暂存当前元素
    for(var j=i+1;j<len;j++){ //从循环边界开始遍历到最后，找出比当前元素小的元素
      if(arr[j]<min){ 
        var c = min
        min=arr[j]
        arr[j]=c
      }
    }
    arr[i]=min //将找出的最小值赋值给当前元素
  }
  return arr
}

  export function selectSort(arr){
    for(let i = 0, len = arr.length,tmp; i< len; i++){
      for(let j = i+1; j < len; j++){
        if(arr[i]<arr[j]){
          tmp = arr[i]
          arr[i] = arr[j]
          arr[j] = tmp
        }
      }
    }
    return arr
  }
```
#### 希尔排序
#### 按奇偶排序数组
```
export function oddSort(arr){
    // 进行升序排序
    arr.sort((a,b)=>a-b)
    // 声明一个空数组来存储奇偶排序后的数组
    let r=[]
    // 记录奇数和偶数位下标
    let odd=1
    let even=0
    arr.forEach(item=>{
      if(item%2===1){
        r[odd]=item
        odd+=2
      }else{
        r[even]=item
        even+=2
      }
    })
    return r
  }
```
#### 数组中的第k个最大元素
- 思路：1）排序 2）遍历
```
  // 代码量少，但性能较差，需要循环遍历整个数组
  export function sort(arr, k){
    return arr.sort((a, b)=>b-a)[k-1]
  }
  // 性能较好，借助冒泡原理，只需遍历k次，降序排
  export function sort1(arr, k){
    let len = arr.lenth-1
    for(let i = len, tmp; i > len-k; i--){
      for(let j = 0; j < i; j++){
        if(arr[j]<arr[j+1]){
          tmp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = tmp
        }
      }
    }
    return arr[k-1]
  }
  // 性能较好，借助冒泡原理，只需遍历k次，升序排
  export function sort2(arr, k){
    let len = arr.length-1
    for(let i = len, tmp; i < len-k; i--){
      for(let j = 0; j < i; j++){
        if(arr[j]>arr[j+1]){
          tmp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = tmp
        }
      }
    }
    // return arr[len-k+1]
    return arr[len-(k-1)]
  }
```
#### 最大间距
```
// 法一：常规解法，性能不高，sort()方法遍历一次，寻找差值时又遍历一次
function maxSpace(arr){
  // 如果数组长度小于2返回0
  if(arr.length<2){
    return 0
  }
  // 排序
  arr.sort()
  // 暂存相邻元素的最大差值
  var max = 0
  for(var i=0, len=arr.lenth-1, tmp; i<len; i++){ //当前元素与下一元素比较
    tmp = arr[i+1]-arr[i]  //tmp暂存相邻两元素间差值
    if(tmp>max){
      max=tmp
    }
  }
  return max
}
// 法二：
function maxinumGap(arr){
  if(arr.length<2){
    return 0
  }
  let max = 0
  let len = arr.lenth-1
  let space
  for(let i=len, tmp; i>0; i--){
    for(let j=0; j<i; j++){
      tmp = arr[j]
      if(tmp<arr[j+1]){
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
    if(i<len){
      space= arr[i+1]-arr[i]
      if(space>max){
        max = space
      }
    }
  }
  return Math.max(max, arr[1]-arr[0])
}
```
#### 缺失的第一个正数
```
// 法一： sort()排序一次，for循环一次，性能较差
export function firstw(arr){
    // 过滤掉非正整数
    arr = arr.filter(item => item>0)
    // 正整数数组是不是为空
    if(arr.length){
      // 升序排序，方便从左往右取最小值arr[0]
      arr.sort((a, b) => a-b)
      // 如果第一个元素不为1，返回1
      if(arr[0]!==1){
        return 1
      }else{
        // 从左边开始遍历，只要下一个元素与当前元素的差值>1,则返回当前元素+1
        for(let i=0,len=arr.length; i<len; i++){
          if(arr[i+1]-arr[i]>1){
            return arr[i]+1
          }
        }
        // 如果数组是连续的正整数，则返回最后一个元素+1
        return arr.pop()+ 1
      }
    }else{
      return 1
    }
  }
// 法二： filter过滤不能省，利用选择排序依次拿到最小值，减少循环遍历次数，提高性能
  export function firstw1(arr){
    arr = arr.filter(item => item>0)
    console.log(arr.length)
    // 实现选择排序，先拿到最小值，如果第一个元素不是1直接返回1，如果是1，就要比相邻元素差值
    for(let i=0,len=arr.length,tmp; i<len; i++){
      for(let j=i+1; j<len; j++){
        if(arr[i]>arr[j]){
          tmp = arr[i]
          arr[i] = arr[j]
          arr[j] = tmp
        }
      }
      if(i>0){
        if(arr[i]-arr[i-1]>1){
          return arr[i-1]+1
        }
      }else{
        if(arr[0]!==1){
          return 1
        }
      }
    }
    return arr.length? arr.pop()+1: 1   
  }
```
### 递归 ***** 本质
#### 复原IP地址
#### 与所有单词相关联的字符串
## 数据结构（6）
### 堆 ****
#### 根据字符出现频率排序
#### 超级丑数
### 栈 ****
#### 棒球比赛
#### 最大矩形
### 队列 ****
#### 设计循环队列
#### 任务调度器
### 链表
#### 排序链表
#### 环形链表
### 矩阵
#### 螺旋矩阵
#### 旋转图像
### 二叉树
#### 对称二叉树
#### 验证二叉树
## 算法进阶（2）
### 贪心算法
#### 买卖股票的最佳时机
#### 柠檬水找零
### 动态规划
#### 不同路径
#### k站中转内最便宜的航班