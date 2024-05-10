import PropTypes from "prop-types";
import { mdiMenuUpOutline,mdiAccountCircleOutline,mdiTrashCanOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import {isFulfilled, isPending} from "@reduxjs/toolkit";
import DonorProfile from "./DonorProfile.jsx";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function DonationRequestCard(props) {
    const [isExpanded, setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }
    const [isOpenProf, setOpenProf] = useState(false);
    const openProf = () => {
        setOpenProf(true);}
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6', // Change this to your desired color
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                withReactContent(Swal).fire({
                    title: "Success",
                    text: "New Post was created",
                    icon: "success",
                    confirmButtonColor: "#00b9ae"

                });
            }
        })
    }
    const handleUpdate = () => {
        withReactContent(Swal).fire({
            title: "Success",
            text: "Post updated successfully",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}



    return (
        <>
        <div
            className={`bg-white flex flex-col justify-around items-start shadow-sm px-4 py-2 w-5/6 rounded-md border-2 border-grey`}>

            <div className="flex flex-row justify-between w-full text-black">
                <div className="flex items-center">
                    <h2 className="font-medium max-w-xs truncate">
                        {props.post.category}
                    </h2>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <h2 className="font-medium max-w-lg truncate text-center">
                        {props.post.title}
                    </h2>
                </div>
                <div className="flex justify-end items-center">
                    <button onClick={handleExpand} className="max-w-5">
                        <Icon path={mdiMenuUpOutline} size={1} rotate={isExpanded ? 0 : 180}
                              className="transition-transform duration-300"/>
                    </button>
                </div>
                {props.isPending && <div className="flex flex-row w-1/4 justify-between gap-4 pl-8 pr-8">
                    <button onClick={handleUpdate}
                        className="bg-white border-teal-400 border-2 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                    >
                        Update
                    </button>
                    <button onClick={handleDelete}  className={' rounded-md duration-300 ease-linear'}>
                        <Icon path={mdiTrashCanOutline} className={'hover:text-red-500'} size={1}/>

                    </button>
                </div>}

                {!props.isPending && <div className="flex flex-row w-1/4 justify-center gap-8 pl-8">
                    <button onClick={openProf} className={'flex flex-row items-center gap-2 bg-teal-600 text-white hover:shadow-lg rounded-md px-4 py-2'}> Donor <Icon path={mdiAccountCircleOutline} color={'#FFFFFF'} size={1}/>
                    </button>
                    <button onClick={handleDelete} className={' rounded-md duration-300 ease-linear' }>
                        <Icon path={mdiTrashCanOutline} className={'hover:text-red-500'} size={1} />

                    </button>
                </div>}
            </div>

            {isExpanded && (
                <div className="font-medium text-xl text-black flex flex-row justify-between w-full py-10">
                    <div>
                        {props.post.details}
                    </div>
                </div>
            )}
        </div>
            { !props.isPending && <DonorProfile isOpen={isOpenProf} setOpen={setOpenProf} donor={props.donor}/>}
        </>
    );
}

DonationRequestCard.propTypes = {
    post: PropTypes.object,
    isPending: PropTypes.bool,
    donor: PropTypes.object, // Add this line
};

DonationRequestCard.defaultProps = {
    isPending: false,
    donor: null, // Add this line
}

