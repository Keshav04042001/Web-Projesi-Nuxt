<template>
  <div class="error-page">
   <div class="err-bg">
    <div class="error-container clearfix">
        <div class="col-xs-24 erorpage">
            <div class="err-header">
                <a class="err-logo" href="/">
                    <img class="img-responsive" src="/skins/shared/images/logo.png" alt="LOGO"></a>
            </div>

            <div class="err-content">
                <div class="err-left">
                    <h1>Sayfa bulunamadı!</h1>
                    <p class="err-desc">
                        Sayfa kaldırılmış veya değiştirilmiş olabilir. Aradığınız ürünü bulmanıza yardımcı olabiliriz?
                    </p>
                    <div class="search-input-box input-group">
                        <input type="search" name="q" placeholder="Ne Aramıştınız?" class="search-input form-control">
                        <span class="input-group-btn">
                            <button class="btn-nobg search-btn" type="submit"><i class="fa fa-search" style="color: black"></i></button>
                        </span>
                    </div>
                </div>

                <div style="clear: both"></div>
                
                    <div class="err-categories">
                        <h2>Kategoriler</h2>
                        
                        <div class="inner"><a href="/yeni-gelenler" title="Bilgisayar, Tablet">YENİ GELENLER</a></div>
                        
                        <div class="inner"><a href="/kadin" title="Bilgisayar, Tablet">KADIN</a></div>
                        
                        <div class="inner"><a href="/erkek" title="Bilgisayar, Tablet">ERKEK</a></div>
                        
                    </div>
                
                <div style="clear: both"></div>
                <br>
                <br>
                
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<style>
.error-page{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
