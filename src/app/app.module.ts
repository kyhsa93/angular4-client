import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './pages/login/index';
import { HomeComponent } from './pages/home/index';
import { MyPageComponent } from './pages/my-page/index';
import { ClientComponent } from './pages/client/index';
import { ServerComponent } from './pages/server/index';
import { DataBaseComponent } from './pages/database/index';
import { SignUpComponent } from './pages/sign-up/index';
import { WritePostComponent } from './pages/write-post/index';
import { PageNotFoundComponent } from './pages/page-not-found/index';
import { ConfirmPasswordComponent } from './pages/confirm-password/index';

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
        SignUpComponent,
        WritePostComponent,
        ConfirmPasswordComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        SideMenuComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
