import Db from "../../Db";

export default function Loanrepayschedule(){
    return(
        <div>
        <table>
            <tr class="table-header">
                <th>Loan Type</th>
                <th>Loan Account No</th>
                <th>Creation Date</th>
                <th>Dua Date</th>
                <th>Ageing</th>
            </tr>
            {
                Db.loanRepaySchedule.map((data, index)=>{
                    return(
                        <tr>
                            <td key={index}>{data.loanType}</td>
                            <td key={index}>{data.loanAccountNo}</td>
                            <td key={index}>{data.creationDate}</td>
                            <td key={index}>{data.dueDate}</td>
                            <td key={index}>{data.Ageing}</td>
                        </tr>
                    );
                })
            }
        </table>
    </div>
    );
}