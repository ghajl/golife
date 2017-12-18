import React from 'react';
import Head from 'next/head'


const container = {
    // textAlign: 'center',
    width: '100%',
}

const navbar = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,   
    fontWeight: 900,
    // text-transform: none;
    fontSize: '15px',
    fontFamily: 'Julius Sans One', 
    fallbacks:{
        fontFamily: 'sans-serif',
    },   
    padding: '1em',
    
}
const authorName = {
    color: '#011627',
}

const gameName = {
    color: '#A2D729',
}

const header = {
    margin: '0 auto',
    width: 250,
    height: 50,
    position: 'relative',
}

export default () => {
        // let rAF = null;
        // let i = 0;
        // let el = null;
        // let stopped = false;
 
        // function move(elem){
        //     if(elem || el && !stopped) {

        //         if(!el) el = elem;
        //         el.style.left = i + 'px';
        //         i += 5
        //         if(i > 300){
        //             stopped = true
        //             cancelAnimationFrame(rAF);
        //         }

        //         rAF = requestAnimationFrame(() =>{move()}); 
        //     } 
        // }

        return (
            <div style={container}>
                <Head>
                  
                    <link rel='stylesheet' type='text/css' href='/static/headerssr.css' />
                </Head>
                <div style={header}>
                    <div style={navbar}>
                        <div><span style={authorName}>John Conway`s</span>
                        <span style={gameName}>Game of Life</span></div>
                    </div> 
                    <div className="front">
                    </div>
                </div>
            </div>
    );
}  
