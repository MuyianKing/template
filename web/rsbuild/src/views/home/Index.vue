<script setup>
import SmartTable from '@/components/smart-table/SmartTable.vue';


const dataList = ref([
  {
    name: "muyian",
    age: 12,
    pos: "测试"
  }
])

const config = [
  {
    label: "姓名",
    prop: "name"
  },
  {
    label: "年龄",
    prop: "age"
  },
  {
    label: "职位",
    prop: "pos"
  }
]
</script>

<template>
  <div>
    <smart-table :data="dataList" :config>

    </smart-table>
  </div>
</template>

<style lang="scss" scoped></style>
