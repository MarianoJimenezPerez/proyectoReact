import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import './style/css/style.css'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer nombre={"Mi nombre es Mariano"}/>
    </div>
  );
}

export default App;
