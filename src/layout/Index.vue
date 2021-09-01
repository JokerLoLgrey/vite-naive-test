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
      <my-layout-logo :show-name="showSider ? false : true" :logo="logo" />
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
      <my-space :align="space.align" :justify="space.justify">
        <div :class="['layoutNavLogo', { onlyLogo: isMobile }]">
          <my-layout-logo :show-name="!isMobile" :logo="logo" />
        </div>

        <my-layout-user-center :data="userCenter" />
      </my-space>
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
import { ref, onMounted, computed, Ref, ComputedRef, reactive } from 'vue'
import { useIsMobile, useIsTablet } from '@/utils/composables'
import { useMemo } from 'vooks'
import { useLoadingBar } from 'naive-ui'
import { loadingBarApiRef } from '@/router'

import components from './modules'

const { MyLayoutLogo, MyLayoutUserCenter } = components

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

// logo
interface ILogo {
  image?: object
  gradient?: object
}

const logo: ILogo = reactive({
  image: {
    src:
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    width: 30,
    height: 30,
    objectFit: 'contain'
  },
  // gradient: {
  //   text: '测试'
  // },
  text: {
    value: '测试'
  }
})

// space布局
interface ISpace {
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
}

const space: ISpace = {
  align: 'center',
  justify: 'space-between'
}

// 用户中心
interface IUserCenterItem {
  icon?: {
    [attr: string]: any
  }
  image?: {
    [attr: string]: any
  }
  gradientText?: {
    [attr: string]: any
  }
}

const userCenter: IUserCenterItem[] = reactive([
  {
    tooltip: {
      placement: 'bottom',
      name: '全屏'
    },
    icon: {
      name: 'search',
      size: 20
    }
  },
  {
    tooltip: {
      placement: 'bottom',
      name: '通知'
    },
    icon: {
      name: 'notificationsOutline',
      size: 20
    }
  },
  {
    tooltip: {
      placement: 'bottom',
      name: '全屏'
    },
    icon: {
      name: 'expandOutline',
      size: 20
    }
  },
  {
    tooltip: {
      placement: 'bottom',
      name: '深色模式'
    },
    icon: {
      name: 'invertMode',
      size: 20
    }
  },
  {
    tooltip: {
      placement: 'bottom-end',
      name: '个人中心'
    },
    image: {
      src:
        'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
      width: 20,
      height: 20,
      objectFit: 'contain'
    },
    text: {
      value: '薛狗'
    }
  }
])

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
    --header-height: 48px;
    display: grid;
    grid-template-rows: calc(var(--header-height) - 1px);
    align-items: center;
    padding: 0 var(--side-padding);
    box-sizing: border-box;
    &Logo {
      width: 240px;
      &.onlyLogo {
        width: 60px;
      }
    }
  }

  &Content {
    padding: 0 var(--side-padding);
    height: calc(100vh - var(--header-height) + 1px);
    box-sizing: border-box;
  }
}
</style>
