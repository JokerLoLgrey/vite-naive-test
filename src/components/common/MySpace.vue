<template>
  <n-space
    :align="align"
    :inline="inline"
    :item-style="itemStyle"
    :justify="justify"
    :size="size"
    :vertical="vertical"
    :wrap="wrap"
  >
    <slot name="default" />
  </n-space>
</template>

<script lang="ts">
export default {
  name: 'MySpace'
}
</script>

<script lang="ts" setup>
interface Props {
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  inline?: boolean
  itemStyle?: string | object
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  size?: 'small' | 'medium' | 'large' | number | [number, number]
  vertical?: boolean
  wrap?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  align: undefined,
  inline: false,
  itemStyle: undefined,
  justify: 'start',
  size: 'medium',
  vertical: false,
  wrap: true
})
</script>
