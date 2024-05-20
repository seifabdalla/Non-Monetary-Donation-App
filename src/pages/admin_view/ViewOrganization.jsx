import MainHeader from "../../components/MainHeader.jsx";
import {useSelector} from "react-redux";
import Organizations from "../../model/organizations.js";
import OrganizationInfo from "../../components/OrganizationInfo.jsx";
import StyledSearch from "../../components/styled-inputs/StyledSearch.jsx";
import StyledSelectInput from "../../components/styled-inputs/StyledSelectInput.jsx";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export  default  function ViewOrganization(){
    const [searchValue, setSearchValue] = useState("");
    const [filters, setFilters] = useState({});
    const [Orgs, setOrganizations] = useState(Organizations);
    const navigate = useNavigate();
    const {userID} = useParams();
    const handleSeeMore = (organizationDetails) => {
        console.log(organizationDetails);
        navigate("/viewOrgDetails/"+userID, {state: {organizationDetails}});
    }

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    }

    const handleCategoryFilter = (event,filterCategory) => {
        const category = event.target.textContent;
        setFilters(prevFilters => ({...prevFilters, [filterCategory]: category}));
    }


    useEffect(() => {
        let filteredOrganizations = Organizations;
        for (const filterCategory in filters) {
            if (filters[filterCategory].toLowerCase() !== "all") {
                filteredOrganizations = filteredOrganizations.filter((request) => {
                    return request[filterCategory] === filters[filterCategory];
                });
            }
        }

        // Apply search
        if (searchValue !== "") {
            filteredOrganizations = filteredOrganizations.filter((organization) => {
                return organization.name.toLowerCase().includes(searchValue.toLowerCase());
            });
        }
        setOrganizations(filteredOrganizations);
    }, [filters, searchValue]);

    return (
        <>
            <div className={"h-screen w-screen bg-teal-50 flex flex-col items-center justify-start overflow-hidden"}>
                <MainHeader/>
                <div className={"flex flex-row h-full w-full overflow-y-hidden"}>
                    <div
                        className={"h-full w-1/5 px-10 py-5 flex flex-col gap-5 border-r-2 border-slate-950 overflow-y-auto"}>
                        <StyledSearch placeholder={'Search Organization'} value={searchValue} onChange={handleSearch}/>
                        <StyledSelectInput title={"Category"} options={["All","Hospital", "Charity"]}
                                           onChange={(e)=>{handleCategoryFilter(e,'category')}}
                                           isDisabled={true}/>
                        <StyledSelectInput title={"Area"} options={["All", "Maadi", "New Cairo", "Sheikh Zayed"]}
                                           onChange={(e)=>{handleCategoryFilter(e,'area')}} isDisabled={true}/>
                        <StyledSelectInput title={"Governorate"} options={["All", "Cairo", "Giza", "Alexandria"]}
                                           onChange={(e)=>{handleCategoryFilter(e,'Governorate')}} isDisabled={true}/>
                    </div>
                <div className={'h-full w-full flex flex-col items-center pt-9  pb-10 overflow-y-auto'}>
                    <div className={' w-full h-14 text-2xl  font-bold rounded-md text-center'}>Organizations</div>

                    {Orgs.map((organization, index) => {
                            return (
                                <>
                                    <div key={index} className="flex w-3/4 flex-col justify-center items-center py-3">
                                        <OrganizationInfo organization={organization}/>
                                    </div>
                                </>
                            );
                        }
                    )
                    }

                </div>
            </div>
            </div>
        </>
    );
}