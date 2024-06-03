<template>
    <div v-if = "cartItems.length > 0">
            <div 
                class="product-container"
                v-for="product in cartItems"
                :key="product.id"
            >
                <img class="product-image" :src="product.imageName" />

                <div class="details-wrap">
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p class="product-price">{{ product.price }}</p>
                </div>

                <button class="remove-button">Remove from cart</button>
            </div>
        </div>

        <div v-else>
            <p>No items in cart</p>
        </div>

        <button class="checkout-button">Proceed to Checkout</button>
</template>

<script>
    export default {
        name: 'CartList',
        props: ['cartItems']
    }
</script>