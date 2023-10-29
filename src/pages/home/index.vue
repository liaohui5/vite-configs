<template lang="pug">
.home
  .text veux store count value is:{{ count }}
  button(@click="increment") increment count
</template>

<script>
import { articleService } from '@/service';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'home-index',
  computed: {
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations(['increment']),
  },
  created() {
    articleService.fetchArticles();
  },
};
</script>

<style lang="scss" scoped></style>
