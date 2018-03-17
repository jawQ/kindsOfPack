$('.first button').on('click', () => {
  // alert('点击了first的按钮')
  import (
    /* webpackChunkName: "/app/byrequire" */
    './byrequire.js'
  )
  .then((byrequire) => {
    console.log('获取到import出来的byrequire')
    console.log(byrequire)
  })
})
// require.ensure(['./byrequire', './depend'], (require) => {
//   console.log('我是主文件...')
//   var byrequire = require('./byrequire')
//   // var depend = require('./depend')
//   // var swiper = require('swiper')
//   console.log(byrequire)
//   // console.log(depend)
// }, 'byrequire')
// console.log('我是不是不会被...循环内的逻辑...给耽搁了?')

// 正常：
// __webpack_require__.e(/*! require.ensure | byrequire */ \"byrequire\")

// 去除第三个参数,ctrl+c:
// __webpack_require__.e(/*! require.ensure */ 0)

// ctrl+c,添加回去第三个参数,保存,编译:
// __webpack_require__.e(/*! require.ensure | byrequire */ 0)

// // 先去除了第三个参数和数组内依赖,然后打包;接着再加入第三个参数,不ctrl+c,直接保存等待结果:
// __webpack_require__.e(/*! require.ensure | byrequire */ 0)

// // 去除任意的代码，都一样，然后ctrl+c 后 ,重新打包:
// __webpack_require__.e(/*! require.ensure | byrequire */ \"byrequire\")