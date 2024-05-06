import PropTypes from "prop-types";


export default function StyledQuantitySelect(props){
     // Initial quantity

    const increment = () => {
        props.setValue(prevValue => parseInt(prevValue) + 1);
    };

    const decrement = () => {
        if (props.value === 0) return;
        props.setValue(prevValue => parseInt(prevValue) - 1);
    };

    const handleChange = (e) => {
        props.setValue(e.target.value);
    }

    return (
        <div className={"flex flex-col gap-3"}>
            <h3 className={"text-xl font-normal"}>Quantity</h3>
            <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex items-center gap-x-1.5">
                    <button type="button" onClick={decrement}
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                           type="text" value={props.value} onChange={handleChange}/>
                    <button type="button" onClick={increment}
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
}

StyledQuantitySelect.propTypes = {
    value: PropTypes.number,
    setValue: PropTypes.func
}