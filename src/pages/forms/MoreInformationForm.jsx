
export default function MoreInformationForm({moreInformation, updateFields}) {

    return (
        <div className="user-box">
            <input type={"text"} name="moreInfo" maxLength={200} value={moreInformation}
                   onChange={e => {updateFields({moreInformation: e.target.value})}}/>
            <label>Further Information (Optional) </label>
        </div>
    )
}