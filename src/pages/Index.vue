<template>
  <div class="position">
    <div class="card-opsi row justify-center">
      <div class="card" @click="go()">
        <div>
          <img src="../assets/front.png" alt="" />
        </div>
        <h1>Food & Beverage</h1>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    go () {
      this.$router.push('/menu')
    }
  }
}
</script>
