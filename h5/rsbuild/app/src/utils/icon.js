import { ICONIFY_API } from '@app'
import { addAPIProvider } from '@iconify/vue'

export default function () {
  addAPIProvider('', {
    resources: [ICONIFY_API],
  })
}
