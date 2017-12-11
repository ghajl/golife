import React from 'react';


const navbarStyle = {
    textAlign: 'center',
    fontWeight: 900,
    'text-transform': 'none',
    fontSize: '1.1em',
    fontFamily: 'Julius Sans One', 
    fallbacks:{
        fontFamily: 'sans-serif',
    },
    padding: '1em',
}

const authorNameStyle = {
    color: '#011627'
}

const gameNameStyle = {
    color: '#A2D729'
}

export default () => {
        return (
            <div style={navbarStyle}>
                <div><span style={authorNameStyle}>John Conway`s</span>
                <span style={gameNameStyle}>Game of Life</span></div>
            </div> 
    );
}  
