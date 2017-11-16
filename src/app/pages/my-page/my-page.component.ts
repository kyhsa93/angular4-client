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
    private saveError: boolean = false;

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
        this.http.get('http://localhost:5000/my-page-data/' + sessionStorage.getItem('id')).
            subscribe(data => {
                this.id = data.json()[0].id;
                this.password = data.json()[0].password;
                this.name = data.json()[0].name;
                this.phone = data.json()[0].phone;
                this.date = data.json()[0].sign_up_date;
            }, error => {
                console.log('my page component ngOnInit', error);
            })
    }

    submit () {
        let modifiedData = [
            this.password,
            this.id
        ];

        this.http.post('http://localhost:5000/update-sign-up-data', modifiedData).
            subscribe(response => {
                this.saveError = false;
            }, error => {
                this.saveError = true;
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
