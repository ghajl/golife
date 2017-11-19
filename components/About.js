import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
// import injectSheet from 'react-jss';
import YouTube from 'react-youtube';
import GameGrid from '../helpers/GameGrid';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ToggleIcon from 'material-ui-toggle-icon';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import {boardNames} from '../helpers/boardNames'


const styles = {
	mainContent: {
		marginTop: 15
	},
    intro: {
    	// backgroundColor:'rgba(240,248,255,.7)',
    	// padding:5,
   	
    },
    rules: {
    	backgroundColor:'rgba(240,248,255,.7)',
    	
    },
    // rulesPar: {
    // 	marginTop: 20
    // },
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
    '@global iframe': {
    	// width: '100%',
    	// height: '100%',
    },
     icon: {
  //   [theme.breakpoints.up('sm')]: {
  //       width: 25,
  //       height: 25,
  //   },
  //   [theme.breakpoints.up('md')]: {
  //       width: 35,
  //       height: 35,
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //       width: 45,
  //       height: 45,
  //   },
  //       width: 40,
  //       height: 40,

  // }
      width: 25,
      height: 25,

    },
    border: {
		border: '1px solid blue',
    },
        button: {
         // border: '1px solid blue',
         // padding: 0,
         // margin: 0,
         width: 35,
          height: 35,
          },
    video: {
    	// backgroundColor:'rgba(0,0,0,.2)',
    	// // borderRadius: '0 0 5px 5px',
    	// // color: 'white',
    	textAlign: 'center',
    	fontFamily: 'Open Sans', 
        fallbacks:{
            fontFamily: 'sans-serif',
        },
    
    	// padding: 10,
    	// marginBottom: 10,
    		// position: 'absolute',
    		// top:0,
    		// left:0,
	// paddingBottom: '56.25%',
	
	// overflow: 'hidden',
	marginTop:30,
		// width: '100%',
    },
    board: {
    	display: 'flex',
    	// flexDirection: 'column',
    	// justifyContent: 'flex-start',
    	// alignItems: 'center',
    	// flexGrow: 1,
    	// position: 'relative',
    	fontSize: '.7em',
    	textAlign: 'center',
    	fontFamily: 'Open Sans', 
        fallbacks:{
            fontFamily: 'sans-serif',

        },
        '@global span': {
            
        },


    },
    boardsSection: {
//     	display:"flex",
// justifyContent: 'flex-start',
display: 'inline-block',
    	marginTop:30,
    },
    item: {
    	'align-self': 'flex-end',
    }
};





class About extends Component {
	constructor(props){
		super(props);

		const blockCellsList = [[1,1],[1,2],[2,1],[2,2]];
		const boatCellsList = [[1,1],[1,2],[2,1],[2,3],[3,2]];
		const loafCellsList = [[2,1],[1,3],[1,2],[2,4],[3,2],[4,3],[3,4]];
		const beehiveCellsList = [[1,2],[1,3],[2,1],[2,4],[3,2],[3,3]];
		const blinkerCellsList = [[2,1],[2,2],[2,3]];
		const beaconCellsList = [[1,1],[1,2],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4]];
		const toadCellsList = [[2,2],[2,3],[2,4],[3,1],[3,2],[3,3]];
		const gliderCellsList = [[5,4],[4,3],[3,5],[4,5],[5,5]];
		const spaceshipCellsList = [[5,3],[7,3],[4,4],[4,5],[4,6],[4,7],[5,7],[6,7],[7,6]];
		const gunCellsList = [[5,1],[6,1],[5,2],[6,2],[5,11],[6,11],[7,11],[4,12],[8,12],[3,13],[9,13],[3,14],[9,14],
		[6,15],[4,16],[8,16],[5,17],[6,17],[7,17],[6,18],[3,21],[4,21],[5,21],[3,22],[4,22],[5,22],[2,23],[6,23],[1,25],[2,25],
		[6,25],[7,25],[3,35],[4,35],[3,36],[4,36]];
		this.patterns = {};
		// console.log(this.patterns.block)
		const blockGrid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
		const boatGrid = new GameGrid(boardNames.BOAT, 5, 5, 12);
		const loafGrid = new GameGrid(boardNames.LOAF, 6, 6, 12);
		const beehiveGrid = new GameGrid(boardNames.BEEHIVE, 6, 5, 12);	
		const blinkerGrid = new GameGrid(boardNames.BLINKER, 5, 5, 12);
		const beaconGrid = new GameGrid(boardNames.BEACON, 6, 6, 12);
		const toadGrid = new GameGrid(boardNames.TOAD, 6, 6, 12);	
		const gliderGrid = new GameGrid(boardNames.GLIDER, 10, 10, 12);
		const spaceshipGrid = new GameGrid(boardNames.SPACESHIP, 12, 12, 12);
		const gunIsOpenUniv = true;
		const gunGrid = new GameGrid(boardNames.GUN, 40, 20, 12,gunIsOpenUniv);
		this.motionPatternList = [];
		this.rAF = null;

