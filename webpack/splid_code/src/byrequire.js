console.log('看看我在哪')

'use strict';
// -commonJS- 定义模块:
$('.first button').on('click', () => {
  console.log('点我啊...看看jquery有在我 文件不')
})
var a = {
  a: "我是es6定义模块的a"
}
// export { a }

module.exports = a // 在打包出来的文件,将会不添加webpack一些特定自带变量,说明这不是ES模块

// export {a} // 打包时会添加一行代码,说明这是ES模块.

// export default a // 打包时,添加一行代码,设定esModule的值为true,并导出default的值