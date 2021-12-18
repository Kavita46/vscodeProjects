<template>
    <div>
        <h1>404 Not Found</h1>
        <h1>即将跳转回首页</h1>
        <h2>{{n}}秒</h2>
    </div>
</template>

<script>
export default {
    data(){
        return{
            n:5
        }
    },
    mounted(){
        let timer=setInterval(() => {
            console.log("ok");
            this.n--
            if(this.n==0){
                clearInterval(timer);
                this.$router.push("/home")
            }
        }, 1000);
    }
}
</script>