<template>
  <n-layout :has-sider="hasSider" class="layout">
    <slot name="default" />
  </n-layout>
</template>

<script lang="ts">
export default {
  name: 'MyLayoutIndex'
}
</script>

<script lang="ts" setup>
interface Props {
  hasSider?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hasSider: false
})
</script>
