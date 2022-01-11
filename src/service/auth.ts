import { ILogin } from '../types/auth'
import { IApiPost } from '../types/api'
import { httpPost } from './index'
import { IToken } from '../entities/app'
import qs from 'qs'

export default {
  getToken: (
    {
      subdomain,
      data,
    }: IApiPost<ILogin>) => httpPost<any, any, IToken>({
    url: `https://${subdomain}.ox-sys.com/security/auth_check`,
    data: qs.stringify(data),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  }),
}