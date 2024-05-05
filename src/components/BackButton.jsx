import Icon from '@mdi/react';
import { mdiArrowLeftCircle } from '@mdi/js';
import {useNavigate} from "react-router-dom";

export default function BackButton(){
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={"cursor-pointer"} onClick={handleBack}>
            <Icon path={mdiArrowLeftCircle} size={2} />
        </div>
    );

}