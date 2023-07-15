import { Products } from './components/Products'
import { products as initialProps } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import Header from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from '../config'
import { Cart } from './components/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProps)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
