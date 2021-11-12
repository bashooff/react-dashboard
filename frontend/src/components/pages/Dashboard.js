import "./Dashboard.css";
import Card from "../widgets/Card";

const Dashboard = () => {
    return(
        <div className="container">
            <h2 className="mt-3">Dashboard overview</h2>
            <div className="row">
                <div className="col-md-4 my-col">
                    <Card title="Borrowers" text="borrowers overview"></Card>
                </div>
                <div className="col-md-4 my-col">
                    <Card title="Loans"></Card>
                </div>
                <div className="col-md-4 my-col">
                    <Card title="returns"></Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;