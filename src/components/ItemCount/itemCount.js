import plus from './images/plus-solid.svg'
import minus from './images/minus-solid.svg'
import Button from '../Button/Button'
import './ItemCount.css'
import { useCounter } from '../../hooks/useCounter'

const ItemCount = ({ stock = 0, init = 1, onAdd, onAddError }) => {
    const min = 1
    const { counter: count, increase, decrease } = useCounter(stock, min, init)

    return (
        <div className='countContainer'>
            <input type="image" src={plus} alt="plus" onClick={increase}></input>
            <h3>{count}</h3>
            <input type="image" src={minus} alt="minus" onClick={decrease}></input>
            <Button label={"Agregar al carrito"} background={'rgb(206, 66, 46)'} action={() => (count > 0 && count <= stock) ? onAdd(count) : onAddError()} />
        </div>
    )
}

export default ItemCount