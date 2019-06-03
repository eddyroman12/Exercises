var aDog = {//literal objects
name: 'Benji',
getName: function(){//using functions
return this.name;
},
talk: function(){
    console.log('Woof, Woof!');
}
};

aDog
aDog.talk()