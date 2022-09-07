function out (any) {console.log(any)}
out("hello")

const a = 5
let b = "hello"
var c = null //not allowed

function testScope() {
  let x = "x hello"
  var z = "hello"
    if (x>z) {
      out("inside scope1")
      let a = 4
      var b2 = 5
      if(a<5) {
        let a1 = 10
        var b1 = 15
      }
    }
}

testScope()
out(a)
out(z)
