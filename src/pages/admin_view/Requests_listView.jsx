import MainHeader from "../../components/MainHeader.jsx";
import {RegRequests} from "../../model/Admin/Submissions.js";
import DonorSubmissionsCard from "../../components/DonorSubmissionsCard.jsx";
import OrganizationSubmissionsCard from "../../components/OrganizationSubmissionsCard.jsx";

export default function Requests_listView() {


    return (<div className={"bg-teal-50 w-screen min-h-screen"}>
            <MainHeader/>
        <div className={'h-full w-full flex flex-col items-center pt-9  pb-10 overflow-y-auto'}>
            <div className={' w-full h-14 text-2xl  font-bold rounded-md text-center'}>Registration Requests</div>
            <div
                className={' flex flex-row w-3/4 h-10 bg-teal-200 px-4 py-2 gap-80 items-start font-bold rounded-md text-center'}>
                {/*<h1>Registration request</h1>*/}
                {/*<h1>Details</h1>*/}
            </div>
            {
                RegRequests.map((request, index) => {
                    return (
                        <div key={index} className="flex w-3/4 flex-col justify-center items-center py-3">

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
        </div>
    );
}
