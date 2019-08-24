# js算法思想学习

## 基础算法（5）
### 字符串
#### 反转字符串中的单词
```
var str='we are friend!'
var reverseWords = function(s){
  return s.split(' ').map(item=>{
    return item.split('').reverse().join('')
  }).join(' ')
}
reverseWords(str)
```
#### 计算二进制字串

### 数组 
#### 电话号码的组合
#### 卡牌分组
#### 种花问题
#### 格雷编码
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