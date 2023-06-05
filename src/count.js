import React, { Component} from 'react';
import PropTypes  from 'prop-types';
class Input extends Component {
    constructor(props){
        super(props)
        this.setRef= this.setRef.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const {name, onChange}= this.props
        if(onChange){
            onChange(name, e.target.value)
        }
    }
    
    componentDidMount(){
       if(this.props.autoFoucs){
        this.ref.focus()
       }
    }
    setRef(ref){
        this.ref = ref
    }

    render() {
     const  {label, name, value, type, onChange} = this.props
        return (
            <div>
            <label>
             {label}
             <input id={`input_${name}`} onChange={this.handleChange} ref ={this.setRef}  value={value} type={type}></input>
            </label>
        
            </div>
        );
    }
}
Input.protoTypes = {
    label : PropTypes.string,
    name : PropTypes.string,
    type : PropTypes.string,
    value : PropTypes.string,
     autoFocus : PropTypes.bool,
     errorMessage : PropTypes.string,
     onChange : PropTypes.func
}
Input.defaultProp = {
    //onChange () => {}
}


export default Input;