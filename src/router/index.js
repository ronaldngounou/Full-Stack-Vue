import { createRouter, createWebHistory } from 'vue-router'
import ProductDetailView from '@/views/ProductDetailView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ShoppingCartView from '@/views/ShoppingCartView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
    },
    {
      path: '/pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    }
  ]
})

export default router
