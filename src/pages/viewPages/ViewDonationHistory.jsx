import MainHeader from "../../components/MainHeader.jsx";
import {Tabs, Tab} from "@nextui-org/react";

export default function ViewDonationHistory(){
    return (
        <div className={"h-screen w-screen bg-teal-50 flex flex-col items-center justify-start overflow-hidden"}>
            <MainHeader />
            <div className={"flex flex-col flex-grow items-center py-4"}>

            </div>
        </div>
    )
}


const tabs = [
    {
        id : 'ongoing',
        title: 'Ongoing Requests',
    },
    {
        id : 'fulfilled',
        title: 'Fulfilled Requests',
    },
    {
        id : 'all',
        title: 'All Requests',
    }
];