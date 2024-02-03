
export default function LoginForms() {

    const greetingTitle = "AI-Enhanced Savings Start Now!";
    const greetingTitleDescription = "Utilize our SparAi to automate a personalized schedule, discover budget-friendly food, and receive smart tips to save on energy";

    return (
        <>
            <div className={"login-heading"}>
                <h1>{greetingTitle}</h1>
                <p>{greetingTitleDescription}</p>
            </div>
            <div className={"get-started"}>
                Get Started
            </div>
            <div className={"login"}>
                <div className={"google"}>
                    <img src={"src/assets/google_logo.png"} alt={"google logo"}/>
                    <p>Login with Google</p>
                </div>
                <div className={"facebook"}>
                    <img src={"src/assets/facebook_logo.png"} alt={"facebook logo"}/>
                    <p>Login with Facebook</p>
                </div>
                <a href={"https://github.com/Miishri"} target="_blank">
                    <div className={"github"}>
                        <img src={"src/assets/github_logo.png"} alt={"github logo"}/>
                        <p>Login with Github</p>
                    </div>
                </a>
            </div>
        </>
    )
}