import "../App.css"

const Plan = ({month, handleMonth, plans, handlePlans, handleNext, windowSize, handleBack}) => {

    return(
        <div id="allplan">
        <div id="plan">
           
           <div id="top">
              <h1>Select your plan</h1>
              <p>You have the option of monthly or yearly billing</p>
           </div>

           <div id="allplans">
           <div id={windowSize >= 577 ? "buttons" : "mobbuttons"}>
            <button onClick={() => handlePlans("arcade")}>
                <div id="arcade" className="arcade">
                    <img src={plans[0].img} alt="Plan arcade"/>
                    <div style={{textAlign: "start"}}>
                    <h2 style={{fontSize: "13px"}}>Arcade</h2>
                        <p style={{fontSize: "11px"}}>{month === true ? "$9/mo" : "$90/yr"}</p>
                        {month === false ? <h3 style={{fontSize: "12px"}}>2 months free</h3> : undefined}
                    </div>
                </div>
            </button>

            <button onClick={() => handlePlans("advanced")}>
                <div id="advanced" className="advanced">
                    <img src={plans[1].img} alt="Plan advanced"/>
                    <div style={{textAlign: "start"}}>
                        <h2 style={{fontSize: "13px"}}>Advanced</h2>
                        <p style={{fontSize: "11px"}}>{month === true ? "$12/mo" : "$120/yr"}</p>
                        {month === false ? <h3 style={{fontSize: "12px"}}>2 months free</h3> : undefined}
                    </div>
                </div>
            </button>

            <button onClick={() => handlePlans("pro")}>
                <div id="pro" className="pro">
                    <img src={plans[2].img} alt="Plan pro"/>
                    <div id="protext" style={{textAlign: "start"}}>
                    <h2 style={{fontSize: "13px"}}>Pro</h2>
                        <p style={{fontSize: "11px"}}>{month === true ? "$15/mo" : "$150/yr"}</p>
                        {month === false ? <h3 style={{fontSize: "12px"}}>2 months free</h3> : undefined}
                    </div>
                </div>
            </button>
           </div>
           <div id="monoryear" style={{display: 'flex', width: "100%", backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", gap: "10%"}}>
              <p style={{height: "60%"}}>Monthly</p>
              <button onClick={handleMonth} style={{width: "50px", height: "60%", borderRadius: "40%", backgroundColor: "darkblue"}}><div style={{borderRadius: "100%", height: "100%", width: "20px", color: "white", position: "relative", top: "0", left: month === true ? "-3px" : "20px", backgroundColor: "white"}} ></div></button>
              <p style={{height: "60%"}}>Yearly</p>
           </div>
           </div>
        </div>
        <div id={windowSize >= 577 ? "but" : "mobbut"}>
        <button id="back" style={{justifySelf: "start", borderRadius: "10%", backgroundColor: "inherit", color: 'black'}}>Go back</button>
        <button id="next" onClick={handleNext} style={{justifySelf: "end", borderRadius: "10%", backgroundColor: "darkblue", color: "white"}}>Next Step</button>
       </div>
       </div>
    )
}






export default Plan;