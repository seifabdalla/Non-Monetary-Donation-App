import MainHeader from "../../components/MainHeader.jsx";
import {useLocation,useParams} from "react-router-dom";
import MapStatic from "../../components/Mapstatic.jsx";

export default function ViewOrgDetails(){
    const location = useLocation();
    const organizationDetails = location.state.organizationDetails;
    const mapLocation = {
        lat: 30.0525711,
        lng: 31.4850933
    }

    return (
      <div className={"w-full min-h-screen flex flex-col bg-teal-50"}>
          <MainHeader />
          <div className={"h-full w-full flex flex-col flex-grow items-center justify-start py-10"}>
            <div className={"size-96 flex items-center justify-center"}>
                <img src={organizationDetails.imageUrl} alt={organizationDetails.name} className={"w-[420px]"}/>
            </div>
              <div className={"mt-8 flex flex-col items-center gap-5"}>
                <h2 className={"text-4xl font-medium"}>{organizationDetails.name}</h2>
                <p className={"font-normal text-lg"}>Organization Type: {organizationDetails.category}</p>
                <p className={"font-normal text-lg"}>{organizationDetails.description}</p>
                <hr className={"w-1/2 border-1 border-slate-950"}/>
                <h3 className={"text-xl font-medium"}>Where Can you find us?</h3>
                <p>Governorate: {organizationDetails.Governorate}, City: {organizationDetails.area}</p>
                <MapStatic location={mapLocation} />
                  <hr className={"w-1/2 border-1 border-slate-950"}/>
                  <h3 className={"text-xl font-medium"}>How to Contact us?</h3>
                  <p>Email: {organizationDetails.contactInfo.email}</p>
                    <p>Phone: {organizationDetails.contactInfo.phone}</p>
              </div>
          </div>
      </div>
    );
}