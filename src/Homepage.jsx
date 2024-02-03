import Graph from "./Graph.jsx";
import LoginForms from "./LoginForms.jsx";


export default function Homepage() {

    const data = [{
        id: 'Dataset',
        data: [
            { x: 'January', y: 30 },
            { x: 'February', y: 30 },
            { x: 'March', y: 10 },
            { x: 'April', y: 25 },
            { x: 'May', y: 35 },
            { x: 'June', y: -20 },
            { x: 'July', y: -35 }
        ],
    },
    ]


    return (
        <div className={"homepage"}>
            <Graph monthData={data} />
            <LoginForms />
        </div>
    )
}