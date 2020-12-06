<template>
    <ProductDetail :product="fetchedProduct"/>
</template>
<script>
    import ProductDetail from "@/components/product/ProductDetail"

    export default {
        components: {
            ProductDetail
        },
        // this.$route.params._postId
        asyncData(context, callback) {
            setTimeout(() => {
                callback(null, {
                    fetchedPost: {
                        id: "1",
                        title: "",
                       price: 199.99,
                    }
                })
            }, 1500)
        }
    }
</script>
