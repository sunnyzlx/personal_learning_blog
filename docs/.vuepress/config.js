module.exports = {
    base: '/personal_learning_blog/',
    dest: 'dist',
    title: '个人学习博客',
    description: '个人学习博客',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: false,
    themeConfig: {
        repo: 'sunnyzlx/personal_learning_blog',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [],
        sidebar: [
            {
                title: 'es5',
                // collapsable: false,
                children: [
                    ['es5/', 'JS数据类型'],
                    'es5/object',             
                    'es5/array',
                    'es5/string',
                    'es5/css',
                    'es5/数据类型转换',
                    'es5/作用域和闭包',
                    'es5/搞定this', 
                    'es5/正则表达式',           
                    'es5/作用域练习',
                    'es5/原型链',
                    'es5/事件循环机制',
                    'es5/HTTP协议',
                    'es5/JS运行机制', 
                    'es5/json',
                    'es5/dom',
                    'es5/JS原理题',
                    'es5/JS高频手写题',
                    'es5/数组类高频面试题',
                    'es5/字符串类高频面试题',
                ]
            },
            {
                title: 'es6',
                // collapsable: false,
                children: [
                    ['es6/', 'es6简介'],
                    'es6/let与const',
                    'es6/变量的解构赋值',
                    'es6/promise',
                    'es6/异步编程',
                    'es6/array',
                    'es6/set与map'
                ]
            },
            {
                title: 'react',
                // collapsable: false,
                children: [
                    ['react/', 'React基础'],
                    'react/React高级', 
                    'react/React生命周期', 
                    'react/redux基础',
                    'react/redux进阶',
                    'react/router',
                    'react/react源码',
                    'react/react之hook',
                    'react/react项目经验总结'
                ]
            },
            {
                title: 'vue',
                // collapsable: false,
                children: [
                    ['vue/', 'Introduction'],
                    'vue/vue基础',
                    'vue/vue组件化通信',
                    'vue/mvvm',
                    'vue/vue面试题',
                    'vue/虚拟dom',
                    'vue/vue源码分析'
                ]
            },
            {
                title: 'wechat',
                // collapsable: false,
                children: [
                    ['wechat/', 'Introduction'],
                ]
            },
            {
                title: 'webpack',
                // collapsable: false,
                children: [
                    ['webpack/', 'webpack4简介'],
                    'webpack/webpack基础',
                    'webpack/webpack进阶',
                    'webpack/webpack高级',
                    'webpack/webpack实战',
                    'webpack/webpack性能优化'
                ]
            },
            {
                title: 'leetcode',
                // collapsable: false,
                children: [
                    ['leetcode/', 'js算法思想学习'],
                    'leetcode/js排序算法',
                    'leetcode/js算法例题',
                    'leetcode/链表',
                    'leetcode/矩阵',
                    'leetcode/动态规划',
                ]
            },
            {
                title: 'work',
                // collapsable: false,
                children: [
                    ['work/', 'Introduction'],
                    'work/原型链',
                    'work/前端通信',
                    'work/前端安全',
                    'work/渲染机制',  
                    'work/性能优化',
                    'work/前端错误监控以及上报',
                    'work/混合开发离线包方案',
                    'work/hybrid',
                    'work/防抖与截流',
                    'work/移动端适配方案',
                    'work/http相关',
                    'work/模块化',
                    'work/设计模式',
                    'work/分析源码学架构'   
                ]
            },
            {
                title: 'interview',
                // collapsable: false,
                children: [
                    ['interview/', 'testlist'],
                    'interview/testdetail'
                ]
            },
        ]
    }
}
