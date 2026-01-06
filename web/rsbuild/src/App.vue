<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const userStore = useUserStore()
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-watermark :content="[userStore.name]" :z-index="9999" class="w-full h-full">
      <router-view />
    </el-watermark>
  </el-config-provider>
</template>

<style></style>
