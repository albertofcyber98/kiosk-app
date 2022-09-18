<template>
  <div class="position">
    <p class="text-center q-caption">Please select service</p>
    <div class="card-opsi row justify-center">
      <div class="card" @click="goEat()">
        <div>
          <img src="../assets/eats.png" alt="" />
        </div>
        <h1>EAT IN</h1>
      </div>
      <div class="card">
        <div>
          <img src="../assets/takes.png" alt="" />
        </div>
        <h1>TAKEAWAY</h1>
      </div>
      <div class="card">
        <div>
          <img src="../assets/deliverys.png" alt="" />
        </div>
        <h1>DELIVERY</h1>
      </div>
    </div>
    <div class="position-btn-left">
      <div class="button-orange" @click="goBack()">BACK</div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: 'PageMenu',
  methods: {
    goBack () {
      this.$router.push('/index')
    },
    goEat () {
      this.$router.push('/menu-product')
    }
  }
}
</script>
