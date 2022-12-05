import './CartItem.css'
import bin from '../CartWidget/assets/recycle-bin.png'
import { useCart } from '../../context/CartContext'

const CartItem = ({ id, title, pictureUrl, quantity, price }) => {
    const { removeItem } = useCart()

    const removeCartItem = (id) => {
        removeItem(id)
    }

    return (
        <div className='cartItemCard'>
            <div className='cartImgItem'>
                <img src={pictureUrl} alt={title} />
            </div>
            <div className='cartTitleItem'>
                <h4>{title}</h4>
            </div>
            <div className='cartQuantityItem'>
                <h5>Cantidad: {quantity}</h5>
            </div>
            <div className='cartPriceItem'>
                <h5>Precio unitario: ${price}</h5>
            </div>
            <div className='cartTotalItem'>
                <h5>Subtotal: ${price * quantity}</h5>
            </div>
            <div className='cartRemoveItem'>
                <img src={bin} alt={"recycle-bin"} id='bin' onClick={() => removeCartItem(id)} />
            </div>
        </div>
    )
}


export default CartItem