import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    constructor (
        private router: Router,
        private alerts: AlertsService
    ) {}

    /**
     * @type {function} if login data not exists in sessionStorage navigate login page
     */
    ngOnInit () {
        if (!sessionStorage.getItem('id')) {
            this.alerts.setMessage('Please Login', 'error');
            this.router.navigate(['/login']);
        }
    }

    /**
     * @type {function} logout button clicked
     */
    logout() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
};
