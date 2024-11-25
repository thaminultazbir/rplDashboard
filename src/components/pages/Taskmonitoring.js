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
                Db.taskMonitoring.map((data, index)=>{
                    return(
                        <tr>
                            <td key={index}>{data.Adhoc}</td>
                            <td key={index}>{data.monthly}</td>
                            <td key={index}>{data.quarterly}</td>
                            <td key={index}>{data.halfyearly}</td>
                            <td key={index}>{data.yearly}</td>
                        </tr>
                    );
                })
            }
        </table>
    </div>
    );
}