import "./Dashboard.css";
import Card from "../widgets/Card";
import Linechart from "../widgets/Linechart";
import Highcharts from "highcharts"
import HighchartsReact from 'highcharts-react-official'

const Dashboard = () => {

    

    return(
        <div>
            <h2>Dashboard overview</h2>
            <div className="row">
                <div className="col-md-3 my-col">
                    <Card title="Borrowers" text="borrowers overview" height="14rem" width="25rem"></Card>
                </div>
                <div className="col-md-3 my-col">
                    <Card title="Loans" height="14rem" width="25rem"></Card>
                </div>
                <div className="col-md-3 my-col">
                    <Card title="returns" height="14rem" width="25rem"></Card>
                </div>
                <div className="col-md-3 my-col">
                    <Card title="returns" height="14rem" width="25rem"></Card>
                </div>
            </div>
            <div className="col-md-11 mt-5">
                <Card title="Line chart" height="60rem" width="150rem">
                    <Linechart />
                </Card>
                
            </div>
        </div>
    )
}

export default Dashboard;