import {useEffect} from "react";
import {Helmet} from "react-helmet";

export default function AssistantBot() {

    useEffect(() => {
        window.watsonAssistantChatOptions = {
            integrationID: "f6b6970b-233a-4878-9da9-e263d8ace1a4",
            region: "eu-de",
            serviceInstanceID: "463819fd-31a6-473e-8377-effaa765ad91",
            onLoad: async (instance) => {
                await instance.render();
            },
        };

        const script = document.createElement('script');
        script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${window.watsonAssistantChatOptions.clientVersion || 'latest'}/WatsonAssistantChatEntry.js`;
        script.async = true;

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <Helmet>
            </Helmet>
        </div>
    );

}