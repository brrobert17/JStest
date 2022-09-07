function out (any) {console.log(any)}

function showTypes(list) {
  out("show me types :")
  for (const obj of list) {
    out(obj + typeof obj)
  }
}

let arr = [1,2]
out(arr)
arr = [3,4,"hel",null, [5,6], {"firstname" : "rob"}]
out(arr)
showTypes(arr)
