import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Generation =({generationCount}) => {

	const generation = ("0000000" + generationCount).substr(-7).replace(/(\w)(\w)(\w)(\w)/,'$1:$2$3$4:');

    return (
	    <div className="generation">
	      	{generation}
			<style jsx global>{`
                 .generation {
					color: rgba(1,111,185,.8);
					font-size: 20px;
			        text-align: left;
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
