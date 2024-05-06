import PropTypes from "prop-types";

export default function TargetProgressBar(props){
    const percentage = Math.round((props.current / props.target) * 100);

    return (
        <div className={'w-full'}>
            <div
                className={`inline-block mb-2 ms-[calc(${percentage}%-1.25rem)] py-1 px-1.5 bg-teal-50 border border-teal-400 text-sm font-medium text-teal-600 rounded-lg`}>
                Fulfilled Requests: {percentage}%
            </div>
            <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden"
                 role="progressbar">
                <div
                    className="flex flex-col justify-center rounded-full overflow-hidden bg-Deep-Sea-Emerald text-xs text-white text-center whitespace-nowrap transition duration-500"
                    style={{width : `${percentage}%`}}></div>
            </div>
        </div>
    );
}

TargetProgressBar.propTypes = {
    target: PropTypes.number,
    current: PropTypes.number
}