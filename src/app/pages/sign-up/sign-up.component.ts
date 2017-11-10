import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

    private id: string = '';
    private password: string = '';
    private name: string = '';

    constructor (
        private http: Http,
        private router: Router,
        private alerts: AlertsService
    ) {}

    signUp () {
        var signUpData = {
            'id': this.id,
            'password': this.password,
            'name': this.name
        };
        this.http.post('http://localhost:5000/sign-up', signUpData).
            subscribe(response => {
                this.alerts.setMessage('회원가입이 되었습니다.', 'success');
                this.router.navigate(['/login']);
            }, error => {
                this.alerts.setMessage('회원가입에 실패했습니다.', 'error');
            });
    }
};
