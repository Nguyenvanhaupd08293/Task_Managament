import { Component } from '@angular/core';
import { HeaderComponent } from '../../../homeASS/header/header.component';
import { CommonModule } from '@angular/common';
import { IDuAn } from '../../../entities/interface/project';
import { DuAnService } from '../../../service/project/project.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ToastModule,RouterLink],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [MessageService]
})
export class ProjectComponent {
  list_Project: IDuAn[] = [];
  data: any;

  constructor(private duAnService: DuAnService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.duAnService.listDuAn().subscribe(data => {
      this.list_Project = data;
    });
  }

  deleteDuAn(id: number | undefined): void {
    if (id === undefined) {
      console.error('Invalid ID:', id);
      return;
    }
    const isDeleteProject = confirm('Bạn có chắc muốn xóa dự án này không?');
    if (!isDeleteProject) return;
    this.duAnService.deleteDuAn(id).subscribe(() => {
      this.list_Project = this.list_Project.filter(
        (duAn) => duAn.id !== id
      );
      this.showSuccess();
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Dự án đã được xoá thành công.',
    });
  }
}
