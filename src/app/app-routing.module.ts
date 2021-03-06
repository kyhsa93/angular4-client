import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from './pages/login/index';
import { SignUpComponent } from './pages/sign-up/index';
import { HomeComponent } from './pages/home/index';
import { MyPageComponent } from './pages/my-page/index';
import { WriteContentComponent } from './pages/write-content/index';
import { FindAccountComponent } from './pages/find-account/index';
import { PageNotFoundComponent } from './pages/page-not-found/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'home', component: HomeComponent },
    { path: 'my-page', component: MyPageComponent },
    { path: 'write-content/:number', component: WriteContentComponent },
    { path: 'find-account', component: FindAccountComponent },
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        // { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {};
