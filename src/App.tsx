import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignInPage } from './views/auth'
import { ProductsPage } from './views/product'
import { RequiredAuth } from './components/required-auth'

function App() {
  return (
    <Routes>
      <Route
        path='/sign-in' element={<Suspense fallback={<>...loading</>}><SignInPage /></Suspense>}
      />
      <Route
        path='/'
        element={<Suspense fallback={<>...loading</>}><RequiredAuth><ProductsPage /></RequiredAuth></Suspense>}
      />
    </Routes>
  )
}

export default App
