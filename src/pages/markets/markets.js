import React from 'react';

export const Markets = (props)=>{
    return(
        <div>
            <MarketsData/>
        </div>
    )
};

export class MarketsData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            data:[]
        }

    }
    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD').then(data=>data.json()).then((data)=> {
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
    else {
        return(<div>{this.state.data.map(elem=>
            <MarketCard fullName = {elem.CoinInfo.FullName} 
            key = {elem.CoinInfo.Id} imgUrl = {elem.CoinInfo.ImageUrl} price = {elem.DISPLAY.USD.PRICE}market = {elem.DISPLAY.USD.MARKET}suplay = {elem.DISPLAY.USD.SUPPLY}/>)}</div>)
    }
}

}

function MarketCard(props) {
    return (
        <div className = "MarketCard">
            <p>
                <header>{props.fullName}</header>
                <p><img src = {"https://www.cryptocompare.com"+ props.imgUrl}/></p>
                <ul>
                    <li>{"Price: "+ props.price}</li>
                    <li>{"Market: " + props.market}</li>
                    <li>{"Suplly: "+props.suplay}</li>
                </ul>

            </p>
            <h4>{"From Symbol: "+props.fromSymbol}</h4>
            <h4>{"To Symbol: "+props.toSymbol}</h4>
            <h4>{"volume: "+ props.volume}</h4>
        </div>
    )
}


//export default Markets; 