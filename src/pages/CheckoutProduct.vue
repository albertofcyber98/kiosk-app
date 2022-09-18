<template>
  <div>
    <div class="q-pt-xl">
      <div class="text-center q-subheading">Please check your order</div>
      <div class="q-mt-md q-mx-md">
        <table width="100%">
          <thead>
            <tr class="q-caption">
              <th width="40%">Your Order</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px 0px" width="40%">
                <div class="flex q-gutter-x-sm items-center">
                  <img src="../assets/product/bakso.png" width="40px" alt="" />
                  <div class="q-pl-sm q-caption">Bakso</div>
                </div>
              </td>
              <td>
                <div class="counter row justify-center">
                  <button>-</button>
                  <input type="text" value="1" />
                  <button>+</button>
                </div>
              </td>
              <td class="q-pd-md text-right items-center q-caption">
                Rp 12.000,-
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row justify-end">
          <div class="col-4 q-caption">Tax</div>
          <div class="col-2 text-right q-caption">Rp 0,-</div>
        </div>
        <div class="row justify-end q-mt-sm">
          <div class="col-4 q-caption">Service Charge</div>
          <div class="col-2 text-right q-caption">Rp 0,-</div>
        </div>
        <div class="row q-mt-lg">
          <div
            class="col-12 q-body-1 bg-gray text-white q-pa-sm text-center font-weight-medium"
          >
            Total - Rp 12.000,-
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="position-btn-left">
        <div class="button-orange" @click="goBack()">BACK</div>
      </div>
      <div class="position-btn-center">
        <div class="button-orange" @click="goBack()">CANCEL ORDER</div>
      </div>
      <div class="position-btn-right">
        <div class="button-orange" @click="goPayment()">PURCHASE</div>
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
      this.$router.push('/menu-product')
    },
    goPayment () {
      this.$router.push('/payment-method')
    }
  }
}
</script>
