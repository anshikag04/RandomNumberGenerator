import { useState } from 'react';
import './Card.css'
function Card() {

    let [minVal, setMinVal] = useState(0)
    let [maxVal, setMaxVal] = useState(10)
    let [value, setValue] = useState(4)
    function handleMinValChange(event) {
        if (Number(event.target.value) >= maxVal) {
            setMinVal(maxVal - 1)
        }
        else {
            setMinVal(Number(event.target.value))
        }
    }

    function handleMaxValChange(event) {
        if (Number(event.target.value) <= minVal) {
            setMaxVal(minVal + 1)
        }
        else {
            setMaxVal(Number(event.target.value))
        }
    }
    function generateNumber() {
        let randomNum = Math.floor(Math.random() * (maxVal + 1));
        if (randomNum < minVal) {
            generateNumber()
        }
        else {
            setValue(randomNum)
        }
    }
    return (
        <div>

            <div className="card">
                <div className="input-field" >
                    <div className="min-value">
                        Enter Minimum Value:
                <input type="number" value={minVal} onChange={(event) => { handleMinValChange(event) }} />
                    </div>

                    <div className="max-value">
                        Enter Maximum Value:
                <input type="number" value={maxVal} onChange={(event) => { handleMaxValChange(event) }} />
                    </div>
                </div>
                <button className="btn" onClick={generateNumber} >Generate</button>
                <div className="value">VALUE : {value}</div>
            </div>
        </div>
    )
}
export default Card;