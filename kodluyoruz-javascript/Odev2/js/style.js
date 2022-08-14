const inputDOM = document.querySelector("#task");
const addBtnDOM = document.querySelector("#liveToastBtn");
const listDOM = document.querySelector("#list");
const liDOM = document.querySelector("#list li");
const toastDOM = document.querySelector(".toast")


inputDOM.onkeyup = () =>{
    let userData  = inputDOM.value;
    if(userData.trim() != 0){
        addBtnDOM.classList.add("active");
    }else{
        addBtnDOM.classList.remove("active");
    }
}
showTasks();
addBtnDOM.onclick = ()=>{
    let userData = inputDOM.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
         listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
   }else{
       listArr = JSON.parse(getLocalStorage);
   }
   let newLiTag = '';
   listArr.forEach((element,index) => {
    newLiTag += `<li>${element}<span onclick = "deleteTask(${index})"><i class="fas fa-trash"></i></span> </li> `;
   });
   listDOM.innerHTML = newLiTag;
   inputDOM.value = ''  ;
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);

    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}

listDOM.addEventListener('click',function(item){
    if(item.target.tagName='li'){
        item.target.classList.toggle('checked');
    }
})

if(addBtnDOM){
    addBtnDOM.addEventListener('click',function() {
        let toast = new bootstrap.Toast(toastDOM);
        toast.show();
    })
}