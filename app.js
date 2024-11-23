const txttask = document.getElementById("txttask");
const sub = document.getElementById("sub");
const results = document.getElementById("result");

sub.addEventListener("click",function(e){
    if(txttask.value.length>0){
    e.preventDefault();
    const listItem = document.createElement("li");
    const addItem = document.createElement("span");
    const deletebutton = document.createElement("button");
    const donebutton = document.createElement("button");

    addItem.classList.add("item");
    addItem.innerHTML=txttask.value;
    donebutton.classList.add("done");
    donebutton.innerHTML="done";
    deletebutton.classList.add("del");
    deletebutton.innerHTML="del"; 

    listItem.appendChild(addItem);
    listItem.appendChild(donebutton);
    listItem.appendChild(deletebutton);

    results.appendChild(listItem)

    deletebutton.addEventListener("click",function(){
        results.removeChild(listItem);
    })

    donebutton.addEventListener("click",function(){
        const span = listItem.querySelector(".item");
        span.style.color="#ADFF2F";
        span.style.textDecoration = "line-through";
    })
    txttask.value="";
    txttask.focus();
}else{
    e.preventDefault();
}
     
})