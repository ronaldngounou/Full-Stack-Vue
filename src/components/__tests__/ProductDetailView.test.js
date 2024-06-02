import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductDetailView from '@/views/ProductDetailView.vue'

describe('ProductDetailView', () => {
    it('renders properly', () => {
        const wrapper = mount(ProductDetailView)
        expect(wrapper.text()).toContain('Product Detail')
    })
})