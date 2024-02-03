import {useNavigate} from "react-router-dom";

export default function Back() {
    const navigate = useNavigate()

    return (
        <img className={"back"} src={"src/assets/skip-back.svg"} alt={"back logo"} onClick={() => navigate(-1)}/>
    )
}