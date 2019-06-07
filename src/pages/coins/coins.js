import React from 'react';
import './coins.css';
import CoinsData from './coinsList.json';
import PropTypes from 'prop-types';
class Coins extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return(
            <div className = "coins_container">
                <Header text = "Coins header"/>
                <Input />
                <CoinList2 />
            </div>
        )
    }
}

const Input = (props)=> {
    return (
        <div>
            <span>Search</span>
            <input placeholder ="Type to Search"/>
        </div>
    )
}

const Header = (props)=>{
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

const CoinBTN = (props)=> {
    return (
        <div>
            <span>{props.name}</span>
            <img src = {props.src}/>
        </div>
    )
}

const CoinETH = (props)=> {
    return (
        <div>
            <span>{props.name}</span>
            <img src = {props.src}/>
        </div>
    )
}

const CoinXRP = (props)=> {
    return (
        <div>
            <span>{props.name}</span>
            <img src = {props.src}/>
        </div>
    )
}
const CoinLTS = (props)=> {
    return (
        <div>
            <span>{props.name}</span>
            <img src = {props.src}/>
        </div>
    )
}

const CoinsList = (props)=>{
    return(
        <div className = "coins__list">
            <CoinBTN name = "BTN" src = "#"/>
            <CoinLTS name = "LTS" src = "#"/>
            <CoinETH name = "ETH" src = "#"/>
            <CoinXRP name = "XRP" src = "#"/>
        </div>
    )
}
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

class CoinList2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Object.values(CoinsData.Data)
        }
    }

    render() {
        return(
            <div className = "coin-container">
                {this.state.data.map((val)=><CoinKard text = {val.CoinName} href = {val.Url} src = {val.ImageUrl} key = {val.Id}/>)}
            </div>
        )
    }
} 

CoinKard.propTypes = {
    text: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default Coins;