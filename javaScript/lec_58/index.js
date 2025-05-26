function outerfunction(){
    let name= "Tuhin"
    function innerfunction(){
        console.log(name);
    }
    return innerfunction();
}
let inner = outerfunction();
console.log(inner)