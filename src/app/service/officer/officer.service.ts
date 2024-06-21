import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INhanVien } from '../../entities/interface/officer';// Make sure this path is correct based on your project structure

@Injectable({
  providedIn: 'root'
})
export class OfficerService {
  private baseUrl: string = 'http://localhost:3000/nhan_vien';

  constructor(private http: HttpClient) { }

  listNhanvien(): Observable<INhanVien[]> {
    return this.http.get<INhanVien[]>(this.baseUrl);
  }

  list1Nhanvien(id: number): Observable<INhanVien> {
    return this.http.get<INhanVien>(`${this.baseUrl}/${id}`);
  }

  addNhanvien(data: INhanVien): Observable<INhanVien> {
    return this.http.post<INhanVien>(this.baseUrl, data);
  }

  deleteNhanvien(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  editNhanvien(data: INhanVien): Observable<INhanVien> {
    return this.http.put<INhanVien>(`${this.baseUrl}/${data.id}`, data);
  }
}
