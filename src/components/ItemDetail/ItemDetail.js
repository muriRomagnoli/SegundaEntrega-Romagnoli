import Counter from "../Counter/Counter"

const ItemDetail = ({ product }) => {
    return (
        <div>
            <h1>{product?.name}</h1>
            <img src={product?.img} alt={product?.name}></img>
            <h2>{product?.description}</h2>
            <h3>${product?.price}</h3>
            <Counter />
        </div>
    )
}

export default ItemDetail