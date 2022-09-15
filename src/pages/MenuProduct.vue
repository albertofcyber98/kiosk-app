<template>
    <div>
        <div class="menu">
            <div class="sidebar">
                <div class="menu-bar">
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
                <div class="product-menu">
                    <div class="card-product">
                        <img src="../assets/product/nasi-goreng.png" alt="">
                        <h1>Nasi Goreng</h1>
                        <h2>Outlet 1</h2>
                        <div class="price">
                            <div>
                                <h3>Rp 12.000,-</h3>
                            </div>
                            <div class="counter">
                                <button class="minus">
                                -
                                </button>
                                <input type="text" placeholder="0">
                                <button class="minus">
                                +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-product">
                        <img src="../assets/product/bakmi.png" alt="">
                        <h1>Bakmi</h1>
                        <h2>Outlet 2</h2>
                        <div class="price">
                            <div>
                                <h3>Rp 10.000,-</h3>
                            </div>
                            <div class="counter">
                                <button class="minus">
                                -
                                </button>
                                <input type="text" placeholder="0">
                                <button class="minus">
                                +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-product">
                        <img src="../assets/product/bakso.png" alt="">
                        <h1>Bakso</h1>
                        <h2>Outlet 2</h2>
                        <div class="price">
                            <div>
                                <h3>Rp 10.000,-</h3>
                            </div>
                            <div class="counter">
                                <button class="minus">
                                -
                                </button>
                                <input type="text" placeholder="0">
                                <button class="minus">
                                +
                                </button>
                            </div>
                        </div>
                    </div>
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
                <div class="button-orange" >ADD TO CART</div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
  name: 'PageMenuProduct',
  methods: {
    goBack () {
      this.$router.push('/menu')
    }
  }
}
</script>
