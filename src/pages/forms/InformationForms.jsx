import Graph from "../extras/Graph.jsx";
import useMultistepForm from "./useMultistepForm.jsx";
import UserForm from "./UserForm.jsx";
import HousingForm from "./HousingForm.jsx";
import ExpenseForm from "./ExpenseForm.jsx";
import {useState} from "react";
import MoreInformationForm from "./MoreInformationForm.jsx";
import Back from "../extras/Back.jsx";

const INITIAL_USER_DATA = {
    fullName: "",
    email: "",
    age: "",
    isStudent: "",
    location: "",
    apartmentProvider: "",
    electricityProvider: "",
    rent: "",
    salary: "",
    monthlyBudget: "",
    travelExpenses: "",
    studentAid: "",
    hasGym: "",
    moreInformation: ""
}

export default function InformationForms() {
    const data = [{
        id: 'Dataset',
        data: [
            { x: 'January', y: -35 },
            { x: 'February', y: -15 },
            { x: 'March', y: 20 },
            { x: 'April', y: 15 },
            { x: 'May', y: 15},
            { x: 'June', y: 10 },
            { x: 'July', y: 5}
        ],
    },]


    const [userData, setUserData] = useState(INITIAL_USER_DATA)
    function updateFields(fields) {
        setUserData(prev => {
            return {...prev, ...fields}
        })
    }
    const {
        currentStepIndex,
        currentStep,
        isFirstStep,
        isLastStep,
        back,
        next
    } = useMultistepForm([
        <UserForm {...userData} updateFields={updateFields}/>,
        <HousingForm {...userData} updateFields={updateFields}/>,
        <ExpenseForm {...userData} updateFields={updateFields}/>,
        <MoreInformationForm {...userData} updateFields={updateFields}/>
    ])

    console.log(currentStepIndex)

    function onSubmit(e) {
        e.preventDefault()
        if (isLastStep) {
            setUserData(INITIAL_USER_DATA)
        }else {
            next()
        }
    }
    return (
        <>
            {isFirstStep && <Back/>}
            <Graph monthData={data} marginTop={30} marginBottom={30} />
            <div className="login-box">
                <form id={"getting-started-form"} onSubmit={onSubmit}>
                    {currentStep}
                    <button className="getting-started-next" type="submit">{isLastStep ? "Submit" : "Next"}</button>
                    {!isFirstStep && <button className="getting-started-next" onClick={back}>Back</button>}
                </form>
            </div>
        </>
    )
}