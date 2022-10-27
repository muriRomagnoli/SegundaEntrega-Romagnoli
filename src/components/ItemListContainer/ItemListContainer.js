import React from "react";
import "./ItemListContainer"

function ItemListContainer (props) {
    return(

        <div ClassName="container">
            <h3>{props.greeting}</h3>
        </div>
    )
}

export default ItemListContainer;
