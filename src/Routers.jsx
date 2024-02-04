import {Route, Routes, useLocation} from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import GettingStartedForm from "./pages/GettingStartedForm.jsx";

import {AnimatePresence} from 'framer-motion';
import HousingForm from "./pages/HousingForm.jsx";
import ExpenseForm from "./pages/ExpenseForm.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DetailConfirmation from "./pages/DetailConfirmation.jsx";

export default function Routers() {
    const location = useLocation()

    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/gettingstarted" element={<GettingStartedForm />} />
                <Route path="/housing" element={<HousingForm />} />
                <Route path="/expenses" element={<ExpenseForm />} />
                <Route path="/confirm" element={<DetailConfirmation />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </AnimatePresence>
    )
}