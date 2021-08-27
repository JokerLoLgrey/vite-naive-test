<template>
  <div class="myLayoutLogo">
    <div class="myLayoutLogoContent">
      <my-image
        class="myLayoutLogoContentLogoImage"
        width="40"
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
      <my-gradient-text class="myLayoutLogoContentLogoName" v-show="showName">
        蓉e行
      </my-gradient-text>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MyLayoutLogo'
}
</script>

<script lang="ts" setup>
interface Props {
  style?: object
  showName?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  style: () => {
    return {}
  },
  showName: true
})
</script>

<style lang="scss" scoped>
@mixin flex($jc: center, $ai: center) {
  display: flex;
  justify-content: $jc;
  align-items: $ai;
}
.myLayoutLogo {
  @include flex;
  width: 100%;
  height: calc(var(--header-height) - 1px);
  padding: 0 var(--side-padding);
  box-sizing: border-box;
  &Content {
    @include flex;
    height: 100%;
    &Logo {
      &Image {
        font-size: 0;
      }
      &Name {
        margin-left: 10px;
        color: black;
      }
    }
  }
}
</style>
