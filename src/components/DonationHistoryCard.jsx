import PropTypes from "prop-types";
import {useState} from "react";
import Icon from "@mdi/react";
import {mdiMenuUpOutline,mdiTimerSand,mdiStoreCheckOutline  } from "@mdi/js";

export default function DonationHistoryCard(props){
    const [isExpanded, setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }
    return (
        <div
            className={`bg-white flex flex-col justify-around items-start shadow-sm px-4 py-2 w-5/6 rounded-md border-2 border-grey`}>
            <div className="flex flex-row justify-between w-full text-black">
                <div className="flex items-center">
                    <h2 className="font-medium max-w-xs truncate">
                        Request ID: {props.donationObject.id}
                    </h2>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <h2 className="font-medium max-w-lg truncate text-center">
                        {props.donationObject.title}
                    </h2>
                </div>
                {
                    ! props.donationObject.isFulfilled &&
                    <Icon path={mdiTimerSand } size={1} className="text-teal-500 mr-3 animate-spin"/>
                }
                {
                    props.donationObject.isFulfilled &&
                    <Icon path={mdiStoreCheckOutline } size={1} className="text-teal-500 mr-3"/>
                }
                <div className="flex justify-end items-center">
                    <button onClick={handleExpand} className="max-w-5">
                        <Icon path={mdiMenuUpOutline} size={1} rotate={isExpanded ? 0 : 180}
                              className="transition-transform duration-300"/>
                    </button>
                </div>
            </div>
        {
            isExpanded &&
            <div className={"flex flex-col items-center justify-center w-full px-3 py-2"}>
                <p className={"text-sm text-gray-600"}>Requested By: {props.donationObject.requestedBy}</p>
                <p className={"text-sm text-gray-600"}>Category: {props.donationObject.category}</p>
                {props.donationObject.pickedBy && <p className={"text-sm text-gray-600"}>Picked By: {props.donationObject.pickedBy}</p>}
                {
                    props.donationObject.description &&
                    <p className={"text-sm text-gray-600"}>{props.donationObject.description}</p>
                }
            </div>
        }
        </div>
    );
}

DonationHistoryCard.propTypes = {
    donationObject: PropTypes.object.isRequired,
};