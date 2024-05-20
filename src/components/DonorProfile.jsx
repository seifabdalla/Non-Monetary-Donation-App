import Modal from "@mui/material/Modal";
import {Box} from "@mui/system";
import Icon from "@mdi/react";
import {mdiAttachment} from "@mdi/js";
import PropTypes from "prop-types";
import React, {useState} from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#F0FDFA',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '24',
};

export default function DonorProfile(props){
    const handleClose = () => props.setOpen(false);

    return (

        <div>
            <Modal
                open={props.isOpen}
                onClose={handleClose}
                aria-labelledby="profile-modal"
                aria-describedby="the-profile-page"
            >
                <Box sx={style}>
                    <div className={'flex flex-col text-black pt-10'}
                         style={{width: '35rem', height: '35rem'}}>
                        <div className={'flex flex-col w-full text-black px-8 gap-5'}
                             style={{width: '35rem', height: '35rem'}}>
                            <div className={'text-2xl font-bold mx-auto pb-10'}>Info</div>
                            <div className={'gap-5 flex flex-row'}><h1
                                className={'font-bold'}>Name:</h1> {props.donor.firstName} {props.donor.lastName} </div>
                            <div className={'gap-5 flex flex-row'}><h1
                                className={'font-bold'}>Email:</h1> {props.donor.email}</div>
                            <div className={'gap-5 flex flex-row'}><h1
                                className={'font-bold'}>Number:</h1> {props.donor.contactNumber}</div>
                            <div className={'gap-5 flex flex-row'}><h1 className={'font-bold'}>Type
                                :</h1> {props.donor.type}</div>
                            <div className={'gap-5 flex flex-row'}><h1
                                className={'font-bold'}>Address:</h1> {props.donor.address}</div>
                            <div className={'gap-5 flex flex-row'}><h1
                                className={'font-bold'}>Area:</h1> {props.donor.area}</div>
                            <div className={'gap-5 flex flex-row'}><h1
                                className={'font-bold'}>Governorate:</h1> {props.donor.governorate}</div>

                        </div>
                        <div className={'flex w-full justify-center mt-auto pt-8'}>
                        <button
                                    onClick={handleClose}
                                    className=" bg-Tropical-Lagoon text-white font-bold rounded-b px-4 w-full py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                                    Close
                                </button>

                            </div>


                        </div>
                </Box>
            </Modal>
        </div>


);
}

DonorProfile.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen:PropTypes.func,
    donor:PropTypes.object

}