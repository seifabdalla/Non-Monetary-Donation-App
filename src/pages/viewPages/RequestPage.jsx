import { useLocation } from 'react-router-dom';
import MainHeader from "../../components/MainHeader.jsx";

export default function RequestPage() {
    const location = useLocation();
    const cardObject = location.state.cardObject;
    console.log(cardObject);
    return (
        <div className={"w-full h-screen flex flex-col bg-teal-50"}>
            <MainHeader />
            <div className={"h-full w-full flex"}>
                <div className={"w-1/3 h-full"}>
                    <img src={cardObject.imgUrl} alt={cardObject.title} className={"object-center w-full h-full"}/>
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


                    </div>
                </div>

            </div>
        </div>
    )
}