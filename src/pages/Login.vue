<template>
  <q-page class="login">
    <h1 style="text-align: center; font-size:18px">KIOST SETUP</h1>
    <p style="text-align: center; font-size:12px">Please input setup code to use this kiosk</p>
    <div style="text-align: center">
    <input type="text" class="input-login">
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
