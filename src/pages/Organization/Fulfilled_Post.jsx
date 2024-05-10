import MainHeader from "../../components/MainHeader.jsx";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import {useSelector} from "react-redux";
import { mdiPlusCircle,mdiAccountCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import Post from "../../components/Post.jsx";
import {Active} from "../../model/Posts/Pending.js";
import DonationRequestCard from "../../components/DonationRequestCard.jsx";
import {Fulfilled} from "../../model/Posts/Fulfilled.js";
import {donors} from "../../model/Posts/Donors.js";



export default function Fulfilled_Post() {
    const [isOpenPost, setOpenPost] = useState(false);
    const {profileType, userID} = useParams();
    const [User, setUser] = useState(null);
    // const [Create, setCreate] = useState(false);
    const individualUsers = useSelector(state => state.IndividualUser.IndividualUsers);
    const organizationUsers = useSelector(state => state.OrganizationUser.OrganizationUsers);

    useEffect(() => {
        if (profileType === "donor") {
            setUser(individualUsers[userID - 1]);
        } else {
            setUser(organizationUsers[userID - 1]);
        }
    }, []);

    const openPost = () => {
        setOpenPost(true);
    }
    return (
        <>
            <div className={'flex flex-col justify-end h-screen items-center w-screen bg-teal-50'}>
                <MainHeader/>
                <div className={"flex flex-row h-full w-full overflow-y-auto"}>

                    <div className={'h-full w-5/6 flex flex-col items-center pt-9  py-5  m-auto'}>
                        <div className={' w-1/4 h-14 text-2xl  font-bold rounded-md text-center'}> Fulfilled Posts</div>
                        <div
                            className={' flex flex-row w-5/6 h-10 bg-teal-200 px-4 py-2 gap-80 items-start font-bold rounded-md text-center'}>
                            <h1>Category</h1>
                            <h1>Title</h1>
                        </div>


                        {
                            Active.map((post, index) => {
                                return (

                                    <div key={index} className="flex flex-row w-full justify-center items-center ">
                                        <DonationRequestCard post={post} isPending={false} donor={donors[index]}/>

                                    </div>
                                );
                        })

                        }

                    </div>
                </div>
            </div>

            <Post isOpen={isOpenPost} setOpen={setOpenPost} />
        </>


    )
        ;
}