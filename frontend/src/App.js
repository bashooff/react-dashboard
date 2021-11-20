import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Data from './components/pages/Data';
import Sidebar from './components/widgets/Sidebar';
import Header from './components/widgets/Header';


const App = () => {

  return (
    <div className="container-fluid">
      <Router>
        <div className="row">
          <div className="col-2">
          <Sidebar />
          </div>
          <div className = "col-10">
            <Header />
            <div className="justify-content-center">
              <Routes>
                  <Route path="/data" element={<Data />} />
                  <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
     </Router>
    </div>
  )
}

export default App;
