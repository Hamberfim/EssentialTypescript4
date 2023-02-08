import { TodoItem } from "./todoItem";

export class TodoCollection {
  private nextId: number = 1;
  // use generic types in Map so the compiler knows which types are allowed: Map<datatype, datatype>
  private itemMap = new Map<number, TodoItem>();

  // concise constructor syntax
  constructor(public userName: string, todoItems: TodoItem[] = []) {
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    // this.todoItems.push(new TodoItem(this.nextId, task));
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    // return this.todoItems.find((item) => item.id === id);
    return this.itemMap.get(id);
  }

  getTodoItems(includeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete);
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}
