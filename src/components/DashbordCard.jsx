import PropTypes from "prop-types";
import Icon from "@mdi/react";
import {useNavigate} from "react-router-dom";

export default function DashbordCard(props){
    const navigate = useNavigate();
    const goTo = () => {
        navigate(props.goTo);
    }

    return (
        <button className={`w-96 h-80 bg-slate-50 text-Tropical-Lagoon border-Tropical-Lagoon hover:shadow-Tropical-Lagoon border-2 rounded-3xl p-4 flex flex-col 
        items-center justify-evenly gap-3 hover:bg-slate-100 hover:shadow-md
        transition-shadow`} onClick={goTo}>
            <Icon path={props.icon} size={3} color={"#00b9ae"} />
            <h1 className={`text-2xl text-Tropical-Lagoon`}>{props.title}</h1>
        </button>
    );
}


DashbordCard.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired,
    goTo : PropTypes.string
}

