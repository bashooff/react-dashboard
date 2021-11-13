import Sidebar from "../widgets/Sidebar"
import Header from "../widgets/Header"
import {Table} from 'react-bootstrap'
import LoanData from "./LoanData"


const Data = () => {
    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <Header />
                    <LoanData></LoanData>
                </div>
            </div>
        </div>
    )
}

export default Data