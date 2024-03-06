

const input = document.querySelector('.input');
const workType = document.querySelector('.select');
const btn = document.querySelector('.btn');

const list = document.querySelector('.box');
// const progress = document.querySelector('.pending');
const completedButton = document.createElement("button"); 


const arr = [
    {
        value: 'Project on React',
        type: "Project"
    },{
        value: 'TIC TAC TOE',
        type: "Home Work"
    },{
        value: 'Async Await in JS',
        type: "Learning"
    }
];

createListItem = (value,type) =>{
    //    --------- FOR TODO LIST ITEM--------------
    const listItem = document.createElement("div");
    listItem.classList.add("listitem");

    //    -------- For WORK and WORK TYPE---------
    const workDiv = document.createElement("div");
    workDiv.classList.add("work");

    const h3 = document.createElement("h3");
    const h6 = document.createElement("h6");

    h3.textContent = value;
    h6.textContent = type;

    workDiv.appendChild(h3);
    workDiv.appendChild(h6);

    //    -------- FOR DELET AND PROGRESS/COMPLETED---------------
    const progressDiv = document.createElement("div");
    progressDiv.classList.add("progress");

    const completedButton = document.createElement("button"); 
    completedButton.classList.add("pending");
    completedButton.textContent = "pending";

    // ---------for DELETE button----------
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");       


    //    ----------- For Trash ICON in delete btn-------------
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can");
    deleteButton.appendChild(trashIcon);

    progressDiv.appendChild(completedButton);
    progressDiv.appendChild(deleteButton);


    listItem.appendChild(workDiv);
    listItem.appendChild(progressDiv); 

    list.appendChild(listItem);



    deleteButton.addEventListener("click", (e) => {
        const listItem = deleteButton.closest('.listitem');
        if (listItem) {
            listItem.remove();
        }
    })

    completedButton.addEventListener("click", () => {
        if (completedButton.textContent === "pending") {
            completedButton.textContent = "completed";
            completedButton.classList.add("completed");
        } else {
            completedButton.textContent = "pending";
            completedButton.classList.remove("completed");
        }
    });
}



btn.addEventListener('click',(e) =>{
    e.preventDefault();

   let value = input.value;
   let type = workType.value;

   if(value != "" && type != ""){
        arr.push({
            value: value,
            type: type
        });
    
       createListItem(value,type);
   }
//    if(value == '' && type != ""){
//     window.alert('Type TODO Work')
//    }
//    if(type == '' && value != '' ){
//     window.alert("Select One from Menu ")
//    }
   else{
    window.alert("Type the details")
   }
   
});

for(item of arr){
    createListItem(item.value,item.type);
}

// flag = true;
// progress.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(flag){
//         progress.classList.add("completed");
//         progress.innerText = "Completed";
//         flag = false;
//     }else{
//         progress.classList.remove("completed");
//         progress.innerText = "Pending";
//         flag = true;
//     }

// })


// console.log(progress)






