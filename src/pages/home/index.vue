<template lang="pug">
.home
  .text veux store count value is:{{ count }}
  button(@click="increment") increment count
</template>

<script>
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
    console.log('### this ###');
  },
};
</script>

<style lang="scss" scoped></style>
