import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SideMenuComponent } from '../side-menu/index';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    private latestTitle: string = '';
    private latestCategory: string = '';
    private latestContent: string = '';
    private contentsList = [];
    private contentNumber: string = '0';
    private writerId: string = '';
    private userId: string = sessionStorage.getItem('id');

    constructor (
        private router: Router,
        private http: Http,
        private sideMenu: SideMenuComponent
    ) {}

    /**
    * @type {function}
    */
    ngOnInit () {
        this.changeCategory('home');
    }

    /**
     * @type {fucntion}
     * @param {string} option
     */
    writeContent(option: string) {
        if (!sessionStorage.getItem('id')) {
            this.router.navigate(['/login']);
            return;
        }
        if (option == 'modify') {
            this.router.navigate(['/write-content', this.contentNumber]);
        } else if (option == 'write') {
            this.router.navigate(['/write-content', 'write']);
        }
    }

    /**
     * @type {function}
     * @param {number} index
     */
    selectContent(index: number) {
        this.latestTitle = this.contentsList[index].title;
        this.latestContent = this.contentsList[index].content;
        this.latestCategory = this.contentsList[index].category;
        this.contentNumber = this.contentsList[index].seq;
        this.writerId = this.contentsList[index].id;
    }

    /**
     * @type {function}
     * @param {string} category 
     */
    changeCategory(category: string) {
        this.http.get('http://localhost:5000/get-contents-list/' + category).
        map(response => {
            return response.json();
        }).subscribe(data => {
            this.contentsList = data.sort((a, b) => {
                if (a.seq > b.seq) {
                    return -1;
                }
                if (a.seq < b.seq) {
                    return 1;
                }
                return 0;
            });
            this.selectContent(0);
        }, error => {
            console.log('home component ngOnInit', error);
        });
    }

    /**
     * @type {function}
     * @param {boolean} logoutFlag
     */
    logout(logoutFlag: boolean) {
        if (logoutFlag) {
            this.userId = '';
        }
    }
};
