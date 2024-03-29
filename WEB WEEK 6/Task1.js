console.log("starting");
function handlebindings()
{
    console.log("Do binding");
}
function dobindings(){

console.log("do bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handlebindings; //passing function refernce
}
window.onload = dobindings;
console.log("Finished");
//dobindings();