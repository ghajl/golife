export default class Cell {
  
    constructor(checkList,Y,X)
    {  
        this.value = 0;
        this._Y=Y;
        this._X=X;
        this.count = 0;
        this.listeners = {};
     
        // this.stateChangelisteners = [];
        // this.neighborsChangeListeners = [];
        // this.changeTable = checkList;
        this.checkList = checkList;
        // console.log(this.checkList.length+"ss");
    }


    set state(val){
        if(val != this.value){
            this.value = val;

            for(let i=0;i<this.listeners["neighborStateChange"].length;i++){
                this.listeners["neighborStateChange"][i](this.value);        
            }

        }
    }

    get state(){
        return this.value;
    }

    get Y(){
        return this._Y;
    }

    get X(){
        return this._X;
    }


    addNeighbor(){
        this.count += 1;
        this.listeners["neighborsChange"][0]();
    } 

    removeNeighbor(){
        this.count -= 1;
        this.listeners["neighborsChange"][0]();
    }

    getNeighborsCount(){
      return this.count;
    }

    changeState(){
      this.value === 0? this.state = 1 : this.state = 0;
    }

    addListeners(type, listeners){
      // if (typeof this.listeners[type] == "undefined"){
      //     this.listeners[type] = [];
      // }

      this.listeners[type] = listeners.slice(0);
      // console.log("x");
    }

    removeListener(type, listener){
      if (Array.isArray(this.listeners[type])){
          var listeners = this.listeners[type];
          for (var i=0, len=listeners.length; i < len; i++){
              if (listeners[i] === listener){
                  listeners.splice(i, 1);
                  break;
              }
          }
      }
    }

    setCheckList(checkList){
      this.checkList = checkList;
    }   

}  