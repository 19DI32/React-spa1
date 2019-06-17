import React from 'react';
export const NewsArticle = (props)=>{
    return (
        <div className = "NewsArticle">
            <header>{props.header}</header>
            <div>
                <p>
                    <img src = {props.imgUrl}/>
                </p>
                {props.main}
                <a href = {props.href}>{" Read more"}</a>
            </div>
        </div>
    )
}

export class NewsList extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           data:{},
           isFetching: true, 
           error: null 
       }
   }
   componentDidMount() {
       fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN").then(data=>data.json()).then((result)=>{
           this.setState({
               data : result,
               isFetching: false
           })
       }).catch(e => {
           console.log(e);
           this.setState({data: {}, isFetching: false, error: e });
         })
   };
   componentDidUpdate() {
       
   }
   render() {
       if(this.state.isFetching) {
           return (<div>Loading ...</div>)
       }
       else if (this.state.error) {
           return (<div>Error</div>)
       }
       else {
           return (
               <div className = "NewsContainer">
                   {console.log(this.state.data.Data)}
                   {this.state.data.Data.map((elem)=>
                       <NewsArticle key = {elem.id} header = {elem.title} main = {elem.body} href = {elem.url} imgUrl = {elem.imageurl}/>)}

               </div>
           )
       }
   }
}