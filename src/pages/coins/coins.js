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
                <CoinList2 />
            </div>
        )
    }
}

const Input = (props)=> {
    return (
        <div className = "Input-field">
            <span>Search</span>
            <input onChange = {props.handler} placeholder ="Type to Search"/>
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
            data: Object.values(CoinsData.Data).slice(0,20),
            search:""
        }
        this.filterCoins = this.filterCoins.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    filterCoins() {
        return this.state.data.filter(coin=>coin.CoinName.toLowerCase().includes(this.state.search.toLowerCase()));
    }
    onChange(e) {
        this.setState({search:e.target.value});
    }

    render() {
        return(
            <>
            <Input handler = {this.onChange}/>
            <div className = "coin-container">
                {this.filterCoins().map((val)=><CoinKard text = {val.CoinName} href = {val.Url} src = {val.ImageUrl} key = {val.Id}/>)}
            </div>
            </>
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