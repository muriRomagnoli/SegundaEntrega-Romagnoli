import Item from '../Item/Item'
import { memo } from 'react'
import './ItemList.css'

const ItemList = ({ items }) => {
    return <ul className='itemsContainer'>{items.map(item => <li key={item.id}><Item {...item} /></li>)}</ul>
}


export default memo(ItemList)