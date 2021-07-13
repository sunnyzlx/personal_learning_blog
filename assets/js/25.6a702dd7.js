(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{382:function(a,n,t){"use strict";t.r(n);var e=t(44),r=Object(e.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"作用域练习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域练习"}},[a._v("#")]),a._v(" 作用域练习")]),a._v(" "),t("ol",[t("li",[a._v("js作用域（全局变量，局部变量）内部可以访问外部，但外部的不能访问内部的")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var a=10;\nfunction aaa(){ \n    alert(a);\n};\naaa(); //a 为外部变量即全局变量，所以可以直接访问到 结果为10\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function aaa(){\nvar a=10;  \n};\naaa();\nalert(a); //a 为函数aaa()内部变量量即局部变量，所以无法访问到\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var a=10; \nfunction aaa(){ \n alert(a);\n};            \nfunction bbb(){\nvar a=20;\naaa();\n}\nbbb(); //结果为10，因为aaa()函数不能访问到bbb()里面的局部变量，所以访问到的是a=10,这个全局变量。\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("不用var 定义变量时，会默认为是全局变量（不规范，不推荐）")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function aaa(){\n   a=10; \n}\naaa();\nalert(a); //结果为10; \n//等价于：\nvar a;\nfunction aaa(){\n  a=10;\n};\naaa();\nalert(a);\n")])])]),t("p",[a._v("//给未声明的变量赋值，此变量就会变成全局变量；var a=b=10; 可以解析成 b=10；var a=b; 也就是b为全局变量，a为局部变量，所以外部访问a访问不到，访问b结果为10；")]),a._v(" "),t("p",[a._v("所以为了避免出现这种隐患，我们在定义变量的时候把所有要定义的变量都加上var;")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function aaa(){\n      var a=b=10; \n}\n aaa();\n alert(a);//结果为,无法访问到\n alert(b);//结果为10；\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("变量的查找是就近原则去寻找，定义的var变量；第二点，变量的声明被提前到作用域顶部，赋值保留在原地，如下dome;")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function aaa(){\n  alert(a);\n  var a=20;\n}\naaa(); //结果为：undefined  \n/**************/\nvar a=10;\nfunction aaa(){\n  alert(a);\n  var a=20;\n}\naaa(); //结果为：undefined\n可以解析为是:\nvar a=10;\nfunction aaa(){\n  var a; //声明提前了\n  alert(a);\n  a=20; //赋值扔留着原地\n}\naaa();\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("当参数跟局部变量重名的时候，优先级是等同的")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    var a=10;\n    function aaa(a){ \n        alert(a);\n        var a=20;  //因为 a 是形参，优先级高于 var a; 所以 局部变量a的声明其实被忽略了。\n    } \n    aaa(a); //结果为：10\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("变量修改的时候另一个变量会跟着变化，但是当变量重新被定义时，则另一个不变化")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var a=[1,2,3];\nvar b=a;\nb.push(4); \nalert(a);//结果为[1,2,3,4] 当b改变的时候a也发生了改变  \n\n当b重新被赋值的时候 a不会改变.示例：\nvar a=[1,2,3];\nvar b=a;\nb=[1,2,3,4]\nalert(a)//结果为[1,2,3]\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);