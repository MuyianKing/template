import type { ComponentResolver } from 'unplugin-vue-components'

function Resolver(): ComponentResolver[] {
  return [
    {
      type: 'component',
      resolve: (name: string) => {
        if (['MuTable'].includes(name)) {
          return {
            name,
            importName: name,
            from: '@muyianking/demo',
            path: `@muyianking/demo/index.js`,
            sideEffects: '@muyianking/demo/index.css',
          }
        }
      },
    },
  ]
}

export const MuTableResolver = Resolver
export default Resolver
