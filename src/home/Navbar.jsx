import {ResponsiveLine} from "@nivo/line";
import AssistantBot from "./AssistantBot.jsx";
import {Link} from "react-router-dom";

const data = [
    {
        id: 'El pris',
        data: [
            { x: '00:00', y: -0.11 },
            { x: '01:00', y: -0.06 },
            { x: '02:00', y: -0.07 },
            { x: '03:00', y: -0.04 },
            { x: '04:00', y: -0.01 },
            { x: '05:00', y: -0.11 },
            { x: '06:00', y: 0 },
            { x: '07:00', y: 1.19 },
            { x: '08:00', y: 10.04 },
            { x: '09:00', y: 11.13 },
            { x: '10:00', y: 12.31 },
            { x: '11:00', y: 14.51 },
            { x: '12:00', y: 15.65 },
            { x: '13:00', y: 10.9 },
            { x: '14:00', y: 14.71 },
            { x: '15:00', y: 17.8 },
            { x: '16:00', y: 25.03 },
            { x: '17:00', y: 39.92 },
            { x: '18:00', y: 41.77 },
            { x: '19:00', y: 39.98 },
            { x: '20:00', y: 32.9 },
            { x: '21:00', y: 27.77 },
            { x: '22:00', y: 27.68 },
            { x: '23:00', y: 24.06 },
        ],
    },
];


const imageBucket = "https://s3.eu-de.cloud-object-storage.appdomain.cloud/cloud-object-storage-sparai-xyz"
export default function Navbar() {
    const currentTime = new Date().toLocaleTimeString().substring(0, 5);

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
                    <div style={{height: '200px', width: "95vw", border: "1px white solid", borderRadius: "4px"}}>
                        <ResponsiveLine
                            data={data}
                            margin={{top: 30, right: 0, bottom: 2, left: 0}}
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
                    <div className={"electricity-container"}>
                        <p className={"electricity-reminder"}>{currentTime} - {(currentTime.substring(0, 2) >= 12) ? "Reduce electricity usage to save money" : "Increasing electricity usage can help save money"}</p>
                        <p className={"possible-saving"}>Possible savings: 5 SEK at {currentTime}</p>
                    </div>
                    <div className={"energy-usage-heading"}>
                        Energy Usage
                    </div>
                </div>
                <div className={"bottom-bar"}>
                    <div className={"tips"}>
                        <div className={"tips-container"}>
                            <img src={imageBucket + "/house.png"} alt={"house picture"}
                                 className={"tips picture"}/>
                            <p className={"bot-tips"}>Find Apartment</p>
                        </div>
                        <div className={"tips-container"}>
                            <img src={imageBucket + "/saving.png"} alt={"saving picture"}
                                 className={"tips picture"}/>
                            <p className={"saving tips"}>Save energy</p>
                        </div>
                        <div className={"tips-container"}>
                            <img src={imageBucket + "/cheap-image.png"} alt={"cheap food picture"}
                                 className={"tips picture"}/>
                            <p className={"grocery tips"}>Affordable food</p>
                        </div>
                        <div className={"tips-container"}>
                            <img src={imageBucket + "/save.webp"} alt={"money saving picture"}
                                 className={"tips picture"}/>
                            <p className={"Money tips"}>Save money</p>
                        </div>
                        <Link to="/chatbot">
                            <img src={imageBucket + "/walle-assistant-bot-picture-web.png"} alt={"money saving picture"}
                                 className={"tips picture"}/>
                            <p className={"Money tips"}>ChatBot</p>
                        </Link>
                    </div>
                    <div className={"suggestion"}>

                    </div>
                </div>
            </div>
        </>
    )
}