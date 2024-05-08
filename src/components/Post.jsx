import Modal from '@mui/material/Modal';
import PropTypes from "prop-types";
import ProfilePage from "../pages/dashboard-and-profile/ProfilePage.jsx";
import {Box} from "@mui/system";
import {useState} from "react";
import Icon from '@mdi/react';
import { mdiAttachment } from '@mdi/js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#F0FDFA',
    // border: '2px solid #03312e',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '24',
};

export default function Post(props){

    const handleClose = () => props.setOpen(false);
    const handleSubmit = () => {
        props.setOpen(false);
        withReactContent(Swal).fire({
        title: "Success",
        text: "New Post was created",
        icon: "success"
    });}
    const [selectedValue, setSelectedValue] = useState('');
    const [details,setDetails] = useState("Enter Details here");

    const handleFocus = (event) => {
        if (event.target.value === 'Enter Details here') {
        setDetails('');}

    };

    const handleDetails = (event) => {
        setDetails(event.target.value);
    };

    const handleBlur = (event) => {
        if(event.target.value === ""){
        setDetails("Enter Details here");}
    };


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Modal
                open={props.isOpen}
                onClose={handleClose}
                aria-labelledby="profile-modal"
                aria-describedby="the-profile-page"
            >
                <Box sx={style}>
                    <div className={'flex flex-col text-black p-8 gap-4'} style={{width: '40rem', height: '30rem'}}>

                        <div className={'font-bold'}>Category</div>
                        <div>
                            <select value={selectedValue} onChange={handleChange}
                                    className={'rounded-md border-2 w-1/3 h-9 hover:border-black px-2'}>
                                <option value="">Select...</option>
                                <option value="option1">Toys</option>
                                <option value="option2">Food</option>
                                <option value="option3">Medical Supplies</option>
                                <option value="option4">Blood Donations</option>
                                <option value="option5">Teaching Posts</option>
                                <option value="option6">Medical Cases</option>
                                <option value="option7">Clothes</option>
                                <option value="option8">School Supplies</option>
                            </select>

                        </div>
                        <div className={'font-bold'}>Details</div>
                        <textarea
                            value={details}
                            onChange={handleDetails}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={'w-full h-1/2 bg-white rounded-md border-2 border-gray-200 p-2'}
                        />
                        <div className={'flex flex-row justify-between pt-2 gap-2'}>
                            <button
                                onClick={handleClose} className="w-1/6 bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                                Cancel
                            </button>
                            <div className={'flex flex-row justify-end gap-2 '}>
                                <button
                                    className="w-1/7 bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                                    <Icon path={mdiAttachment} size={1}/>
                                </button>
                                <button
                                    onClick={handleSubmit} className="w-full bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                                    Submit
                                </button>
                            </div>
                            </div>


                        </div>
                </Box>
            </Modal>
        </div>
);
}

Post.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen:PropTypes.func,
    // selectedValue: PropTypes.string,
    // setSelectedValue: PropTypes.func
}