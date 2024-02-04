
export default function ExpenseForm({salary, monthlyBudget, travelExpenses, groceryExpenses, studentAid, hasGym, updateFields}) {


    return (
        <>
            <div className="user-box">
                <input type={"number"} name="salary" required value={salary} onChange={e => {
                    updateFields({salary: e.target.value})}}/>
                <label>Salary</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="budget" required value={monthlyBudget} onChange={e => {
                    updateFields({monthlyBudget: e.target.value})}}/>
                <label>Monthly Budget</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="TravelExpenses" required value={travelExpenses} onChange={e => {
                    updateFields({travelExpenses: e.target.value})}}/>
                <label>Travel Expenses</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="GroceryExpenses" required value={groceryExpenses} onChange={e => {
                    updateFields({groceryExpenses: e.target.value})}}/>
                <label>Grocery Expenses</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="StudentAid" required value={studentAid} onChange={e => {
                    updateFields({studentAid: e.target.value})}}/>
                <label>Student Aid</label>
            </div>
            <div>
                <label className="student-label">Do you have a gym membership?</label>
                <div className="checkbox-wrapper-34">
                    <input className='tgl tgl-ios' id='toggle-34' type='checkbox' value={hasGym} onChange={e => {
                        updateFields({hasGym: e.target.checked})}}/>
                    <label className='tgl-btn' htmlFor='toggle-34'></label>
                </div>
            </div>
        </>
    )
}