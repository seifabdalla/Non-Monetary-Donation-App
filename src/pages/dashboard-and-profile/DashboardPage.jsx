import MainHeader from "../../components/MainHeader.jsx";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import DashbordCard from "../../components/DashbordCard.jsx";
import { mdiHandCoin ,mdiDomain,mdiHistory   } from '@mdi/js';
import CautionCard from "../../components/CautionCard.jsx";
import {useState,useEffect} from "react";

export default function DashboardPage(){

    const {profileType , userID} = useParams();

    const [User,setUser] = useState(null);

    const individualUsers = useSelector(state => state.IndividualUser.IndividualUsers);
    const organizationUsers = useSelector(state => state.OrganizationUser.OrganizationUsers);


    useEffect(() => {
        if (profileType === "donor"){
            setUser(individualUsers[userID-1]);
        } else {
            setUser(organizationUsers[userID-1]);
        }
    }, []);


    return (
        <div className="w-screen h-screen bg-slate-200 flex flex-col gap-20 items-center justify-start pt-0 overflow-x-hidden">
            <MainHeader isDashboard={true}/>
            <div className={"w-full flex flex-col items-center gap-12"}>
                {
                    (User && profileType === "individual" && (User.type === "Teacher" || User.type === "Doctor") && !User.workingInfo) && <CautionCard message={"You need to Add more data"} />
                }
                <div className={"w-full flex flex-row flex-wrap items-center justify-around"}>
                    {
                        donorCardData.map(
                            (card, index) => {
                                return (
                                    <div key={index}>
                                        {console.log(card.linkTo)}
                                        <DashbordCard title={card.title} icon={card.icon} accentColor={card.color} goTo={card.linkTo+userID}/>
                                    </div>
                                );
                            }
                        )
                    }
                </div>
            </div>

        </div>
    );
}


const donorCardData = [
    {
        title: "View Requests",
        icon: mdiHandCoin,
        linkTo: "/donor/view-requests/"
    },
    {
        title: "View Organizations",
        icon: mdiDomain,
        linkTo: "donor/view-organizations"
    },
    {
        title: "Donation History",
        icon: mdiHistory,
        linkTo: "donor/view-requests"
    }
]