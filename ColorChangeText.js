import React,{Component} from 'react'
class ColorChangeText extends Component{
    constructor(props){
        super(props);
        this.state = {
            color:'#ff00ff',
        }
    }
    redHandler=()=>{
        this.setState({color:'#ff0000'})
    }
    greenHandler=()=>{
        this.setState({color:'#00ff00'})
    }
    blueHandler=()=>{
        this.setState({color:'#0000ff'})
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.state.color}}>Textcolor</h1>
                <button type='button' onClick={this.redHandler}>red</button>&nbsp;&nbsp;
                <button type='button' onClick={this.greenHandler}>green</button>&nbsp;&nbsp;
                <button type='button' onClick={this.blueHandler}>blue</button>
            </div>
        );
    }
}
export default ColorChangeText;