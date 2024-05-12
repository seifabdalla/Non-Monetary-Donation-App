import PropTypes from "prop-types";
import Avatar from '@mui/material/Avatar';
import {useSelector} from "react-redux";
import {useState} from "react";
import Icon from "@mdi/react";
import {mdiDownload, mdiMenuUpOutline} from "@mdi/js";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import MapStatic from "./Mapstatic.jsx";

export default function DonorInfo(props) {
    const individualUsers = useSelector(state => state.IndividualUser.IndividualUsers);
    const userId= props.donor.userId-1;
    const [isExpanded,setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }

    const handleDelete = () => {
        handleExpand();
        withReactContent(Swal).fire({
            title: "Success",
            text: "Donor Deleted Successfully ",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}
    const handleDownload = () => {
        withReactContent(Swal).fire({
            title: "Success",
            text: "Donor speciality Files downloaded successfully",
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
                        <div> <span  className="font-bold">Donor
                            Name: </span>{individualUsers[userId].firstName + " " + individualUsers[userId].lastName}</div>
                        <div> <span  className="font-bold">Donor type: </span>{individualUsers[userId].type}</div>
                        <div> <span  className="font-bold">Donor
                            Location: </span>{individualUsers[userId].address},{individualUsers[userId].area},{individualUsers[userId].governorate}</div>
                        <div> <span  className="font-bold">Donor Email: </span>{individualUsers[userId].email}</div>
                        <div> <span  className="font-bold">Donor Contact Number: </span>{individualUsers[userId].contactNumber}</div>

                        {isExpanded && individualUsers[userId].workingInfo &&
                            <div className="flex flex-row justify-between gap-4">
                                <div className="flex flex-col">
                                    {individualUsers[userId].type === "Doctor" && <>
                                        <div> <span  className="font-bold">Specialization: </span>{individualUsers[userId].specialization}</div>
                                        <div> <span  className="font-bold">Clinic
                                            Location: </span>{individualUsers[userId].clinicAddress},{individualUsers[userId].clinicArea},{individualUsers[userId].clinicGovernorate}</div>
                                        <div> <span  className="font-bold">Number of Cases: </span>{individualUsers[userId].numOfCases}</div>
                                    </>}
                                    {
                                        individualUsers[userId].type === "Teacher" && <>
                                            <div> <span  className="font-bold">Subject: </span>{individualUsers[userId].subjects}</div>
                                            <div> <span  className="font-bold">Number of private classes: </span>{individualUsers[userId].privateClasses}</div>
                                            <div> <span  className="font-bold">Number of classes: </span>{individualUsers[userId].classes}</div>
                                        </>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {<button className=" flex flex-col justify-start" onClick={handleExpand}>
                    <Icon path={mdiMenuUpOutline} size={1} rotate={isExpanded ? 0 : 180}
                          className={"transition-transform duration-300 text-black"}/>
                </button>}
            </div>

                {isExpanded && <div className="flex flex-col ml-96 m-4 gap-3 justify-center items-center">
                    {individualUsers[userId].type==="Doctor"&& <><div className="font-bold">Clinic Location</div> <MapStatic  location={individualUsers[userId].location}/></>}
                    {individualUsers[userId].type!=="Regular"&&<button
                        className=" flex flex-row  mb-4 bg-Mystic-Teal text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                    onClick={handleDownload}
                    > Download Donor legal Files<Icon path={mdiDownload} size={1}
                                                             className={"transition-transform duration-300 text-black"}/>
                    </button>}
                    <div className="flex flex-row w-full justify-center items-center  gap-4 ">
                        <button
                            className="bg-red-500 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-red-700 hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                        onClick={handleDelete}
                        >
                            Delete Donor
                        </button>
                    </div>
                </div>}







        </div>
    );


}
DonorInfo.propTypes = {
    donor: PropTypes.object,
}