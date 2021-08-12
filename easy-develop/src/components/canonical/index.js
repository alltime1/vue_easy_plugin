//正则
import { initData } from "./unit"
let canonical = {
    install: function (Vue, options) {
        Vue.directive("canonical", {
            bind: function (el, binding, vnode) {
                let { arg } = binding;
                updateData(el, arg, binding, vnode)
            },
            update: function (el, binding, vnode) {
                let { arg } = binding;
                updateData(el, arg, binding, vnode)
            }
        })
    }
}

function updateData(el, arg, binding, vnode) {
    switch (arg) {//example v-canonical:number
        case "int":
            initData(el, binding, vnode);
            break;
        case "mobile":
            initData(el, binding, vnode, "mobile")
            break;
        case "float":
                initData(el, binding, vnode, "float")
                break;
    }
}
export { canonical }