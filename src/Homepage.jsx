import Graph from "./Graph.jsx";
import LoginForms from "./LoginForms.jsx";


export default function Homepage() {

    const data = [{
        id: 'Dataset',
        data: [
            { x: 'January', y: 20 },
            { x: 'February', y: 25 },
            { x: 'March', y: 10 },
            { x: 'April', y: 15},
            { x: 'May', y: 20 },
            { x: 'June', y: -30 },
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