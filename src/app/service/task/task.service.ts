import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../../entities/interface/task'; // Make sure this path is correct based on your project structure

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl: string = 'http://localhost:3000/task';

  constructor(private http: HttpClient) { }

  listTask(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseUrl);
  }

  list1Task(id: number): Observable<ITask> {
    return this.http.get<ITask>(`${this.baseUrl}/${id}`);
  }

  addTask(data: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.baseUrl, data);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  editTask(data: ITask): Observable<ITask> {
    return this.http.put<ITask>(`${this.baseUrl}/${data.id}`, data);
  }
}
