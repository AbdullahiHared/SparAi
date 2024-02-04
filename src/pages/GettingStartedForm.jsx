import Back from "../Back.jsx";
import Graph from "../Graph.jsx";

import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppState} from "../state.jsx";

export default function GettingStartedForm() {
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

    const [state, setState] = useAppState();
    const {handleSubmit,
        register,
        } = useForm({ defaultValues: state, mode: "onSubmit" });

    const navigate = useNavigate();

    const saveData = (data) => {
        setState({ ...state, ...data });
        console.log(data)
        console.log("HI")
        navigate("/housing");
    };

    return (
        <motion.div className={"getting-started"} initial={{opacity: 0}} animate={{opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.4}}}>
            <Back/>
            <Graph monthData={data} marginTop={30} marginBottom={30}/>
            <div className="login-box">
                <form id={"getting-started-form"} onSubmit={handleSubmit(saveData)}>
                    <div className="user-box">
                        <input type="text" name="fullname" required {...register("fullName")}/>
                        <label>Full Name</label>
                    </div>
                    <div className="user-box">
                        <input type="email" name="email" required {...register("email")}/>
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type={"number"} name="age" required {...register("age")}/>
                        <label>Age</label>
                    </div>
                    <div>
                        <label className="student-label">Are you a student?</label>
                        <div className="checkbox-wrapper-34">
                            <input className='tgl tgl-ios' id='toggle-34' type='checkbox' {...register("isStudent")} required/>
                            <label className='tgl-btn' htmlFor='toggle-34'></label>
                        </div>
                    </div>
                    <a className="getting-started-next" onClick={() => document.getElementById("getting-started-form").submit()}>Next</a>
                </form>
            </div>
        </motion.div>
    )
}