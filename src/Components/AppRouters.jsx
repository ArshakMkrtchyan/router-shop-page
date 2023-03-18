import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login'
import MainInfo from './MainInfo'
import Register from './Register'
import ShoppingBag from './ShoppingBag'

export default function AppRouters() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainInfo />} />
          <Route path='/MainInfo' element={<MainInfo />} />
          <Route path='/ShoppingBag' element={<ShoppingBag />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='*' element={<h1>Element is not found</h1>} />
        </Route>
      </Routes>
    </div>
  )
}