import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    private loginId: string = '';
    private loginPassword: string = '';
    private loginError: boolean = false;

    constructor (
        private http: Http,
        private router: Router,
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
                this.loginError = false;
                sessionStorage.setItem('id', this.loginId);
                this.router.navigate(['/home']);
            }, error => {
                this.loginError = true;
                console.log('Login error: ', error);
            });
    }

    signUp () {
        this.router.navigate(['/sign-up']);
    }
};
