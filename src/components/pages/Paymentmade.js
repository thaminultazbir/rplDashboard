import Db from "../../Db";

export default function Paymentmade(){
    return(
        <div>
        <table>
            <tr class="table-header">
                <th>Particulars</th>
                <th>2022</th>
                <th>2023</th>
                <th>YTD</th>
                <th>Monthly</th>
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