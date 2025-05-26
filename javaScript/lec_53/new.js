
function alertpara(event) {
    alert("You Have Clicked On Para: " + event.target.textContent );
}  

// for(let i=0;i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertpara);
// }
let mydiv = Document.getElementById('wrappers');
document.addEventListener('click',alertpara)