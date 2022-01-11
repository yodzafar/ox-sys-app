import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from 'effector-react'
import { $appModel } from '../../models/app'

export const RequiredAuth = ({children}: { children: JSX.Element }) => {
  const {$appToken: token} = useStore($appModel)

  if (!token) {
    return <Navigate to='/sign-in' />
  }

  return children
}
