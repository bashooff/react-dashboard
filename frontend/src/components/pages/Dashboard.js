import "./Dashboard.css";
import Card from "../widgets/Card";
import Piechart from "../widgets/Piechart";
import Highcharts from "highcharts"
import HighchartsReact from 'highcharts-react-official'

const Dashboard = () => {

    const options = {
        title: {
          text: 'My chart'
        },
        series: [{
          data: [1, 2, 3]
        }]
      }

    return(
        <div>
            <h2>Dashboard overview</h2>
            <div className="row">
                <div className="col-md-3 my-col">
                    <Card title="Borrowers" text="borrowers overview"></Card>
                </div>
                <div className="col-md-3 my-col">
                    <Card title="Loans"></Card>
                </div>
                <div className="col-md-3 my-col">
                    <Card title="returns"></Card>
                </div>
                <div className="col-md-3 my-col">
                    <Card title="returns"></Card>
                </div>
            </div>
            <div className="col-md-11 mt-5">
                <Piechart />
            </div>
        </div>
    )
}

export default Dashboard;