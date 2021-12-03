import {createContext, useState, useContext} from "react"
import {CartContext} from "../Cart/index"

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([
        { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
        { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
        { id: 3, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    ])

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider