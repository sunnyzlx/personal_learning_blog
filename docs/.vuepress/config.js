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
                    ['es5/', 'js类型及其判断'],
                    'es5/this',            
                    'es5/作用域',
                    'es5/闭包',
                    'es5/原型链',
                    'es5/事件循环机制', 
                    'es5/setTimeout',
                    'es5/DOM',
                    'es5/object',             
                    'es5/array',
                    'es5/string',
                    'es5/boolean',
                    'es5/number',
                    'es5/math',
                    'es5/json',
                    'es5/js原理题'
                ]
            },
            {
                title: 'es6',
                // collapsable: false,
                children: [
                    ['es6/', 'es6简介'],
                    'es6/let与const',
                    'es6/变量的解构赋值',
                    'es6/generator',
                    'es6/promise',
                    'es6/array'
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
                    'react/react项目经验总结'
                ]
            },
            {
                title: 'vue',
                // collapsable: false,
                children: [
                    ['vue/', 'Introduction'],
                    'vue/vue面试要点',
                    'vue/vdom'
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
                    'leetcode/js算法例题',
                ]
            },
            {
                title: 'regExp',
                // collapsable: false,
                children: [
                    ['regExp/', 'Introduction'],
                    'regExp/匹配规则',
                ]
            },
            {
                title: 'work',
                // collapsable: false,
                children: [
                    ['work/', 'Introduction'],
                    'work/混合开发离线包方案',
                    'work/hybrid',
                    'work/防抖与截流',
                    'work/移动端适配方案',
                    'work/http相关',
                    'work/性能优化',
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
