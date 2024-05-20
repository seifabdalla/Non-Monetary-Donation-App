import Icon from "@mdi/react";
import {mdiAttachment} from "@mdi/js";
import {useRef} from "react";

export default function StyledAttachment(){
    const inputRef = useRef(null);
    const handleClick = () =>{
        inputRef.current.click();
    }
    return(
        <div>
            <input className={'hidden'} type={'file'} ref={inputRef} />
            <button
                className="w-1/7 bg-Tropical-Lagoon text-white font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                onClick={handleClick}>
                <Icon path={mdiAttachment} size={1}/>
            </button>
        </div>

    );
}