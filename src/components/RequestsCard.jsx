import PropTypes from "prop-types";
import {useState} from "react";
import Icon from "@mdi/react";
import {mdiMenuUpOutline} from "@mdi/js";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export default function RequestsCard(props){
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
    const renderAdditionalInfo = () => {
        const excludedKeys = ['title', 'imgUrl','category', 'requestedBy','description','amountDonated','request_id',
            'amountNeeded'];
        return Object.keys(props.request).map((key) => {
            if (!excludedKeys.includes(key)) {
                return (
                    <div key={key} className={"flex flex-row font-medium text-1xl"}>
                        <h3> <span  className="font-bold">{key.charAt(0).toUpperCase() + key.slice(1)} </span>:
                        </h3>
                        <p>
                        {props.request[key]}
                        </p>
                    </div>
                );
            }
            return null;
        });
    };

    return(
        <>
            <div
                className={` bg-white flex flex-row justify-around items-start shadow-sm px-4 py-2 w-full rounded-md border-2 border-grey`}>
                {isExpanded &&
                    <div className={"flex flex-row gap-4 px-1 w-full justify-between text-black"}>
                        <img src={props.request.imgUrl} alt={props.request.request}
                             className="w-1/4 h-[190px] object-cover"/>
                        <div className="flex flex-col w-full">
                            <div className={"flex flex-row  justify-between w-full"}>
                                <div className="flex flex-col  font-medium text-1xl">
                                    <div> <span  className="font-bold">Title: </span> {props.request.title}</div>
                                    <div> <span  className="font-bold">Category: </span>{props.request.category}</div>
                                    <div> <span  className="font-bold"> Requested By: </span>{props.request.requestedBy}</div>
                                    <div> <span  className="font-bold">Description: </span>{props.request.description}</div>
                                    <div> <span  className="font-bold">Amount Needed: </span>{props.request.amountNeeded}</div>
                                </div>

                                <div className="flex flex-col justify-end pb-5">
                                    <div> {renderAdditionalInfo()}</div>

                                </div>
                            </div>
                            <div className="flex flex-row gap-4 items center justify-center mt-4">
                                <button
                                    className=" bg-green-400 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-green-600 hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
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

                    </div>}
                {
                    !isExpanded &&
                    <div className={"flex flex-row gap-4 px-1 w-full text-black"}>
                        <img src={props.request.imgUrl} alt={props.request.request} className="w-[100px] "/>
                        <div className="flex flex-col font-medium text-1xl">
                            <div> Title: {props.request.title}</div>
                            <div> Category: {props.request.category}</div>
                            <div> Requested By: {props.request.requestedBy}</div>
                        </div>
                    </div>}
                <button onClick={handleExpand}>
                    <Icon path={mdiMenuUpOutline} size={1} rotate={isExpanded ? 0 : 180}
                          className={"transition-transform duration-300 text-black"}/>
                </button>
            </div>
        </>

    );


}

RequestsCard.propTypes = {
    request: PropTypes.object,
}