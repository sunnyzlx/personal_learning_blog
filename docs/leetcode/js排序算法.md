# JS排序算法
- https://juejin.im/post/5d371aa6e51d455d850d3bbe#heading-2
### 1.冒泡排序
- 原理：相邻元素两两比较，交换位置
```
function bubbleSort(arr){
  let len = arr.length
  for(let i=len-1; i>0; i--){//确定循环的边界
    for(let j=0,tmp;j<i;j++){
      if(arr[j]>arr[j+1]){
        tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
  return arr;
}
- 时间复杂度O(n^2),空间复杂度O(1), 稳定排序
```
### 2.选择排序
- 原理：从当前元素开始，选择比ta小的元素，跟ta交换位置
```
function selectSort(arr){
  for(let i=0, len= arr.length; i<len-1;i++){
    let min = a[i]
    for(let j=i+1,tmp; j<len;j++){
      if(arr[j]<min){
        tmp = arr[j];
        arr[j] = min;
        min = tmp
      }
    }
    a[i] = min
  }
  return arr;
}
```
- 时间复杂度O(n^2),空间复杂度O(1), 不稳定排序
### 3.插入排序
- 原理：从有序序列的尾部开始，逐个与目标元素比较，如果大于目标元素，该元素需要后移。
- 可以看出之所以先要缓存一下目标，是为了要把它的位置先空下来，方便其他元素移入。 
- 另外，当元素不大于目标时，此时说明要插入目标的位置已经找到了
```
function insertSort(arr){
  let len = arr.length;
  for(let i=len-1,tmp;i>0;i--){
    tmp = arr[i]
    let j = i-1;
    while(j>=0&&arr[j]>tmp){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = tmp;
  }
}
```
- 插入排序不需要额外空间，是本地排序，
- 相等元素是不会交换前后顺序，因而也是稳定排序，
- 时间复杂度为O(n^2)，空间复杂度O(1)，适用于少量数据排序。相比冒泡排序和选择排序，插入排序的使用相对多一些。因为前两者是交换排序，本质上需要3次原子操作的
### 4.快速排序
- 思路：
  - 分而治之算法，讲究分、归、并
  - 先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。
  - 左右分别用一个空数组去存储比较后的数据。
  - 递归处理left，递归处理right，合并三者结果，直到数组长度 <= 1;
```
function quickSort(arr){
  let len = arr.length;
  if(len<2){
    return arr;
  }
  let mid = Math.floor(len/2);
  let left = [];
  let right = [];
  for(let i=0; i<len; i++){
    if(arr[i]<arr[mid]){
      left.push(arr[i])
    }else if(arr[i]>arr[mid]){
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(arr[mid], quickSort(right))
}
```
- 优点：快，常用，缺点：需要另外声明两个数组，浪费了内存空间资源
- 此版本的快速排序每一次递归调用，需要额外空间，复杂度为O(n)，不是本地排序。说起空间复杂度，递归也需要空间（相当于手动维护一个调用栈），因此总体空间复杂度是O(nlogn)。
- 相等元素是不会交换前后顺序，因而是稳定排序（这与我们选择最后一个元素为分界点有关）。
- 时间复杂度为O(nlogn)。
```
function swap(arr, i, j){
  [arr[i],arr[j]] = [arr[j],arr[i]]
}
function partition(arr, start,  end){
  let j=start;
  let pivot = arr[end]
  for(let i=start;i<=end;i++){
    if(arr[i]<=pivot){
      swap(arr,i,j++)
    }
  }
  return j-1;
}
function quickSort2(arr,start=0,end=arr.length-1){
  if(start<=end){
    let pivotIndex = partition(arr, start, end)
    quickSort(arr, start, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, end)
  }
  return arr;
}
```
- 此版本的快速排序是原地算法，不需要额外空间，但递归是需要空间的的（相当于手动维护个调用栈），总体空间复杂度是O(logn)。
- 相等元素可能会交换前后顺序，因而不是稳定排序（因为交换）。
- 时间复杂度为O(nlogn)，空间复杂度是O(logn)。
### 5.
