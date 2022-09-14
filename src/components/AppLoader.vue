<template>
  <v-progress-circular
    :size="120"
    indeterminate
    class="app-loader"
  />
</template>

<script>
export default {
  name: 'AppLoader'
}
</script>

<style scoped>
.app-loader {
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 60px);
}
</style>
