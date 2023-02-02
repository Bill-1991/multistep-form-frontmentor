import "../App.css"

const Info = ({handleNext, windowSize}) => {

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
                    <input type="text" placeholder="e.g Stephen King"></input>
                    </div>
                    <div style={{display: "grid"}}>
                    <label><strong>E-mail</strong></label>
                    <input type="email" placeholder="e.g stephenking@lorem.com"></input>
                    </div>
                    <div style={{display: "grid"}}>
                    <label><strong>Phone Number</strong></label>
                    <input type="number" placeholder="e.g +1234567890"></input>
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