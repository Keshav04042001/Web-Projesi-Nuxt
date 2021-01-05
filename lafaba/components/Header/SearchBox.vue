<template>
    <div class="col-xs-12 search-new p0">
        <div class="col-xs-12 search-new p0">
            <div class="search-input-box input-group">
                <input 
                  name="q" 
                  placeholder="Aramak istediğinizi ürünü yazınız" 
                  class="search-input form-control"
                  type="text"
                  v-model.trim="input"
                  v-on:input="search()"
                  ref="input"
                  @blur="closeSearchBar()"
                >
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
  // name: " listSearch",
  data: () => ({
    input: ""
  }),
  methods: {
    search() {
      this.$store.dispatch("UPDATE_CURATED_LIST", this.input);
      this.$store.commit("SET_LIST_SEARCH", this.input);
    },
    closeSearchBar() {
      this.$store.commit("SET_DISPLAY_SEARCH_LIST", false);
    }
  }
};
</script>