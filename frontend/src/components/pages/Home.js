import Header from "../widgets/Header"
import Sidebar from "../widgets/Sidebar"
import Dashboard from './Dashboard'
import "./Home.css"


const Home = () => {

    return(
        <div>
            
            <div className="row">
                <div className="col-1">
                    <Sidebar />
                </div>
                <div className="col-11">
                <Header></Header> 
                </div>
                    
                </div>
                <Dashboard></Dashboard>
               
            </div>
        
    )
}

export default Home;