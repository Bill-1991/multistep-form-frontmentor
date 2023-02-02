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
  
  const [info, setInfo] = useState(true)
  const [plan, setPlan] = useState(false)
  const [addOns, setAddOns] = useState(false)
  const [summary, setSummary] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [month, setMonth] = useState(true)
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
  ]);
  const [plans, setPlans] = useState([{id: "arcade", type: false, month: month, img: arcade, title: "Arcade", monthlyPrice: 9, yearlyPrice: 90},
                                     {id: "advanced", type: false, month: month, img: advanced, title: "Advanced", monthlyPrice: 12, yearlyPrice: 120},
                                     {id: "pro", type: false, month: month, img: pro, title: "Pro", monthlyPrice: 15, yearlyPrice: 150}])
  
  const [addOnsPlan, setAddOnsPlan] = useState([{id: "online", type: false, title: "Online service", monthlyPrice: 1, yearlyPrice: 10},
                                                {id: "storage", type: false, title: "Larger storage", monthlyPrice: 2, yearlyPrice: 20},
                                                {id: "customize", type: false, title: "Customizable profile", monthlyPrice: 2, yearlyPrice: 20}])
  
  const [finalPlan, setFinalPlan] = useState({})
  const [finalAddOns, setFinalAddOns] = useState([])
  
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
  console.log(size)
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
    }else{
      setMonth(true)
    }
    console.log(month)
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
    }else if ( id === "choice-4" && summary === false) {
      setInfo(false)
      setPlan(false)
      setAddOns(false)
      setSummary(true)
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
    }else if (addOns === true && summary === false){
      setInfo(false)
      setPlan(false)
      setAddOns(false)
      setSummary(true)
    }
  }

  return (
    <div className={size}>
      <NavDesktop windowSize={windowSize} handleAll={handleAll} />
      {info === true ? <Info windowSize={windowSize} handleNext={handleNext}/> : plan === true ? <Plan windowSize={windowSize} handleNext={handleNext} month={month} handleMonth={handleMonth} plans={plans} handlePlans={handlePlans}/> : addOns === true ? <AddOns windowSize={windowSize} handleNext={handleNext} month={month} addOnsPlan={addOnsPlan} handleAddOnsPlan={handleAddOnsPlan} /> : summary === true ? <Summary windowSize={windowSize} handleConfirm={handleConfirm} month={month} finalPlan={finalPlan} finalAddOns={finalAddOns} /> : confirm === true ? <Thanks img={img}/> : undefined}  
    </div>
  );
}

export default App;
