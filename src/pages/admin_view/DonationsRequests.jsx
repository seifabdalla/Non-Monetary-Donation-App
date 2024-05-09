import MainHeader from "../../components/MainHeader.jsx";
import {DonorsRequests} from "../../model/view-page.js";
import {RegRequests} from "../../model/Admin/Submissions.js";
import OrganizationSubmissionsCard from "../../components/OrganizationSubmissionsCard.jsx";
import DonorSubmissionsCard from "../../components/DonorSubmissionsCard.jsx";
import Requests_listView from "./Requests_listView.jsx";
import RequestsCard from "../../components/RequestsCard.jsx";


export  default  function DonationsRequests(){
    return (<div className={"bg-teal-50 w-screen min-h-screen"}>
            <MainHeader/>

            {
                DonorsRequests.requests.map((request, index) => {
                    return (
                        <>
                        <div key={index} className="flex flex-col justify-center items-center py-3">
                        <RequestsCard request={request}/>
                        </div>
                        </>
                    );
                })
            }

        </div>
    );
}