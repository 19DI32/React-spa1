import React from 'react';

export default function stylyshInput(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                check:true,
                
                
            }
        }
        
        render() {
            return <WrappedComponent  style = {this.state.style.default} {...this.props}/>
        }
    }
    
}