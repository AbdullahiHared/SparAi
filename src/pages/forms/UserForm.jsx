
export default function UserForm({fullName, email, age, isStudent, updateFields}) {

    return (
        <>
            <div className="user-box">
                <input type="text" name="fullname" required minLength={1} value={fullName} onChange={e => {
                    updateFields({fullName: e.target.value})}}/>
                <label>Full Name</label>
            </div>
            <div className="user-box">
                <input type="email" name="email" required minLength={1} value={email} onChange={e => {
                    updateFields({email: e.target.value})
                }}/>
                <label>Email</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="age" required min={1} max={60} value={age} onChange={e => {
                    updateFields({age: e.target.value})
                }}/>
                <label>Age</label>
            </div>
            <div>
                <label className="student-label">Are you a student?</label>
                <div className="checkbox-wrapper-34">
                    <input className='tgl tgl-ios' id='toggle-34' type='checkbox' value={isStudent} onChange={e => {
                        updateFields({isStudent: e.target.value})
                    }}/>
                    <label className='tgl-btn' htmlFor='toggle-34'></label>
                </div>
            </div>
        </>
    )
}