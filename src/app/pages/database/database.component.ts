import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
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

    constructor (
        private router: Router,
        private alerts: AlertsService,
        private http: Http,
        private sideMenu: SideMenuComponent
    ) {}

    /**
     * @type {function} if login data does not exists in sessionStorage navigate login page
     */
    ngOnInit () {
        if (!sessionStorage.getItem('id')) {
            this.alerts.setMessage('Please Login', 'error');
            this.router.navigate(['/login']);
        } else {
            this.http.get('http://localhost:5000/get-post-list/database').
                map(response => {
                    return response.json();
                }).subscribe(data => {
                    data.map(item => {
                        item.seq = this.listIndex++;
                    });
                    this.postList = data.reverse();
                    this.latestTitle = this.postList[0].title;
                    this.latestCategory = this.postList[0].category;
                    this.latestContent = this.postList[0].content;
                }, error => {
                    this.alerts.setMessage('Can not load data list', 'error');
                });
        }
    }
    writePost () {
        this.router.navigate(['/write-post', 'database']);
    }

    selectPosting(index: number) {
        this.latestTitle = this.postList[index].title;
        this.latestContent = this.postList[index].content;
        this.latestCategory = this.postList[index].category;
    }
};
