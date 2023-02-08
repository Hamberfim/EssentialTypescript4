import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Shelly flowers"),
  new TodoItem(2, "Buy new sneakers"),
  new TodoItem(3, "Take Shelly out to dinner"),
  new TodoItem(4, "Finish chapt 5 C# homework", true),
  new TodoItem(5, "Finish chapt 6 C# homework", true),
];
let collection: TodoCollection = new TodoCollection("Anthony", todos);

function displayTodoList(): void {
  console.log(`${collection.userName}'s Todo List` + ` (${collection.getItemCounts().incomplete} items to do)`);
  collection.getTodoItems(true).forEach((item) => item.printDetails());
}

// set the available commands from the inquirer promptUser()
enum Commands {
  Quit = "Quit",
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands),
    })
    .then((answers) => {
      if (answers["command"] !== Commands.Quit) {
        promptUser();
      }
    });
}
promptUser();
