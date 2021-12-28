import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Success from './pages/Success'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {
  const user = useSelector((state) => state.user.current)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}>
          <Route path=":category" element={<ProductList />}></Route>
        </Route>
        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<Product />}></Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
