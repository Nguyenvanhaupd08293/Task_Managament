import { Component } from '@angular/core';
import { HeaderComponent } from '../../../homeASS/header/header.component';
import { CommonModule } from '@angular/common';
import { INhanVien} from '../../../entities/interface/officer';
import { OfficerService } from '../../../service/officer/officer.service';
@Component({
  selector: 'app-list-officer',
  standalone: true,
  imports: [CommonModule,HeaderComponent ],
templateUrl: './list-officer.component.html',
  styleUrl: './list-officer.component.css'
})
export class ListOfficerComponent {
list_NhanVien:INhanVien[]=[];
  constructor(private nhanVienService: OfficerService) { }

  ngOnInit(): void {
    this.nhanVienService.listNhanvien().subscribe(data => {
      this.list_NhanVien = data;
    });
  }

  addNhanVien(newNhanVien: INhanVien): void {
    this.nhanVienService.addNhanvien(newNhanVien).subscribe(data => {
      this.list_NhanVien.push(data);
    });
  }

  deleteNhanVien(id: number): void {
    this.nhanVienService.deleteNhanvien(id).subscribe(() => {
      this.list_NhanVien = this.list_NhanVien.filter(duAn => duAn.id !== id);
    });
  }

  updateNhanVien(updatedNhanVien: INhanVien): void {
    this.nhanVienService.editNhanvien(updatedNhanVien).subscribe(data => {
      const index = this.list_NhanVien.findIndex(nhanvien => nhanvien.id === data.id);
      if (index !== -1) {
        this.list_NhanVien[index] = data;
      }
    });
  }
}