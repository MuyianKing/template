<h1 align="center">@muyianking/demo</h1>

<p align="center">

</p>

<p align="center">
  <a target="_blank" href="https://www.npmjs.com/package/@muyianking/demo" style="text-decoration: none;"><img  src="https://img.shields.io/npm/v/%40muyianking%2Ftable"/></a>
  <a target="_blank" href="https://www.npmjs.com/package/@muyianking/demo" style="text-decoration: none;"><img  src="https://img.shields.io/npm/dm/%40muyianking%2Ftable"/></a>
</p>

## 安装

```bash
npm i @muyianking/demo
```

```bash
yarn add @muyianking/demo
```

```bash
pnpm i @muyianking/demo
```

## 快速开始

### 手动引入

```js
import { MuTable, MuTableColumn } from '@muyianking/demo'
import '@muyianking/demo/index.css'
```

### 自动引入(unplugin-vue-components)

```js
// vite.config.js
import { MuTableResolver } from '@muyianking/demo'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        MuTableResolver(),
      ],
    }),
  ]
})
```

### 使用

## 贡献

<!-- readme: collaborators,contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/MuyianKing">
                    <img src="https://avatars.githubusercontent.com/u/44827414?v=4" width="100;" alt="MuyianKing"/>
                    <br />
                    <sub><b>MuyianKing</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: collaborators,contributors -end -->
