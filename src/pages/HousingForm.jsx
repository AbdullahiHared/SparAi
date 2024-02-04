export default function HousingForm() {

    return (
        <>
            <div className="user-box">
                <input type={"text"} name="Location" required />
                <label>Location</label>
            </div>
            <div className="user-box">
                <input type="text" name="ApartmentProvider" required />
                <label>Apartment Provider</label>
            </div>
            <div className="user-box">
                <input type="text" name="ElectricityProvider" required />
                <label>Electricity Provider</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="Rent" required min={1000}/>
                <label>Rent</label>
            </div>
        </>
    )
}