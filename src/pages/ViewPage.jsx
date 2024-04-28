import MainHeader from "../components/MainHeader.jsx";
import StyledSearch from "../components/styled-inputs/StyledSearch.jsx";
import {useState} from "react";
import DonationCards from "../components/DonationCards.jsx";

export default function ViewPage() {

    const [searchValue, setSearchValue] = useState("");
    const [requests, setRequests] = useState(requestsForDonors);

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
        if (event.target.value === "") {
            setRequests(requestsForDonors);
            return;
        }
        const filteredRequests = requestsForDonors.filter((request) => {
            return request.title.toLowerCase().includes(event.target.value.toLowerCase()) || request.category.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRequests(filteredRequests);
    }

    return (
        <div className={"h-screen w-screen bg-teal-100 flex flex-col items-center justify-start overflow-x-hidden"}>
            <MainHeader />
            <main className={"w-full h-full flex flex-col flex-grow"}>
                <div className={"flex flex-row h-full w-full"}>
                    <div className={"h-full px-10 py-5 flex flex-col gap-5"}>
                        <StyledSearch placeholder={"Search for a Request"} value={searchValue} onChange={handleSearch} />
                        <p>Other Filters</p>
                    </div>
                    <div className={"flex flex-row flex-wrap flex-grow items-start justify-center gap-5 py-5"}>
                        {
                            requests.map((request, index) => {
                                return (
                                    <DonationCards title={request.title} shortDescription={request.description}
                                                   category={request.category}
                                                   key={index} />
                                );
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}


const requestsForDonors = [
    {
        title: "Request 1",
        description: "This Request was Made by Organization 1",
        category: "Category 1",
        requestedBy: "Requester 1"
    },
    {
        title: "Request 2",
        description: "Description 2",
        category: "Category 2",
        requestedBy: "Requester 2"
    },
    {
        title: "Request 3",
        description: "Description 3",
        category: "Category 3",
        requestedBy: "Requester 3"
    }

]