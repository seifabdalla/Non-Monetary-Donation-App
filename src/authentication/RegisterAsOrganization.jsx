import { StyledInput } from "../components/StyledInput";
import RefugeeShip from "../assets/images/refugee-ship.jpg";
import {useState} from "react";
import { Link } from "react-router-dom";

export function RegisterAsOrganization(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [organizationType, setOrganizationType] = useState("");
    const [organizationAddress, setOrganizationAddress] = useState("");
    const [area, setArea] = useState("");
    const [governorate, setGovernorate] = useState("");
    function handleGender(e){
        setGender(e.target.value);
    }

    return (

        <div className="w-screen h-screen bg-Midnight-Pine flex flex-row justify-between items-center">
            <div className="w-1/2 h-full">
                <img src={RefugeeShip} alt="Refugee Ship" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <form className="w-1/2 flex flex-col items-center gap-6 py-6 px-4">
                    <h1 className="w-full text-5xl text-slate-200 font-logo">EغATHA</h1>
                    <div className="overflow-y-scroll h-96 w-full px-6">
                    <StyledInput type="text" text="First Name" id="firstName" value={firstName} onChange={setFirstName}/>
<StyledInput type="text" text="Last Name" id="lastName" value={lastName} onChange={setLastName}/>
<div className="flex flex-row gap-4">
<label>
    <input type="radio" value="Male" 
    checked={gender==="Male"}
    onChange={handleGender}/>
    Male
</label>
<label>
    <input type="radio" value="Female" 
    checked={gender==="Female"}
    onChange={handleGender}/>
    Female
</label></div>
<StyledInput type="text" text="Email" id="email" value={email} onChange={setEmail}/>
<StyledInput type="password" text="Password" id="password" value={password} onChange={setPassword}/>
<StyledInput type="text" text="Contact Number" id="contactNumber" value={contactNumber} onChange={setContactNumber}/>
<StyledInput type="text" text="Organization Name" id="organizationName" value={organizationName} onChange={setOrganizationName}/>
<StyledInput type="text" text="Organization Type" id="organizationType" value={organizationType} onChange={setOrganizationType}/>
<StyledInput type="text" text="Organization Address" id="organizationAddress" value={organizationAddress} onChange={setOrganizationAddress}/>
<StyledInput type="text" text="Area" id="area" value={area} onChange={setArea}/>
<StyledInput type="text" text="Governorate" id="governorate" value={governorate} onChange={setGovernorate}/>
                        
                    </div>  
                    <button type="submit" className="w-full bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">Register</button>
                </form>
            </div>
        </div>
    );
}
