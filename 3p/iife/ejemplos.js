//
// anonymous : echo iife
//
(function (x) { return x; }) (2);

//Segundo ejemplo
(function (x) {
    return function (y) {
        return x*y;
    };
})(2)(3);

//Otro ejemplo
(function hola(){
    console.log(' Hola js mundo...')
    return 0
})()

//Otro ejemplo
(function (x){
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
})(1)(2)(3);

//necesita un nombre si no se utilzan los parentesis ya que estos hacen esa funcion
//ERROR
function (x) {
    return function (y) {
        return x*y;
    };
}

