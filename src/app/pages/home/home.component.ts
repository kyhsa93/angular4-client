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
    private postList = [];
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
    writePost (option: string) {
        if (!sessionStorage.getItem('id')) {
            this.router.navigate(['/login']);
            return;
        }
        if (option == 'modify') {
            this.router.navigate(['/write-post', this.contentNumber]);
        } else if (option == 'write') {
            this.router.navigate(['/write-post', 'write']);
        }
    }

    /**
     * @type {function}
     * @param {number} index
     */
    selectPosting(index: number) {
        this.latestTitle = this.postList[index].title;
        this.latestContent = this.postList[index].content;
        this.latestCategory = this.postList[index].category;
        this.contentNumber = this.postList[index].seq;
        this.writerId = this.postList[index].id;
    }

    /**
     * @type {function}
     * @param {string} category 
     */
    changeCategory(category: string) {
        this.http.get('http://localhost:5000/get-post-list/' + category).
        map(response => {
            return response.json();
        }).subscribe(data => {
            this.postList = data.sort((a, b) => {
                if (a.seq > b.seq) {
                    return -1;
                }
                if (a.seq < b.seq) {
                    return 1;
                }
                return 0;
            });
            this.selectPosting(0);
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
