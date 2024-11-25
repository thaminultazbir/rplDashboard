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