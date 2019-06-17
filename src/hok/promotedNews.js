import React from 'react';
export default function promotedNews(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                check:true,
                promoted:true
            }
        }
        
        render() {
            return <WrappedComponent  style = {this.state.style.promoted} {...this.props}/>
        }
    }
    
}