<template>
  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <router-view />
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { darkTheme } from 'naive-ui'

const theme: Ref<null> = ref(null)
</script>

<style>
@import './style/index.css';
</style>
