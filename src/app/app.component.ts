import { Component } from '@angular/core';

export interface Task {
  id: number
  value: string
  isChecked: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoapp-frontend-angular';

  tasks:Task[] = []

  addTask(taskName: string) {
    this.tasks.push({
      id: this.tasks.length,
      value: taskName,
      isChecked: false
    })
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
  }

  toggleTask(taskId: number) {
    this.tasks = this.tasks.map((task) => {
      if(task.id === taskId) {
        task.isChecked = !task.isChecked
      } 
      return task
    })

  }
}
