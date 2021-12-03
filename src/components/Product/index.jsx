import {Card, ProductImg, Img, Button, P} from "./style"
import {useContext} from "react"
import {CartContext} from "../../providers/Cart/index"

const Product = ({product}) => {

    const {addToCart} = useContext(CartContext)

    return (
        <Card>
            <P>{product.name}</P>
            <P>R${product.price.toFixed(2)}</P>
            <ProductImg>
                <Img src={product.img} alt={product.name} />
            </ProductImg>
            <Button onClick={() => addToCart(product)}>Comprar</Button>
        </Card>
    )
}

export default Product