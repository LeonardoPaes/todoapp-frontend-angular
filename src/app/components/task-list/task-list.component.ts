import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/app.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks!: Task[]
  @Output() removedTask = new EventEmitter<number>()
  @Output() toggledTask = new EventEmitter<number>()

  handleRemoveTask(taskId: number) {
    this.removedTask.emit(taskId)
  }

  handleToggleTask(taskId: number) {
    this.toggledTask.emit(taskId)
  }

  getCheckedTasks() {
    return this.tasks.filter(task => task.isChecked !== false).length
  }
}
