import React,{useState} from 'react'
function BMICalc(){
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);
    const [name,setName] = useState("");

    const calculateBMI=()=>{
        var heightSqared = (height/100 * height/100);
        var bmi = weight/heightSqared;
        if(bmi < 16){
            window.alert("Hi.."+name+"...you are completely underweight")
        }
        else if(bmi>= 16 && bmi < 17){
            window.alert("Hi.."+name+"...you are completely underweight")
        }
        else if(bmi>= 17 && bmi < 18.5){
            window.alert("Hi.."+name+"...you are completely underweight")
        }
        else if(bmi>= 18.5 && bmi <= 24.99){
            window.alert("Hi.."+name+"...you are in healthyweight")
        }
        else if(bmi>= 15 && bmi <= 29.99){
            window.alert("Hi.."+name+"...you are overweight")
        }
        else if(bmi>= 30){
            window.alert("Hi.."+name+"...you are obese")
        }
        else if(bmi<18.5){
            window.alert("Hi.."+name+"...you are completely underweight")
        }
        bmi = Math.round(bmi*100)/100;
    }
    const submitMe = (e) =>{
        e.preventDefault();
        calculateBMI();
    }
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleHeight = (e) =>{
        setHeight(e.target.value)
    }
    const handleWeight = (e) =>{
        setWeight(e.target.value)
    }
    return(
        <div>
            <h1>BMI calculator</h1>
            <form onSubmit={submitMe}>
                <label>please enter your name</label>
                <input type='text' name="name" value={name} onChange={handleName}/>
                <br/><br/>
                <label>enter your height in cm</label>
                <input type='text' name="height" value={height} onChange={handleHeight}/>
                <br/><br/>
                <label>enter your weight in kg</label>
                <input type='text' name="weight" value={weight} onChange={handleWeight}/>
                <br/><br/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}
export default BMICalc;