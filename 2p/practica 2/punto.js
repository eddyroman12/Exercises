class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        if(isNaN(x)){
            this.x = 0;
        };
        if(isNaN(y)){
            this.y = 0;
        };

    };

    toString(){
        return "("+this.x+","+this.y+")";
    };
    
    distance(p){
            var d1 =(p.x)-(this.x);
            var d2 =(p.y)-(this.y);
            d1= d1**2
            d2= d2**2
            return Math.sqrt(d1+d2);
    };
    
    clone(){
        return new Point (this.x, this.y);
    };
};

origen = new Point();