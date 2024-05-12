import PropTypes from "prop-types";
import Avatar from '@mui/material/Avatar';
import {useSelector} from "react-redux";
import Organizations from "../model/organizations.js";
import {DonorsRequests} from "../model/donor-requests.js";
import {useState} from "react";
import Icon from "@mdi/react";
import {mdiMenuUpOutline} from "@mdi/js";
import organizations from "../model/organizations.js";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function VolunteerRequestCard(props) {
    const individualUsers = useSelector(state => state.IndividualUser.IndividualUsers);
    const userId= props.request.userId-1;
    const organizationId = props.request.organizationId-1;
    const requestId = props.request.requestId-1;
    const [isExpanded,setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }
    const handleAccept = () => {
        handleExpand();
        withReactContent(Swal).fire({
            title: "Success",
            text: "Donation Request accepted successfully",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}
    const handleDelete = () => {
        handleExpand();
        withReactContent(Swal).fire({
            title: "Success",
            text: "Donation Request Rejected Successfully ",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}
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
                        <div> <span  className="font-bold">Volunteer
                            Name: </span>{individualUsers[userId].firstName + " " + individualUsers[userId].lastName}</div>
                        <div> <span  className="font-bold">Organization: </span>{Organizations[organizationId].name}</div>
                        <div><span className="font-bold"> Case Address: </span>{DonorsRequests.requests[requestId].address}
                        </div>
                        <div><span  className="font-bold">Category : </span>{DonorsRequests.requests[requestId].category} </div>
                        {isExpanded && <div className="flex flex-row justify-between gap-4">
                            <div className="flex flex-col">
                                <div> <span  className="font-bold">Donor Email: </span>{individualUsers[userId].email}</div>
                                <div> <span  className="font-bold">Donor Contact Number: </span>{individualUsers[userId].contactNumber}</div>
                                <div> <span  className="font-bold">Donor
                                    Location: </span>{individualUsers[userId].address},{individualUsers[userId].area},{individualUsers[userId].governorate}</div>
                                {individualUsers[userId].type === "Doctor" && <>
                                    <div> <span  className="font-bold">Specialization: </span>{individualUsers[userId].specialization}</div>
                                    <div> <span  className="font-bold">Clinic
                                        Location: </span>{individualUsers[userId].clinicAddress},{individualUsers[userId].clinicArea},{individualUsers[userId].clinicGovernorate}</div>
                                    <div><span
                                        className="font-bold"> Number of Cases: </span>{individualUsers[userId].numOfCases}
                                    </div>
                                </>}
                                {
                                    individualUsers[userId].type === "Teacher" && <>
                                        <div> <span  className="font-bold">Subject: </span>{individualUsers[userId].subjects}</div>
                                        <div> <span  className="font-bold">Number of private classes: </span>{individualUsers[userId].privateClasses}</div>
                                        <div> <span  className="font-bold">Number of classes: </span>{individualUsers[userId].classes}</div>
                                    </>
                                }
                            </div>
                            <div className="flex flex-col">
                                <div> <span  className="font-bold">Organization email: </span>{organizations[organizationId].contactInfo.email}</div>
                                <div> <span  className="font-bold">Organization contact
                                    number: </span>{organizations[organizationId].contactInfo.phone}</div>
                                {DonorsRequests.requests[requestId].category === "Medical Cases" && <>
                                    <div> <span  className="font-bold">Medical Case: </span>{DonorsRequests.requests[requestId].case}</div>
                                </>
                                }
                                {
                                    DonorsRequests.requests[requestId].category === "Teaching Posts" && <>
                                        <div> <span  className="font-bold">Subjects Needed: </span>{DonorsRequests.requests[requestId].subject}</div>
                                        <div> <span  className="font-bold">Number of classes: </span> {DonorsRequests.requests[requestId].noOfStudents}</div>
                                    </>
                                }
                                <div className="flex flex-row justify-center items-center mt-4 gap-4 ">
                                    <button
                                        className=" bg-green-500 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-green-600 hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                                    onClick={handleAccept}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className=" bg-red-500 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-red-700 hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                                    onClick={handleDelete}
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