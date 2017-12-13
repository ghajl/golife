import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {colors as color} from '../helpers/colors';



const styles = {
    nav: {

        
        display: 'flex',
        flexWrap: 'wrap',
        'text-transform': 'uppercase',
        justifyContent: 'space-between',
        '@global a': {
            color: color.HEADER_LINK_INACTIVE,
            
            display: 'block',
            padding: '1em',
            transition: '.2s',
            fontFamily: 'Julius Sans One', 
            fallbacks:{
                fontFamily: 'sans-serif',
            },
            // '&:hover': {
            //     color: color.HEADER_LINK_ACTIVE,
            //     // background: '#3b80d1',  
            // }
        },
        
        
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
        color: color.TITLE_AUTHOR,
    },
    gameName: {
        color: color.TITLE_GAME,
    },
    about: {
        display: 'flex',
        fontWeight: 900,
        '@global a': {
            '&:hover': {
                color: color.HEADER_LINK_ACTIVE,
                // background: '#3b80d1',  
            }
        },     

        fontSize: '1.1em',
        
        '@media (min-width: 768px)': {
            fontSize: '1.5em',
        }
    },
    active: {
            color: color.HEADER_LINK_ACTIVE,
        },
}

const Header = (props) => {
        const classes = props.classes;
        const isSmall = props.screen.width < 480;
        console.log(props.url.pathname === '/')
        return (
        <div className={classes.nav}>
            {isSmall ? (
            <div className={classes.title}><Link prefetch href="/">
                
                <a><span className={classes.gameName}>GoL</span></a></Link>
            </div>
                ) : (
            <div ><Link prefetch href="/">
                <a className={classes.title}><span className={classes.authorName}>John Conway`s</span>
                <span className={classes.gameName}>Game of Life</span></a></Link>
            </div>
            )}
            
    		
            {props.url.pathname === '/' ? (
                <div className={classes.about}>
                <Link prefetch href="/"><a><span className={classes.active}>Play</span></a></Link>
                <Link prefetch href="/about"><a>Read</a></Link>
                </div>
            ) : (
                <div className={classes.about}>
                <Link prefetch href="/"><a>Play</a></Link>
                <Link prefetch href="/about"><a><span className={classes.active}>Read</span></a></Link>
                </div>
            )}
            
        </div>   
    );
}  



export default injectSheet(styles)(Header);


Header.propTypes = {
    classes: PropTypes.object.isRequired,
    screen: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
        ratio: PropTypes.number,
    })
};
