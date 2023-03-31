<template>
  <div class="background">
    <div class="pink-background">
      <div class="card">
        <div class="product-image">
          <img :src="store.product.image" alt="" />
        </div>
        <div class="product-description">
          <div>
            <h1 class="title">{{ store.product.title }}</h1>
            <div class="product-category">
              <p class="category">{{ store.product.category }}</p>
              <p class="rating">{{ store.product.rating?.rate }}/5</p>
            </div>
            <p class="description">
              {{ store.product.description }}
            </p>
          </div>
          <div>
            <p class="price">${{ store.product.price }}</p>
            <div class="product-button">
              <button class="btn buynow">Buy Now</button>
              <button class="btn next-product" @click="store.nextCount">
                Next Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    fetchData() {
      fetch(`https://fakestoreapi.com/products/${store.count}`)
        .then((res) => res.json())
        .then((data) => (store.product = data))
        .catch((err) => console.log(err.message));
    },
  },

  watch: {
    "$store.state.list": {
      handler() {
        this.fetchData();
      },
      immediate: true,
    },
  },

  mounted() {
    store.fetchData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  position: relative;
  height: 100vh;
  width: 100vw;
}

.pink-background {
  background-color: #fde2ff;
  height: 75vh;
  margin-top: -10px;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 580px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  /* align-items: center; */
  gap: 60px;
  padding: 50px;
}
.product-image {
  width: 400px;
  height: 100%;
  /* background-color: grey; */
  z-index: 100;
  overflow: hidden;
}

.product-image img {
  max-width: 400px;
}

.product-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
}
.product-description .title {
  color: #720060;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 22px;
}
.product-description .product-category {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  font-size: 18px;
  font-weight: 400;
  color: #3f3f3f;
}
.product-description .description {
  font-size: 20px;
  line-height: 24px;
  margin-top: 23px;
  height: 100%;
}

.product-description .price {
  font-size: 28px;
  font-weight: 600;
  color: #720060;
  border-top: 1px solid grey;
  padding-top: 10px;
}

.product-description .product-button {
  display: flex;
  gap: 20px;
}

.btn {
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
}
.product-description .product-button .buynow {
  color: white;
  background-color: #720060;
  border: 2px solid #720060;
}
.product-description .product-button .next-product {
  color: #720060;
  background-color: white;
  border: 2px solid #720060;
}
</style>
