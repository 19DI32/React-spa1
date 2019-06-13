import React from 'react';
import './topExchanges.css';

export const TopExchanges = (props)=>{
    return(
        <div>
            <h2>TopExchanges</h2>
            <TopExchangesData/>
        </div>
    )
}

export class TopExchangesData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            data:[]
        };
    }
    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/top/exchanges?fsym=BTC&tsym=USD').then(data=>data.json()).then((data)=> {
            console.log(data.Data);
            this.setState({
                isLoading:false,
                data:data.Data
            })
        })
    }
    render () {
        if(this.state.isLoading) {
        return (
            <div>
                <h3>Loading...</h3>

            </div>
        )
    }
        else{
            return (
            <div>
               {this.state.data.map(elem =><ExchangesCard exchange = {elem.exchange} fromSymbol = {elem.fromSymbol} toSymbol = {elem.toSymbol} volume = {elem.volume24hTo}/>)}    
            </div>)
    }

}
}

function ExchangesCard(props) {
    return (
        <div className = "ExchangesCard">
            <h3>{"Exchange: "+ props.exchange}</h3>
            <h4>{"From Symbol: "+props.fromSymbol}</h4>
            <h4>{"To Symbol: "+props.toSymbol}</h4>
            <h4>{"volume: "+ props.volume}</h4>
        </div>
    )
}
//export default TopExchanges;