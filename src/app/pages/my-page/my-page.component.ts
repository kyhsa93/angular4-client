import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    templateUrl: './my-page.component.html',
    styleUrls: ['./my-page.component.css']
})

export class MyPageComponent implements OnInit{

    private id: string = '';
    private password: string = '';
    private name: string = '';
    private phone: string = '';
    private date: string = '';
    private confirmed: boolean = false;
    private errorMessage: string = '';

    constructor (
        private router: Router,
        private http: Http
    ) {}

    /**
     * @type {function}
     */
    ngOnInit () {
        if (!sessionStorage.getItem('id')) {
            this.router.navigate(['/home']);
            return;
        }
        this.http.get('http://localhost:5000/select-sign-up-data/' + sessionStorage.getItem('id')).
            subscribe(data => {
                this.id = data.json()[0].id;
                this.name = data.json()[0].name;
                this.phone = data.json()[0].phone;
                this.date = data.json()[0].sign_up_date;
            }, error => {
                console.log('my page component ngOnInit', error);
            })
    }

    submit () {
        if (this.password == '') {
            this.errorMessage = 'Password를 입력하세요';
            return;
        }
        if (!this.phone.match(/^010-\d{4}-\d{4}$/)) {
            this.errorMessage = '잘못된 전화번호 입니다.';
            return;
        }
        var modifiedData = [
            this.password,
            this.phone,
            this.id
        ];

        this.http.post('http://localhost:5000/update-sign-up-data', modifiedData).
            subscribe(response => {
                this.errorMessage = '';
                this.router.navigate(['/login']);
            }, error => {
                this.errorMessage = '저장하지 못했습니다.';
                console.log('my page component submit', error);
            });
    }

    confirm (flag: boolean) {
        if (flag == true) {
            this.confirmed = true;
        } else {
            this.confirmed = false;
        }
    }
};
