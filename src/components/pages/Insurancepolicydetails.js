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
                Db.insurancePolicyDetails.map((data, index)=>{
                    return(
                        <tr>
                            <td key={index}>{data.policyDetails}</td>
                            <td key={index}>{data.insurer}</td>
                            <td key={index}>{data.insuree}</td>
                            <td key={index}>{data.policyDate}</td>
                            <td key={index}>{data.coveringPeriod}</td>
                        </tr>
                    );
                })
            }
        </table>
    </div>
    );
}