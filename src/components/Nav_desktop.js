import "../App.css"
import bg from "../assets/images/bg-sidebar-desktop.svg"
import bgmob from "../assets/images/bg-sidebar-mobile.svg"

const NavDesktop = ({ handleAll , windowSize, info, plan, addOns, summary}) => {
    const choices = [{id: "choice-1", num: 1, step: "STEP 1", title: "YOUR INFO", backgroundColor: info === true ? "black" : "rgba(0,0,0,0)"},
                     {id: "choice-2", num: 2, step: "STEP 2", title: "SELECT PLAN", backgroundColor: plan === true ? "black" : "rgba(0,0,0,0)"},
                     {id: "choice-3", num: 3, step: "STEP 3", title: "ADD-ONS", backgroundColor: addOns === true ? "black" : "rgba(0,0,0,0)"},
                     {id: "choice-4", num: 4, step: "STEP 4", title: "SUMMARY", backgroundColor: summary === true ? "black" : "rgba(0,0,0,0)"}]

    return(
        <div className={windowSize >= 577 ? "navdesk" : "navmob"} style={{backgroundImage: `url(${windowSize >= 577 ? bg : bgmob})`, backgroundRepeat: "no-repeat"}}>
            <div className="choices">
            {choices.map(choice => <div id={choice.id} key={choice.id} >
                <button onClick={() => handleAll(choice.id)} style={{color: "white", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: choice.backgroundColor, justifySelf: "center"}} >{choice.num}</button>
                <div id="steps">
                    <p>{choice.step}</p>
                    <h1>{choice.title}</h1>
                </div>
            </div>)}
            </div>
        </div>
    )
}


export default NavDesktop;

//
//
//
//