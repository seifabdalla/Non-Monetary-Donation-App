import "../../assets/styles/time-picker-animation.css";
import {useState} from "react"; // Import CSS file for custom styles

const StyledTimePicker = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [lowerBound, setLowerBound] = useState("09:00");
    const [upperBound, setUpperBound] = useState("20:00");
    const [choseTime, setChoseTime] = useState(false);

    const handleLowerBoundChange = (event) => {
        setLowerBound(event.target.value);
    }

    const handleUpperBoundChange = (event) => {
        setUpperBound(event.target.value);
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSaveTime = () => {
        setChoseTime(true);
        setIsDropdownOpen(false);
    }

    return (
        <div className="relative">
            <button
                id="dropdownTimepickerButton"
                data-dropdown-toggle="dropdownTimepicker"
                className="text-slate-950 bg-white shadow-lg hover:bg-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
                onClick={toggleDropdown}
            >
                {(choseTime) ? `${lowerBound} - ${upperBound}` : 'Select Preferred Pickup Time'}
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            <div
                id="dropdownTimepicker"
                className={`z-10 dropdown-menu ${isDropdownOpen ? 'open' : ''} bg-slate-100 text-slate-950 rounded-lg shadow-md w-auto mt-3 p-3`}
            >
                <div className="max-w-[16rem] mx-auto grid grid-cols-2 gap-4 mb-2">
                    <div>
                        <label htmlFor="start-time" className="block mb-2 text-sm font-medium">
                            Start time:
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                type="time"
                                className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                min="09:00"
                                max="18:00"
                                defaultValue="09:00"
                                value={lowerBound}
                                onChange={handleLowerBoundChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="end-time" className="block mb-2 text-sm font-medium">
                            End time:
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                type="time"
                                className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                min={lowerBound+2}
                                max="20:00"
                                defaultValue="20:00"
                                value={upperBound}

                                onChange={handleUpperBoundChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type="button" className="py-1 px-2 text-slate-100 bg-Mystic-Teal rounded-lg" onClick={handleSaveTime}>
                    Save time
                </button>
            </div>
        </div>
    );
};

export default StyledTimePicker;
