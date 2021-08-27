<template>
  <n-gradient-text :gradient="gradient" :size="size" :type="type">
    <slot name="default" />
  </n-gradient-text>
</template>

<script lang="ts">
export default {
  name: 'MyGradientText'
}
</script>

<script lang="ts" setup>
interface Props {
  gradient?: string | { from: string; to: string; deg: number | string }
  size?: number | string
  type?: 'primary' | 'info' | 'success' | 'warning' | 'error'
}

const props = withDefaults(defineProps<Props>(), {
  gradient: '',
  size: 20,
  type: 'primary'
})
</script>
