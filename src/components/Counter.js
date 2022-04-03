import React from "react";
import Count from "./Count"

export default function Counter(){

    function RandomColors(){
        const num1 = (Math.floor(Math.random()*100));
        const num2 = (Math.floor(Math.random()*100));
        const num3 = (Math.floor(Math.random()*100));
        let changes = `rgb(${num1}, ${num2}, ${num3})`;
        document.body.style.backgroundColor = changes;
        console.log("Redundant")
    }

    const [numberCount, setnumberCount] = React.useState(0)
    function add(){
        setnumberCount(function(prevCount){
            return prevCount + 1
        })
    }
    function subtract()
    {
        setnumberCount(function(prevCount){
            return prevCount - 1
        })
    }     
    return (
        <div className="counter" onClick={RandomColors}>
            <div className="counterbody">
                <button className="button--plus" onClick={add} placeholder="Up">+</button>
                <button className="button--minus" onClick={subtract} placeholder="Down">-</button>
            </div>
            <Count number = {numberCount} />
        </div>
    )
}


// export default function Counter(){
//     const [numberCount, setnumberCount] = React.useState(0)
//     function add(){
//         setnumberCount(numberCount + 1)
//     }
//     function subtract()
//     {
//         setnumberCount(numberCount - 1)
//     }     
//     return (
//         <div className="counter">
//             <div>
//                 <button onClick={add} placeholder="Up">+</button>
//                 <button onClick={subtract} placeholder="Down">-</button>
//             </div>
//             <input placeholder="count"></input>
//         </div>
//     )
// }