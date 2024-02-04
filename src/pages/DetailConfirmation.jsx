import {useAppState} from "../state.jsx";
import {Form, useForm} from "react-hook-form";
import {Section, SectionRow} from "./Section.jsx";

export default function DetailConfirmation() {
    const [state] = useAppState();
    const { handleSubmit } = useForm({ defaultValues: state });

    const submitData = (data) => {
        console.info(data);
        // Submit data to the server
    };

    return (
        <Form onSubmit={handleSubmit(submitData)}>
            <h1 className="mb-4">Confirm</h1>
            <Section title="Personal info" url="/gettingstarted">
                <SectionRow>
                    <div>Full Name</div>
                    <div>{state.fullName}</div>
                </SectionRow>
                <SectionRow>
                    <div>Email</div>
                    <div>{state.email}</div>
                </SectionRow>
                <SectionRow>
                    <div>isStudent</div>
                    <div>{state.isStudent}</div>
                </SectionRow>
            </Section>
            <Section title="Education" url="/housing">
                <SectionRow>
                    <div>University</div>
                    <div>{state.university}</div>
                </SectionRow>
                <SectionRow>
                    <div>Degree</div>
                    <div>{state.degree}</div>
                </SectionRow>
            </Section>
            <Section title="About" url="/about">
                <SectionRow>
                    <div>About me</div>
                    <div>{state.about}</div>
                </SectionRow>
            </Section>
            <div className="d-flex justify-content-start">
                <Button>Submit</Button>
            </div>
        </Form>
    );
}