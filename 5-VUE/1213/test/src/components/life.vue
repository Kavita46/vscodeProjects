<template>
  <div>
    <h1>Here is the life Circle of Vue</h1>
  </div>
</template>


<script>
export default {
  name: "life",

  data() {
    return {
      count: 0,
    };
  },

  methods: {
      beforeCreate() {
        console.log("beforeCreate");
      },
      created(){
          console.log("created");
      },
      beforeMount() {
        console.log("beforeMount");
      
      },
        mounted() {
            console.log("mounted");
        },
        beforeUpdate() {
            console.log("beforeUpdate");
        },
        updated() {
            console.log("updated");
        },
        beforeDestroy() {
            console.log("beforeDestroy");
        },
        destroyed() {
            console.log("destroyed");
        },
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter");
            next();
        },
        beforeRouteUpdate(to, from, next) {
            console.log("beforeRouteUpdate");
            next();
        },
        beforeRouteLeave(to, from, next) {
            console.log("beforeRouteLeave");
            next();
        },
        activated() {
            console.log("activated");
        },
        deactivated() {
            console.log("deactivated");
        },
        errorCaptured(err, vm, info) {
            console.log("errorCaptured");
        },
        serverPrefetch() {
            console.log("serverPrefetch");
        },
        clientPrefetch() {
            console.log("clientPrefetch");
        },



  },
};
</script>


<style lang="">
</style>