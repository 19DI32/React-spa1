import React from 'react';
import './coins.css';
import logProps from '../../hok/withLogProps';
//import CoinsData from './coinsList.json';
import PropTypes from 'prop-types';
import CoinKard from "./coinCard";
export class Coins extends React.Component {
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

export const Input = (props)=> {
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



export class CoinList2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search:"",
            isFetching:true
        }
        this.filterCoins = this.filterCoins.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        fetch("https://min-api.cryptocompare.com/data/all/coinlist").then(data=>data.json()).then(data=>this.setState({data : Object.values(data.Data).slice(0,20),
        isFetching: false}));
    }
    filterCoins() {
        return this.state.data.filter(coin=>coin.CoinName.toLowerCase().includes(this.state.search.toLowerCase()));
    }
    onChange(e) {
        this.setState({search:e.target.value});
    }

    render() {
        if(this.state.isFetching) {
            return (<div>Loading ...</div>)
        }
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
    //key: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

//export default Coins;