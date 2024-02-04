import {Route, Routes, useLocation} from "react-router-dom";
import Homepage from "./Homepage.jsx";
import GettingStarted from "./pages/GettingStarted.jsx";

import {AnimatePresence} from 'framer-motion';

export default function Routers() {
    const location = useLocation()

    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Homepage />} />
                <Route path="/gettingstarted" element={<GettingStarted />} />
            </Routes>
        </AnimatePresence>
    )
}