//
//jsc
//
class Robot {
    constructor(name){
        this.name = name;
    };

    speak(){
        console.log('what do you want from me master?');
    };

    makeCoffee(){
        console.log('making coffee....');
    };

    blinkLight(){
        console.log('i feel like a robot');
    };
};

var a = new Robot('aRobot');

