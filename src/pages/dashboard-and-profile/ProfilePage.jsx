import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import {ProfileCard} from '../../components/ProfileCard.jsx';
import individualUserSlice from "../../redux/IndividualUserSlice.js";
import {StyledInput} from "../../components/StyledInput.jsx";

export default function ProfilePage(){
    const {profileType , userID} = useParams();
    const [User,setUser] = useState(null);
    const individualUsers = useSelector(state => state.IndividualUser.IndividualUsers);
    const organizationUsers = useSelector(state => state.OrganizationUser.OrganizationUsers);

    useEffect(() => {

        if (profileType === "individual"){
            setUser(individualUsers[userID-1]);
        } else {
            setUser(organizationUsers[userID-1]);
        }
    }, [userID,profileType]);

    return (
        <>
            {User === null && <div>Loading ...</div>}
            {
                User != null && <div className="flex justify-center   text-slate-100">

                    <div
                        className=" w-full h-full   bg-Midnight-Pine border-Tropical-Lagoon hover:shadow-Tropical-Lagoon border-2 rounded-3xl p-7
                           flex-col gap-8 justify-between
                            transition-shadow ">
                        <Avatar sx={{width: 100, height: 100}}>
                            <div className="text-6xl ">{User.firstName.charAt(0) + "" + User.lastName.charAt(0)}</div>
                        </Avatar>
                        <div className={' flex flex-row justify-between m-2'}>
                            <div className="text-2xl">FirstName: {User.firstName}</div>
                            <div className="text-2xl">LastName: {User.lastName}</div>
                        </div>

                        <div className={' flex flex-row justify-between m-2 '}>
                            <div className="text-2xl">Email: {User.email}</div>
                            <div className="text-2xl">Password: {User.password}</div>
                        </div>
                        <div className={' flex flex-row justify-between m-2'}>
                            <div className="text-2xl ">Number: {User.contactNumber}</div>
                            <div className="text-2xl ">Governorate: {User.governorate}</div>
                        </div>
                        <div className={' flex flex-row justify-between m-2'}>
                            <div className="text-2xl">Area: {User.area}</div>
                            <div className="text-2xl">Address: {User.address}</div>
                        </div>

                    </div>
                </div>
            }
        </>
    );
}