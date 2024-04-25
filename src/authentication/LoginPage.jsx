import { StyledInput } from "../components/StyledInput";
import RefugeeShip from "../assets/images/refugee-ship.jpg";
import {useState} from "react";
import { Link } from "react-router-dom";

export function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-screen h-screen bg-Midnight-Pine flex flex-row justify-between items-center">
            <div className="w-1/2 h-full">
                <img src={RefugeeShip} alt="Refugee Ship" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <form className="w-1/3 flex flex-col items-center gap-6 py-6 px-4">
                    <h1 className="w-full text-5xl text-slate-200 font-logo">EغATHA</h1>
                    <div>
                        <StyledInput type="text" text="Email" id="email" value={email} onChange={setEmail}/>
                        <StyledInput type="password" text="Password" id="password" value={password} onChange={setPassword} />
                    </div>  
                    <button type="submit" className="w-full bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">Login</button>
                </form>
                <p className="text-slate-200">Don&apos;t have an account? <Link to="/register" className="text-Tropical-Lagoon hover:underline">Register</Link></p>
            </div>
        </div>
    );
}
