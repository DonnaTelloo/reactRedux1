import { Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ProductsTable from './Components/ProductsTable';
import { useSelector } from 'react-redux'
import Cart from './Components/Cart';

const App = () => {

  const {
    numberOfBananas,
    numberOfCakes
  } = useSelector(state => state);

  const sum = useSelector(state => state.numberOfCakes + state.numberOfBananas);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <>
          <Link to="/cart" style={{
                              width: '50%'
                            }}>
        <Button variant="contained" color="secondary" style={{
          width: '50%',
          marginBottom: 15
        }}>კალათა - {sum} პროდუქტი</Button>
      </Link>
          <ProductsTable />
          </>
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}

export default App