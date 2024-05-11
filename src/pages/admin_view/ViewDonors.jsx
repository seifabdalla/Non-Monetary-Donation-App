import MainHeader from "../../components/MainHeader.jsx";
import {useSelector} from "react-redux";
import DonorInfo from "../../components/DonorInfo.jsx";

export  default  function ViewDonors(){
    const individualUsers = useSelector(state => state.IndividualUser.IndividualUsers);
    return (
        <><div className={"bg-teal-50 w-screen min-h-screen"}>
            <MainHeader/>
            <div className={'h-full w-full flex flex-col items-center pt-9  pb-10 overflow-y-auto'}>
                <div className={' w-full h-14 text-2xl  font-bold rounded-md text-center'}>Donors</div>
                <div
                    className={' flex flex-row w-3/4 h-10 bg-teal-200 px-4 py-2 gap-80 items-start font-bold rounded-md text-center'}>
                    <h1>Donor Name</h1>
                    <h1>Details</h1>
                </div>
                {individualUsers.map((user, index) => {
                    return (
                        <>
                            <div key={index} className="flex w-3/4 flex-col justify-center items-center py-3">
                                <DonorInfo donor={user}/>
                            </div>
                        </>
                    );
                }
                )
            }

        </div>
        </div>
        </>
    );
}