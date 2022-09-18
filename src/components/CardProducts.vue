<template>
  <div class="card-product col-6">
    <img :src="product.strCategoryThumb" alt="" />
    <h1>{{ product.strCategory }}</h1>
    <h2>Outlet 1</h2>
    <div class="row justify-between price">
      <div class="item-center">
        <h3>Rp 12.000,-</h3>
      </div>
      <div class="item-center counter">
        <button>-</button>
        <input type="text" placeholder="0" />
        <button>+</button>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: 'CardProduct',
  props: ['product']
}
</script>
