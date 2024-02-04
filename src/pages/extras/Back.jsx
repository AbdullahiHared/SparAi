import {useNavigate} from "react-router-dom";

export default function Back() {
    const navigate = useNavigate()

    return (
        <img className={"back"} src={"https://s3.eu-de.cloud-object-storage.appdomain.cloud/cloud-object-storage-sparai-xyz/skip-back.svg"} alt={"back logo"} onClick={() => navigate(-1)}/>
    )
}