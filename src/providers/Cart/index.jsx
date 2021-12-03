import {createContext, useState} from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (actualIndex) => {
        setCart(cart.filter((product, index) => {
            return actualIndex !== index
        }))
    }

    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider