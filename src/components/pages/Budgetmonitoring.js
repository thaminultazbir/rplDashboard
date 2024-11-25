import Db from "../../Db";

export default function Budgetmonitoring(){
    return(
        <div>
        <table>
            <tr class="table-header">
                <th>Previous 05 Years Budget vs Actual</th>
                <th>Current Yearly Budget</th>
                <th>Monthly Budget</th>
                <th>Monthly Actual</th>
                <th>Cumulative Variance</th>
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