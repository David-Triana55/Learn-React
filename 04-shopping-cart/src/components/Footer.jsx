import './Footer.css'
import { useCart } from '../hooks/useCart'

export function Footer () {
  const { cart } = useCart()
  console.log(cart)
  return (
    <footer className='footer'>
      {/*
      {
        JSON.stringify(cart, null, 2)
      } */}
    </footer>
  )
}
