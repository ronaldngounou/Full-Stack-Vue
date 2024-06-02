<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1>Two Trees Olive Oil</h1>
    <div class="page-wrap">

      <nav>
        <RouterLink to="/cart">Shopping Cart Page</RouterLink>
        <RouterLink to="/products">Products Page</RouterLink>
        <RouterLink to="/products/:id">ProductsDetail</RouterLink>
      </nav>

      <RouterView />
    </div>
  </header>


</template>
