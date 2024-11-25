import Db from "../../Db";

export default function classificationstatus(){
    return(
        <div>
        <table>
            <tr class="table-header">
                <th>Loan Type</th>
                <th>Loan Account No</th>
                <th>Creation Date</th>
                <th>Dua Date</th>
                <th>Status</th>
            </tr>
            {
                Db.classificationStatus.map((data, index)=>{
                    return(
                        <tr>
                            <td key={index}>{data.loanType}</td>
                            <td key={index}>{data.loanAccountNo}</td>
                            <td key={index}>{data.creationDate}</td>
                            <td key={index}>{data.dueDate}</td>
                            <td key={index}>{data.status}</td>
                        </tr>
                    );
                })
            }
        </table>
    </div>
    );
}