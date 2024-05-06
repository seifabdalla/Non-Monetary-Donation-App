import { useLocation } from 'react-router-dom';
import MainHeader from "../../components/MainHeader.jsx";
import StyledQuantitySelect from "../../components/styled-inputs/StyledQuantitySelect.jsx";
import {useState} from "react";
import { ProgressBar } from 'primereact/progressbar';
import TargetProgressBar from "../../components/TargetProgressBar.jsx";

export default function RequestPage() {
    const location = useLocation();
    const cardObject = location.state.cardObject;
    const [value, setValue] = useState(0);
    // const primeReactContext = useContext(PrimeReactContext);

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

    return (
        <div className={"w-full h-screen flex flex-col bg-teal-50"}>
            <MainHeader />
            <div className={"h-full w-full flex"}>
                <div className={"w-1/3 h-full flex flex-col items-center justify-center"}>
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
                            cardObject.amountNeeded && cardObject.amountDonated &&
                            <TargetProgressBar target={cardObject.amountNeeded} current={cardObject.amountDonated}/>
                        }
                        <StyledQuantitySelect value={value} setValue={setValue}/>
                        {
                            value > 0 &&
                            <button
                                className={"bg-Tropical-Lagoon text-slate-100 py-3 px-10 rounded-xl hover:bg-Deep-Sea-Emerald transition-colors duration-500"}>
                                Fulfill Request
                            </button>
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}