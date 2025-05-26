// fpara.addEventListener('click',changeText);
// fpara.removeEventListener('click',changeText); 
// console.log("Hi")
// let paras = Document.querySelectorAll('p');

function alertpara(event) {
    alert("You Have Clicked On Para: " + event.target.textContent );
} 

for(let i=0;i<paras.length; i++) {
    let para = paras[i];
    para.addEventListener('click', alertpara);
}