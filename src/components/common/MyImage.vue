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
    :on-error="onError"
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
  onError?: (e: Event) => void
}

const props = withDefaults(defineProps<Props>(), {
  alt: undefined,
  height: undefined,
  imgProps: undefined,
  objectFit: 'fill',
  previewSrc: undefined,
  showToolbar: true,
  src: undefined,
  width: undefined,
  onError: undefined
})
</script>
