(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{407:function(r,t,n){"use strict";n.r(t);var a=n(44),e=Object(a.a)({},(function(){var r=this,t=r.$createElement,n=r._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[n("h1",{attrs:{id:"js排序算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js排序算法"}},[r._v("#")]),r._v(" JS排序算法")]),r._v(" "),n("ul",[n("li",[r._v("https://juejin.im/post/5d371aa6e51d455d850d3bbe#heading-2")])]),r._v(" "),n("h3",{attrs:{id:"_1-冒泡排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-冒泡排序"}},[r._v("#")]),r._v(" 1.冒泡排序")]),r._v(" "),n("ul",[n("li",[r._v("原理：相邻元素两两比较，交换位置")])]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("function bubbleSort(arr){\n  let len = arr.length\n  for(let i=len-1; i>0; i--){//确定循环的边界\n    for(let j=0,tmp;j<i;j++){\n      if(arr[j]>arr[j+1]){\n        tmp = arr[j];\n        arr[j] = arr[j+1];\n        arr[j+1] = tmp;\n      }\n    }\n  }\n  return arr;\n}\n- 时间复杂度O(n^2),空间复杂度O(1), 稳定排序\n")])])]),n("h3",{attrs:{id:"_2-选择排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-选择排序"}},[r._v("#")]),r._v(" 2.选择排序")]),r._v(" "),n("ul",[n("li",[r._v("原理：从当前元素开始，选择比ta小的元素，跟ta交换位置")])]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("function selectSort(arr){\n  for(let i=0, len= arr.length; i<len-1;i++){\n    let min = a[i]\n    for(let j=i+1,tmp; j<len;j++){\n      if(arr[j]<min){\n        tmp = arr[j];\n        arr[j] = min;\n        min = tmp\n      }\n    }\n    a[i] = min\n  }\n  return arr;\n}\n")])])]),n("ul",[n("li",[r._v("时间复杂度O(n^2),空间复杂度O(1), 不稳定排序")])]),r._v(" "),n("h3",{attrs:{id:"_3-插入排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-插入排序"}},[r._v("#")]),r._v(" 3.插入排序")]),r._v(" "),n("ul",[n("li",[r._v("原理：从有序序列的尾部开始，逐个与目标元素比较，如果大于目标元素，该元素需要后移。")]),r._v(" "),n("li",[r._v("可以看出之所以先要缓存一下目标，是为了要把它的位置先空下来，方便其他元素移入。")]),r._v(" "),n("li",[r._v("另外，当元素不大于目标时，此时说明要插入目标的位置已经找到了")])]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("function insertSort(arr){\n  let len = arr.length;\n  for(let i=len-1,tmp;i>0;i--){\n    tmp = arr[i]\n    let j = i-1;\n    while(j>=0&&arr[j]>tmp){\n      arr[j+1] = arr[j];\n      j--;\n    }\n    arr[j+1] = tmp;\n  }\n}\n")])])]),n("ul",[n("li",[r._v("插入排序不需要额外空间，是本地排序，")]),r._v(" "),n("li",[r._v("相等元素是不会交换前后顺序，因而也是稳定排序，")]),r._v(" "),n("li",[r._v("时间复杂度为O(n^2)，空间复杂度O(1)，适用于少量数据排序。相比冒泡排序和选择排序，插入排序的使用相对多一些。因为前两者是交换排序，本质上需要3次原子操作的")])]),r._v(" "),n("h3",{attrs:{id:"_4-快速排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-快速排序"}},[r._v("#")]),r._v(" 4.快速排序")]),r._v(" "),n("ul",[n("li",[r._v("思路：\n"),n("ul",[n("li",[r._v("分而治之算法，讲究分、归、并")]),r._v(" "),n("li",[r._v("先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。")]),r._v(" "),n("li",[r._v("左右分别用一个空数组去存储比较后的数据。")]),r._v(" "),n("li",[r._v("递归处理left，递归处理right，合并三者结果，直到数组长度 <= 1;")])])])]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("function quickSort(arr){\n  let len = arr.length;\n  if(len<2){\n    return arr;\n  }\n  let mid = Math.floor(len/2);\n  let left = [];\n  let right = [];\n  for(let i=0; i<len; i++){\n    if(arr[i]<arr[mid]){\n      left.push(arr[i])\n    }else if(arr[i]>arr[mid]){\n      right.push(arr[i])\n    }\n  }\n  return quickSort(left).concat(arr[mid], quickSort(right))\n}\n")])])]),n("ul",[n("li",[r._v("优点：快，常用，缺点：需要另外声明两个数组，浪费了内存空间资源")]),r._v(" "),n("li",[r._v("此版本的快速排序每一次递归调用，需要额外空间，复杂度为O(n)，不是本地排序。说起空间复杂度，递归也需要空间（相当于手动维护一个调用栈），因此总体空间复杂度是O(nlogn)。")]),r._v(" "),n("li",[r._v("相等元素是不会交换前后顺序，因而是稳定排序（这与我们选择最后一个元素为分界点有关）。")]),r._v(" "),n("li",[r._v("时间复杂度为O(nlogn)。")])]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("function swap(arr, i, j){\n  [arr[i],arr[j]] = [arr[j],arr[i]]\n}\nfunction partition(arr, start,  end){\n  let j=start;\n  let pivot = arr[end]\n  for(let i=start;i<=end;i++){\n    if(arr[i]<=pivot){\n      swap(arr,i,j++)\n    }\n  }\n  return j-1;\n}\nfunction quickSort2(arr,start=0,end=arr.length-1){\n  if(start<=end){\n    let pivotIndex = partition(arr, start, end)\n    quickSort(arr, start, pivotIndex - 1)\n    quickSort(arr, pivotIndex + 1, end)\n  }\n  return arr;\n}\n")])])]),n("ul",[n("li",[r._v("此版本的快速排序是原地算法，不需要额外空间，但递归是需要空间的的（相当于手动维护个调用栈），总体空间复杂度是O(logn)。")]),r._v(" "),n("li",[r._v("相等元素可能会交换前后顺序，因而不是稳定排序（因为交换）。")]),r._v(" "),n("li",[r._v("时间复杂度为O(nlogn)，空间复杂度是O(logn)。")])]),r._v(" "),n("h3",{attrs:{id:"_5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5"}},[r._v("#")]),r._v(" 5.")])])}),[],!1,null,null,null);t.default=e.exports}}]);