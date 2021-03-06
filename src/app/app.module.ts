import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './pages/login/index';
import { HomeComponent } from './pages/home/index';
import { MyPageComponent } from './pages/my-page/index';
import { SignUpComponent } from './pages/sign-up/index';
import { WriteContentComponent } from './pages/write-content/index';
import { PageNotFoundComponent } from './pages/page-not-found/index';
import { ConfirmPasswordComponent } from './pages/confirm-password/index';
import { FindAccountComponent } from './pages/find-account/index';

import { NavigationComponent } from './pages/navigation/index';
import { SideMenuComponent } from './pages/side-menu/index';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        MyPageComponent,
        PageNotFoundComponent,
        NavigationComponent,
        SideMenuComponent,
        SignUpComponent,
        WriteContentComponent,
        ConfirmPasswordComponent,
        FindAccountComponent
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
