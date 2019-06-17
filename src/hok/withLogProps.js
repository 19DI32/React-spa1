import React from 'react';

export default function logProps(WrComp) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.log(this.props);
            console.log(nextProps);
        }
        render() {
            return <WrComp {...this.props}/>
        }
    };
    
}