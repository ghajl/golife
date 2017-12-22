import React from 'react';
import Head from 'next/head'
import {colors as color} from '../util/colors';



const navbar = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,   
    fontWeight: 900,
    fontSize: '15px',
    fontFamily: '"Julius Sans One", sans-serif', 
    padding: '1em',
    
}
const authorName = {
    color: color.TITLE_AUTHOR,
}

const gameName = {
    color: color.TITLE_GAME,
}

const header = {
    margin: '0 auto',
    width: 250,
    height: 50,
    position: 'relative',
}

export default () => {
    return (
        <React.Fragment>
            <Head>
                <link rel='stylesheet' type='text/css' href='/static/headerssr.css' />
            </Head>
            <div style={header}>
                <div style={navbar}>
                    <div><span style={authorName}>John Conway`s</span>
                    <span style={gameName}>Game of Life</span></div>
                </div> 
                <div className="front"></div>
            </div>
        </React.Fragment>
    );
}  
