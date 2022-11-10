import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <div className="card col-4 mx-5 my-5 align-self-center overflow-hidden" style={{ width: 400, height: "auto" }} >
            <img src={product.img} className="card-img-top img-responsive" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">$ {product.price}</p>
                <Link to={`/item/${product.id}`}>
                    <button type="button" className="btn btn-danger mt-5">Ver mas</button>
                </Link>
            </div>
        </div>
    )
}

export default Item