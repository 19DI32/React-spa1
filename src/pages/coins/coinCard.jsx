 import React from "react";
 import logProps from "../../hok/withLogProps";
 
 const CoinKard = (props)=> {
    return (
        <div>
            <p>{props.text}
            </p>
            <p>
            <a href= {"https://www.cryptocompare.com"+ props.href}><img src ={"https://www.cryptocompare.com/"+ props.src} /> </a>
            </p>        
        </div>
    )
}
export default logProps(CoinKard);