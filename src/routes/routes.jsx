import {Switch, Route} from "react-router-dom"
import ProductsList from "../components/ProductsList/index"
import Cart from "../components/Cart/index"


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <ProductsList />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </Switch>
    )
}

export default Routes