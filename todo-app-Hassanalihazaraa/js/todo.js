// Your code goes here!


console.log("todo app");

let TODOS = [];

function update(){
    const $todolist = document.querySelector(".todo-list");
    $todolist.innerHTML = "";
    for (const item of TODOS) {
        console.log(item);
        const $li = document.createElement("li");
        if (item.done){
            $li.classList.add("completed");
        }
        $todolist.appendChild($li);

    // toggle button 
    const $toggle = document.createElement('input');
    $toggle.className = 'toggle';
    $toggle.setAttribute("type", "checkbox");
    $li.appendChild($toggle);
    if (item.done){
        $toggle.setAttribute("checked","checked");
    }
    $toggle.addEventListener("change", newToggle.bind(null, item.id));
        $li.appendChild($toggle);

    // label

    const $label = document.createElement("label");
    $label.innerHTML = item.title;
    $li.appendChild($label);

    // delete button
    const $button = document.createElement("button");
    $button.className = "destroy";
    $button.addEventListener("click",removeTodo.bind(null, item.id));
    $li.appendChild($button);
    }
    document.querySelector(".main").style.display = "block";
}


function newToggle(id){
    const todo = TODOS.find(todo => todo.id === id);
    todo.done = !todo.done;
    update();
}


function onNewTodo(e) {
    const title = e.target.value;
    // same as this line
    // const $newTodo = document.querySelector('.new-todo').value;
    console.log(title);
    TODOS.push({
        id: Date.now(),
        title,
        done: true,
    })
    update();
    e.target.value = "";
}



// delete function
function removeTodo(id) {
    TODOS = TODOS.filter(todo => todo.id !== id);
    update();
}


// select the new todo input feild
const $newTodo = document.querySelector('.new-todo');
$newTodo.addEventListener('change', onNewTodo);

