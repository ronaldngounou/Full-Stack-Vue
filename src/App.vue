<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue';
</script>


<template>
  <header>

    <div class="page-wrap">

      <NavBar />
      <!-- <nav>
        <RouterLink to="/cart">Shopping Cart Page</RouterLink>
        <RouterLink to="/products">Products Page</RouterLink>
        <RouterLink to="/products/:id">ProductsDetail</RouterLink>
      </nav> -->

      <RouterView />
    </div>
  </header>


</template>
