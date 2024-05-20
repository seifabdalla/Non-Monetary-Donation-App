import {useLocation, useNavigate,useParams} from 'react-router-dom';
import MainHeader from "../../components/MainHeader.jsx";
import StyledQuantitySelect from "../../components/styled-inputs/StyledQuantitySelect.jsx";
import {useEffect, useState} from "react";
import TargetProgressBar from "../../components/TargetProgressBar.jsx";
import MapStatic from "../../components/Mapstatic.jsx";
import SelectDeliveryOptions from "../../components/SelectDeliveryOptions.jsx";
import Swal from 'sweetalert2'
import {IndividualUsers} from "../../model/donor/donors.js";
import CautionCard from "../../components/CautionCard.jsx";

export default function RequestPage() {
    const location = useLocation();
    const {userID} = useParams();
    const navigate = useNavigate();
    const cardObject = location.state.cardObject;
    const [currUser,setCurrUser] = useState(null);
    const [value, setValue] = useState(0);
    const mapLocation = {
        lat: 30.0525711,
        lng: 31.4850933
    }

    useEffect(
        () => {
            setCurrUser(IndividualUsers[userID-1]);
        },[currUser, userID]);

    const handleDoneButton = () => {
        console.log("Donation Successful")
        Swal.fire({
            title: "Request Fulfilled Successfully!",
            text: "Check your notification section for more details about the request.",
            icon: "success",
            confirmButtonText: "Return to Dashboard",
            confirmButtonColor: "#009f93",
        }).then( () => navigate(-2));
    }

    const renderAdditionalInfo = () => {
        const excludedKeys = ['title', 'imgUrl', 'description', 'category', 'requestedBy', 'amountNeeded', 'amountDonated'];
        return Object.keys(cardObject).map((key) => {
            if (!excludedKeys.includes(key)) {
                return (
                    <div key={key} className={"flex flex-row gap-1 items-center justify-center"}>
                        <h3>{key.charAt(0).toUpperCase() + key.slice(1)}: </h3>
                        <p className={"font-light text-lg text-left"}>
                            {cardObject[key]}
                        </p>
                    </div>
                );
            }
            return null;
        });
    };


    return (<>{!currUser&& <div>Loading...</div>}
            {currUser&&
                <div className={"w-full min-h-screen flex flex-col items-center gap-2 bg-teal-50"}>
                    <MainHeader />
                    {
                        cardObject.category === 'Teaching Posts' && currUser
                        && ((currUser.type !== "Teacher") || (currUser.type === "Teacher" && !currUser.isVerified)) &&
                        <CautionCard message={"You Should be a Verified Teacher to fulfill this request!"} />
                    }
                    {
                        cardObject.category === 'Medical Cases' && currUser
                        && ((currUser.type !== "Doctor") ||(currUser.type === "Doctor" && !currUser.isVerified)) &&
                        <CautionCard message={"You Should be a Verified Doctor to fulfill this request!"} />
                    }

                    <div className={"h-full w-full flex flex-grow"}>
                        <div className={"w-1/3 min-h-screen flex flex-col items-center justify-center"}>
                            <img src={cardObject.imgUrl} alt={cardObject.title} className={"w-[420px]"}/>
                        </div>
                        <div className={"flex flex-col items-center w-3/4 py-4 h-full"}>
                            <div className={"flex flex-col gap-4 items-center text-center"}>
                                <h1 className={"font-medium text-4xl"}>
                                    {cardObject.title}
                                </h1>
                                <div className={"flex flex-row gap-1 items-center justify-center"}>
                                    <h3>Description: </h3>
                                    <p className={"font-light text-lg text-left"}>
                                        {cardObject.description}
                                    </p>
                                </div>
                                <div className={"flex items-center justify-center text-center gap-2"}>
                                    <div className={"flex flex-row gap-1 items-center justify-center"}>
                                        <h3>Category: </h3>
                                        <p className={"font-light text-lg text-left"}>
                                            {cardObject.category}
                                        </p>
                                    </div>
                                    <span> | </span>
                                    <div className={"flex flex-row gap-1 items-center justify-center"}>
                                        <h3>Requested by: </h3>
                                        <p className={"font-light text-lg text-left"}>
                                            {cardObject.requestedBy}
                                        </p>
                                    </div>
                                </div>
                                {renderAdditionalInfo()}
                                {
                                    (cardObject['hospitalAddress'] || cardObject['address']) &&
                                    <MapStatic location={mapLocation} />
                                }
                                {
                                    cardObject.amountNeeded && cardObject.amountDonated &&
                                    <TargetProgressBar target={cardObject.amountNeeded} current={cardObject.amountDonated}/>
                                }
                                {
                                    (cardObject.category !== "Medical Cases" && cardObject.category !== "Teaching Posts") && cardObject.category !== "Blood Donations" &&
                                    <StyledQuantitySelect value={value} setValue={setValue}
                                                          label={
                                                              (cardObject.category === "Food" && (cardObject.type === "Fruits" || cardObject.type === "Vegetables"))?
                                                                  "Quantity in KGs" : "Quantity"}/>
                                }
                                {
                                    value > 0 &&
                                    <div>
                                        <SelectDeliveryOptions/>
                                        <button
                                            className={"bg-Mystic-Teal text-slate-100 py-3 px-10 rounded-xl hover:bg-Deep-Sea-Emerald transition-colors duration-500"}
                                            onClick={handleDoneButton}>
                                            Donate Selected Quantity
                                        </button>
                                    </div>

                                }
                                {
                                    (cardObject.category === "Medical Cases" || cardObject.category === "Teaching Posts" || cardObject.category === "Blood Donations")
                                    && !(cardObject.category === 'Teaching Posts' && currUser
                                        && currUser.type !== "Teacher" || (currUser.type == "Teacher" && !currUser.isVerified))
                                    && !(cardObject.category === 'Medical Cases' && currUser
                                        && currUser.type !== "Doctor" || (currUser.type == "Doctor" && !currUser.isVerified)) &&
                                    <button
                                        className={"bg-Mystic-Teal mt-3 text-slate-100 py-3 px-10 rounded-xl hover:bg-Deep-Sea-Emerald transition-colors duration-500"}
                                        onClick={handleDoneButton}>
                                        Fulfill Request
                                    </button>
                                }

                            </div>
                        </div>

                    </div>
                </div>}</>
    )
}