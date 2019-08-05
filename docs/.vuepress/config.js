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
                title: 'JavaScript',
                collapsable: false,
                children: [
                    ['JavaScript/', 'Introduction'],
                    'JavaScript/js类型及其判断',
                    'JavaScript/js闭包',
                    'JavaScript/this小结',
                    'JavaScript/js事件循环机制',
                    'JavaScript/js算法基础',
                    'JavaScript/js算法',
                    'JavaScript/js原型链详解',
                    'JavaScript/js作用域面试题',
                    'JavaScript/promise',
                    'JavaScript/关于setTimeout的经典面试题',
                    'JavaScript/DOM知识梳理',
                    'JavaScript/array',
                    'JavaScript/hybrid',
                    'JavaScript/vdom',
                    'JavaScript/20道JS原理题',
                    'JavaScript/testlist',
                    'JavaScript/interview'
                ]
            },
            {
                title: 'vue',
                collapsable: false,
                children: [
                    ['vue/', 'Introduction'],
                    'vue/vue面试要点',
                ]
            },
            {
                title: 'webpack',
                collapsable: false,
                children: [
                    ['webpack/', 'Introduction'],
                    'webpack/entry',
                    'webpack/output',
                    'webpack/loader',
                    'webpack/plugins',
                    'webpack/example'
                ]
            },
            {
                title: 'workSummary',
                collapsable: false,
                children: [
                    ['workSummary/', 'Introduction'],
                    'workSummary/混合开发离线包方案'
                ]
            }
        ]
    }
}
