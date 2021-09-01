<template>
  <n-icon :color="color" :depth="depth" :size="size">
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
  size: 40
})
</script>
