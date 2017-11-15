import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit{

    @Output() category = new EventEmitter();
    @Output() logoutFlag = new EventEmitter();

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
     * @type {function}
     */
    client() {
        this.router.navigate(['/home']);
        this.category.emit('client');
    }

    /**
     * @type {function}
     */
    server() {
        this.router.navigate(['/home']);
        this.category.emit('server');
    }

    /**
     * @type {function}
     */
    database() {
        this.router.navigate(['/home']);
        this.category.emit('database');
    }

    /**
     * @type {function}
     */
    home() {
        this.router.navigate(['/home']);
        this.category.emit('home');
    }

    /**
     * @type {function}
     */
    myPage() {
        this.router.navigate(['/my-page']);
    }

    /**
     * @type {function}
     */
    logout() {
        sessionStorage.clear();
        this.router.navigate(['/home']);
        this.buttonFlag = false;
        this.logoutFlag.emit(true);
    }

    /**
     * @type {function}
     */
    login () {
        this.router.navigate(['/login']);
    }
};
