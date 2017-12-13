import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import Head from 'next/head';
import Handle from './Handle';
import { connect } from 'react-redux';



const style = {    
    width: 60,
    height: 40,
};




const handle = ({ fps, ...Props }) => {
    return (

        <Handle value={fps} style={{borderColor: 'black',}} {...Props} />

  );
};

class SpeedSlider extends Component {

    componentWillMount() {
        this.props.onChange(this.props.fps)
    }

    render() { 
        return (
            <div style={style}>

                <Slider
                
                  min={2}
                  max={60}
                  step={2}
                  value={this.props.fps}
                  onChange={(v) => this.props.onChange(v)}
                  handle={handle}
                />
                
            </div>
        )

    }

}
const mapStateToProps =({fps}) => ({fps});

export default (connect(mapStateToProps)(SpeedSlider));

SpeedSlider.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}
