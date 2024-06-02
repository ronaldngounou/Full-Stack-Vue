<template>
    <div class="nav-bar">
        <RouterLink to="/products">
            <div class = "nav-bar">
                <div class = "logo-wrap">
                    <img :src="logo" alt="logo" />
                </div>
            </div>
        </RouterLink>
    </div>

    <button>Shopping Cart</button>
</template>

<script>
    import logo from "@/assets/logo-hexagon.svg"

    export default {
        name: 'NavBar',
        data(){
            return {
                logo,
            }
        }
    }
</script>