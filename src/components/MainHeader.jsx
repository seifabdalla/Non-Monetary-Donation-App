import Icon from '@mdi/react';
import { mdiAccount,mdiBell ,mdiBellBadge  } from '@mdi/js';
import BackButton from "./BackButton.jsx";
import PropTypes from "prop-types";


export default function MainHeader(props){
    return (
        <div
            className="w-full flex flex-row bg-Mystic-Teal items-center justify-between px-6 pb-6 pt-2 border-b-2 border-Midnight-Pine text-MidnightPine">
            <div className={"flex items-center justify-center gap-2"}>

                {
                    (! props.isDashboard) && <BackButton />
                }
                <Icon path={mdiAccount} size={2} color={"#000000"} />
            </div>
            <div className={"flex items-center justify-center"}>
                <h1 className="font-logo text-5xl text-opacity-100">
                    <span>E</span>
                    غ<span className={"-ml-1"}>ATHA</span></h1>
            </div>
                <Icon path={mdiBell } size={2} color={"#000000"} />
        </div>
    );
}


MainHeader.propTypes = {
    isDashboard : PropTypes.bool
}

MainHeader.propTypes.defaultProps = {
    isDashboard : false
}