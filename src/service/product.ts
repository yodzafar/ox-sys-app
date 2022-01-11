import { httpGet } from './index'
import { IApiResList, IListParams } from '../types/api'

export default {
  getProductList: (params: IListParams) => httpGet<any, IListParams, IApiResList>({
    url: 'https://face.ox-sys.com/variations',
    params,
  }),
}