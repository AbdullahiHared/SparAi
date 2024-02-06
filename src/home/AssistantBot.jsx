import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function AssistantBot() {
    const [exists, setExists] = useState(true)

    useEffect(() => {
        if (!exists) {
            window.watsonAssistantChatOptions = {
                integrationID: "acb2b8fa-34eb-4d1e-9e49-c517b4a2958e",
                region: "eu-de",
                serviceInstanceID: "463819fd-31a6-473e-8377-effaa765ad91",
                onLoad: async (instance) => {
                    await instance.render();
                },
            };

            const script = document.createElement("script");

            script.id = "watsonAssistantScript";
            script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
                window.watsonAssistantChatOptions.clientVersion || "latest"
            }/WatsonAssistantChatEntry.js`;
            script.async = true;

            document.head.appendChild(script);
        }
        setExists(false)

        const chatButton = document.getElementById("WACLauncher__Button");
        chatButton && chatButton.click()
    }, [exists]);

    function showChat(shouldShow) {
        const existingBot = document.querySelectorAll(".WatsonAssistantChatHost");
        existingBot.forEach((bot) => {
            bot.style.display = shouldShow ? "block" : "none";
        })
    }

    const navigate = useNavigate()
    const handleBackClick = () => {
        showChat(false)
        navigate("/dashboard");
    };

    return (
        <>
            <img className={"back"}
                 src={"https://s3.eu-de.cloud-object-storage.appdomain.cloud/cloud-object-storage-sparai-xyz/skip-back.svg"}
                 alt={"back logo"} onClick={handleBackClick}
            />

        </>
    );
}