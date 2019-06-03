function isEven(n){
    if (n%2===0)
      return true
    else
     return false
}

function isOdd(n){
    return !isEven(n)
}
print(isEven(parseInt(readline())))
print(isEven(parseInt(readline())))
print(isOdd(parseInt(readline())))
print(isOdd(parseInt(readline())))