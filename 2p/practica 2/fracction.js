class Fraction {
    constructor(n, d){
        this.n = n;
        this.d = d;
    };

    euclides(n,d){return d;};

    sum(f){
        var n = this.n + f.n;
        var d = this.d + f.d;
        console.log(n+d);
    };

    rest(f){};

    div(f){};

    mul(f){//validate
        var n = this.n * f.n;
        var d = this.d * f.d;
        //euclides HERE
        return new Fraction(n, d);
    };

};

var f1= new Fraction(4,2);
var f2 = new Fraction(5,4);

console.log(f1.mul(f2).n);