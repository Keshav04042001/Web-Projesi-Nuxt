<script>
export default {
    name: "ProductBody",
    computed: {
      product(){
          return this.$store.getters["product/getProduct"];
      }
    },
    data: () => ({
        selectedBody: 'M',
        addingBasket: false
    }),
    methods: {
        addItemToBasket(){
            this.addingBasket = true;
            const payload = {
                item: this.product,
                options: {
                    'body' : this.selectedBody
                }
            };
            this.$store.dispatch("basket/addBasketItem", payload);
            setTimeout(() => {
                this.addingBasket = false;
            }, 1500);
        }
    }
}
</script>