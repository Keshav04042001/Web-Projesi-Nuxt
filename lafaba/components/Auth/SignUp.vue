<template>
        <div class="signup-container header-offset">
            <div class="signup-container-inner">
                <h1 class="section-title-inner">
                    <i class="fa fa-user"></i>
                    <span class="mleft-5">Üye Kayıt</span>
                    <a class="back-button visible-xs" onclick="history.go(-1);">
                        <i class="fa fa-caret-left"></i>
                        <span>Geri Dön</span>
                    </a>
                </h1>
                <p>Üyelik avantajlarından faydalanabilmek için lütfen üye olunuz.</p>
                <div class="panel panel-default ">
                    <div id="pnl-userdetail" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <div class="form-horizontal">
                                <div class="form-group  has-feedback">
                                    <label class="col-md-6 hide visible-lg visible-md control-label" for="textinput">Adı</label>
                                    <div class="col-md-18">
                                        <input name="ctl00$PortalContent$TxtFirstName" type="text" maxlength="50" id="ctl00_PortalContent_TxtFirstName" class="form-control km-required" data-vmax="10" placeholder="Adı" data-vmsg="Lütfen adınızı giriniz!" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-6 hide visible-lg visible-md  control-label" for="textinput">Soyadı</label>
                                    <div class="col-md-18">
                                        <input name="ctl00$PortalContent$TxtLastName" type="text" maxlength="50" id="ctl00_PortalContent_TxtLastName" class="form-control km-required non-numeric" placeholder="Soyadı" data-vmsg="Lütfen soyadınızı giriniz!" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-6 hide visible-lg visible-md  control-label" for="textinput">E-Posta</label>
                                    <div class="col-md-18">
                                        <input 
                                            name="ctl00$PortalContent$TxtEmail" 
                                            type="text" 
                                            maxlength="100" 
                                            id="ctl00_PortalContent_TxtEmail" 
                                            class="form-control km-required" 
                                            data-vtype="email" 
                                            placeholder="E-Posta" 
                                            data-vmsg="Lütfen e-posta adresinizi giriniz!" 
                                            value="" 
                                            v-model="email"
                                        >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-6 hide visible-lg visible-md  control-label" for="textinput">Şifre</label>
                                    <div class="col-md-18">
                                        <input 
                                            name="ctl00$PortalContent$TxtPassword" 
                                            type="password" 
                                            id="ctl00_PortalContent_TxtPassword" 
                                            class="form-control km-required" 
                                            placeholder="Şifre" 
                                            data-vmsg="Lütfen şifrenizi giriniz!"
                                            value="" 
                                            v-model="password"
                                        >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-6 control-label" for="textinput">Şifre Tekrar</label>
                                    <div class="col-md-18">
                                        <input 
                                            name="ctl00$PortalContent$TxtPasswordConfirm" 
                                            type="password" 
                                            id="ctl00_PortalContent_TxtPasswordConfirm" 
                                            class="form-control km-required" 
                                            placeholder="Şifre Tekrar" 
                                            data-vmsg="Lütfen şifrenizi tekrar giriniz!" 
                                            value="" 
                                            v-model="password"
                                        >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-6 hide visible-lg visible-md  control-label" for="textinput">Cep Telefonu</label>
                                    <div class="col-md-18">
                                        <input name="ctl00$PortalContent$TxtMobilePhone" type="text" maxlength="16" id="ctl00_PortalContent_TxtMobilePhone" class="form-control phone-mask km-required" data-vtype="phone" placeholder="Cep Telefonu" autocomplete="off" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-6 hide visible-lg visible-md  control-label" for="checkboxes">E-Posta Bilgilendirme</label>
                                    <div class="col-md-18">
                                        <div class="checkbox">
                                            <input id="ctl00_PortalContent_ChkEmail" type="checkbox" name="ctl00$PortalContent$ChkEmail"><label for="ctl00_PortalContent_ChkEmail">E-Posta almak istiyorum</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-6 control-label" for="checkboxes">Sözleşme</label>
                                    <div class="col-md-18">
                                        <div class="checkbox">
                                            <input id="ctl00_PortalContent_ChkContract" type="checkbox" name="ctl00$PortalContent$ChkContract"><label for="ctl00_PortalContent_ChkContract">Kullanıcı sözleşmesini okudum,kabul ediyorum</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-18 col-lg-offset-6">
                                        <a data-toggle="modal" data-dismiss="modal" href="#modal-contract">
                                            <i class="fa fa-file-pdf-o"></i>&nbsp; <span>Sözleşmeyi okumak için tıklayın!</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-18 col-lg-offset-6">
                                    <button id="ctl00_PortalContent_BtnRegister" class="btn btn-primary km-submit" href="javascript:__doPostBack('ctl00$PortalContent$BtnRegister','')" type="button" name="button" v-on:click="signup"><i class="fa fa-save"></i>&nbsp;Ücretsiz Üye Olun</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal-contract" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">× </button>
                                <style type="text/css">
                                .my-l {
                                color: #bd2732;
                                }

                                .my-l:hover {
                                color: black;
                                }
                                </style>
                        </div>
                        <div class="modal-footer"></div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
  import firebase from 'firebase'
  export default {
    name: 'Signup',
    data: function(){
      return{
        email: '',
        password: ''
      }
    },
    methods: {
      signup: function(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(function(user){
            alert('Your account has been created!')
          },
          function(error) {
            alert('Ooops. ' + error.message)
          }
        )
      }
    }
  }
</script>