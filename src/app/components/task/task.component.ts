import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task
  @Output() removedTask = new EventEmitter<number>()
  @Output() toggledTask = new EventEmitter<number>()

  handleRemoveTask() {
    this.removedTask.emit(this.task.id)
  }

  handleToggleTask() {
    this.toggledTask.emit(this.task.id)
  }
}
