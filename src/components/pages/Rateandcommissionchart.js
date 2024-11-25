import Db from "../../Db";

export default function Rateandcommissionchart(){
    return(
        <div>
        <table>
            <tr class="table-header">
                <th>Bank Name</th>
                <th>Current Interest Rate</th>
                <th>Previous 03 Years Interest Rate</th>
                <th>Current Commission Rate</th>
            </tr>
            {
                Db.ratesandCommissionChart.map((data, index)=>{
                    return(
                        <tr>
                            <td key={index}>{data.BankName}</td>
                            <td key={index}>{data.currentInterestRate}</td>
                            <td key={index}>{data.previous03YearsInterestRate}</td>
                            <td key={index}>{data.currentCommissionRate}</td>
                        </tr>
                    );
                })
            }
        </table>
    </div>
    );
}