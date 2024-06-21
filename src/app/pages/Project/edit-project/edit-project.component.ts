import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IDuAn } from '../../../entities/interface/project';
import { INhanVien } from '../../../entities/interface/officer';
import { DuAnService } from '../../../service/project/project.service';
import { OfficerService } from '../../../service/officer/officer.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../homeASS/header/header.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [ToastModule ,FormsModule, CommonModule, HeaderComponent],
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'] ,
  providers:[MessageService]// Corrected to styleUrls
})
export class EditProjectComponent implements OnInit {
  id: number = 0;
  data: IDuAn = <IDuAn>{};
  listNhanVien: INhanVien[] = [];

  constructor(
    private officerService: OfficerService,
    private duAnService: DuAnService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadNhanVien();
    this.loadDuAn();
  }

  loadNhanVien(): void {
    this.officerService.listNhanvien().subscribe(data => {
      this.listNhanVien = data as INhanVien[];
    });
  }

  loadDuAn(): void {
    this.duAnService.list1DuAn(this.id).subscribe(data => {
      this.data = data as IDuAn;
      this.data.member = JSON.parse(this.data.member); // Parse member field if necessary
    });
  }

  edit(): void {
    this.data.member = JSON.stringify(this.data.member); // Convert member field back to JSON string if necessary
    this.duAnService.editDuAn(this.data).subscribe(
      () => {
        this.showSuccess();
        setTimeout(() => this.router.navigate(['/listProject']), 1500);
      },
      (error) => {
        console.error('Error updating project:', error);
      }
    );
}

showSuccess() {
  this.messageService.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Cập nhập dự án thành công.',
  });
}

showError() {
  this.messageService.add({
    severity: 'error',
    summary: 'Error',
    detail: 'Cập nhập dự án thất bại !',
  });
}
}
