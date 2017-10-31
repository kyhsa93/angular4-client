import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { Http } from '@angular/http';

@Component({
    templateUrl: './my-page.component.html',
    styleUrls: ['./my-page.component.css']
})

export class MyPageComponent implements OnInit{

    private id: string = '';
    private password: string = '';
    private name: string = '';
    private date: string = '';

    constructor (
        private router: Router,
        private alerts: AlertsService,
        private http: Http
    ) {}

    /**
     * @type {function} if login data does not exists in sessionStorage navigate login page
     */
    ngOnInit () {
        if (!sessionStorage.getItem('id')) {
            this.alerts.setMessage('Please Login', 'error');
            this.router.navigate(['/login']);
            return;
        }
        this.http.get('http://localhost:5000/my-page-data/' + sessionStorage.getItem('id')).
            subscribe(data => {
                this.id = data.json()[0].id;
                this.password = data.json()[0].password;
                this.name = data.json()[0].name;
                this.date = data.json()[0].sign_up_date;
            }, error => {
                this.alerts.setMessage('Fail to load data', 'error');
            })
    }

    submit () {
        let modifiedData = [
            this.password,
            this.id
        ];

        this.http.post('http://localhost:5000/update-sign-up-data', modifiedData).
            subscribe(response => {
                this.alerts.setMessage('Submit success', 'success');
            }, error => {
                this.alerts.setMessage('Submit fail', 'error')
            });
    }
};
