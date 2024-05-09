import PropTypes from "prop-types";
import Avatar from '@mui/material/Avatar';
import {useSelector} from "react-redux";
import Organizations from "../model/organizations.js";

export default function VolunteerRequestCard(props) {
    const individualUsers = useSelector(state => state.IndividualUser.IndividualUsers);
    const userId= props.request.userId-1;
    const organizationId = props.request.organizationId-1;
    return (
    <div
        className={"bg-teal-700 flex flex-row justify-around items-start shadow-sm px-2 py-2 w-2/3 rounded-md"}>
        <div className={"flex flex-row gap-4 px-1 w-full justify-between text-slate-100"}>
        <div>

            <Avatar sx={{width: 75, height: 75}}>
            <div className="text-4xl ">{individualUsers[userId].firstName.charAt(0) + "" + individualUsers[userId].lastName.charAt(0) }</div>
        </Avatar></div>
        <div className="flex flex-col font-medium text-1xl">
            <div> Name: {individualUsers[userId].firstName + " " + individualUsers[userId].lastName}</div>
            <div> Organization: {Organizations[organizationId].name}</div>

        </div>
    </div>
    </div>
);


}
VolunteerRequestCard.propTypes = {
    request: PropTypes.object,
}