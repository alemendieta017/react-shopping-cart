import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import './Cart.css'

export function CardItem({ product }) {
  const { addToCart } = useCart()
  return (
    <li key={product.id}>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>Qty: {product.quantity}</small>
        <button
          onClick={() => {
            addToCart(product)
          }}
        >
          +
        </button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart } = useCart()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </ul>
        <button
          onClick={() => {
            clearCart()
          }}
        >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
