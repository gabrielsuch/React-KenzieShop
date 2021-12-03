import {Card, ProductImg, Img, Button} from "../Product/style"

import {P} from "./style"

import {useContext} from "react"
import {CartContext} from "../../providers/Cart/index"

const CartProduct = ({product, actualIndex}) => {

    const {removeFromCart} = useContext(CartContext)

    return (
        <Card>
            <P>{product.name}</P>
            <P>R${product.price.toFixed(2)}</P>
            <ProductImg>
                <Img src={product.img} alt={product.name} />
            </ProductImg>
            <Button onClick={() => removeFromCart(actualIndex)}>Remover</Button>
        </Card>
    )
}

export default CartProduct