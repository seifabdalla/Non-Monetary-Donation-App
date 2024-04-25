import AfricanSchool from "../assets/images/school-Africa.jpg";
import {useState} from "react";
import {StyledSelect} from "../components/StyledSelect.jsx";




export function RegisterPage(){

    const [registerType, setRegisterType] = useState("");

    const handleRegisterTypeChange = (event) => {
        setRegisterType(event.target.id);
    };

    console.log(registerType);

    return (
        <div className="w-screen h-screen bg-Midnight-Pine flex flex-row justify-between items-center">
            <div className="w-1/2 h-full">
                <img src={AfricanSchool} alt="School in Africa" className="w-full h-full object-cover"/>
            </div>
            <div className="w-1/2 text-slate-200 h-full flex flex-col justify-center items-center text-white">
                <StyledSelect title="Register As" options={["Individual", "Organization"]} onChange={handleRegisterTypeChange}/>
            </div>
        </div>
    );
}