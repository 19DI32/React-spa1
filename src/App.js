import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import About from './pages/about/about';
import {News} from './pages/news/news';
import {TopExchanges} from './pages/topExchanges/topExchanges';
import {Markets} from './pages/markets/markets';
import ForOFor from './pages/404';
import './App.css';
import Landing from'./pages/landing/Landing';
import {Coins} from './pages/coins/coins';

function App() {
  return (
    <Router>
    <div>
      <Header  />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News}/>
      <Route path="/topics" component={Topics} />
      <Route path="/coins" component={Coins} />
      <Route path="/topExchanges" component ={TopExchanges}/>
      <Route path="/markets" component = {Markets}/>
      <Route path="/landing" component = {Landing}/>
      <Route component={ForOFor}/>
      </Switch>
    </div>
  </Router>
  );
}
class ConvertElements extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      val:"",
      submit:"",
      data:""
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
    let url = 'https://min-api.cryptocompare.com/data/price?fsym='+val+'&tsyms='+val2;
    fetch(url).then(res=>res.json()).then(d=>this.setState({data:d}));
    //console.log(this.state.data);
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
        {Object.keys(this.state.data).map((key)=><p>{key+':'+this.state.data[key]}</p>)}
      </div>
    </div>
  )
}
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
  );
}
//import './App.css';
export default App;
