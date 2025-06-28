<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<style lang="scss">
@use '@style/custome.scss';
@use '@style/main.scss';
@use '@style/utils.scss';
</style>
