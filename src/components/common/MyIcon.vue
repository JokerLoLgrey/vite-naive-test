<template>
  <n-icon :color="color" :depth="depth" size="40">
    <slot name="default" />
  </n-icon>
</template>

<script lang="ts">
export default {
  name: 'MyIcon'
}
</script>

<script lang="ts" setup>
interface Props {
  color?: string
  depth?: 1 | 2 | 3 | 4 | 5
  size?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  color: undefined,
  depth: undefined,
  size: undefined
})
</script>
