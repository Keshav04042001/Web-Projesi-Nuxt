<template>
    <body class="pace-running pace-done pace-done">
        <div class="navbar navbar-km megamenu headerv5" role="navigation"> 
            <TopBar />
            <div class="header-container">
                <div class="navbar-top visible-xs">
                    <div class="container">
                        <div class="row">
                            <div class="pull-left">
                                <a href="javascript:;" class="mobile-menu-popup navbar-toggle " data-toggle="modal" data-target="#mobile-menu-popup">
                                    <i class="fa fa-bars"></i>
                                </a>
                            </div>
                            <div class="hidden-lg hidden-md hidden-sm">
                                <a class="navbar-brand mobile-logo" href="/">
                                    <img class="img-responsive" src="https://www.lafaba.com/skins/default/images/logo-white.png" alt="LOGO">
                                </a>
                            </div>
                            <div class="pull-right visible-xs">
                                <button type="button" class="navbar-toggle  navbar-mini-cart" data-toggle="collapse" data-target=".navbar-cart">
                                    <i class="fa fa-shopping-cart"></i>
                                </button>
                                
                          
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w100 brandWrap hidden-xs">
                    <div class="container p0">
                        <div class="col-xs-6 header-center p0">
                            <a class="navbar-brand " href="/">
                                <img class="img-responsive" src="https://www.lafaba.com//skins/default/images/logo-white.png" alt="LOGO">
                            </a>
                        </div>
                        <SearchBox />            
                        <div class="col-xs-6 pull-right p0">
        
                            <div class="nav navbar-nav navbar-right hidden-xs">
                            
                                <div id="dsk-cart-menu" class="dropdown cart-menu"> <HeaderBasket />
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <div class="cart-quantity-icon">
                                            <i class="fa fa-shopping-cart"></i>
                                            <span class="cart-response"> ({{ basket.length }}) </span> 
                                        </div>
                                    </a>
                                </div>
                            </div>  
                               
                           
                            <ul class="user-menu">
                                <li class="visible-xs">
                                    <a class="toggle-search collapse" data-toggle="collapse" data-target="#search-new-mobile" href="javascript:;" aria-expanded="true"><i class="fa fa-search"></i></a></li>
                                    <li class="dropdown dropdown-hover hasUserMenu">
                                       
                                        <Nuxt-link to="/login.aspx">
                                            <i class="fa fa-user"></i>
                                        </Nuxt-link> 
                                           Logged in
                                    <span v-if="loggedIn">Yes</span>
                                    <span v-else>No</span> 
                                    
                                    <div>
                                        <button  v-if="loggedIn" style="color=pink" @click="signOut">
                                            Sign Out
                                        </button>
                                    </div>
                                        <HeaderBasket />
                                    </li>
                                    <li><a href="/store/usershoppinglist.aspx"><i class="fa fa-heart"></i></a>
                                </li>
                            </ul>
                           
                            <!--/.navbar-nav hidden-xs-->
                        </div>
                    </div>
                </div>
                <!-- /w100 -->

                <div class="navbar-menu">
                    <div class="container p0">
                        <!-- this part is duplicate from cart-menu  keep it for mobile -->
                        <div class="navbar-cart  collapse">
                            <h3 class="cart-h3">Sepetim</h3>
                            <div id="mbl-cart-menu" class="cart-menu  col-lg-8 col-xs-24 col-md-8 ">
                            </div>
                            <!--/.cart-menu-->
                        </div>
                        <!--/.navbar-cart-->
                        <Navbar />                
                    </div>
                </div>
            </div>
        </div> <Account v-if="loggedIn === true"/>
    </body>
</template>

<script>
import Account from "@/components/Header/Account"
import Navbar from "@/components/Header/Navbar";
import SearcBox from "@/components/Header/SearchBox"
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    name:'Menu',
    data(){
        return {
            loggedIn : false,
        }
    },
    components: {
        Account,
        Navbar,
        SearcBox
    },
    computed: {
    basket() {
      return this.$store.getters["basket/getBasketItems"];
    },
    
    },
    methods:{
       async signOut(){
            try{
                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.push({ name : "login.aspx"})
            }
            catch(error){
                console.log(error)
            }
        }
  },
  created(){
      firebase.auth().onAuthStateChanged(user=> {
          this.loggedIn = !!user;
          if(user){
              this.loggedIn=true;
          }
          else{
              this.loggedIn=false;
          }
      })
  }
}
</script>
