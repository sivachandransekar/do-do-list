let container=document.querySelector(".child-container");
let inputVal=document.querySelector(".input-val");
let row=document.querySelector(".row");
let val="";
let count=1;
function ConverEl(){
    if(val==""){
    
    let newEl=document.createElement("div");
    let para=document.createElement("p");
    let updateEl=document.createElement("button");
    let deleteEl=document.createElement("button");
    updateEl.innerHTML="Edite";
    deleteEl.innerHTML="Delete";
    para.id=count;
    para.innerHTML=inputVal.value;
    updateEl.addEventListener("click",update)
    deleteEl.addEventListener("click",deleteE)
    newEl.append(para);
    newEl.append(updateEl);
    newEl.append(deleteEl);
    container.append(newEl);
    count++;
    inputVal.value=""
    }
    else{
        console.log(val);
        let setVal=document.getElementById(val).innerHTML=inputVal.value;
        val="";
        inputVal.value=""
    }
}
function update(e){
    let updateValue=e.target.parentNode.children[0].innerHTML;
    let modify=e.target.parentNode.children[0].id;
    val= modify;
    inputVal.value=updateValue;
    console.log(updateValue,modify);
}
function deleteE(e){
    let remove=e.target.parentNode.remove();
}
