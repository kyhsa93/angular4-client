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
    private phone: string = '';
    private errorMessage: string = '';

    constructor (
        private http: Http,
        private router: Router
    ) {}

    signUp () {
        if (this.id == '') {
            this.errorMessage = 'ID를 입력하세요.';
            return;
        }
        if (this.password == '') {
            this.errorMessage = 'Password를 입력하세요';
            return;
        }
        if (this.name == '') {
            this.errorMessage = '이름을 입력하세요.';
            return;
        }
        if (!this.phone.match(/^010-\d{4}-\d{4}$/)) {
            this.errorMessage = '잘못된 전화번호 입니다.';
            return;
        }
        var signUpData = {
            'id': this.id,
            'password': this.password,
            'name': this.name,
            'phone': this.phone
        };
        this.http.post('http://localhost:5000/sign-up', signUpData).
            subscribe(response => {
                this.router.navigate(['/login']);
            }, error => {
                if (error._body == 'existed') {
                    this.errorMessage = '중복된 ID 입니다.'
                    return;
                }
                this.errorMessage = '회원가입에 실패했습니다.';
                console.log('sign up component ngOnInit', error);
            });
    }
};
