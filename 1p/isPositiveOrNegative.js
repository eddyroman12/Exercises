function isPositive(a){
if(a>0)
  return 'Positive'
else
  return 'Negative' 
}

function isNegative(a){
    return !isPositive(a)
}

print(isPositive(parseInt(readline())))
