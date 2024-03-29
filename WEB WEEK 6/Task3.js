/*console.log("starting");
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



// anonymous function
window.onload = function(){
    var btn = document. getElementById("btnAdd");
    btn.onclick = function(){
        console.log("handlebindings");
    }
}*/

window.onload = function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = AddToDo;
};
function AddToDo(){
    var myinput = document.getElementById("myinput").value;
    var todos = document.getElementById("todos");
    var newtextnode = document.createTextNode(myinput);
    var newli = document.createElement("li")
    newli.appendChild(newtextnode);
    todos.appendChild(newli);
}
function handleDelete(e){
var tag = e.target;
var li = tag.parentNode;
li.parentNode.removeChild(li);
}

