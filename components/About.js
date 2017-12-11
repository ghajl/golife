import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import YouTube from 'react-youtube';
import GameGrid from '../helpers/GameGrid';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ToggleIcon from 'material-ui-toggle-icon';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import {boardNames} from '../helpers/boardNames'
import { shiftToCenter } from '../helpers/helpers';


var beaconCoordinates = require('../static/beacon.txt');
var beehiveCoordinates = require('../static/beehive.txt');
var blinkerCoordinates = require('../static/blinker.txt');
var blockCoordinates = require('../static/block.txt');
var boatCoordinates = require('../static/boat.txt');
var gliderCoordinates = require('../static/glider.txt');
var gunCoordinates = require('../static/gun.txt');
var loafCoordinates = require('../static/loaf.txt');
var lspaceshipCoordinates = require('../static/lspaceship.txt');
var oscGlassesCoordinates = require('../static/oscGlasses.txt');
var oscQuadCoordinates = require('../static/oscQuad.txt');
var toadCoordinates = require('../static/toad.txt');

const styles = {

	mainContent: {
		marginTop: 75
	},
    rules: {
    	backgroundColor:'rgba(240,248,255,.7)',
    	
    },
    text: {
        fontFamily: 'Open Sans', 
        fallbacks:{
            fontFamily: 'sans-serif',
        },     	
    },
    title: {
        fontFamily: 'Julius Sans One', 
        fallbacks:{
            fontFamily: 'sans-serif',
        },
        fontWeight: 900,
        marginTop: 40
    },
    video: {
    	textAlign: 'center',
    	fontFamily: 'Open Sans', 
        fallbacks:{
            fontFamily: 'sans-serif',
        },
    	marginTop:30,
    },
    boardsSection: {
        display: 'inline-block',
    	marginTop:30,
    },
    link: {
        'text-decoration': 'underline !important',
    },    
};




class About extends Component {
	constructor(props){
		super(props);
        let squareSize = 12;
        let parameters = {
            [boardNames.BEACON]: {
                w: 6,
                h: 6, 
                coordinates: createCellsList(beaconCoordinates,[0,0]),    
                wrapped: true,   
                name: "Beacon",       
            },
            [boardNames.BEEHIVE]: {
                w: 6,
                h: 5,
                coordinates: createCellsList(beehiveCoordinates,[0,0]),
                wrapped: true, 
                name: "Beehive",
            },
            [boardNames.BLINKER]: {
                w: 5,
                h: 5,
                coordinates: createCellsList(blinkerCoordinates,[0,0]),
                wrapped: true, 
                name: "Blinker",
            },
            [boardNames.BLOCK]: {
                w: 4,
                h: 4,
                coordinates: createCellsList(blockCoordinates,[0,0]),
                wrapped: true, 
                name: "Block",
            },
            [boardNames.BOAT]: {
                w: 5,
                h: 5,
                coordinates: createCellsList(boatCoordinates,[0,0]),
                wrapped: true, 
                name: "Boat",
            },
            [boardNames.GLIDER]: {
                w: 10,
                h: 10,
                coordinates: createCellsList(gliderCoordinates,[0,0]),
                wrapped: true, 
                name: "Glider",
            },
            [boardNames.GUN]: {
                w: 40,
                h: 20,
                coordinates: createCellsList(gunCoordinates,[1,1]),
                wrapped: false, 
                name: "The Gosper Glider Gun",
            },
            [boardNames.LOAF]: {
                w: 6,
                h: 6,
                coordinates: createCellsList(loafCoordinates,[0,0]),
                wrapped: true, 
                name: "Loaf",
            },
            [boardNames.SPACESHIP]: {
                w: 12,
                h: 12,
                coordinates: createCellsList(lspaceshipCoordinates,[0,0]),
                wrapped: true, 
                name: "Lightweight Spaceship",
            },
            [boardNames.GLASSES]: {
                w: 20,
                h: 13,
                coordinates: createCellsList(oscGlassesCoordinates,[0,0]),
                wrapped: true, 
                name: "Glasses",
            },
            [boardNames.QUAD]: {
                w: 8,
                h: 8,
                coordinates: createCellsList(oscQuadCoordinates,[0,0]),
                wrapped: true, 
                name: "Quad",
            },
            [boardNames.TOAD]: {
                w: 6,
                h: 6,
                coordinates: createCellsList(toadCoordinates,[0,0]),
                wrapped: true, 
                name: "Toad",
            },
        }
 
        this.examples = {};
        for(let name in parameters){
            this.examples[name] = {
                grid: new GameGrid(name, parameters[name].w, parameters[name].h, squareSize, !parameters[name].wrapped),
                cells: name == boardNames.GUN ? 
                                parameters[name].coordinates :
                                shiftToCenter(parameters[name].coordinates, parameters[name].h, parameters[name].w),
                name: parameters[name].name,
            }
        }

        this.state = {
            reload:false,
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
                screenScale: window.innerWidth < 900 ? 3 : 10,
            },
        }

