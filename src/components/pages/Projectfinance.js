import Db from "../../Db";
export default function Projectfinance(){
    return(
        <div>
            <table>
                <tr class="table-header">
                    <th>Bank Name</th>
                    <th>Peoject Name</th>
                    <th>Loan Type</th>
                    <th>Loan Amount</th>
                    <th>Distributed Amount</th>
                </tr>
                    {Db.projectFinance.map((data, index)=>{
                        return(
                            <tr>
                                <td key={index}>{data.BankName}</td>
                                <td key={index}>{data.ProjectName}</td>
                                <td key={index}>{data.LoanType}</td>
                                <td key={index}>{data.LoanAmount}</td>
                                <td key={index}>{data.DistributedAmount}</td>
                            </tr>
                        );
                    })}
            </table>
        </div>
    );
}