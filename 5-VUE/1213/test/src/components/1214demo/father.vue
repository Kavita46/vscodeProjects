<template>
    <div>
        <son :sname = "sname" :age = "age" :gender = "gender"></son>
    </div>
</template>

<script>
import son from './son.vue'
export default {
    name:'father',
    components: {
        son
    },

    data() {
        return {
           sname:'张三',
           age:18,
           gender:'男'
        }
    },
    methods: {
       say(){
            console.log('调用了父类方法');
        }
    },
}
</script>