<template>
  <div class="main">
      <div id="içerik">
             <i class="fa fa-user" id="user-icon"></i>
             <span id="span1" class="mleft-5">Adres Bilgilerim</span>
             <p id="p1-e">Siparişinizin hızlı ve sorunsuz bir şekilde teslim edilmesi için lütfen üye ve adres bilgilerinizi doğru şekilde giriniz.</p>
             <br>
             <form>
                 <div class="ad_div">
                     <input v-model="Ad" 
                     type="text"
                     required
                     name="Adı"
                     class="inputs"
                     placeholder="Ad"
                     id="ad_input"
                    >  
                 </div>
                 <div class="soyad_div">
                     <input v-model="Soyad" 
                     type="text"
                     required
                     name="Soyadı"
                     class="inputs"
                     placeholder="Soyad"
                     id="soyad_input"
                    > 
                 </div>
                 <div class="eposta_div">
                     <input v-model="Eposta" 
                     type="text"
                     required
                     name="Eposta"
                     class="inputs"
                     placeholder="E-posta"
                     id="eposta_input"
                    > 
                 </div>
                 <div class="ceptelefonu_div">
                     <input v-model="Eposta" 
                     type="text"
                     required
                     name="ceptelefonu"
                     class="inputs"
                     placeholder="Cep Telefonu"
                     id="ceptel_input"
                    > 
                 </div>
                 <h4 id="fat-h">Fatura Bilgilerim</h4>
                 <hr style="position: relative; left:-50px; top: 100px; color:grey; width: 90%;">
                 <br>
                 <br>
                 <br>
                 <br>
                 <br>
                 <br>
                 <br>
                 <div id="radio_div">
                    <input type="radio" id="bireysel"><label for="bireysel"> Bireysel</label>
                    <input type="radio" id="kurumsal"><label for="kurumsal"> Kurumsal</label>
                 </div>
                 <div class="tcno_div">
                     <input v-model="TcNo" 
                     type="TcNo"
                     required
                     name="TcNo"
                     class="inputs"
                     placeholder="TC Kimlik Numarası (Zorunlu Değildir)"
                     id="tcno-input"
                    >
                 </div>
                 
                 <h4 id="fat-h">Adres Bilgilerim</h4>
                 <hr style="position: relative; left:-50px; top: 100px; color:grey; width: 90%;">
                 <br>
                 <br>
                 <br>
                 <br>
                 <br>
                 <br>
                 <div id="radio_div">
                    <label><strong>Adres Tanımı (İş/Ev)                  </strong></label>
                    <input type="radio" id="ev"><label for="ev">          Ev   </label>
                    <input type="radio" id="iş"><label for="iş">   İş   </label>
                    <input type="radio" id="diğer"><label for="diğer">   Diğer   </label>
                 </div>
                 <br>
                 <br>
                 <div id="il_div">
                       <label><strong>İl   </strong></label>
                       <select id="il_select">
                           <option value="">[İl Seç]</option><option value="01">ADANA</option><option value="02">ADIYAMAN</option><option value="03">AFYONKARAHİSAR</option><option value="04">AĞRI</option><option value="68">AKSARAY</option><option value="05">AMASYA</option><option value="06">ANKARA</option><option value="07">ANTALYA</option><option value="75">ARDAHAN</option><option value="08">ARTVİN</option><option value="09">AYDIN</option><option value="10">BALIKESİR</option><option value="74">BARTIN</option><option value="72">BATMAN</option><option value="69">BAYBURT</option><option value="11">BİLECİK</option><option value="12">BİNGÖL</option><option value="13">BİTLİS</option><option value="14">BOLU</option><option value="15">BURDUR</option><option value="16">BURSA</option><option value="17">ÇANAKKALE</option><option value="18">ÇANKIRI</option><option value="19">ÇORUM</option><option value="20">DENİZLİ</option><option value="21">DİYARBAKIR</option><option value="81">DÜZCE</option><option value="22">EDİRNE</option><option value="23">ELAZIĞ</option><option value="24">ERZİNCAN</option><option value="25">ERZURUM</option><option value="26">ESKİŞEHİR</option><option value="27">GAZİANTEP</option><option value="28">GİRESUN</option><option value="29">GÜMÜŞHANE</option><option value="30">HAKKARİ</option><option value="31">HATAY</option><option value="76">IĞDIR</option><option value="32">ISPARTA</option><option value="34">İSTANBUL</option><option value="35">İZMİR</option><option value="46">KAHRAMANMARAŞ</option><option value="78">KARABÜK</option><option value="70">KARAMAN</option><option value="36">KARS</option><option value="37">KASTAMONU</option><option value="38">KAYSERİ</option><option value="79">KİLİS</option><option value="71">KIRIKKALE</option><option value="39">KIRKLARELİ</option><option value="40">KIRŞEHİR</option><option value="41">KOCAELİ</option><option value="42">KONYA</option><option value="43">KÜTAHYA</option><option value="44">MALATYA</option><option value="45">MANİSA</option><option value="47">MARDİN</option><option value="33">MERSİN</option><option value="48">MUĞLA</option><option value="49">MUŞ</option><option value="50">NEVŞEHİR</option><option value="51">NİĞDE</option><option value="52">ORDU</option><option value="80">OSMANİYE</option><option value="53">RİZE</option><option value="54">SAKARYA</option><option value="55">SAMSUN</option><option value="63">ŞANLIURFA</option><option value="56">SİİRT</option><option value="57">SİNOP</option><option value="73">ŞIRNAK</option><option value="58">SİVAS</option><option value="59">TEKİRDAĞ</option><option value="60">TOKAT</option><option value="61">TRABZON</option><option value="62">TUNCELİ</option><option value="64">UŞAK</option><option value="65">VAN</option><option value="77">YALOVA</option><option value="66">YOZGAT</option><option value="67">ZONGULDAK</option></select>
                       </select>
                 </div>
                 <br>
                 <div id="ilçe_div">
                     <label><strong>İlçe   </strong></label>
                       <select id="ilçe_select">
                        
                       </select>
                 </div>
                 <br>
                 <div id="adres_div">
                     <label><strong>Tam Adres   </strong></label>
                     <input>
                 </div>
                 <br>
                 <br>
                 <br>
                 <br>
                 <br>
             </form>
             <br>
             <br>
             <br>
             
      </div>
   
  </div>
 
