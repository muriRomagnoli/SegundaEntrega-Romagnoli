import { useState } from "react"


export const useCounter = (max, min, init) => {
    const [counter, setCounter] = useState(init)
    const increase = () => counter < max && setCounter(counter + 1)
    const decrease = () => counter > min && setCounter(counter - 1)

    return {
        counter,
        increase,
        decrease
    }

}