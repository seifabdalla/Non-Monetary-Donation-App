import {useState} from "react";
import {StyledInput} from "../components/StyledInput.jsx";
import {Link} from "react-router-dom";
import StyledSelectInput from "../components/StyledSelectInput.jsx";

export default function IndividualRegistration (){

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [Address, setAddress] = useState("");
    const [area, setArea] = useState("");
    const [governorate, setGovernorate] = useState("");

    function handleGender(e){
        setGender(e.target.textContent);
        console.log(e.target.textContent);
    }

    return (
        <div className="w-3/4 h-full flex flex-col justify-center items-center">
            <form className="w-full flex flex-col items-center justify-center gap-6 py-6 px-4">
                <h1 className="w-full text-5xl text-slate-200 font-logo text-center">EغATHA</h1>
                <div className={"flex flex-col items-center justify-center overflow-y-auto"}>
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
                    <div className={"mt-4"}>
                        <StyledSelectInput title={"Gender"} options={["Male","Female"]} onChange={handleGender} />
                    </div>
                </div>
                <button type="submit"
                        className="w-full bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                    Register
                </button>
            </form>
            <p className="text-slate-200">Already have an Account? <Link to="/login"
                                                                            className="text-Tropical-Lagoon hover:underline">Login</Link>
            </p>
        </div>
    );
}