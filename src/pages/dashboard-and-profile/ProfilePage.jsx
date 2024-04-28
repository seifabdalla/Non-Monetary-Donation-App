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
        User != null && <div className=" flex flex-col justify-center self-center m-auto">
            <div className={`w-1/2 h-1/2 bg-slate-50    text-Tropical-Lagoon border-Tropical-Lagoon hover:shadow-Tropical-Lagoon border-2 rounded-3xl p-4 
        items-center justify-evenly gap-3 hover:bg-slate-100 
        transition-shadow`}>
                <Avatar>{User.firstName.charAt(0) + "" + User.lastName.charAt(0)}</Avatar>
            </div>
        </div>
    }
            </>
);
}