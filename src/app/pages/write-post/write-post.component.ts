import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    templateUrl: './write-post.component.html',
    styleUrls: ['./write-post.component.css']
})

export class WritePostComponent implements OnInit{

    private activatedPage: string = '';
    private title: string = '';
    private category: string = '';
    private content: string = '';
    private saveError: boolean = false;

    constructor (
        private route: ActivatedRoute,
        private http: Http,
        private router: Router
    ) {}

    ngOnInit () {
        this.route.params.subscribe(params => {
            this.activatedPage = params['page'];
        });
    }

    submit () {
        if (!this.category) {
          //카테고리를 선택해 주세요
        } else {
            this
            var postData = [
                this.title,
                this.category,
                this.content
            ];
            this.http.post('http://localhost:5000/write-post', postData).
                subscribe(response => {
                    this.saveError = false;
                    this.router.navigate(['/' + this.category]);
                }, error => {
                    this.saveError = true;
                    console.log('write post component ngOnInit', error);
                });
        }
    }
};
