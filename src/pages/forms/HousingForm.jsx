export default function HousingForm({location, apartmentProvider, electricityProvider, rent, updateFields}) {

    return (
        <>
            <div className="user-box">
                <input type={"text"} name="Location" required value={location} onChange={e => {
                    updateFields({location: e.target.value})}}/>
                <label>Location</label>
            </div>
            <div className="user-box">
                <input type="text" name="ApartmentProvider" required value={apartmentProvider} onChange={e => {
                    updateFields({apartmentProvider: e.target.value})}}/>
                <label>Apartment Provider</label>
            </div>
            <div className="user-box">
                <input type="text" name="ElectricityProvider" required value={electricityProvider} onChange={e => {
                    updateFields({electricityProvider: e.target.value})}}/>
                <label>Electricity Provider</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="Rent" required min={1000} value={rent} onChange={e => {
                    updateFields({rent: e.target.value})}}/>
                <label>Rent</label>
            </div>
        </>
    )
}