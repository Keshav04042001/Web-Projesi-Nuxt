<template>
    
<div id="app">
  
  <!--
    https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for
  -->
  <nav class="nav">
    <h2 class="nav__header">Products</h2>
    <div class="nav__cart">
      <button @click="showCart = !showCart">
        <i class="fas fa-shopping-cart"></i>
      </button>
      <span class="total-quantity">{{ totalQuantity }}</span>
      <div v-if="showCart" class="cart-dropdown">
        <ul class="cart-dropdown__list">
          <li
            v-for="product in cart"
            :key="product.id"
          >
            {{ product.name }} ({{ product.quantity }})
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!--
    https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for
  -->
  <!-- https://vuejs.org/v2/guide/syntax.html#v-on-Shorthand -->
  <section class="products">
    <div v-for="product in products" :key="product.id" class="product">
      
       <img :src="product.image" id="i1" />
       <a class="product__header">{{ product.name }}</a>
      <p class="product__description">{{ product.description }}</p>
      <div class="cart">
        <button
          @click="updateCart(product, 'subtract')"
          class="cart__button"
        >
          -
        </button>
        <span class="cart__quantity">{{ product.quantity }}</span>
        <button
          @click="updateCart(product, 'add')"
          class="cart__button"
        >
          +
        </button>
      </div>
    </div>
  </section>  
  
</div>

</template>

<script>
export default {
  name: 'popup',
  data() {
    return {
      products: [
        {
          id: 1,
          image: "https://www.lafaba.com/productimages/112662/middle/20ke09484r211.jpg",
          name: 'Erkek Lacivert Kapüşonlu Fermuarlı Denim Sweatshirt',
          description: 199.99+ 'TL',
          quantity: 0,
        },
        {
          id: 2,
          image: "https://www.lafaba.com/productimages/112277/middle/20ke09477r25-1.jpg",
          name: 'Erkek Bordo Oversize Fitilli Kadife Sweatshirt',
          description: 199.99+ 'TL',
          quantity: 0,
        },
        {
          id: 3,
          image: "https://www.lafaba.com/productimages/112330/middle/20ke09490r01-1.jpg",
          name: 'Erkek Beyaz Kapüşonlu Peluş Sweatshirt',
          description: 199.99 + 'TL',
          quantity: 0,
        }
      ],
      showCart: false
    };
  },
  
  // https://vuejs.org/v2/guide/computed.html
  computed: {
    cart() {
      return this.products.filter(product => product.quantity > 0);
    },
    totalQuantity() {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    }
  },
    
    // https://vuejs.org/v2/guide/events.html#Methods-in-Inline-Handlers
    methods: {
         updateCart(product, updateType) {      
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            if (updateType === 'subtract') {
              if (this.products[i].quantity !== 0) {
                this.products[i].quantity--;
              }
            } else {
              this.products[i].quantity++;
            }
            
            break;
          }
        }
      }
    }
}
</script>

<style scoped>
#i1{
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
color: #3a3a3a;
font-size: 13px;
text-align: center;
box-sizing: border-box;
border: 0;
display: block;
max-width: 100%;
height: auto;
margin: 0 auto;
transition: all 0.3s ease-in-out;
}
</style>