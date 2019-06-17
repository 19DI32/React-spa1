import React from 'react';

export default function checkNews(WrComponent) {
    return class extends React.Component {
    
    handlerCheckNews = ()=> {
        console.log(this.props.main);
        return this.props.main;
    }
    render() {
        return <WrComponent {...this.props} main = {this.handlerCheckNews()}/>
    }
    }
}