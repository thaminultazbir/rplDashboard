import Db from "../../Db";

export default function Taskmonitoring(){
    return(
        <div>
        <table>
            <tr class="table-header">
                <th>Ad-hoc</th>
                <th>Monthly</th>
                <th>Quarterly</th>
                <th>Half-yearly</th>
                <th>Yearly</th>
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