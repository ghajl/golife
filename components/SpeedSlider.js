// import 'rc-slider/assets/index.css';
// import styleSheet from '../statics/rc-slider/index.css';
// import Tooltip from 'rc-tooltip';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import Head from 'next/head';
import Handle from './Handle';
// import Slider from 'react-rangeslider'
// import Slider from 'react-bootstrap-slider';
// import ReactBootstrapSlider from 'react-bootstrap-slider';



const style = {    
    width: 60,
    height: 40,
    // marginTop: 20,
    // marginLeft: 20
};
const styleSmall = {    
    // width: 52,
    // height: 32,
    // paddingTop: 40,
    // marginLeft: 20
};




const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (

      <Handle value={value} style={{borderColor: 'black',}} {...restProps} />

  );
};


export default class SpeedSlider extends Component {


    shouldComponentUpdate(nextProps) {
        return nextProps.value !==  this.props.value;
    }

    render() {
        return (
          <div style={style}>

            <Slider
            
              min={2}
              max={60}
              step={2}
              value={this.props.value}
               handleStyle={{borderColor: 'black',}}
              onChange={(v) => this.props.onChange(v)}
              handle={handle}
            />
            
          </div>
        )

    }

    
}

SpeedSlider.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

        // return ( 
        // <div>
        // {this.props.size == 'small'? (
        //     <Slider style={styleSmall} min={2} max={60} step={2} handleStyle={{borderColor: 'black',}} value={this.props.value} handle={handle}  onChange={(e,v) => this.props.onChange(e,v)}/>
        // ) : (
        //     <Slider style={style} min={2} max={60} step={2} value={this.props.value} handle={handle} onChange={(v) => this.props.onChange(v)}/>
        // )}
        // </div>
        
        // );