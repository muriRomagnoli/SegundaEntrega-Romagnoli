import { useState } from "react";

const Counter = () => {

    const initial = 1
    const stock = 10
    const [counter, setCounter] = useState(initial)

    const decrement = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }
    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }
    return (
        <div className="card mx-auto  " style={{ width: 250 }}>
            <div className="card-body d-flex justify-content-center align-items-center ">
                <button className="btn btn-outline-secondary mx-2" onClick={decrement}> - </button>
                <h5>{counter}</h5>
                <button className="btn btn-outline-secondary mx-2" onClick={increment}> + </button>
            </div>
        </div>

    )


}
export default Counter