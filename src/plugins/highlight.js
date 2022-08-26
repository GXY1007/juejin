import Hljs from 'highlight.js'
import '../assets/code.css' // 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件

const Highlight = {}
// 创建自定义指令
Highlight.install = function (app) {
    app.directive('highlight',{
        // 指令 也拥有一组生命周期钩子
        // 1.在绑定元素的父组件挂载之前调用
        beforeMount(el,binding,vnode){
            const blocks = el.querySelectorAll('pre code')
            for (let i = 0; i < blocks.length; i++) {
                Hljs.highlightBlock(blocks[i])
            }
        },
        updated(el){
            const blocks = el.querySelectorAll('pre code')
            for (let i = 0; i < blocks.length; i++) {
                Hljs.highlightBlock(blocks[i])
            }
        }
    })
}

export default Highlight
