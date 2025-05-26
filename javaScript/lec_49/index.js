let src ={
    age: 21,
    wt:68,
    ht:180
};

// colone karne ka 1st method
let dest = {...src}; // ... use karne se clone hota hai

console.log("src: ",src)
console.log("dest: ",dest)

//clone karne ka 2nd method
let desti = Object.assign({}, src)
console.log("desti: ",desti) 


//clone karne ka 3rd method
let destination = {};
for(let key in src){
    let newKey = key;
    let newvalue = src[key];
    destination[newKey] = newvalue;
}

console.log("src: ",src)
console.log("desti: ",destination) 