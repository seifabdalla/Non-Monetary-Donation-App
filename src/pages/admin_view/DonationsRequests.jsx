import MainHeader from "../../components/MainHeader.jsx";
import {DonorsRequests} from "../../model/donor/donor-requests.js";
import RequestsCard from "../../components/RequestsCard.jsx";


export  default  function DonationsRequests(){

    return (<div className={"bg-teal-50 w-screen min-h-screen"}>
            <MainHeader/>
        <div className={'h-full w-full flex flex-col items-center pt-9  pb-10 overflow-y-auto'}>
            <div className={' w-full h-14 text-2xl  font-bold rounded-md text-center'}>Donation Requests</div>

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