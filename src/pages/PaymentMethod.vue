<template>
  <div>
    <div class="text-center q-body-1 q-mt-md">Please proceed the payment</div>
    <div class="q-mt-xl q-caption text-center">Total</div>
    <div class="q-mt-sm q-subheading text-center text-weight-bold">Rp 0,-</div>
    <div class="q-mt-xl q-body-2 text-center text-weight-bold">
      SELECT PAYMENT METHOD
    </div>
    <div class="row justify-center">
      <q-card class="col-3 q-ma-sm">
        <div class="text-center q-mt-md">
          <img src="../assets/payment/qr.png" width="50%" alt="">
        </div>
        <div class="text-center q-caption q-mt-md">
          QRIS
        </div>
        <div class="text-center q-mt-lg">
          <img src="../assets/payment/qris.png" width="40%" alt="">
        </div>
      </q-card>
      <q-card class="col-3 q-ma-sm">
        <div class="text-center q-mt-md">
          <img src="../assets/payment/debit.png" width="50%" alt="">
        </div>
        <div class="text-center q-caption q-mt-md">
          DEBIT CARD
        </div>
        <div class="text-center q-my-lg">
          <img src="../assets/payment/gpn.png" width="20%" alt="">
        </div>
      </q-card>
      <q-card class="col-3 q-ma-sm">
        <div class="text-center q-mt-md">
          <img src="../assets/payment/debit.png" width="50%" alt="">
        </div>
        <div class="text-center q-caption q-mt-md">
          ELECTRONICS MONEY
        </div>
        <div class="text-center q-my-lg">
          <img src="../assets/payment/flazz.png" width="30%" alt="">
          <img src="../assets/payment/emoney.png" width="30%" alt="">
        </div>
      </q-card>
    </div>
    <div class="row">
      <div class="position-btn-left">
        <div class="button-orange" @click="goBack()">BACK</div>
      </div>
      <div class="position-btn-center">
        <div class="button-orange" @click="goBack()">CANCEL ORDER</div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: 'PageMenuProduct',
  methods: {
    goBack () {
      this.$router.push('/checkout-product')
    }
  }
}
</script>
