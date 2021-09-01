<template>
  <div class="myLayoutUserCenter">
    <my-space>
      <div
        class="myLayoutUserCenterItem"
        v-for="(item, index) in data"
        :key="index"
      >
        <my-tooltip
          class="myLayoutUserCenterItemTooltip"
          :placement="
            item.tooltip && item.tooltip.placement
              ? item.tooltip.placement
              : 'top'
          "
          :trigger="
            item.tooltip && item.tooltip.trigger
              ? item.tooltip.trigger
              : 'hover'
          "
        >
          <template #trigger>
            <my-space
              class="myLayoutUserCenterItemTooltipContent"
              justify="space-between"
              align="center"
              :size="[0, 5]"
            >
              <my-icon
                class="myLayoutUserCenterItemTooltipContentIcon"
                v-if="item.icon && item.icon.name"
                :color="item.icon.color"
                :size="item.icon.size"
              >
                <component :is="item.icon.name" />
              </my-icon>

              <my-image
                class="myLayoutUserCenterItemTooltipContentImage"
                v-if="item.image && item.image.src"
                :src="item.image.src"
                :width="item.image.width"
                :height="item.image.height"
                :objectFit="item.image.objectFit"
              />

              <!-- <my-gradient-text
                v-if="item.gradientText && item.gradientText.text"
              >
                {{ item.gradientText.text }}
              </my-gradient-text> -->

              <div
                class="myLayoutUserCenterItemTooltipContentText"
                v-if="item.text && item.text.value"
              >
                {{ item.text.value }}
              </div>
            </my-space>
          </template>

          {{ item.tooltip && item.tooltip.name ? item.tooltip.name : '' }}
        </my-tooltip>
      </div>
    </my-space>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MyLayoutUserCenter'
}
</script>

<script lang="ts" setup>
interface IDataItem {
  tooltip?: {
    [attr: string]: any
  }
  icon?: {
    [attr: string]: any
  }
  image?: {
    [attr: string]: any
  }
  gradientText?: {
    [attr: string]: any
  }
  text?: {
    [attr: string]: any
  }
}

interface Props {
  data: IDataItem[]
}

const props = withDefaults(defineProps<Props>(), {
  data: () => {
    return []
  }
})
</script>

<style lang="scss">
@mixin padding($tb: 0, $lr: 10px) {
  padding: $tb $lr;
  box-sizing: border-box;
}
.myLayoutUserCenter {
  @include padding;
  &Item {
    @include padding(0, 6px);
    font-size: 0;
    cursor: pointer;
    height: var(--header-height);
    &:hover {
      background-color: blanchedalmond;
    }
    &Tooltip {
      height: 100%;
      &Content {
        height: 100%;
        &Text {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
