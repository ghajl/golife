import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import YouTube from './YouTubePlayer';
import GameBoard from '../game/GameBoard';
import UnwrappedGameBoard from '../game/UnwrappedGameBoard';
import IconButton from 'material-ui/IconButton';
import ToggleIcon from './ToggleIcon';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import {patternNames} from '../util/patternNames'
import { shiftPatternToCenter, shiftPattern } from '../util/helpers';
import {colors as color} from '../util/colors';
import {samples} from '../game/samples';

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
      this.samples = {};
      this.canvases = {};
      const padding = 20;
      Object.keys(samples).forEach(name => {
        const {width, height, unwrapped, coordinates, label} = samples[name];
        const cells = name === 'gun' ? shiftPattern(coordinates, 1, 1) : shiftPatternToCenter(coordinates, height, width);
        const board = unwrapped ? new UnwrappedGameBoard(width, height, this.squareSize, cells, padding) : new GameBoard(width, height, this.squareSize, cells);
        this.samples[name] = {
          board,
          label,
          width, 
          height,
        }
      })
		this.running = [];
		this.rAF = null;
		this.interval=300;
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
        factor: window.innerWidth < 600 ? 3 : window.innerWidth < 960 ? 6 : 10,
      },
    };
    Object.keys(this.samples).forEach(name => {
      this.samples[name].canvasWidth = this.computeWidth(this.samples[name].width, this.squareSize, this.state.screen);
    })
	}

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentDidMount() {
    const {ratio} = this.state.screen;
    for (let name in this.samples) {
      const canvas = this.canvases[name];
      const {width, height, board} = this.samples[name];
      board.drawBoard(canvas, ratio, width, height, this.squareSize);
      board.update();
    }
  }

  componentWillUnmount(){
    cancelAnimationFrame(this.rAF);    
    this.props.setRunning(true, null);
  }

  computeWidth(width, squareSize, screen) {
    const w = ((width + 1) * squareSize * screen.width / 100 * .7) / screen.factor;
    return w > screen.width * .6 ? screen.width * .6 : w;
  }

  handleWindowSizeChange = () => {
    this.samples.gun.board.handleWindowSizeChange(this.samples.gun.canvas);
  }

  handlePlayToggle(name) {
    if (this.props.running[name]) {
      this.stop(name);
    } else {
      this.start(name);
    }
  }  

  stop(name){
    if (this.props.running[name]) {
      this.props.setRunning(false, name);
      const index = this.running.indexOf(name);
      this.running.splice(index, 1);
      if (this.running.length === 0) {
      	cancelAnimationFrame(this.rAF);
      }
    }
  }

  start(name) {
    if (this.props.running[name] == null || this.props.running[name] == false) {
      this.props.setRunning(true, name);
      this.running.push(name);
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
      this.running.forEach(p => this.samples[p].board.update());
    }  
    this.rAF = requestAnimationFrame(() =>{this.run()}); 
  }

  elementWidthPredefined = name => {
    const {label} = this.samples[name];
    const isRunning = this.props.running[name] || false;
    return (
      <BoardElement 
        patternName={label}
        running={isRunning}
        buttonColor={color.BUTTON} 
        key={name}
        withButton
        setCanvas={el => this.canvases[name] = el}
        handlePlayToggle = {() => this.handlePlayToggle(name)}
      />  
    );
  };
    
  elementWithButton = name => {
    const {label, canvasWidth} = this.samples[name];
    const isRunning = this.props.running[name] || false;
    return (
      <BoardElement 
        width={canvasWidth}
        patternName={label}
        key={name}
        running={isRunning}
        buttonColor={color.BUTTON} 
        withButton
        setCanvas={el => this.canvases[name] = el}
        handlePlayToggle={() => this.handlePlayToggle(name)}
      />
    );
  };
  
  elementWithoutButton = name => {
    const {label, canvasWidth} = this.samples[name];
    return (
      <BoardElement 
        key={name}
        width={canvasWidth}
        patternName={label}
        withButton={false}
        setCanvas={el => this.canvases[name] = el}
      />
    );
  };

  createBoardElement(name) {
    const element = {
      beacon: this.elementWithButton,
      beehive: this.elementWithoutButton,
      blinker: this.elementWithButton,
      block: this.elementWithoutButton,
      boat: this.elementWithoutButton,
      glider: this.elementWithButton,
      gun: this.elementWidthPredefined,
      loaf: this.elementWithoutButton,
      spaceship: this.elementWithButton,
      glasses: this.elementWithButton,
      quad: this.elementWithButton,
      toad: this.elementWithButton,
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
        	    	Every cell interacts with its eight neighbors, 
        	    	which are the cells that are horizontally, vertically, or diagonally adjacent. 
        	    	At each step in time, the following transitions occur:
      	    	</p>
      	    	<div className={classes.rules}>
        	    	<ul>
          				<li>Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.</li>
          				<li>Any live cell with two or three live neighbors lives on to the next generation.</li>
          				<li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
          				<li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
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
                {['block', 'boat', 'loaf', 'beehive'].map(name => this.createBoardElement(name))}
      		    </div>
        			<h4 className={classes.title}>
        		    Oscillators 
      		    </h4>
      		    <p className={classes.text}>
        	    	These patterns repeat their configuration periodically and infinitely. The basic oscillators have periods of two or three ticks. 
                    The most common period-2 oscillators include:
      	    	</p>
      	    	<div className={classes.boardsSection}>
        	    	{['blinker', 'beacon', 'toad', 'glasses', 'quad'].map(name => this.createBoardElement(name))}
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
        	    	{['glider', 'spaceship'].map(name => this.createBoardElement(name))}
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
        			<div className={classes.boardsSection} >
      			    {this.createBoardElement('gun')}
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
  setRunning: PropTypes.func.isRequired,
  running: PropTypes.shape({
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

const BoardElement =  withStyles(boardstyles)(({width, patternName, running, buttonColor, withButton, ...props}) =>{
  const display = withButton ? 'inline' : 'none';
  return (
    <div className="sample">
      <div className="container" style={{width: width, height: "100%"}}>
        <div className="item">
          <div className="canvas">
            <canvas 
              ref={props.setCanvas}
            />
          </div>
          <div className="button">
            <IconButton className={props.classes.iconbutton} title={running ? 'Pause' : 'Start'} onClick = {props.handlePlayToggle}>
              <ToggleIcon
                on={!running}
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
        .sample {
          display: inline-block;
          margin: 16px 0 0 16px;
        }
        .container {
          display: flex;
          font-size: .7em;
          text-align: center;
          font-family: 'Open Sans', sans-serif; 
        }
        .item {
          align-self: flex-end;
        }
        .button {
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

