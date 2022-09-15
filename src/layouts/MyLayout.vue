<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="q-page-container-cms">
    <Banner/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Banner from '../components/Banner.vue'
export default {
  name: 'MyLayout',
  components: {
    Banner
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
