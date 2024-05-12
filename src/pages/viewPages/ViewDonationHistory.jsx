import MainHeader from "../../components/MainHeader.jsx";
import {Tabs, Tab} from "@nextui-org/react";

export default function ViewDonationHistory(){
    return (
        <div className={"h-screen w-screen bg-teal-50 flex flex-col items-center justify-start overflow-hidden"}>
            <MainHeader />
            <div className={"flex flex-col flex-grow items-center py-4"}>
                <Tabs aria-label="Dynamic tabs" items={tabs} variant={"bordered"}
                classNames={{
                    tabList: "gap-6 w-full p-0 bg-slate-200",
                    cursor: "w-full bg-Deep-Sea-Emerald",
                    tab: "max-w-fit px-2 h-12",
                    tabContent: "text-slate-950 group-data-[selected=true]:text-slate-50"
                }}
                >
                    {(item) => (
                        <Tab key={item.id} title={item.title}>
                            <h1>{item.title}</h1>
                        </Tab>
                    )}
                </Tabs>
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