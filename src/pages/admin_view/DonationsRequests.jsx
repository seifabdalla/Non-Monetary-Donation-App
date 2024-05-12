import MainHeader from "../../components/MainHeader.jsx";
import {DonorsRequests} from "../../model/donor/donor-requests.js";
import RequestsCard from "../../components/RequestsCard.jsx";

export  default  function DonationsRequests(){
    return (<div className={"bg-teal-50 w-screen min-h-screen"}>
            <MainHeader/>
        <div className={'h-full w-full flex flex-col items-center pt-9  pb-10 overflow-y-auto'}>
            <div className={' w-full h-14 text-2xl  font-bold rounded-md text-center'}>Donation Requests</div>
            <div
                className={' flex flex-row w-3/4 h-10 bg-teal-200 px-4 py-2 gap-80 items-start font-bold rounded-md text-center'}>
                <h1>Requests</h1>
                <h1>Details</h1>
            </div>
            {
                DonorsRequests.requests.map((request, index) => {
                    return (
                        <>
                        <div key={index} className="flex w-3/4 flex-col justify-center items-center py-3">
                        <RequestsCard request={request}/>
                        </div>
                        </>
                    );
                })
            }
        </div>

        </div>
    );
}