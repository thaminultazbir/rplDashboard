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