import {Card, CardBody} from "@nextui-org/react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import {mdiTrashCan} from "@mdi/js";

export default function NotificationsElement(props){
    return(
        <div className={"flex flex-row flex-grow items-center justify-center gap-1.5"}>
            <Card className={"flex-grow"}>
                <CardBody>
                    <p>{props.text}</p>
                </CardBody>
            </Card>
            <Icon path={mdiTrashCan} size={1} color={"#dc2626"}/>
        </div>

    );
}

NotificationsElement.propTypes = {
    text : PropTypes.string,
}