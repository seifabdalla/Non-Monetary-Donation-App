import MainHeader from "../../components/MainHeader.jsx";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import DashbordCard from "../../components/DashbordCard.jsx";
import { mdiHandCoin ,mdiDomain,mdiHistory,mdiClockOutline,mdiCheckAll,mdiSquareEditOutline   } from '@mdi/js';
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
                        cardData[profileType].map(
                            (card, index) => {
                                return (
                                    <div key={index}>
                                        <DashbordCard title={card.title} icon={card.icon} accentColor={card.color} goTo={card.linkTo} isDonor={card.isDonor} isOrg={card.isOrg}/>
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


const cardData = {
    donor : [
        {
            title: "View Requests",
            icon: mdiHandCoin,
            linkTo: "/view-requests",
            isDonor: true
        },
        {
            title: "View Organizations",
            icon: mdiDomain,
            linkTo: "/view-organizations",
            isDonor: true
        },
        {
            title: "Donation History",
            icon: mdiHistory,
            linkTo: "/view-requests",
            isDonor: true
        }
    ],
    // admin : [
    //     {
    //         title: "Registration Requests",
    //         icon: mdiApplicationCog,
    //         linkTo: "/registration-requests"
    //     },
    //     {
    //         title: "Donation requests",
    //         icon: mdiHandCoin,
    //         linkTo: "/view-organizations"
    //     },
    //     {
    //         title: "volunteer requests",
    //         icon: mdiAccountGroup,
    //         linkTo: "/view-requests"
    //     },
    //     {
    //         title: "view organizations",
    //         icon: mdiDomain,
    //         linkTo: "/view-requests"
    //
    //     },
    //     {
    //         title: "view Donors' Accounts",
    //         icon: mdiAccount,
    //         linkTo: "/view-requests"
    //     }
    // ],
    organization : [
        {
            title: "Schedule Drop-off",
            icon: mdiClockOutline,
            linkTo: "/schedule-drop-off",
            isOrg:true
        },
        {
            title: "Add/Update Posts",
            icon: mdiSquareEditOutline,
            linkTo: "/pending-posts",
            isOrg:true
        },
        {
            title: "Fulfilled Posts",
            icon: mdiCheckAll,
            linkTo: "/fulfilled-posts",
            isOrg: true
        }
]
}
