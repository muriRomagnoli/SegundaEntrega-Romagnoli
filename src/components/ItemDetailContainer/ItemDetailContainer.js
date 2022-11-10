import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()


    useEffect(() => {
        getProduct(id).then(product => {
            setProduct(product)
        })
    }, [])

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer