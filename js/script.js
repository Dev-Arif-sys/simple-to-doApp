
/*--------- add task---------- */

const inputText= document.getElementById("input-form");
const unList=document.getElementById("uncomplete-list")
document.querySelector(".btn").onclick=()=>{

    if(inputText.value==""){
        alert("please add a task");
    }else{
      
        var listItem=document.createElement("p");
    listItem.innerText= " "+inputText.value ;
    let link= document.createElement("input");
    link.setAttribute("type","checkbox")
    
    listItem.insertBefore(link,listItem.childNodes[0])
   
    unList.appendChild(listItem)
    inputText.value="";
    completeTask(link);
    }

    
}

/*--------- remove from task to be done---------- */
function completeTask(link){
 link.onclick=(e)=>{
     let value=e.target.parentElement.innerText
      addInCompleted(value);
     var parent=e.target.parentElement.parentElement
     parent.removeChild(e.target.parentElement)
     console.log(value)
 }
}

/*--------- add in completed task and deleting by one---------- */
let completedList=document.getElementById("complete-list")
console.log(completedList)
function addInCompleted(text){
   let newItem= document.createElement("p");
   newItem.innerText=text +" ";
   let del= document.createElement("a");
   del.setAttribute("href","#");
   del.setAttribute("title","delete");
   del.innerHTML="<small>x</small>"
   del.classList.add("del");
   newItem.appendChild(del);
   completedList.appendChild(newItem);
   
   
   del.onclick=(e)=>{
      let parent= e.target.parentElement.parentElement
      parent.parentElement.removeChild(parent);
      console.log(parent)
   }
}

/*--------- delelting all items in once---------- */
let dltBtn=document.getElementById("deleteBtn");
dltBtn.onclick=()=>{
completedList.innerHTML="";
}