import { createRouter, createWebHistory } from 'vue-router'
import ProductDetailView from '@/views/ProductDetailView.vue'
import ProductsView from '@/views/ProductsPage.vue'
import ShoppingCartView from '@/views/ShoppingCartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCartView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: ProductDetailView
    }
  ]
})

export default router
