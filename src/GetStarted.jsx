import {Link} from "react-router-dom";

export default function GetStarted() {

    return (
        <Link to="/gettingstarted">
            <div className={"get-started"}>
                Get Started
            </div>
        </Link>
    )
}