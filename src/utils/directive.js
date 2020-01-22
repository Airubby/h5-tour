 
import Vue from 'vue';
import store from '@/store/index'
 
// v-permission: 功能权限指令
Vue.directive('permission', {
    inserted(el, binding, vnode, oldVnode) {
        const { value } = binding
        const limits = store.getters && store.getters.limits
        if (value) {
            const permissionRoles = value
            const hasPermission = limits.some(limit => {
                return permissionRoles==limit
            })
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        } else {
            throw new Error(`need limits! Like v-permission="'test'"`)
        } 
    }
})

//滚动插件的包
import PerfectScrollbar from 'perfect-scrollbar';
//对应的css
import "perfect-scrollbar/css/perfect-scrollbar.css";
/**
 * @description 
 * 自动判断该更新PerfectScrollbar还是创建它
 * 全局添加
 * .el-table--scrollable-x .el-table__body-wrapper{
        overflow: hidden !important;
    }
    .el-table__body-wrapper:hover > .ps__rail-x,
    .el-table__body-wrapper:hover > .ps__rail-y {
    opacity: 0.6;
    }
    .el-table--scrollable-x .el-table__body-wrapper > .ps__rail-x,
    .el-table--scrollable-y .el-table__body-wrapper > .ps__rail-y {
        display: block !important;
        background-color: transparent !important;
    }
 * @param {HTMLElement} el - 必填。dom元素
 */
const el_scrollBar = (el) => {
    //在元素上加点私货，名字随便取，确保不会和已有属性重复即可，我取名叫做_ps_
    if (el._ps_ instanceof PerfectScrollbar) {
        el._ps_.update();
    } else {
        //el上挂一份属性
        el._ps_ = new PerfectScrollbar(el, { suppressScrollX: false }); //suppressScrollX: false 不禁用x轴滚动
    }
};
//接着，自定义Vue指令,指令名你自己随便编一个，我们假定它叫scrollBar
Vue.directive("scrollBar", {
    //使用inserted钩子函数（初次创建dom）获取使用自定义指令处的dom
    inserted(el, binding, vnode) {
        vnode.context.$nextTick(
            () => {
                const { value } = binding;
                if(value === "table"){
                    el = el.querySelector(".el-table__body-wrapper");
                    if(!el){
                        return console.warn("未发现className为el-table__body-wrapper的dom");
                    }else{
                        el.classList.add("ps");
                    }
                    
                }
                console.log(el)
                //判断其样式是否存在position 并且position为"fixed", "absolute"或"relative"
                //如果不符合条件，抛个错误。当然你也可以抛个警告然顺便给其position自动加上"relative"
                //为什么要这么做呢，因为PerfectScrollbar实现原理就是对dom注入两个div，一个是x轴一个是y轴，他们两的position都是absolute。
                //对css稍有常识的人都知道，absolute是相对于所有父节点里设置了position属性的最近的一个节点来定位的，为了能够正确定位，我们要给其设置position属性
                const rules = ["fixed", "absolute", "relative"];
                if (!rules.includes(window.getComputedStyle(el, null).position)) {
                    el.style.position="relative";
                    console.log(el)
                // console.error(`perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join("、")}`)
                }
                el_scrollBar(el);//el上挂一份属性
            }
        )
    },
    //更新dom的时候
    componentUpdated(el, binding, vnode) {
        const { value } = binding;
        if (value === "table") {
            el = el.querySelector(".el-table__body-wrapper");
            if(!el){
                return console.warn("未发现className为el-table__body-wrapper的dom");
            }else{
                el.classList.add("ps");
            }
        }
        vnode.context.$nextTick(
            () => {
                try {
                    el_scrollBar(el);
                } catch (error) {
                    console.error(error);
                }
            }
        )
    },
})