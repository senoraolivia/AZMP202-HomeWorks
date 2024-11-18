document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
    const pendingCount = document.getElementById("pending-count");
  
    let todos = [];
  
    const updatePendingCount = () => {
      const pendingTodos = todos.filter((todo) => !todo.completed).length;
      pendingCount.innerHTML = `You have <span style="color: red;">${pendingTodos}</span> pending todos`;
    };
  
    const renderTodos = (filter = "all") => {
      todoList.innerHTML = "";
      todos.forEach((todo, index) => {
        if (
          (filter === "completed" && !todo.completed) ||
          (filter === "pending" && todo.completed)
        ) {
          return;
        }
  
        const todoItem = document.createElement("div");
        todoItem.className = `todo-item`;
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => {
          todos[index].completed = checkbox.checked;
  
          if (checkbox.checked) {
            todoText.style.textDecoration = "line-through";
            todoText.style.color = "gray";
          } else {
            todoText.style.textDecoration = "none";
            todoText.style.color = "black";
          }
  
          updatePendingCount();
          renderTodos(filter);
        });
  
        const todoText = document.createElement("span");
        todoText.textContent = todo.text;
  
        if (todo.completed) {
          todoText.style.textDecoration = "line-through";
          todoText.style.color = "gray";
        }
  
        const actions = document.createElement("div");
        actions.className = "todo-actions";
  
        const editIcon = document.createElement("i");
        editIcon.className = "fa-solid fa-pen-to-square";
        editIcon.style.color = "#04761b";
        editIcon.style.cursor = "pointer";
        editIcon.addEventListener("click", () => {
          Swal.fire({
            title: "Edit Selected Todo",
            input: "text",
            inputValue: todo.text,
            showCancelButton: true,
            confirmButtonText: "Save",
            cancelButtonText: "Cancel",
            preConfirm: (newValue) => {
              if (!newValue) {
                Swal.showValidationMessage("Todo name cannot be empty!");
                return false;
              }
              return newValue;
            },
          }).then((result) => {
            if (result.isConfirmed) {
              todos[index].text = result.value; 
              renderTodos(filter); 
              Swal.fire("Saved!", "Your changes have been saved.", "success");
            }
          });
        });
  
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-trash";
        deleteIcon.style.color = "#a21606";
        deleteIcon.style.cursor = "pointer";
        deleteIcon.addEventListener("click", () => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              todos.splice(index, 1);
              Swal.fire({
                title: "Deleted!",
                text: "Your todo has been deleted.",
                icon: "success",
              });
              updatePendingCount();
              renderTodos(filter);
            }
          });
        });
  
        actions.append(editIcon, deleteIcon);
        todoItem.append(checkbox, todoText, actions);
        todoList.appendChild(todoItem);
      });
    };
  
    addButton.addEventListener("click", () => {
      const value = input.value.trim();
      if (value) {
        todos.push({ text: value, completed: false });
        input.value = "";
        updatePendingCount();
        renderTodos();
  
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  
    document.getElementById("all-todos").addEventListener("click", () => {
      renderTodos("all");
    });
  
    document.getElementById("completed-todos").addEventListener("click", () => {
      renderTodos("completed");
    });
  
    document.getElementById("pending-todos").addEventListener("click", () => {
      renderTodos("pending");
    });
  
    document.getElementById("clear-all").addEventListener("click", () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          todos = [];
          updatePendingCount();
          renderTodos();
          Swal.fire({
            title: "Deleted!",
            text: "All todos have been cleared.",
            icon: "success",
          });
        }
      });
    });
  
    updatePendingCount();
  });
  