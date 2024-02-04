
export default function ExpenseForm() {


    return (
        <>
            <div className="user-box">
                <input type={"number"} name="Income" required/>
                <label>Age</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="TravelExpenses" required />
                <label>Travel Expenses</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="GroceryExpenses" required />
                <label>Grocery Expenses</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="StudentAid" required />
                <label>Student Aid</label>
            </div>
            <div>
                <label className="student-label">Do you have a gym membership?</label>
                <div className="checkbox-wrapper-34">
                    <input className='tgl tgl-ios' id='toggle-34' type='checkbox' required/>
                    <label className='tgl-btn' htmlFor='toggle-34'></label>
                </div>
            </div>
        </>
    )
}