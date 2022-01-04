<template>
  <div>
    <h1>Demo1</h1>

    <button @click="goDemo2">GoDemo2</button>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
const data = reactive({
  id: 1,
});

const goDemo2 = () => {
  const router = useRouter();
  router.push({
    path: "/demo2",
    query: {
      id: data.id,
    },
  });
};
</script>

<style>
</style>