import Sidebar from "../widgets/Sidebar"
import Header from "../widgets/Header"
import {Table} from 'react-bootstrap'
import LoanData from "./LoanData"


const Data = () => {


    const fetchedData = (data) =>{ 
        fetch("http://localhost:8000/",
        {method: "GET",
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) 
    }).then(res => res.json()).then(payload=> console.log(payload))
}

    fetchedData()



    return(
        <div>
            <LoanData></LoanData>
        </div>
         
    )
}

export default Data