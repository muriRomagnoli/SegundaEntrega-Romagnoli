import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Item.css'


const Item = ({ title, pictureUrl, price, id }) => {
    return (
        <div className='itemCard'>
            <h4>{title}</h4>
            <img src={pictureUrl} alt={title} />
            <h5>{`$${price}`}</h5>
            <Link to={`/detail/${id}`}><Button label={'Ver detalle'} background={'rgb(206, 66, 46)'}></Button></Link>
        </div>
    )
}


export default Item