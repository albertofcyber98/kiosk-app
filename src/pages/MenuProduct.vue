<template>
  <div>
    <div class="menu">
      <div class="sidebar">
        <div class="menu-bar row">
          <div class="btn-bar-active">
            <h6>CATEGORY</h6>
          </div>
          <div class="btn-bar">
            <h6>OUTLET</h6>
          </div>
        </div>
        <div class="list">
          <div class="bg-list-active">
            <h1>FOOD</h1>
          </div>
          <div class="bg-list">
            <h1>DRINK</h1>
          </div>
        </div>
      </div>
      <div class="main-menu">
        <h1>Menu</h1>
        <div class="product-menu row inline">
        <CardProduct v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="position-btn-left">
        <div class="button-orange" @click="goBack()">BACK</div>
      </div>
      <div class="position-text-center">
        <p>Total</p>
        <h6>Rp 0,-</h6>
      </div>
      <div class="position-btn-right">
        <div class="button-orange" @click="goCheckout()">ADD TO CART</div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import CardProduct from '../components/CardProducts.vue'
export default {
  name: 'PageMenuProduct',
  components: {
    CardProduct
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')
  },
  methods: {
    goBack () {
      this.$router.push('/menu')
    },
    goCheckout () {
      this.$router.push('/checkout-product')
    }
  }
}
</script>
