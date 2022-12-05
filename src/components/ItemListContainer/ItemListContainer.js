import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItems } from '../../services/firebase/firestore'

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getItems(categoryId).then(items => {
            setItems(items)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    useEffect(() => {
        document.title = `${categoryId || 'Inicio'} | Gaming Gear`
    })

    if (loading) {
        return <h2 className='listContainerTitle'>Aguarde mientras cargan los productos...</h2>
    }

    return (
        <div>
            <h1 className='listContainerTitle'>{greeting}</h1>
            <ItemList items={items} />
        </div>
    )

}

export default ItemListContainer