import Header from "../widgets/Header"
import Sidebar from "../widgets/Sidebar"
import Dashboard from './Dashboard'


const Home = () => {

    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <Sidebar />
                </div>
                <div className="col-11">
                    <Header></Header> 
                    <Dashboard></Dashboard>
                </div>
                
                </div>
               
            </div>
        
    )
}

export default Home;