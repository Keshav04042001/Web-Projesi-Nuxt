<template>
    <div class="step-address container main-container  header-offset">

            <script id="tmp-dialog" type="text/html">
                <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <div>{{message}}</div>
                </div>
            </script>

            <div class="modal fade modal-address" id="modal-select-address" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->

            <div class="row hide visible-lg visible-md">
                <div class="breadcrumbDiv col-lg-24">
                    <ul class="breadcrumb">
                        <li><a href="/">Ana Sayfa</a></li>
                        <li class="active"></li>
                    </ul>
                </div>
            </div>
            <input type="hidden" id="has-bill-address" value="0">

            <div class="row">
                <div class="col-lg-24">
                    <h1 class="section-title-inner"><i class="fa fa-user"></i><span class="mleft-5">Adres Bilgilerim</span></h1>
                    <p>Siparişinizin hızlı ve sorunsuz bir şekilde teslim edilmesi için lütfen üye ve adres bilgilerinizi doğru şekilde giriniz. </p>
                    
                    <div id="msg-page-dialog"></div>
                    <a id="anc-message" href="#"></a>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-18 col-md-16">

                    <div class="row">
                        <div class="col-xs-24" id="address-form">
<div id="pnl-add-address" class="pnl-add-address row">
    <div class="col-lg-24 form-horizontal">
        <input type="hidden" id="hdnAdrType" name="hdnAdrType" value="add-bill" data-name="type">
        <div class="form-group">
            <label class="control-label hide visible-lg visible-md col-md-5" for="txtName">Ad</label>
            <div class="col-md-10">
                <input type="text" id="txtName" name="txtName" class="form-control km-required non-numeric" data-vmsg="Lütfen adınızı girin!" data-name="name" value="" maxlength="50" placeholder="Ad" aria-required="true">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label hide visible-lg visible-md col-md-5" for="txtLastName">Soyad</label>
            <div class="col-md-10">
                <input type="text" id="txtLastName" name="txtLastName" class="form-control km-required non-numeric col-md-11" data-vmsg="Lütfen soyadınızı girin!" data-name="lastname" value="" maxlength="50" placeholder="Soyad" aria-required="true">
            </div>
        </div>
        
        <div class="form-group">
            <label class="control-label hide visible-lg visible-md col-md-5" for="txtEmail">E-posta</label>
            <div class="col-md-10">
                <input type="text" id="txtEmail" name="txtEmail" class="form-control km-required" data-vmsg="[ReqEmail]" data-vtype="email" maxlength="100" data-name="email" value="" placeholder="E-posta" aria-required="true">
            </div>
        </div>
        
        <div class="form-group">
            <label class="control-label hide visible-lg visible-md col-md-5" for="txtMobilePhone">Cep Telefonu</label>
            <div class="col-md-10">
                <input type="text" id="txtMobilePhone" data-vtype="phone" name="txtMobilePhone" class="form-control km-required phone-mask" data-vmsg="Lütfen cep telefon numaranızı girin!" data-name="mobilephone" value="" maxlength="16" placeholder="Cep Telefonu" autocomplete="off" aria-required="true">
            </div>
        </div>
        
        <h3 class="block-title-2">FATURA BİLGİLERİM</h3>
        <div class="form-group clearfix address-billtype">
            <div class="col-md-12">
                <div class="pull-left">
                    <div class="radio radio-success">
                        <input type="radio" value="1" name="chkBillType" id="chkPersonal" checked="">
                        <label for="chkPersonal">Bireysel</label>
                    </div>
                </div>
                <div class="pull-left mleft-20">
                    <div class="radio radio-success">
                        <input type="radio" value="2" name="chkBillType" id="chkCompany">
                        <label for="chkCompany">Kurumsal</label>
                    </div>
                </div>
            </div>
        </div>
        <div id="pnl-company" style="display: none;">
            <div class="form-group">
                <label class="control-label hide visible-lg visible-md col-md-5" for="txtCompany">Firma Ünvanı</label>
                <div class="col-md-10">
                    <input type="text" id="txtCompany" name="txtCompany" class="form-control km-required" data-vmsg="Lütfen firma ünvanı girin!" data-name="company" value="" maxlength="100" placeholder="Firma Ünvanı" aria-required="true">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label hide visible-lg visible-md col-md-5" for="textinput">Vergi Numarası</label>
                <div class="col-md-10">
                    <input type="text" id="txtTaxNumber" name="txtTaxNumber" class="form-control km-required tctask-mask" data-vtype="tctax" data-vmsg="Lütfen vergi numaranızı girin!" data-name="taxnumber" value="" maxlength="20" placeholder="Vergi Numarası" aria-required="true">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label hide visible-lg visible-md col-md-5" for="txtTaxOffice">Vergi Dairesi</label>
                <div class="col-md-10">
                    <input type="text" id="txtTaxOffice" name="txtTaxOffice" class="form-control km-required" data-vmsg="Lütfen vergi dairesini girin!" data-name="taxoffice" value="" maxlength="100" placeholder="Vergi Dairesi" aria-required="true">
                </div>
            </div>
        </div>
        
        <div id="pnl-personal">
            <div class="form-group">
                <label class="control-label hide visible-lg visible-md col-md-5 " for="txtTCNumber">TC Kimlik Numarası (Zorunlu Değildir)</label>
                <div class="col-md-10">
                    <input type="text" id="txtTCNumber" name="txtTCNumber" class="form-control  tc-mask" data-vmsg="Lütfen TC kimlik numaranızı girin!" data-name="tcnumber" data-vtype="tcid" data-vmax="11" data-vmin="11" value="" maxlength="11" placeholder="TC Kimlik Numarası (Zorunlu Değildir)" autocomplete="off">
                </div>
            </div>
        </div>
        
        <h3 class="block-title-2">ADRES BİLGİLERİM</h3>


        <div class="form-group">
            <label class="control-label hide visible-lg visible-md col-md-5" for="txtDefinition">Adres Tanımı (İş/Ev)</label>
            <div class="col-md-10">
                <div class="pull-left">
                    <div class="radio radio-success">
                        <input type="radio" name="chkAddressType" id="chkAdrHome" value="Ev" checked="">
                        <label for="chkAdrHome">Ev</label>
                    </div>
                </div>
                <div class="pull-left mleft-20">
                    <div class="radio radio-success">
                        <input type="radio" name="chkAddressType" id="chkAdrWork" value="İş">
                        <label for="chkAdrWork">İş</label>
                    </div>
                </div>
                <div class="pull-left mleft-20">
                    <div class="radio radio-success">
                        <input type="radio" name="chkAddressType" id="chkAdrOther" value="Diğer">
                        <label for="chkAdrOther">Diğer</label>
                    </div>
                </div>
                <input type="hidden" id="txtDefinition" name="txtDefinition" data-name="definition" value="Ev">
            </div>
        </div>
        
        <div class="form-group">
            <label class="control-label hide visible-lg visible-md col-md-5" for="lstCity">İl</label>
            <div class="col-md-10">
                <select name="lstCity" id="lstCity" class="form-control km-required" data-vmsg="Lütfen ilçe seçin!" data-name="city" data-svalue="" aria-required="true"><option value="">[İl Seç]</option><option value="01">ADANA</option><option value="02">ADIYAMAN</option><option value="03">AFYONKARAHİSAR</option><option value="04">AĞRI</option><option value="68">AKSARAY</option><option value="05">AMASYA</option><option value="06">ANKARA</option><option value="07">ANTALYA</option><option value="75">ARDAHAN</option><option value="08">ARTVİN</option><option value="09">AYDIN</option><option value="10">BALIKESİR</option><option value="74">BARTIN</option><option value="72">BATMAN</option><option value="69">BAYBURT</option><option value="11">BİLECİK</option><option value="12">BİNGÖL</option><option value="13">BİTLİS</option><option value="14">BOLU</option><option value="15">BURDUR</option><option value="16">BURSA</option><option value="17">ÇANAKKALE</option><option value="18">ÇANKIRI</option><option value="19">ÇORUM</option><option value="20">DENİZLİ</option><option value="21">DİYARBAKIR</option><option value="81">DÜZCE</option><option value="22">EDİRNE</option><option value="23">ELAZIĞ</option><option value="24">ERZİNCAN</option><option value="25">ERZURUM</option><option value="26">ESKİŞEHİR</option><option value="27">GAZİANTEP</option><option value="28">GİRESUN</option><option value="29">GÜMÜŞHANE</option><option value="30">HAKKARİ</option><option value="31">HATAY</option><option value="76">IĞDIR</option><option value="32">ISPARTA</option><option value="34">İSTANBUL</option><option value="35">İZMİR</option><option value="46">KAHRAMANMARAŞ</option><option value="78">KARABÜK</option><option value="70">KARAMAN</option><option value="36">KARS</option><option value="37">KASTAMONU</option><option value="38">KAYSERİ</option><option value="79">KİLİS</option><option value="71">KIRIKKALE</option><option value="39">KIRKLARELİ</option><option value="40">KIRŞEHİR</option><option value="41">KOCAELİ</option><option value="42">KONYA</option><option value="43">KÜTAHYA</option><option value="44">MALATYA</option><option value="45">MANİSA</option><option value="47">MARDİN</option><option value="33">MERSİN</option><option value="48">MUĞLA</option><option value="49">MUŞ</option><option value="50">NEVŞEHİR</option><option value="51">NİĞDE</option><option value="52">ORDU</option><option value="80">OSMANİYE</option><option value="53">RİZE</option><option value="54">SAKARYA</option><option value="55">SAMSUN</option><option value="63">ŞANLIURFA</option><option value="56">SİİRT</option><option value="57">SİNOP</option><option value="73">ŞIRNAK</option><option value="58">SİVAS</option><option value="59">TEKİRDAĞ</option><option value="60">TOKAT</option><option value="61">TRABZON</option><option value="62">TUNCELİ</option><option value="64">UŞAK</option><option value="65">VAN</option><option value="77">YALOVA</option><option value="66">YOZGAT</option><option value="67">ZONGULDAK</option></select>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label hide visible-lg visible-md col-md-5" for="lstDistrict">İlçe</label>
            <div class="col-md-10">
                <select name="lstDistrict" id="lstDistrict" class="form-control km-required" data-vmsg="Lütfen şehir seçin!" data-name="district" data-svalue="" aria-required="true">
                </select>
            </div>
        </div>
        
        <div class="form-group">
            <label class="control-label hide visible-lg visible-md col-md-5" for="txtAddress">Tam Adres</label>
            <div class="col-md-10">
                <textarea id="txtAddress" name="txtAddress" class="form-control km-required" data-vmsg="Lütfen tam adresinizi yazın!" data-name="address" maxlength="250" placeholder="Tam Adres" aria-required="true"></textarea>
            </div>
        </div>
    </div>

    <div class="col-md-15">
        <div class="save-address clearfix">
            <a id="btn-adr-save" class="btn btn-primary km-submit pull-right mleft-20"><i class="fa fa-save"></i>&nbsp; Adres Bilgilerimi Kaydet</a>
            <a id="btn-adr-cancel" class="btn btn-default pull-right" style="display: none;"><i class="fa fa-remove"></i>&nbsp; İptal</a>
        </div>
    </div>
