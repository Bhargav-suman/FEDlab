import React,{Component} from "react";

export default class DigitalClock extends Component{
    constructor(props){
        super(props);
        this.state = {
            time:"",
        }
    }

    componentDidMount(){
        this.tick();
    }
    tick=()=>{
        var d = new Date();
        const hr = d.getHours();
        const mn = d.getMinutes();
        const sc = d.getSeconds();
        const updatedTime = `${hr}:${mn}:${sc}`
        this.setState({time:updatedTime});
    };

    componentDidUpdate(prevProps,prevState){
        if(this.state.time !== prevState.time){
            this.interval = setInterval(()=>{
                this.tick();
            },1000)
        }
    }
}