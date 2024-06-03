<template>
    <h1>Shopping Cart</h1>

    <CartList :cartItems="cartItems" />

</template>


<script>
    import { cartItems } from '@/temp-data';
    import CartList from '@/components/CartList.vue';

    export default {
        name: 'ShoppingCartPage',
        components: {
            CartList,
        },
        data(){
            return {
                cartItems,
            }
        }
    }
</script>