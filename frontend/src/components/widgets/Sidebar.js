import "./Sidebar.css"
import { Link } from "react-router-dom";
import { FaDiceSix } from "react-icons/fa";
import { TiChartPie, TiCogOutline, TiGroupOutline  } from "react-icons/ti";
import { AiFillDatabase } from "react-icons/ai";

const Sidebar = () => {
    return(
        <div id="mySidebar" className="sidebar">
            <div className="sidebar-brand">
                <FaDiceSix></FaDiceSix>
            </div>
            <Link to="/">
                <div className="row">
                    <div className="col-2">
                        <div className="sidebar-icon">
                            <TiChartPie></TiChartPie>
                        </div>
                    </div>
                    <div className="col-2">
                        Dashboard
                    </div>
                </div>
            </Link>
            <Link to="/data">
                <div className="row">
                    <div className="col-2">
                        <div className="sidebar-icon">
                        <AiFillDatabase></AiFillDatabase>
                        </div>
                    </div>
                    <div className="col-2">
                        Data
                    </div>
                </div>
            </Link>
            <Link to="/">
                <div className="row">
                    <div className="col-2">
                        <div className="sidebar-icon">
                        <TiGroupOutline></TiGroupOutline>
                        </div>
                    </div>
                    <div className="col-2">
                        Borrowers
                    </div>
                </div>
            </Link>
            <Link to="/">
                <div className="row">
                    <div className="col-2">
                        <div className="sidebar-icon">
                        <TiCogOutline></TiCogOutline>
                        </div>
                    </div>
                    <div className="col-2">
                        Settings
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar;