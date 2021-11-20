import loan from "../../data/loan.json"
import "./Table.css"

const Table = () => {

    console.log(loan)
    const loanData = loan

    return(
        <div className="wrapper overflow">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Borrower</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Interest</th>
                    <th scope="col">Status</th>
                    <th scope="col">Term</th>
                    </tr>
                </thead>
                <tbody>
                    {loanData!==undefined && loanData.map((item, index) => {
                        return(
                        <tr key={index}>
                            <td>{item.grade}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
                            <td>%{item.interest/100}</td>
                            <td>{item.borrower}</td>
                            <td>{item.term}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}

export default Table;