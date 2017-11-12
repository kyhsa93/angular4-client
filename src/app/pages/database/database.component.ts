import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SideMenuComponent } from '../side-menu/index';

@Component({
    templateUrl: './database.component.html',
    styleUrls: ['./database.component.css']
})

export class DataBaseComponent implements OnInit {

    private latestTitle: string = '';
    private latestCategory: string = '';
    private latestContent: string = '';
    private postList = [];
    private listIndex: number = 1;
    private contentNumber: string = '0';

    constructor (
        private router: Router,
        private http: Http,
        private sideMenu: SideMenuComponent
    ) {}

    /**
     * @type {function} if login data does not exists in sessionStorage navigate login page
     */
    ngOnInit () {
        this.http.get('http://localhost:5000/get-post-list/database').
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
                this.latestTitle = this.postList[0].title;
                this.latestCategory = this.postList[0].category;
                this.latestContent = this.postList[0].content;
            }, error => {
                console.log('database component ngOnInit', error);
            });
    }
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

    selectPosting(index: number) {
        this.latestTitle = this.postList[index].title;
        this.latestContent = this.postList[index].content;
        this.latestCategory = this.postList[index].category;
        this.contentNumber = this.postList[index].seq;
    }
};
