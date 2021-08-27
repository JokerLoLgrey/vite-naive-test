<template>
  <my-layout-index has-sider class="layout index" v-if="mode">
    <my-layout-sider
      :native-scrollbar="false"
      :collapsed-width="collapsedWidth"
      collapse-mode="width"
      bordered
      :collapsed="showSider ? true : false"
      :position="isMobile ? 'absolute' : 'static'"
      :width="siderWidth"
    >
      <my-layout-logo :show-name="showSider ? false : true" />
    </my-layout-sider>
    <my-layout-index>
      <my-layout-header bordered class="nav" :style="style">
        <my-icon size="30" @click="toggleShowSider">
          <arrow-forward-circle-outline v-if="showSider" />
          <arrow-back-circle-outline v-else />
        </my-icon>
      </my-layout-header>
      <my-layout-content class="content" :style="style">
        <router-view />
      </my-layout-content>
    </my-layout-index>
  </my-layout-index>

  <my-layout-index class="layout" v-else>
    <my-layout-header bordered class="layoutNav">
      <div class="layoutNavLogo" v-if="isMobile">
        <my-layout-logo />
      </div>
    </my-layout-header>
    <my-layout-index has-sider>
      <my-layout-sider
        :native-scrollbar="false"
        :collapsed-width="collapsedWidth"
        collapse-mode="width"
        bordered
        :collapsed="showSider ? true : false"
        :position="isMobile ? 'absolute' : 'static'"
        :width="siderWidth"
      />
      <my-layout-content class="layoutContent" :style="style">
        <router-view />
      </my-layout-content>
    </my-layout-index>
  </my-layout-index>
</template>

<script lang="ts">
export default {
  module: 'Layout',
  name: 'Layout'
}
</script>

<script lang="ts" setup>
import { ref, onMounted, computed, Ref, ComputedRef } from 'vue'
import { useIsMobile, useIsTablet } from '@/utils/composables'
import { useMemo } from 'vooks'
import { useLoadingBar } from 'naive-ui'
import { loadingBarApiRef } from '@/router'

import components from './modules'

const { MyLayoutLogo } = components

const isMobileRef: ComputedRef<boolean> = useIsMobile()
const isTabletRef: ComputedRef<boolean> = useIsTablet()
const isMobile: ComputedRef<boolean> = isMobileRef

const style = computed(() => {
  return isMobileRef.value
    ? {
        '--side-padding': '16px',
        'grid-template-columns': 'auto 1fr auto'
      }
    : {
        '--side-padding': '32px',
        'grid-template-columns': 'calc(272px - var(--side-padding)) 1fr auto'
      }
})

// 进度条
const loadingBar = useLoadingBar()

onMounted(() => {
  loadingBarApiRef.value = loadingBar
  loadingBar.finish()
})

// 侧栏
let showSider: Ref<boolean> = ref(false)

const toggleShowSider = () => {
  showSider.value = !showSider.value
}

// 布局模式
const mode: Ref<boolean> = ref(false)

// 侧栏最小
const collapsedWidth: Ref<number> = ref(64)

// 侧栏宽度
const siderWidth: Ref<number> = ref(240)

// 页面大小发生变化
useMemo(() => {
  if (!mode.value) {
    collapsedWidth.value = isMobileRef.value ? 0 : 64
  }

  showSider.value = isMobileRef.value
})
</script>

<style lang="scss" scoped>
.layout {
  &.index {
    height: 100vh;
  }
  &Nav {
    display: grid;
    grid-template-rows: calc(var(--header-height) - 1px);
    align-items: center;
    padding: 0 var(--side-padding);
    box-sizing: border-box;
    &Logo {
      width: 240px;
    }
  }

  &Content {
    padding: 0 var(--side-padding);
    height: calc(100vh - var(--header-height) + 1px);
    box-sizing: border-box;
  }
}
</style>
