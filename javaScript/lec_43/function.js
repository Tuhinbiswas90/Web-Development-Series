function sayMyName(){
    console.log("Tuhin Biswas")
}

sayMyName();

function printCounting(){
    for(let i=1;i<=10;i++){
        console.log(i)
    }
}

printCounting();


function PrintAvg(num1,num2){
    let average=(num1 + num2)/2
    console.log("Average: ",average)
}

PrintAvg(50,5)


function PrintSum(num1,num2){
    let Sum=num1 +" " + num2
    return Sum;
}
let ans = PrintSum(50,5)
console.log("Sum is: ",ans)

//function likhne ka new method --- variable function method
let multiplication= function (a,b){
    return a*b;
}
console.log(multiplication(5,6))

//Arrow function method
let Square =  (a,b) => {
    return a**b;
}
console.log(Square(2,10)) 