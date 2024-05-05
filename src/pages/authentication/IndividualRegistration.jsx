import {useEffect, useState} from "react";
import {StyledInput} from "../../components/styled-inputs/StyledInput.jsx";
import {Link, useNavigate} from "react-router-dom";
import StyledSelectInput from "../../components/styled-inputs/StyledSelectInput.jsx";
import { StyledFileInput } from "../../components/styled-inputs/StyledFileInput.jsx";
import {useDispatch} from "react-redux";
import {addIndUser} from "../../redux/IndividualUserSlice.js";
import CustomSnackBar from "../../components/CustomSnackBar.jsx";


export default function IndividualRegistration (){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [RegistrationDone,setRegistrationDone] = useState(false);
    const [SnackbarFinished,setSnackBarFinished] = useState(false);
    
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [Address, setAddress] = useState("");
    const [area, setArea] = useState("");
    const [governorate, setGovernorate] = useState("");
    const [individualType, setIndividualType] = useState("");
    function handleGender(e){
        setGender(e.target.textContent);
    }
    function handleIndividualType(e){
        setIndividualType(e.target.textContent);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: FirstName,
            lastName: LastName,
            Email: Email,
            Password: Password,
            gender : gender,
            ContactNumber: ContactNumber,
            Address: Address,
            area: area,
            governorate: governorate
        }
        dispatch(addIndUser({user: newUser}));
        setRegistrationDone(true);
    }

    useEffect(() => {
        if (SnackbarFinished === true){
            navigate('/login');
        }
    }, [SnackbarFinished, navigate]);


    return (
        <div className="w-full h-full flex flex-col justify-center items-center overflow-x-hidden pt-6 pb-2">
            <form className="w-full flex flex-col items-center justify-center gap-4 py-6 px-4" onSubmit={handleSubmit}>
                <h1 className="w-full text-5xl text-slate-200 font-logo text-center ">EغATHA</h1>
                <div className={"flex flex-col items-center justify-center px-4"}>
                    <div className={"flex flex-row gap-6"}>
                        <StyledInput type="text" text="First Name" id="FirstName" value={FirstName}
                                     onChange={setFirstName}/>
                        <StyledInput type="text" text="Last Name" id="LastName" value={LastName}
                                     onChange={setLastName}/>
                    </div>
                    <StyledInput type="email" text="Email" id="Email" value={Email} onChange={setEmail}/>
                    <StyledInput type="password" text="Password" id="Password" value={Password} onChange={setPassword}/>
                    <StyledInput type="text" text="Contact Number" id="ContactNumber" value={ContactNumber}
                                 onChange={setContactNumber}/>
                    <StyledInput type="text" text="Address" id="Address" value={Address} onChange={setAddress}/>
                    <div className={"flex flex-row gap-6"}>
                        <StyledInput type="text" text="Area" id="Area" value={area} onChange={setArea}/>
                        <StyledInput type="text" text="Governorate" id="Governorate" value={governorate}
                                     onChange={setGovernorate}/>
                    </div>
                    <div className={"mt-4 flex items-center justify-center w-1/2"}>
                        <StyledSelectInput title={"Gender"} options={["Male","Female"]} onChange={handleGender} />
                    </div>
                    <div className={"mt-4 flex items-center justify-center w-1/2"}>
                        <StyledSelectInput title={"Individual Type"} options={["Doctor","Teacher","Regular"]} onChange={handleIndividualType} />
                    </div>

                {(individualType === "Doctor" || individualType === "Teacher") ?
                    <div className="w-full mt-1 flex flex-col items-center justify-center">
                        <h4>Enter Legal Documents</h4>
                        <StyledFileInput/>
                    </div>
                    : null}
            </div>
                <button type="submit"
                        className="w-3/4 bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                    Register
                </button>
            </form>
            <p className="text-slate-200">Already have an Account? <Link to="/login"
                                                                            className="text-Tropical-Lagoon hover:underline">Login</Link>
            </p>
            {
                RegistrationDone && <CustomSnackBar message={"Registration Successful"} setIsFinished={setSnackBarFinished}  />
            }
        </div>
    );
}

