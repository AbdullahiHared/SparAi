import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage.jsx";


export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </>
    )
}