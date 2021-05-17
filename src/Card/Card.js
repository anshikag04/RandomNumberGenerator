import { useEffect, useState } from 'react';
import './Card.css'
function Card () {
    
    let [minVal, setMinVal] = useState(0)
    let [maxVal, setMaxVal] = useState(10)
    let [value, setValue] = useState(4)
    useEffect(() => {
        if(minVal<0){
            setMinVal(0)
        }
        if(minVal>maxVal){
            setMinVal(maxVal-1)
        }
    },[minVal])
    useEffect(() => {
        if(maxVal<0) {
            setMaxVal(0)
        }
        if(maxVal<minVal) {
            setMaxVal(minVal+1)
        }
    }, [maxVal])
    function generateNumber() {
        let randomNum = Math.floor(Math.random() * (maxVal+1));
        if(randomNum<minVal){
            generateNumber()
        }
        else{
            setValue(randomNum)
        }
        }
    return(
        <div>
            
            <div className="card">
            <div className="input-field" >
                <div className="min-value">
                Enter Minimum Value:
                <input type="number" value={minVal} onChange={(event) => {setMinVal(Number(event.target.value))}} />
                </div>
            
                <div className="max-value">
                Enter Maximum Value:
                <input type="number" value={maxVal} onChange={(event) => {setMaxVal(Number(event.target.value))}} />
                </div>
            </div>
            <button className="btn" onClick={generateNumber} >Generate</button>
            <div className="value">VALUE : {value}</div>
            </div>
        </div>
    )
}
export default Card;