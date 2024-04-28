import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import {ProfileCard} from '../../components/ProfileCard.jsx';
import individualUserSlice from "../../redux/IndividualUserSlice.js";

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
                User != null && <div className="flex justify-center items-center min-h-screen">

                    <div
                        className=" w-1/2 bg-slate-50  border-Tropical-Lagoon hover:shadow-Tropical-Lagoon border-2 rounded-3xl p-7
                           flex-col gap-8 justify-between hover:bg-slate-100
                            transition-shadow ">
                        <Avatar>{User.firstName.charAt(0) + "" + User.lastName.charAt(0)}</Avatar>

                        <div className={'flex-row'}><h1>Number: {User.contactNumber}</h1>
                            <h1>Password: {User.password}</h1></div>
                        <h1>Address: {User.address}</h1>
                        <h1>Area: {User.area}</h1>
                        <h1>Governorate: {User.governorate}</h1>
                    </div>
                </div>
            }
        </>
    );
}