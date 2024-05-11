import PropTypes from "prop-types";
import Avatar from '@mui/material/Avatar';
import {useSelector} from "react-redux";
import Organizations from "../model/organizations.js";
import {DonorsRequests} from "../model/donor-requests.js";
import {useState} from "react";
import Icon from "@mdi/react";
import {mdiMenuUpOutline} from "@mdi/js";
import organizations from "../model/organizations.js";

export default function VolunteerRequestCard(props) {
    const individualUsers = useSelector(state => state.IndividualUser.IndividualUsers);
    const userId= props.request.userId-1;
    const organizationId = props.request.organizationId-1;
    const requestId = props.request.requestId-1;
    const [isExpanded,setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }
    return (
        <div
            className={` bg-white flex flex-col justify-around items-start shadow-sm px-4 py-2 w-full rounded-md border-2 border-grey`}>
            <div className={"flex flex-row justify-between w-full text-black"}>
                <div className="flex  flex-row gap-4">
                    <div>
                        <Avatar sx={{width: 75, height: 75}}>
                            <div
                                className="text-4xl ">{individualUsers[userId].firstName.charAt(0) + "" + individualUsers[userId].lastName.charAt(0)}</div>
                        </Avatar></div>
                    <div className="flex flex-col font-medium items-start text-1xl">
                        <div> Volunteer
                            Name: {individualUsers[userId].firstName + " " + individualUsers[userId].lastName}</div>
                        <div> Organization: {Organizations[organizationId].name}</div>
                        <div> Case Address: {DonorsRequests.requests[requestId].address}</div>
                        <div>Category : {DonorsRequests.requests[requestId].category} </div>
                        {isExpanded && <div className="flex flex-row justify-between gap-4">
                            <div className="flex flex-col">
                                <div> Donor Email: {individualUsers[userId].email}</div>
                                <div> Donor Contact Number: {individualUsers[userId].contactNumber}</div>
                                <div> Donor
                                    Location: {individualUsers[userId].address},{individualUsers[userId].area},{individualUsers[userId].governorate}</div>
                                {individualUsers[userId].type === "Doctor" && <>
                                    <div> Specialization: {individualUsers[userId].specialization}</div>
                                    <div> Clinic
                                        Location: {individualUsers[userId].clinicAddress},{individualUsers[userId].clinicArea},{individualUsers[userId].clinicGovernorate}</div>
                                    <div> Number of Cases: {individualUsers[userId].numOfCases}</div>
                                </>}
                                {
                                    individualUsers[userId].type === "Teacher" && <>
                                        <div> Subject: {individualUsers[userId].subjects}</div>
                                        <div> Number of private classes: {individualUsers[userId].privateClasses}</div>
                                        <div> Number of classes: {individualUsers[userId].classes}</div>
                                    </>
                                }
                            </div>
                            <div className="flex flex-col">
                                <div> Organization email:{organizations[organizationId].contactInfo.email}</div>
                                <div> Organization contact
                                    number:{organizations[organizationId].contactInfo.phone}</div>
                                {DonorsRequests.requests[requestId].category === "Medical Cases" && <>
                                    <div> Medical Case: {DonorsRequests.requests[requestId].case}</div>
                                </>
                                }
                                {
                                    DonorsRequests.requests[requestId].category === "Teaching Posts" && <>
                                        <div> Subjects Needed: {DonorsRequests.requests[requestId].subjects}</div>
                                        <div> Number of classes: {DonorsRequests.requests[requestId].noOfStudents}</div>
                                    </>
                                }
                                <div className="flex flex-row justify-center items-center mt-4 gap-4 ">
                                    <button
                                        className=" bg-green-500 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-green-600 hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className=" bg-red-500 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-red-700 hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>

                        </div>

                        }
                    </div>
                </div>
                <button className=" flex flex-col justify-start" onClick={handleExpand}>
                    <Icon path={mdiMenuUpOutline} size={1} rotate={isExpanded ? 0 : 180}
                          className={"transition-transform duration-300 text-black"}/>
                </button>
            </div>
        </div>
    );


}
VolunteerRequestCard.propTypes = {
    request: PropTypes.object,
}