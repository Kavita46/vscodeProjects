<template>
    <div>
        <h1>修改</h1>

        姓名<input  type="text"><br>
        年龄<input  type="text"><br>
        <button>修改</button>
    </div>
</template>

<script>
export default {
    name:'edit',

    data(){
        return {
            editName:'',
            editAge:''
        }
    },

    props:['editInfo'],
}
</script>