        for(let name in parameters){
            this.examples[name].canvasWidth = this.getWidth(this.examples[name].grid) 
        }

		this.motionPatternList = [];
		this.rAF = null;

		this.interval=300;
	
		this.buttonColor = 'rgba(0, 0, 0, .9)';

        this.setStopped = (stopped, name) => props.setStopped(stopped, name);
	}

    getWidth(grid){
        let {screen} = this.state;
        let {width, squareSize} = grid;
        let w = ((width + 1) * squareSize * screen.width/100 * .7)/screen.screenScale;
        return w > screen.width * .6 ? screen.width * .6 : w;
    }

    handlePlayToggle(pattern){
        
        
        if(this.props.stopped[pattern.grid.name]){
            this.start(pattern);
        } else {

            this.stop(pattern);
        }
    }  

    stop(pattern){
        if(!this.props.stopped[pattern.grid.name]){
            this.setStopped(true, pattern.grid.name);
            let index = this.motionPatternList.indexOf(pattern);
            this.motionPatternList.splice(index, 1);
            if(this.motionPatternList.length === 0){
            	cancelAnimationFrame(this.rAF);
            }
        }

    }


    start(pattern){
        if(this.props.stopped[pattern.grid.name]){
            this.setStopped(false, pattern.grid.name);
            this.motionPatternList.push(pattern);
            this.then = Date.now();
            if(this.motionPatternList.length === 1){
            	this.rAF = requestAnimationFrame(() =>{this.update()});
            }
        }
    }

	update(){
            this.now = Date.now();
            this.delta = this.now - this.then;
             
            if (this.delta > this.interval) {
                this.then = this.now - (this.delta % this.interval);

                this.motionPatternList.forEach(p => p.grid.update())
               
            }  
            this.rAF = requestAnimationFrame(() =>{this.update()}); 
    }

    handleWindowSizeChange = () => {
		this.examples[boardNames.GUN].grid.handleWindowSizeChange(this.examples[boardNames.GUN].canvas);
    }

    componentWillUpdate(){
		this.examples[boardNames.GUN].canvasWidth = this.examples[boardNames.GUN].canvasWidth > this.state.screen.width * .6 ? 
                                                    this.state.screen.width * .6 : this.examples[boardNames.GUN].canvasWidth
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidMount() {
        let ratio = this.state.screen.ratio
        for(let name in this.examples){
            let {grid, cells, canvas} = this.examples[name];
            console.log(name)
            grid.makeBoard(grid.width, grid.height, grid.squareSize, ratio, canvas, cells);
            grid.update();
        }
    }


    componentWillUnmount(){
        
        cancelAnimationFrame(this.rAF);    
        this.setStopped(true, null)
    }


    render() {    
    	const classes = this.props.classes;
    	return(
    	    <div className={classes.mainContent}>
            
    	    <Grid container spacing={0}>
    	   
    	    <Grid item xs={1} sm={2} > </Grid>
    	    
    	    <Grid item xs={10}  sm={8} >
    	    
    	    	<p className={`${classes.intro} ${classes.text}`}>
    	    	<strong>The Game of Life</strong> is the best-known two-dimensional  
                "<a className={classes.link} href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank" title="Cellular automaton">cellular automaton</a>", 
                invented in 1970 by the British mathematician <a className={classes.link} href="https://en.wikipedia.org/wiki/John_Horton_Conway" title="John Conway">John Horton Conway</a>. 
                The life is a cellular automaton, which is a model of a discrete abstract computational system, 
                composed of a finite or infinite set of objects – "cells". The cell in the game of life has two states - 
                “alive” and “dead”, or "populated" and "unpopulated". The cells live on a two-dimensional grid and each cell 
                has eight adjacent cells - "neighbors". All cells change their state simultaneously, according to update 
                rules by taking into account the states of their neighbors.
    	    	</p>
    	    	
    	    	<div className={classes.video}>
                <YouTube
                  videoId="R9Plq-D1gEk"                  
                  opts={{width:'100%', playerVars: {showinfo:0, rel:0}}}    
        

                />
                John H. Conway on the creation of his Game of Life
                </div>

                <div className={classes.video}>
                <YouTube
                  videoId="CgOcEZinQ2I"                  
                  opts={{width:'100%', playerVars: {showinfo:0, rel:0}}}    
        

                />
                Fragment from Stephen Hawking`s The Meaning of Life
                </div>

    	    	<div className={classes.rulesPar}>
    	    	<h2 className={classes.title}>
    	    	Rules
    	    	</h2>
    	    	<p className={classes.text}>
    	    	Every cell interacts with its eight neighbours, 
    	    	which are the cells that are horizontally, vertically, or diagonally adjacent. 
    	    	At each step in time, the following transitions occur:
    	    	</p>
    	    	<div className={classes.rules}>
    	    	<ul>
    				<li>Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.</li>
    				<li>Any live cell with two or three live neighbours lives on to the next generation.</li>
    				<li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
    				<li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
    			</ul>
    			</div>
    			<p className={classes.text}>
    			The initial pattern constitutes the seed of the system. 
    			The first generation is created by applying the above rules 
    			simultaneously to every cell in the seed - births and deaths occur simultaneously, 
    			and the discrete moment at which this happens is sometimes called a tick 
    			(in other words, each generation is a pure function of the preceding one). 
    			The rules continue to be applied repeatedly to create further generations.
    	    	</p>
    	    	</div>
    	    	<h2 className={classes.title}>
    	    	Examples of Patterns
    	    	</h2>
                <p className={classes.text}>
                In order to simulate infinite grid on the game board and in the examples below (except for the gun pattern), 
                cells that are situated on the edges of the boards are handled in a toroidal manner, 
                i.e. lower neighbor of a cell situated on the bottom edge of board will be a cell from 
                the top edge on the same column and a neighbor to the right of a cell situated on the right 
                edge will be from the left edge. 
                </p>

    	    	<h4 className={classes.title}>
    	    	Still Life
    	    	</h4>
    	    	<p className={classes.text}>
    	    	Stable finite patterns.
    	    	</p>
    	    	<div  className={classes.boardsSection} >
    	    	<Grid container spacing={8} >
    	   
    			    
    			    
    			    <Grid item xs>
                        <BoardElement 
                            width = {this.examples[boardNames.BLOCK].canvasWidth}
                            patternName = {this.examples[boardNames.BLOCK].name}
                            withButton = {false}
                            setCanvas = {el => this.examples[boardNames.BLOCK].canvas = el}
                        />
    			    </Grid>
    			    
    			    
    			    <Grid item xs>
                        <BoardElement 
                            width = {this.examples[boardNames.BOAT].canvasWidth}
                            patternName = {this.examples[boardNames.BOAT].name}
                            withButton = {false}
                            setCanvas = {el => this.examples[boardNames.BOAT].canvas = el}
                        />
    			    </Grid>
    			   
    			    
    			    <Grid item xs>
                        <BoardElement 
                            width = {this.examples[boardNames.LOAF].canvasWidth}
                            patternName = {this.examples[boardNames.LOAF].name}
                            withButton = {false}
                            setCanvas = {el => this.examples[boardNames.LOAF].canvas = el}
                        />
    			    </Grid>
    			    
    			    
    			    <Grid item xs>
                        <BoardElement 
                            width = {this.examples[boardNames.BEEHIVE].canvasWidth}
                            patternName = {this.examples[boardNames.BEEHIVE].name}
                            withButton = {false}
                            setCanvas = {el => this.examples[boardNames.BEEHIVE].canvas = el}
                        />
    	            </Grid>
    			   
    		    </Grid>
    		    </div>
    			<h4 className={classes.title}>
    		    Oscillators 
    		    </h4>
    		    <p className={classes.text}>
    	    	These patterns repeat their configuration periodically and infinitely. The basic oscillators have periods of two or three ticks. 
                The most common period-2 oscillators include:
    	    	</p>
    	    	<div  className={classes.boardsSection} >
    	    	<Grid container spacing={8}>
    	   
    			    
    			    <Grid item xs>
                        <BoardElement 
                            width = {this.examples[boardNames.BLINKER].canvasWidth}
                            patternName = {this.examples[boardNames.BLINKER].name}
                            stopped = {this.props.stopped[boardNames.BLINKER]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.BLINKER].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.BLINKER])}
                        />
    			    </Grid>
    			    
    			    
    			    <Grid item xs> 
                        <BoardElement 
                            width = {this.examples[boardNames.BEACON].canvasWidth}
                            patternName = {this.examples[boardNames.BEACON].name}
                            stopped = {this.props.stopped[boardNames.BEACON]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.BEACON].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.BEACON])}
                        />                    
    
    			    </Grid>
    			    
    			    <Grid item xs >
                        <BoardElement 
                            width = {this.examples[boardNames.TOAD].canvasWidth}
                            patternName = {this.examples[boardNames.TOAD].name}
                            stopped = {this.props.stopped[boardNames.TOAD]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.TOAD].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.TOAD])}
                        />                    
    			    </Grid>

                    <Grid item xs >
                        <BoardElement 
                            width = {this.examples[boardNames.GLASSES].canvasWidth}
                            patternName = {this.examples[boardNames.GLASSES].name}
                            stopped = {this.props.stopped[boardNames.GLASSES]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.GLASSES].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.GLASSES])}
                        />                    
                    </Grid>

                    <Grid item xs >
                        <BoardElement 
                            width = {this.examples[boardNames.QUAD].canvasWidth}
                            patternName = {this.examples[boardNames.QUAD].name}
                            stopped = {this.props.stopped[boardNames.QUAD]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.QUAD].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.QUAD])}
                        />                    
                    </Grid>
    			    
    		    </Grid>
    		    </div>
    			<h4 className={classes.title}>
    		    Gliders and Spaceships
    		    </h4>
    		    <p className={classes.text}>
    	    	A spaceship is more complex oscillator, returning to the same configuration but shifted after a finite number of generations. 
    	    	The glider is a simple spaceship that has period 4, i.e. repeats every four generations, but 
                moves diagonally one cell every four generations.
    	    	Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. 
    	    	They each move in a straight line.
    	    	</p>
    	    	<div  className={classes.boardsSection} >
    	    	<Grid container spacing={8}>
    	   
    			    
    			    <Grid item xs> 
                        <BoardElement 
                            width = {this.examples[boardNames.GLIDER].canvasWidth}
                            patternName = {this.examples[boardNames.GLIDER].name}
                            stopped = {this.props.stopped[boardNames.GLIDER]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.GLIDER].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.GLIDER])}
                        />                    
    			    </Grid>
    			   

    			    <Grid item xs> 
                        <BoardElement 
                            width = {this.examples[boardNames.SPACESHIP].canvasWidth}
                            patternName = {this.examples[boardNames.SPACESHIP].name}
                            stopped = {this.props.stopped[boardNames.SPACESHIP]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.SPACESHIP].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.SPACESHIP])}
                        />                    
    			    </Grid>

    			    
    		    </Grid>	   
    		    </div> 	
    			<h4 className={classes.title}>
    		    Guns
    		    </h4>
    		    <p className={classes.text}>
    			Conway offered a prize for any example of patterns that grow forever. 
    			Conway's prize was collected soon after its announcement, when two different ways were discovered for designing a pattern that grows forever.

    			The first of these patterns is the period-30 glider gun, which is based on the interaction of two queen bee shuttles. 
    			Where these shuttles collide, instead of producing beehives, they produce a new glider. 
    			This glider moves away in time for the process to repeat itself 30 steps later.
    			</p>
    			<div  className={classes.boardsSection} >
    			<Grid container spacing={0}>
    	   
    			    
    			    <Grid item xs={12}> 
                        <BoardElement 
                            patternName =  {this.examples[boardNames.GUN].name}
                            stopped = {this.props.stopped[boardNames.GUN]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.GUN].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.GUN])}
                        />                    
   			    </Grid>

    			    
    		    </Grid>	
    		    </div>
    	    	<h2 className={classes.title}>
    	    	Origins
    	    	</h2>

    	    	<p className={classes.text}>Conway was interested in a problem presented in the 1940s by 
    	    	mathematician <a className={classes.link} href="https://en.wikipedia.org/wiki/John_von_Neumann" title="John von Neumann">John von Neumann</a>, 
    	    	who attempted to find a hypothetical machine that could build copies of itself 
    	    	and succeeded when he found a mathematical model for such a machine with very 
    	    	complicated rules on a rectangular grid. The Game of Life emerged as Conway's 
    	    	successful attempt to drastically simplify von Neumann's ideas.

    	    	</p>

    	    	<p className={classes.text}>The game made its first public appearance in the October 1970 issue of <i>Scientific American</i>, in Martin Gardner's column. 
    	    	From a theoretical point of view, it is interesting because it has the power of 
    	    	a universal Turing machine: that is, anything that can be computed algorithmically 
    	    	can be computed within Conway's Game of Life. Gardner wrote:
    	    	</p>
    	    	<blockquote>
    			<p>The game made Conway instantly famous, but it also opened up a whole new 
    			field of mathematical research, the field of cellular automata&nbsp;... Because of Life's analogies with the rise, 
    			fall and alterations of a society of living organisms, it belongs to a 
    			growing class of what are called "simulation games" (games that resemble real life processes).
    			</p>
    			</blockquote>

                <h2 className={classes.title}>
                References
                </h2>
                <p className={classes.text}>
                Wikipedia. 2017. Conway's Game of Life. [ONLINE] Available at: <a className={classes.link} href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life</a>. 
                Overview of history, rules and examples of patterns of the Game of Life
                </p>
                <p className={classes.text}>
                www.ericweisstein.com. 1996-2005. Eric Weisstein's Treasure Trove of the Life C.A. [ONLINE] Available at: <a className={classes.link} href="http://www.ericweisstein.com/encyclopedias/life/">http://www.ericweisstein.com/encyclopedias/life/</a>. 
                This source includes large collection of examples of possible patterns.
                </p>                
                <h2 className={classes.title}>
                Links
                </h2>
                <p className={classes.text}>
                <a className={classes.link} href="http://www.scholarpedia.org/article/Game_of_Life">www.scholarpedia.org/article/Game_of_Life</a>
                </p> 
                <p className={classes.text}>
                <a className={classes.link} href="https://www.ibiblio.org/lifepatterns/">www.ibiblio.org/lifepatterns/</a>
                </p>   
                <p className={classes.text}>
                <a className={classes.link} href="http://mathworld.wolfram.com/GameofLife.html">http://mathworld.wolfram.com/GameofLife.html</a>
                </p>   		
                <p className={classes.text}>
                <a className={classes.link} href="http://www.conwaylife.com/">http://www.conwaylife.com/</a>
                </p>	
                <p className={classes.text}>
                <a className={classes.link} href="http://golly.sourceforge.net/">http://golly.sourceforge.net/</a>
                </p>
                <p className={classes.text}>
                <a className={classes.link} href="http://www.math.com/students/wonders/life/life.html">http://www.math.com/students/wonders/life/life.html</a>
                </p>
                <p className={classes.text}>
                <a className={classes.link} href="http://www.cuug.ab.ca/dewara/life/life.html">http://www.cuug.ab.ca/dewara/life/life.html</a>
                </p>
                <p className={classes.text}>
                <a className={classes.link} href="http://www.radicaleye.com/lifepage/" >http://www.radicaleye.com/lifepage/</a>
                </p>
                <p className={classes.text}>
                <a className={classes.link} href="https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide">https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide</a>
                </p>
                <p className={classes.text}>
                <a className={classes.link} href="http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/">http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/</a>
                </p>
                <p className={classes.text}>
                <a className={classes.link} href="http://natureofcode.com/book/chapter-7-cellular-automata/">http://natureofcode.com/book/chapter-7-cellular-automata/</a>
                </p>
    			</Grid>
    			<Grid item xs={1} sm={2} > </Grid>
    			</Grid>
    	     
    	    </div>
    	); 
	}
}



About.propTypes = {
    classes: PropTypes.object.isRequired,
    setStopped: PropTypes.func.isRequired,
    stopped: PropTypes.shape({
        [boardNames.MAIN]: PropTypes.bool,
        [boardNames.BLOCK]: PropTypes.bool,
        [boardNames.BOAT]: PropTypes.bool,
        [boardNames.LOAF]: PropTypes.bool,
        [boardNames.BEEHIVE]: PropTypes.bool,
        [boardNames.BLINKER]: PropTypes.bool,
        [boardNames.BEACON]: PropTypes.bool,
        [boardNames.TOAD]: PropTypes.bool,
        [boardNames.GLIDER]: PropTypes.bool,
        [boardNames.SPACESHIP]: PropTypes.bool,
        [boardNames.GUN]: PropTypes.bool,
  }).isRequired,
};

export default withStyles(styles)(About);


const patternBoard = (grid,cellsList) => ({grid,cellsList})


const BoardElement = ({width, patternName, stopped, buttonColor, withButton, ...props}) => {

    return (
    
    <div className="board" style={{width: width, height: "100%"}}>
        <div className="item">
            <canvas
                ref={props.setCanvas}
                // onClick={(e) => this.handleClick(e)}
            />
        
            {withButton ? (
                <IconButton className="button" onClick = {props.handlePlayToggle}>
                    <ToggleIcon
                        on={stopped}
                        onIcon={<PlayArrow className="icon" />}
                        offIcon={<Pause className="icon" />}
                        color = {buttonColor} 
                      />
                </IconButton>

                ) : (
                    <div></div>
                )

            }
        
            <div>
            {patternName}
            </div>
        </div>
    
        <style jsx global>{`
            .board {
                display: flex;
                font-size: .7em;
                text-align: center;
                font-family: 'Open Sans', sans-serif; 
                
            }
            .item {
                align-self: flex-end;
            }
            .button {
                width: 35px;
                height: 35px;
            }
            .icon {
                width: 25px;
                height: 25px;

            }
        `}</style>
    </div>    
    );
}

const createCellsList = (coordinates, shift) => {
    return coordinates.split("\r\n").reduce(function(acc, val, Y){
        val.split('c').reduce((accX, valX, X) => {
            if(valX !== "")
            return acc.push([Y + shift[0], +valX + shift[1]])
        },[]);
        
        return acc;
    },[])
}
