// async function getData(){

//     setTimeout(function() {
//         console.log("I am inside set Timeout block");
//     },3000);
// }

// getData(); 


///await - ? 

//fetch api


async function getData (){
    // get request --async
    let response= await fetch('https://jsonplaceholder.typicode.com/posts');
    //parse json - async
    let data = await response.json();
    console.log(data);
}

getData();