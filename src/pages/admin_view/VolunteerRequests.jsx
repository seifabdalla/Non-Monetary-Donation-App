import MainHeader from "../../components/MainHeader.jsx";
import {VolunteeringRequests} from "../../model/Admin/Volunteering request.js";
import PropTypes from "prop-types";
import RequestsCard from "../../components/RequestsCard.jsx";
import VolunteerRequestCard from "../../components/VolunteerRequestCard.jsx";



export default  function VolunteerRequests(){
    return (

            <div className={"bg-teal-50 w-screen min-h-screen"}>
                <MainHeader/>
                {VolunteeringRequests.map((request, index) => {
                return (
                <>
                <div key={index} className="flex flex-col justify-center items-center py-3">
                <VolunteerRequestCard request={request}/>
            </div>
                  </>
    );
}
)
                }
            </div>

    );
}
