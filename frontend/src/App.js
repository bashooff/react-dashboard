import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Data from './components/pages/Data';


const App = () => {

  return (
    <div>
    <Router>
      <Switch>
      <Route path="/data">
          <Data />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
``