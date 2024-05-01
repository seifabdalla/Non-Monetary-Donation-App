import Modal from '@mui/material/Modal';
import {useState} from "react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import CautionCard from "../../components/CautionCard.jsx";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalPage(props){

    const handleOpen = () => props.setOpen(true);
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
                    <h1>Testing this Modal</h1>
                </Box>
            </Modal>
        </div>
    );
}

ModalPage.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    setOpen : PropTypes.func
}