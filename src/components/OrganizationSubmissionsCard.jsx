import PropTypes from "prop-types";
import {useState} from "react";
import Icon from '@mdi/react';
import {mdiDownload, mdiMenuUpOutline} from '@mdi/js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
export default function OrganizationSubmissionsCard(props){
    const [isExpanded,setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }
    const handleAccept = () => {
        handleExpand();
        withReactContent(Swal).fire({
            title: "Success",
            text: "Organization accepted successfully",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}
    const handleDownload = () => {
        withReactContent(Swal).fire({
            title: "Success",
            text: "Organization Files downloaded successfully",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}
    const handleDelete = () => {
        handleExpand();
        withReactContent(Swal).fire({
            title: "Success",
            text: "Organization Rejected Successfully ",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}
    return (
        <div
            className={` bg-white flex flex-col justify-around items-start shadow-sm px-4 py-2 w-full rounded-md border-2 border-grey`}>
            <div className={"flex flex-row justify-between px-1 w-full text-black"}>
                <h2 className={"font-medium text-3xl"}>
                    {props.request.first_name} {props.request.last_name}
                </h2>
                <button onClick={handleExpand}>
                    <Icon path={mdiMenuUpOutline} size={1}  rotate={isExpanded ? 0 : 180}
                          className={"transition-transform duration-300 text-black"}/>
                </button>
            </div>
            <div className={"font-mono text-xl text-black"}>
                <span  className="font-bold">Type : </span> Organization
            </div>

            {
                isExpanded &&
                <div className="font-mono text-xl text-black flex flex-col justify-between w-full">
                    <div className="font-mono text-xl text-black flex flex-row justify-between w-full">
                        <div className="flex-col ">
                            <div> <span  className="font-bold">Email:  </span>{props.request.email}</div>
                            <div> <span  className="font-bold">Gender: </span>{props.request.gender}</div>
                            <div> <span  className="font-bold">OrganizationName: </span>{props.request.organization.name}</div>
                            <div> <span  className="font-bold">Organization Address: </span>{props.request.organization.address}</div>
                            <div> <span  className="font-bold">Organization Governorate: </span>{props.request.organization.governorate}</div>


                        </div>
                        <div className="flex-col ">
                            <div><span  className="font-bold">Password: </span>{props.request.password}</div>
                            <div> <span  className="font-bold">Contact number: </span> {props.request.contact_number}</div>
                            <div> <span  className="font-bold">Organization Type: </span>{props.request.organization.type}</div>
                            <div> <span  className="font-bold">Organization Area:</span> {props.request.organization.area}</div>


                        </div>


                    </div>
                    <div className="flex flex-col mt-4 justify-center items-center">
                        <button
                            className=" flex flex-row w-1/3 mb-4 bg-Mystic-Teal text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                       onClick={handleDownload}
                        > Download Organization legal Files<Icon path={mdiDownload} size={1}
                                                          className={"transition-transform duration-300 text-black"}/>
                        </button>
                        <div className="flex flex-row gap-4">
                            <button
                                className=" bg-green-400 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-green-600 hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                             onClick={handleAccept}>
                                Accept
                            </button>
                            <button
                                className=" bg-red-500 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-red-700 hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                             onClick={handleDelete} >
                                Reject
                            </button>
                        </div>
                    </div>
                </div>
                        }
                    </div>
                    );

                    }


                    OrganizationSubmissionsCard.propTypes = {
                    request: PropTypes.object,
                }