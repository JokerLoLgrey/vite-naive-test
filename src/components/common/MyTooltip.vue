<template>
  <n-tooltip
    class="myTooltip"
    :animated="animated"
    :arrow-style="arrowStyle"
    :delay="delay"
    :disabled="disabled"
    :display-directive="displayDirective"
    :duration="duration"
    :filp="filp"
    :overlap="overlap"
    :placement="placement"
    :raw="raw"
    :show-arrow="showArrow"
    :show="show"
    :title="title"
    :trigger="trigger"
    :width="width"
    :x="x"
    :y="y"
    @clickoutside="onClickoutside($event)"
    @update:show="onUpdate"
  >
    <template #trigger>
      <div class="myTooltipTrigger">
        <slot name="trigger" />
      </div>
    </template>

    <template #default>
      <slot name="default" />
    </template>
  </n-tooltip>
</template>

<script lang="ts">
export default {
  name: 'MyTooltip'
}
</script>

<script lang="ts" setup>
interface Props {
  animated?: boolean
  arrowStyle?: object
  delay?: number
  disabled?: boolean
  displayDirective?: 'if' | 'show'
  duration?: number
  filp?: boolean
  overlap?: boolean
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end'
  raw?: boolean
  showArrow?: boolean
  show?: boolean
  title?: string
  trigger?: 'hover' | 'click' | 'focus' | 'manual'
  width?: number | 'trigger'
  x?: number
  y?: number
}

const props = withDefaults(defineProps<Props>(), {
  animated: true,
  arrowStyle: undefined,
  delay: 100,
  disabled: false,
  displayDirective: 'if',
  duration: 100,
  filp: true,
  overlap: false,
  placement: 'top',
  raw: false,
  showArrow: true,
  show: undefined,
  title: undefined,
  trigger: 'hover',
  width: undefined,
  x: undefined,
  y: undefined
})

const eimt = defineEmits<{
  (e: 'clickoutside', event: MouseEvent): void
  (e: 'update', value: boolean): void
}>()

const onClickoutside = (event: MouseEvent) => {
  eimt('clickoutside', event)
}

const onUpdate = (value: boolean) => {
  eimt('update', value)
}
</script>

<style lang="scss">
.myTooltip {
  &Trigger {
    height: 100%;
  }
}
</style>
