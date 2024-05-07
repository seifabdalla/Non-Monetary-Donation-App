import MainHeader from "../../components/MainHeader.jsx";
import {RegRequests} from "../../model/Admin/Submissions.js";
import DonorSubmissionsCard from "../../components/DonorSubmissionsCard.jsx";
import OrganizationSubmissionsCard from "../../components/OrganizationSubmissionsCard.jsx";

export default function Requests_listView() {


    return (<div className={"bg-teal-50 w-screen min-h-screen"}>
            <MainHeader/>

            {
                RegRequests.map((request, index) => {
                    return (
                        <div key={index} className="flex flex-col justify-center items-center py-3">

                            {request.type === "organization" &&
                                <OrganizationSubmissionsCard request={request}/>
                            }
                            {request.type === "donor" &&
                                <DonorSubmissionsCard request={request}/>
                            }
                        </div>
                    );
                })
            }

        </div>
    );
}
