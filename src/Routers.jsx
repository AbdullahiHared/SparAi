import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage.jsx";
import GettingStarted from "./GettingStarted.jsx";


export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/gettingstarted" element={<GettingStarted />} />
            </Routes>
        </>
    )
}