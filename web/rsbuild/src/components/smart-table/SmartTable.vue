<script setup>
defineProps({
  config: {
    type: Array,
    default() {
      return []
    },
  },
})
</script>

<template>
  <el-table v-bind="$attrs">
    <template v-for="item in config" :key="item.prop">
      <el-table-column :label="item.label" :prop="item.prop" />
      <el-table-column :label="item.label" :prop="item.prop" />
    </template>
  </el-table>
</template>

<style lang='css' scoped></style>
