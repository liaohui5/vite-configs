<template lang="pug">
.app-container
  .navs
    router-link(to='/home') 首页
    span &nbsp;&nbsp;
    router-link(to='/about') 关于
  .views
    router-view
</template>

<script setup></script>

<style lang="scss" scoped></style>
