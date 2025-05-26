saymyname("Tuhin")

function saymyname(name){
    console.log(name)
}

const arr = [
    function(a,b){
        return a+b
    },
    function(a,b){
        return a-b
    },
    function(a,b){
        return a*b
    },
]

let first= arr[0]
let ans= first(5,10)
console.log(ans)

let Second= arr[1]
let ans1= Second(5,10)
console.log(ans1)

let third= arr[2]
let ans2= third(5,10)
console.log(ans2)