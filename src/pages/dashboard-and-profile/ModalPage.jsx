import Modal from '@mui/material/Modal';
import PropTypes from "prop-types";
import ProfilePage from "./ProfilePage.jsx";
import {Box} from "@mui/system";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#042f2e',
    border: '2px solid #03312e',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '24',
};

export default function ModalPage(props){

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
                    <div style={{width: '36rem' , height : '40rem'}}>
                        <ProfilePage/>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

ModalPage.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    setOpen : PropTypes.func
}