import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({
    id: '',
    username: '',
    name: '',
    phone: '',
    status: '',
    image: '',
    token: '',
    resources_id: [],
  }),
  actions: {
    initUser(data) {
      if (data) {
        this.$patch(data)
      }
    },
    clearUser() {
      this.$reset()
    },
  },
  persist: {
    enabled: true,
  },
})
