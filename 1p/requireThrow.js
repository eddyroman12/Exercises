//
// jsc | online
//
function argRequired(arg){
    if(arg===null)
	throw new Error('arg cannot be null of undefined');
}

print(argRequired());
