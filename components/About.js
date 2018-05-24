import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import YouTube from './YouTubePlayer';
import GameBoard from '../game/GameBoard';
import IconButton from 'material-ui/IconButton';
import ToggleIcon from './ToggleIcon';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import {patternNames} from '../util/patternNames'
import { shiftPatternToCenter, shiftPattern } from '../util/helpers';
import {colors as color} from '../util/colors';
import {samples} from '../game/samples';

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
        'overflow-wrap': 'break-word',
        'word-wrap': 'break-word',
    },    
};




class About extends Component {
	constructor(props){
		super(props);
        this.squareSize = 12;
        // let parameters = {
        //     [patternNames.BEACON]: {
        //         width: 6,
        //         height: 6, 
        //         coordinates: createCellsList(beaconCoordinates),    
        //         unwrapped: false,   
        //         name: "Beacon",       
        //     },
        //     [patternNames.BEEHIVE]: {
        //         width: 6,
        //         height: 5,
        //         coordinates: createCellsList(beehiveCoordinates),
        //         unwrapped: false, 
        //         name: "Beehive",
        //     },
        //     [patternNames.BLINKER]: {
        //         width: 5,
        //         height: 5,
        //         coordinates: createCellsList(blinkerCoordinates),
        //         unwrapped: false, 
        //         name: "Blinker",
        //     },
        //     [patternNames.BLOCK]: {
        //         width: 4,
        //         height: 4,
        //         coordinates: createCellsList(blockCoordinates),
        //         unwrapped: false, 
        //         name: "Block",
        //     },
        //     [patternNames.BOAT]: {
        //         width: 5,
        //         height: 5,
        //         coordinates: createCellsList(boatCoordinates),
        //         unwrapped: false, 
        //         name: "Boat",
        //     },
        //     [patternNames.GLIDER]: {
        //         width: 10,
        //         height: 10,
        //         coordinates: createCellsList(gliderCoordinates),
        //         unwrapped: false, 
        //         name: "Glider",
        //     },
        //     [patternNames.GUN]: {
        //         width: 40,
        //         height: 20,
        //         coordinates: createCellsList(gunCoordinates),
        //         unwrapped: true, 
        //         name: "The Gosper Glider Gun",
        //     },
        //     [patternNames.LOAF]: {
        //         width: 6,
        //         height: 6,
        //         coordinates: createCellsList(loafCoordinates),
        //         unwrapped: false, 
        //         name: "Loaf",
        //     },
        //     [patternNames.SPACESHIP]: {
        //         width: 12,
        //         height: 12,
        //         coordinates: createCellsList(lspaceshipCoordinates),
        //         unwrapped: false, 
        //         name: "Lightweight Spaceship",
        //     },
        //     [patternNames.GLASSES]: {
        //         width: 20,
        //         height: 13,
        //         coordinates: createCellsList(oscGlassesCoordinates),
        //         unwrapped: false, 
        //         name: "Glasses",
        //     },
        //     [patternNames.QUAD]: {
        //         width: 8,
        //         height: 8,
        //         coordinates: createCellsList(oscQuadCoordinates),
        //         unwrapped: false, 
        //         name: "Quad",
        //     },
        //     [patternNames.TOAD]: {
        //         width: 6,
        //         height: 6,
        //         coordinates: createCellsList(toadCoordinates),
        //         unwrapped: false, 
        //         name: "Toad",
        //     },
        // }
 
        // this.examples = {};
        this.samples = {};
        console.log(samples)
        Object.keys(samples).forEach(title => {
            
            const {width, height, unwrapped, coordinates, name} = samples[title];
            const adjustedCoordinates = title == 'gun' ? shiftPattern(coordinates, 1, 1) : shiftPatternToCenter(coordinates, height, width);
            this.samples[title] = {
                board: new GameBoard(title, width, height, this.squareSize, unwrapped),
                cells: adjustedCoordinates,
                name: title,
                width, 
                height,
            }
        })
        // for(let name in parameters){
        //     this.examples[name] = {
        //         grid: new GameBoard(name, parameters[name].width, parameters[name].height, squareSize, parameters[name].unwrapped),
        //         cells: name == patternNames.GUN ? 
        //                         shiftPattern(parameters[name].coordinates, 1, 1) :
        //                         shiftPatternToCenter(parameters[name].coordinates, parameters[name].height, parameters[name].width),
        //         name: parameters[name].name,
        //     }
        // }

        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
                factor: window.innerWidth < 600 ? 3 : window.innerWidth < 960 ? 6 : 10,
            },
        }
        Object.keys(samples).forEach(title => {
            this.samples[title].canvasWidth = this.computeWidth(this.samples[title].width, this.squareSize, this.state.screen);
        })
        // for(let name in parameters){
        //     this.examples[name].canvasWidth = this.computeWidth(this.examples[name].grid, this.state.screen) 
        // }

		this.running = [];
		this.rAF = null;

		this.interval=300;
	
        this.setStopped = (stopped, name) => props.setStopped(stopped, name);
	}

    computeWidth(width, squareSize, screen) {
        // const {width, squareSize} = grid;
        const w = ((width + 1) * squareSize * screen.width / 100 * .7) / screen.factor;
        return w > screen.width * .6 ? screen.width * .6 : w;
    }

    handlePlayToggle(sample) {
        if (this.props.stopped[sample.board.name]) {
            this.start(sample);
        } else {
            this.stop(sample);
        }
    }  

    stop(sample){
        if (!this.props.stopped[sample.board.name]) {
            this.setStopped(true, sample.board.name);
            const index = this.running.indexOf(sample);
            this.running.splice(index, 1);
            if (this.running.length === 0) {
            	cancelAnimationFrame(this.rAF);
            }
        }
    }


    start(sample) {
        if (this.props.stopped[sample.board.name]) {
            this.setStopped(false, sample.board.name);
            this.running.push(sample);
            this.then = Date.now();
            if (this.running.length === 1) {
            	this.rAF = requestAnimationFrame(() =>{this.run()});
            }
        }
    }

	run() {
        this.now = Date.now();
        this.delta = this.now - this.then;
        if (this.delta > this.interval) {
            this.then = this.now - (this.delta % this.interval);
            this.running.forEach(p => p.board.update());
        }  
        this.rAF = requestAnimationFrame(() =>{this.run()}); 
    }

    handleWindowSizeChange = () => {
		this.samples.gun.board.handleWindowSizeChange(this.samples.gun.canvas);
    }

    
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidMount() {
        const {ratio} = this.state.screen;
        for (let name in this.samples) {
            console.log(this.samples[name])
            const {width, height, board, cells, canvas} = this.samples[name];
            board.drawBoard(width, height, this.squareSize, ratio, canvas, cells);
            board.update();
        }
    }


    componentWillUnmount(){
        
        cancelAnimationFrame(this.rAF);    
        this.setStopped(true, null);
    }

    createSampleElement(name) {
        const elementWidthPredefined = title => {
            const {name, canvasWidth} = this.samples[title];
            const isStopped = this.props.stopped[title];
            return (
                <BoardElement 
                    patternName={name}
                    stopped={isStopped}
                    buttonColor={color.BUTTON} 
                    withButton
                    setCanvas={el => this.samples[title].canvas = el}
                    handlePlayToggle = {() => this.handlePlayToggle(this.samples[title])}
                />  
            );
        };
        const elementWithButton = title => {
            const {name, canvasWidth} = this.samples[title];
            const isStopped = this.props.stopped[title];
            return (
                <BoardElement 
                    width={canvasWidth}
                    patternName={name}
                    stopped={isStopped}
                    buttonColor={color.BUTTON} 
                    withButton
                    setCanvas={el => this.samples[title].canvas = el}
                    handlePlayToggle={() => this.handlePlayToggle(this.samples[title])}
                />
            );
        };
        const elementWithoutButton = title => {
            const {name, canvasWidth} = this.samples[title];
            return (
                <BoardElement 
                    width={canvasWidth}
                    patternName={name}
                    withButton={false}
                    setCanvas={el => this.samples[title].canvas = el}
                />
            );
        };
        const element = {
            beacon: elementWithButton,
            beehive: elementWithoutButton,
            blinker: elementWithButton,
            block: elementWithoutButton,
            boat: elementWithoutButton,
            glider: elementWithButton,
            gun: elementWidthPredefined,
            loaf: elementWithoutButton,
            spaceship: elementWithButton,
            glasses: elementWithButton,
            quad: elementWithButton,
            toad: elementWithButton,
        }
        return element[name](name);
    }

    render() {    
    	const {classes} = this.props;
    	return(
    	    <div className={classes.mainContent}>
        	    <Grid container spacing={0}>
            	    <Grid item xs={1} sm={2}> 
                    </Grid>
            	    <Grid item xs={10}  sm={8}>
            	    	<p className={classes.text}>
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
                              showinfo={0}
                              rel={0}    
                            />
                            John H. Conway on the creation of his Game of Life
                        </div>
                        <div className={classes.video}>
                            <YouTube
                              videoId="CgOcEZinQ2I"                  
                              showinfo={0}
                              rel={0}    
                            />
                            Fragment from Stephen Hawking`s The Meaning of Life
                        </div>
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
            	    	<div className={classes.boardsSection}>
                            {['block', 'boat', 'loaf', 'beehive'].map(name => this.createSampleElement(name))}
            		    </div>
            			<h4 className={classes.title}>
                		    Oscillators 
            		    </h4>
            		    <p className={classes.text}>
                	    	These patterns repeat their configuration periodically and infinitely. The basic oscillators have periods of two or three ticks. 
                            The most common period-2 oscillators include:
            	    	</p>
            	    	<div className={classes.boardsSection}>
                	    	{['blinker', 'beacon', 'toad', 'glasses', 'quad'].map(name => this.createSampleElement(name))}
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
                	    	{['glider', 'spaceship'].map(name => this.createSampleElement(name))}
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
            			    {this.createSampleElement('gun')}
               		    </div>
            	    	<h2 className={classes.title}>
                	    	Origins
            	    	</h2>
            	    	<p className={classes.text}>
                            Conway was interested in a problem presented in the 1940s by 
                	    	mathematician <a className={classes.link} href="https://en.wikipedia.org/wiki/John_von_Neumann" title="John von Neumann">John von Neumann</a>, 
                	    	who attempted to find a hypothetical machine that could build copies of itself 
                	    	and succeeded when he found a mathematical model for such a machine with very 
                	    	complicated rules on a rectangular grid. The Game of Life emerged as Conway's 
                	    	successful attempt to drastically simplify von Neumann's ideas.

            	    	</p>

            	    	<p className={classes.text}>
                            The game made its first public appearance in the October 1970 issue of <i>Scientific American</i>, in Martin Gardner's column. 
                	    	From a theoretical point of view, it is interesting because it has the power of 
                	    	a universal Turing machine: that is, anything that can be computed algorithmically 
                	    	can be computed within Conway's Game of Life. Gardner wrote:
            	    	</p>
            	    	<blockquote>
                			<p>
                                The game made Conway instantly famous, but it also opened up a whole new 
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
                            <a className={classes.link} href="http://www.scholarpedia.org/article/Game_of_Life">
                                www.scholarpedia.org/article/Game_of_Life
                            </a>
                        </p> 
                        <p className={classes.text}>
                            <a className={classes.link} href="https://www.ibiblio.org/lifepatterns/">
                                www.ibiblio.org/lifepatterns/
                            </a>
                        </p>   
                        <p className={classes.text}>
                            <a className={classes.link} href="http://mathworld.wolfram.com/GameofLife.html">
                                http://mathworld.wolfram.com/GameofLife.html
                            </a>
                        </p>   		
                        <p className={classes.text}>
                            <a className={classes.link} href="http://www.conwaylife.com/">
                                http://www.conwaylife.com/
                            </a>
                        </p>	
                        <p className={classes.text}>
                            <a className={classes.link} href="http://golly.sourceforge.net/">
                                http://golly.sourceforge.net/
                            </a>
                        </p>
                        <p className={classes.text}>
                            <a className={classes.link} href="http://www.math.com/students/wonders/life/life.html">
                                http://www.math.com/students/wonders/life/life.html
                            </a>
                        </p>
                        <p className={classes.text}>
                            <a className={classes.link} href="http://www.cuug.ab.ca/dewara/life/life.html">
                                http://www.cuug.ab.ca/dewara/life/life.html
                            </a>
                        </p>
                        <p className={classes.text}>
                            <a className={classes.link} href="http://www.radicaleye.com/lifepage/">
                                http://www.radicaleye.com/lifepage/
                            </a>
                        </p>
                        <p className={classes.text}>
                            <a className={classes.link} href="https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide">
                                https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide
                            </a>
                        </p>
                        <p className={classes.text}>
                            <a className={classes.link} href="http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/">
                                http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/
                            </a>
                        </p>
                        <p className={classes.text}>
                            <a className={classes.link} href="http://natureofcode.com/book/chapter-7-cellular-automata/">
                                http://natureofcode.com/book/chapter-7-cellular-automata/
                            </a>
                        </p>
        			</Grid>
    			<Grid item xs={1} sm={2}> 
                </Grid>
			</Grid>
	    </div>
    	); 
	}
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
    setStopped: PropTypes.func.isRequired,
    stopped: PropTypes.shape({
        [patternNames.MAIN]: PropTypes.bool,
        [patternNames.BLOCK]: PropTypes.bool,
        [patternNames.BOAT]: PropTypes.bool,
        [patternNames.LOAF]: PropTypes.bool,
        [patternNames.BEEHIVE]: PropTypes.bool,
        [patternNames.BLINKER]: PropTypes.bool,
        [patternNames.BEACON]: PropTypes.bool,
        [patternNames.TOAD]: PropTypes.bool,
        [patternNames.GLIDER]: PropTypes.bool,
        [patternNames.SPACESHIP]: PropTypes.bool,
        [patternNames.GUN]: PropTypes.bool,
        [patternNames.GLASSES]: PropTypes.bool,
        [patternNames.QUAD]: PropTypes.bool,
  }).isRequired,
};

export default withStyles(styles)(About);


const patternBoard = (grid,cellsList) => ({grid,cellsList})

const boardstyles = {
    iconbutton: {
        width: 35,
        height: 35,
        color: color.BUTTON,
    },
    icon: {
        width: 25,
        height: 25,

    }
            
}

const BoardElement =  withStyles(boardstyles)(({width, patternName, stopped, buttonColor, withButton, ...props}) =>{
    const display = withButton ? 'inline' : 'none';

    return (
    <div className="boardElement">
    <div className="board" style={{width: width, height: "100%"}}>
        <div className="item">
            <div className="canvas">
            <canvas 
                ref={props.setCanvas}
            />
            </div>
            <div className="buttonElement">
                <IconButton className={props.classes.iconbutton} title={stopped?"Start":"Pause"} onClick = {props.handlePlayToggle}>
                    <ToggleIcon
                        on={stopped}
                        onIcon={<PlayArrow className={props.classes.icon} />}
                        offIcon={<Pause className={props.classes.icon} />}
                        
                      />
                </IconButton>
            
            </div>
        
            <div>
            {patternName}
            </div>
        </div>
        </div>
        <style jsx>{`
            .boardElement {
                display: inline-block;
                margin: 16px 0 0 16px;
            }
            .board {
                display: flex;
                font-size: .7em;
                text-align: center;
                font-family: 'Open Sans', sans-serif; 
                
            }
            .item {
                align-self: flex-end;
            }
            .buttonElement {
                display: ${display};
            }
            .canvas {
                background-color: ${color.BOARD};
            }
        `}</style>
    </div>    
    );
})



const createCellsList = (coordinates) => {
    return coordinates.split("\r\n").reduce(function(acc, val, Y){
        val.split('c').reduce((accX, valX, X) => {
            if(valX !== "")
            return acc.push([Y, +valX])
        },[]);
        
        return acc;
    },[])
}