</div>
</div>
                    </div>

                    <div id="address-info-panel" style="display: none;">
                        <div class="row">
                            <div class="col-xs-24 col-sm-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix">
                                        <div class="pull-left">
                                            <h3 class="panel-title"><strong>Fatura Bilgilerim</strong></h3>
                                        </div>
                                        <div class="pull-right">
                                            
                                                <a href="#" class="btn btn-sm btn-success btn-address" data-atype="bill" data-ptype="edit"><i class="fa fa-edit"></i>&nbsp;Adres Düzenle</a>
                                            
                                            
                                        </div>
                                    </div>
                                    <div class="panel-body bill-body"></div>
                                </div>
                            </div>
                            <div class="col-xs-24 col-sm-12 pnl-shipping" style="display: none;">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix">
                                        <div class="pull-left">
                                            <h3 class="panel-title"><strong>Teslimat Bilgilerim</strong></h3>
                                        </div>
                                        <div class="pull-right">
                                            
                                                <a href="#" class="btn btn-sm btn-success btn-address" data-atype="ship" data-ptype="edit"><i class="fa fa-edit"></i>&nbsp;Adres Düzenle</a>
                                            
                                            
                                        </div>
                                    </div>
                                    <div class="panel-body ship-body"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-24">
                                <div class="form-group">
                                    <div class="checkbox">
                                        <span class="chk-option chk-ship-address-same" data-target="pnl-shipping"><input id="ctl00_PortalContent_ChkShipAddressSame" type="checkbox" name="ctl00$PortalContent$ChkShipAddressSame" checked="checked"><label for="ctl00_PortalContent_ChkShipAddressSame">Teslimat bilgilerim fatura bilgilerim ile aynı olsun.</label></span>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <div class="checkbox">
                                        <span class="chk-option" data-target="txt-giftnote"><input id="ctl00_PortalContent_ChkOrderGiftNote" type="checkbox" name="ctl00$PortalContent$ChkOrderGiftNote"><label for="ctl00_PortalContent_ChkOrderGiftNote">Hediye Notu:</label></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input name="ctl00$PortalContent$TxtOrderGiftNote" type="text" maxlength="250" id="ctl00_PortalContent_TxtOrderGiftNote" class="form-control txt-giftnote disabled" style="display: none;">
                                </div>
                                
                                <div class="form-group">
                                    <div class="checkbox">
                                        <span class="chk-option" data-target="txt-ordernote"><input id="ctl00_PortalContent_ChkOrderNote" type="checkbox" name="ctl00$PortalContent$ChkOrderNote"><label for="ctl00_PortalContent_ChkOrderNote">Sipariş Notu:</label></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea name="ctl00$PortalContent$TxtOrderNote" rows="2" cols="20" id="ctl00_PortalContent_TxtOrderNote" class="form-control txt-ordernote" style="display: none;" maxlength="250"></textarea>
                                </div>
                                
                                <div class="form-group" style="display: none">
                                    <a id="ctl00_PortalContent_Pstbtn" href="javascript:__doPostBack('ctl00$PortalContent$Pstbtn','')"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-8 cart-right-panel">
<div class="contentBox">
    <div class="w100">
        <div class="table-block">
            <div class="w100 cart-summary-container">
                <table class="std table cart-summary">
                    <tbody>
                        <tr>
                            <td>Sepet Tutarı</td>
                            <td class="price">
                                199,99 TL
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                Kampanya İndirimi</td>
                            <td class="price">-40,00 TL
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                Kargo Ücreti</td>
                            <td class="price">
                                
                                <i class="fa fa-info-circle text-success ui-tooltip" title="" data-placement="top" data-original-title="Kargo ücreti seçilen kargo firmasına ve ödeme şekline göre değişebilir."></i>&nbsp;
                                <span class="text-success">Ücretsiz!</span>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Genel Toplam</td>
                            <td class="site-color total-price">
                                159,99 TL
                            </td>
                        </tr>

                        
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
                                
                                <a id="btn-complate-order" class="btn btn-success btn-lg btn-block btn-next-step" style="display: none;">
                                    <i class="fa fa-check-square-o"></i>&nbsp;Kaydet ve Devam Et&nbsp;<i class="fa fa-arrow"></i>
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
        </div>
</template>

<script>
export default {
    name: 'Adres'
}
</script>