<script setup>
import variables from '@style/theme.module.scss'

console.log(variables)
</script>

<template>
  <div class=" home-wrapper text-center w-f-m-20 ">
    hello world
  </div>
</template>

<style lang='scss' scoped>
.home-wrapper {
  @apply bg-white rounded-md p-[10px];
  width: calc(100% - 20px);
}
</style>
