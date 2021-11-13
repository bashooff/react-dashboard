import Header from "../widgets/Header"
import Sidebar from "../widgets/Sidebar"
import Dashboard from './Dashboard'
import "./Home.css"


const Home = () => {

    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <Header />
                    <br />
                    <Dashboard />
                </div>
            </div>
        </div>
        
    )
}

export default Home;