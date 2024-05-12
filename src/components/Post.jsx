import Modal from '@mui/material/Modal';
import PropTypes from "prop-types";
import {Box} from "@mui/system";
import {useEffect, useState} from "react";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import StyledAttachment from "./styled-inputs/StyledAttachment.jsx";


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
        icon: "success",
            confirmButtonColor: "#00B9AE"

        });}

    const handleConfirm = () => {
        props.setOpen(false);
        withReactContent(Swal).fire({
            title: "Success",
            text: "Post updated successfully",
            icon: "success",
            confirmButtonColor: "#00B9AE"

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


    const [fields, setFields] = useState([]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        switch (event.target.value) {
            case 'option1': // Toys
                setFields(['Age', 'Gender','Type','Amount']);
                break;
            case 'option4':
                setFields(['Blood Type','Amount']);
                break;
            case 'option2':
                setFields(['Age', 'Gender', 'Size','Season','Amount']);
                break;
            case 'option3':
                setFields(['Type','Amount']);
                break;
            case 'option5':
                setFields(['Subject','Amount']);
                break;
            case 'option6':
                setFields(['Case','Amount']);
                break;
            case 'option7':
                setFields(['Type','Amount']);
                break;
            case 'option8':
                setFields(['Type','Amount']);
                break;
            // Add cases for other categories
            default:
                setFields([]);
        }
    };

    useEffect(() => {
        if(!props.isPost){
        switch (props.category) {
            case 'Toys': // Toys
                setFields(['Age', 'Gender','Type','Amount']);
                break;
            case 'Blood Donations':
                setFields(['Blood Type','Amount']);
                break;
            case 'Clothes':
                setFields(['Age', 'Gender', 'Size','Season','Amount']);
                break;
            case 'Medical Supplies':
                setFields(['Type','Amount']);
                break;
            case 'Teaching Posts':
                setFields(['Subject','Amount']);
                break;
            case 'Medical Cases':
                setFields(['Case','Amount']);
                break;
            case 'School Supplies':
                setFields(['Type','Amount']);
                break;
            // Add cases for other categories
            default:
                setFields([]);
        }}
    }, [props.isPost]);



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

                        <div className={'font-bold flex flex-row gap-52'}>
                            <div>Category</div>
                            {!props.isPost && <div>Title</div>}
                        </div>
                        { props.isPost && <div>
                            <select value={selectedValue} onChange={handleChange}
                                    className={'rounded-md border-2 w-1/3 h-9 hover:border-black px-2'}>
                                <option value="">Select...</option>
                                <option value="option1">Toys</option>
                                <option value="option2">Clothes</option>
                                <option value="option3">Medical Supplies</option>
                                <option value="option4">Blood Donations</option>
                                <option value="option5">Teaching Posts</option>
                                <option value="option6">Medical Cases</option>
                                <option value="option7">School Supplies</option>
                                <option value="option8">Food</option>
                            </select>
                        </div>}






                        { !props.isPost &&
                            <div className={'h-full flex flex-row justify-between gap-4'}>
                            <textarea
                                disabled={true}
                                value={props.category}
                                className={'w-1/5 h-4/6 flex flex-grow bg-white rounded-md border-2 border-gray-200 p-2 overflow-hidden'}
                                style={{resize: "none"}}
                            ></textarea>
                                <textarea
                                    className={'w-1/4 h-4/6 flex flex-grow bg-white rounded-md border-2 border-gray-200 p-2 overflow-hidden'}
                                    style={{resize: "none"}}
                                ></textarea>

                            </div>


                        }
                        <div className={'bg-teal-50 flex flex-row gap-8 pt-6'}>
                            {fields.map((field, index) => (
                                <div key={index}>
                                    <div className={'font-bold pb-2'}>{field}</div>
                                    <textarea

                                        onFocus={handleFocus}
                                            onBlur={handleBlur}
                                            className={'w-full h-11 bg-white rounded-md border-2 border-gray-200 px-2 pt-2'}
                                            style={{resize:"none"}}
                                        />
                                    </div>
                                ))}


                        </div>
                        <div className={'font-bold'}>Extra Details</div>
                        <textarea
                            value={details}
                            onChange={handleDetails}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={'w-full h-full bg-white rounded-md border-2 border-gray-200 p-2'}
                            style={{resize:"none"}}
                        />
                        <div className={'flex flex-row justify-between pt-2 gap-15'}>
                            <button
                                onClick={handleClose} className="w-1/6 bg-Tropical-Lagoon text-white font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                                Cancel
                            </button>
                            {props.isPost && <div className={'flex flex-row justify-evenly h-10 gap-4'}>
                                <StyledAttachment/>
                                <button
                                    onClick={handleSubmit} className="flex items-center justify-center bg-Tropical-Lagoon text-white font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                                    Submit
                                </button>
                            </div>}
                            {!props.isPost && <div className={'flex flex-row justify-evenly h-10 gap-4'}>
                                <StyledAttachment/>
                                <button
                                    onClick={handleConfirm} className="flex items-center justify-center bg-Tropical-Lagoon text-white font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                                    Confirm
                                </button>
                            </div>

                            }
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
    isPost :PropTypes.bool.isRequired,
    category: PropTypes.string,
    title:PropTypes.string
    // selectedValue: PropTypes.string,
    // setSelectedValue: PropTypes.func
}