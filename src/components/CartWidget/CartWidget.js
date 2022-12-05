import cart from './assets/cart-shopping-solid.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <div className='cartContainer'><Link id="cart" to='/cart'><img src={cart} alt='cart' />{totalQuantity}</Link></div>
    )
}

export default CartWidget;