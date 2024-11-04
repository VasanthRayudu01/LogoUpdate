import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from 'src/meterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { _MatTabNavBase } from '@angular/material/tabs';
import { TableComponentComponent } from './table-component/table-component.component';
// import { FdashboardComponent } from './fdashboard/fdashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { UpdateComponent } from './update/update.component';
// import { FormGroup } from '@angular/forms';
import { AuthInterceptorServiece } from './service/auth-interceptor.service';
import { ColorPickComponent } from './color-pick/color-pick.component';
import { BackgroundColorDirective } from './background-color.directive';
import { SubjectBehavioralService } from './subject-behavioral.service';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
// import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserListingComponent,
    UpdatepopupComponent,
    TableComponentComponent,
    HeaderComponent,
    SideNavbarComponent,
    AppFooterComponent,
    UpdateComponent,
    ColorPickComponent,
    BackgroundColorDirective,
    SenderComponent,
    RecieverComponent,
    ImageUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  

    ToastrModule.forRoot(),
  ],
  providers: [ SubjectBehavioralService,{provide : HTTP_INTERCEPTORS , useClass : AuthInterceptorServiece , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
