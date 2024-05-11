import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications.js";
import {useState} from "react";
import Icon from "@mdi/react";
import { mdiCloseCircleOutline} from "@mdi/js";
import NotificationsElement from "./NotificationsElement.jsx";
import {useParams} from "react-router-dom";
import "../assets/styles/shake-animation.css"

export default function NotificationsPanel() {
    const {profileType} = useParams();
    const [isOpen, setOpen] = useState(false);
    return (
        <Popover placement={"top"} onOpenChange={setOpen} isOpen={isOpen}>
            <PopoverTrigger>
                <Badge badgeContent={3} color="error" className={"cursor-pointer shake-on-hover"}>
                    <NotificationsIcon color={"inherit"} fontSize={'large'}/>
                </Badge>
            </PopoverTrigger>
            <PopoverContent>
                {content(setOpen,profileType)}
            </PopoverContent>
        </Popover>
    );
}


function content(setOpen,profileType) {
    return (
        <div className="px-1 py-2">
            <div className={"flex flex-row items-center justify-center gap-5 mb-3"}>
                <h1 className={"text-lg font-semibold text-center"}>Notifications</h1>
                <button onClick={() => setOpen(false)}>
                    <Icon path={mdiCloseCircleOutline} size={1} color={"#000000"}/>
                </button>
            </div>
            <div className={"flex flex-col gap-2"}>
                {   profileType != null && notificationsDummyData[profileType] && notificationsDummyData[profileType].length !== 0 &&
                    notificationsDummyData[profileType].map((notification, index) => {
                        return (
                            <NotificationsElement key={index} text={notification}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

const notificationsDummyData = {
    donor: [
        "Request 'Donating Toys to Resala' is fulfilled and the Delivery pickup is set to next Monday 2:30 pm",
        "Request 'Donating Clothes to Masr Al Kheir' is fulfilled and the Delivery pickup is set to Tomorrow 6:00 pm",
        "Request 'Teaching Post' is fulfilled, We are waiting for you on the 14th of March"
    ],
    admin : [
        "New Donor Registered as a Doctor, Waiting your Validation",
        "2 Organizations registered and waiting your Validation",
        "it's been 40 days since you last changed your password, Don't forget to change it!"
    ],
}
