import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component ({
    templateUrl: './find-account.component.html',
    styleUrls: ['./find-account.component.css']
})

export class FindAccountComponent {

    private name: string = '';
    private phone: string = '';
    private id: string = '';
    private password: string = '';
    private findAccountSuccess: boolean = false;
    private errorMessage: string = '';

    constructor (
        private http: Http,
        private router: Router
    ) {}

    submit () {
        var accountData = [
            this.name,
            this.phone
        ];
        this.http.post('http://localhost:5000/find-account', accountData).
            map(response => {
                return response.json();
            }).subscribe(data => {
                this.findAccountSuccess = true;
                this.id = data.id;
                this.password = data.password;
            }, error => {
                this.errorMessage = '계정을 찾을 수 없습니다.'
                console.log('find account error: ', error);
            });
    }
};
