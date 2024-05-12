import MainHeader from "../../components/MainHeader.jsx";
import {Drops} from "../../model/Posts/Schedule_Drop-offs.js";
import ScheduleCard from "../../components/ScheduleCard.jsx";




export default function Drop_off(){

    return(
        <>
        <div className={'flex flex-col justify-end bg-teal-50 h-screen items-center w-screen'}>
            <MainHeader/>

            <div className={'font-bold text-2xl py-5 pt-12'}>Donation Drop-offs</div>
            <div className={'h-full w-5/6 flex flex-col items-center pt-9 py-5 m-auto'}>
                <div
                    className={' flex flex-row w-2/3 h-10 bg-teal-200 px-4 py-2 gap-80 items-start font-bold rounded-t text-center'}></div>

                {Drops.map((schedule, index) => {
                    return (

                        <div key={index} className="flex flex-row w-full justify-center items-center ">
                            <ScheduleCard schedule={schedule}/>

                        </div>

                    );
                })

                }
            </div>
        </div>

    </>
    );
}