import { combine, createStore } from 'effector'
import Cookies from 'js-cookie'
import { changeIsAuthenticatedEvent } from './events'

const tokenFromStorage: string | undefined = Cookies.get('token')

export const $appToken = createStore<boolean>(!!tokenFromStorage)
  .on(changeIsAuthenticatedEvent, (state, status) => status)


export const $appModel = combine({
  $appToken
})