import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { AuthGuard } from './gaurd/auth.guard';
import { TableComponentComponent } from './table-component/table-component.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { ColorPickComponent } from './color-pick/color-pick.component';

const routes: Routes = [
  {path : '',redirectTo :'/login',pathMatch:'full'},
  {path : 'home', component: HomeComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'user' , component : UserListingComponent},
  {path : 'table' , component : TableComponentComponent},
  {path : 'update' , component: UpdatepopupComponent},
  {path : 'color' , component: ColorPickComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
