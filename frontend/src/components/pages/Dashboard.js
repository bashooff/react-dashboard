import "./Dashboard.css";
import Card from "../widgets/Card";
import Linechart from "../widgets/Linechart";
import Highcharts from "highcharts"
import HighchartsReact from 'highcharts-react-official'
import { FcPackage, FcSalesPerformance, FcList, FcBookmark } from "react-icons/fc";

const Dashboard = () => {

    

    return(
        <div>
            <h2>Dashboard overview</h2>
            <div className="row">
                <div className="col-md-3 my-col">
                    <Card title="Borrowers" text="borrowers overview" height="10rem" width="22rem">
                        <div className="card-icon">
                            <FcPackage></FcPackage>
                        </div>
                        <div className="card-title">
                            Borrowers
                        </div>
                        <div className="card-text">
                            1,200
                        </div>
                    </Card>
                </div>
                <div className="col-md-3 my-col">
                    <Card title="Loans" height="10rem" width="22rem">
                    <div className="card-icon">
                            <FcList></FcList>
                        </div>
                        <div className="card-title">
                            Loans
                        </div>
                        <div className="card-text">
                            1,356
                        </div>
                    </Card>
                </div>
                <div className="col-md-3 my-col">
                    <Card title="returns" height="10rem" width="22rem">
                    <div className="card-icon">
                            <FcSalesPerformance></FcSalesPerformance>
                        </div>
                        <div className="card-title">
                            Portfolio return
                        </div>
                        <div className="card-text">
                            14,65%
                        </div>
                    </Card>
                </div>
                <div className="col-md-3 my-col">
                    <Card title="returns" height="10rem" width="22rem">
                    <div className="card-icon">
                            <FcBookmark></FcBookmark>
                        </div>
                        <div className="card-title">
                            Defaults
                        </div>
                        <div className="card-text">
                            56
                        </div>
                    </Card>
                </div>
            </div>
            <div className="col-md-11 mt-5">
                <Card title="Line chart" height="30rem" width="95rem">
                    <Linechart />
                </Card>
                
            </div>
        </div>
    )
}

export default Dashboard;