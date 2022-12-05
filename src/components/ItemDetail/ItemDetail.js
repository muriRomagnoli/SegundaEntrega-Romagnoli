import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../Notification/Notification'

const ItemDetail = ({ id, title, pictureUrl, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem, getItemQuantity } = useCart()
    const { setNotification } = useNotification()

    useEffect(() => {
        document.title = `${title} | Gaming Gear`
    })

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const itemToAdd = {
            id, title, pictureUrl, price, quantity
        }

        addItem(itemToAdd)
        setNotification(`Se agregó correctamente ${quantity} ${title} al carrito`, 'success')
    }

    const handleOnAddError = () => {
        setNotification(`No se pudo agregar ${title} al carrito`, 'error')
    }

    const itemAddedQuantity = getItemQuantity(id)

    return (
        <div className='itemCardDetailed'>
            <h1>Detalle del producto</h1>
            <h2>{title}</h2>
            <img src={pictureUrl} alt={title} />
            <p>{description}</p>
            <h2>Precio: ${price}</h2>
            {quantityToAdd === 0 ? (<ItemCount stock={stock} init={itemAddedQuantity} onAdd={handleOnAdd} onAddError={handleOnAddError} />) : (<Link to='/cart'><Button id="detailToCart" label={"Ir al carrito"} background={"rgb(120, 189, 54)"}></Button></Link>)}
        </div>
    )

}


export default ItemDetail