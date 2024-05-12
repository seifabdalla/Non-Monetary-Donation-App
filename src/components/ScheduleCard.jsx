import Icon from "@mdi/react";
import {mdiAccountCircleOutline, mdiMenuUpOutline, mdiTrashCanOutline,mdiHomeClockOutline} from "@mdi/js";
import PropTypes from "prop-types";
import React, {useState} from "react";
import ScheduleInput from "./ScheduleInput.jsx";

export default function ScheduleCard(props){
    const [isExpanded, setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }
    const [isOpenSchedule, setOpenSchedule] = useState(false);
    const openSchedule = () => {
        setOpenSchedule(true);}

    return (
    <>
    <div
        className={'bg-white flex flex-col justify-around items-start shadow-sm px-4 py-2 w-2/3 rounded-md border-2 border-grey'}>

        <div className="flex flex-row justify-between w-full text-black">

            <div className="flex-grow flex items-center justify-center">
                <h2 className="font-medium max-w-lg truncate text-center">
                    {props.schedule.title}
                </h2>
            </div>
            <div className="flex justify-end items-center">
                {/*<button onClick={handleExpand} className="max-w-5">*/}
                {/*    <Icon path={mdiMenuUpOutline} size={1} rotate={isExpanded ? 0 : 180}*/}
                {/*          className="transition-transform duration-300"/>*/}
                {/*</button>*/}
            </div>
            <div className="flex flex-row w-1/4 justify-between gap-4 pl-8">
                <button
                   onClick={openSchedule} className="flex flex-row bg-Tropical-Lagoon gap-4 border-teal-400 border-2 text-white font-bold rounded-md px-4 py-2 hover:shadow-lg hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                >
                    <h1>Schedule</h1>
                    <Icon path={mdiHomeClockOutline} size={1} />
                </button>


            </div>


    </div>
    </div>
        <ScheduleInput isOpen={isOpenSchedule} setOpen={setOpenSchedule}/>
        </>
        );
}

ScheduleCard.propTypes = {
    schedule: PropTypes.object,

};