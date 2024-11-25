import Db from "../../Db";

export default function Insurancepolicydetails(){
    return(
        <div>
        <table>
            <tr class="table-header">
                <th>Policy Details</th>
                <th>Insurer</th>
                <th>Insuree</th>
                <th>Policy Date</th>
                <th>Covering Period</th>
            </tr>
            {
                Db.budgetMonitoring.map((data, index)=>{
                    return(
                        <tr>
                            <td key={index}>{data.Previous05YearsBudgetVsActual}</td>
                            <td key={index}>{data.CurrentYearlyBudget}</td>
                            <td key={index}>{data.MonthlyBudget}</td>
                            <td key={index}>{data.MonthlyActual}</td>
                            <td key={index}>{data.CumulativeVariance}</td>
                        </tr>
                    );
                })
            }
        </table>
    </div>
    );
}