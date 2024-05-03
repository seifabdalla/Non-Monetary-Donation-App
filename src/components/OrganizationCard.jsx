import PropTypes from "prop-types";

export default function OrganizationCard(props){
    return (
        <div
            className="w-72 h-96 bg-slate-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-center text-center justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-teal-400 transition-shadow">
            <img className="w-52 h-40 rounded-2xl" src={props.imgUrl} alt={props.title}/>
            <div className={"flex flex-col gap-0.5"}>
                <p className="font-extrabold">{props.title}</p>
            </div>
            <button
                className="bg-Deep-Sea-Emerald font-extrabold p-2 px-6 rounded-xl hover:bg-teal-900 transition-colors">See
                more
            </button>
        </div>
    );
}

OrganizationCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl : PropTypes.string.isRequired,
}

