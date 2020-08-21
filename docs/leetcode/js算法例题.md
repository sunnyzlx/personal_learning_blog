# js算法例题




##



##### 7.字符串转驼峰

```
var str="border-bottom-color";
function Change(str){
  var arr=str.split("-");
  for(var i=1;i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
  }
  str=arr.join("");
  return str;
}
console.log(Change(str));//borderBottomColor
```
##### 8.查找字符串中出现次数最多的字符和次数

```
        var str="sdddrtkjsfkkkasjdddj";
        var max=0;
        var char;
        function Search(str){
            var json={};
            for(var i=0;i<str.length;i++){
                if(!json[str[i]]){
                    json[str[i]]=str[i];
                }
                else{
                    json[str[i]]+=str[i];
                }
            }

            for(var i=0;i<str.length;i++){
                if(json[str[i]].length>max){
                    max=json[str[i]].length;
                    char=str[i];
                }
            }
            console.log("出现次数最多的字符是"+char+",出现了"+max+"次")
        }
        Search(str);
```
##### 9.如何写一个大数阶乘？递归的方法会出现什么问题？

```
function factorial(n){
   n > 1 ? n * factorial(n-1) : 1;
}
```
递归方法会有计算溢出的问题
##### 10.知道的排序算法 说一下冒泡快排的原理
- 冒泡排序：重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素已经排序完成。
- 快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。
##### 11.Heap排序方法的原理？复杂度？
- 堆排序（英语：Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。
- 复杂度：O (nlgn)
##### 12.说一下你了解的数据结构 区别
##### 13.几种常见的排序算法，手写
- 基本排序算法：冒泡，选择，插入，希尔，归并，快排
- 冒泡排序：

```
function bubbleSort(data){
  var temp=0;
  for(var i=data.length;i>0;i--){
    for(var j=0;j<i-1;j++){
      if(data[j]>data[j+1]){
        temp=data[j];
        data[j]=data[j+1];
        data[j+1]=temp;
      }
    }
  }
  return data;
}
```
- 选择排序：

```
function selectionSort(data){
  for(var i=0;i<data.length;i++){
    var min=data[i];
    var temp;
    for(var j=i+1;j<data.length;j++){
      if(data[j]<min){
        temp=data[j];
        data[j]=min;
        min=temp;
      }
    }
    data[i]=min;
  }
  return data
}
```
- 插入排序：

```
function insertSort(data){
  var len=data.length;
  for(var i=0;i<len;i++){
    var key=data[i];
    var j=i-1;
    while(j>=0&&data[j]>key){
      data[j+1]=data[i];
      j--;
    }
    data[j+1]=key;
  }
  return data;
}

```
- 希尔排序：

```
function shallSort(array) {
  var increment = array.length;
  var i
  var temp; //暂存

  do {
  //设置增量
    increment = Math.floor(increment / 3) + 1;
    for (i = increment ; i < array.length; i++) {
      if ( array[i] < array[i - increment]) {
        temp = array[i];
        for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
          array[j + increment] = array[j];
        }
        array[j + increment] = temp;
      }
    }
  }
  while (increment > 1)
  return array;
}
```
- 归并排序：

```
function mergeSort ( array ) {
var len = array.length;
if( len < 2 ){
return array;
}
var middle = Math.floor(len / 2),
left = array.slice(0, middle),
right = array.slice(middle);
return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right)
{
var result = [];
while (left.length && right.length) {
if (left[0] <= right[0]) {
result.push(left.shift());
} else {
result.push(right.shift());
}
}
while (left.length)
result.push(left.shift());
while (right.length)
result.push(right.shift());
return result;
}
```
- 快速排序：

```
function quickSort(arr){
if(arr.length==0)
return [];
var left=[];
var right=[];
var pivot=arr[0];
for(var i=0;i<arr.length;i++){
if(arr[i]<pivot){
left.push(arr[i]);
}
else{
right.push(arr[i]);
}
}
return quickSort(left).concat(pivot,quickSort(right));
}

```
