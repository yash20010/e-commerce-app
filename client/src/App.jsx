import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
