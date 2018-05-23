import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {colors as color} from '../util/colors';


const Generation =({generationCount}) => {

    return (
  	    <div className="generation">
  	      	{generationCount}
  			<style jsx global>{`
            .generation {
      				color: ${color.GENERATION};
      				font-size: 1.5em;
  		        text-align: right;
            }
                       
        `}</style>
      	</div>
    );
}
const mapStateToProps =({generationCount}) => ({generationCount});

export default (connect(mapStateToProps)(Generation));


Generation.propTypes = {
    generationCount: PropTypes.number.isRequired,
};
