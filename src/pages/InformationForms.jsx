import Graph from "../Graph.jsx";
import useMultistepForm from "./useMultistepForm.jsx";
import UserForm from "./UserForm.jsx";
import HousingForm from "./HousingForm.jsx";
import ExpenseForm from "./ExpenseForm.jsx";

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

    const {
        steps,
        currentStepIndex,
        currentStep,
        isFirstStep,
        isLastStep,
        back,
        next
    } = useMultistepForm([
        <UserForm />,
        <HousingForm />,
        <ExpenseForm />
    ])

    console.log(currentStepIndex)

    return (
        <>
            <Graph monthData={data} marginTop={30} marginBottom={30} />
            <div className="login-box">
                <form id={"getting-started-form"}>
                    {currentStep}
                    <a className="getting-started-next" onClick={next}>{isLastStep ? "Submit" : "Next"}</a>
                    {!isFirstStep && <a className="getting-started-next" onClick={back}>Back</a>}
                </form>
            </div>
        </>
    )
}