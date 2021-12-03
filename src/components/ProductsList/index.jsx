import {Header, Main, Ul, Button} from "./style"
import Product from "../Product/index"
import {useHistory} from "react-router-dom"
import {FiShoppingCart} from "react-icons/fi"

import {useContext} from "react"
import {ProductContext} from "../../providers/Product/index"

const ProductsList = () => {
    
    const history = useHistory()

    const {products} = useContext(ProductContext)

    return (
        <>
            <Header>
                <h1>KenzieShop</h1>
                <Button onClick={() => history.push("/cart")}><FiShoppingCart/></Button>
            </Header>
            <Main>
                <Ul>
                {
                    products.map((product, index) => (
                        <Product key={index} product={product}/>
                    ))
                }
                </Ul>
            </Main>
        </>
    )

}

export default ProductsList