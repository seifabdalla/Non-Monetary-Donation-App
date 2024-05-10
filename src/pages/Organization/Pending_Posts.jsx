import MainHeader from "../../components/MainHeader.jsx";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import {useSelector} from "react-redux";
import { mdiPlusCircle } from '@mdi/js';
import Icon from '@mdi/react';
import Post from "../../components/Post.jsx";
import {Active} from "../../model/Posts/Pending.js";
import DonationRequestCard from "../../components/DonationRequestCard.jsx";
import {Fulfilled} from "../../model/Posts/Fulfilled.js";


export default function Pending_Posts() {
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
        <div className={'flex flex-col justify-end h-screen w-screen bg-teal-50'}>
            <MainHeader/>
            <div className={"flex flex-row h-full w-full overflow-y-hidden"}>
            <div className={"h-full w-1/5 px-10 py-5 flex flex-col gap-5 border-r-2 border-slate-950 overflow-y-auto"}>
                <div className={'flex flex-row justify-center pt-4'}>
                    <button
                        onClick={openPost} className=" flex flex-row justify-evenly w-40 bg-Tropical-Lagoon text-white font-bold rounded-md px-7 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">
                        <Icon path={mdiPlusCircle} size={1}/>
                        New Post

                    </button>
                </div>
            </div>
                <div className={'h-full w-4/5 flex flex-col items-center pt-9  pb-10 overflow-y-auto'}>
                    <div className={' w-1/3 h-14 text-2xl  font-bold rounded-md text-center'}> Pending Posts</div>
                    <div
                        className={' flex flex-row w-5/6 h-10 bg-teal-200 px-4 py-2 gap-80 items-start font-bold rounded-md text-center'}>
                        <h1>Category</h1>
                        <h1>Title</h1>
                    </div>
                    {
                        Fulfilled.map((post, index) => {
                            return (
                                <div key={index} className="flex flex-col w-full justify-center items-center ">
                                    <DonationRequestCard post={post} isPending={true}/>

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