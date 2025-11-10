import React from 'react'
import Register from './Components/Register'
import { routes } from './Routes'
import { RouterProvider } from 'react-router-dom'
const App = () => {
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App