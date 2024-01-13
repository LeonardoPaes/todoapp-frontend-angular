import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/app.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  newTask: string = ""
  @Output() createdTask = new EventEmitter<string>()

  handleAddTask() {
    this.createdTask.emit(this.newTask)
    this.newTask = ""
  }
}
