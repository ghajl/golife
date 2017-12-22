import * as actions from '../actions';
import {boardNames} from '../util/boardNames';

describe('actions', () => {
    test('change pattern', () => {
	    const index = 3;
	    const expectedAction = {
		    type: actions.actionTypes.CHANGE_PATTERN,
		    index
	    }
	    expect(actions.changePattern(index)).toEqual(expectedAction)
    });

    test('change board size', () => {
	    const index = 2;
	    const expectedAction = {
		    type: actions.actionTypes.CHANGE_BOARD_SIZE,
		    index
	    }
	    expect(actions.changeBoardSize(index)).toEqual(expectedAction)
    });    

    test('stop generation`s transition', () => {
	    const stopped = true;
	    const boardName = boardNames.BLOCK;
	    const expectedAction = {
		    type: actions.actionTypes.SET_STOPPED,
		    stopped,
		    name: boardName
	    }
	    expect(actions.setStopped(stopped, boardName)).toEqual(expectedAction)
    });      

    test('increment generations counter', () => {
	    const expectedAction = {
		    type: actions.actionTypes.INCREMENT_GENERATION,
	    }
	    expect(actions.incrementGeneration()).toEqual(expectedAction)
    });    

    test('set generation`s transition speed', () => {
    	const fps = 60;
	    const expectedAction = {
		    type: actions.actionTypes.SET_SPEED,
		    fps
	    }
	    expect(actions.setSpeed(fps)).toEqual(expectedAction)
    });  

    test('clear the board - set generation`s counter to zero and remove current pattern label', () => {
	    const expectedAction = {
		    type: actions.actionTypes.SET_CLEAR
	    }
	    expect(actions.setClear()).toEqual(expectedAction)
    });    
})
