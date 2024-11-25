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
                Db.paymentMade.map((data, index)=>{
                    return(
                        <tr>
                            <td key={index}>{data.particulars}</td>
                            <td key={index}>{data.y2022}</td>
                            <td key={index}>{data.y2023}</td>
                            <td key={index}>{data.ytd}</td>
                            <td key={index}>{data.monnthly}</td>
                        </tr>
                    );
                })
            }
        </table>
    </div>
    );
}