import { IStoreList } from './store'
import { IProduct } from '../entities/product'

export interface IApi {
  subdomain: 'face'
}

export interface IListParams {
  page: number,
  size: number
}

export interface IApiPost<D> extends IApi {
  data: D
}


export interface IApiResList extends Omit<IStoreList<IProduct[]>, 'loading'> {

}