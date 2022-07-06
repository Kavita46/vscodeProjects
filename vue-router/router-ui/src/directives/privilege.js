import Vue from 'vue'

Vue.directive('privilege', {

    inserted: function (el, binding, vnode) {

        console.log(el);
        console.log(binding);

        const rights = (((((JSON.parse((localStorage.vuex)))).user).user).privilege)
        console.log(rights);

        // 如果权限包含关键词,则实现权限控制
        if (!rights.includes(binding.value)) {
            el.parentNode.removeChild(el);
        }

    }
})




