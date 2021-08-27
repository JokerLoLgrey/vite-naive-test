<template>
  <n-layout-content :style="style">
    <slot name="default" />
  </n-layout-content>
</template>

<script lang="ts">
export default {
  name: 'MyLayoutContent'
}
</script>

<script lang="ts" setup>
interface Props {
  style?: object
}

const props = withDefaults(defineProps<Props>(), {
  style: () => {
    return {}
  }
})
</script>
