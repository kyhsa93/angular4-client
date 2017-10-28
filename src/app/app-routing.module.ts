import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from './pages/login/index';
import { HomeComponent } from './pages/home/index';
import { MyPageComponent } from './pages/my-page/index';
import { ClientComponent } from './pages/client/index';
import { ServerComponent } from './pages/server/index';
import { DataBaseComponent } from './pages/database/index';
import { PageNotFoundComponent } from './pages/page-not-found/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'my-page', component: MyPageComponent },
    { path: 'client', component: ClientComponent },
    { path: 'server', component: ServerComponent },
    { path: 'database', component: DataBaseComponent },
    { path: '',   redirectTo: 'login', pathMatch: 'full' },
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
