import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { publicRequest } from '../requestMethods'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products?category=${cat}` : '/products'
        )
        setProducts(res.data)
      } catch (error) {}
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      )
  }, [cat, products, filters])

  useEffect(() => {
    if (sort === 'newest') {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (sort === 'asc') {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])
  return (
    <Container>
      {cat
        ? filterProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products
