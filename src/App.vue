<template>
  <div id="q-app">
    <router-view />
    {{ this.$store.state.test }}
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
