<template>
    <div class="col-xs-12 search-new p0">
        <div class="col-xs-12 search-new p0">
            <div class="search-input-box input-group">
                <input type="search" name="q" placeholder="Aramak istediğinizi ürünü yazınız" class="search-input form-control">
                <span class="input-group-btn">
                    <button class="btn-nobg search-btn" type="submit"><i class="fa fa-search"></i></button>
                </span>
            </div>
        </div>
    </div>  
</template>


<style>
input[type="search" i] {
    appearance: searchfield;
    box-sizing: border-box;
    padding: 1px 2px;
}

input {
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
</style>

<script>
export default {
    function(e) {
  if (e.which == 13) {
    var searchString = $('.search-new .search-input').val();
    if (searchString == null || searchString.trim() === '') {
      $(".search-new .search-input-box").css('background', '#f7d6d6');
      $(".search-new .search-input").val('').attr('placeholder', 'Geçerli bir kelime giriniz');
      e.preventDefault();
    } else {
      searchProduct($(this).val());
    }
  }
}
}
</script>