import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications.js";
import {useState} from "react";
import Icon from "@mdi/react";
import { mdiCloseCircleOutline} from "@mdi/js";
import NotificationsElement from "./NotificationsElement.jsx";

export default function NotificationsPanel() {
    const [isOpen, setOpen] = useState(false);
    return (
        <Popover placement={"top"} onOpenChange={setOpen} isOpen={isOpen}>
            <PopoverTrigger>
                <Badge badgeContent={3} color="error" className={"cursor-pointer"}>
                    <NotificationsIcon color={"inherit"} fontSize={'large'}/>
                </Badge>
            </PopoverTrigger>
            <PopoverContent>
                {content(setOpen)}
            </PopoverContent>
        </Popover>
    );
}


function content(setOpen) {
    return (
        <div className="px-1 py-2">
            <div className={"flex flex-row items-center justify-center gap-5 mb-3"}>
                <h1 className={"text-lg font-semibold text-center"}>Notifications</h1>
                <button onClick={() => setOpen(false)}>
                    <Icon path={mdiCloseCircleOutline} size={1} color={"#000000"}/>
                </button>
            </div>
            <div className={"flex flex-col gap-2"}>
                <NotificationsElement text={"Request 'Donating Toys to Resala' is fulfilled and the Delivery pickup is set to next Monday 2:30 pm"}/>
                <NotificationsElement text={"Request 'Donating Clothes to Masr Al Kheir' is fulfilled and the Delivery pickup is set to Tomorrow 6:00 pm"}/>
                <NotificationsElement text={"Request 'Teaching Post' is fulfilled, We are waiting for you on the 14th of March"}/>
            </div>
        </div>
    );
}
