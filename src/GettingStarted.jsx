import Back from "./Back.jsx";
import Graph from "./Graph.jsx";

import {motion} from "framer-motion";

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
        <motion.div
            className={"getting-started"}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.3}}}
        >
            <Graph monthData={data} marginTop={30} marginBottom={30}/>
            <Back />
        </motion.div>
    )
}