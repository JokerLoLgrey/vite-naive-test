<template>
  <n-layout-sider
    :native-scrollbar="nativeScrollbar"
    :collapsed-width="collapsedWidth"
    :collapse-mode="collapseMode"
    :bordered="bordered"
    :collapsed="collapsed"
    :position="position"
    :width="width"
  >
    <slot name="default" />
  </n-layout-sider>
</template>

<script lang="ts">
export default {
  name: 'MyLayoutSider'
}
</script>

<script lang="ts" setup>
interface Props {
  nativeScrollbar?: boolean
  collapsedWidth?: number
  collapseMode?: 'transform' | 'width'
  bordered?: boolean
  collapsed?: boolean
  position?: 'static' | 'absolute'
  width?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  nativeScrollbar: true,
  collapsedWidth: 48,
  collapseMode: 'transform',
  bordered: false,
  collapsed: undefined,
  position: 'static',
  width: 272
})
</script>
