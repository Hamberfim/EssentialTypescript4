export class TodoItem {
  /** not needed when using the concise constructor syntax
  public id: number;
  public task: string;
  public complete: boolean = false;

  public constructor(id: number, task: string, complete: boolean) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  } */

  // concise constructor syntax
  public constructor(public id: number, public task: string, public complete: boolean = false) {
    // no statements are required with the concise constructor syntax
  }

  // all methods are considered public unless another access level is used
  printDetails(): void {
    console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
  }
}
