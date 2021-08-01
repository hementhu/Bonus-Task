import React, { Component } from 'react';
// import Badge from "react-bootstrap/Badge";

class Counter extends Component {
    state = {
        count : 0,
        names : ['kabali', 'kaala', 'sarpatta parambarai']
    }

    renderClasses() {
        if(this.state.names.length ===0) return <p>there arew no names</p>
        return <ul>
        {this.state.names.map(name => <li key={name}>{name}</li>)}
    </ul>
    }
    handleClick =() => {
        this.setState({count : this.state.count+1})
    }

    render() { 
        return (
        <div>
            
            <span className={this.getClasses()}>{this.formatCount()}</span>
            <button onClick ={this.handleClick} className = "btn btn-secondary btn-sm">Increment</button>
            {this.state.names.length===0 && "fill the names"} 
            {this.renderClasses()}
        </div>
        );
    }
    getClasses()
    {
        let classes = "badge bg-"
        classes+= this.state.count===0 ? "primary" : "warning"
        return classes
    }
    
    formatCount() {
        const {count} = this.state;
           return  count === 0 ? 'zero' : count;
    }
}
 
export default Counter;