		this.block = patternBoard(blockGrid, blockCellsList);
		this.boat = patternBoard(boatGrid, boatCellsList);
		this.loaf = patternBoard(loafGrid, loafCellsList);
		this.beehive = patternBoard(beehiveGrid, beehiveCellsList);
		this.blinker = patternBoard(blinkerGrid, blinkerCellsList);
		this.beacon = patternBoard(beaconGrid, beaconCellsList);
		this.toad = patternBoard(toadGrid, toadCellsList);
		this.glider = patternBoard(gliderGrid, gliderCellsList);
		this.spaceship = patternBoard(spaceshipGrid, spaceshipCellsList);
		this.gun = patternBoard(gunGrid, gunCellsList);
        this.boards = [
            this.block,
            this.boat,
            this.loaf,
            this.beehive,
            this.blinker,
            this.beacon,
            this.toad,
            this.glider,
            this.spaceship,
            this.gun,
            ];
		this.interval=300;
		// let patternsWidthRelation = blockGrid.width == 5 ? 5/6 : blockGrid.width == 4 ? 4/6 : blockGrid.width == 10 ? 10/12 : 1;
		// let screenScale = 10;
		this.orientationVerical = false;		
        // console.log(props)
		// if(props.screen.width < 900){
		// 	screenScale = 3;
		// }

		// ((width + 1) * squareSize) * ratio;
	
