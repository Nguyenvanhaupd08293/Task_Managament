import { Routes } from '@angular/router';
import { HomeASSComponent } from './homeASS/home-ass.component';
import { CreateComponent } from './pages/Task/createTask/create.component';
import { PageNotFoundComponent } from './homeASS/page-not-found/page-not-found.component';
import { ListTaskComponent } from './pages/Task/list-task/list-task.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ProjectComponent } from './pages/Project/list_Project/project.component';
import { ListOfficerComponent } from './pages/Officer/list-officer/list-officer.component';
import { CreatProjectComponent } from './pages/Project/creat-project/creat-project.component';
import { EditProjectComponent } from './pages/Project/edit-project/edit-project.component';
import { AuthGuard } from './service/auth.guard';
export const routes: Routes = [
  { path: 'listNhanvien', component: ListOfficerComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: HomeASSComponent, canActivate: [AuthGuard] },
  { path: 'createTask', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'listTask', component: ListTaskComponent, canActivate: [AuthGuard] },
  { path: 'createProject', component: CreatProjectComponent, canActivate: [AuthGuard] },
  { path: 'listProject', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'editProject/:id', component: EditProjectComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

export class AppRoutingModule {}
