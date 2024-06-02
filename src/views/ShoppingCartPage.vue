<template>
    <h1>Shopping Cart</h1>
    <div 
        class="product-container"
        v-for="product in cartItems"
        :key="product.id"
    >
        <img class="product-image" :src="product.imageName" />
        <div class="detais-wrap">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">{{ product.price }}</p>
            <button class="remove-button">Remove from cart</button>

        </div>

        <button class="checkout-button">Proceed to Checkout</button>
    </div>

</template>


<script>
    import { cartItems } from '@/temp-data';

    export default {
        name: 'ShoppingCartPage',
        data(){
            return {
                cartItems,
            }
        }
    }
</script>