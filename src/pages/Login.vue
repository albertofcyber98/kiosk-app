<template>
  <q-page class="login">
    <h1 class="text-center q-subheading">KIOST SETUP</h1>
    <p class="text-center q-caption">Please input setup code to use this kiosk</p>
    <div class="text-center">
    <input type="text" class="text-center input-login">
    <div @click="go()" class="button-login">CHECK</div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageLogin',
  methods: {
    go () {
      this.$router.push('/index')
    }
  }
}
</script>
