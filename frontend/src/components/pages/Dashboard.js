import "./Dashboard.css";
import Card from "../widgets/Card";
import Linechart from "../widgets/Linechart";
import Piechart from "../widgets/Piechart";
import Barchart from "../widgets/Barchart";
import { FcPackage, FcSalesPerformance, FcList, FcBookmark } from "react-icons/fc";
import Table from "../widgets/Table";
import { useState, useEffect } from "react";


const Dashboard = () => {

    const defaultLabels = ["Current", "Default"]
    const [loanData, setLoanData] = useState([])


    const fetchLoanData = () =>  {
        fetch("http://localhost:8000/")
        .then(res => res.json())
        .then(payload=> {
           setLoanData(payload)})
    }

    useEffect(() => {

        fetchLoanData()

    }, [])


    const status = [...loanData.map(item => item.borrower)]
    const result = {};
    for(var i = 0; i < status.length; ++i) {
        if(!result[status[i]])
            result[status[i]] = 0;
        ++result[status[i]];
    }

    console.log(result)
    


    return(
        <div>
            <h2>Dashboard overview</h2>
            <div className="row mt-5">
                    <div className="col my-col">
                        <Card title="Borrowers" text="borrowers overview" height="10rem" width="100%">
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
                    <div className="col my-col">
                        <Card title="Loans" height="10rem" width="100%">
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
                    <div className="col my-col">
                        <Card title="returns" height="10rem" width="97%">
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
            </div>
            <div className="row">
                <div className="col-md-9 mt-5">
                    <Card title="Line chart" height="100%" width="99%">
                        <Linechart />
                    </Card>
                </div>
                <div className="col-md-3 mt-5">
                    <Card title="Line chart" height="100%" width="99%">
                        <Piechart title="Defaults" labels={defaultLabels} data={result}/>
                    </Card>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-7 mt-5">
                    <Card title="Line chart" height="100%" width="99%">
                        {/* <Table /> */}
                    </Card>
                </div>
                <div className="col-md-5 mt-5">
                    <Card title="Line chart" height="100%" width="98%">
                        <Barchart></Barchart>
                    </Card>
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard;