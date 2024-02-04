import {ResponsiveLine} from "@nivo/line";
import AssistantBot from "./AssistantBot.jsx";

const data = [
    {
        id: 'El pris',
        data: [
            { x: '00:00', y: 25 },
            { x: '01:00', y: 23 },
            { x: '02:00', y: 22 },
            { x: '03:00', y: 21 },
            { x: '04:00', y: 20 },
            { x: '05:00', y: 18 },
            { x: '06:00', y: 17 },
            { x: '07:00', y: 19 },
            { x: '08:00', y: 21 },
            { x: '09:00', y: 22 },
            { x: '10:00', y: 24 },
            { x: '11:00', y: 26 },
            { x: '12:00', y: 27 },
            { x: '13:00', y: 28 },
            { x: '14:00', y: 29 },
            { x: '15:00', y: 30 },
            { x: '16:00', y: 29 },
            { x: '17:00', y: 28 },
            { x: '18:00', y: 27 },
            { x: '19:00', y: 26 },
            { x: '20:00', y: 24 },
            { x: '21:00', y: 23 },
            { x: '22:00', y: 22 },
            { x: '23:00', y: 20 },
        ],
    },
];



const imageBucket = "https://s3.eu-de.cloud-object-storage.appdomain.cloud/cloud-object-storage-sparai-xyz"
export default function Navbar() {
    const currentTime = new Date().toLocaleTimeString().substring(0, 4);

    return (
        <>
            <div className={"heading"}>
                <img className={"sparai-logo"}
                     src={ imageBucket + "/sparai_logo.png"}
                     alt={"sparai logo"}/>
                <p className={"welcome"}>Welcome Back, Muhammad</p>
            </div>
            <div className={"nav"}>
                <div className={"notification"}>
                    <div style={{height: '200px', width: "95vw"}}>
                        <ResponsiveLine
                            data={data}
                            margin={{top: 30, right: 0, bottom: 10, left: 0}}
                            xScale={{type: 'point'}}
                            yScale={{type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false}}
                            curve="natural"
                            axisTop={null}
                            axisRight={null}
                            axisBottom={null}
                            axisLeft={null}
                            enableGridX={false}
                            enableGridY={false}
                            enablePoints={true}
                            enableArea={true}
                            enableSlices="x"
                            colors={{scheme: 'accent'}}
                            sliceTooltip={({slice}) => {
                                return (
                                    <div
                                        style={{
                                            padding: '0',
                                            color: "black",
                                            borderRadius: '5px',
                                        }}
                                    >
                                        <strong>{slice.points[0].data.x}</strong>
                                        <br/>
                                        {slice.points.map((point) => (
                                            <div
                                                key={point.id}
                                                style={{
                                                    color: "white",
                                                }}
                                            >
                                                {point.data.yFormatted} öre
                                            </div>
                                        ))}
                                    </div>
                                );
                            }}
                        />
                    </div>
                    <p className={"electricity-reminder"}>{currentTime} - {(currentTime.substring(0, 2) >= 12) ? "Reduce electricity usage to save money" : "Increasing electricity usage can help save money"}</p>
                    <p className={"possible-saving"}>Possible savings: 5 SEK at {currentTime}</p>
                </div>
                <div className={"bottom-bar"}>
                    <div className={"tips"}>
                        <div className={"tips-container"}>
                            <img src={imageBucket + "/walle-assistant-bot-picture-web.png"} alt={"assistant picture"}
                                 className={"tips picture"}/>
                            <p className={"bot-tips"}>Try SparAi</p>
                        </div>
                        <div className={"tips-container"}>
                            <img src={imageBucket + "/saving.png"} alt={"saving picture"}
                                 className={"tips picture"}/>
                            <p className={"saving tips"}>Save energy</p>
                        </div>
                        <div className={"tips-container"}>
                            <img src={imageBucket + "/walle-assistant-bot-picture-web.png"} alt={"assistant picture"}
                                 className={"tips picture"}/>
                            <p className={"grocery tips"}>Affordable food?</p>
                        </div>
                        <div className={"tips-container"}>
                            <img src={imageBucket + "/save.webp"} alt={"money saving picture"}
                                 className={"tips picture"}/>
                            <p className={"Money tips"}>Money saving tips</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}