import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import './style/css/style.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Trabajando} from './components/Trabajando/Trabajando'
import {Cart} from './components/Cart/Cart'
import { CartProvider } from './context/Context'
import { Checkout } from './components/Checkout/Checkout'
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path="/inicio">
              <Trabajando/>
            </Route>

                <Route exact path="/tienda">
                  <ItemListContainer/>
                </Route>

                <Route exact path="/tienda/category/:catId">
                  <ItemListContainer/>
                </Route>

                <Route exact path="/tienda/detail/:itemId">
                  <ItemDetailContainer/>
                </Route>

                <Route exact path="/trabajando">
                  <Trabajando/>
                </Route>

                <Route exact path="/cart">
                  <Cart/>
                </Route>

                <Route path="/checkout">
                  <Checkout/>
                </Route>

                <Route path="*">
                  <Redirect to="/inicio"/>
                </Route>

              </Switch>
            </BrowserRouter>

    </CartProvider>
      
  );
}

export default App;
