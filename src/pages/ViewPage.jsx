import MainHeader from "../components/MainHeader.jsx";
import StyledSearch from "../components/styled-inputs/StyledSearch.jsx";
import {useEffect, useState} from "react";
import DonationCards from "../components/DonationCards.jsx";

import {DonorsRequests} from "../model/view-page.js";
import StyledSelectInput from "../components/styled-inputs/StyledSelectInput.jsx";

export default function ViewPage() {

    const [searchValue, setSearchValue] = useState("");
    const [requests, setRequests] = useState(DonorsRequests.requests);
    const [filters, setFilters] = useState({});

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    }

    const handleCategoryFilter = (event, filterCategory) => {
        const category = event.target.textContent;
        setFilters(prevFilters => ({...prevFilters, [filterCategory]: category}));
    }

    useEffect(() => {
            let filteredRequests = DonorsRequests.requests;
            // Apply filters
            for (const filterCategory in filters) {
                if (filters[filterCategory].toLowerCase() !== "all") {
                    filteredRequests = filteredRequests.filter((request) => {
                        return request[filterCategory] === filters[filterCategory];
                    });
                }
            }

            // Apply search
            if (searchValue !== "") {
                filteredRequests = filteredRequests.filter((request) => {
                    return request.title.toLowerCase().includes(searchValue.toLowerCase()) || request.category.toLowerCase().includes(searchValue.toLowerCase());
                });
            }

            setRequests(filteredRequests);
    }, [filters, searchValue]);
    

    return (
        <div className={"h-screen w-screen bg-teal-100 flex flex-col items-center justify-start overflow-hidden"}>
            <MainHeader />
            <div className={"w-full h-full flex flex-col flex-grow"}>
                <div className={"flex flex-row h-full w-full overflow-y-hidden"}>
                    <div className={"h-full w-1/5 px-10 py-5 flex flex-col gap-5 border-r-2 border-slate-950"}>
                        <StyledSearch placeholder={"Search for a Request"} value={searchValue} onChange={handleSearch} />
                        {
                            DonorsRequests.filters.map((category, index) => {
                                return (
                                    <div key={index} className={"w-full flex flex-col gap-2"}>
                                        <h3>Filter By a {category.filterByText}</h3>
                                        <StyledSelectInput title={category.filterByText} options={category.options} onChange={(e)=>{handleCategoryFilter(e,category.filterBy)}} isDisabled={false} />
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className={"h-full w-4/5 flex flex-row flex-wrap flex-grow items-start justify-center gap-5 pt-5 px-4 pb-10 overflow-y-auto"}>
                        {
                            requests.map((request, index) => {
                                return (
                                    <DonationCards title={request.title} shortDescription={request.description}
                                                   category={request.category}
                                                    requestedBy={request.requestedBy}
                                                   key={index} />
                                );
                            })
                        }
                        <div className={"h-10 w-full"}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


