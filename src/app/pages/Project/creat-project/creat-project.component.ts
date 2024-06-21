import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { IDuAn } from '../../../entities/interface/project';
import { INhanVien } from '../../../entities/interface/officer';
import { DuAnService } from '../../../service/project/project.service';
import { OfficerService } from '../../../service/officer/officer.service';
import { HeaderComponent } from '../../../homeASS/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-project',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './creat-project.component.html',
  styleUrls: ['./creat-project.component.css'] // Corrected to styleUrls
})
export class CreatProjectComponent implements OnInit {
  listNhanVien: INhanVien[] = [];

  constructor(
    private officerService: OfficerService, 
    private duAnService: DuAnService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.officerService.listNhanvien().subscribe(data => {
      this.listNhanVien = data as INhanVien[];
    });
  }

  addDuAn(newDuAn: IDuAn): void {
    this.duAnService.addDuAn(newDuAn).subscribe(data => {
      console.log(newDuAn, data);
      alert('Thêm thành công');
      setTimeout(() => this.router.navigate(['/listProject']), 1500);
    }, error => {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi thêm dự án');
    });
  } 
}
