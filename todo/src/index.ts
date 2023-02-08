import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Shelly flowers"),
  new TodoItem(2, "Buy new sneakers"),
  new TodoItem(3, "Take Shelly out to dinner"),
  new TodoItem(4, "Finish chapt 5 C# homework", true),
  new TodoItem(5, "Finish chapt 6 C# homework", true),
];
let collection: TodoCollection = new TodoCollection("Anthony", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

todos.forEach((element) => {
  // console.log(JSON.stringify(element));
  element.printDetails();
});

let newId: number = collection.addTodo("Walk the dog");
let todoItem: TodoItem = collection.getTodoById(newId);
todoItem.printDetails();

// collection.addTodo(todoItem);

// console.log(JSON.stringify(todoItem));
