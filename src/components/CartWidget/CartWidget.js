import cart from './assets/carrito.png'

const CartWidget = () => {
    return (
        <div className='me-lg-5 me-sm-1'>
            <button className='btn btn-secondary'><img src={cart} style={{ height: 35 }} alt='cart' /> 1 </button>

        </div>
    )
}

export default CartWidget