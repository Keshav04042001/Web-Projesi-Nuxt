<template>
    <div class="login-container">
            <div class="login-panel">
                <div class="login-header">
                    <h1 class="section-title-inner">
                        <i class="fa fa-lock"></i>
                        <span class="mleft-5">&nbsp;Üye Girişi</span>
                        <a class="back-button visible-xs" onclick="history.go(-1);">
                            <i class="fa fa-caret-left"></i>
                            <span>Geri Dön</span>
                        </a>
                    </h1>
                </div>
                <div class="login-content">
                    <div class="form-group">
                        <!-- <div>
                            <div class="radio radio-success">
                                <input type="radio" name="chkLoginOption" id="chkLogin" value="login" checked />
                                <label for="chkLogin">Üye Girişi</label>
                            </div>
                        </div> -->
                        <!-- <div>
                            <div class="radio radio-success">
                                <input type="radio" name="chkLoginOption" id="chkRegister" value="register"  />
                                <label for="chkRegister">Üye Ol</label>
                            </div>
                        </div> -->
                        <input name="ctl00$PortalContent$hdnLoginOption" type="hidden" id="ctl00_PortalContent_hdnLoginOption" value="login">
                    </div>
                    <form @submit.prevent="pressed">
                            <div class="login-form">
                            <div class="form-group">
                                <label for="ctl00_PortalContent_TxtEmail">E-Posta</label>
                                <input 
                                    name="ctl00$PortalContent$TxtEmail" 
                                    maxlength="100" 
                                    id="ctl00_PortalContent_TxtEmail" 
                                    class="form-control km-required" 
                                    aria-required="true"
                                    type="text" 
                                    placeholder="login" 
                                    v-model="email"
                                >
                            </div>
                            <div class="form-group">
                                <label for="ctl00_PortalContent_TxtPassword">Şifre</label>
                                <input
                                    name="ctl00$PortalContent$TxtPassword"
                                    id="ctl00_PortalContent_TxtPassword" 
                                    class="form-control km-required" 
                                    type="password" 
                                    placeholder="password" 
                                    v-model="password"
                                >
                            </div>
                            <div class="form-group clearfix">
                                <div class="checkbox pull-left m0">
                                    <input
                                        id="ctl00_PortalContent_ChkRemember"
                                        type="checkbox"
                                        name="ctl00$PortalContent$ChkRemember"
                                    >
                                    <label for="ctl00_PortalContent_ChkRemember">Beni Hatırla</label>
                                </div>
                                <a title="Şifrenizi hatırlamıyorsanız tıklayın." href="/psreset.aspx" class="pull-right m0">
                                    <i class="fa fa-question"></i>
                                    <span> Şifremi unuttum!</span>
                                </a>
                            </div>
                            <div  class="form-group">
                               <button id="ctl00_PortalContent_BtnLogin"  class="btn btn-lg btn-block btn-primary km-submit">
                                   
                                    <i class="fa fa-sign-in"></i><span> Üye Girişi Yap!</span>
                                
                                </button> 
                               
                            </div>
                            <div class="form-group or-register">
                                <p class="text-center">Henüz Üye Olmadınız mı?</p>
                            </div>
                            <div class="form-group">
                                <a href="/registeruser.aspx" class="btn btn-lg btn-block btn-primary">
                                    <i class="fa fa-user-plus"></i>
                                    <span> Ücretsiz üyelik için tıklayın!</span>
                                </a>
                            </div>
                        </div>
                    </form>
                    <div class="error" v-if="error">{{error.message}}</div>
                    <div class="modal fade" id="modal-contract" tabindex="-1" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-close"></i></button>
                                    <p>
	&nbsp;</p>

<style type="text/css">
.my-l {
  color: #bd2732;
}

.my-l:hover {
  color: black;
}</style>

                                </div>
                                <div class="modal-footer">
                                </div>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                        <!-- /.modal-dialog -->
                    </div>

                    <div class="modal fade" id="modal-privacy" tabindex="-1" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-close"></i></button>
                                    <p>
	&nbsp;</p>


                                </div>
                                <div class="modal-footer">
                                </div>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                        <!-- /.modal-dialog -->
                    </div>

                    <a id="ctl00_PortalContent_BtnLnk" href="javascript:__doPostBack('ctl00$PortalContent$BtnLnk','')"></a>

                </div>
            </div>
        </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    pressed() {
        
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data)
          this.$router.push('/')
        })
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>