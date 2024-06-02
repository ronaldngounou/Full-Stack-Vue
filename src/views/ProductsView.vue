<template>
    <h1>Products</h1>
    <div class="grid-wrap">
        <div class = "product-item"
            v-for="product in products"
            :key = "product.id">
            <img :src="product.imageName" />
            <h3 class = "product-name">{{ product.name }}</h3>
            <p class = "product-price">{{ product.price }}</p>

            <RouterLink :to="'/products/' + product.id">
                <button>View Details</button>
            </RouterLink>

        </div>
    </div>
</template>


<script>
    import {products} from '../temp-data.js'
    export default {
        name: 'ProductsPage',
        data() {
            return {
                products,
            }
        }
    }
</script>