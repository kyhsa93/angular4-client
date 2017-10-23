import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    private loginId: string = '';
    private loginPassword: string = '';

    constructor (
        private http: Http,
        private router: Router,
        private alerts: AlertsService
    ) {}

    /**
     * @type {function} clear session when login data exists in sessionStorage
     */
    ngOnInit () {
        if (sessionStorage.getItem('id')) {
            sessionStorage.clear();
        }
    }

    /**
     * @type {fucntion} login button clicked
     */
    login () {
        var loginData = {
            'loginId': this.loginId,
            'loginPassword': this.loginPassword
        };
        this.http.post('http://localhost:5000/login', loginData).
            subscribe(response => {
                this.alerts.setMessage('Login success','success');
                sessionStorage.setItem('id', this.loginId);
                this.router.navigate(['/home']);
            }, error => {
                this.alerts.setMessage('Login fail', 'error');
                console.log('Login error: ', error);
            });
    }
};
