import { ref } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

interface ILoadingBarApiRef {
  [attr: string]: any
}

export const loadingBarApiRef: ILoadingBarApiRef = ref({})

const modules = import.meta.globEager('./**/*.ts')

const routeModuleList: RouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
  console.log(modules[key].default)
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

const router = createRouter({
  history: createWebHistory(),
  routes: [...routeModuleList]
})

router.beforeEach(function (to, from, next) {
  if (!from || to.path !== from.path) {
    if (loadingBarApiRef.value) {
      if (loadingBarApiRef.value.start) {
        loadingBarApiRef.value.start()
      }
    }
  }
  next()
})

router.afterEach(function (to, from) {
  if (!from || to.path !== from.path) {
    if (loadingBarApiRef.value) {
      if (loadingBarApiRef.value.finish) {
        loadingBarApiRef.value.finish()
      }
    }
  }
})

export default router
