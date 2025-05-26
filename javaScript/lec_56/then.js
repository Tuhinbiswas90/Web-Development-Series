let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Promise resolved")
    }
    else{
        reject("Promise rejected")
    }
});

promise.then((message)=>{
    console.log("Then ka message " + message);
}).catch((error)=>{
    console.log("Error: "+ error)
}).finally((message)=>{
    console.log("Finally ka message " );
});




let promise1= new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First")
});

let promise2= new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second")
});

let promise3= new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"Third")
});

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
});