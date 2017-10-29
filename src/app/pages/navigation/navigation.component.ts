import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideMenuComponent } from '../side-menu/index';
import { AlertsService } from 'angular-alert-module';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

    constructor (
        private router: Router,
        private sideMenu: SideMenuComponent,
        private alerts: AlertsService
    ) {}

    /**
     * @type {function} control side menu
     */
    showSideMenu () {
        this.sideMenu.showSideMenu();
    }

    /**
     * @type {function} move to client page
     */
    client() {
        this.router.navigate(['/client']);
    }

    /**
     * @type {function} move to server page
     */
    server() {
        this.router.navigate(['/server']);
    }

    /**
     * @type {function} move to database page
     */
    database() {
        this.router.navigate(['/database']);
    }

    /**
     * @type {function} move to home page
     */
    home() {
        this.router.navigate(['/home']);
    }

    /**
     * @type {function} move to mypage
     */
    myPage() {
        this.router.navigate(['/my-page']);
    }

    /**
     * @type {function} logout button clicked
     */
    logout() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
        this.alerts.setMessage('Logout success','success');
    }
};
