import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import About from './pages/about/about';
import {News} from './pages/news/news';
import {TopExchanges} from './pages/topExchanges/topExchanges';
import {Markets} from './pages/markets/markets';
import ForOFor from './pages/404';
import CoinCard from './components/CoinCard';
import './App.css';
import Landing from'./pages/landing/Landing';
import Coins from './pages/coins/Coins';
import { Line, Bar } from 'react-chartjs-2';

class App extends React.Component {

  state = {
    coinsList: [],
  };

  filterListById = (list, id) => (
    list.find(coin => coin.Id === id)
  );

  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/all/coinlist')
      .then(responce => responce.json())
      .then(responce => this.setState({ coinsList: Object.keys(responce.Data).slice(0, 10).map(key => responce.Data[key]) }))
      .catch(err => alert(err));
  }


  render() {
    const { coinsList } = this.state;
  return (
    <Router>
    <div>
      <Header  />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News}/>
      <Route path="/topics" component={Topics} />
      <Route exact path="/coins" component={props => <Coins {...props} coinsList={coinsList} />} />
      <Route path="/topExchanges" component ={TopExchanges}/>
      <Route path="/markets" component = {Markets}/>
      <Route path="/landing" component = {Landing}/>
      <Route
              path="/coins/:id"
              component={props => (
                <CoinCard {...props} coin={this.filterListById(coinsList, props.match.params.id)} />
              )}
            />
      <Route component={ForOFor}/>
      </Switch>
    </div>
  </Router>
  );
}
}
class ConvertElements extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      val:"",
      submit:"",
      data:{},
      isFetching:true,
      chartData:[],
      chartOptions:[]
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCRP = this.onChangeCRP.bind(this);
   // this.onChangeCUR = this.onChangeCUR.bind(this);

  };
  onSubmit(e) {
    let val = document.querySelector(".ApiCall").value;
    let val2 = document.querySelector(".ApiCall2").value;
    this.setState({
      submit: val
    });
    let url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+val+'&tsyms='+val2;
    fetch("https://min-api.cryptocompare.com/data/histohour?fsym="+val+"&tsym="+val2+"&limit=10").then(data=>data.json()).then((data)=>{
      let chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            //fontColor: 'black'
          }
        }
      };
      this.setState({chartOptions:chartOptions});
    
    let arr = data.Data;
    let chartData = {
        labels:arr.map(elem=>{let date= new Date(elem.time);return date.getHours()}),
        datasets:[{
            fill:false,
            data:arr.map(elem=>elem.close),
            backgroundColor:"red",
            borderColor:"orange",
        }]
        
    };
    //console.log(chartData);
    this.setState({isFetching:false,chartData:chartData});
})
    fetch(url).then(res=>res.json()).then(d=>this.setState({data:d.DISPLAY[val][val2]}));
    console.log(this.state.data);
  };
  onChangeCRP(e) {
    //console.log(e.target.value);
    this.setState({
      val:e.target.value
    })
  };
  render(){
  return(
    <div>
      <select className = "ApiCall" onChange={this.onChangeCRP}>
        <option value = "BTC">BTC</option>
        <option value = "ETH">ETH</option>
        <option value = "XRP">XRP</option>
        <option value = "LTC">LTC</option>
      </select>

      <select className = "ApiCall2" onChange={this.onChangeCUR}>
        <option value = "EUR">EUR</option>
        <option value = "USD">USD</option>
        <option value = "RUR">RUR</option>
        <option value = "UAH">UAH</option>
      </select>

      <button onClick = {this.onSubmit}>Submit</button>
      <div>
       
      </div>
      {!this.state.isFetching && 
      <div>
        <ExchangeCard valName = {this.state.data.FROMSYMBOL} price = {this.state.data.PRICE} market = {this.state.data.MARKET} openDay = {this.state.data.OPENDAY} highDay = {this.state.data.HIGHDAY}lowDay = {this.state.data.LOWDAY} ChangeFor24H = {this.state.data.CHANGEPCT24HOUR}/>
        <Line
    data={this.state.chartData}
    options={this.state.chartOptions}/>
      </div>}
    </div>
  )
}
}
function ExchangeCard(props) {
    return(
      <div className = "CurrensyCrad">
        <p>{props.valName}: {props.price}</p>
        <p>Market: {props.market}</p>
        <p>Open day: {props.openDay}</p>
        <p>High in  day: {props.highDay}</p>
        <p>Low in day: {props.lowDay}</p>
        <p>Change for 24 hour: {props.ChangeFor24H}</p>
      </div>
    )
}

function Home() {
  return (
  <>
  <h2>Home</h2>
  <div className = "Container">
    <ConvertElements/>
    

  </div>
  </>);
}


function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <>
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/coins">Coins</Link>
      </li>
      <li>
        <Link to="/topExchanges">Top Exchanges</Link>
      </li>
      <li>
        <Link to ="/landing">Landing</Link>
      </li>

      <li>
        <Link to ="/markets">Markets</Link>
      </li>
    </ul>
    </>


  );
}
//import './App.css';
export default App;
