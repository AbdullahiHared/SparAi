export default function HousingForm({location, apartmentProvider, electricityProvider, rent, updateFields}) {

    return (
        <>
            <div className="select" style={{marginBottom: "20px"}}>
                <select name="Location" required value={location} onChange={e => {
                    updateFields({location: e.target.value})
                }}>
                    <option value="Malmö">Malmö</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Göteborg">Göteborg</option>
                </select>
            </div>
            <div className="select" style={{marginBottom: "20px"}}>
                <select name="ApartmentProvider" required value={apartmentProvider} onChange={e => {
                    updateFields({apartmentProvider: e.target.value})
                }}>
                    <option value="Malmö Stad">Malmö Stad</option>
                    <option value="Uppsala Hem">Uppsala Hem</option>
                    <option value="Stockholms Hem">Stockholms Hem</option>
                </select>
            </div>
            <div className="select">
                <select name="ElectricityProvider" required value={electricityProvider} onChange={e => {
                    updateFields({electricityProvider: e.target.value})
                }}>
                    <option value="Vattenfall">Vattenfall</option>
                    <option value="Nordic Green Energy">Nordic Green Energy</option>
                    <option value="Göteborg Energi">Göteborg Energi</option>
                </select>
            </div>
            <div className="user-box" style={{marginTop: "20px"}}>
                <input type={"number"} name="Rent" required min={1000} value={rent} onChange={e => {
                    updateFields({rent: e.target.value})
                }}/>
                <label>Rent</label>
            </div>
        </>
    )
}