import {actionTypes} from '../actions';
import {boardNames} from '../util/boardNames';
import {reducer} from '../reducer'; 

describe('reducer', () => {
	let initialState = {
		error: false,
		patterns:[],
	    generationCount: -1,   
	    stopped: {
		    [boardNames.MAIN]: true,
		    [boardNames.BLOCK]: true,
		    [boardNames.BOAT]: true,
		    [boardNames.LOAF]: true,
		    [boardNames.BEEHIVE]: true,
		    [boardNames.BLINKER]: true,
		    [boardNames.BEACON]: true,
		    [boardNames.TOAD]: true,
		    [boardNames.GLIDER]: true,
		    [boardNames.SPACESHIP]: true,
		    [boardNames.GUN]: true,
	    },

	    patternNamesIndex:0,
  	    fps: 2,
	    gridSizesIndex:1,
	    cellsList: null, 
	}

	test('LOAD_DATA_SUCCESS', () => {
		let data = [{name: "patternName", pattern: [[0,0], [1,1]]}];
		let action = {
		    type: actionTypes.LOAD_DATA_SUCCESS,
		    data
		}
		let expectedState = {
			error: false,
			patterns: data,
		    generationCount: -1,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },

		    patternNamesIndex:0,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		}
		expect(reducer(initialState, action)).toEqual(expectedState);
	})

	test('CHANGE_PATTERN', () => {
		let index = 3;
		let action = {
		    type: actionTypes.CHANGE_PATTERN,
		    index
		};
		let expectedState = {
			error: false,
			patterns: [],
		    generationCount: -1,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:3,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		}
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	test('CHANGE_BOARD_SIZE', () => {
		let index = 3;
		let action = {
		    type: actionTypes.CHANGE_BOARD_SIZE,
		    index
		};
		let expectedState = {
			error: false,
			patterns: [],
		    generationCount: 0,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:-1,
	  	    fps: 2,
		    gridSizesIndex:3,
		    cellsList: null, 
		}
		expect(reducer(initialState, action)).toEqual(expectedState);
	})		


	test('apply SET_STOPPED to one board', () => {
		let name = boardNames.BLOCK;
		let stopped = false;
		let action = {
		    type: actionTypes.SET_STOPPED,
		    stopped,
		    name
		};
		let expectedState = {
			error: false,
			patterns: [],
		    generationCount: -1,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: false,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:0,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		}
		expect(reducer(initialState, action)).toEqual(expectedState);
	})	

	test('apply SET_STOPPED to all boards', () => {
		let name = null;
		let stopped = null;
		let action = {
		    type: actionTypes.SET_STOPPED,
		    stopped,
		    name
		};
		let state = {
			error: false,
			patterns: [],
		    generationCount: -1,   
		    stopped: {
			    [boardNames.MAIN]: false,
			    [boardNames.BLOCK]: false,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:0,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		}
		let expectedState = {
			error: false,
			patterns: [],
		    generationCount: -1,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:0,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		};
		expect(reducer(state, action)).toEqual(expectedState);
	})	


	test('INCREMENT_GENERATION', () => {
		let action = { type: actionTypes.INCREMENT_GENERATION };
		let state = {
			error: false,
			patterns: [],
		    generationCount: 2,   
		    stopped: {
			    [boardNames.MAIN]: false,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:0,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		}
		let expectedState = {
			error: false,
			patterns: [],
		    generationCount: 3,   
		    stopped: {
			    [boardNames.MAIN]: false,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:0,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		};
		expect(reducer(state, action)).toEqual(expectedState);
	})


	test('SET_SPEED', () => {
		let fps = 40;
		let action = {type: actionTypes.SET_SPEED,
		    fps
		};
		let state = {
			error: false,
			patterns: [],
		    generationCount: 2,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:0,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		}
		let expectedState = {
			error: false,
			patterns: [],
		    generationCount: 2,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:0,
	  	    fps: 40,
		    gridSizesIndex:1,
		    cellsList: null, 
		};
		expect(reducer(state, action)).toEqual(expectedState);
	})


	test('SET_CLEAR', () => {
		let action = {type: actionTypes.SET_CLEAR};
		let state = {
			error: false,
			patterns: [],
		    generationCount: 2,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:2,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		}
		let expectedState = {
			error: false,
			patterns: [],
		    generationCount: -1,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:-1,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		};
		expect(reducer(state, action)).toEqual(expectedState);
	});


	test('SET_GAME_VALUES', () => {
		let cellsList = [[0,1],[1,2]];
		let action = {
		    type: actionTypes.SET_GAME_VALUES,
		    cellsList
		};
		let state = {
			error: false,
			patterns: [],
		    generationCount: 2,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:2,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: null, 
		}
		let expectedState = {
			error: false,
			patterns: [],
		    generationCount: 1,   
		    stopped: {
			    [boardNames.MAIN]: true,
			    [boardNames.BLOCK]: true,
			    [boardNames.BOAT]: true,
			    [boardNames.LOAF]: true,
			    [boardNames.BEEHIVE]: true,
			    [boardNames.BLINKER]: true,
			    [boardNames.BEACON]: true,
			    [boardNames.TOAD]: true,
			    [boardNames.GLIDER]: true,
			    [boardNames.SPACESHIP]: true,
			    [boardNames.GUN]: true,
		    },
		    patternNamesIndex:2,
	  	    fps: 2,
		    gridSizesIndex:1,
		    cellsList: cellsList, 
		};
		expect(reducer(state, action)).toEqual(expectedState);
	});
})