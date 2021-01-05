<template>
    <div class="dropdown-menu col-lg-8 col-xs-24 col-md-8 ">
    
    <div class="w100 mini-cart-table scroll-pane mCustomScrollbar _mCS_2" style="overflow: hidden;"><div class="mCustomScrollBox mCS-dark-2" id="mCSB_2" style="position: relative; height: 100%; overflow: hidden; max-width: 100%; max-height: 300px;"><div class="mCSB_container mCS_no_scrollbar" style="position:relative; top:0;">
        <table>
            <tbody>
                
                <tr v-for="item in basket" class="mini-cart-product">
                    <td style="width: 20%" class="mini-cart-product-thumb">
                        <div>
                            <a :href="'/urun-detay/'+ item.product.id">
                                <img :src="item.product.image" alt="img">
                            </a>
                        </div>
                    </td>
                    <td style="width: 45%">
                        <div class="mini-cart-description">
                            <h4>
                              <nuxt-link :to="'/urun-detay/' + item.product.id" class="name">
                                {{ item.product.title }} 
                              </nuxt-link>
                            </h4>
                            
                            <span class="size">20KE09484R2136 </span>
                            
                            <div class="price"><span> {{ item.product.price.toFixed(2) }} TL  </span></div>
                            
                        </div>
                    </td>
                    <td style="width: 10%" class="mini-cart-quantity">{{ item.count }}</td>
                    <td style="width: 15%" class="mini-cart-subtotal"><span>{{ (item.count) * (item.product.price.toFixed(2)) }} TL </span></td>
                </tr>
                
            </tbody>
        </table>
    </div><div class="mCSB_scrollTools" style="position: absolute; display: none;"><div class="mCSB_draggerContainer"><div class="mCSB_dragger" style="position: absolute; top: 0px;" oncontextmenu="return false;"><div class="mCSB_dragger_bar" style="position:relative;"></div></div><div class="mCSB_draggerRail"></div></div></div></div></div>
    <!--/.mini-cart-table-->
    <div class="mini-cart-footer">
    
        
        <div class="pull-right subtotal">
            <small>Toplam:</small>
            <span>{{ total }} TL</span>    
        </div>
        <a class="btn btn-sm btn-danger" href="/sepetim">
            <i class="fa fa-shopping-cart">&nbsp;</i>
            <span>Sepete Git</span>
        </a>
    </div>
    
    <!--/.mini-cart-footer-->
</div>
</template>

<script>
export default {
  data: () => {
    return {
    };
  },
  created() {
  },
  computed: {
    basket(){
      return this.$store.getters['basket/getBasketItems'];
    },
    subtotal(){
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].product.price;
      }
      return total.toFixed(2);
    },
    total() {
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += (this.basket[i].product.price * this.basket[i].count);
      }
      return total.toFixed(2);
    }
  },
  methods: {
    removeBasketItem(id){
      this.$store.dispatch('basket/removeBasketItem', id);
    },
    increase(id){
      this.$store.dispatch('basket/increaseBasketItem', id);
    },
    decrease(id){
      this.$store.dispatch("basket/decreaseBasketItem", id);
    }
  }
}
</script>