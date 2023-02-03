import './App.css';
import NavDesktop from "./components/Nav_desktop"
import Info from "./components/Info"
import Plan from "./components/Plan"
import { useState, useEffect } from 'react'
import arcade from "./assets/images/icon-arcade.svg"
import advanced from "./assets/images/icon-advanced.svg"
import pro from "./assets/images/icon-pro.svg"
import img from "./assets/images/icon-thank-you.svg"
import AddOns from './components/AddOns';
import Summary from './components/Summary';
import Thanks from './components/Thanks';


function App() {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [info, setInfo] = useState(true)
  const [plan, setPlan] = useState(false)
  const [addOns, setAddOns] = useState(false)
  const [summary, setSummary] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [month, setMonth] = useState(true)
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
  ]);
  const [plans, setPlans] = useState([{id: "Arcade", type: false, month: month, img: arcade, title: "Arcade", monthlyPrice: 9, yearlyPrice: 90},
                                     {id: "Advanced", type: false, month: month, img: advanced, title: "Advanced", monthlyPrice: 12, yearlyPrice: 120},
                                     {id: "Pro", type: false, month: month, img: pro, title: "Pro", monthlyPrice: 15, yearlyPrice: 150}])
  
  const [addOnsPlan, setAddOnsPlan] = useState([{id: "online", type: false, title: "Online service", monthlyPrice: 1, yearlyPrice: 10},
                                                {id: "storage", type: false, title: "Larger storage", monthlyPrice: 2, yearlyPrice: 20},
                                                {id: "customize", type: false, title: "Customizable profile", monthlyPrice: 2, yearlyPrice: 20}])
  
  const [finalPlan, setFinalPlan] = useState({})
  const [finalAddOns, setFinalAddOns] = useState([])
  const [onEmptyPlan, setOnEmptyPlan] =useState(false)
  const [emptyPlan, setEmptyPlan] = useState("")
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  
  const size = windowSize >= 577 ? "multiline-form" : "multine-form-mob"
  
  const handleName = (e) => {
     setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
 }

 const handleNumber = (e) => {
  setNumber(e.target.value)
}

  const handleConfirm = () => {
    setConfirm(true)
    setInfo(false)
    setPlan(false)
    setAddOns(false)
    setSummary(false)
  }

  const handlePlans = (id) => {
     const plan = plans.filter(plan => plan.id === id)
     plan[0].type = true
     const arr = [...plans]
     for(let i in arr) {
      if(arr[i].id === plan[0].id) {
        arr[i] = plan[0]
      }else{
        arr[i].type = false
      }
     }
    setPlans(arr)
    let final = {title: plan[0].title, price: month === true ?  plan[0].monthlyPrice : plan[0].yearlyPrice}
    setFinalPlan({...final})
  }

  const handleAddOnsPlan = (id) => {
    const addon = addOnsPlan.filter(plan => plan.id === id)
    if(addon[0].type === false) {
      addon[0].type = true
     }else {
      addon[0].type = false
     }

    const arr = [...addOnsPlan]
    for(let i in arr) {
      if(arr[i].id === addon[0].id) {
        arr[i] = addon[0]
        }
      }

    setAddOnsPlan(arr)

    let newArr = []

    for (let i in arr){
      if(arr[i].type === true){
        let finalAddOn = {title: arr[i].title, price: month === true ? arr[i].monthlyPrice : arr[i].yearlyPrice}
        if(newArr.indexOf(finalAddOn) === -1){
          newArr = [...newArr, finalAddOn]
          console.log(newArr)
          setFinalAddOns([...newArr])
         }
      }
    }
    
  }

  const handleMonth = () => {
    if(month === true){
      setMonth(false)
      if (finalPlan.title !== undefined){
        let newPrice = plans.filter((plan) => plan.id === finalPlan.title)[0].yearlyPrice
        let newFinalPlan ={...finalPlan}
        newFinalPlan.price = newPrice
        setFinalPlan(newFinalPlan)
      }
      if (finalAddOns.length > 0) {
        let newFinalAddOns = [...finalAddOns]
        for (let i in addOnsPlan) {
          console.log(addOnsPlan[i].title)
          for (let j in newFinalAddOns) {
            console.log(newFinalAddOns[j].price)
            if (addOnsPlan[i].title === newFinalAddOns[j].title) {
              newFinalAddOns[j].price = addOnsPlan[i].yearlyPrice
            }
          }
        }
        console.log(newFinalAddOns)
        setFinalAddOns(newFinalAddOns)
      }
    }else{
      setMonth(true)
      if (finalPlan.title !== undefined){
        let newPrice = plans.filter((plan) => plan.id === finalPlan.title)[0].monthlyPrice
        let newFinalPlan ={...finalPlan}
        newFinalPlan.price = newPrice
        setFinalPlan(newFinalPlan)
      }
      if (finalAddOns.length > 0) {
        let newFinalAddOns = [...finalAddOns]
        for (let i in addOnsPlan) {
          for (let j in newFinalAddOns) {
            if (addOnsPlan[i].title === newFinalAddOns[j].title) {
              newFinalAddOns[j].price = addOnsPlan[i].monthlyPrice
            }
          }
        }
        console.log(newFinalAddOns)
        setFinalAddOns(newFinalAddOns)
      }
    }
  }

  const handleAll = (id) => {
  if (id === "choice-1" && info === false) { 
      setInfo(true)
      setPlan(false)
      setAddOns(false)
      setSummary(false)
    }else if(id === "choice-2" && plan === false) { 
      setInfo(false)
      setPlan(true)
      setAddOns(false)
      setSummary(false)
      
    }else if (id === "choice-3" && addOns === false) {
      setInfo(false)
      setPlan(false)
      setAddOns(true)
      setSummary(false)
      console.log(finalPlan.title)
      if (finalPlan.title === undefined) {
        setOnEmptyPlan(true)
        setEmptyPlan("You can't procceed unless you choose a plan")
        setInfo(false)
        setPlan(true)
        setAddOns(false)
        setSummary(false)
        setTimeout(() => {setEmptyPlan("")}, 1500)
        
      }else{
        setOnEmptyPlan(false)
        setInfo(false)
        setPlan(false)
        setAddOns(true)
        setSummary(false)
        setEmptyPlan("")
      }
      
    }else if ( id === "choice-4" && summary === false) {
      setInfo(false)
      setPlan(false)
      setAddOns(false)
      setSummary(true)
      if (finalPlan.title === undefined) {
        setOnEmptyPlan(true)
        setEmptyPlan("You can't procceed unless you choose a plan")
        setInfo(false)
        setPlan(true)
        setAddOns(false)
        setSummary(false)
        setTimeout(() => {setEmptyPlan("")}, 1500)
        
      }else{
        setOnEmptyPlan(false)
        setInfo(false)
        setPlan(false)
        setAddOns(false)
        setSummary(true)
        setEmptyPlan("")
    }
  
  }
  }

  const handleNext = () => {
    if (info === true && plan === false){
      setInfo(false)
      setPlan(true)
      setAddOns(false)
      setSummary(false)
    }else if (plan === true && addOns === false){
      setInfo(false)
      setPlan(false)
      setAddOns(true)
      setSummary(false)
      if (finalPlan.title === undefined) {
        setOnEmptyPlan(true)
        setEmptyPlan("You can't procceed unless you choose a plan")
        setInfo(false)
        setPlan(true)
        setAddOns(false)
        setSummary(false)
        setTimeout(() => {setEmptyPlan("")}, 1500)
        
      }else{
        setOnEmptyPlan(false)
        setInfo(false)
        setPlan(false)
        setAddOns(true)
        setSummary(false)
        setEmptyPlan("")
      }
    }else if (addOns === true && summary === false){
      setInfo(false)
      setPlan(false)
      setAddOns(false)
      setSummary(true)
    }
  }

  const handleBack = () => {
    if (summary === true && addOns === false){
      setInfo(false)
      setPlan(false)
      setAddOns(true)
      setSummary(false)
    }else if (addOns === true && plan === false) {
      setInfo(false)
      setPlan(true)
      setAddOns(false)
      setSummary(false)
    }
    else if (plan === true && info === false){
      setInfo(true)
      setPlan(false)
      setAddOns(false)
      setSummary(false)
    }
  }

  return (
    <div className={size}>
      {onEmptyPlan === false ? undefined : <p id="empty">{emptyPlan}</p>}
      <NavDesktop windowSize={windowSize} info={info} plan={plan} addOns={addOns} summary={summary} handleAll={handleAll} />
      {info === true ? <Info name={name} handleName={handleName} email={email} handleEmail={handleEmail} number={number} handleNumber={handleNumber} windowSize={windowSize} handleNext={handleNext}/> : plan === true ? <Plan handleBack={handleBack} windowSize={windowSize} handleNext={handleNext} month={month} handleMonth={handleMonth} plans={plans} finalPlan={finalPlan} handlePlans={handlePlans}/> : addOns === true ? <AddOns finalAddOns={finalAddOns} handleBack={handleBack} windowSize={windowSize} handleNext={handleNext} month={month} addOnsPlan={addOnsPlan} handleAddOnsPlan={handleAddOnsPlan} /> : summary === true ? <Summary handleBack={handleBack} windowSize={windowSize} handleConfirm={handleConfirm} month={month} finalPlan={finalPlan} finalAddOns={finalAddOns} /> : confirm === true ? <Thanks img={img}/> : undefined}  
    </div>
  );
}

export default App;
