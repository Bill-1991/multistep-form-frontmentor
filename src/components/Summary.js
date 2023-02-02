import "../App.css"

const Summary = ({month, finalPlan, finalAddOns, handleConfirm, windowSize}) => {
    let totalAddOnsPrice = 0
    for(let i in finalAddOns) {
        totalAddOnsPrice += finalAddOns[i].price
    }
    const total = totalAddOnsPrice + finalPlan.price
    return(
        <div id="allsummary">
        <div id="summary">
           
           <div id="top">
              <h1>Finishing up</h1>
              <p>Double-check everything looks OK before confirming.</p>
           </div>
           
           <div id="lastplan" style={{borderRadius: "10%", backgroundColor: "lightgray"}}>
                <div id="finalplan">
                  <div >
                    <h2 style={{position: "relative", left: "5%", fontSize: "15px"}}>{`${finalPlan.title} (${month === true ? "monthly" : "yearly"})`}</h2>
                    <p style={{position: "relative", left: "5%",textDecoration: "underline", color: "gray", fontSize: "10px"}}>change</p>
                  </div>
                  <p style={{position: "relative", right: "5%", color: "black", justifySelf:"end", alignSelf: 'center'}}>{`${finalPlan.price}$/${month === true ? "mo" : "yr"}`}</p>
                </div>
                <div style={{backgroundColor: "black", height: "2px"}}></div>
                <div id="finaladdons">
                    {finalAddOns.map(addon => <div style={{display: "grid", gridTemplateColumns: "60% 40%"}}>
                        <p style={{justifySelf: "start", display: "block", position: "relative", left: "5%"}}>{addon.title}</p>
                        <p style={{justifySelf: "end", position: "relative", right: "5%"}}>{`+$${addon.price}/${month === true ? "mo" : "yr"}`}</p>
                    </div>)}
                </div>
            <div id="total">
                <p style={{position: 'relative', left: '5%'}}>{`Total (${month === true ? "per month" : "per year"})`}</p>
                <strong style={{justifySelf: "end", position: 'relative', right: '5%', }}><p style={{fontSize: "16px", color: "blue"}}>{`$${total}/${month === true ? "mo" : "yr"}`}</p></strong>
            </div>
            </div>
        </div>
        <div id={windowSize >= 577 ? "but" : "mobbut"}>
        <button id="back" style={{justifySelf: "start", borderRadius: "10%", backgroundColor: "inherit", color: 'black'}}>Go back</button>
        <button id="next" onClick={handleConfirm} style={{justifySelf: "end", borderRadius: "10%", backgroundColor: "darkblue", color: "white"}}>Confirm</button>
       </div>
       </div>
    )
}






export default Summary;