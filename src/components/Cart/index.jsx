import {useHistory} from "react-router-dom"
import CartProduct from "../CartProduct/index"
import {Container, Main, Ul, Info, Title, HomePage, Button} from "./style"

import {useContext} from "react"
import {CartContext} from "../../providers/Cart/index"

const Cart = () => {

    const history = useHistory()

    const {cart} = useContext(CartContext)

    const finalPrice = cart.reduce((acumulador, valorAtual) => {
        return acumulador + Number(valorAtual.price)
    }, 0)

    return(
        <>
            <HomePage>
                    <Button onClick={() => history.push("/")}>Voltar</Button>
                </HomePage>
            <Container>
                <Main>
                    <Info>
                        <Title>Preço Final do Carrinho: R${finalPrice.toFixed(2)}</Title>
                    </Info>
                    <Ul>
                        {
                            cart.map((product, index) => (
                                <CartProduct key={index} product={product} actualIndex={index}/>
                            ))
                        }
                    </Ul>
                </Main>
            </Container>
        </>
    )
}

export default Cart