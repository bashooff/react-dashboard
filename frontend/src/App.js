import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'


const App = () => {

  return (
    <div>
    <Router>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
``