import "../App.css"

const Info = ({handleNext, windowSize, name, email, number, handleName, handleEmail, handleNumber}) => {

    return(
        <div id="allinfo"> 
        <div id="info">
            <div id="top">
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number</p>
            </div>
                <form className="form">
                    <div style={{display: "grid"}}>
                    <label><strong>Name</strong></label>
                    <input onChange={handleName} value={name} type="text" placeholder="e.g Stephen King" required></input>
                    {name === "" ? <p style={{color: "red", fontSize: "10px"}}>This is a required field</p> : undefined}
                    </div>
                    
                    <div style={{display: "grid"}}>
                    <label><strong>E-mail</strong></label>
                    <input onChange={handleEmail} value={email} type="email" placeholder="e.g stephenking@lorem.com" required></input>
                    {email === "" ? <p style={{color: "red", fontSize: "10px"}}>This is a required field</p> : undefined}
                    </div>
                    <div style={{display: "grid"}}>
                    <label><strong>Phone Number</strong></label>
                    <input onChange={handleNumber} value={number} type="number" placeholder="e.g +1234567890" required="required"></input>
                    {number === "" ? <p style={{color: "red", fontSize: "10px"}}>This is a required field</p> : undefined}
                    </div>
                </form>
        </div>
        <div id={windowSize >= 577 ? "but" : "mobbut"}>
        <button id="next" onClick={handleNext} style={{backgroundColor: "darkblue", borderRadius: "10%", color: "white"}}>Next Step</button>
       </div>
       </div>
    )
}






export default Info;