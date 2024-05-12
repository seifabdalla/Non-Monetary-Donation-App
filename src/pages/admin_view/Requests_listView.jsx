import MainHeader from "../../components/MainHeader.jsx";
import {RegRequests} from "../../model/Admin/Submissions.js";
import DonorSubmissionsCard from "../../components/DonorSubmissionsCard.jsx";
import OrganizationSubmissionsCard from "../../components/OrganizationSubmissionsCard.jsx";
import {Tab,Tabs} from "@nextui-org/react";

export default function Requests_listView() {


    return (<div className={"bg-teal-50 w-screen min-h-screen"}>
            <MainHeader/>
        <div className={'h-full w-full flex flex-col items-center pt-9  pb-10 overflow-y-auto'}>
            <div className={' w-full h-14 text-2xl  font-bold rounded-md text-center'}>Registration Requests</div>

                        <div  className="flex w-3/4 flex-col justify-center items-center py-3">
                            <Tabs aria-label="Dynamic tabs" items={tabs} variant={"bordered"}
                                  classNames={{
                                      tabList: "gap-6 w-full p-0 bg-slate-200",
                                      cursor: "w-full bg-Deep-Sea-Emerald",
                                      tab: "max-w-fit px-2 h-12",
                                      tabContent: "text-slate-950 group-data-[selected=true]:text-slate-50"
                                  }}
                            >
                                {(item) => (
                                    <Tab key={item.id} title={item.title} className={"w-3/4"}>
                                        <div className={"flex flex-col items-center gap-3 w-full"}>
                                            {
                                                RegRequests.map((request) => {
                                                    return ((item.title === 'Organization'&&request.type==='organization') &&
                                                        <OrganizationSubmissionsCard request={request} key={request.id}/>) || (item.title === 'Donors'&&request.type==='donor' &&

                                                        <DonorSubmissionsCard request={request} key={request.id}/>)
                                                })
                                            }
                                        </div>
                                    </Tab>
                                )}
                            </Tabs>
                        </div>



        </div>
        </div>
    );
}
const tabs = [
    {
        id : 'organization',
        title: 'Organization',
    },
    {
        id : 'Donors',
        title: 'Donors',
    }
];
