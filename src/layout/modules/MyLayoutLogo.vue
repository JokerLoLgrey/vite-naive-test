<template>
  <div class="myLayoutLogo">
    <my-space class="myLayoutLogoContent" justify="center" align="center">
      <div class="myLayoutLogoContentImage">
        <my-image
          v-if="logo.image"
          :src="logo.image.src"
          :width="logo.image.width"
          :height="logo.image.height"
          :objectFit="logo.image.objectFit"
        />
      </div>
      <!-- <my-gradient-text class="myLayoutLogoContentLogoName" v-show="showName">
        {{ logo.gradient && logo.gradient.text ? logo.gradient.text : '' }}
      </my-gradient-text> -->
      <div class="myLayoutLogoContentName" v-if="showName">
        {{ logo.text && logo.text.value ? logo.text.value : '' }}
      </div>
    </my-space>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MyLayoutLogo'
}
</script>

<script lang="ts" setup>
interface ILogo {
  image?: {
    [attr: string]: any
  }
  gradient?: {
    [attr: string]: any
  }
  text?: {
    [attr: string]: any
  }
}

interface Props {
  style?: object
  showName?: boolean
  logo?: ILogo
}

const props = withDefaults(defineProps<Props>(), {
  style: () => {
    return {}
  },
  showName: true,
  logo: () => {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.myLayoutLogo {
  width: 100%;
  height: var(--header-height);
  box-sizing: border-box;
  padding: 0 10px;
  box-sizing: border-box;
  &Content {
    height: 100%;
    &Image {
      font-size: 0;
    }
    &Name {
      font-size: 16px;
      line-height: 30px;
    }
  }
}
</style>
