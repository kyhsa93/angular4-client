import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertsModule } from 'angular-alert-module';

import { LoginComponent } from './pages/login/index';
import { HomeComponent } from './pages/home/index';
import { MyPageComponent } from './pages/my-page/index';
import { ClientComponent } from './pages/client/index';
import { ServerComponent } from './pages/server/index';
import { DataBaseComponent } from './pages/database/index';
import { SignUpComponent } from './pages/sign-up/index';
import { PageNotFoundComponent } from './pages/page-not-found/index';

import { NavigationComponent } from './pages/navigation/index';
import { SideMenuComponent } from './pages/side-menu/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyPageComponent,
    ClientComponent,
    ServerComponent,
    DataBaseComponent,
    PageNotFoundComponent,
    NavigationComponent,
    SideMenuComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertsModule.forRoot()
  ],
  providers: [
    SideMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {};
