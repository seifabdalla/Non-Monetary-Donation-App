import PropTypes from "prop-types";

export default function DonationCards(props){
    return (
        <div
            className="w-64 h-80 bg-slate-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-teal-400 transition-shadow">
            <div className="w-52 h-40 bg-teal-300 rounded-2xl"></div>
            <div>
                <p className="font-extrabold">{props.title}</p>
                <p className="">{props.shortDescription}</p>
            </div>
            <p className="bg-Tropical-Lagoon text-neutral-800 p-1 px-2 rounded-xl">#{props.category}</p>
            <button
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
}