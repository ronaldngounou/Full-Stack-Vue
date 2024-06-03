<template>
    <div class="grid-wrap">
        <div v-if="product">
            <div class = "img-wrap">
                 <img :src="product.imageName" />
            </div>
         
            <div class = "product-details">
                 <h1>{{ product.name }}</h1>
                 <h3 class = "price"> {{ product.price }} </h3>
                 <button class = "add-to-cart">Add to cart</button>
            </div>
        </div>
    
        <div v-else>
            <NotFoundPage />
        </div>
    </div>

</template>


<script>
    import {products} from "@/temp-data.js";
    import NotFoundPage from "./NotFoundView.vue";
    export default {
        name: 'ProductDetailView',
        data(){
            return {
                product: products.find(product => product.it === this.$route.params.id)
            }
        },
        components: {
            NotFoundPage,
        }
    }
</script>