		this.buttonColor = 'rgba(0, 0, 0, .7)';
        this.getWidth = this.getWidth.bind(this);
        // this.createCanvas = this.createCanvas.bind(this);
		this.state = {
			reload:false,
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
                screenScale: window.innerWidth < 900 ? 3 : 10,
            },
		}

        this.blockWidth = this.getWidth(this.block.grid);
         // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
        // this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
        this.boatWidth = this.getWidth(this.boat.grid);
        this.loafWidth = this.getWidth(this.loaf.grid);
        this.beehiveWidth = this.getWidth(this.beehive.grid);
        this.blinkerWidth = this.getWidth(this.blinker.grid);
        this.beaconWidth = this.getWidth(this.beacon.grid);
        this.toadWidth = this.getWidth(this.toad.grid);
        this.gliderWidth = this.getWidth(this.glider.grid);
        this.spaceshipWidth = this.getWidth(this.spaceship.grid);
        this.gunWidth = this.getWidth(this.gun.grid);
        // this.boatWidth = props.screen.width/screenScale * getPatternsWidthRelation(boatGrid.width) * .6;
        // this.loafWidth = props.screen.width/screenScale * getPatternsWidthRelation(loafGrid.width) * .6;
        // this.beehiveWidth = props.screen.width/screenScale * getPatternsWidthRelation(beehiveGrid.width) * .6;
        // this.blinkerWidth = props.screen.width/screenScale * getPatternsWidthRelation(blinkerGrid.width) * .6;
        // this.beaconWidth = props.screen.width/screenScale * getPatternsWidthRelation(beaconGrid.width) * .6;
        // this.toadWidth = props.screen.width/screenScale * getPatternsWidthRelation(toadGrid.width) * .6;
        // this.gliderWidth = props.screen.width/screenScale * getPatternsWidthRelation(gliderGrid.width) * .6;
        // this.spaceshipWidth = props.screen.width/screenScale * getPatternsWidthRelation(spaceshipGrid.width) * .6;
        // this.gunWidth = props.screen.width/screenScale * getPatternsWidthRelation(gunGrid.width) * .6;   
        this.setStopped = (stopped, name) => props.setStopped(stopped, name);
	}

    getWidth(grid){
        let {screen} = this.state;
        let {width, squareSize} = grid;
        // console.log(`${screen} ${screen.screenScale} ${width} ${squareSize}`)
        // console.log((width + 1) * squareSize * screen.width/100 * getPatternsWidthRelation(width))
        let w = ((width + 1) * squareSize * screen.width/100 * .7)/screen.screenScale;
        return w > screen.width * .6 ? screen.width * .6 : w;
    }

    // createCanvas(pattern, canvas) {
    //     this.canvasBoard = canvas;
    //     const ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1
    //     console.log(ratio)
    //     console.log(this.canvasBoard)
    //     this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,null);
    //     this.updateOnce()
    // }

    handlePlayToggle(pattern){
        
        
        if(this.props.stopped[pattern.grid.name]){
            this.start(pattern);
        } else {

            this.stop(pattern);
        }
        // // pattern.stopped = !pattern.stopped;
        // this.setState({reload:!this.state.reload})
    }  

    stop(pattern){
        if(!this.props.stopped[pattern.grid.name]){
            
            // try{
               
                // this.proceed=false;
                this.setStopped(true, pattern.grid.name);
                // pattern.stopped = true;
                // this.stopped = true;
                // this.changeButtonPressedStatus("pause");
                // clearTimeout(this.timeoutID);
                let index = this.motionPatternList.indexOf(pattern);
                this.motionPatternList.splice(index, 1);
                if(this.motionPatternList.length === 0){
                	cancelAnimationFrame(this.rAF);
                }
                
                // this.setState({
                //     tick: null,
                    
                //   }
                // );
                // console.log(this.state.tick);

            // console.log(this.state.tick);
            // } catch(e){
            //     console.log(e.message);
            // }            
        }

    }


    start(pattern){
        if(this.props.stopped[pattern.grid.name]){
            this.setStopped(false, pattern.grid.name);
        	// pattern.stopped = false;
            // console.log("A")
            // this.proceed=true;
            // this.isClearState = false;
            // this.stopped = false;
            // this.changeButtonPressedStatus("start");
            this.motionPatternList.push(pattern);
            this.then = Date.now();
            // if(this.state.drawing){
            //     // this.isManualState = false;
            //     // this.nextGenerationChangeCellsList = totalNeighborsRevision(this.valuesBoard);
            //     // this.nextGeneration.list = totalNeighborsRevision(this.valuesBoard);
            // }
            // this.setState({
            //     drawing:false,
            //     // tick:requestAnimationFrame(() =>{this.update()}),
                
            // });
            // this.mode.drawing=false;
            if(this.motionPatternList.length === 1){
            	this.rAF = requestAnimationFrame(() =>{this.update()});
            }
            
          // console.log("A")            
        }
    }

	update(){
        // if(this.state.stopped){

        //     this.stop();
        // } else {
            // requestAnimationFrame(() =>{this.update()});

             // console.log(this.count++)
            this.now = Date.now();
            this.delta = this.now - this.then;
             
            if (this.delta > this.interval) {
                
                // this.then += this.interval
                this.then = this.now - (this.delta % this.interval);


                this.motionPatternList.forEach(p => p.grid.update())
               
            }  
            // this.setState({
                
            //     tick:requestAnimationFrame(() =>{this.update()}),
                
            // });         
            this.rAF = requestAnimationFrame(() =>{this.update()}); 
        // }

    }

    handleWindowSizeChange = () => {
    	// console.log(this.gun);
		this.gun.grid.handleWindowSizeChange(this.patterns.gun);
    }

    // shouldComponentUpdate(nextProps){
    // 	let screenScale = 10;
    // 	if(this.orientationVerical){
    // 		if(nextProps.screen.width>nextProps.screen.height){
				// if(nextProps.screen.width < 900){
				// 	// console.log("as");
				// 	screenScale = 3;
				// }

				// 	// ((width + 1) * squareSize) * ratio;
				// this.blockWidth = getWidth(this.props.screen, this.block.grid.width, this.block.grid.squareSize, screenScale);
				//  // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
				// // this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
				// this.boatWidth = getWidth(this.props.screen, this.boat.grid.width, this.boat.grid.squareSize, screenScale);
				// this.loafWidth = getWidth(this.props.screen, this.loaf.grid.width, this.loaf.grid.squareSize, screenScale);
				// this.beehiveWidth = getWidth(this.props.screen, this.beehive.grid.width, this.beehive.grid.squareSize, screenScale);
				// this.blinkerWidth = getWidth(this.props.screen, this.blinker.grid.width, this.blinker.grid.squareSize, screenScale);
				// this.beaconWidth = getWidth(this.props.screen, this.beacon.grid.width, this.beacon.grid.squareSize, screenScale);
				// this.toadWidth = getWidth(this.props.screen, this.toad.grid.width, this.toad.grid.squareSize, screenScale);
				// this.gliderWidth = getWidth(this.props.screen, this.glider.grid.width, this.glider.grid.squareSize, screenScale);
				// this.spaceshipWidth = getWidth(this.props.screen, this.spaceship.grid.width, this.spaceship.grid.squareSize, screenScale);
				// this.gunWidth = getWidth(this.props.screen, this.gun.grid.width, this.gun.grid.squareSize, screenScale);
				// // this.setState({reload: !this.state.reload});
				// return true;
    // 		}
    // 	}else {
    // 		if(nextProps.screen.width<nextProps.screen.height){
				// if(nextProps.screen.width < 900){
				// 	// console.log("as");
				// 	screenScale = 3;
				// }

				// 	// ((width + 1) * squareSize) * ratio;
				// this.blockWidth = getWidth(this.props.screen, this.block.grid.width, this.block.grid.squareSize, screenScale);
				//  // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
				// // this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
				// this.boatWidth = getWidth(this.props.screen, this.boat.grid.width, this.boat.grid.squareSize, screenScale);
				// this.loafWidth = getWidth(this.props.screen, this.loaf.grid.width, this.loaf.grid.squareSize, screenScale);
				// this.beehiveWidth = getWidth(this.props.screen, this.beehive.grid.width, this.beehive.grid.squareSize, screenScale);
				// this.blinkerWidth = getWidth(this.props.screen, this.blinker.grid.width, this.blinker.grid.squareSize, screenScale);
				// this.beaconWidth = getWidth(this.props.screen, this.beacon.grid.width, this.beacon.grid.squareSize, screenScale);
				// this.toadWidth = getWidth(this.props.screen, this.toad.grid.width, this.toad.grid.squareSize, screenScale);
				// this.gliderWidth = getWidth(this.props.screen, this.glider.grid.width, this.glider.grid.squareSize, screenScale);
				// this.spaceshipWidth = getWidth(this.props.screen, this.spaceship.grid.width, this.spaceship.grid.squareSize, screenScale);
				// this.gunWidth = getWidth(this.props.screen, this.gun.grid.width, this.gun.grid.squareSize, screenScale);
				// // this.setState({reload: !this.state.reload});
				// return true;
    // 		}    		
    // 	}
    // 	return false;
    // }      n

    componentWillUpdate(){
  //   	let screenScale = 10;
    	
		// if(this.props.screen.width < 700){
		// 	// console.log("as");
		// 	screenScale = 3;
		

		// 	// ((width + 1) * squareSize) * ratio;
		// 	this.blockWidth = getWidth(this.props.screen, this.block.grid.width, this.block.grid.squareSize, screenScale);
		// 	 // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
		// 	// this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
		// 	this.boatWidth = getWidth(this.props.screen, this.boat.grid.width, this.boat.grid.squareSize, screenScale);
		// 	this.loafWidth = getWidth(this.props.screen, this.loaf.grid.width, this.loaf.grid.squareSize, screenScale);
		// 	this.beehiveWidth = getWidth(this.props.screen, this.beehive.grid.width, this.beehive.grid.squareSize, screenScale);
		// 	this.blinkerWidth = getWidth(this.props.screen, this.blinker.grid.width, this.blinker.grid.squareSize, screenScale);
		// 	this.beaconWidth = getWidth(this.props.screen, this.beacon.grid.width, this.beacon.grid.squareSize, screenScale);
		// 	this.toadWidth = getWidth(this.props.screen, this.toad.grid.width, this.toad.grid.squareSize, screenScale);
		// 	this.gliderWidth = getWidth(this.props.screen, this.glider.grid.width, this.glider.grid.squareSize, screenScale);
		// 	this.spaceshipWidth = getWidth(this.props.screen, this.spaceship.grid.width, this.spaceship.grid.squareSize, screenScale);
		// 	this.gunWidth = getWidth(this.props.screen, this.gun.grid.width, this.gun.grid.squareSize, screenScale);
		// 	this.setState({reload: !this.state.reload});
		// }
		this.gunWidth = this.gunWidth > this.state.screen.width * .6 ? this.state.screen.width * .6 : this.gunWidth
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

  componentDidMount() {
  	// console.log(this.patterns.block)
  	// console.log(this.patterns.boat)
    // window.addEventListener('resize', this.handleWindowSizeChange);
    //         this.setState({screen: {
    //             width: window.innerWidth,
    //             height: window.innerHeight,
    //             ratio: window.devicePixelRatio || 1,
    //             screenScale: window.innerWidth < 900 ? 3 : 10,
    //         }
    //     })

        	this.block.grid.makeBoard(this.block.grid.width,this.block.grid.height,this.block.grid.squareSize,this.state.screen.ratio,this.patterns.block,this.block.cellsList,this.state.screen);
            this.block.grid.update();
        	this.boat.grid.makeBoard(this.boat.grid.width,this.boat.grid.height,this.boat.grid.squareSize,this.state.screen.ratio,this.patterns.boat,this.boat.cellsList,this.state.screen);
            this.boat.grid.update();
        	this.loaf.grid.makeBoard(this.loaf.grid.width,this.loaf.grid.height,this.loaf.grid.squareSize,this.state.screen.ratio,this.patterns.loaf,this.loaf.cellsList,this.state.screen);
            this.loaf.grid.update();
        	this.beehive.grid.makeBoard(this.beehive.grid.width,this.beehive.grid.height,this.beehive.grid.squareSize,this.state.screen.ratio,this.patterns.beehive,this.beehive.cellsList,this.state.screen);
            this.beehive.grid.update();
            this.blinker.grid.makeBoard(this.blinker.grid.width,this.blinker.grid.height,this.blinker.grid.squareSize,this.state.screen.ratio,this.patterns.blinker,this.blinker.cellsList);
            this.blinker.grid.update();
        	this.beacon.grid.makeBoard(this.beacon.grid.width,this.beacon.grid.height,this.beacon.grid.squareSize,this.state.screen.ratio,this.patterns.beacon,this.beacon.cellsList);
            this.beacon.grid.update();
        	this.toad.grid.makeBoard(this.toad.grid.width,this.toad.grid.height,this.toad.grid.squareSize,this.state.screen.ratio,this.patterns.toad,this.toad.cellsList);
            this.toad.grid.update();
          	this.glider.grid.makeBoard(this.glider.grid.width,this.glider.grid.height,this.glider.grid.squareSize,this.state.screen.ratio,this.patterns.glider,this.glider.cellsList);
            this.glider.grid.update();  
          	this.spaceship.grid.makeBoard(this.spaceship.grid.width,this.spaceship.grid.height,this.spaceship.grid.squareSize,this.state.screen.ratio,this.patterns.spaceship,this.spaceship.cellsList);
            this.spaceship.grid.update();  
            
          	this.gun.grid.makeBoard(this.gun.grid.width,this.gun.grid.height,this.gun.grid.squareSize,this.state.screen.ratio,this.patterns.gun,this.gun.cellsList);
            this.gun.grid.update();             	       
          }


    componentWillUnmount(){
        
        cancelAnimationFrame(this.rAF);    
        this.setStopped(true, null)
        // this.props.values.speed = this.state.fps;
        // this.props.values.pattern = this.state.patternNamesIndex;
        // this.props.values.patternList = this.state.patternsList;
        // this.props.values.generationCount = this.state.generationCount;
    }


    render() {    
    	// console.log(this.props);
    	const classes = this.props.classes;
    	// console.log(this.gliderWidth);
    	// console.log(this.blockWidth);
	return(
	    <div className={classes.mainContent}>
        
	    <Grid container spacing={0}>
	   
	    <Grid item xs={1} sm={2} > </Grid>
	    
	    <Grid item xs={10}  sm={8} >
	    
	    	<p className={`${classes.intro} ${classes.text}`}>
	    	<strong>The Game of Life</strong>, also known simply as Life, is a cellular automaton devised by the 
	    	British mathematician John Horton Conway in 1970. The "game" is a zero-player game, 
	    	meaning that its evolution is determined by its initial state, 
	    	requiring no further input. One interacts with the Game of Life by creating an initial 
	    	configuration and observing how it evolves, or, for advanced "players", by creating 
	    	patterns with particular properties.
	    	</p>
	    	
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
	    	The universe of the Game of Life is an infinite two-dimensional orthogonal grid 
	    	of square cells, each of which is in one of two possible states, alive or dead, or 
	    	"populated" or "unpopulated". Every cell interacts with its eight neighbours, 
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
	    	Patterns
	    	</h2>
	    	<h4 className={classes.title}>
	    	Still Life
	    	</h4>
	    	<p className={classes.text}>
	    	These are stable patterns that do not change and can be used to build critical solid parts of complex patterns.
	    	</p>
	    	
	    	<Grid container spacing={8} >
	   
			    
			    
			    <Grid item>
			    <div className={classes.board} style={{width:this.blockWidth, height: "100%"}} >
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.block = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
	            <div>
	            Block
	            </div>
	            </div>
	            </div>
			    </Grid>
			    
			    
			    <Grid item >
			    <div className={classes.board}  style={{width:this.boatWidth, height: "100%"}} >
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.boat = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
	            <div>
	            Boat
	            </div>
	            </div>
	            </div>
			    </Grid>
			   
			    
			    <Grid item>
			    <div className={classes.board}  style={{width:this.loafWidth, height: "100%"}} >
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.loaf = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
	            <div>
	            Loaf
	            </div>
	            </div>
	            </div>
			    </Grid>
			    
			    
			    <Grid item>
			    <div className={classes.board}  style={{width:this.beehiveWidth, height: "100%"}} >
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.beehive = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
	            <div>
	            Beehive
	            </div>
	            </div>
	            </div>
	            </Grid>
			   
		    </Grid>
		    
			<h4 className={classes.title}>
		    Oscillators 
		    </h4>
		    <p className={classes.text}>
	    	These patterns are more complex and change over a specific number of ticks. 
	    	They repeat their pattern infinitely. The basic oscillators have periods of two or three ticks, 
	    	but complex oscillators have been discovered with periods of twenty or more ticks. 
	    	These oscillators are very useful for setting off other reactions of bumping stable patterns to set off a chain reaction of instability. 
	    	The most common period-2 oscillators include:
	    	</p>
	    	<div  className={classes.boardsSection} >
	    	<Grid container spacing={8}>
	   
			    
			    <Grid item >
			    <div className={classes.board}  style={{width:this.blinkerWidth, height: "100%"}}>
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.blinker = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
			    <IconButton className={this.props.classes.button} aria-label="Play"  onClick = {() => this.handlePlayToggle(this.blinker)}>
                            <ToggleIcon
                                on={this.props.stopped[this.blinker.grid.name]}
                                onIcon={<PlayArrow className={this.props.classes.icon} />}
                                offIcon={<Pause className={this.props.classes.icon} />}
                                color = {this.buttonColor} 
                              />
                        </IconButton>
                <div>
	            Blinker
	            </div>
	            </div>
	            </div>
			    </Grid>
			    
			    
			    <Grid item> 
			    <div className={classes.board} style={{width:this.beaconWidth, height: "100%"}}>
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.beacon = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
			    <IconButton className={this.props.classes.button} aria-label="Play"  onClick = {() => this.handlePlayToggle(this.beacon)}>
                            <ToggleIcon
                                on={this.props.stopped[this.beacon.grid.name]}
                                onIcon={<PlayArrow className={this.props.classes.icon} />}
                                offIcon={<Pause className={this.props.classes.icon} />}
                                color = {this.buttonColor} 
                              />
                        </IconButton>
                        <div>
	            Beacon
	            </div>
	            </div>
	            </div>
			    </Grid>
			    
			    <Grid item> 
			    <div className={classes.board} style={{width:this.toadWidth, height: "100%"}}>
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.toad = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
			    <IconButton className={this.props.classes.button} aria-label="Play"  onClick = {() => this.handlePlayToggle(this.toad)}>
                            <ToggleIcon
                                on={this.props.stopped[this.toad.grid.name]}
                                onIcon={<PlayArrow className={this.props.classes.icon} />}
                                offIcon={<Pause className={this.props.classes.icon} />}
                                color = {this.buttonColor} 
                              />
                        </IconButton>
                <div>
	            Toad
	            </div>
	            </div>
	            </div>
			    </Grid>
			    
		    </Grid>
		    </div>
			<h4 className={classes.title}>
		    Gliders and Spaceships
		    </h4>
		    <p className={classes.text}>
	    	A spaceship is a pattern that moves, returning to the same configuration but shifted after a finite number of generations. 
	    	The glider is an example of a simple spaceship and its generations each consist of five live cells. 
	    	The glider has a period of four and moves diagonally one cell every four generations.
	    	Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. 
	    	They each move in a straight line.
	    	</p>
	    	<div  className={classes.boardsSection} >
	    	<Grid container spacing={8}>
	   
			    
			    <Grid item > 
			    <div className={classes.board} style={{width:this.gliderWidth, height: "100%"}}>
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.glider = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
	            
	            <IconButton className={this.props.classes.button} aria-label="Play"  onClick = {() => this.handlePlayToggle(this.glider)}>
                            <ToggleIcon
                                on={this.props.stopped[this.glider.grid.name]}
                                onIcon={<PlayArrow className={this.props.classes.icon} />}
                                offIcon={<Pause className={this.props.classes.icon} />}
                                color = {this.buttonColor} 
                              />
                        </IconButton>
                
                <div>
                Glider
				</div>
                </div>
	            </div>
			    </Grid>
			   

			    <Grid item > 
			    <div className={classes.board} style={{width:this.spaceshipWidth, height: "100%"}}>
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.spaceship = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
	            
	            <IconButton className={this.props.classes.button} aria-label="Play"  onClick = {() => this.handlePlayToggle(this.spaceship)}>
                            <ToggleIcon
                                on={this.props.stopped[this.spaceship.grid.name]}
                                onIcon={<PlayArrow className={this.props.classes.icon} />}
                                offIcon={<Pause className={this.props.classes.icon} />}
                                color = {this.buttonColor} 
                              />
                        </IconButton>
                
                <div>
                Lightweight Spaceship
                </div>
                </div>
                </div>
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
			    <div className={classes.board} >
			    <div className={classes.item}>
			    <canvas
	                ref={(canvas) => { this.patterns.gun = canvas}}
	                // onClick={(e) => this.handleClick(e)}
	            />
	            <IconButton className={this.props.classes.button} aria-label="Play"  onClick = {() => this.handlePlayToggle(this.gun)}>
                    <ToggleIcon
                        on={this.props.stopped[this.gun.grid.name]}
                        onIcon={<PlayArrow className={this.props.classes.icon} />}
                        offIcon={<Pause className={this.props.classes.icon} />}
                        color = {this.buttonColor} 
                      />
                </IconButton>
                <div>
	            The Gosper Glider Gun
	            </div>
	            </div>
	            </div>
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
			field of mathematical research, the field of <a href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank" title="Cellular automata">cellular automata</a>
			&nbsp;... Because of Life's analogies with the rise, 
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

function patternBoard(grid,cellsList){
	return {
		grid,
		cellsList,
		// stopped: true,
		
	};
}

function getPatternsWidthRelation(width){
	return width == 5 ? 5/6 : width == 4 ? 4/6 : width == 10 ? 10/12 : 1;
}


// <Grid container spacing={0}>
	   
// 		    <Grid item xs={12} md={3} > 
// 	    	</Grid>
// 	    	<Grid item xs={12} md={6} > 
// 	    	<div className={classes.video}>

// 	    	Fragment from Stephen Hawking`s The Meaning of Life
// 			</div>
// 	    	</Grid>
// 	    	<Grid item xs={12} md={3} > 
// 	    	</Grid>
// 	    	</Grid>