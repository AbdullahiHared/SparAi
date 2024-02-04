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
    const [student, setStudent] = useState(false)
    const [age, setAge] = useState(false)

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
                        <label>Full Name</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type={"number"} name="" required=""/>
                        <label>Age</label>
                    </div>
                    <div>
                        <label className="student-label" >Are you a student?</label>
                        <div className="checkbox-wrapper-34">
                            <input className='tgl tgl-ios' id='toggle-34' type='checkbox'/>
                            <label className='tgl-btn' htmlFor='toggle-34'></label>
                        </div>
                    </div>
                    <a href="#" className="getting-started-next">Next</a>
                </form>
            </div>
        </motion.div>
    )
}