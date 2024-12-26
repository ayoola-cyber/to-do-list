document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("to-do");
    const todoBtn = document.getElementById("button");
    const todoUl = document.getElementById("ulList");

    // function to add todo
    const addTodo = () => {
        const todoText = todoInput.value;

        if (todoText === ""){
            alert("You need to enter a task.")
            return 
        }

        // create a list element
        const todoLi = document.createElement("li");
        todoLi.className = "list";

        const todoSpan = document.createElement("span");
        todoSpan.textContent = todoText;

        // delete button
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            todoLi.style.animation = "fadeOut 0.5s ease-out"
            setTimeout(() => {
                todoUl.removeChild(todoLi)
            }, 500)

            
            // todoUl.removeChild(todoLi); 
        })

        // append todo list into todoUl
        todoLi.appendChild(todoSpan);
        todoLi.appendChild(deleteBtn);

        todoUl.appendChild(todoLi);

        todoInput.value = "";

    }

    todoBtn.addEventListener("click", addTodo);
    todoUl.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            addTodo()
        }
    })
}) 


