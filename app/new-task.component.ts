import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <label for="priority">Task Priority:</label>
    <select name="priority" class="filter" #newPriority>
      <option value="low">Low</option>
      <option value="normal" selected="selected">Normal</option>
      <option value="high">High</option>
    </select>
    <button (click)="addTask(newDescription, newPriority)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<Task>;
  // public prioritySelected: EventEmitter<String>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
    // this.prioritySelected = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement){
    var newTask = new Task(userDescription.value, 0, userPriority.value);
    debugger;
    this.onSubmitNewTask.emit(newTask);
    // this.prioritySelected.emit(userPriority.value);
    userDescription.value = "";
    userPriority.value = "normal";
  }
}
