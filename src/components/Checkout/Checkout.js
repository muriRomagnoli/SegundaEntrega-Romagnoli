import { useState, useEffect } from 'react'
import { useCart } from "../../context/CartContext"

import CartForm from '../CartForm/CartForm'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Checkout.css'
import { createOrderInDb } from '../../services/firebase/firestore'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        document.title = 'Checkout | Gaming Gear'
    })

    const createOrder = async (buyer) => {
        createOrderInDb(cart, total, buyer).then((order) => {
            setLoading(true)
            MySwal.fire({
                title: '¡Gracias por confiar en GG!',
                icon: 'success',
                text: `El ID de su orden es ${order.id}`,
                confirmButtonColor: 'rgb(120, 189, 54)',
                confirmButtonText: 'Perfecto'
            })
            clearCart()
        }).catch(err => {
            console.log(err);
            MySwal.fire({
                title: 'No se pudo concretar la compra',
                icon: 'error',
                text: 'Hay productos que no se encuentran con stock en estos momentos',
                confirmButtonColor: 'rgb(206, 66, 46)'
            })
        }).finally(() => {
            setLoading(false)
        })

    }
    if (loading) {
        return <h1>Su orden se está generando...</h1>
    }

    return (
        <>
            <h1 id="checkoutTitle">Ya casi estamos terminando..!</h1>
            <CartForm order={createOrder}></CartForm>
        </>
    )
}

export default Checkout