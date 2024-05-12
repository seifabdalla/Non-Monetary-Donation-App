import PropTypes from "prop-types";

export default function OrganizationCard(props){
    return (
        <div
            className="w-72 h-96 bg-slate-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-center text-center justify-evenly gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-teal-400 transition-shadow">
            <img className="w-52 h-40 rounded-2xl" src={props.organizationDetails.imageUrl} alt={props.organizationDetails.name}/>
            <div className={"flex flex-col gap-0.5"}>
                <h2 className="font-extrabold text-2xl">{props.organizationDetails.name}</h2>
            </div>
            <button
                className="bg-Deep-Sea-Emerald font-extrabold p-2 px-6 rounded-xl hover:bg-teal-900 transition-colors"
                onClick={() => props.seeMorefunction(props.organizationDetails)}
            >
                See more
            </button>
        </div>
    );
}

OrganizationCard.propTypes = {
    organizationDetails: PropTypes.object.isRequired,
    seeMorefunction: PropTypes.func.isRequired
}

