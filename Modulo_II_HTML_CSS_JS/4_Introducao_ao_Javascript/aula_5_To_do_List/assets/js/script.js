count = 0

function addListItem() {
    let newTask = document.getElementsByClassName("input-box")[0].value;
    
    if (newTask == "") {
        alert("You haven't typed a new task.");
    } else {
        let newCheckBox = document.createElement("input");
        newCheckBox.type = "checkbox";

        let taskLabel = document.createElement("label");
        taskLabel.appendChild(document.createTextNode(newTask))
        

        let taskContainer = document.createElement("div")
        taskContainer.appendChild(newCheckBox)
        taskContainer.appendChild(taskLabel)


        let toDoList = document.getElementById("to-do-list");
        toDoList.appendChild(taskContainer);
        count++
    }
}

let btnAdd = document.getElementsByClassName("btn")[0];
btnAdd.addEventListener("click", addListItem);





// count = 0

// function addListItem() {
//     var newTask = document.getElementsByClassName("input-box")[0].value;
    
//     if (newTask == "") {
//         alert("You haven't typed a new task.");
//     } else {
//         var newCheckBox = document.createElement("input");
//         newCheckBox.type = "checkbox";

//         var checkBoxText = document.createTextNode(newTask);
        
//         var taskLabel = document.createElement("label")
//         taskLabel.setAttribute("for", "task-" + count) //Cria um id para o label
//         taskLabel.appendChild(newCheckBox)
//         taskLabel.appendChild(checkBoxText)

//         var toDoList = document.getElementById("to-do-list");
//         toDoList.appendChild(taskLabel);
//         count++
//     }
// }

// var btnAdd = document.getElementsByClassName("btn")[0];
// btnAdd.addEventListener("click", addListItem);