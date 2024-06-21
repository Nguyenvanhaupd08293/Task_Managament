import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../homeASS/header/header.component';
import { ITask } from '../../../entities/interface/task';
import { TaskService } from '../../../service/task/task.service';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  list_Task: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.listTask().subscribe(data => {
      this.list_Task = data;
    });
  }

  addTask(newTask: ITask): void {
    this.taskService.addTask(newTask).subscribe(data => {
      this.list_Task.push(data);
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.list_Task = this.list_Task.filter(task => task.id !== id);
    });
  }

  updateTask(updatedTask: ITask): void {
    this.taskService.editTask(updatedTask).subscribe(data => {
      const index = this.list_Task.findIndex(task => task.id === data.id);
      if (index !== -1) {
        this.list_Task[index] = data;
      }
    });
  }
}
