import PropTypes from "prop-types";
import {useState} from "react";
import Icon from "@mdi/react";
import {mdiMenuUpOutline} from "@mdi/js";



export default function RequestsCard(props){
    const [isExpanded,setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }
    const renderAdditionalInfo = () => {
        const excludedKeys = ['title', 'imgUrl','category', 'requestedBy','description','amountDonated',
            'amountNeeded'];
        return Object.keys(props.request).map((key) => {
            if (!excludedKeys.includes(key)) {
                return (
                    <div key={key} className={"flex flex-row font-medium text-1xl"}>
                        <h3>{key.charAt(0).toUpperCase() + key.slice(1)}: </h3>
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
                className={"bg-teal-700 flex flex-row justify-around items-start shadow-sm px-2 py-2 w-2/3 rounded-md"}>
                {isExpanded &&
                    <div className={"flex flex-row gap-4 px-1 w-full justify-between text-slate-100"}>
                        <img src={props.request.imgUrl} alt={props.request.request} className="w-1/4 h-[190px] object-cover"/>
                        <div className="flex flex-col w-full">
                        <div className={"flex flex-row gap-20 justify-between w-full"}>
                            <div className="flex flex-col  font-medium text-1xl">
                                <div> Title: {props.request.title}</div>
                                <div> Category: {props.request.category}</div>
                                <div> Requested By: {props.request.requestedBy}</div>
                                <div> Description:{props.request.description}</div>
                                <div> Amount Needed: {props.request.amountNeeded}</div>

                                </div>

                            <div className="flex flex-col w-full">
                                <div> {renderAdditionalInfo()}</div>

                            </div>
                        </div>
                            <div className="flex flex-row gap-4 justify-center">
                                <button
                                    className=" bg-green-400 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                                >
                                    Accept
                                </button>
                                <button
                                    className=" bg-red-500 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                                >
                                    Reject
                                </button>
                            </div>
                        </div>

                    </div>}
                {
                    !isExpanded &&
                    <div className={"flex flex-row gap-4 px-1 w-full text-slate-100"}>
                        <img src={props.request.imgUrl} alt={props.request.request} className="w-[100px] "/>
                        <div className="flex flex-col font-medium text-1xl">
                            <div> Title: {props.request.title}</div>
                            <div> Category: {props.request.category}</div>
                            <div> Requested By: {props.request.requestedBy}</div>
                        </div>
                    </div>}
                <button onClick={handleExpand}>
                    <Icon path={mdiMenuUpOutline} size={1}  rotate={isExpanded ? 0 : 180}
                          className={"transition-transform duration-300 text-white"}/>
                </button>
            </div>
        </>

    );


}

RequestsCard.propTypes = {
    request: PropTypes.object,
}