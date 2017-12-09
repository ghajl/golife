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
        // for(let name in parameters){
        //     console.log(parameters[name])
        // }
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
        // let l = 
        // console.log(l)
        // let beaconParameters = {

        // }
        // let beehiveParameters = 
        // let blinkerParameters = 
        // let blockParameters = 
        // let boatParameters = 
        // let gliderParameters = 
        // let spaceshipParameters = 
        // let loafParameters = 
        // let glassesParameters = 
        // let quadParameters = 
        // let toadParameters = 
        // this.examples[boardNames.BEACON] = {
        //     grid = 
        // }
        // this.examples[boardNames.BEACON].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.BEEHIVE].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.BLINKER].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.BLOCK].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.BOAT].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.GLIDER].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.GUN].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.LOAF].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.SPACESHIP].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.GLASSES].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.QUAD].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.TOAD].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // const blockGrid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // const boatGrid = new GameGrid(boardNames.BOAT, 5, 5, 12);
        // const loafGrid = new GameGrid(boardNames.LOAF, 6, 6, 12);
        // const beehiveGrid = new GameGrid(boardNames.BEEHIVE, 6, 5, 12); 
        // const blinkerGrid = new GameGrid(boardNames.BLINKER, 5, 5, 12);
        // const beaconGrid = new GameGrid(boardNames.BEACON, 6, 6, 12);
        // const toadGrid = new GameGrid(boardNames.TOAD, 6, 6, 12);   
        // const gliderGrid = new GameGrid(boardNames.GLIDER, 10, 10, 12);
        // const spaceshipGrid = new GameGrid(boardNames.SPACESHIP, 12, 12, 12);
        // const gunIsOpenUniv = true;
        // const gunGrid = new GameGrid(boardNames.GUN, 40, 20, 12,gunIsOpenUniv);
        
        
  //       let shift = [1,1]
  //       const boatCellsList = createCellsList(boatCoordinates,shift);
  //       // console.log(blockCoordinatesList)
		// const blockCellsList = [[1,1],[1,2],[2,1],[2,2]];
  //       // let shift = [1,1]
  //       const blockCellsList = createCellsList(blockCoordinates,shift);
  //       // let shift = [1,1]
  //       const beehiveCellsList = createCellsList(beehiveCoordinates,shift);
  //       // let shift = [1,1]
  //       const loafCellsList = createCellsList(loafCoordinates,shift);
  //       // let shift = [1,1]
  //       const beaconCellsList = createCellsList(beaconCoordinates,shift);
  //       shift = [2,1]
  //       const blinkerCellsList = createCellsList(blinkerCoordinates,shift);        
		// const toadCellsList = createCellsList(toadCoordinates,shift);        
  //       // shift = [3,3]

  //       const boatCellsList = [[1,1],[1,2],[2,1],[2,3],[3,2]];
		// const loafCellsList = [[2,1],[1,3],[1,2],[2,4],[3,2],[4,3],[3,4]];
		// const beehiveCellsList = [[1,2],[1,3],[2,1],[2,4],[3,2],[3,3]];
		// const blinkerCellsList = [[2,1],[2,2],[2,3]];
		// const beaconCellsList = [[1,1],[1,2],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4]];
		// const toadCellsList = [[2,2],[2,3],[2,4],[3,1],[3,2],[3,3]];
		// const gliderCellsList = [[5,4],[4,3],[3,5],[4,5],[5,5]];
		// const spaceshipCellsList = [[5,3],[7,3],[4,4],[4,5],[4,6],[4,7],[5,7],[6,7],[7,6]];
		// const gunCellsList = [[5,1],[6,1],[5,2],[6,2],[5,11],[6,11],[7,11],[4,12],[8,12],[3,13],[9,13],[3,14],[9,14],
		// [6,15],[4,16],[8,16],[5,17],[6,17],[7,17],[6,18],[3,21],[4,21],[5,21],[3,22],[4,22],[5,22],[2,23],[6,23],[1,25],[2,25],
		// [6,25],[7,25],[3,35],[4,35],[3,36],[4,36]];
		// this.patterns = {};
        // for(let name in names){
        //     this.examples[name].cells = shiftToCenter(coordinates[name], this.examples[name].grid.height,this.examples[name].grid.width)
        // }
        // console.log(this.examples[boardNames.BLOCK].cells)
        // Object.keys(coordinates).forEach(name => {
            // this.examples[boardNames.BLOCK].cells = shiftToCenter(coordinates[boardNames.BLOCK], this.examples[boardNames.BLOCK].grid.height,this.examples[boardNames.BLOCK].grid.width)
        // })
        console.log(this.examples[boardNames.BLOCK])
		this.motionPatternList = [];
		this.rAF = null;

		// this.block = patternBoard(blockGrid, blockCellsList);
		// this.boat = patternBoard(boatGrid, boatCellsList);
		// this.loaf = patternBoard(loafGrid, loafCellsList);
		// this.beehive = patternBoard(beehiveGrid, beehiveCellsList);
		// this.blinker = patternBoard(blinkerGrid, blinkerCellsList);
		// this.beacon = patternBoard(beaconGrid, beaconCellsList);
		// this.toad = patternBoard(toadGrid, toadCellsList);
		// this.glider = patternBoard(gliderGrid, gliderCellsList);
		// this.spaceship = patternBoard(spaceshipGrid, spaceshipCellsList);
		// this.gun = patternBoard(gunGrid, gunCellsList);
  //       this.boards = [
  //           this.block,
  //           this.boat,
  //           this.loaf,
  //           this.beehive,
  //           this.blinker,
  //           this.beacon,
  //           this.toad,
  //           this.glider,
  //           this.spaceship,
  //           this.gun,
  //           ];
		this.interval=300;
	
		this.buttonColor = 'rgba(0, 0, 0, .7)';


        // this.blockWidth = this.getWidth(this.block.grid);
        // this.boatWidth = this.getWidth(this.boat.grid);
        // this.loafWidth = this.getWidth(this.loaf.grid);
        // this.beehiveWidth = this.getWidth(this.beehive.grid);
        // this.blinkerWidth = this.getWidth(this.blinker.grid);
        // this.beaconWidth = this.getWidth(this.beacon.grid);
        // this.toadWidth = this.getWidth(this.toad.grid);
        // this.gliderWidth = this.getWidth(this.glider.grid);
        // this.spaceshipWidth = this.getWidth(this.spaceship.grid);
        // this.gunWidth = this.getWidth(this.gun.grid);
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

            grid.makeBoard(grid.width, grid.height, grid.squareSize, ratio, canvas, cells);
            grid.update();
        }

    	// this.block.grid.makeBoard(this.block.grid.width,this.block.grid.height,this.block.grid.squareSize,this.state.screen.ratio,this.patterns.block,this.block.cellsList,this.state.screen);
     //    this.block.grid.update();
    	// this.boat.grid.makeBoard(this.boat.grid.width,this.boat.grid.height,this.boat.grid.squareSize,this.state.screen.ratio,this.patterns.boat,this.boat.cellsList,this.state.screen);
     //    this.boat.grid.update();
    	// this.loaf.grid.makeBoard(this.loaf.grid.width,this.loaf.grid.height,this.loaf.grid.squareSize,this.state.screen.ratio,this.patterns.loaf,this.loaf.cellsList,this.state.screen);
     //    this.loaf.grid.update();
    	// this.beehive.grid.makeBoard(this.beehive.grid.width,this.beehive.grid.height,this.beehive.grid.squareSize,this.state.screen.ratio,this.patterns.beehive,this.beehive.cellsList,this.state.screen);
     //    this.beehive.grid.update();
     //    this.blinker.grid.makeBoard(this.blinker.grid.width,this.blinker.grid.height,this.blinker.grid.squareSize,this.state.screen.ratio,this.patterns.blinker,this.blinker.cellsList);
     //    this.blinker.grid.update();
    	// this.beacon.grid.makeBoard(this.beacon.grid.width,this.beacon.grid.height,this.beacon.grid.squareSize,this.state.screen.ratio,this.patterns.beacon,this.beacon.cellsList);
     //    this.beacon.grid.update();
    	// this.toad.grid.makeBoard(this.toad.grid.width,this.toad.grid.height,this.toad.grid.squareSize,this.state.screen.ratio,this.patterns.toad,this.toad.cellsList);
     //    this.toad.grid.update();
     //  	this.glider.grid.makeBoard(this.glider.grid.width,this.glider.grid.height,this.glider.grid.squareSize,this.state.screen.ratio,this.patterns.glider,this.glider.cellsList);
     //    this.glider.grid.update();  
     //  	this.spaceship.grid.makeBoard(this.spaceship.grid.width,this.spaceship.grid.height,this.spaceship.grid.squareSize,this.state.screen.ratio,this.patterns.spaceship,this.spaceship.cellsList);
     //    this.spaceship.grid.update();  
        
     //  	this.gun.grid.makeBoard(this.gun.grid.width,this.gun.grid.height,this.gun.grid.squareSize,this.state.screen.ratio,this.patterns.gun,this.gun.cellsList);
     //    this.gun.grid.update();             	       
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
                "<a href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank" title="Cellular automaton">cellular automaton</a>", 
                invented in 1970 by the British mathematician <a href="https://en.wikipedia.org/wiki/John_Horton_Conway" target="_blank" title="John Conway">John Horton Conway</a>. 
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
                            values = {this.examples[boardNames.BLINKER]}
                            width = {this.blinkerWidth}
                            patternName = "Blinker"
                            stopped = {this.props.stopped[this.blinker.grid.name]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.BLINKER].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.BLINKER])}
                        />
    			    </Grid>
    			    
    			    
    			    <Grid item xs> 
                        <BoardElement 
                            values = {this.examples[boardNames.BEACON]}
                            width = {this.beaconWidth}
                            patternName = "Beacon"
                            stopped = {this.props.stopped[this.beacon.grid.name]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.BEACON].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.BEACON])}
                        />                    
    
    			    </Grid>
    			    
    			    <Grid item xs >
                        <BoardElement 
                            values = {this.examples[boardNames.TOAD]}
                            width = {this.toadWidth}
                            patternName = "Toad"
                            stopped = {this.props.stopped[this.toad.grid.name]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.TOAD].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.TOAD])}
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
                            values = {this.examples[boardNames.GLIDER]}
                            width = {this.gliderWidth}
                            patternName = "Glider"
                            stopped = {this.props.stopped[this.glider.grid.name]}
                            buttonColor = {this.buttonColor} 
                            withButton = {true}
                            setCanvas = {el => this.examples[boardNames.GLIDER].canvas = el}
                            handlePlayToggle = {() => this.handlePlayToggle(this.examples[boardNames.GLIDER])}
                        />                    
    			    </Grid>
    			   

    			    <Grid item xs> 
                        <BoardElement 
                            board = {this.examples[boardNames.SPACESHIP]}
                            width = {this.spaceshipWidth}
                            patternName = "Lightweight Spaceship"
                            stopped = {this.props.stopped[this.spaceship.grid.name]}
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
                            values = {this.examples[boardNames.GUN]}
                            patternName = "The Gosper Glider Gun"
                            stopped = {this.props.stopped[this.gun.grid.name]}
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
    	    	mathematician <a href="https://en.wikipedia.org/wiki/John_von_Neumann"  target="_blank" title="John von Neumann">John von Neumann</a>, 
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
