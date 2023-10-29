<template lang="pug">
.home
  .text veux store count value is:{{ counterStore.count }}
  button(@click="counterStore.increment") increment count
</template>

<script setup>
import { onMounted } from 'vue';
import { useCounterStore } from '@/store';
import { articleService } from '@/service';
const counterStore = useCounterStore();
onMounted(async () => await articleService.fetchArticles());
</script>

<style lang="scss" scoped></style>
