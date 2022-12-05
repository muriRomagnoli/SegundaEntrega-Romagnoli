import { useState, useEffect, createContext, useContext } from "react"


const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addItem = (itemToAdd) => {
        if (!isInCart(itemToAdd.id)) {
            setCart([...cart, itemToAdd])
        } else {
            const cartUpdated = cart.map(item => {
                if (item.id === itemToAdd.id) {
                    const itemUpdated = {
                        ...item,
                        quantity: itemToAdd.quantity
                    }
                    return itemUpdated

                } else {
                    return item
                }
            })
            setCart(cartUpdated)
        }
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(item => item.id !== id)
        setCart(cartWithoutItem)
    }

    const clearCart = () => {
        setCart([])
    }

    useEffect(() => {
        const getTotal = () => {
            let sum = 0

            cart.forEach(item => {
                sum += item.quantity * item.price
            })

            return sum
        }

        const total = getTotal()

        setTotal(total)
    }, [cart])

    useEffect(() => {
        const getTotalQuantity = () => {
            let totalQuantity = 0

            cart.forEach(item => {
                totalQuantity += item.quantity
            })

            return totalQuantity
        }

        const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
    }, [cart])


    const getItemQuantity = (id) => {
        const item = cart.find(item => item.id === id)
        return item?.quantity
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getItemQuantity, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}