</template>
<style scoped>
#içerik{
    background-color: white;
    position: relative;
    top:100px;
    width: 100%;
    height: 100%;
}
#user-icon{
    position:relative;
    left: -500px;
    color:black;
    size: 20px;
    top: -1px;
}
#span1{
   
    font-family: inherit;
    color: black;
    font-weight: normal;
    line-height: 35px;
    box-sizing: border-box;
    font-size: 20px;
    padding: 0 0 0 10px;
    position: relative;
    left: -500px;
    top: 1px;
}
#p1-e{
    color:black;
    font-size: 14px;
    line-height: 21px;
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
    margin: 0 0 20px;
    position: relative;
    left: -235px;
    top: 30px;
}
#ad_input{
    box-sizing: border-box;
    font: inherit;
    margin: 0;
    font-family: inherit;
    display: block;
    width: 90%;
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
    margin-bottom: 0px;
    position: relative;
    left: 90px;
    top: 10px;
}
#soyad_input{
    box-sizing: border-box;
    font: inherit;
    margin: 0;
    font-family: inherit;
    position: relative;
    display: block;
    width: 90%;
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
    margin-bottom: 0px;
    position: relative;
    left: 90px;
    top: 20px;
}
#eposta_input{
    box-sizing: border-box;
    font: inherit;
    margin: 0;
    font-family: inherit;
    position: relative;
    display: block;
    width: 90%;
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
    margin-bottom: 0px;
    position: relative;
    left: 90px;
    top: 30px;
}
#ceptel_input{
    box-sizing: border-box;
    font: inherit;
    margin: 0;
    font-family: inherit;
    position: relative;
    display: block;
    width: 90%;
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
    margin-bottom: 0px;
    position: relative;
    left: 90px;
    top: 40px;
}
#fat-h{
    font-family: inherit;
    color: inherit;
    border-bottom: 1px solid #CECECE;
    font-size: 18px;
    float: left;
    font-weight:500;
    position: relative;
    color: black;
    left: 90px;
    top: 50px;
}
#radio_div{
    position: absolute;
     left: 80px;
     
}
#il_div{
    position: absolute;
     left: 80px;
     top: 580px;
}
#ilçe_div{
position: absolute;
     left: 80px;
     top: 650px;
}
#adres_div{
position: absolute;
     left: 80px;
      top: 700px;
}
#il_select{
width: 100%;
height: 34px;
font-size: 14px;
line-height: 1.42857143;
color: #555555;
background-color: #ffffff;
border: 1px solid #cccccc;
border-radius: 4px;
}
#tcno-input{
    box-sizing: border-box;
    font: inherit;
    margin: 0;
    font-family: inherit;
    position: relative;
    display: block;
    width: 90%;
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
    margin-bottom: 0px;
    position: relative;
    left: 90px;
    top: 40px;
}
</style>