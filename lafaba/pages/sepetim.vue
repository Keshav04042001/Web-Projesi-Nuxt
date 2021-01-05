<template>
   <div class="step-cart container main-container header-offset" style="padding-top: 0px;">

            <script id="tmp-dialog" type="text/html">
                <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <div>{{message}}</div>
                </div>
            </script>

            <div class="row hide visible-lg visible-md">
                <div class="breadcrumbDiv col-lg-24">
                    <ul class="breadcrumb">
                        <li><a href="/store/userinfo.aspx">Hesabım</a></li>
                        <li class="active">Sepetim</li>
                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-18 col-md-16">
                    <h1 class="section-title-inner"><i class="fa fa-shopping-basket"></i>&nbsp;Sepetim</h1>
                    
                </div>
            </div>
            <!--/.row-->

            <div class="row">
                <div class="col-md-18">
                    
                    <a href="#anc-messge"></a>
                    <div id="msg-page-dialog"></div>
                    <div class="row userInfo">
                        <div class="col-xs-24 col-sm-24">
                            <div class="cart-content w100">
                                <table class="cart-table table-responsive" style="width: 100%">
                                    <tbody>
                                        <tr class="cart-product cart-table-header">
                                            <td style="width: 15%">RESİM</td>
                                            <td style="width: 40%">Ürün</td>
                                            <td style="width: 10%">Adet</td>
                                            <td style="width: 20%">Toplam</td>
                                            <td style="width: 5%" class="delete">&nbsp;</td>
                                        </tr>
                                        
                                                <tr v-for="item in basket" :key=" 'basket' + item.id" class="cart-product">
                                                    <td class="cart-product-thumb">
                                                        <input type="hidden" name="ctl00$PortalContent$RptCart$ctl00$HdnCartID" id="ctl00_PortalContent_RptCart_ctl00_HdnCartID" value="67784">
                                                        <div>
                                                            <a :href="'/urun-detay/'+ item.product.id" title="Erkek Lacivert Kapüşonlu Fermuarlı Denim Sweatshirt 36">
                                                                <img :src="item.product.image"  title="Erkek Lacivert Kapüşonlu Fermuarlı Denim Sweatshirt 36" alt="img">
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="cart-description">
                                                            <h4>
                                                                <nuxt-link :to="'/urun-detay/' + item.product.id" class="name">
                                                                    {{ item.product.title }} 
                                                                </nuxt-link>
                                                            </h4>
                                                            <span class="size">20KE09484R2136</span>
                                                            

                                                            
                                                            
                                                                <div class="price"><span>  {{ item.product.price.toFixed(2) }} TL  </span></div>
                                                            
                                                            
                                                        </div>
                                                    </td>
                                                    <td class="cart-quanity">
                                                        <div class="input-group bootstrap-touchspin">
                                                            <span class="input-group-btn">
                                                                <button href="javascript:void(0)" @click="decrease(item.id)" class="btn btn-link bootstrap-touchspin-down" type="button">-</button>
                                                            </span>
                                                            <span class="input-group-addon bootstrap-touchspin-prefix">{{ item.count }}</span>
                                                            <span class="input-group-btn">
                                                                <button href="javascript:void(0)" @click="increase(item.id)" class="btn btn-link bootstrap-touchspin-up" type="button">+</button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                     <td class="price">
                                                         {{ total }} TL
                                                    </td>
                                                    <td class="delete">
                                                        <a href="javascript:void(0)" @click="removeBasketItem(item.id)" id="ctl00_PortalContent_RptCart_ctl00_DeleteBtn" title="Sil"> <i class="fa fa-trash" aria-hidden="true" ></i></a>
                                                    </td>
                                                </tr>
                                                
                                            
                                    </tbody>
                                </table>
                            </div>
                            <!--cart-content-->

                            <div class="cart-footer w100">
                                <div class="box-footer">
                                    <div class="pull-left">
                                        <a href="/login.aspx" id="ctl00_PortalContent_BtnRegister" class="btn btn-success hidden"><i class="fa fa-arrow-left"></i>&nbsp;Üye Girişi</a>
                                        
                                        <a class="btn btn-default" href="/"><i class="fa fa-arrow-left"></i>&nbsp;Alışverişe Devam</a>
                                    </div>
                                    <div class="pull-right">
                                        <a id="ctl00_PortalContent_UpdateBtn" class="btn btn-primary" href="javascript:__doPostBack('ctl00$PortalContent$UpdateBtn','')"><i class="fa fa-undo"></i>&nbsp;Kaydet</a>
                                    </div>
                                </div>
                            </div>
                            <!--/ cart-footer -->
                        </div>
                    </div>
                    <!--/row end-->
                </div>
                <div class="col-md-6 cart-right-panel">
<div class="contentBox">
    <div class="w100">
        <div class="table-block">
            <div class="w100 cart-summary-container">
                <table class="std table cart-summary">
                    <tbody>
                        <tr>
                            <td>Sepet Tutarı</td>
                            <td class="price">
                                 {{ total }} TL
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                Kampanya İndirimi</td>
                            <td class="price">-
                                    0 TL
                            </td>
                        </tr>
                        
                        <!--tr>
                            <td>
                                Kargo Ücreti</td>
                            <td class="price">
                                
                                <i class="fa fa-info-circle text-success ui-tooltip" title="" data-placement="top" data-original-title="Kargo ücreti seçilen kargo firmasına ve ödeme şekline göre değişebilir."></i>
                                &nbsp;7,99 TL
                                
                            </td>
                        </tr-->
                        <tr>
                            <td>Genel Toplam</td>
                            <td class="site-color total-price">
                               {{ total }} TL
                            </td>
                        </tr>

                        
                        <tr><td colspan="2" style="text-align: center; font-size: 16px; color: #d41a1a;">150 TL ve üzeri alışverişlerde<br>KARGO ÜCRETSİZ!</td></tr>
                        
                        <tr class="campaign-code-area">
                            <td colspan="2">
                                <div>Kampanya Kodu:</div>
                                
                                <div class="input-group w100">
                                    <input type="text" class="form-control input-sm coupon-code" placeholder="Kampanya kodunuzu girin!">
                                    <span class="input-group-btn">
                                        <a id="btn-use-coupon" class="btn btn-info btn-coupon btn sm" data-type="use-coupon">Kullan</a>
                                    </span>
                                </div>
                                
                            </td>
                        </tr>
                        
                        <tr>
                            <td colspan="2">
                                
                                <a href="checkoutp1.aspx" id="btn-complate-order" class="btn btn-success btn-lg btn-block btn-next-step">
                                    <i class="fa fa-check-square-o"></i>&nbsp;Sepeti Onayla&nbsp;<i class="fa fa-arrow"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- End popular -->
</div>

            </div>
            <!--/row-->

            <div style="clear: both"></div>
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
