import React from "react";
import './clock.css';


class Clock extends React.Component{
    timerId = 0;
    
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            day: true
        };
        console.log("Constructor Called")
    }

    tick() {
        console.log('tick called')
        this.setState({
            date: new Date(),
            day: this.state.date <= 17,
        });
    }


    componentDidMount(){
        console.log("ComponentDidMount Called")
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000);
    }

    render(){
        console.log("Render Called")
        return(
        <div className={`clock ${ !this.state.day? 'night': ''}`}>
                <h1>Hello, World</h1>
                <h2>It's {this.state.date.toLocaleTimeString()} </h2>
                
            </div>
        ); 
    }
    componentDidUpdate(){
        if (this.state.day) {
            console.log('Good Morning');
        }else {
            console.log('Good Night')
        }
    }

    componentWillUnmount(){
        console.log('componentwillunmount called')
        clearInterval(this.timerId);
    }
}






// function Clock (props) {
//     return(
//         <div>
//          <h1>Hello, World</h1>
//          <h2>It's {props.date.toLocaleTimeString()} </h2>
//         </div>
//     )
// }

export default Clock;