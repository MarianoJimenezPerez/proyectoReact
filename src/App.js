import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import './style/css/style.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Switch>

          <Route exact path="/inicio">
          </Route>

          <Route exact path="/tienda">
            <ItemListContainer/>
          </Route>

          <Route exact path="/tienda/category/:catId">
            <ItemListContainer/>
          </Route>

          <Route path="*">
            <Redirect to="/inicio"/>
          </Route>

        </Switch>
      </BrowserRouter>
  );
}

export default App;
