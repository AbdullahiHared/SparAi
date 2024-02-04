import Back from "../Back.jsx";
import Graph from "../Graph.jsx";

import {motion} from "framer-motion";
import React, {useState} from "react";

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
    },]


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Password:', password);

    };
    return (
        <motion.div className={"getting-started"} initial={{opacity: 0}} animate={{opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.4}}}>
            <Back/>
            <Graph monthData={data} marginTop={30} marginBottom={30}/>
            <div className="login-box">
                <form>
                    <div className="user-box">
                        <input type="text" name="" required=""/>
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                        <label>Email</label>
                    </div>
                    <a href="#">Continue</a>
                </form>
            </div>
        </motion.div>
    )
}