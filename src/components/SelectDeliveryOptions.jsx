import StyledSelectInput from "./styled-inputs/StyledSelectInput.jsx";
import StyledTimePicker from "./styled-inputs/StyledTimePicker.jsx";


export default function SelectDeliveryOptions(){
    return (
        <div className={"flex flex-col gap-3 my-4"}>
            <h1 className={"font-normal text-xl"}>Delivery Options</h1>
            <div className={"flex flex-col gap-5"}>
                <StyledSelectInput title={"Delivery Transportation Option"} options={["Truck", "Car", "Motorcycle"]} />
                <StyledTimePicker />
            </div>
        </div>
    );
}