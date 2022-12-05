import './Cart.css'
import CartItem from '../CartItem/CartItem'
import Button from '../Button/Button'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const Cart = () => {
    const { cart, total, totalQuantity, clearCart } = useCart()
    useEffect(() => {
        document.title = 'Carrito | Gaming Gear'
    })

    if (totalQuantity === 0) {
        return (<>
            <h1 className='cartTitle'>El carrito está vacío</h1>
            <Link to='/'><Button label={'Ver catálogo'} background={'rgb(206, 66, 46)'}></Button></Link>
        </>)
    }


    return (
        <div>
            <h1 className='cartTitle'>Carrito</h1>
            {cart.map(item => <CartItem key={item.id} {...item}></CartItem>)}
            <div className='cartContent'>
                <h2>Total: ${total}</h2>
                <Button label={'Vaciar carrito'} background={'rgb(206, 66, 46)'} action={() => clearCart()}></Button>
                <Link to='/checkout'><Button label={'Proceder al pago'} background={'rgb(120, 189, 54)'}></Button></Link>
            </div>
        </div>
    )
}


export default Cart