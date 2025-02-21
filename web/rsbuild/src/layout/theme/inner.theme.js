import variables from '@style/theme.module.scss'

// 主题色配置
export const colors_config = [{
  label: '主色',
  key: 'colorPrimary',
}, {
  label: '成功',
  key: 'colorSuccess',
}, {
  label: '警告',
  key: 'colorWarning',
}, {
  label: '危险',
  key: 'colorDanger',
}, {
  label: '信息',
  key: 'colorInfo',
}]

// 内置主题
export const innerTheme = [{
  label: '默认',
  colors: colors_config.map(item => variables[item.key]),
}, {
  label: '商务',
  colors: ['#133d88', '#26925c', '#d34905', '#ed0d0d', '#818388'],
}]

// 侧边栏
export const side_bg_config = [
  {
    label: '背景色',
    key: 'sideBg',
  },
  {
    label: '背景高亮',
    key: 'sideBgLight',
  },
  {
    label: '背景悬浮',
    key: 'sideBgHover',
  },
  {
    label: '文字高亮',
    key: 'sideLightColor',
  },
  {
    label: '整体宽度',
    key: 'sideWidth',
    type: 'input',
  },
  {
    label: '元素高度',
    key: 'sideMenuItemHeight',
    type: 'input',
  },
]

// 导航栏
export const tab_bar_config = [{
  label: '背景色',
  key: 'tabBg',
}, {
  label: '文字高亮',
  key: 'tabLightColor',
}, {
  label: '高度',
  key: 'tabHeight',
  type: 'input',
}]
