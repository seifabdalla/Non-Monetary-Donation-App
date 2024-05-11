import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';
import {StyledInput} from "../../components/styled-inputs/StyledInput.jsx";
import CautionCard from "../../components/CautionCard.jsx";
import MapStatic from "../../components/Mapstatic.jsx";
import MapDynamic from "../../components/MapDynamics.jsx";

export default function ProfilePage(){

    const navigate = useNavigate();

    const handleLogout = () => navigate("/");

    const {profileType , userID} = useParams();
    const [User,setUser] = useState(null);
    const [Edit,setEdit] =useState(false);
    const individualUsers = useSelector(state => state.IndividualUser.IndividualUsers);
    const organizationUsers = useSelector(state => state.OrganizationUser.OrganizationUsers);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [organizationType, setOrganizationType] = useState("");
    const [address, setAddress] = useState("");
    const [area, setArea] = useState("");
    const [governorate, setGovernorate] = useState("");
    const [clinicArea, setClinicArea] = useState("");
    const [clinicAddress, setClinicAddress] = useState("");
    const [clinicGovernorate, setClinicGovernorate] = useState("");
    const [numOfProBono, setNumOfProBono] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [subjects, setSubjects] = useState("");
    const [numOfProBonoClasses, setNumOfProBonoClasses] = useState("");
    const [numOfStudents, setNumOfStudents] = useState("");

    // const [individualType, setIndividualType] = useState("");

    useEffect(() => {
        if(User){
            setFirstName(User.firstName);
            setLastName(User.lastName);
            setEmail(User.email);
            setPassword(User.password);
            setContactNumber(User.contactNumber);
            setGovernorate(User.governorate);
            setArea(User.area);
            if(profileType==="organization"){
                setAddress(User.organizationAddress);
                setOrganizationName(User.organizationName);
                setOrganizationType(User.organizationType);
            }
            else {
                setAddress(User.address);
                if(profileType==="donor" && User.type==="Doctor"){
                    setClinicArea(User.clinicArea);
                    setClinicAddress(User.clinicAddress);
                    setClinicGovernorate(User.clinicGovernorate);
                    setNumOfProBono(User.numOfCases);
                    setSpeciality(User.speciality);

                }
                else if(profileType==="donor" && User.type==="Teacher"){
                    setSubjects(User.subjects);
                    setNumOfProBonoClasses(User.privateClasses);
                    setNumOfStudents(User.classes);
                }
            }


        }


    }, [User]);
    useEffect(() => {

        if (profileType === "donor"){
            setUser(individualUsers[userID-1]);

        } else {
            setUser(organizationUsers[userID-1]);
        }
    }, [userID,profileType]);
    return (
        <>
            {User === null && <div>Loading ...</div>}
            {User != null && Edit &&
                <div className="flex justify-center h-[640px] overflow-y-auto overflow-hidden text-slate-100">

                    <div
                        className=" w-full p-7 flex-col justify-between  ">

                        <Avatar sx={{width: 100, height: 100}}>
                            <div className="text-6xl ">{User.firstName.charAt(0) + "" + User.lastName.charAt(0)}</div>
                        </Avatar>

                        <StyledInput className="text-2xl " type="text" text="First Name" id="firstName"
                                     value={firstName}
                                     onChange={setFirstName}/>
                        <StyledInput className="text-2xl " type="text" text="Last Name" id="LastName" value={lastName}
                                     onChange={setLastName}/>

                        <StyledInput className="text-2xl " type="text" text="Email" id="Email" value={email}
                                     onChange={setEmail}/>
                        <StyledInput className="text-2xl " type="text" text="Password" id="Password" value={password}
                                     onChange={setPassword}/>


                        <StyledInput className="text-2xl " type="text" text="Contact Number" id="Contact Number"
                                     value={contactNumber}
                                     onChange={setContactNumber}/>
                        {profileType === "organization" &&
                            <StyledInput className="text-2xl " type="text" text="Organization Name"
                                         id="OrganizationName" value={organizationName}
                                         onChange={setOrganizationName}/>}
                        {profileType === "organization" &&
                            <StyledInput className="text-2xl " type="text" text="Organization Type"
                                         id="OrganizationType" value={organizationType}
                                         onChange={setOrganizationType}/>}
                        <StyledInput className="text-2xl " type="text" text="Governorate" id="Governorate"
                                     value={governorate}
                                     onChange={setGovernorate}/>


                        <StyledInput className="text-2xl " type="text" text="Area" id="Area" value={area}
                                     onChange={setArea}/>
                        {profileType === "donor" &&
                            <StyledInput className="text-2xl " type="text" text="Address" id="Address" value={address}
                                         onChange={setAddress}/>}
                        {profileType === "organization" &&
                            <StyledInput className="text-2xl " type="text" text="Organization Address" id="Address"
                                         value={address} onChange={setAddress}/>}
                        {profileType === "donor" && User.type === "Doctor" && <> <StyledInput className="text-2xl "
                                                                                                   type="text"
                                                                                                   text="Clinic Area"
                                                                                                   id="ClinicArea" onChange={setClinicArea}
                                                                                                   value={clinicArea}/>
                            <StyledInput className="text-2xl " type="text" text="Clinic Address" id="ClinicAddress" onChange={setClinicAddress}
                                         value={clinicAddress}/> <StyledInput className="text-2xl " type="text"
                                                                 text="Clinic Governorate" id="ClinicGovernorate" onChange={setClinicGovernorate}
                                                                 value={clinicGovernorate}/> <StyledInput className="text-2xl "
                                                                                         type="text"
                                                                                         text="Number of pro-bono cases"
                                                                                         id="NumOfProBono"
                                                                                         onChange={setNumOfProBono}
                                                                                         value={numOfProBono}/>
                                                                                        <StyledInput className="text-2xl "
                                                                                                 type="text"
                                                                                                 text="Speciality"
                                                                                                 id="Speciality"
                                                                                                    onChange={setSpeciality}
                                                                                                 value={speciality}/></>}
                        {profileType === "donor" && User.type === "Teacher" && <> <StyledInput
                            className="text-2xl " type="text" text="Subjects" id="Subjects" value={subjects} onChange={setSubjects}/> <StyledInput
                            className="text-2xl " type="text" text="Number of Private Classes" id="NumOfProBonoClasses" onChange={setNumOfProBonoClasses}
                            value={numOfProBonoClasses}/> <StyledInput className="text-2xl " type="text" text="Number Of Students"
                                                    id="NumOfStudents" value={numOfStudents} onChange={setNumOfStudents}/></>}
                        {
                            profileType === "donor" && User.type === "Doctor" && !User.workingInfo && <div className={'pt-4'}>
                                Clinic Location
                                <MapDynamic></MapDynamic>
                            </div>
                        }
                        {
                            profileType === "organization" && !User.workingInfo && <div className={'pt-4'}>
                                Organization Location
                                <MapDynamic></MapDynamic>
                            </div>
                        }
                        <div className={'flex flex-row pt-7 pb-4 gap-5'}>
                            <button
                                className="w-full bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                                onClick={() => setEdit(false)}>
                                Cancel
                            </button>
                            <button
                                className="w-full bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                                onClick={() => setEdit(false)}>
                                Save
                            </button>
                        </div>
                    </div>

                </div>}
            {
                User != null && !Edit && <div className="flex justify-center  text-slate-100">

                    <div
                        className="w-full p-7 flex flex-col items-center h-[640px] overflow-y-auto overflow-hidden">
                        {profileType === "donor" && User.type === "Doctor" && !User.workingInfo && <CautionCard
                            message={"You need to edit details to add your clinic,speciality and number of pro-bono Cases"}/>
                        }
                        {
                            profileType === "donor" && User.type === "Teacher" && !User.workingInfo && <CautionCard
                                message={"You need to edit details to add your subjects ,number of pro-Bono classes and tutorials you give"}/>
                        }
                        <div className="flex flex-row justify-evenly w-full m-8">
                            <Avatar sx={{width: 100, height: 100}}>
                                <div className="text-6xl ">{User.firstName.charAt(0) + "" + User.lastName.charAt(0)}</div>
                            </Avatar>
                            <button onClick={() => setEdit(true)}>
                                <Icon path={mdiPencil} size={2} color={"#FFFFFF"}/>
                            </button>
                        </div>
                        <div className=" flex flex-col  gap-8 p-2  h-auto ">

                            <div className="text-2xl">FirstName: {User.firstName}</div>
                            <div className="text-2xl">LastName: {User.lastName}</div>



                            <div className="text-2xl">Email: {User.email}</div>
                            <div className="text-2xl">Password: {User.password}</div>


                            <div className="text-2xl ">Number: {User.contactNumber}</div>



                            {profileType!=="organization"&& <div className="flex flex-col  gap-8 h-auto ">
                                <div className="text-2xl">Area: {User.area}</div>
                                <div className="text-2xl">Address: {User.address}</div>
                                <div className="text-2xl ">Governorate: {User.governorate}</div>
                            </div>}
                            {profileType==="donor" && User.type==="Doctor" && (User.clinicAddress!=null|| User.numOfCases!=null || User.clinicArea!=null || User.clinicGovernorate!=null) &&<div className="flex flex-col  gap-8 h-auto ">
                                <div className="text-2xl">Clinic Address: {User.clinicAddress}</div>
                                <div className="text-2xl">Clinic Area: {User.clinicArea}</div>
                                <div className="text-2xl ">Clinic Governorate: {User.clinicGovernorate}</div>
                                <div className="text-2xl">Speciality: {User.speciality}</div>
                                <div className="text-2xl ">Number of Pro-Bono Cases: {User.numOfCases}</div>
                            </div>}
                            {profileType==="donor" &&
                                User.type==="Teacher" && (User.subjects!=null || User.privateClasses!=null || User.classes!=null) && <div className="flex flex-col  gap-8 h-auto ">
                                    <div className="text-2xl">Subjects: {User.subjects}</div>
                                    <div className="text-2xl">Private Classes: {User.privateClasses}</div>
                                    <div className="text-2xl ">Classes: {User.classes}</div>
                                </div> }
                            {profileType==="organization" &&(User.organizationName!=null || User.organizationType!=null || User.organizationArea!=null ||User.organizationAddress!=null  || User.OrganizationGovernorate!=null) && <div className="flex flex-col  gap-8 h-auto ">
                                <div className="text-2xl">Organization Name: {User.organizationName}</div>
                                <div className="text-2xl">Organization Type: {User.organizationType}</div>
                                <div className="text-2xl ">Organization Address: {User.address}</div>
                                <div className="text-2xl">Organization Area: {User.area}</div>
                                <div className="text-2xl ">Organization Governorate: {User.governorate}</div>

                            </div>}
                            {
                                profileType === "donor" && User.type === "Doctor" && User.workingInfo && <div className={'pt-4'}>
                                    Clinic Location
                                    <MapStatic location={User.location}></MapStatic>
                                </div>
                            }
                            {
                                profileType === "organization" && User.workingInfo && <div className={'pt-4'}>
                                    <div className={'text-2xl'}>Organization Location</div>
                                    <MapStatic location={User.location}></MapStatic>
                                </div>
                            }


                        </div>

                        {
                            (! Edit) &&
                            <div className={"w-full flex items-center justify-center mt-2"}>
                                <button className={"text-slate-100 bg-red-500 px-10 py-3 rounded-xl"} onClick={handleLogout}>
                                    Log Out
                                </button>
                            </div>

                        }
                    </div>
                </div>


            }
        </>
    );
}