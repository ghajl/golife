
export function getChangeList(valuesBoard,cellsStateChange,checkList){
   
    let changeList = [];
    // console.log(cellsStateChange.list);
    for(let i=0;i<cellsStateChange.list.length;i++){
        valuesBoard[cellsStateChange.list[i][0]][cellsStateChange.list[i][1]].changeState();
    }
    if(cellsStateChange.isFirst){
        for(let i=0;i<cellsStateChange.list.length;i++){
            checkList[checkList.length] = valuesBoard[cellsStateChange.list[i][0]][cellsStateChange.list[i][1]];
        }      
    }
    checkList = makeUnique(checkList);
    // console.log(checkList.length);
    // if(checkList.length>valuesBoard.length*valuesBoard[0].length/12){
    if(checkList.length>200){        
        
        changeList = boardTotalCheck(valuesBoard)
    } else {

        // checkList = makeUnique(checkList);
        for(let i=0;i<checkList.length;i++){
            if(isGoingToChange(checkList[i])){
                changeList[changeList.length] = [checkList[i].Y,checkList[i].X];
            } 
        }
            
    }
    // console.log(changeList);
    return changeList;  
}


// export function totalLiveCellsRevision(valuesBoard){
//     var changeList = [];
//     for(let i=0,ilen=valuesBoard.length;i<ilen;i++){
//         for(let j=0,jlen=valuesBoard[i].length;j<jlen;j++){
//             if(valuesBoard[i][j].state === 1)changeList[changeList.length] = [i,j];
//         }
//     }
//     return changeList;
// }

export function getLiveCells(valuesBoard){
    const cellList=[];
    for(let i=0,ilen=valuesBoard.length;i<ilen;i++){
        for(let j=0,jlen=valuesBoard[i].length;j<jlen;j++){
            if(valuesBoard[i][j].state === 1) cellList[cellList.length] = [i,j];
        }
    }
    return cellList;
}

export function boardTotalCheck(valuesBoard){
    var changeList = [];
    for(let i=0,ilen=valuesBoard.length;i<ilen;i++){
        for(let j=0,jlen=valuesBoard[i].length;j<jlen;j++){
            // if(valuesBoard[i][j].state === 2)changeList.push([i,j]);
            if(isGoingToChange(valuesBoard[i][j])){
                changeList[changeList.length] = [i,j];
            }
        }
    }
    return changeList;
}

export function isGoingToChange(cell){
    return (cell.state === 1 && (cell.getNeighborsCount() < 2 || cell.getNeighborsCount() > 3)) || 
          (cell.state === 0 && cell.getNeighborsCount() === 3)
    // return (cell.getNeighborsCount() < 2 && cell.state === 2) || 
    //         (cell.getNeighborsCount() > 3 && cell.state === 2) ||
    //         (cell.getNeighborsCount() === 3 && cell.state === 1)
}

export function getNewPatternChangeList(valuesBoard, newPattern){
    var changeList = [];
    for(let i=0,ilen=valuesBoard.length;i<ilen;i++){
        for(let j=0,jlen=valuesBoard[i].length;j<jlen;j++){
            if(valuesBoard[i][j].state === 1){
                const ind = newPattern.indexOf([i,j]);
                ~ind ? newPattern.splice(ind,1) : changeList.push([i,j]);
            }
        }
    }
    newPattern.forEach(x => changeList.push(x));
    return changeList;
}


// export function convertCoordinates(cellList){
//   // var cellList = cellList;
//   let res = {};
//   for(let i=0;i<cellList.length;i++){
//     const currentY = cellList[i][0];
//     const currentX = cellList[i][1];
//     const tableX = Math.floor(currentX/10);
//     const tableY = Math.floor(currentY/10);
//     const X = currentX%10;
//     const Y = currentY%10;
//     const key = [tableY,tableX].join(" ");
    
//     if (typeof res[key] == "undefined"){
//         res[key] = [];
//     }

//     res[key][res[key].length] = [Y,X];    
//   }
//   return res;
// }

export function makeUnique(checkList){
  return checkList.sort((a,b) => {
    if(a.Y > b.Y) return 1;
    else if (a.Y === b.Y){
      if (a.X > b.X) return 1;
      else if (a.X === b.X) return 0;
      else if (a.X < b.X) return -1;
    } else if (a.Y < b.Y) {
      return -1;
    }
  }).filter((c,i,arr) => {
    if(i === 0) return true;
    else {
      if(c.Y === arr[i-1].Y && c.X === arr[i-1].X) return false;  
    }
    return true;
  })

}



// export function getCurrentBoard(valuesBoard,changeCellsList){

// const board = valuesBoard;
//     for(let i=0;i<changeCellsList.length;i++){
//       let Y = changeCellsList[i][0];
//       let X = changeCellsList[i][1];
//       board[Y][X] = board[Y][X] === 1?0:1;
//     }
//   return board;

// }

export function shiftPatternToCenter(pattern,boardHeight,boardWidth){
    const patternSize = getPatternSize(pattern)
    const center = [Math.floor((boardHeight - 1) / 2), Math.floor((boardWidth - 1) / 2)]
    const trans = [Math.floor((patternSize.maxY - patternSize.minY) / 2), Math.floor((patternSize.maxX - patternSize.minX) / 2)]
    // console.log(patternSize)
    // console.log(`${center} ${transX} ${transY}`)
    const result = pattern.map(cell => {
        const y = cell[0] + center[0] - trans[0]
        // console.log(y+ "pat");
        const x = cell[1] + center[1] - trans[1]
        return [y,x];
    });

    return result;
}

export function shiftPattern(pattern,vertShift,horShift){
    return pattern.map(cell => {
        const y = cell[0] + vertShift
        // console.log(y+ "pat");
        const x = cell[1] + horShift
        return [y,x];
    });
}
// export function alterNextGenerationChangeCellsList(nextGenerationChangeCellsList,valuesBoard,clickedCell){
//     console.log(nextGenerationChangeCellsList);
//     const ind = nextGenerationChangeCellsList.indexOf(clickedCell);
//     if(~ind){
//         return clickedCell;
//     } else {

//     }
//     var cellList = nextGenerationChangeCellsList.filter(x => x === clickedCell && valuesBoard[clickedCell[0],clickedCell[1]].state === 1);
//     console.log(cellList);
//     if(cellList.length === nextGenerationChangeCellsList.length) cellList.push(clickedCell);
//     return cellList;
// }

export function getRandomPattern(height,width){
    const min = Math.floor(Math.max(2, height*width*.05));
    const max = Math.floor(Math.max(2, height*width*.2));
    const len = getRandomInt(min, max);
    return Array.from({length: len}, () => [Math.floor(Math.random() * height),Math.floor(Math.random() * width)]);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPatternSize(pattern){
    return pattern.reduce((acc, val, ind) => {
        if(ind === 0){
            acc.minX = acc.maxX = val[1]
            acc.minY = acc.maxY = val[0]
            
        } else {
            acc.minX = val[1] < acc.minX ? val[1] : acc.minX
            acc.maxX = val[1] > acc.maxX ? val[1] : acc.maxX
            acc.minY = val[0] < acc.minY ? val[0] : acc.minY
            acc.maxY = val[0] > acc.maxY ? val[0] : acc.maxY
        }

        return acc
    }, {})
}