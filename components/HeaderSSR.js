import React from 'react';
// import { NavLink } from 'react-router-dom';
// import injectSheet from 'react-jss';
// const isSmall = props.screen.width < 768;
// import browserHistory from 'history/createBrowserHistory';
import Link from 'next/link'
// import { withStyles } from 'material-ui/styles';
// import withRoot from '../components/withRoot';
// const history = browserHistory();



const styles = {
    nav: {

        
        display: 'flex',
        flexWrap: 'wrap',
        'text-transform': 'uppercase',
        justifyContent: 'space-between',
        '@global a': {
            color: '#A9A9A9',
            
            display: 'block',
            padding: '1em',
            transition: '.2s',
            fontFamily: 'Julius Sans One', 
            fallbacks:{
                fontFamily: 'sans-serif',
            },
            '&:hover': {
                color: '#A2D729',
                // background: '#3b80d1',  
            }
        },
        
        
    },
        navbar: {
        overflow: 'hidden',
        boxShadow: [0, 3, 15, -6, '#222'],
        position: 'fixed',
        top: 0,
        width: '100%',
         'z-index': 3,
        backgroundColor:"#fff",
    },
    title: {

        fontWeight: 900,
'text-transform': 'none',
        fontSize: '1.1em',
        '@media (min-width: 768px)': {
            fontSize: '1.5em',
        },
        '@media (min-width: 480px)': {
            'text-transform': 'uppercase',
        }
    },
    authorName: {
        color: '#011627',
    },
    gameName: {
        color: '#A2D729',
    },
    // about: {
    //     display: 'flex',
    //     fontWeight: 900,
    //     '@global a': {
    //         '&:hover': {
    //             color: '#016FB9',
    //             // background: '#3b80d1',  
    //         }
    //     },     

    //     fontSize: '1.1em',
    //     '& .active': {
    //         color: '#016FB9',
    //     },
    //     '@media (min-width: 768px)': {
    //         fontSize: '1.5em',
    //     }
    // }
}

const HeaderSSR = () => {
        // const classes = props.classes;
        
        return (
            <div>
        <div className="navbar">
        <div className="nav">
            
                <div className="title"><span className="authorName">John Conway`s</span>
                <span className="gameName">Game of Life</span></div>
            
          
        </div> 
        </div> 

        </div> 
    );
}  


export default HeaderSSR;