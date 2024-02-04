
export default function UserForm() {

    return (
        <>
            <div className="user-box">
                <input type="text" name="fullname" required min={1}/>
                <label>Full Name</label>
            </div>
            <div className="user-box">
                <input type="email" name="email" required min={1}/>
                <label>Email</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="age" required min={1} max={60}/>
                <label>Age</label>
            </div>
            <div>
                <label className="student-label">Are you a student?</label>
                <div className="checkbox-wrapper-34">
                    <input className='tgl tgl-ios' id='toggle-34' type='checkbox' required/>
                    <label className='tgl-btn' htmlFor='toggle-34'></label>
                </div>
            </div>
        </>
    )
}