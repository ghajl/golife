import React from "react";
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SvgIcon from 'material-ui/SvgIcon';
import Grid from 'material-ui/Grid';
import {colors as color} from '../helpers/colors';


const Footer = ({classes, screen}) => {
	const direction = screen.width < 600 ? 'column' : 'row';
	const align = screen.width < 600 ? 'center' : 'flex-start';
    let push = null;
    const h = 0;
        
    const setHeight =(el) => {
    	if(el && push){
    	    	let {top: topPush, bottom: bottomPush} = push.getBoundingClientRect();
    	    	let {top: topFooter, bottom: bottomFooter} = el.getBoundingClientRect();
    	    	let heightPush = bottomPush - topPush;
    	    	let heightFooter = bottomFooter - topFooter;
    	    	let height = screen.height - Math.floor(heightFooter) - Math.floor(topPush);
    	    	if(height < 0){
    	    		push.style.height = 0;
    	    	} else {
    	    		push.style.height = height + 'px';
    	    	}
    	    }
    }
	return (
		<div className="wrapper">
		
		
		<Grid container spacing={0} justify={"center"} direction={direction} alignItems={align}>
                
		
		<Grid item xs style={{maxWidth:"160px"}}>
                                
			<div className="link">
				
				
				<a href="https://github.com/ghajl" target="_blank">
				<div className="item">
				
                    <svg className="icon" style={{ width: 24,height: 24, }}>
					    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
				    </svg>
				    
					<div>ghajl</div>
					</div>
					</a>
				    
		       
			</div>
		</Grid>
		<Grid item xs style={{maxWidth:"160px"}}>
			<div className="link">
				
				
				<a href="mailto:michaelknn@gmail.com?subject=Mail from GOL" target="_blank">
				<div className="item">
				
					<svg className="icon" style={{ width: 24,height: 24, }}>
					    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
					</svg>
				
					<div>michaelknn@gmail.com</div>
					</div>
					</a>
					
							
			</div>
		</Grid>
		<Grid item xs style={{maxWidth:"160px"}}>
			<div className="link">
				
				
				<a href="tel:+972-50-814-9452">
				<div className="item">

				<svg className="icon" style={{ width: 24,height: 24, }}>
				    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
				</svg>	
				
				<div>+972 50 8149452</div>
				</div>
				</a>
				
				
			</div>		
		</Grid>	
		</Grid>
		
		<style jsx >{`
			.wrapper {
				margin-top: 2em;
				border-bottom: 10px solid ${color.FOOTER_BOTTOM};
				background-color: ${color.FOOTER_TOP};
			}
			.icon {
				transition: .4s;
				border-radius: 50%;
				border: 1px solid ${color.FOOTER_LINK};
				padding: 5px;
				margin: .5em;
			}
			.icon:hover {
				border-color: ${color.FOOTER_LINK_ACTIVE};
				background-color: ${color.FOOTER_LINK_ACTIVE};
				fill: ${color.FOOTER_LINK_ICON_ACTIVE};
			}
			a:hover  {
				
				
				color: ${color.FOOTER_LINK_ACTIVE};
				// fill: black;
			}
			a {
				// transition: .4s;
				color: ${color.FOOTER_LINK};
				fill: ${color.FOOTER_LINK};
			}
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				min-width:130px;
				font-size:.9em;
			}
			.link {
				margin: 5px 20px 5px;
			}

		`}						
		</style> 
		
		
		</div>
	)
}


export default Footer;