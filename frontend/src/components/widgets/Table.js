import { useState, useEffect } from "react"
import "./Table.css"


const Table = () => {

    const [borrowerData, setBorrowerData] = useState([])

    const fetchBorrowerData = () =>  {
        fetch("http://localhost:8000/borrowers")
        .then(res => res.json())
        .then(payload=> {
            console.log(payload)
            setBorrowerData(payload)})
    }

    useEffect(() => {

        fetchBorrowerData()

    }, [])

   

    return(
        <div className="wrapper overflow">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Borrower</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Income</th>
                    <th scope="col">Years Worked</th>
                    <th scope="col">Fico Score</th>
                    <th scope="col">Dti</th>
                    </tr>
                </thead>
                <tbody>
                    {borrowerData!==undefined && borrowerData.map((item, index) => {
                        return(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.Income}</td>
                            <td>{item.years_worked}</td>
                            <td>{item.fico_score}</td>
                            <td>{item.dti}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}

export default Table;