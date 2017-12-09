import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Generation =({generationCount}) => {

    return (
	    <div className="generation">
	      	{generationCount}
			<style jsx global>{`
                 .generation {
					color: rgba(255,0,0,.8);
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
