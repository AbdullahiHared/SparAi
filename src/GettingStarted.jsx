import Back from "./Back.jsx";
import Graph from "./Graph.jsx";

export default function GettingStarted() {

    const data = [{
        id: 'Dataset',
        data: [
            { x: 'January', y: -35 },
            { x: 'February', y: -15 },
            { x: 'March', y: 20 },
            { x: 'April', y: 15 },
            { x: 'May', y: 15},
            { x: 'June', y: 10 },
            { x: 'July', y: 5}
        ],
    },
    ]

    return (
        <div className={"getting-started"}>
            <Graph monthData={data} marginTop={30} marginBottom={30}/>
            <Back />
        </div>
    )
}