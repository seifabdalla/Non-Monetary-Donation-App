import Modal from "@mui/material/Modal";
import {Box} from "@mui/system";
import Icon from "@mdi/react";
import {mdiAttachment} from "@mdi/js";
import PropTypes from "prop-types";
import React, {useState} from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";



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

export default function ScheduleInput(props){
    const handleClose = () => props.setOpen(false);
    const handleSubmit = () => {
        props.setOpen(false);
        withReactContent(Swal).fire({
            title: "Success",
            text: "Drop-off scheduled",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}


        return (

            <div>
                <Modal
                    open={props.isOpen}
                    onClose={handleClose}
                    aria-labelledby="profile-modal"
                    aria-describedby="the-profile-page"
                >
                    <Box sx={style}>
                        <div className={'flex flex-col text-black p-8 pt-16 gap-5'} style={{width: '30rem', height: '30rem'}}>
                            <h1>Date</h1>
                            <DatePicker label="Choose Date" defaultValue={dayjs('2024-05-12')} />
                            <h1>Time Range</h1>
                            <div className={'flex flex-row gap-4'}>
                                <div className={'flex flex-row'}> <TimePicker
                                    label="From"
                                    defaultValue={dayjs('2024-05-12T15:30')}
                                />
                                </div>
                                <div className={'flex flex-row'}> <TimePicker
                                    label="To"
                                    defaultValue={dayjs('2024-05-12T15:30')}
                                /></div>
                            </div>
                                <div className={'flex flex-row justify-between pt-16 gap-2'}>
                                    <button
                                        onClick={handleClose} className=" bg-Tropical-Lagoon text-white font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSubmit} className=" bg-Tropical-Lagoon text-white font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                                        Submit
                                    </button>
                            </div>


                        </div>
                    </Box>
                </Modal>
            </div>


        );
}

ScheduleInput.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen:PropTypes.func,

}