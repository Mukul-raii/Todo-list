import { useState } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../Todo/Todo.module.css"

/* 
*Add delete btn logix
*add checkbox cut the text logic 
as
*/

function Todos(params) {
  const [valueTo, setValueTo] = useState(0);

  function logTodo(params) {
    const form = document.getElementById("inputForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const inputField = document.getElementById("inputTask");
      const inputValue = inputField.value;
      if (!inputValue) {
        return;
      }
      setValueTo((preValue) => preValue + 1);

      addTodo(inputValue, valueTo);
      return inputValue, valueTo;
    });
  }

  const [todo, setTodo] = useState([]);

  function addTodo(inputValue, currentValueTo) {
    setTodo([
      ...todo,
      {
        value: currentValueTo,
        task: inputValue,
        status: false,
      },
    ]);
  }

  function handleDelete(valueToDelete) {
 setTodo(prevTodos => prevTodos.filter(todo => todo.value != valueToDelete))

  }

function toggleTodoStatus(valueToToggle ) {
    setTodo ( prevTodos =>
      prevTodos.map(todo =>
        todo.value === valueToToggle
          ? { ...todo, status: !todo.status }
          : todo
      )
    );

}

  // **************************************************************

  return (
    <div className=" ">
      <div className=" flex flex-col  items-center   h-screen ">
        <div className="w-96  ">
          <form className="flex justify-between  " id="inputForm" action="">
           
            <TextField
              id="inputTask"
              label="Enter a To-do"
              variant="filled"
              autoComplete="off"
              sx={{ marginRight: 2 }} // Added margin to the right using sx prop
              style={{ flex: "1" }} // Make input field take remaining space
            />
            
            <Button
              className=" rounded-md  py-2 rounded-r-md hover:bg-white-900 transition duration-300"
              type="submit"
              onClick={() => {
                logTodo();
              }}
              variant="contained"
            >
              Add Todo
            </Button>
          </form>
        </div>
        <div className="w-screen flex flex-col  items-center justify-center    text-xl">
        {todo.map(function (todo) {
        
            return (
              <div className="w-80 flex items-center justify-between ">
                <FormControlLabel
                className={`text-2lg font-bold p-2  ${todo.status ? 'line-through '  : ''} `}
                  value={todo.value}
                  control={<Radio checked={todo.status} onChange={() => { toggleTodoStatus(todo.value)}}/>}
                 
                  label=<span className="text-2xl w-80">{todo.task}</span>
                />
                <IconButton aria-label="delete" onClick={()=> { handleDelete(todo.value)}}>
                  <DeleteIcon />
                </IconButton>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todos;
