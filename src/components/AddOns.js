import "../App.css"

const AddOns = ({month, addOnsPlan, handleAddOnsPlan, handleNext, windowSize}) => {

    return(
      <div id="alladdon">
        <div id="addons">
           <div id="top">
              <h1>Pick add-ons</h1>
              <p style={{alignSelf: "start"}}>Add-ons help enhance your gaming experience</p>
           </div>

           <div id="alladdons">
                <div id="outeronline">
                <div className="online">
                    <button onClick={() => handleAddOnsPlan("online")} type="checkbox" style={{width: "20px", height: "20px", justifySelf: "center", backgroundColor: addOnsPlan[0].type === true ? "blue" : "inherit"}}></button>
                    <div style={{textAlign: "start"}}>
                      <h2 style={{fontSize: "12px"}}>Online Service</h2>
                      <p style={{fontSize: "10px"}}>Access to multiplayer games</p>
                    </div>
                    <p style={{fontSize: "12px"}}>{month === true ? "$1/mo" : "$10/yr"}</p>
                </div>
                </div>
                
                <div id="outerstorage">
                <div className="storage">
                    <button onClick={() => handleAddOnsPlan("storage")} type="checkbox" style={{width: "20px", height: "20px", justifySelf: "center", backgroundColor: addOnsPlan[1].type === true ? "blue" : "inherit"}}></button>
                    <div style={{textAlign: "start"}}>
                      <h2 style={{fontSize: "12px"}}>Larger storage</h2>
                      <p style={{fontSize: "10px"}}>Extra 1TB of cloud save</p>
                        
                    </div>
                    <p style={{fontSize: "12px"}}>{month === true ? "$2/mo" : "$20/yr"}</p>
                </div>
                </div>
                
                <div id="outercustomize">
                <div className="customize">
                    <button onClick={() => handleAddOnsPlan("customize")} type="checkbox" style={{width: "20px", height: "20px", justifySelf: "center", backgroundColor: addOnsPlan[2].type === true ? "blue" : "inherit"}}></button>
                    <div style={{textAlign: "start"}}>
                      <h2 style={{fontSize: "12px"}}>Customizable profile</h2>
                      <p style={{fontSize: "10px"}}>Access to multiplayer games</p>
                        
                    </div>
                    <p style={{fontSize: "12px"}}>{month === true ? "$1/mo" : "$10/yr"}</p>
                </div>
                </div>
            </div>
        </div>
        <div id={windowSize >= 577 ? "but" : "mobbut"}>
        <button id="back" style={{borderRadius: "10%", backgroundColor: "inherit", color: 'black'}}>Go back</button>
        <button id="next" onClick={handleNext} style={{borderRadius: "10%", backgroundColor: "darkblue", color: "white"}}>Next Step</button>
       </div>
       </div>
    )
}






export default AddOns;