<template>

  <div class="main">
    <div class="form-container">
      <form>
        <div>
          <i class="fa fa-lock" id="kilit"></i>
          <h3><strong>Üye Girişi</strong></h3>
        </div>
        <div style="position:relative;top:100px;">
          <div>
            <label style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
display: inline-block;
max-width: 100%;
margin-bottom: 5px;
font-weight: bold;
position:relative;
top:-10px;
left:-100px;
" for="ctl00_PortalContent_TxtEmail" id="TxtEmail">E-Posta</label>
            <br>
            <input 
            v-model="input.username"
            type="text"
            id="email"
            name="email"
            
            required autofocus="autofocus"
            class="inputs"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
font: inherit;
margin: 0;
font-family: inherit;
display: block;
width: 100%;
height: 34px;
padding: 6px 12px;
line-height: 1.42857143;
color: #555555;
background-color: #ffffff;
background-image: none;
border: 1px solid #cccccc;
transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
border-color: #DDDDDD;
box-shadow: none;
border-radius: 3px;
border-style: solid;
border-width: 1px;
font-size: 14px;
margin-bottom: 6px;"/>
          </div>
          <br>
        <div style="position:relative;">
          <label style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
display: inline-block;
max-width: 100%;
margin-bottom: 5px;
font-weight: bold;
position:relative;
top:-10px;
left:-200px;" for="ctl00_PortalContent_TxtPassword">Şifre</label>
          <br>
           <input
           style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
font: inherit;
margin: 0;
font-family: inherit;
display: block;
width: 100%;
height: 34px;
padding: 6px 12px;
line-height: 1.42857143;
color: #555555;
background-color: #ffffff;
background-image: none;
border: 1px solid #cccccc;
transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
border-color: #DDDDDD;
box-shadow: none;
border-radius: 3px;
border-style: solid;
border-width: 1px;
font-size: 14px;
margin-bottom: 6px;"
            v-model="input.password"
            id="password"
            name="password"
            type="password"
            required class="inputs"
            placeholder="Şifre"/>
        </div>
        <br>
          <input style="position:relative;
left:-170px;" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
          <label style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
max-width: 100%;
min-height: 20px;
margin-bottom: 0;
font-weight: normal;
cursor: pointer;
display: inline-block;
vertical-align: middle;
position: relative;
padding-left: 5px;
padding-right: 5px;
position:relative;
left:-170px;" for="vehicle1"> Beni Hatırla</label><br>
      </div>
      <div>
        <a style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
background-color: transparent;
color: #000;
text-decoration: none;
outline: none !important;
transition: all .2s ease-in;
float: right !important;
margin: 0 !important;
position:relative;
left:3px;
top:85px;" >
          <i style="color:black; position:relative;
left:1px; " class="fa fa-question"></i>
          Şifremi unuttum!
          </a>
      </div>

      <div class="girisyap_btn_container">
      <button v-on:click="login()"  type="submit" class="girisyap_btn">
        <i class="fas fa-sign-in-alt"></i>
        Üye Girişi Yap!</button>
      </div>
      <p style="position: relative;
  left: 70px;
  top: 210px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
margin: 0 0 10px;
text-align: center;">Henüz Üye Olmadınız mı ?</p>
      <div class="hesabınız_yok_mu">
            <p style="">
                
                <br>
                <button style="" id="üyeol_button">
                  <i class="fa fa-user-plus"></i>
                  <router-link id="link" class="link" to='/kayitOl'>Ücretsiz Üyelik için Tıklayın!</router-link>
                </button>
              
              </p>
      </div>
    </form>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
    data(){
      return{
        input: {
          username:"",
          password:""
        },
        Uyeler: [],
        hatali:false
        
      };
    },
    async created () {
     
     try {
      // const res = await axios.get("");
       this.Uyeler = res.data;
     }catch (e) {
       console.error(e);
     }
    },
    methods: {
      login(){
        for (let i=0;i<this.Uyeler.length;i++){
          if(this.input.username!= "" && this.input.password !=""){
            if (
               this.input.username == this.Uyeler[i].Eposta &&
               this.input.password == this.Uyeler[i].Parola

            ){
              alert("Giriş Başarılı");
              this.$emit("authendicated",true);
              this.$router.replace({path:"/"});
              this.hatali =true ;
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
h3{
  float: left;
  position: relative;
  left: 50px;
}

.main{
  background-image: url(https://www.lafaba.com/skins/shared/images/content/main-page-desktop-fw20.jpg);
  background-color: white;
  width:1300;
  height: 700px;
  position: relative;
  top:200x;
}

body
{
margin:0;
padding:0;
font-family:sans-serif;
}

/*-----------------------------------------------------------------------------------------------------------------------------*/
.form-container /*girişyap kısmının genel olarak içine alındığı class*/
{
  position:absolute;
  top:335px;
  left:650px;
  transform:translate(-50%,-40%); /*html elemanlarını döndürmek,boyutlandırmak,eğmek için kullanılır*/ 
 /* 50px aşağıya 40px sağa öteler*/ 
  width:450px;
  height:560px;
  background:white;
   box-sizing: border-box;


}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.girisyap_btn
{
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
  color: white;
  width: 450px;
  position: relative;
  left: -80px;
  top: -50px;
  height: 43px;
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  background-color:black;
  outline:none; 
  border-radius:  5px/5px;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.girisyap_btn_container
{
  position:absolute;
  bottom:85px;
  left:80px;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.parolanızımı_unuttunuz_container
{
  position:absolute;
  left:0px;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.girisyap_btn:hover
{
  outline:none;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.hesabınız_yok_mu
{
  position:absolute;
  bottom:9px;
 left:130px;

}
#link{
  color:white;
  text-decoration:none;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.password{
  width: 100%;
  width: 350;
  height: 34;
}
#TxtEmail{
  float: left;
  font-size: 50;
}
 
#kilit{
  float: left;
  position: relative;
  right: -20px;
  top: 18px;
  color:black;
}

#üyeol_button {
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
  color: white;
  width: 450px;
  position: relative;
  left: -130px;
  top: -30px;
  background: black;
  border-radius:  5px/5px;
  height: 43px;
  text-align: center;
}

</style>