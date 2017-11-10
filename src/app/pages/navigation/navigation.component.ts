import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit{

    private buttonFlag: boolean = false;

    constructor (
        private router: Router,
    ) {}

    ngOnInit () {
        if (sessionStorage.getItem('id')) {
            this.buttonFlag = true;
        } else {
          this.buttonFlag = false;
        }
    }

    /**
     * @type {function} move to client page
     */
    client() {
        this.router.navigate(['/client']);
    }

    /**
     * @type {function} move to server page
     */
    server() {
        this.router.navigate(['/server']);
    }

    /**
     * @type {function} move to database page
     */
    database() {
        this.router.navigate(['/database']);
    }

    /**
     * @type {function} move to home page
     */
    home() {
        this.router.navigate(['/home']);
    }

    /**
     * @type {function} move to mypage
     */
    myPage() {
        this.router.navigate(['/my-page']);
    }

    /**
     * @type {function} logout button clicked
     */
    logout() {
        sessionStorage.clear();
        this.router.navigate(['/home']);
        this.buttonFlag = false;
    }

    login () {
        this.router.navigate(['/login']);
    }
};
