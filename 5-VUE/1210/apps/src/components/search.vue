<template>
    <div>
        <p>名字模糊搜索</p>
        <input type="text" name="" id="">
        <button>搜索</button>

        <br>

        <p>年龄搜索</p>
        <input type="text" name="" id="">
        <button>搜索</button>
    </div>
</template>


<script>
export default {
    data(){
        return {
            arr:[{
                name:'张三',
                age:18,
                id:1,
                gender:'男'
            },
            {
                name:'李四',
                age:18,
                id:2,
                gender:'男'
            },
              {
                name:'李四',
                age:18,
                id:2,
                gender:'男'
            },
              {
                name:'李四',
                age:18,
                id:2,
                gender:'男'
            }
            
            ]
        }
    }
}
</script>

<style scoped>

</style>