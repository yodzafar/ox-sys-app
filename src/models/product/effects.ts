import { createEffect } from 'effector'
import product from '../../service/product'

export const getProductListEffect = createEffect({
  handler: product.getProductList
})