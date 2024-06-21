import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDuAn } from '../../entities/interface/project'; // Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class DuAnService {
  private baseUrl: string = 'http://localhost:3000/project';

  constructor(private http: HttpClient) { }

  listDuAn(): Observable<IDuAn[]> {
    return this.http.get<IDuAn[]>(this.baseUrl);
  }

  list1DuAn(id: number): Observable<IDuAn> {
    return this.http.get<IDuAn>(`${this.baseUrl}/${id}`);
  }

  addDuAn(data: IDuAn): Observable<IDuAn> {
    return this.http.post<IDuAn>(this.baseUrl, data);
  }

  deleteDuAn(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  editDuAn(data: IDuAn): Observable<IDuAn> {
    return this.http.put<IDuAn>(`${this.baseUrl}/${data.id}`, data);
  }
}
