
function snake(){
    this.x=0;
    this.y=0;
    this.alive=1;
    this.color=0;
    this.xspeed=0;
    this.yspeed=0;
    this.size=0;
    this.cells=[];
    this.eat=function(pos){
      var d=dist(this.x,this.y,pos.x,pos.y);
      if(d<1){
        this.size++;
        return true;
      }
      return false;
    }
    this.dir=function(x,y){
        this.xspeed=x;
        this.yspeed=y;
    }
    this.bite=function(ss){
      for(var i=0;i<ss.cells.length;i++){
        var pos=ss.cells[i];
        var d=dist(this.x,this.y,pos.x,pos.y);
        if(d<1){
          this.alive=0;
          break;
        }
      }
    }
    this.update=function(){
      if(this.size==this.cells.length){
        for(var i=0;i<this.cells.length-1;i++){
          this.cells[i]=this.cells[i+1];
        }
      }
      this.cells[this.size-1]=createVector(this.x,this.y);
      this.x=this.x+this.xspeed*scl;
      this.y=this.y+this.yspeed*scl;
      this.x=(this.x+Width)%Width;
      this.y=(this.y+Height)%Height;
    }
    this.show=function(){
      fill(this.color);
      for(var i=0;i<this.cells.length;i++){
        rect(this.cells[i].x,this.cells[i].y,scl,scl);
      }
      rect(this.x,this.y,scl,scl);
    }
  }