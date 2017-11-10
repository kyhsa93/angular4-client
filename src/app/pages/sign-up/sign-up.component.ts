import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

    private id: string = '';
    private password: string = '';
    private name: string = '';
    private signUpError: boolean = false;

    constructor (
        private http: Http,
        private router: Router
    ) {}

    signUp () {
        var signUpData = {
            'id': this.id,
            'password': this.password,
            'name': this.name
        };
        this.http.post('http://localhost:5000/sign-up', signUpData).
            subscribe(response => {
                this.signUpError = false;
                this.router.navigate(['/login']);
            }, error => {
                this.signUpError = true;
                console.log('sign up component ngOnInit', error);
            });
    }
};
