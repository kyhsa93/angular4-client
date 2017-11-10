import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SideMenuComponent } from '../side-menu/index';

@Component({
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {

    private latestTitle: string = '';
    private latestCategory: string = '';
    private latestContent: string = '';
    private postList = [];
    private listIndex: number = 1;

    constructor (
        private router: Router,
        private http: Http,
        private sideMenu: SideMenuComponent
    ) {}

    /**
     * @type {function} if login data does not exists in sessionStorage navigate login page
     */
    ngOnInit () {
        this.http.get('http://localhost:5000/get-post-list/server').
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
                console.log('client component ngOnInit', error);
            });
    }

    writePost () {
      if (sessionStorage.getItem('id')) {
          this.router.navigate(['/write-post', 'server']);
      } else {
          this.router.navigate(['/login']);
      }
    }

    selectPosting(index: number) {
        this.latestTitle = this.postList[index].title;
        this.latestContent = this.postList[index].content;
        this.latestCategory = this.postList[index].category;
    }
};
