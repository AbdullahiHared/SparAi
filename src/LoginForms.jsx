import GetStarted from "./GetStarted.jsx";

export default function LoginForms() {

    const greetingTitle = "AI-Enhanced Savings Start Now!";
    const greetingTitleDescription = "Utilize our SparAi to automate a personalized schedule, discover budget-friendly food, and receive smart tips to save on energy";

    return (
        <>
            <div className={"login-heading"}>
                <h1>{greetingTitle}</h1>
                <p>{greetingTitleDescription}</p>
            </div>
            <GetStarted />
            <div className={"login"}>
                <div className={"google"}>
                <img src={"public/Images/google_logo.png"} alt={"google logo"}/>
                    <p>Login with Google</p>
                </div>
                <div className={"facebook"}>
                    <img src={"public/Images/facebook_logo.png"} alt={"facebook logo"}/>
                    <p>Login with Facebook</p>
                </div>
                <a href={"https://github.com/Miishri"} target="_blank" rel="noreferrer">
                    <div className={"github"}>
                        <img src={"public/Images/github_logo.png"} alt={"github logo"}/>
                        <p>Login with Github</p>
                    </div>
                </a>
            </div>
        </>
    )
}