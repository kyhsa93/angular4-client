import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})

export class ClientComponent {
    constructor (
        private router: Router,
        private alerts: AlertsService
    ) {}

    /**
     * @type {function} if login data does not exists in sessionStorage navigate login page
     */
    ngOnInit () {
        if (!sessionStorage.getItem('id')) {
            this.alerts.setMessage('Please Login', 'error');
            this.router.navigate(['/login']);
        }
    }
};
