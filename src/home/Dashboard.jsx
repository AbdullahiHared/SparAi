import Navbar from "./Navbar.jsx";
import {useLocation} from "react-router-dom";

export default function Dashboard() {

    const location = useLocation();
    const userData = location.state.userData;

    return (
        <div>
            <Navbar userData={userData} />
        </div>
    )
}