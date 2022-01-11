import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

const httpClient = axios.create({})

httpClient.interceptors.response.use((response) => response, (error) => {
  if (error && error.response) {
    if(error.response.status === 302) {
      window.location.replace('/sign-in')
    }
    return Promise.reject(error)
  }
})

httpClient.interceptors.request.use((config) => {
  const token = Cookies.get('token')

  if (token) {
    config.headers = Object.assign(config.headers, {Authorization: `Bearer ${token}`})
    return config
  }

  return config
})

interface IParams<D, P> {
  url: string,
  headers?: any
  data?: D,
  params?: P,
  onUploadProgress?: AxiosRequestConfig['onUploadProgress'],
}

export function httpGet<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
  return httpClient({
    method: 'get',
    ...params,
  })
}

export function httpPost<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
  return httpClient({
    method: 'post',
    ...params,
  })
}

export function httpPut<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
  return httpClient({
    method: 'put',
    ...params,
  })
}

export function httpPatch<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
  return httpClient({
    method: 'patch',
    ...params,
  })
}

export function httpDelete<D, P, R>(params: IParams<D, P>): AxiosPromise<R> {
  return httpClient({
    method: 'delete',
    ...params,
  })
}

