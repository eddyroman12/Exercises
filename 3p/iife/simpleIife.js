//
// : an immediately-invoked function expression (iife) ->
//

var abc = (function() {
    return {
        hello: function hello() {
            return 'Hello, World!';
        }
    };
}())

abc.hello();
