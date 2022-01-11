import { useCallback, useState } from 'react'
import auth from '../../service/auth'
import { IApiPost } from '../../types/api'
import { ILogin } from '../../types/auth'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { changeIsAuthenticatedEvent } from '../../models/app'

export function useLogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmit = useCallback(() => {
    const data: IApiPost<ILogin> = {
      subdomain: 'face',
      data: {
        _username: username,
        _password: password,
        _subdomain: 'face',
      },
    }
    auth.getToken(data)
      .then((res) => {
        Cookies.set('token', res.data.token, {expires: new Date(res.data.expires_at).getTime()})
        changeIsAuthenticatedEvent(true)
        navigate('/')
      })
  }, [navigate, password, username])

  return {onSubmit, password, username, setPassword, setUsername}
}