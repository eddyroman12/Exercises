// a named function declaration: the most common one
function foo(){
    console.log('Called foo!');//print ('Called foo!')
}

//an anonymous function expression 
var bar =function (){
    console.log('Called bar!');//print ('Called bar!')
}

//an anonymous iife function
(function(){
    console.log('This function is invoked inmediately!');
    //print('This function is invoked inmediately')
})();

//alternate syntax 
(function(){
    console.log('This function is ALSO invoked inmediately!');
    //print ('This function is ALSO invoked inmediately!')
}());//here

