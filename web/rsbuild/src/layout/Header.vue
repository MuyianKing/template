<script setup>
import TagsLayout from '@layout/Tags.vue'
import ThemeLayout from '@layout/theme/Index.vue'
import { exitFullScreen, openFullScreen } from '@muyianking/utils'
import UserInfo from './User.vue'

const isfull = ref(false)

function fullScreen() {
  isfull.value = !isfull.value
  if (isfull.value) {
    openFullScreen()
  } else {
    exitFullScreen()
  }
}
</script>

<template>
  <div class="outer-header">
    <div class="header">
      <tags-layout class="tags-wrapper" />
      <div class="header-right">
        <div class="header-user-con">
          <theme-layout class="cursor-pointer" />
          <mu-icon class="cursor-pointer" icon="icon-park-outline:full-screen" @click="fullScreen" />
          <user-info />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$tab-height: var(--tab-height);

.outer-header {
  height: $tab-height;
  transition: all linear 0.2s;
}

.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: $tab-height;
  color: var(--el-bar-text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--tab-bg);
  background-size: 100% 100%;

  .tags-wrapper {
    flex: 1;
    min-width: 0;
    margin-right: 15px;
  }
}

.header-right {
  float: right;
  padding-right: 20px;
}

.header-user-con {
  display: flex;
  height: $tab-height;
  align-items: center;

  & > * {
    margin-left: 20px;
  }
}
</style>
