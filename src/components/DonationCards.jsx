import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

export default function DonationCards(props){

    const navigate = useNavigate();
    const handleSeeMore = () => {
        navigate("/requestdetails", {state: {cardObject: props.cardObject}});
    }

    return (
        <div
            className="w-72 h-96 bg-slate-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-center text-center justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-teal-400 transition-shadow">
            <img className="w-52 h-40 rounded-2xl" src={props.imgUrl}  alt={props.title}/>
            <div className={"flex flex-col gap-0.5"}>
                <p className="font-extrabold">{props.title}</p>
                <p className={"font-medium"}>Requested by: {props.requestedBy}</p>
                <p className="">{props.shortDescription}</p>
            </div>
            <p className="bg-Tropical-Lagoon text-neutral-800 p-1 px-2 rounded-xl">#{props.category}</p>
            <button
                onClick={handleSeeMore}
                className="bg-Deep-Sea-Emerald font-extrabold p-2 px-6 rounded-xl hover:bg-teal-900 transition-colors">See
                more
            </button>
        </div>
    );
}

DonationCards.propTypes = {
    title: PropTypes.string.isRequired,
    shortDescription : PropTypes.string.isRequired,
    category : PropTypes.string.isRequired,
    requestedBy : PropTypes.string.isRequired,
    imgUrl : PropTypes.string.isRequired,
    cardObject : PropTypes.object
}