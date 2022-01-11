import { combine, createStore } from 'effector'
import { IStoreList } from '../../types/store'
import { IProduct } from '../../entities/product'
import { getProductListEffect } from './effects'

const $productList = createStore<IStoreList<IProduct[]>>({
  loading: true,
  total_count: 0,
  items: [],
  page: 0
})
  .on(getProductListEffect.pending, (state, loading) => ({...state, loading}))
  .on(getProductListEffect.done, (state, {result}) => ({...state, ...result.data}))

export const $productModel = combine({
  $productList
})