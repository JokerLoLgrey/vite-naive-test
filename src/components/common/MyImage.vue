<template>
  <n-image
    :alt="alt"
    :height="height"
    :img-props="imgProps"
    :object-fit="objectFit"
    :preview-src="previewSrc"
    :show-toolbar="showToolbar"
    :src="src"
    :width="width"
    @error="onError($event)"
  />
</template>

<script lang="ts">
export default {
  name: 'MyImage'
}
</script>

<script lang="ts" setup>
interface Props {
  alt?: string
  height?: number | string
  imgProps?: object
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  previewSrc?: string
  showToolbar?: boolean
  src?: string
  width?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  alt: undefined,
  height: undefined,
  imgProps: undefined,
  objectFit: 'fill',
  previewSrc: undefined,
  showToolbar: true,
  src: undefined,
  width: undefined
})

const eimt = defineEmits<{
  (e: 'error', event: Event): void
}>()

const onError = (event: Event) => {
  eimt('error', event)
}
</script>
