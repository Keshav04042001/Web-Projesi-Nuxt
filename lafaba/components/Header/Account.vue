<template>
<!--div >
	<div @mouseover="accountMenu = true" @mouseleave="accountMenu = false">
		  <span v-if="loggedIn" class="accountMenu">
			<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
				<i class="fa fa-user"></i><b class="caret"></b>
			</a>
			<ul class="login-panel-container" v-show="accountMenu"  style="display: none;">
				<li><a href="/store/userinfo.aspx"> <i class="fa fa-user"></i> HESAP BİLGİLERİM</a></li>
				<li><a href="/store/customerorders.aspx"><i class="fa fa-calendar"></i> SİPARİŞLERİM</a></li>
				<li><a href="/store/giftvoucher.aspx"><i class="fas fa-ticket-alt"></i> HEDİYE ÇEKLERİM</a></li>
				<li><a href="/store/useraddressinfo.aspx"><i class="fa fa-map-marker"></i> ADRESLERİM</a></li>
				<li><a href="/store/usershoppinglist.aspx"><i class="fa fa-shopping-basket"></i> ALIŞVERİŞ LİSTEM</a></li>
				<li class="divider"></li>                                    
                 <div>
                 <button style="color=pink" @click="signOut">
                        Sign Out
                 </button>
                 </div>
		
    </ul>
		  </span>
		<span id="not-logged-in-container"  class="">
	  
   
  </span></div-->
	 
</div>
 
</template>
<script>
export default {
  data: function () {
    return {
      accountMenu: false,
    }
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
  }
}
</script>
