import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Foods from './components/Foods'
import Cart from './pages/Cart'
import Navbar from './pages/Navbar'
import {Provider} from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    </BrowserRouter>
    </Provider>
  )
}

export default App