<template>
  <n-layout-header bordered :style="style">
    <slot name="default" />
  </n-layout-header>
</template>

<script lang="ts">
export default {
  name: 'MyLayoutHeader'
}
</script>

<script lang="ts" setup>
interface Props {
  style?: object
  bordered?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  style: () => {
    return {}
  },
  bordered: false
})
</script>
